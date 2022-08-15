
var t_startCurrentTimeVal = "00:00:00";
var t_endCurrentTimeVal = "00:00:00";


//클립창 오픈,닫기
function f_openClip(){
	
	if(!isMd){
		alert('클립만들기는 HTML5가 지원되는 브라우저에서 사용가능합니다.');
		return;
	}
	
//	f_removeClip();

	if($('#clip').is(':visible')){
	   $('#clip').hide();
//	   $('#openClip').css('background','url(/home/images/search/clipBg.png)')
	}else{		
  		if(isLogIn=='true'){
		  $('#clip').show();
//		  $('#openClip').css('background','url(/home/images/search/clipBgOn.png)')
	  	}else{
		  if(confirm("클립등록은 로그인 후에 이용이 가능합니다.\n로그인 하시겠습니까?.")){
			  f_loginPopup(); 
		}		
	  }	
		if($("#clipForm input[type=text][name=startCurrentTime]").val()==''){
			$("#clipForm input[type=text][name=startCurrentTime]").val(t_startCurrentTimeVal);
		}
		if($("#clipForm input[type=text][name=endCurrentTime]").val()==''){
			$("#clipForm input[type=text][name=endCurrentTime]").val(t_endCurrentTimeVal);
		}		
	}
}

//현재 재생시간 보여주기
function f_getPlayTime(){
	try{
		 vid =document.getElementById("h5player_html5_api");
		 vid.addEventListener("timeupdate",function(){
		 var playTime = Math.floor(this.currentTime);
		 if(playTime > 0){
			  var minute = Math.floor(parseInt(playTime)/60);
			 }
			 var seconds = parseInt(playTime)%60;
			 var hours="00";
			 var minutes="00"
			 if(minute > 0){
				 hours = Math.floor(parseInt(minute)/60); 
				 minutes = parseInt(minute)%60;
			 }
			 
			 var viewTime = f_lpad(hours,2,'0')+":"+f_lpad(minutes,2,'0')+":"+f_lpad(seconds,2,'0');
			 
			 $("#clipForm input[type=text][name=startCurrentTime]").val(viewTime);
			 $("#clipForm input[type=text][name=endCurrentTime]").val(viewTime);
	
		 });
	}catch(e){	}     
}

function f_keepCurrentTime(){
	t_startCurrentTimeVal = $("#clipForm input[type=text][name=startCurrentTime]").val();
	t_endCurrentTimeVal = 	$("#clipForm input[type=text][name=endCurrentTime]").val();
}

//재생시간 선택
function f_moveTime(type){
	if(type == '1'){ //시작시간
		var stime = $("#clipForm input[type=text][name=startCurrentTime]").val();
		if(stime == ''){
			alert("영상을 재생 후 시간을 선택하세요.");
		}else{
			var time = stime.split(":");
			for(var i=0; i<time.length; i++){
				if(i==0){
					$("#clipForm input[type=text][name=startH]").val(time[0]);
				}else if(i==1){
					$("#clipForm input[type=text][name=startM]").val(time[1]);
				}else{
					$("#clipForm input[type=text][name=startS]").val(time[2]);
				}
			}
		}
	 }else{  //종료시간
		var etime =  $("#clipForm input[type=text][name=endCurrentTime]").val();
		if(etime == ''){
			alert("영상을 재생 후 시간을 선택하세요.");
		}else{
			var time = etime.split(":");
			for(var i=0; i<time.length; i++){
				if(i==0){
					$("#clipForm input[type=text][name=endH]").val(time[0]);
				}else if(i==1){
					$("#clipForm input[type=text][name=endM]").val(time[1]);
				}else{
					$("#clipForm input[type=text][name=endS]").val(time[2]);
				}
			}
		}
	}
}

