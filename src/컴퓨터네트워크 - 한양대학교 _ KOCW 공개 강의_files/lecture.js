

var ie6 = false;
var ie7 = false;
var ff = false;

/**
 * 브라우저 버전 확인
**/
if(navigator.appName.indexOf("Microsoft") > -1 ){
	// 익스플로러이면 버전 6인지 확인
	if( navigator.appVersion.indexOf("MSIE 6") > -1){
		ie6 = true;
	// 익스 플로러이면 버전 7인지 확인
	}else if(navigator.appVersion.indexOf("MSIE 7") > -1){
		ie7 = true;
	}
} else {
	ff = true;
}


 function findPosY(obj) {
	var curtop = 0;
	if (obj.offsetParent) {
		while (obj.offsetParent) {
			curtop += obj.offsetTop;
			obj = obj.offsetParent;
		}
	}
	else if (obj.y)
		curtop += obj.y;
	return curtop;
 }

 function findPosX(obj) {
	var curleft = 0;
	if (obj.offsetParent) {
		while (obj.offsetParent) {
			curleft += obj.offsetLeft;
			obj = obj.offsetParent;
		}
	}
	else if (obj.x)
		curleft += obj.x;
	return curleft;
 }


 /** 강의보기 팝업
 function f_openLecture(courseId, lectureId, accessDevice, isMobileVideo){

	var	url = "/home/search/viewService.do?courseId="+courseId+"&lectureId="+lectureId+"&ad="+accessDevice+"&imv="+isMobileVideo;
	//var name = "lecturePop";

	if(accessDevice == "md"){					// mobile device
		window.open(url);
	}else{
		var win = window.open(url,"_blank","resizable=yes,scrollbars=no,width=1040,height=640");
		win.focus();
	}

	// f_closeLecturePop(1);
 }**/
 
    /** 연계강의 차시보기 **/
	function f_openLecture(location,courseId,lectureId,contentType,cId,ogUrl){
		
		if(location.indexOf('[embed]')==0){
			locationHtml = location.substring(location.indexOf('[embed]')+7);
			$("#embedArea").html(locationHtml);
			$("#embedArea").show();
		}else if(location.indexOf('[emb]')==0){
			locationHtml = location.substring(location.indexOf('[emb]')+5);
			$("#embedArea").html(locationHtml);
			$("#embedArea").show();
		}else{
			window.open(location,'_blank'); 
		}

		f_contents_download(courseId,lectureId,contentType);
		
		 try{ 
			 f_add_css(cId);
			 ga('send', 'pageview', '/home/search/searchDetailView.do?cid='+courseId+'t=openlecture'); 
		}catch(e){}		
		
	}   
	
	
	
 function f_openLecture2(prm){

		var lectureId = prm;
		var	url = "/home/search/viewService.do?lectureId="+lectureId;
		var name = "lecturePop";

		var win = window.open(url,name,"resizable=yes,scrollbars=no,width=1040,height=640");

	    win.focus();

	   // f_closeLecturePop(1);

	    }


 /** 강의차시 가져오기**/
 function f_getLectures(obj,kemId,flag){

	jQuery.ajax({
		type: "POST",
		url: "/home/special/lectures.do",
		data: "kemId=" + kemId,
		error : function(html){
		alert("강의 정보를 가져올 수 없습니다.");
		},
		success : function(msg){
			try{
				var lectureObj = eval("(" + msg + ")");
				if( lectureObj[0]["lectures"].length  > 1){
					f_viewLectures(obj, lectureObj, kemId, flag);  // 차시가 1개 이상
				}else if( lectureObj[0]["lectures"].length  == 1){
					var lecture = lectureObj[0]["lectures"][0];  //차시가 1개
					var lectureId = lecture['id'];
						f_openLecture2(lectureId);
				}else{
					    f_openLecture2(kemId);   // 차시가 없는 경우
				}
		    }
			catch (e) {
				location.href = "/home/search/kemView.do?kemId="  + kemId;
			}

		}
	});
}

 /** 강의보기 레이어**/
 function f_viewLectures(obj, lectureObj, kemId, flag){

		if(flag == 1){
			var container = document.getElementById('lecture_layer');
		}else{
			var container = document.getElementById('lecture_layer2');
		}

		if (container.style.display == 'block') {
		      return true;
		  }

		var verticalPositionValue = findPosY(obj) + obj.offsetHeight-1;
		var verticalPosition = 'top: ' + verticalPositionValue + 'px;';
		var horizontalPosition = 'left: '+ findPosX(obj)+ 'px;';

		var numLectures = lectureObj[0]["lectures"].length;

		var html = [];

		html.push('<dl class="view_cont">');
		html.push('<dd class="tit clearfix">');
		if (numLectures > 0) {
		html.push('<strong><span>강의리스트(총');
		html.push(numLectures);
		html.push('개)</span></strong>');
		html.push('<a href="#" onClick="f_closeLecturePop(');
		html.push(flag);
		html.push('); return false;"><img src="/home/images/common/close_btn.gif" alt="close"/></a>');
		html.push('</dd>');
		html.push('<dd class="cont">');
		if(numLectures < 11){
		html.push('<div class="view_cont_scroll_box">');
		}else{
		html.push('<div class="view_cont_scroll_box2">');
		}
		html.push('<ul class="view_list">');

		if (numLectures > 0) {
			for (var i = 0; i < numLectures; i++) {
				var lecture = lectureObj[0]["lectures"][i];
				var index = i + 1;

				var loc ='"'+lecture['location']+'"';
				var lectureId = lecture['id'];
				var errmsgTypeCode = lecture['errmsgTypeCode'];
				var msg = "강의바로보기";
				var fulltitle = lecture['title'];
				var title = lecture['title'];
					if (title.length > 24) {
						title = title.substring(0, 24) + '...';
					 }
					 html.push('<li><span id="lecture');
					 html.push(index);
					 html.push('" style="background-color:#EA6408; color:#FFFFFF">');
					 html.push(index);
					 html.push('</span>');
				if(loc.indexOf("http://") > 0){
				html.push('<a  href="#Redirect" ');
				html.push(' title="'+fulltitle + '" ');
				html.push(' onClick = "f_openLecture2(');
				html.push(lectureId);
				html.push(');"');
				html.push('>');
				 var title = lecture['title'];
					if (title.length > 17) {
						title = title.substring(0, 17) + '...';
					}
				html.push(title);
				html.push('</a></li>');
				}else{
					html.push('<a');
					html.push(' title="'+fulltitle + '" ');
					html.push('>');
					 var title = lecture['title'];
						if (title.length > 17) {
							title = title.substring(0, 17) + '...';
						}
					html.push(title);
					html.push('</a></li>');

				}
			  }
			 }

		    html.push('</ul></div></dd></dl>');
			container.innerHTML = html.join('');

			container.style.display = 'block';
			container.style.top = verticalPositionValue + 'px';
			container.style.left = (findPosX(obj) - container.offsetWidth + obj.offsetWidth) + 'px';
			container.style.height = 'auto';
			container.style.visibility = 'visible';
		}
	}

 /** 강의보기 close**/
 function f_closeLecturePop(flag) {

	 if(flag == 1){
 			var container = document.getElementById('lecture_layer');
 	  }else{
 			var container = document.getElementById('lecture_layer2');
 	  }

 	 container.innerHTML = '';
 	 container.style.display = 'none';
 }


  /** 강의차시 가져오기 2 **/
 function f_getLectures2(obj,kemId,flag){

	jQuery.ajax({
		type: "POST",
		url: "/home/special/lectures.do",
		data: "kemId=" + kemId,
		error : function(html){
			alert("강의 정보를 가져올 수 없습니다.");
		},
		success : function(msg){
			try{
				var lectureObj = eval("(" + msg + ")");
				if( lectureObj[0]["lectures"].length  > 0){
					f_viewLectures2(obj, lectureObj, kemId, flag);  // 차시가 1개 이상
//				}else if( lectureObj[0]["lectures"].length  == 1){
//					var lecture = lectureObj[0]["lectures"][0];  //차시가 1개
//					var lectureId = lecture['id'];
//						f_openLecture2(lectureId);
				}else{
//					    f_openLecture2(kemId);   // 차시가 없는 경우 TODO
				}
		    }
			catch (e) {
//				location.href = "/home/search/kemView.do?kemId="  + kemId;
			}
		}
	});
 }

  /** 차시보기 **/
  function f_openLectureDir(location,courseId,lectureId,mime_type){

		var ct = mime_type;

		/*
		if(mime_type.indexOf("video")==0){ct=1;}
		else if(mime_type.indexOf("audio")==0){ct=2;}
		else if(mime_type.indexOf("application")==0 || mime_type.indexOf("text")==0){ct=3;}
		else if(mime_type.indexOf("vidimageseo")==0){ct=4;}
		else{ct=5;}
		*/
		ct=1;   // web

		window.open(location,'_blank');

		jQuery.ajax({
		      type: "POST",
			  url: "/home/search/updateContentDown.do",
			  data: {courseId : courseId ,
			 	 	 lectureId : lectureId ,
			 	 	 contentType : ct
			        },
			  error : function(html){
			  },
			  success : function(transport){
			         if(transport == "success"){
		             }else{
		             }
		      }
		 });

  }


 /** 강의보기 레이어**/
 function f_viewLectures2(obj, lectureObj, kemId, flag){

		if(flag == 1){
			var container = jQuery(obj).parent().parent().parent().find('#lecture_layer');
		}else{
			var container = document.getElementById('lecture_layer2');
		}

		var html = [];
		var numLectures = lectureObj[0]["lectures"].length;

		if (numLectures > 0) {
			for (var i = 0; i < numLectures; i++) {
				var lecture = lectureObj[0]["lectures"][i];
				var index = i + 1;

				var loc = lecture['location']+'';
				var lectureId = lecture['id'];
				var errmsgTypeCode = lecture['errmsgTypeCode'];
				var msg = "강의바로보기";
				var fulltitle = lecture['title'];
				var title = lecture['title'];
				var mime_type = lecture['mimeType']; 	 
//				if (title.length > 20) {
//					title = title.substring(0, 20) + '...';
//				 }
				 html.push('<li style="width: 190px;text-overflow: ellipsis;overflow: hidden;white-space:nowrap;"><nobr><strong>');
				 html.push(index);
				 html.push('</strong>');
				 if(loc.indexOf("[vod]") > -1 || loc.indexOf(".mp4") > -1 || loc.indexOf("[embed]") > -1 || loc.indexOf("[emb]") > -1){
					html.push('<a  href="/home/search/kemView.do?kemId='+kemId+'&lid='+lectureId+'" ');
					html.push(' title="'+fulltitle + '" ');
					html.push('>');
					html.push(title);
					html.push('</a></nobr></li>');

				}else if(loc.indexOf("http") > -1){
					html.push('<a  href="javascript:f_openLectureDir(\''+loc+'\','+kemId+','+lectureId+',\''+mime_type+'\'); void(0)" ');
					html.push(' title="'+fulltitle + '" ');
					html.push('>');
					html.push(title);
					html.push('</a></nobr></li>');

				}else{
					html.push('<a');
					html.push(' title="'+fulltitle + '" ');
					html.push('>');
					html.push(title);
					html.push('</a></nobr></li>');

				}
			 }

		}

		jQuery(obj).parent().parent().parent().find('#lnum').html(numLectures+'회차');
		jQuery(obj).parent().parent().parent().find('#lectureList').html(html.join(''));

		//$('.lectureListWrap').each(function(){ alert($(this).html())});
		$('.lectureListWrap').hide();
		//container.css('display','block');
		container.show();
		container.css({ 'z-index' : '999' });
		$('dl.listWrap').css({ position : 'static' })
		$("#lecture_layer").parent().parent().parent().css({ position : 'relative' })
	}

 /** 강의보기 close**/
 function f_closeLecturePop2(flag) {

	 if(flag == 1){
 			var container = document.getElementById('lecture_layer');
 	  }else{
 			var container = document.getElementById('lecture_layer2');
 	  }

 	 container.innerHTML = '';
 	 container.style.display = 'none';
 }

 jQuery(document).ready(function() {
	$("#lecture_layer .closeLecture").click(function(j){
		j.preventDefault();
		$('.lectureListWrap').hide();
	});

 });


 /** 강의차시 가져오기 3 -- 오류접수 리스트 **/
 function f_getLectures3(kemId,flag){

	jQuery.ajax({
		type: "POST",
		url: "/home/special/lectures.do",
		data: "kemId=" + kemId,
		error : function(html){
			alert("강의 정보를 가져올 수 없습니다.");
		},
		success : function(msg){
			try{
				var lectureObj = eval("(" + msg + ")");
				 if( lectureObj[0]["lectures"].length  > 0){
					f_viewLectures3(lectureObj,kemId, flag);  // 차시가 1개 이상
				 }else{
					 f_error_request(kemId);  // 차시가 없는 경우
				 }
		    }
			catch (e) {alert(e);
//				location.href = "/home/search/kemView.do?kemId="  + kemId;
			}

		}
	});
}

 /** 강의보기 레이어 3  -- 오류접수 리스트 ****/
 function f_viewLectures3(lectureObj,kemId,flag){

	 var container = jQuery('#lecture_layer');
	// alert(container.html());

	 var html = [];
	 var numLectures = lectureObj[0]["lectures"].length;

		if (numLectures > 0) {
			for (var i = 0; i < numLectures; i++) {
				var lecture = lectureObj[0]["lectures"][i];
				var index = i + 1;

				var loc = lecture['location']+'';
				var lectureId = lecture['id'];
				var errmsgTypeCode = lecture['errmsgTypeCode'];
				var msg = "강의바로보기";
				var fulltitle = lecture['title'];
				var title = lecture['title'];

				 html.push('<li style="width: 190px;text-overflow: ellipsis;overflow: hidden;white-space:nowrap;"><nobr><strong>');
				 html.push(index);
				 html.push('</strong>');
				 html.push('<a');
				 html.push(' href="#Redirect" onclick="f_error_request('+lectureId+')" title="'+fulltitle+'" ');
				 html.push('>');
				 html.push(title);
				 html.push('</a></nobr></li>');
			 }

		}

		jQuery('.stit').css({ 'font-weight' : 'bold' });
		jQuery('.stit').html('오류접수');
		jQuery('.num').css({ 'background' : 'url()'});
		jQuery('.num').css({ 'padding-left' : '0px'});
		jQuery('.num').html('(차시를 선택 하세요)');
		//alert(html);
		//jQuery(obj).parent().parent().parent().find('#lectureList').html(html.join(''));
		jQuery('.lectureList').html(html.join(''));
		container.show();
		container.css({ 'z-index' : '999' });
		//container.css({position : 'relative'});


	}

