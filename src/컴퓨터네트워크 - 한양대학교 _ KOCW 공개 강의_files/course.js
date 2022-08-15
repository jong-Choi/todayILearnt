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
 

  
/** 사용자, 강의별 카운트 **/ 
function f_course_mylistCount(obj,kemId,flag)  {   

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
//						f_course_viewMylist(obj,kemId,flag); 
//					} 
//			}
//		}); 
} 
 
/** mylist 레이어**/
function f_course_viewMylist(obj,kemId,flag){   
  
	if(flag == 1){
		var container = document.getElementById('mylist_layer');  
	}else{ 
		var container = document.getElementById('mylist_layer2');  
	}
	
	if (container.style.display == 'block') {
	      return true;
	  } 
	
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
	
}  
  
/** mylist 추가**/
function f_course_createMylist(kemId,flag) { 
	 var f= document.fm; 
	 var memoText = f.memo_text.value;   
	  
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
					if(confirm("내 강의실에 담기 완료하였습니다.\n내 강의실로 이동하시겠습니까?")){ 
						document.location.href = "/home/mylist/mylist.do"; 
					}
					f_closeMylistPop(flag);
				}else{alert("담기에 실패하였습니다."); 
					f_closeMylistPop(flag); 
				 }	
			 }
			  
		});  
   }
  
/** mylist close**/
function f_course_closeMylistPop(flag) {
		
		if(flag == 1){
			var container = document.getElementById('mylist_layer');  
		}else{ 
			var container = document.getElementById('mylist_layer2');  
		}
		
		container.innerHTML = '';
		container.style.display = 'none';
		
} 	

/**평가점수 별 보이기 **/
function f_showStars(starId)
{   
    if(starId == '1'){   
    	
    	//jQuery('#star_comment').text('별로에요.');
       //jQuery('img[src$=star_icon02.gif ]').attr('src', '/home/images/main/star_icon01.gif');   
    	document.getElementById('star1').src = document.getElementById('star1').src.replace('star_icon02.gif','star_icon01.gif'); 
    }else if(starId == '2'){   
    	//jQuery('#star_comment').text('그저그래요.');
    	document.getElementById('star1').src = document.getElementById('star1').src.replace('star_icon02.gif','star_icon01.gif'); 
    	document.getElementById('star2').src = document.getElementById('star2').src.replace('star_icon02.gif','star_icon01.gif');   
    }else if(starId == '3'){   
    	//jQuery('#star_comment').text('볼만해요.');
    	document.getElementById('star1').src = document.getElementById('star1').src.replace('star_icon02.gif','star_icon01.gif'); 
    	document.getElementById('star2').src = document.getElementById('star2').src.replace('star_icon02.gif','star_icon01.gif');    
    	document.getElementById('star3').src = document.getElementById('star3').src.replace('star_icon02.gif','star_icon01.gif');   
    }else if(starId == '4'){   
    	//jQuery('#star_comment').text('만족해요!');
    	document.getElementById('star1').src = document.getElementById('star1').src.replace('star_icon02.gif','star_icon01.gif'); 
    	document.getElementById('star2').src = document.getElementById('star2').src.replace('star_icon02.gif','star_icon01.gif');    
    	document.getElementById('star3').src = document.getElementById('star3').src.replace('star_icon02.gif','star_icon01.gif');    
    	document.getElementById('star4').src = document.getElementById('star4').src.replace('star_icon02.gif','star_icon01.gif');   
    }else if(starId == '5'){    
    	//jQuery('#star_comment').text('강력추천!!');
    	document.getElementById('star1').src = document.getElementById('star1').src.replace('star_icon02.gif','star_icon01.gif'); 
    	document.getElementById('star2').src = document.getElementById('star2').src.replace('star_icon02.gif','star_icon01.gif');    
    	document.getElementById('star3').src = document.getElementById('star3').src.replace('star_icon02.gif','star_icon01.gif');    
    	document.getElementById('star4').src = document.getElementById('star4').src.replace('star_icon02.gif','star_icon01.gif');     
    	document.getElementById('star5').src = document.getElementById('star5').src.replace('star_icon02.gif','star_icon01.gif');     
    }
}      

/**평가점수 별 보이지 않기**/
function f_clearStars(starId)
{  
	if(starId == '1'){  
		document.getElementById('star1').src = document.getElementById('star1').src.replace('star_icon01.gif','star_icon02.gif');  
    	//jQuery('#star_comment').text('별 이미지에 마우스를 클릭 하시면 사용자 평가가 등록됩니다.');
    }else if(starId == '2'){  
    	document.getElementById('star2').src = document.getElementById('star2').src.replace('star_icon01.gif','star_icon02.gif');    
    	//jQuery('#star_comment').text('별 이미지에 마우스를 클릭 하시면 사용자 평가가 등록됩니다.');
    }else if(starId == '3'){  
    	document.getElementById('star3').src = document.getElementById('star3').src.replace('star_icon01.gif','star_icon02.gif'); 
    	//jQuery('#star_comment').text('별 이미지에 마우스를 클릭 하시면 사용자 평가가 등록됩니다.');
    }else if(starId == '4'){  
    	document.getElementById('star4').src = document.getElementById('star4').src.replace('star_icon01.gif','star_icon02.gif'); 
    	//jQuery('#star_comment').text('별 이미지에 마우스를 클릭 하시면 사용자 평가가 등록됩니다.');
    }else if(starId == '5'){  
    	document.getElementById('star5').src = document.getElementById('star5').src.replace('star_icon01.gif','star_icon02.gif'); 
    	//jQuery('#star_comment').text('별 이미지에 마우스를 클릭 하시면 사용자 평가가 등록됩니다.');
    } 	
   }     
 
