function getUrl(l, t, callback) {
	l = l.replace(/\+/g,'%2B');
	jQuery.ajax({
		type: 'POST',
		url: '/home/vod.do',
		data: {
			l: l,
			t: t
		},
		error: function(html) {
			//alert("강의 보기에 실패하였습니다.");
		},
		success: function(transport) { 
			try {
				callback(transport);
			} catch (e) {}
		}
	});
}

var chkSeek = true; 
var rtmpDomain = 'rtmp://vod3.kocw.net:1935/kocw/_definst_';	
var vcaptionLoc = '';

function setSrcType(player, loc){	
	var sourceType = 'video/mp4';
	if(isDash && loc!=null && loc.indexOf('manifest.mpd') <0){
		loc = loc.replace('vod3.kocw.net/','vod3.kocw.net:1935/kocw/mp4:')
					.replace('kocw.xcache.kinxcdn.com/','kocw.xst.kinxcdn.com/kocw/_definst_/mp4:')
					.replace('kocw-n.xcache.kinxcdn.com/','kocw-n.xst.kinxcdn.com/kocw-n/_definst_/mp4:')
					.replace('koer.xcache.kinxcdn.com/','koer.xst.kinxcdn.com/koer/_definst_/mp4:');  
		loc = loc.replace('.mp4','.mp4/manifest.mpd');
		sourceType = 'application/dash+xml';
	}	 
	
	player.src({
		src: loc,
		type: sourceType
	});
}


function doReady(playerId, loc, rate, ctime, isStart, captionUrl){
	
	pRate = rate;
	
	try{
 
		videojs(playerId).ready(function() {
			var myPlayer = this;	     
			var isReady = true;
			chkSeek = true;  

			setSrcType(myPlayer,loc);
			
			if(isStart){
				myPlayer.play();
			}
			
			try{
				var oldTracks = this.remoteTextTracks();
				var i = oldTracks.length;
				while(i--){
					this.removeRemoteTextTrack(oldTracks[i]);
				}				
							
				if(isNaN(captionUrl) && (captionUrl.indexOf("srt")>0 || captionUrl.indexOf("vtt")>0)){
					this.addRemoteTextTrack({
						kind: "subtitle",
						label: "caption",
						src: captionUrl,
						default: true
					});
				}
			}catch(e){
				console.log(e);
			}

			myPlayer.on("play", function() {   
				if (isReady &&  isLoadPageH5) {  
					f_contents_download(vCousrseId, vLectureId, downType);  
					isReady = false;
					isLoadPageH5 = false;
				}
				if(isLoadPage){
					isLoadPage = false;
				}				
				f_getPlayTime();
				if(pRate!=1.0 && (navigator.userAgent.toLowerCase().indexOf('msie') > -1 || navigator.userAgent.toLowerCase().indexOf('trident') > -1)){  
					setTimeout(function(){myPlayer.playbackRate(pRate)},500);
				}
			});

			myPlayer.on("loadeddata", function() {
				if(ctime<1 && !isClip && chkSeek){ 
					ctime = f_seekPrePosition(vLectureId,function(t){ 
						if (t > 5 ) { 
							setTimeout(function(){myPlayer.currentTime(t)},300);
						}  
					});  
				}       	

				/*
				myPlayer.playbackRate(rate);				
				if( navigator.userAgent.toLowerCase().indexOf('msie') > -1 || navigator.userAgent.toLowerCase().indexOf('trident') > -1 ){  
					setTimeout(function(){myPlayer.playbackRate(1.0)},500);
					setTimeout(function(){myPlayer.playbackRate(rate)},1000);
				}
				*/
				
				saveCurrentTime();
				f_getPlayTime();
			});

			myPlayer.on("pause", function() {
				if (myPlayer.currentTime() > 30) {
					setCurrentTime(myPlayer.currentTime());
				}
				f_keepCurrentTime();     
			});
		});

	}catch(e){
		console.log(e);
	}

	try{
		videojs('h5player').volume(0.5);		
	} catch (e) {
		if( navigator.userAgent.toLowerCase().indexOf('msie') > -1 || navigator.userAgent.toLowerCase().indexOf('trident') > -1 ){
			alert('html5를 지원하지 않습니다\n 인터넷 익스플로러의 호환성 보기 설정에 kocw.net를 추가해 보세요');
		}
	}
	
	return videojs(playerId);
}