/** 강의담기 **/
function f_mylistCount(obj,kemId,flag)  {

	 sw=570;
	 sh=255;

	 ml=(screen.availWidth-sw)/2;
	 mt=(screen.availHeight-sh)/2;

	 var popWin = window.open('/home/mylist/createMylist.do?kemId='+kemId,'mkcol', 'status=no,menubar=no,resizable=no,scrollbars=no,toolbar=no,menubar=no, location=no,width='+sw+',height='+sh+',top='+mt+',left='+ml);
	 if(popWin==null){
		 alert("차단된 팝업창을 허용해 주십시오.");
	 }

//	jQuery.ajax({
//			type: "POST",
//			url: "/home/mylist/searchMylistCount.do",
//			data: {kemId : kemId},
//			error : function(html){
//
//			},
//			success : function(transport){
//					if(transport == "1"){
//						if(confirm("이 강의는 이미 MY LIST에 담겨있습니다.\nMY LIST로 이동하시겠습니까?")){
//							document.location.href = "/home/mylist/mylist.do";
//						}
//
//					}else{
//						if(flag == 3){
//							f_viewMylist_search(obj,kemId,flag);
//						}else{
//						f_viewMylist(obj,kemId,flag);
//						}
//					}
//			}
//		});
}

 /** mylist 레이어**/
 function f_viewMylist(obj,kemId,flag){


	if(flag == 1){

		var container = document.getElementById('mylist_layer');
	}else{
		var container = document.getElementById('mylist_layer2');
	}

	if (container.style.display == 'block') {
	      return true;
	  }

	var verticalPositionValue = findPosY(obj) + obj.offsetHeight-1;
	var verticalPosition = 'top: ' + verticalPositionValue + 'px;';
	var horizontalPosition = 'left: '+ findPosX(obj)+ 'px;';

	var html = [];

	html.push('<form name=fm>');
	html.push('<dl class="view_cont">');
	html.push('<dd class="tit clearfix">');
	html.push('<strong><span><img src="/home/images/search/addLecture.gif"/></span></strong>');
	html.push('<a href="javascript:f_closeMylistPop(');
	html.push(flag);
	html.push(');"><img src="/home/images/search/btn_close.gif" alt="close"/></a>');
	html.push('</dd>');
	html.push('<dd class="scrap">');
	html.push('<ul class="scrap">');
	html.push('<li>메모 <input type="text" name="memo_text"/></li>');
	html.push('<li class="btn"><a href="#" onclick="f_createMylist(');
	html.push(kemId);
	html.push(',');
	html.push(flag);
	html.push(');"><img src="/home/images/common/ok_btn.gif" alt="확인"/></a></li>');
	html.push('</ul></dd></dl>');
	html.push('</form>');

	container.innerHTML = html.join('');
	container.style.display = 'block';
	container.style.top = verticalPositionValue + 'px';
	container.style.left = (findPosX(obj) - container.offsetWidth + obj.offsetWidth)+190 + 'px';
 }

 /** mylist 레이어(통합검색)**/
 function f_viewMylist_search (obj,kemId,flag){

	    var container = document.getElementById('mylist_layer_search');

	    if (container.style.display == 'block') {
		      return true;
		  }

		var verticalPositionValue = findPosY(obj) + obj.offsetHeight-1;
		var verticalPosition = 'top: ' + verticalPositionValue + 'px;';
		var horizontalPosition = 'left: '+ findPosX(obj)+ 'px;';

		var html = [];

		html.push('<dl class="view_cont">');
		html.push('<dd class="tit clearfix">');
		html.push('<strong><span><img src="/home/images/search/addLecture.gif"/></span></strong>');
		html.push('<a href="javascript:f_closeMylistPop(');
		html.push(flag);
		html.push(');"><img src="/home/images/common/close_btn.gif" alt="close"/></a>');
		html.push('</dd>');
		html.push('<dd class="scrap">');
		html.push('<ul class="scrap">');
		html.push('<li style="margin-bottom: 0px;padding-bottom: 6px;border-bottom: none;">메모 <input type="text" name="memo_text"/></li>');
		html.push('<li class="btn"><a href="#" onclick="f_createMylist_search(');
		html.push(kemId);
		html.push(',');
		html.push(flag);
		html.push(');"><img src="/home/images/common/ok_btn.gif" alt="확인"/></a></li>');
		html.push('</ul></dd></dl>');

		container.innerHTML = html.join('');
		container.style.display = 'block';
		container.style.top = verticalPositionValue + 'px';
		container.style.left = (findPosX(obj) - container.offsetWidth + obj.offsetWidth)+190 + 'px';
	 }

 /** mylist 담기**/
 function f_createMylist(kemId,flag) {
	 var f= document.fm;
	 var memoText = f.memo_text.value;

	 // if (user.isUserLogin()){ // 한 user 만 등록가능
	 jQuery.ajax({
			type: "POST",
			url: "/home/mylist/createMylist.do",
			data: {kemId : kemId ,
			       memoText : memoText
	              },
			error : function(html){

			alert("myList 추가에 실패하였습니다.");
			},
			success : function(msg){
				if(msg == "success"){
					if(confirm("이 강의는 MY LIST에 담기 완료하였습니다.\nMY LIST로 이동하시겠습니까?")){
						document.location.href = "/home/mylist/mylist.do";
					}
					f_closeMylistPop(flag);
				}else{alert("myList 추가에 실패하였습니다.");
					f_closeMylistPop(flag);
				 }
			 }

		});
    }

 /** mylist 담기(통합검색)**/
 function f_createMylist_search(kemId,flag) {
	 var f= document.searchFrm;
	 var memoText = f.memo_text.value;

	 // if (user.isUserLogin()){ // 한 user 만 등록가능
	 jQuery.ajax({
			type: "POST",
			url: "/home/mylist/createMylist.do",
			data: {kemId : kemId ,
			       memoText : memoText
	              },
			error : function(html){

			alert("myList 추가에 실패하였습니다.");
			},
			success : function(msg){
				if(msg == "success"){
					if(confirm("이 강의는 MY LIST에 담기 완료하였습니다.\nMY LIST로 이동하시겠습니까?")){
						document.location.href = "/home/mylist/mylist.do";
					}
					f_closeMylistPop(flag);
				}else{alert("myList 추가에 실패하였습니다.");
					f_closeMylistPop(flag);
				 }
			 }

		});
    }

 /** mylist close**/
 function f_closeMylistPop(flag) {

 		if(flag == 1){
 			var container = document.getElementById('mylist_layer');
 		}else if(flag == 2){
 			var container = document.getElementById('mylist_layer2');
 		}else{
 			var container = document.getElementById('mylist_layer_search');
 		}

 		container.innerHTML = '';
 		container.style.display = 'none';

 }

 /** 로그인 팝업창 **/
	function f_loginPopup(){

		var returnUrl = location.href;
		var	url = "/home/loginPop.do?returnUrl="+returnUrl;
		var name = "loginPop";
		var win = window.open(url,name,"resizable=yes,scrollbars=no, width=540,height=320");
	}