/**등록 후  평가점수 보이기**/
function f_regEval(evalSelect){     
    
	jQuery("#star_div").hide();   
	//jQuery("#login_msg").hide(); 
	var html = [];    
	var html2 = [];
	html2.push('<a href="javascript:f_creteEvaluation(2);"><img src="/home/images/main/star_icon02.gif"/></a>');   
	html2.push('<a href="javascript:f_creteEvaluation(3);"><img src="/home/images/main/star_icon02.gif"/></a>');   
	html2.push('<a href="javascript:f_creteEvaluation(4);"><img src="/home/images/main/star_icon02.gif"/></a>');   
	html2.push('<a href="javascript:f_creteEvaluation(5);"><img src="/home/images/main/star_icon02.gif"/></a>');   
	var bstar = html2.join('');
		
// todo: evalSelect  null check	
	
	if(evalSelect >= '1'){  
		html.push('<a href="javascript:f_creteEvaluation(1);"><img id="star1" src="/home/images/search/star_icon01.gif" alt="star" /></a>');
	}
	if(evalSelect >= '2'){  
		html.push('<a href="javascript:f_creteEvaluation(2);"><img id="star2" src="/home/images/search/star_icon01.gif" alt="star" /></a>');
		bstar = bstar.replace('<a href="javascript:f_creteEvaluation(2);"><img src="/home/images/main/star_icon02.gif"/></a>','');
	}
	if(evalSelect >= '3'){    
		html.push('<a href="javascript:f_creteEvaluation(3);"><img id="star3" src="/home/images/search/star_icon01.gif" alt="star" /></a>');
		bstar = bstar.replace('<a href="javascript:f_creteEvaluation(3);"><img src="/home/images/main/star_icon02.gif"/></a>','');
    }
	if(evalSelect >= '4'){    
		html.push('<a href="javascript:f_creteEvaluation(4);"><img id="star4" src="/home/images/search/star_icon01.gif" alt="star" /></a>');
		bstar = bstar.replace('<a href="javascript:f_creteEvaluation(4);"><img src="/home/images/main/star_icon02.gif"/></a>','');
    }
	if(evalSelect == '5'){	
		html.push('<a href="javascript:f_creteEvaluation(5);"><img id="star5" src="/home/images/search/star_icon01.gif" alt="star" /></a>');
		bstar = bstar.replace('<a href="javascript:f_creteEvaluation(5);"><img src="/home/images/main/star_icon02.gif"/></a>','');
    }	 
	html.push(bstar);
	 
	//if(evalSelect > 0){  
		//html2.push('평가점수를 등록하셨습니다.'); 
   // }	 
	document.getElementById('star_div').innerHTML = html.join('');   
	//document.getElementById('login_msg').innerHTML = html2.join('');  
    jQuery("#star_div").show();   
    //jQuery("#login_msg").show();   
    //jQuery("#star_comment").hide();  
	
}       
 
/**위키백과 검색**/
function f_wikiSearch(){   
  var domesticGbn = "1";
	 if(document.getElementById('radio-1').checked){domesticGbn = "2";}
	 var value = document.getElementById('wikiValue').value;
   
	    if(domesticGbn == "1"){  
		   if (value == ""){
				alert("검색어를 입력해 주세요!!");
				document.getElementById('wikiValue').focus();
				return;
			}
			else{
				var url = encodeURI('http://ko.wikipedia.org/w/index.php?search='+ value);
				window.open(url, '', ''); 
			}
		}else{  
			if (value == ""){
				alert("검색어를 입력해 주세요!!");
				document.getElementById('wikiValue').focus();
				return;
			}
			else{
				var url = encodeURI('http://en.wikipedia.org/wiki/'+ value);
				window.open(url, '', ''); 
			}
		}		    
}	  

/**국가지식포털 검색**/
function f_knowledgeSearch(){   
 
	 var value = document.getElementById('knowledgeValue').value;
   		if (value == ""){
				alert("검색어를 입력해 주세요!!");
				document.getElementById('wikiValue').focus();
				return;
			}
			else{
				var url = encodeURI('https://www.knowledge.go.kr/SearchSF1/search_result.jsp?tType=all&mType=all&startCount=&resultcount=3&notLog=N&reSearch=&sortField=RANK&sortOrder=1&colAlltrue=&mc_collection=all&rccollection=all&page=1&detail=none&inSearch=block&resourcecodeex=all&reqkind=0&collection=all&searchText=' + value + '&m_type=all');
				window.open(url, '', ''); 
			}
}

 

	


    
 
		
 
	