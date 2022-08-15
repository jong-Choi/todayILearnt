

// 토글 보이고 감추기
function toggle(ele){ /* 노드 감추기/보이기 */
if(typeof ele == "string") ele = document.getElementById(ele);
// css의 display 값 받아오기
var value = null;
if(ele.currentStyle) var value = ele.currentStyle['display'];
else if(document.defaultView.getComputedStyle) var value = document.defaultView.getComputedStyle(ele,null)['display'];
// none일때와 아닐때 다르게 먹이기
if(value != "none") (ele.style.display != 'none') ? ele.style.display = 'none' : ele.style.display = '';
else (ele.style.display != 'block') ? ele.style.display = 'block' : ele.style.display = ''
return false;
}
function eleshow(ele) { /* 보이기 */
	if(typeof ele == "string") ele = document.getElementById(ele);
	ele.style.display = 'block';
	return false;
}
function elehidden(ele) { /* 감추기 */
	if(typeof ele == "string") ele = document.getElementById(ele);
	ele.style.display = 'none';
	return false;
}


// gnb menu - k
function f_gnb_control(cId,imgId,gnbId){ 
	
	var objwrap = document.getElementById(cId);
	var imgMenu = objwrap.getElementsByTagName("img");
	
	for (var i=1;i<=imgMenu.length;i++){
		if(gnbId==0 || (gnbId>0 && i!=gnbId)){
			
			var img = document.getElementById(imgId+i);
		
			img.onmouseover = function() {
				if(this.src.indexOf("_over.gif")!= -1){
					return false; 
				}else{
					this.src = this.src.replace(".gif","_over.gif");
				}
			}
		
			img.onmouseout = function() {
				this.src = this.src.replace("_over.gif",".gif");
			}
		
		} 
	} 
	
}

//좌측공백제거   
function getLtrim(str) {         
	 while(str.substring(0,1) == ' ')
	  str = str.substring(1, str.length);
	 return str;
}

function trim(s) {
  s += ''; // 숫자라도 문자열로 변환
  return s.replace(/^\s*|\s*$/g, '');
}
		

//메일주소형식 유효성체크   
function isEmailCheck(email) {    
	
	var mvalue = email ; 
  
    if (mvalue.search(/(\S+)@(\S+)\.(\S+)/) == -1) {
   		alert ("메일주소는 ID@고유도메인명 형식으로 구성되어야 합니다. \n\n예) ID@kocw.net");

   	return true; 
    }
} 

jQuery(function($){
	// List Tab Navigation notice
	var $tab_list = $('.notice.list');
	$tab_list.removeClass('jx').find('ul ul').hide();
	$tab_list.find('li li.active').parents('li').addClass('active');
	$tab_list.find('li.active>ul').show();
	$tab_list.each(function(){
		var $this = $(this);
		$this.height($this.find('li.active>ul').height()+40);
	});
	function listTabMenuToggle(event){
		var $this = $(this);
		$this.next('ul').show().parent('li').addClass('active').siblings('li').removeClass('active').find('>ul').hide();
		$this.closest('.tab.list').height($this.next('ul').height()+40);
		if($this.attr('href') === '#'){
			return false;
		}
	}
	$tab_list.find('>ul>li>a').click(listTabMenuToggle).focus(listTabMenuToggle);
	
	var gmStat = 0;
	//전체메뉴보기
	 $('#open_mOverview a[href="#mOverview"]').click(function(ma){ //mouseover 로도 활용할 수 있다. 
			ma.preventDefault();
			if(gmStat == 0){
				$("#mOverview").slideDown(); 
				gmStat=1;
			}else if(gmStat==1){
				$("#mOverview").slideUp(); 
				gmStat=0;
			}			
			//$("#mOverview").slideToggle(); 
		});
		
		$("#mOverview span a").click(function(ma){ //mouseover 로도 활용할 수 있다.
			ma.preventDefault();
			$("#mOverview").slideUp(); 
			gmStat=0;
		});
});