function initFplayer(firstLocation, firstCaptionUrl) { 
	getUrl(firstLocation, 'f', function(vu) { 
		doInitFplayer(vu, firstCaptionUrl);
	});
}

function getStreamingSrc(loc){
	if(loc.indexOf('[2]')==0 || loc.indexOf('2]')==0){
		firstLocation	= 'kocwadmin_keris3/'+loc.replace('[2]','').replace('2]','');  //
		return loc.replace('//','/'); 
	}else{
		return loc;
	}	
}


function doInitFplayer(firstLocation, firstCaptionUrl) {   
	
	if(firstLocation.indexOf('[2]')==0 || firstLocation.indexOf('2]')==0){
		rtmpDomain = 'rtmp://vod3.kocw.net:1935/kocw/_definst_';
		firstLocation	= firstLocation.replace('[2]','').replace('2]','');
		firstLocation = firstLocation.replace('//','/'); 
	}
	if(firstLocation.indexOf('[3]')==0 || firstLocation.indexOf('3]')==0){
		rtmpDomain = 'rtmp://kocw.xst.kinxcdn.com/kocw/_definst_';
		firstLocation	= firstLocation.replace('[3]','').replace('3]','');
		firstLocation = firstLocation.replace('//','/'); 
	}
	if(firstLocation.indexOf('[4]')==0 || firstLocation.indexOf('4]')==0){
		rtmpDomain = 'rtmp://kocw-n.xst.kinxcdn.com/kocw-n/_definst_';
		firstLocation	= firstLocation.replace('[4]','').replace('4]','');
		firstLocation = firstLocation.replace('//','/'); 
	}

	jQuery("#fPlayer").show();

	$f("fPlayer", "/home/common/js/flowplayer/flowplayer-3.2.18.swf", {
		log: {
			level: 'debug',
			filter: 'org.flowplayer.slowmotion.*'
		},

		clip: {
			url: 'mp4:'+firstLocation,
			captionUrl: firstCaptionUrl,
			autoPlay: true,
			autoBuffering: true,
			scaling: 'fit',
			provider: 'rtmp', 	// pseudo
			onStart: function() {
				$f().getPlugin("captions").hideButton();
				f_initVod();  
			},
			onResume: function() {
				f_onResume();
			},
			onBeforeStop: function() {
				setCurrentTime(this.getTime());
			},
			onBeforePause: function() {
				setCurrentTime(this.getTime());
			},
			onBeforeUnload: function() {
				setCurrentTime(this.getTime());

			},
			onSeek: function() {
				if (isLoadSeek) {
					isLoadSeek = false;
				} else {
					isLoadPageResume = false;
				}

			},
			onLastSecond: function() {
				setCurrentTime(0);
				prePositionSec = 0;
			}
		},
		plugins: {
			//inBufferSeek:true,	

			captions: {
				url: "/home/common/js/flowplayer/flowplayer.captions-3.2.10.swf",

				// pointer to a content plugin (see below)
				captionTarget: 'content',
				button: {
					width: 1,
					height: 0,
					bottom: 0
				}
			},

			content: {
				url: "/home/common/js/flowplayer/flowplayer.content-3.2.9.swf",
				bottom: 25,
				height: 40,
				backgroundColor: 'transparent',
				backgroundGradient: 'none',
				border: 0,
				textDecoration: 'outline',
				style: {
					body: {
						fontSize: 14,
						fontFamily: 'Arial',
						textAlign: 'center',
						color: '#ffffff'
					}
				}
			},
			pseudo: {
				url: "/home/common/js/flowplayer/flowplayer.pseudostreaming-3.2.13.swf",
			},	
			rtmp: {
				url: "/home/common/js/flowplayer/flowplayer.rtmp-3.2.13.swf",
				netConnectionUrl: rtmpDomain
			}
		},
		onError: function(errorCode, errorMessage) {
			this.unload();        	
			if(errorCode==200 || errorCode==201){
				$('#fPlayer').html('<div style="text-align: center; font-size: 12px;background: #343434;color: #fdfdfd; line-height: 435px;">동영상을 재생할 수 없습니다. 배속 기능을 이용해 보세요.</div>');  
				/*initH5player();                 
                 if(isLid){
                 	 h_play(currentVUrl, seekTime, no);
                 }else{
                 	 getUrl(currentVUrl, 'v', function(vu) {
                          h_play(vu, seekTime, no);
                      });
                 }*/
			}
		}
	});

}



