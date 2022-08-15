function goSearch(){
    var frm = document.getElementById("search");
    jQuery('input[name=iStartCount]').val('0');
    jQuery('input[name=iGroupView]').val('5');
    jQuery('input[name=colName]').val('all');
    jQuery('input[name=exQuery]').val('');
    jQuery('input[name=query]').val(jQuery('#query').val());
    var str = document.getElementById("query").value;
    try{
        if(document.getElementsByName("check-1")[0].checked){
            frm.query.value = document.getElementsByName("check-1")[0].value+" "+str;
        }
    } catch(errObj){}

    frm.submit();
}


//groupby Search
function goGroupSearch(){
	var frm = document.search;
	var strExQuery = frm.exQuery.value;
	var strGroupField = frm.h_groupByField.value;
	
	strExQuery = "";
	
	objList = strGroupField.split(",");
	
	for(var idx=0; idx<objList.length; idx++){
		objGroupBy = document.getElementsByName("h_use_"+objList[idx]);
		if(objGroupBy.length>0){
			var strGroupValue = "";
			strGroupValue = objGroupBy[0].value;
			if(strGroupValue!=""){
				strGroupValue = strGroupValue.replace(/,/g,"|");
				strExQuery = strExQuery + "x"+objList[idx] + ":" + strGroupValue + ";";
			}
		}
	}
	frm.exQuery.value = strExQuery;
	frm.submit();
}

function goSearchRelation(arg){
    var frm = document.search;
    frm.query.value = arg;
    var str = frm.query.value;
    try{
        if(document.getElementsByName("check-1")[0].checked){
            frm.query.value = document.getElementsByName("check-1")[0].value+" "+str;
        }
    } catch(errObj){}
    frm.iStartCount.value = "0";
    frm.iGroupView.value="5";
    clearGroupByField();
    frm.colName.value = "all";
    frm.submit();
}
function goReSearchCheck(){
    var frm = document.search;
    if(document.getElementsByName("check-1")[0].checked){
        frm.query.value = "";
        document.getElementsByName("check-1")[0].value = frm.strQuery.value;
        frm.query.focus();
    } else {
        document.getElementsByName("check-1")[0].value = "";
    }
}
function goSearchRelationGroup(){
    var frm        = document.search;
    var objNum     = document.getElementsByName("chkRelation").length;
    var checkCount = 0;
    var values     = frm.query.value+" ";

    for(i=0;i<objNum;i++){
        if(document.getElementsByName("chkRelation")[i].checked){
            checkCount++;
            values += document.getElementsByName("chkRelation")[i].value+" ";
        }
    }
    if(checkCount>0){
        frm.query.value = values;
        frm.iStartCount.value = "0";
        frm.iGroupView.value="5";
        clearGroupByField();
        frm.colName.value = "all";
        frm.submit();
    }
}

function onHanja(){
	var frm   = document.search;
	if(frm.onHanja.value=="true"){
		frm.onHanja.value="false";
	}else{
		frm.onHanja.value="true";
	}
		
	frm.submit();
}

function goCate(col){
    var frm = document.search;
    frm.colName.value=col;
    frm.iStartCount.value="0";
    frm.iGroupView.value="5";
    frm.order.value = "1";
    frm.strSort.value = "RANK";
    frm.onHanja.value = "false";
    frm.exQuery.value="";
    frm.submit();
}

function selectSort(str){
	var frm = document.search;
	frm.strSort.value=str;
	frm.submit();
}


function selectOrder(str){
	var frm = document.search;
	frm.order.value=str;
	frm.submit();
}


function selectPage(str){
	var frm = document.search;
	frm.pageScale.value=str;
	frm.submit();
}

//groupby item list + 5
function goGroupCountAdd2(arg){
    var frm = document.search;
    var grpViewCount = frm.iGroupView.value;
    frm.iGroupView.value = parseInt(grpViewCount)+5;
    goGroupCountAdd(arg);
}

//groupby item list + 5
function goGroupCountAdd(arg){
    var frm = document.search;
    var grpViewCount = frm.iGroupView.value;
  
    var arr = arg.split(",");
    for(var i=0; i < arr.length ; i++){
        var totalFieldCount = 0 ;
        try{
        	alert('1');
            totalFieldCount =eval('document.all.totalCnt' +arr[i]+ '.value');
            alert(totalFieldCount);
        } catch(errObj){}
        for( var j=(grpViewCount-5) ; j < grpViewCount ; j++){
            try{

                var obj = eval('document.all.' +arr[i]+ j + '.style');
                obj.display = "block";
            } catch(errObj){}
        }
        if(Number(totalFieldCount)<= Number(grpViewCount)){
            try{
                var obj = eval('document.all.' +arr[i]+ '.style');
                obj.display = "none";
            } catch(errObj){}
        }
    }
}