//클립등록
function f_createClip(){
	
	var startH =  $("#clipForm input[type=text][name=startH]").val();
    var startM =  $("#clipForm input[type=text][name=startM]").val();
    var startS =  $("#clipForm input[type=text][name=startS]").val();
   
    var endH = $("#clipForm input[type=text][name=endH]").val();
    var endM = $("#clipForm input[type=text][name=endM]").val();
    var endS = $("#clipForm input[type=text][name=endS]").val();
    
    var clipTitle = $("#clipForm input[type=text][name=clipTitle]").val();
    var clipDescription = $("#clipForm textarea[name=clipDescription]").val();
    
    if(startH=='')	startH = '00';
    if(startM=='')	startM = '00';
    if(startS=='')	startS = '00';
    if(endH=='')	endH = '00';
    if(endM=='')	endM = '00';
    if(endS=='')	endS = '00';
    startH = f_lpadCut(startH,2,'0');
    startM = f_lpadCut(startM,2,'0');
    startS = f_lpadCut(startS,2,'0');
    endH = f_lpadCut(endH,2,'0');
    endM = f_lpadCut(endM,2,'0');
    endS = f_lpadCut(endS,2,'0');   
    
    var startTime = startH+startM+startS;
    var endTime = endH+endM+endS;
    
    if(startH == "00" && startM=="00" && startS=="00"){
  	  alert("시작시간을 입력해주세요.");
  	  return;
    }
    if(endH == "00" && endM=="00" && endS=="00"){
    	  alert("종료시간을 입력해주세요.");
    	  return;
     }
    
    startSec = startH*3600 + startM*60 + startS*1;
    endSec = endH*3600 + endM*60 + endS*1;
    durationSec = videojs('h5player').duration();
 
	  if(startSec > durationSec){
		  alert("시작시간이 너무 큽니다.");
		  return;
	  }
	  if(endSec > durationSec){
	  	  alert("종료시간이 너무 큽니다.");
	  	  return;
	   }
	  if(startSec > endSec){
	  	  alert("시작시간이 종료시간보다 클 수 없습니다.");
	  	  return;
	   }
	  
    if(clipTitle==""){
  	  alert("클립제목을 입력해주세요.");
  	  return;
    }
    
    if(confirm("강의클립을 등록하시겠습니까?")){
      	jQuery.ajax({
	        type: "POST",
	        url: "/home/curation/createClip.do",
	        data: {lectureKemId : vLectureId,
	        	   courseKemId : vCousrseId,
	        	   startTime : startTime,
	        	   endTime : endTime,
	        	   clipTitle : clipTitle,
	        	   clipDescription : clipDescription
	              },
	        error : function(html){
	            alert("강의클립 등록에 실패하였습니다.");
	        },
	        success : function(transport){
	                if(transport == "success"){
//    		            alert("등록 되었습니다. 내강의실에서 확인 가능합니다.");
	                	if(confirm("등록 되었습니다. 내강의실에서 확인 가능합니다.\n내 강의실로 이동하시겠습니까?")){
	                		document.location.href = "/home/curation/myClip.do";
      					}
	                    f_cancelClip();
	                }else{
	                	alert("강의클립 등록에 실패하였습니다.");
	                }
	        }
	    });
	}
}

//클립창 입력정보 제거
function f_removeClip(){ 
	$("#clipForm input[type=text][name=startH]").val('');
	$("#clipForm input[type=text][name=startM]").val('');
	$("#clipForm input[type=text][name=startS]").val('');
	$("#clipForm input[type=text][name=endH]").val('');
	$("#clipForm input[type=text][name=endM]").val('');
	$("#clipForm input[type=text][name=endS]").val('');
	$("#clipForm input[type=text][name=clipTitle]").val('');
	$("#clipForm textarea[name=clipDescription]").val('');
	$("#clipForm input[type=text][name=startCurrentTime]").val('');
	$("#clipForm input[type=text][name=endCurrentTime]").val('');
}

//클립 취소
function f_cancelClip(){
	f_removeClip()
	$('#clip').hide();
}

//마이클립에서 클립 플레이
function f_playClip(url,startTime,endTime,lectureKemId,clipTitle){
	$("#clipForm input[type=hidden][name=url]").val(url);
	$("#clipForm input[type=hidden][name=startTime]").val(startTime);
	$("#clipForm input[type=hidden][name=endTime]").val(endTime);
	$("#clipForm input[type=hidden][name=lectureKemId]").val(lectureKemId);
	$("#clipForm input[type=hidden][name=clipTitle]").val(clipTitle);
	$("#clipForm input[type=hidden][name=isClip]").val(true);
	
	$('#clipForm').attr('action', url).submit();
}