/**내용바로보기**/
	function player_goPos(no)
	{
		/* MediaPlayer.controls.currentPosition = no;*/
		try{
			if(navigator.userAgent.indexOf("MSIE") != -1) {
				document.getElementById("MediaPlayer2").controls.currentPosition = no;
			}else{
				document.getElementById("MediaPlayer").controls.currentTime = no;

			}
		}
	    catch(error) {
	       // alert(error);
		}
	}

/** 콘텐츠 퍼가기 **/
/** txt_content, dd_content **/
	function f_content(location,courseId,lectureId,contentType){
		var location1="";
		var location2="";

		if(location.length >= 36 ){
			location1 = location.substring(0,36);
			location2 = location.substring(36,location.length);

			jQuery("#txt_content").text('<embed src="'+location1+'\n'
                                        +location2+'" \n'
                                        +'AutoStart="1" ShowTracker="1" \n'
                                        +'ShowControls="true" ShowGotoBar="false" \n'
                                        +'ShowDisplay="0" ShowStatusBar="1" \n'
                                        +'AutoSize="true" pluginspage="http://www.microsoft.com/ \n'
                                        +'windows/windowsmedia/download/" \n'
                                        +'width="550px" height="480px"/>\n'
                                        +'<div><img src="http://www.kocw.net/home/\n'
                                        +'images/popup/kocw_banner.gif"/>'
                                        +'<iframe src="http://www.kocw.net/home/search/updateContentDown.do?courseId='+courseId
                                        +'&lectureId='+lectureId+'&contentType=1&userId=embed" width=0 height=0 />'
                                        +'</div>'
									).select();
		}
       jQuery("#dd_content").show();

        // 클립보드로 복사
		var txt = jQuery("#txt_content").text();
		var f = document.frm;
		f.txt_content.value=txt.split('\n').join("");
		var doc = f.txt_content.createTextRange();
		f.txt_content.select();
		doc.execCommand('copy');
		alert("콘텐츠 소스가  복사 되었습니다.");

	}

	function f_content_close(){
		jQuery("#dd_content").hide();
	}



	/*------------------------------------------------------------------
	 * 쿠키값 가져오기
	 *-----------------------------------------------------------------*/
	function getCookie( name ){
		var nameOfCookie = name + "=";
		var x = 0;
		while ( x <= document.cookie.length ){
			var y = (x+nameOfCookie.length);
			if ( document.cookie.substring( x, y ) == nameOfCookie ) {
					if ( (endOfCookie=document.cookie.indexOf( ";", y )) == -1 )
							endOfCookie = document.cookie.length;
					return unescape( document.cookie.substring( y, endOfCookie ) );
			}
			x = document.cookie.indexOf( " ", x ) + 1;
			if ( x == 0 )
					break;
		}

		return "";
	}

	/*------------------------------------------------------------------
	 * 쿠키값 저장
	 *-----------------------------------------------------------------*/
	function setCookie( name, value, expiredays ) {
		var todayDate = new Date();
		todayDate.setDate( todayDate.getDate() + expiredays );
		document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";";

	}
	
	function setCookieTime( name, value, expireTime) {
		document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + expireTime + ";";
	}

	 /** 동영상 이어보기 **/

	 var lecKemId4Cookie ;

	 function do_WMP_status(newState,lecKemId){

			var WMP=new Object();
			var tid ;
			lecKemId4Cookie = lecKemId;

			if(navigator.userAgent.indexOf("MSIE") != -1) {

				if(newState=='1'){
					clearInterval(tid);
				}
				if(newState=='3'){
					setInterval('setPlayTime()',2000); 				// 2초 마다 갱신
				}
			}
	}

	//  http://msdn.microsoft.com/en-us/library/bb249361(VS.85).aspx
	/*    var PlayStates = {
	       0: "Undefined", // Windows Media Player is in an undefined state.
	       1: "Stopped", // Playback of the current media item is stopped.
	       2: "Paused", // Playback of the current media item is paused. When a media item is paused, resuming playback begins from the same location.
	       3: "Playing", // The current media item is playing.
	       4: "ScanForward", // The current media item is fast forwarding.
	       5: "ScanReverse", // The current media item is fast rewinding.
	       6: "Buffering", // The current media item is getting additional data from the server.
	       7: "Waiting", // Connection is established, but the server is not sending data. Waiting for session to begin.
	       8: "MediaEnded", // Media item has completed playback.
	       9: "Transitioning", // Preparing new media item.
	      10: "Ready", // Ready to begin playing.
	      11: "Reconnecting" // Reconnecting to stream.
	    };
	*/

	function setPlayTime(){
		ctime = document.getElementById("vodOb").controls.currentPosition;
		if(ctime > 30){
			setCookie('kocwVPosition_'+lecKemId4Cookie,ctime,180);
		}
	}

	function parseTime(value){

		value = value+"" ;
		value = value.substring(0, value.indexOf("."));
		value = value*1;

		hval = "00:";
		mval = "00:";

		if (value >= 3600)
		{
			hval = parseInt(value/3600)+":" ;
			if(hval.length<3)
				hval = "0"+hval;
			value = (value%3600);
		}
		if( value>=60 ){
			mval = parseInt(value/60)+":" ;
			if(mval.length<3)
				mval = "0"+mval;
			value = (value%60);
		}
		if( value < 60 ){
			sval = value+"";
			if(sval.length<2)
				sval = "0"+sval;
		}

		return hval+mval+sval;
	}


	function seekPrePosition(vodOb,lecKemId){

		if(navigator.userAgent.indexOf("MSIE") != -1) {
			var ptime = getCookie('kocwVPosition_'+lecKemId)*1 ;

			if( ptime > 30 ) {																// 30초 이상 본 적이 있는 경우
				document.getElementById("vodOb").controls.pause();
				var answer = confirm('전에 보았던 강의입니다. ['+parseTime(ptime)+']부터 이어서 보시겠습니까?');
				if(answer==true){
					document.getElementById("vodOb").controls.currentPosition = ptime-10 ;
					document.getElementById("vodOb").controls.play();
				}else{
					document.getElementById("vodOb").controls.play();
					setCookie('kocwVPosition_'+lecKemId,0,30);				// 취소 선택시 재생정보 삭제
				}
			}else{
				document.getElementById("vodOb").controls.play();
			}
		}

	}


	Map = function(){
	 this.map = new Object();
	};
	Map.prototype = {
	    put : function(key, value){
	        this.map[key] = value;
	    },
	    get : function(key){
	        return this.map[key];
	    },
	    containsKey : function(key){
	     return key in this.map;
	    },
	    containsValue : function(value){
	     for(var prop in this.map){
	      if(this.map[prop] == value) return true;
	     }
	     return false;
	    },
	    isEmpty : function(key){
	     return (this.size() == 0);
	    },
	    clear : function(){
	     for(var prop in this.map){
	      delete this.map[prop];
	     }
	    },
	    remove : function(key){
	     delete this.map[key];
	    },
	    keys : function(){
	        var keys = new Array();
	        for(var prop in this.map){
	            keys.push(prop);
	        }
	        return keys;
	    },
	    values : function(){
	     var values = new Array();
	        for(var prop in this.map){
	         values.push(this.map[prop]);
	        }
	        return values;
	    },
	    size : function(){
	      var count = 0;
	      for (var prop in this.map) {
	        count++;
	      }
	      return count;
	    }
	};


	 /** 강의차시 가져오기 - 전문대학 **/
	 function f_getLectures_college(obj,kemId,flag){

		jQuery.ajax({
			type: "POST",
			url: "/home/special/lectures.do",
			data: "kemId=" + kemId,
			error : function(html){
				alert("강의 정보를 가져올 수 없습니다.");
			},
			success : function(msg){
				try{
					var lectureObj = eval("(" + msg + ")");
					if( lectureObj[0]["lectures"].length  > 0){
						f_viewLectures2_college(obj, lectureObj, kemId, flag);  // 차시가 1개 이상
//					}else if( lectureObj[0]["lectures"].length  == 1){
//						var lecture = lectureObj[0]["lectures"][0];  //차시가 1개
//						var lectureId = lecture['id'];
//							f_openLecture2(lectureId);
					}else{
//						    f_openLecture2(kemId);   // 차시가 없는 경우 TODO
					}
			    }
				catch (e) {alert(e);
//					location.href = "/home/search/kemView.do?kemId="  + kemId;
				}

			}
		});
	}

	/** 강의보기 레이어**/
	 function f_viewLectures2_college(obj, lectureObj, kemId, flag){

			if(flag == 1){
				var container = jQuery(obj).parent().parent().parent().find('#lecture_layer');
			}else{
				var container = document.getElementById('lecture_layer2');
			}

			var html = [];
			var numLectures = lectureObj[0]["lectures"].length;

			if (numLectures > 0) {
				for (var i = 0; i < numLectures; i++) {
					var lecture = lectureObj[0]["lectures"][i];
					var index = i + 1;

					var loc = lecture['location']+'';
					var lectureId = lecture['id'];
					var errmsgTypeCode = lecture['errmsgTypeCode'];
					var msg = "강의바로보기";
					var fulltitle = lecture['title'];
					var title = lecture['title'];

					 html.push('<li style="width: 190px;text-overflow: ellipsis;overflow: hidden;white-space:nowrap;"><nobr><strong>');
					 html.push(index);
					 html.push('</strong>');
					 if(loc.indexOf("mms://210.102.99.63") > -1 || loc.indexOf("mms://210.102.100.235") > -1){
						html.push('<a  href="/home/college/kemView.do?kemId='+kemId+'" ');
						html.push(' title="'+fulltitle + '" ');
						html.push('>');
						html.push(title);
						html.push('</a></nobr></li>');

					}else if(loc.indexOf("http") > -1){
						html.push('<a  href="javascript:window.open(\''+loc+'\',\'_blank\'); void(0)" ');
						html.push(' title="'+fulltitle + '" ');
						html.push('>');
						html.push(title);
						html.push('</a></nobr></li>');

				 }else{
						html.push('<a');
						html.push(' title="'+fulltitle + '" ');
						html.push('>');
						html.push(title);
						html.push('</a></nobr></li>');

					}
				 }

			}

			jQuery(obj).parent().parent().parent().find('#lnum').html(numLectures+'회차');
			jQuery(obj).parent().parent().parent().find('#lectureList').html(html.join(''));

			//$('.lectureListWrap').each(function(){ alert($(this).html())});
			$('.lectureListWrap').hide();
			//container.css('display','block');
			container.show();
			container.css({ 'z-index' : '999' });
			$('dl.listWrap').css({ position : 'static' })
			$("#lecture_layer").parent().parent().parent().css({ position : 'relative' })
		}