//check box choice
function chkBox(valueName,checkName){
    var frm = document.search;
    var objValue = document.getElementsByName(valueName);
    var objCheck = document.getElementsByName(checkName);

    objValue[0].value = "";
    for(var idx=0; idx<objCheck.length; idx++){
        if(objCheck[idx].checked==true){
            objValue[0].value += objCheck[idx].value+",";
        }
    }
    objValue[0].value = objValue[0].value.substring(0,objValue[0].value.length-1);
}

//groupby value Clear
function clearGroupByField(){
    var frm = document.search;
    var objName = document.getElementsByName("h_groupByField");
    var objList = null;
    var objGroupBy = null;
    if((objName!=null) && (objName.length>0)){
        objList = objName[0].value.split(",");
        for(var idx=0; idx<objList.length; idx++){
            objGroupBy = document.getElementsByName("h_use_"+objList[idx]);
            if(objGroupBy.length>0)
                objGroupBy[0].value = "";
        }
    }
}

//groupby sort
function goGroupSort(obj,col,target){
    var frm = document.search;
    frm.iStartCount.value="0";
    if(obj=="BBS" || obj=="M1"){
        frm.strCateBigId.value = obj;
    }else{
        frm.strCateSmId.value = obj;
    }
    frm.strCate.value = col;
    frm.target.value = target;
    frm.strCateBigId.value="";
    frm.strCateSmId.value="";
    frm.submit();
}

function goExSort(obj,col,target,gubun){
    var frm = document.search;
    frm.iStartCount.value="0";
    frm.strCateBigId.value = "";
    frm.strCateSmId.value = "";
//  frm.deptNm.value ="";
//  frm.userNm.value ="";

    if(gubun=="dept"){
        frm.deptNm.value = obj;
    }else if(gubun=="user"){
        frm.userNm.value = obj;
    }else{
        if(obj=="BBS" || obj=="M1"){
            frm.strCateBigId.value = obj;
        }else{
            frm.strCateSmId.value = obj;
        }
    }
    frm.strCate.value = col;
    frm.target.value = target;
    frm.submit();
}


function goEcm(col, gubun){
    var frm = document.search;
    frm.iStartCount.value="0";
    frm.strCateBigId.value = gubun;
    frm.strCateSmId.value = "";
    frm.strCate.value = col;
    frm.submit();
}


//최근 검색어, 실시간 검색어 클릭
function goPop(popword) {
    document.getElementById("query").value = popword;
    goSearch();
}

//결과내 재검색
function CheckReQuery(obj) {
    var frm = document.search;
    if(obj.checked == true) {
        frm.strShowQuery.value = frm.query.value;
        frm.query.value = "";
    }else {
        frm.query.value = frm.strShowQuery.value;
    }
}

//서브탭
function goSub(col,colName){
    var frm = document.search;
    frm.target.value=col;
    /*if(col=="onDoc" || col=="ap_apvl"){
        frm.ssoOpen.value="A";
    }*/
    frm.strCate.value=colName;
    frm.strCateSmId.value="";
    frm.strCateBigId.value="";
    frm.iStartCount.value=0;
    frm.submit();
}

function goPage(count, target) {
    var frm = document.search;
    frm.iStartCount.value = count;
    frm.submit();
}

function goSort(obj) {
    var frm = document.search;
    frm.strSort.value = obj;
    frm.iStartCount.value="0";
    frm.submit();
}

function showExsearch() {
    var frm = document.search;

    if (eval("document.all.listtest.style.display != 'none'")) {    //block이면
        eval("document.all.listtest.style.display = 'none'");
        frm.status.value="N";
        frm.strSearchField.value="all";
        frm.userNm.value="";
        frm.deptNm.value="";
        document.search.s_date.value ='';
        document.search.e_date.value ='';
        frm.strStartTime.value="";
        frm.strEndTime.value="";
        //frm.ssoOpen.value="";
        goSearch();
    } else {
        eval("document.all.listtest.style.display = 'block'");
        document.search.s_date.value ='';
        document.search.e_date.value ='';
        frm.status.value="S";
    }
}

