define(['pipAPI', 'https://tmo286.github.io/scripts-for-Qualtrics/fullaiateng.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category2 : {
			name : 'אמת', //Will appear in the data.
			title : {
				media : {word : 'True'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {word : 'אני בבניין של המחלקה לפסיכולוגיה'}, 
    			{word : 'אני בחדר קטן עם מחשב'}, 
    			{word : 'אני עושה ניסוי בפסיכולוגיה'}, 
    			{word : 'אני במעבדה לפסיכולוגיה'}, 
    			{word : 'אני מול המחשב'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'2.1em'}
		},	
		category1:	{
			name : 'שקר', //Will appear in the data.
			title : {
				media : {word : 'שקר'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {word : 'אני מטפס על הר'}, 
    			{word : 'אני בחוף הים'}, 
    			{word : 'אני אוכל במסעדה במרכז העיר'}, 
    			{word : 'אני משחק עכשיו כדורגל'}, 
    			{word : 'אני נמצא עכשיו בחנות'}			
				], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'2.1em'}
		},
			attribute1 :
			{
				name : 'יומולדת 6 בגן חיות',
				title : {
					media : {word : 'יומולדת 6 בגן חיות'},
					css : {color:'#0000FF','font-size':'2em'},
					height : 4 //Used to position the "Or" in the combined block.
				},
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word: 'ביקרתי בגן חיות ביומולדת 6'},
					{word: 'אכלתי פיצה ביומולדת 6'},
					{word: 'ליטפתי ארנב ביומולדת 6'},
					{word: 'ראיתי פיל שמח ביומולדת 6'},
					{word: 'הצלטמתי עם סוס ביומולדת 6'}
				],
				//Stimulus css
				stimulusCss : {color:'#0000FF','font-size':'2.1em'}
			},
			attribute2 :
			{
				name : 'יומולדת 6 בים',
				title : {
					media : {word : 'יומולדת 6 בים'},
					css : {color:'#0000FF','font-size':'2em'},
					height : 4 //Used to position the "Or" in the combined block.
				},
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word: 'ביקרתי בים ביומולדת 6'},
					{word: 'אכלתי פנקייק ביומולדת 6'},
					{word: 'ליטפתי גור בחוף ביומולדת 6'},
					{word: 'שיחקתי בחול יומולודת שמונה'},
					{word: 'נרטבו לי הרגליים ביומולדת 8'}
				],
				//Stimulus css
				stimulusCss : {color:'#0000FF','font-size':'2.1em'}
			},	
			instAttributePractice: '<div><p align="center" style="font-size:20px; font-family:arial; direction: rtl">' +
                '<font color="#000000"><u> חלק blockNum מתוך nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align: center; vertical-align:bottom; margin-right:10px; font-family:arial; direction: rtl">' +
                'הקישו באצבע שמאל על מקש <b>E</b> ' + 
                'עבור פריטים ששייכים לקטגוריה <font color="#0000ff">leftAttribute</font><br/>'+
                'הקישו באצבע ימין על מקש <b>I</b> '+ 
                'עבור פריטים ששייכים לקטגוריה <font color="#0000ff">rightAttribute</font><br/>'+
                'אם תבצעו טעות, <font color="#ff0000"><b>X</b></font> אדום יופיע<br/> '+
				'לחצו על המקש האחר כדי להמשיך<br/>' +
				'<u>בצעו מהר ככל האפשר אך היו מדויקים</u><br/><br/></p>'+
				'<p align="center">לחצו על מקש הרווח כאשר אתם מוכנים להתחיל</font></p></div>',
				
			instCategoriesPractice: '<div><p align="center" style="font-size:20px; font-family:arial; direction: rtl">' +
                '<font color="#000000"><u> חלק blockNum מתוך nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align:center; vertical-align:bottom; margin-right:10px; font-family:arial; direction: rtl">' +
                'הקישו באצבע שמאל על מקש <b>E</b> ' + 
                'עבור פריטים ששייכים לקטגוריה <font color="#336600">leftCategory</font><br/>'+
                'הקישו באצבע ימין על מקש <b>I</b> ' + 
                'עבור פריטים ששייכים לקטגוריה <font color="#336600">rightCategory</font><br/>'+
                'אם תבצעו טעות, <font color="#ff0000"><b>X</b></font> אדום יופיע<br/> '+
				'לחצו על המקש האחר כדי להמשיך<br/>' +
				'<u>השיבו מהר ככל האפשר אך היו מדויקים</u><br/><br/></p>'+
				'<p align="center">לחצו על מקש הרווח כאשר אתם מוכנים להתחיל</font></p></div>',	
				
			instFirstCombined : '<div><p align="center" style="font-size:20px; font-family:arial; direction: rtl">' +
                '<font color="#000000"><u> חלק blockNum מתוך nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align: center; vertical-align:bottom; margin-right:10px; font-family:arial; direction: rtl">' +
                'הקישו באצבע שמאל על מקש <b>E</b> '+ 
                'עבור פריטים ששייכים לקטגוריה <font color="#0000ff">leftAttribute</font> ' +
                'או עבור פריטים ששייכים לקטגוריה <font color="#336600">leftCategory</font><br/>'+
                'הקישו באצבע ימין על מקש <b>I</b> ' + 
                'עבור פריטים ששייכים לקטגוריה <font color="#0000ff">rightAttribute</font> '+
                'או עבור פריטים ששייכים לקטגוריה <font color="#336600">rightCategory</font><br/>'+
				'כל פריט מתאים רק לקטגוריה אחת<br/><br/>' +
                'אם תבצעו טעות, <font color="#ff0000"><b>X</b></font> אדום יופיע<br/>'+
				'לחצו על המקש האחר כדי להמשיך<br/>' +
				'<u>השיבו מהר ככל האפשר אך היו מדויקים</u><br/><br/></p>'+
				'<p align="center">לחצו על מקש הרווח כאשר אתם מוכנים להתחיל</font></p></div>',
				
			instSecondCombined : '<div><p align="center" style="font-size:20px; font-family:arial; direction: rtl">' +
                '<font color="#000000"><u> חלק blockNum מתוך nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align: center; vertical-align:bottom; margin-right:10px; font-family:arial; direction: rtl">' +
                'הקישו באצבע שמאל על מקש <b>E</b> '+ 
                'עבור פריטים ששייכים לקטגוריה <font color="#0000ff">leftAttribute</font> '+
                'או עבור פריטים ששייכים לקטגוריה <font color="#336600">leftCategory</font><br/>'+
                'הקישו באצבע ימין על מקש <b>I</b> '+ 
                'עבור פריטים ששייכים לקטגוריה <font color="#0000ff">rightAttribute</font> ' +
                'או עבור פריטים ששייכים לקטגוריה <font color="#336600">rightCategory</font><br/>'+
				'כל פריט מתאים רק לקטגוריה אחת<br/><br/>' +
                'אם תבצעו טעות, <font color="#ff0000"><b>X</b></font> אדום יופיע<br/>'+
				'לחצו על המקש האחר כדי להמשיך<br/>' +
				'<u>השיבו מהר ככל האפשר אך היו מדויקים</u><br/><br/></p>'+
				'<p align="center">לחצו על מקש הרווח כאשר אתם מוכנים להתחיל</font></p></div>',
				
			instSwitchCategories : '<div><p align="center" style="font-size:20px; font-family:arial; direction: rtl">' +
                '<font color="#000000"><u> חלק blockNum מתוך nBlocks </u><br/><br/></p>' +
				'<p style="font-size:20px; text-align: center; vertical-align:bottom; margin-right:10px; font-family:arial; direction: rtl">' +
				'<b>שימו לב! הקטגוריות החליפו מיקום</b><br/>' +
                'הקישו באצבע שמאל על מקש <b>E</b> '+ 
                'עבור פריטים ששייכים לקטגוריה <font color="#0000ff">leftCategory</font><br/>'+
                'הקישו באצבע ימין על מקש <b>I</b> '+ 
                'עבור פריטים ששייכים לקטגוריה <font color="#0000ff">rightCategory</font><br/>'+
				'<u>השיבו מהר ככל האפשר אך היו מדויקים</u><br/><br/></p>'+
				'<p align="center">לחצו על מקש הרווח כאשר אתם מוכנים להתחיל</font></p></div>',
			leftKeyText : '"E" מקש', 
			rightKeyText : '"I" מקש', 
            orText : 'או',
			blockFirstCombined_nTrials : 60,
			blockFirstCombined_nMiniBlocks : 20,
			blockSecondCombined_nTrials : 0, //Change to 0 if you want 5 blocks (you would probably want to increase blockFirstCombined_nTrials).	
			blockSwitch_nTrials : 20,
			blockSwitch_nMiniBlocks : 5,	
	    randomAttSide : true,
	    randomBlockOrder : false,		
            remindErrorText :'<p align="center" style="font-size:"0.6em"; font-family:arial">' +
			'<p/>',
			finalText : 'לחצו על מקש הרווח בכדי להמשיך למטלה הבאה' 			
	});
});
