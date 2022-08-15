	
	//===========================================================
	// 링크 만들기 실행
    // 2009-12-11
    // kdonghwa
	//===========================================================
	jQuery(function(){ 
		makeProfessorLink();
		makeKeywordLink();
	});
	
	
	//===========================================================
	// 교수자에 링크 걸기
    // 2009-12-11
    // kdonghwa
	//===========================================================
	function makeProfessorLink(){
		jQuery('span[name=spProfessorName]').each(function(i){
			var proNames = jQuery(this).text();			
			
			if ( proNames.length > 0 ){			
				jQuery(this).text('');				
				var arrProName = proNames.split(',');
				var html = "";				
				for(var i=0; i<arrProName.length; i++  ){
					html += ', ' + '<a style="text-decoration : underline; color:#121212; cursor:pointer;" name="aProfessorNameLink" title="교수자명으로 검색하기">' + jQuery.trim(arrProName[i]) + '</a>'; 
				}
				
				if ( html.length > 0 )
					html = html.substring(1);				
				jQuery(this).html(html);
				
			}
		});
		//클릭 이벤트 설정
		jQuery('a[name=aProfessorNameLink]').click(function(obj){ 
			var proName = jQuery(this).text();
			jQuery('form#fmprofessorSearch > input[name=query]').val( proName );
			jQuery('form#fmprofessorSearch').submit();
		});

	}
	
	// ===========================================================
	// 교수자명으로  통합검색용 폼만들기
    // 2009-12-11
    // kdonghwa
	//===========================================================
	document.write('<form id="fmprofessorSearch" action="/home/search/search.do" method="post">');
	document.write('<input type="hidden" name="query" value="" />');
	document.write('<input type="hidden" name="open_top_select" value="znAll" />');
	document.write('</form>');	
	//===========================================================
	// 키워드에 링크 걸기
    // 2013-03-08
    // 
	//===========================================================
	function makeKeywordLink(){
		
		jQuery('span[name=spKeyword]').each(function(i){
			var keywords = jQuery(this).text();		
			
			if ( keywords.length > 0 ){			

				jQuery(this).text('');				

				var arrKeyword = keywords.split(',');
				var html = "";				

				for(var i=0; i<arrKeyword.length; i++  ){
					html += ', ' + '<a style="text-decoration : underline; color:#121212;" href="#redirect" name="aKeywordLink" title="키워드로 검색하기">' + jQuery.trim(arrKeyword[i]) + '</a>'; 
				}
				
				if ( html.length > 0 )
					html = html.substring(1);				

				jQuery(this).html(html);
				
			}
		});
		
		//클릭 이벤트 설정
		jQuery('a[name=aKeywordLink]').click(function(obj){
			var keyword = jQuery(this).text();
			jQuery('form#fmKeywordSearch > input[name=query]').val( keyword );
			jQuery('form#fmKeywordSearch').submit();
		});

		

	}

	
	// ===========================================================
	// 키워드로  통합검색용 폼만들기
    // 2013-03-08
    // 
	//===========================================================
	document.write('<form id="fmKeywordSearch" action="/home/search/search.do" method="post">');
	document.write('<input type="hidden" name="query" value="" />');
	document.write('<input type="hidden" name="open_top_select" value="znAll" />');
	document.write('</form>');	


	
	