function ChangeField(allcheck, obj) {
    var frm = document.search;
    var checkbox = document.getElementsByName("search_fields");
    var colls = frm.strCate.value;

    //하나 이상의 검색필드 확인
    var fg = 0;
    for(var idx = 0;idx < checkbox.length; idx++) {
        if(checkbox[idx].checked == true) {
            fg = 1;
            break;
        }
    }
    if(fg == 0) {
        obj.checked = true;
        alert("적어도 하나이상의 검색필드를 지정해야 합니다.");
        return;
    }

    //전체 외의 다른 것이 체크 되면 전체 false
    //전체가 클릭되면 다른것들 모드 false
    if(allcheck == "false") {
        checkbox[0].checked = false;
    }else {
        for(var idx=1; idx<checkbox.length; idx++) {
            checkbox[idx].checked = false;
        }
    }

    //전체 체크 박스가 체크 되면 나머지것들은 모두 un체크
    if(checkbox[0].checked == true) {
        frm.strSearchField.value = "all";
    }else {//그 외의 박스가 체크 되면 값들을 넣어 준다.
        checkbox[0].checked = false;
        frm.strSearchField.value = "";
        for(var idx=1; idx<checkbox.length; idx++) {
            if(checkbox[idx].checked == true) {
                frm.strSearchField.value += checkbox[idx].value+",";
                //alert(frm.strSearchField.value);
            }
        }
        frm.strSearchField.value = frm.strSearchField.value.substring(0,frm.strSearchField.value.length-1);
    }
}

function changeBranch(obj){
    var frm = document.search;
    frm.branch.value=obj;
    //alert(frm.branch.value);
    frm.submit();
}


//달력
function OpenCalText(obj) {
    var startDate ="";
    var endDate ="";
    CALENDARTYPE="text";
    CALENDARTARGET=obj;
    targetField=CALENDARTARGET.name;
    if(targetField == 's_date') {
        startDate = eval(document.search.strStartTime.value);
    } else if(targetField == 'e_date'){
        endDate = eval(document.search.strEndTime.value);
    }
    tempYear = (new Date()).getYear();
    STARTYEAR = (new Date()).getYear() - 10;

    var CalWin=open( 'calendar.jsp', 'CALENDAR', 'left=350,top=100,width=270,height=310,resizable=yes' );
}

function setCalendar( y, m, d ) {
    if(parseInt(y)<10) y = "0"+y
    if(parseInt(m)<10) m = "0"+m
    if(parseInt(d)<10) d = "0"+d
    //-------------------------------------
    // 2004.04.26 jangwooo
    //-------------------------------------
    var targetField = CALENDARTARGET;
    var compareField = '';

    if(targetField == 's_date') {
        document.search.s_date.value=y + '-' + m + '-' + d;
        document.search.strStartTime.value=document.search.s_date.value;
    } else if(targetField == 'e_date'){
        document.search.e_date.value=y + '-' + m + '-' + d;
        document.search.strEndTime.value=document.search.e_date.value;
    }
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}
function resizeWin(){
    window.resizeTo(950,750);
}

function analyzer(obj){
    var frm = document.search;
    var checkbox = document.getElementsByName("kma");

    frm.useKma.value = "";
    for(var idx=0; idx<checkbox.length; idx++){
        if(checkbox[idx].checked==true){
            frm.useKma.value += checkbox[idx].value+",";
        }
    }
    frm.useKma.value = frm.useKma.value.substring(0,frm.useKma.value.length-1);
    //alert(frm.useKma.value);
}

function notOpen(){
    alert("해당 문서에 대한 열람 권한이 없습니다.");
}

function goSso(obj){
    var frm = document.search;
    frm.ssoOpen.value = obj;
    frm.strCate.value="biz";
    frm.submit();
}


//goSearch() 수정

    /*if(document.search.s_date.value != '') {
        frm.strStartTime.value=document.search.s_date.value;
        if(document.search.e_date.value ==''){
            alert('기간  종료일을 입력해 주십시오');
            document.search.e_date.focus();
            return false;
        }
    }else{
        frm.strStartTime.value='';
    }

    if(document.search.e_date.value != '') {
        frm.strEndTime.value=document.search.e_date.value;
        if(document.search.s_date.value ==''){
            alert('기간  시작일을 입력해 주십시오');
            document.search.s_date.focus();
            return false;
        }
    }else{
        frm.strEndTime.value='';
    }*/