function initH5player(captionUrl) {  
	var str = '<video id="h5player" class="video-js vjs-default-skin" style="overflow:visible" controls preload="auto" width="800" height="435" data-setup="{}" oncontextmenu="return false;" controlsList="nodownload"><p class="vjs-no-js">To view this video please enable JavaScript</p></video>';

	try {
		if (playerState == 'flash' && !isMd) {
			$f().stop();
			//$('#hPlayer').html(str);	
		}
		if (isMd) { 
			vcaptionLoc = captionUrl;
			getUrl(currentVUrl, 'm', function(vu) {
//				videojs('h5player').src(vu);   
				doReady('h5player',vu,'1.0',0,false, vcaptionLoc);
			}); 

		}
	} catch (e) {}

//	$('#h5player').bind('contextmenu', function() {
//	return false;
//	});

	$("#fPlayer").hide();
	$('#hPlayer').show();

	playerState = 'html5';

}

function f_setRate(no) {	

	if (playerState == 'flash' && no == '1.0') {
		return false;
	} else {
		var isPlaying = false;
		var seekTime = 0;

		if (playerState == 'flash') { 
			/*if(!isMd){
                alert('배속 기능 실행을 위해 플레이어를 변경합니다.'); 
			}*/
			if ($f().getState() == 3) {
				isPlaying = true;
			}
			seekTime = $f().getTime();  
			$f().stop();
			initH5player();

			if(isLid){
				h_play(currentVUrl, seekTime, no);
			}else{
				getUrl(currentVUrl, 'v', function(vu) {
					h_play(vu, seekTime, no);
				});
			}

		} else {
			videojs('h5player').playbackRate(no);
			// todo
			if(isClip){
				var ctime = videojs('h5player').currentTime();   
				if(ctime < endTime){
					getUrl(currentVUrl, 'm', function(vu) {
						f_initClip(ctime,endTime,no,vu);
					});
				}
			}
			pRate = no;
		}
	}
}


function h_play(loc, ctime, rate, captionUrl) {  
	//if(videojs('h5player') == null) {	 initH5player();	} 
	//videojs('h5player').pause();	

	if(loc.indexOf('http://')==-1 && loc.indexOf('.mp4') > 0){
//		loc = 'http://vod.kocw.net/keris/'+loc;
		
		if(loc.indexOf('[2]')==0 || loc.indexOf('2]')==0){
			loc = loc.replace('[2]','').replace('2]','');
			if(loc.indexOf('/')==0){
				loc = loc.substring(1);
			}
			loc = 'http://vod3.kocw.net/media/'+loc;
		}else if(loc.indexOf('[3]')==0 || loc.indexOf('3]')==0){
			loc = loc.replace('[3]','').replace('3]','');
			if(loc.indexOf('/')==0){
				loc = loc.substring(1);
			}
			loc = 'http://kocw-n.xcache.kinxcdn.com/'+loc;
		}else if(loc.indexOf('[5]')==0 || loc.indexOf('5]')==0){
			loc = loc.replace('[5]','').replace('5]','');
			if(loc.indexOf('/')==0){
				loc = loc.substring(1);
			}
			loc = 'http://koer.xcache.kinxcdn.com/'+loc;
		}		
	}

//	videojs('h5player').src(loc);	
	var player = doReady('h5player',loc,rate,ctime,true, captionUrl);  

}