//편집창 오픈
function f_openClipEdit(id){	
	/*var dState = "none";
	if($('#clipEdit_'+id).css('display') == 'block'){
		dState = "block";
	}
	$('.clsClipEdit').hide();
	$('#clipEdit_'+id).show(); 
	if($('#clipEdit_'+id).css('display') == 'block'){
		dState = "block";
	}else{
		dState = "none";
	}*/
	$('.clsClipEdit').hide();
	$('#clipEdit_'+id).show(); 
}

//편집창 닫기
function f_closeClipEdit(id){
	$('#clipEdit_'+id).hide();
}

//클립제목수정 
function f_editClipTitle(id,no){
	$('#clipTitle_'+id).hide();
	$('#clipTitleInput_'+id).show();
	$('#clipEditBtn_'+id).show();
}

//클립설명수정
function f_editClipDesc(id,no){
	$('#clipDesc_'+id).hide();
	$('#clipDescInput_'+id).show();
	$('#clipEditBtn_'+id).show();
}

//수정취소
function f_cancelClipEdit(id){
	$('#clipTitle_'+id).show();
	$('#clipTitleInput_'+id).find('input[name^=inputTitle]').val($('#clipTitle_'+id).find('a').text());
	$('#clipTitleInput_'+id).hide();
	$('#clipDesc_'+id).show();
	$('#clipDescInput_'+id).find('input[name^=inputDesc]').val($('#clipDesc_'+id).text());
	$('#clipDescInput_'+id).hide();
	$('#clipEditBtn_'+id).hide();	
}

//수정
function f_modifyClip(id){
  	
	var titleDsp = $('#clipTitleInput_'+id).css('display');
	var descDsp = $('#clipDescInput_'+id).css('display');
	var title;
	var desc;
	
	if(titleDsp == 'block'){
		title = $('#clipTitleInput_'+id).find('input[name^=inputTitle]').val();
	}else{
		title = $('#clipTitle_'+id).find('a').text();
	}
	
	if(descDsp =='block'){
		desc = $('#clipDescInput_'+id).find('input[name^=inputDesc]').val();
	}else{
		desc = $('#clipDesc_'+id).text();
	}
	
	if(confirm("강의클립을 수정하시겠습니까?")){
      	jQuery.ajax({
	        type: "POST",
	        url: "/home/curation/updateClip.do",
	        data: {id : id,
	        	   clipTitle : title,
	        	   clipDescription : desc
	        	   },
	        error : function(html){
	            alert("강의클립 수정에 실패하였습니다.");
	        },
	        success : function(transport){
	                if(transport == "success"){
	                   // alert("강의클립이 수정 되었습니다.");
	                    location.href="/home/curation/myClip.do";
	                }else{alert("강의클립 수정에 실패하였습니다.");
	                }
	        }
	    });
	}
}

//클립삭제
function f_deleteClip(id){
	if(confirm("강의클립을 삭제하시겠습니까?")){
		jQuery.ajax({
			type: "POST",
			url: "/home/curation/deleteClip.do",
			data: {id : id},
			error : function(html){
				alert("강의클립 삭제에 실패하였습니다.");
			},
			success : function(transport){ 
					 if(transport == "success"){
		                alert("강의클립이 삭제 되었습니다.");
		                location.href="/home/curation/myClip.do";
		             }else{
		            	alert("강의클립 삭제에 실패하였습니다.");
		             }
             }             
		});
	}
}


function f_lpad(str,num,chr){
	if((str+'').length>=num){
		return str;
	}else{
		var max = num-(str+'').length;
		for(var i=0; i<max; i++){
			str = chr+''+str;
		}
		return str;
	}
}

function f_lpadCut(str,num,chr){
	if((str+'').length==num){
		return str;
	}else if((str+'').length>num){
		return str.substring(0,2);
	}else{
		var max = num-(str+'').length;
		for(var i=0; i<max; i++){
			str = chr+''+str;
		}
		return str;
	}
}

function f_numCheck(str){
	str = str.replace(/[^0-9]/gi, "");
	str = str.substring(0,2);
	return str;
}