/** 2014. 2 추가 **/

	 /*
	  * jQuery UI Multilevel Accordion v.1
	  *
	  * Copyright (c) 2011 Pieter Pareit
	  *
	  * http://www.scriptbreaker.com
	  *
	  */

	 //plugin definition
	 (function($){


	 	$.fn.bnnrRolling2 = function( _options ){
	 		return this.each(function(i, n){
	 			var  options = jQuery.extend({}, {
	 					vodListWrap : ".vodListWrap", list : ".list",  lis :".list li" , btnL : ".left", btnR : ".right", btnAuto : ".auto", anchors : ".anchors button",
	 					speed : 3000, auto : true, motionSpeed : 300,
	 					callback : function(){}
	 				}, _options)

	 				, $wrap = $(this)
	 				, $btnL = $wrap.find( options.btnL )
	 				, $btnR = $wrap.find( options.btnR )
	 				, $btnAuto = $wrap.find( options.btnAuto )
	 				, $anchors = $wrap.find( options.anchors )
	 				, $vodListWrap = $wrap.find( options.vodListWrap )
	 				, $list = $wrap.find( options.list )
	 				, $lis = $wrap.find( options.lis )

	 				, listsWidth = $lis.eq(0).width() + (parseFloat( $lis.eq(0).css("marginRight") ) || 0)
	 				, visibleLisCnt = Math.ceil( $vodListWrap.width() / listsWidth )
	 				, doing = false

	 				, auto = ( options.auto ) ? true : false
	 				, pause = false
	 				, speed = options.speed

	 				, dir = "right"
	 				, oldActive = visibleLisCnt
	 				, timer

	 				, callback = options.callback;

	 			 // 추가 (롤링 제한하기 위해서 -140205 추가)
	 			 var lisCnt = 	 $lis.length;

	 			// 롤링갯수가 부족하면 멈춤
	 			if( $lis.length <= visibleLisCnt ) return false;

	 			// 리스트 앞뒤로 목록 붙여넣기
	 			$list.append( $lis.filter(":lt("+visibleLisCnt+")").clone() );
	 			$list.prepend( $lis.filter(":gt("+($lis.length-1-visibleLisCnt)+")").clone() );
	 			$lis = $wrap.find( options.lis );

	 			// 초기 위치 잡기
	 			$list.css("left", -listsWidth * visibleLisCnt);

	 			// event
	 			$btnL.bind("click", onBtnLClick );
	 			$btnR.bind("click", onBtnRClick);
	 			$btnAuto.bind("click", onBtnAutoClick );
	 			$anchors.bind("click mouseover", onAnchorsClick ).eq(0).addClass("current");

	 			if( auto ){
	 				$wrap.bind("mouseenter focusin", onWrapMouseEnter );
	 				$wrap.bind("mouseleave focusout", onWrapMouseLeave );
	 				onStart();
	 			}

	 			function onBtnAutoClick(){
	 				pause = ! pause;
	 				$btnAuto.toggleClass("stop", pause);
	 			}


	 			function onBtnRClick(){
	 				if( doing ) return false;

	 				if(oldActive < lisCnt){ // if문 추가 (롤링 제한하기 위해서 -140205 추가) - oldActive가 리스트 개수 보다 적을 경우에만 오른쪽 이동
	 					dir = "right";
	 					unActiveAnchor( oldActive );
	 					oldActive++; onChange();
	 					return false;
	 			    }
	 			}

	 			function onBtnLClick(){
	 				if( doing ) return false;

	 				if(oldActive  > 4){  // if문 추가 (롤링 제한하기 위해서 -140205 추가) - oldActive가 0 보다 많을 경우에만 왼쪽 이동
	 					dir = "left";
	 					unActiveAnchor( oldActive );
	 					oldActive--; onChange();
	 					return false;
	 				}
	 			}
	 			function onAnchorsClick(){
	 				unActiveAnchor( oldActive );
	 				var n = $anchors.index( this ) + visibleLisCnt;
	 				onChange( n );
	 			}

	 			function onWrapMouseEnter(){ onStop(); }
	 			function onWrapMouseLeave(){ onStart(); }

	 			function onChange( n ){
	 				if( n ) oldActive = n;

	 				ActiveAnchor( oldActive );

	 				doing = true;

	 				$vodListWrap.scrollTop(0);
	 				$vodListWrap.scrollLeft(0);
	 				$list.stop(true).animate({"left" : -oldActive * listsWidth}, options.motionSpeed, function(){
	 					if( oldActive >= $lis.length - visibleLisCnt ){
	 						$list.css("left", -listsWidth * visibleLisCnt);
	 						oldActive = visibleLisCnt;

	 					}//else if( oldActive <= 0 ){   // if문 추가 (롤링 제한하기 위해서 -140205 주석처리함)
	 						//$list.css("left", ($lis.length - visibleLisCnt*2) * -listsWidth);
	 						//oldActive = $lis.length - visibleLisCnt*2;
	 					//}
	 					doing = false;
	 					callback.apply( $wrap[0], [$lis.eq(oldActive), oldActive] );
	 				});
	 			}

	 			function onStart(){
	 				clearInterval( timer );
	 				timer = setInterval(function(){
	 					if( ! pause ){
	 						( dir == "right") ? onBtnRClick() : onBtnLClick();
	 					}
	 				}, speed);
	 			}
	 			function onStop(){ clearInterval( timer ); }

	 			function ActiveAnchor(index){
	 				index = index - visibleLisCnt;
	 				if( index >= $anchors.length ) index = 0;
	 				$anchors.eq(index).addClass("current");
	 			}
	 			function unActiveAnchor(index){
	 				index = index - visibleLisCnt;
	 				if( index >= $anchors.length ) index = 0;
	 				$anchors.eq(index).removeClass("current");
	 			}
	 		});
	 	}

	 	$(document).ready(function(){
	 		$("#listRolling").bnnrRolling2({ auto : false, speed : 2000 }, function(){
	 		});
	 	});

	 	$(document).ready(function(){
	 		$("#listRolling1").bnnrRolling2({ auto : false, speed : 2000 }, function(){
	 		});
	 	});
	 	$(document).ready(function(){
	 		$("#listRolling2").bnnrRolling2({ auto : false, speed : 2000 }, function(){
	 		});
	 	});
	 	$(document).ready(function(){
	 		$("#listRolling3").bnnrRolling2({ auto : false, speed : 2000 }, function(){
	 		});
	 	});
	 	$(document).ready(function(){
	 		$("#listRolling4").bnnrRolling2({ auto : false, speed : 2000 }, function(){
	 		});
	 	});
	 	$(document).ready(function(){
	 		$("#listRolling5").bnnrRolling2({ auto : false, speed : 2000 }, function(){
	 		});
	 	});
	 	$(document).ready(function(){
	 		$("#listRolling6").bnnrRolling2({ auto : false, speed : 2000 }, function(){
	 		});
	 	});




	 	$(".btnTypeList a.openLecture").click(function(j){
	 		j.preventDefault();
	 		$("#lecture_layer").show();
	 		$("#lecture_layer").css({ 'z-index' : '999' })
	 		//$("#lecture_layer").parent().css({ 'z-index' : '999' })
	 		$('dl.listWrap').css({ position : 'static' })
	 		$("#lecture_layer").parent().parent().parent().css({ position : 'relative' })
	 		$("#lecture_layer").parent().parent().parent().css({ 'z-index' : '999'  })
	 	});
	 	$("#lecture_layer .closeLecture").click(function(j){
	 		j.preventDefault();
	 		$("#lecture_layer").hide();
	 	});
	 	// 강의차시 Open


	 	$(document).ready(function() { 	 		
	 		$(".leftM").accordion({
	 			accordion:false,
	 			speed: 400,
	 			closedSign: '',
	 			openedSign: ''
	 		});	 		

			$(document).click(function(e){
				if(e.target.id!='lecture_layer' && e.target.id!='lectureList' && e.target.className!='stitWrap'){				
					$(".lectureListWrap").hide();
				}			
			}); 
	 	});


	 	    $.fn.extend({

	 	    //pass the options variable to the function
	 	    accordion: function(options) {

	 			var defaults = {
	 				accordion: 'true',
	 				speed: 400,
	 				closedSign: '',
	 				openedSign: ''
	 			};

	 			// Extend our default options with those provided.
	 			var opts = $.extend(defaults, options);
	 			//Assign current element to variable, in this case is UL element
	 	 		var $this = $(this);

	 	 		//add a mark [+] to a multilevel menu
	 	 		$this.find("li").each(function() {
	 	 			if($(this).find("ul").size() != 0){
	 	 				//add the multilevel sign next to the link
	 	 				$(this).find("a:first").append("<span>"+ opts.closedSign +"</span>");

	 	 				//avoid jumping to the top of the page when the href is an #
//	 	 				if($(this).find("a:first").attr('href') == "#"){
//	 	 		  			$(this).find("a:first").click(function(){return false;});
//	 	 		  		}
	 	 			}
	 	 		});

	 	 		//open active level
	 	 		$this.find("li.active").each(function() {
	 	 			$(this).parents("ul").slideDown(opts.speed);
	 	 			$(this).parents("ul").parent("li").find("span:first").html(opts.openedSign);
	 	 		});

	 	 		//변수 추가
	 	 		var $thisC;
	 	 		var $thisD;
	 	 		var $thisE;


	 	  		$this.find("li a").click(function() {

	 				//변수 추가
	 				var $thisC = $(this);

	 	  			if($(this).parent().find("ul").size() != 0){
	 					$(this).toggleClass('activeCss');
	 	  				if(opts.accordion){
	 	  					//Do nothing when the list is open
	 	  					if(!$(this).parent().find("ul").is(':visible')){
	 	  						parents = $(this).parent().parents("ul");
	 	  						visible = $this.find("ul:visible");
	 	  						visible.each(function(visibleIndex){
	 	  							var close = true;
	 	  							parents.each(function(parentIndex){
	 	  								if(parents[parentIndex] == visible[visibleIndex]){
	 	  									close = false;
	 	  									return false;
	 	  								}
	 	  							});
	 	  							if(close){
	 	  								if($(this).parent().find("ul") != visible[visibleIndex]){
	 	  									$(visible[visibleIndex]).slideUp(opts.speed, function(){
	 	  										$(this).parent("li").find("span:first").html(opts.closedSign);
	 	  									});

	 	  								}
	 	  							}
	 	  						});
	 	  					}
	 	  				}
	 	  				//클릭한 곳의 부모태그에서 ul:first찾아 그 태그가 visible 상태이면 분기 들어옴 (대분류 다시 클릭하면)
	 	  				if($(this).parent().find("ul:first").is(":visible")){
	 	  					$(this).toggleClass('activeCss');  // 다시 클릭해도 색상유지

	 	  					if($thisC.parent().find("ul:first").attr('class') =='leftS'){  // 대분류 다시 클릭 할때만
	 	  						$('.leftL').slideUp(opts.speed);  // 대분류 클릭시 소분류 무조건 닫아주기
	 	  						$("[id^=lev2Menu]").each(function(){   // 클릭한 곳의 하위 소분류 메뉴 색상 변경
	 	  							$(this).find('a').attr('class' , '');
		 		 	  			});

	 	  					}



	 	  					/*$(this).parent().find('ul:first').find('[class^=lastMenu]').each(function(){  // 하위 분류 찾아서
	 	  			  		$(this).find('a').attr('class' , '');  // 선택되었던 색상 다시 원래로
	 	  		  		});*/
	 	  				//3줄중 화살표만 이해하면 됨
	 	  					//현재 부모에서에서 부터 하위 태그중 첫번째로 나오는 ul:first을 찾아 slideUp 시킴
	 	  					//해당 부분을 주석처리하여 slideUp 안됨

	 	  					/*$(this).parent().find("ul:first").slideUp(opts.speed, function(){ <--
	 							$(this).toggleClass('activeCss');
	 	  						$(this).parent("li").find("span:first").delay(opts.speed).html(opts.closedSign);
	 	  					});*/

	 	  				}else{
	 	  					$('.leftL').slideUp(opts.speed);  // 대분류 클릭시 소분류 무조건 닫아주기
	 						//대분류
	 						$('.leftM').find("[id^=lev1Menu]").each(function(){
	 							if($thisC.parent().find('ul:first').parents('[id^=lev1Menu]').attr('id') != $(this).attr('id')){
	 								$(this).find('a').attr('class' , '');
	 								$(this).find('.leftS').slideUp(opts.speed);
	 							}
	 						});

	 						//추가끝
	 						$(this).parent().find("ul:first").slideDown(opts.speed, function(){
	 	  						$(this).parent("li").find("span:first").delay(opts.speed).html(opts.openedSign);
	 	  					});
	 	  				}
	 	  			}
	 	  		});

	 	  		// 중분류 -- 메뉴클릭시
	 	  		$this.find("li ul li a").click(function() {   // 중분류 클릭 시
	 	  			var $thisD= $(this);  // 클릭한 값 저장
	 	  			$thisD.parents('ul:first').find("[id^=lev2Menu]").each(function(){ // 클릭한 곳의 상위 ul중 처음 만나는 ul의 lev2Menu 수 만큼
	 	  				if($thisD.parent('li').attr('id') != $(this).attr('id')){  // 클릭한 곳의 li 의 id와 해당 중분류  id비교
	 	  					$(this).find('a').attr('class' , '');  // 맞지 않으면 클래스''
	 	  					$thisD.attr('class','activeCss');   // 클릭 한곳은 색상 변경
	 						$(this).find('.leftL').slideUp(opts.speed);  // 맞지않으면 leftL 슬라이드 닫아주기
	 	  				}
	 	  			});

	 	  			$thisD.parent('li').find('.leftL').find("[id^=lev3Menu]").each(function(){  // 클릭한 곳의 하위 소분류 메뉴 색상 변경
	 	  				$(this).find('a').attr('class' , '');
	 	  			});
	 	  	   });  // -- 중분류

	 	  		// 소분류 - 메뉴 클릭 시
	 	  		$this.find("li ul li ul li a").click(function() {
	 	  			var $thisE= $(this);  // 클릭한 값 저장
	 	  			$(this).toggleClass('activeCss');
	 	  			$thisE.parents('ul:first').find("[id^=lev3Menu]").each(function(){  // 클릭한 곳의 상위 ul중 처음 만나는 ul의 lev3Menu 수 만큼
	 	  				$(this).find('a').attr('class' , '');  // 클릭 안된 곳은 원래색상
	 	  				$thisE.attr('class','activeCss');   // 클릭 한곳은 색상 변경
	 	  		});  // -- 소분류


	 	  	});






	 	    }
	 	});



	 })(jQuery);


//-->

