var OxO76d3=["INPUT","TEXTAREA","DIV","SPAN","","contentWindow","innerHTML","body","document","length","type","text","id","isContentEditable","showModalDialog","MSIE","userAgent","?","?Modal=true","\x26Modal=true","dialogHeight:340px; dialogWidth:395px; edge:Raised; center:Yes; help:No; resizable:Yes; status:No; scroll:No","left=","availWidth",",top=","availHeight",",height=300,width=400,scrollbars=no,resizable=no,toolbars=no,status=no,menubar=no,location=no","ElementIndex","dialogArguments","window","opener","value","SpellMode","start","suggest","end","SpellingForm","checkElements","innerText","StatusText","Spell Checking Text ...","CurrentText","WordIndex","Spell Check Complete","closeeditordialog","close","selectedIndex","ReplacementWord","form","options"];var showCompleteAlert=true;var tagGroup= new Array(OxO76d3[0],OxO76d3[1],OxO76d3[2],OxO76d3[3]);var checkElements= new Array();function getText(Ox1f5){var Ox1f6=document.getElementById(checkElements[Ox1f5]);var Ox1f7=OxO76d3[4];var Ox1f8=document.getElementById(Ox1f6.id);if(Ox1f8[OxO76d3[5]]){Ox1f7=Ox1f8[OxO76d3[5]][OxO76d3[8]][OxO76d3[7]][OxO76d3[6]];} else {Ox1f7=Ox1f8[OxO76d3[8]][OxO76d3[7]][OxO76d3[6]];} ;return Ox1f7;} ;function setText(Ox1f5,Ox1fa){var Ox1f6=document.getElementById(checkElements[Ox1f5]);var Ox1f8=document.getElementById(Ox1f6.id);if(Ox1f8[OxO76d3[5]]){Ox1f8[OxO76d3[5]][OxO76d3[8]][OxO76d3[7]][OxO76d3[6]]=Ox1fa;} else {Ox1f8[OxO76d3[8]][OxO76d3[7]][OxO76d3[6]]=Ox1fa;} ;} ;function checkSpelling(){checkElements= new Array();for(var i=0;i<tagGroup[OxO76d3[9]];i++){var Ox1fc=tagGroup[i];var Ox1fd=document.getElementsByTagName(Ox1fc);for(var x=0;x<Ox1fd[OxO76d3[9]];x++){if((Ox1fc==OxO76d3[0]&&Ox1fd[x][OxO76d3[10]]==OxO76d3[11])||Ox1fc==OxO76d3[1]){checkElements[checkElements[OxO76d3[9]]]=Ox1fd[x][OxO76d3[12]];} else {if((Ox1fc==OxO76d3[2]||Ox1fc==OxO76d3[3])&&Ox1fd[x][OxO76d3[13]]){checkElements[checkElements[OxO76d3[9]]]=Ox1fd[x][OxO76d3[12]];} ;} ;} ;} ;openSpellChecker();} ;function checkSpellingById(Ox93,Ox1ff){checkElements= new Array();checkElements[checkElements[OxO76d3[9]]]=Ox93;openSpellChecker(Ox1ff);} ;function checkElementSpelling(Ox1f6){checkElements= new Array();checkElements[checkElements[OxO76d3[9]]]=Ox1f6[OxO76d3[12]];openSpellChecker();} ;function openSpellChecker(Ox1ff){if(window[OxO76d3[14]]&&navigator[OxO76d3[16]].indexOf(OxO76d3[15])!=-1){var Ox202;if(Ox1ff.indexOf(OxO76d3[17])==-1){Ox202=OxO76d3[18];} else {Ox202=OxO76d3[19];} ;var Ox203=window.showModalDialog(Ox1ff+Ox202,window,OxO76d3[20]);} else {var Ox204=window.open(Ox1ff,null,OxO76d3[21]+(screen[OxO76d3[22]]-400)/2+OxO76d3[23]+(screen[OxO76d3[24]]-400)/2+OxO76d3[25]);} ;} ;var iElementIndex=-1;var parentWindow;function initialize(){iElementIndex=parseInt(document.getElementById(OxO76d3[26]).value);if(parent[OxO76d3[28]][OxO76d3[27]]){parentWindow=parent[OxO76d3[28]][OxO76d3[27]];} else {if(top[OxO76d3[29]]){parentWindow=top[OxO76d3[29]];} ;} ;var Ox208=document.getElementById(OxO76d3[31])[OxO76d3[30]];switch(Ox208){case OxO76d3[32]:break ;;case OxO76d3[33]:updateText();break ;;case OxO76d3[34]:updateText();;default:if(loadText()){document.getElementById(OxO76d3[35]).submit();} else {endCheck();} ;break ;;} ;} ;function loadText(){if(!parentWindow[OxO76d3[8]]){return false;} ;for(++iElementIndex;iElementIndex<parentWindow[OxO76d3[36]][OxO76d3[9]];iElementIndex++){var Ox20a=parentWindow.getText(iElementIndex);if(Ox20a[OxO76d3[9]]>0){updateSettings(Ox20a,0,iElementIndex,OxO76d3[32]);document.getElementById(OxO76d3[38])[OxO76d3[37]]=OxO76d3[39];return true;} ;} ;return false;} ;function updateSettings(Ox20c,Ox20d,Ox20e,Ox20f){document.getElementById(OxO76d3[40])[OxO76d3[30]]=Ox20c;document.getElementById(OxO76d3[41])[OxO76d3[30]]=Ox20d;document.getElementById(OxO76d3[26])[OxO76d3[30]]=Ox20e;document.getElementById(OxO76d3[31])[OxO76d3[30]]=Ox20f;} ;function updateText(){if(!parentWindow[OxO76d3[8]]){return false;} ;var Ox20a=document.getElementById(OxO76d3[40])[OxO76d3[30]];parentWindow.setText(iElementIndex,Ox20a);} ;function endCheck(){if(showCompleteAlert){alert(OxO76d3[42]);} ;closeWindow();} ;function closeWindow(){(top[OxO76d3[43]]||top[OxO76d3[44]])();} ;function changeWord(Ox1f6){var Ox214=Ox1f6[OxO76d3[45]];Ox1f6[OxO76d3[47]][OxO76d3[46]][OxO76d3[30]]=Ox1f6[OxO76d3[48]][Ox214][OxO76d3[30]];} ;