/** 동영상 play **/
function do_f_play(location, courseId, lectureId, cId, title, isPlay, captionUrl, deviceType) { 
	if (isLoadPage) isLoadPage = false;

	currentVUrl = location;

	// 차시제목 클릭 시
	f_add_css(cId); // 색상 변경

	if (deviceType == 'm') {
		getUrl(location, 'm', function(vu) {
			h_play(vu, 0, '1.0',captionUrl);						// url
		});
		$('#selectX').val('1.0');
	} else {
		if (playerState != 'flash') {
			videojs('h5player').pause();
			//$('#hPlayer').empty();			
			$("#hPlayer").hide();
			$('#fPlayer').show();
			playerState = 'flash';

			getUrl(location, 'f', function(vu) {
				doInitFplayer(vu, captionUrl);
			});

		}

		$('#selectX').val('1.0');

		// 재생중지 및 url셋팅
		f_stopVideo();

		// 재생시작
		getUrl(location, 'f', function(vu) {
			f_playVideo(vu, lectureId, captionUrl);
		});

	}

	//이전차시, 다음차시 셋팅
	f_playSet(isPlay);

	// 플레이어에 차시제목 셋팅
	$('.vodInfo').html(title);

	// 다운로드 통계 인서트
	//f_contents_download(courseId, lectureId, 11);
	if (deviceType == 'm') {
		f_contents_download(courseId, lectureId, 22);
	}else{
		f_contents_download(courseId, lectureId, 21);
	}

	$('.clipPos1').hide();
	$('.clipPos2').hide();
}

function f_playVideo(location, lectureId, captionUrl) {
	
	var domainStr = 'rtmp://vod3.kocw.net:1935/kocw/_definst_';
	
	if(location.indexOf('[2]')==0 || location.indexOf('2]')==0){
		domainStr = 'rtmp://vod3.kocw.net:1935/kocw/_definst_';
	}
	if(location.indexOf('[3]')==0 || location.indexOf('3]')==0){
		domainStr = 'rtmp://kocw.xst.kinxcdn.com/kocw/_definst_';
	}
	if(location.indexOf('[4]')==0 || location.indexOf('4]')==0){
		domainStr = 'rtmp://kocw-n.xst.kinxcdn.com/kocw-n/_definst_';
	}
	
	if(domainStr!=rtmpDomain){	
		doInitFplayer(location, '');
	}
	
	/*
	$f().reset({
		rtmp: {
			url: "/home/common/js/flowplayer/flowplayer.rtmp-3.2.13.swf",
			netConnectionUrl: rtmpDomain
		}
	});
	*/

//	location = getStreamingSrc(location);
	if(location.indexOf('[2]')==0 || location.indexOf('2]')==0 || location.indexOf('[3]')==0 || location.indexOf('3]')==0){
		location	= location.replace('[2]','').replace('2]','').replace('[3]','').replace('3]','');
		location = location.replace('//','/'); 
	}
	
	vLectureId = lectureId;
	prePositionSec = f_seekPrePosition(lectureId);
	
	$f().setClip({
		url: "mp4:" + location,
		//url: location,
		autoplay: true
	});

	$f().getPlugin("captions").hideButton();
	$f().getPlugin("captions").loadCaptions(0, captionUrl);
	$f().play();

}

function f_stopVideo() {
	if (playerState == 'flash') {
		$f().stop();
	}
	prePositionSec = 0;
}

function f_initVod() {

	if (isLoadPage) {
		$f().pause();
		isLoadPage = false;
	} else {
		if (prePositionSec > 10 && isMd == false) {
			f_seek(prePositionSec);
		}
		isLoadPageResume = false;
	}
	saveCurrentTime();
}

function f_onResume() { 
	if (isLoadPageResume) {
		var sec = f_seekPrePosition(vLectureId);
		if (sec != null && sec > limitContinueSec && isMd == false) {
			f_seek(sec);
		}
		//f_loadSignup();    

		try{
			if (isMd) {
				contentType=22;
			}else{
				contentType=21;
			}
			f_contents_download(vCousrseId, vLectureId, contentType);   
		}catch(e){}     

		isLoadPageResume = false;
	}
	saveCurrentTime();
}

function f_seek(sec) {
	var f_seek_cnt = 0;

	if (f_seek_cnt < 3) {
		if (playerState == 'flash') {
			if ($f().getState() == 3) {
				$f().seek(sec);
				f_seek_cnt = 0;
			} else if ($f().getState() == 4) {
				$f().seek(sec).resume();
				f_seek_cnt = 0;
			} else {
				f_seek_cnt++;
				setTimeout("f_seek(" + sec + ")", 300);
			}
		}
	} else {
		//alert('이어보기 기능 실행 중 오류가 발생했습니다. ');
	}
}

function f_seekPrePosition(lectureId, callback) {

	var ptime = getCookie('kocwVPosition_' + lectureId) * 1;

	if (ptime != null && ptime > limitContinueSec) { // 본 적이 있는 경우					
		var answer = confirm('전에 보았던 강의입니다. [' + parseTime(ptime) + ']부터 이어서 보시겠습니까?');
		if (answer == true) {
//			return ptime;
		} else {
			ptime = 0;
			setTimeCookie('kocwVPosition_' + lectureId, 0, 1); // 취소 선택시 재생정보 삭제
		}
	} else {
		ptime = 0;
	}

	try{
		callback(ptime);
	} catch (e) {}
	chkSeek = false;
	return ptime;
}

function saveCurrentTime() {
	var ctime = -1;
	if (playerState == 'flash') {
		if ($f().getState() == 3) {
			ctime = $f().getTime();
		}
	} else {
		if (!videojs('h5player').paused()) {
			ctime = videojs('h5player').currentTime();
		}
	}

	if (ctime > 0) {
		setCurrentTime(ctime);
		tid = setTimeout(saveCurrentTime, 10000);
	} else if (ctime == 0) {
		tid = setTimeout(saveCurrentTime, 20000); // buffering
	} else {
		clearTimeout(tid);
	}
}

function setCurrentTime(ctime) {
	if (isLoadPage == false && ctime > limitContinueSec) {
		setTimeCookie('kocwVPosition_' + vLectureId, ctime - 5, 30); // 30일
	}
}

function setTimeCookie(name, value, expiredays) {
	var todayDate = new Date();
	todayDate.setDate(todayDate.getDate() + expiredays);
	document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";";
}


var isClipFin = false;

//강의클립 재생
function f_initClip(stime,etime,rate,loc){ 
	endTime = etime; 		//배속변경시

//	videojs('h5player').src(loc);	
	setSrcType(videojs('h5player'),loc);  

	videojs('h5player').ready(function() {
		var myPlayer = this;
		myPlayer.on("loadeddata", function() { 
			if(isClip){    
				myPlayer.currentTime(stime);
				// css deco
				var pnClipS = ( 100 * stime / myPlayer.duration()).toFixed();
				var pnClipE = 100 - ( 100 * etime / myPlayer.duration()).toFixed();
				if((pnClipS+pnClipE)>=100){
					pnClipE = pnClipE-1;
				}
				if(pnClipE<0){
					pnClipE = 0;
				}
				$('.vjs-play-progress').after('<div class="clipPos1" style="left: '+pnClipS+'%;"></div><div class="clipPos2" style="right: '+pnClipE+'%;"></div>');
				isClip = false;
			}
		});

		myPlayer.play();	 	
		myPlayer.on("play", function() { 			
			if(myPlayer.currentTime()<endTime){
				if(isClip){   
					myPlayer.currentTime(stime);
					myPlayer.playbackRate(rate); 
				}
				
				isClipFin = false;
				f_timeupdateEv(endTime);
			}
		});

	});
}


function f_replayClip(stime){
	videojs('h5player').ready(function() {
		var myPlayer = this;
		myPlayer.currentTime(stime);
		myPlayer.play();
		isClipFin = false;
		f_timeupdateEv(endTime);
	});		
}


function f_timeupdateEv(){
	if(vid==null){
		vid =document.getElementById("h5player_html5_api");
	}
	
	var f_setPause = function(){
		if(Math.floor(this.currentTime) >= endTime){
			if(!isClipFin){
				this.pause();
				isClipFin = true;
			}
			vid.removeEventListener("timeupdate",f_setPause);
		}
	};

	vid.addEventListener("timeupdate",f_setPause);

}
