var OxOe43a=["top","hiddenDirectory","hiddenFile","hiddenAlert","hiddenAction","hiddenActionData","This function is disabled in the demo mode.","disabled","[[Disabled]]","[[SpecifyNewFolderName]]","","value","createdir","[[CopyMoveto]]","/","move","copy","[[AreyouSureDelete]]","parentNode","text","isdir","true",".","[[SpecifyNewFileName]]","rename","True","False",":","path","FoldersAndFiles","TR","length","onmouseover","this.bgColor=\x27#eeeeee\x27;","onmouseout","this.bgColor=\x27\x27;","nodeName","INPUT","changedir","url","TargetUrl","htmlcode","onload","getElementsByTagName","table","sortable"," ","className","id","rows","cells","innerHTML","\x3Ca href=\x22#\x22 onclick=\x22ts_resortTable(this);return false;\x22\x3E","\x3Cspan class=\x22sortarrow\x22\x3E\x26nbsp;\x3C/span\x3E\x3C/a\x3E","string","undefined","innerText","childNodes","nodeValue","nodeType","span","cellIndex","TABLE","sortdir","down","\x26uarr;","up","\x26darr;","sortbottom","tBodies","sortarrow","\x26nbsp;","20","19","Form1","Image1","FolderDescription","CreateDir","Copy","Move","Delete","DoRefresh","name_Cell","size_Cell","op_Cell","divpreview","Table3","Table4","sel_target","inp_color","inp_color_preview","inc_class","inp_id","inp_index","inp_access","Table8","inp_title","Button1","Button2","btn_zoom_in","btn_zoom_out","btn_Actualsize","a","editor","color","style","backgroundColor","class","title","target","tabIndex","accessKey","href","href_cetemp",".jpeg",".jpg",".gif",".png","\x3CIMG src=\x27","\x27\x3E",".bmp","\x26nbsp;\x3Cembed src=\x22","\x22 quality=\x22high\x22 width=\x22200\x22 height=\x22200\x22 type=\x22application/x-shockwave-flash\x22 pluginspage=\x22http://www.macromedia.com/go/getflashplayer\x22\x3E\x3C/embed\x3E\x0A",".swf",".avi",".mpg",".mp3","\x26nbsp;\x3Cembed name=\x22MediaPlayer1\x22 src=\x22","\x22 autostart=-1 showcontrols=-1  type=\x22application/x-mplayer2\x22 width=\x22240\x22 height=\x22200\x22 pluginspage=\x22http://www.microsoft.com/Windows/MediaPlayer\x22 \x3E\x3C/embed\x3E\x0A",".mpeg","\x3Cdiv\x3E\x3C/div\x3E","\x3Cdiv\x3E\x26nbsp;\x3C/div\x3E","\x3Cdiv\x3E\x26#160;\x3C/div\x3E","\x3Cp\x3E\x3C/p\x3E","\x3Cp\x3E\x26#160;\x3C/p\x3E","\x3Cp\x3E\x26nbsp;\x3C/p\x3E","name","zoom","onclick","display","none","align","absmiddle","wrapupPrompt","iepromptfield","body","div","IEPromptBox","promptBlackout","border","1px solid #b0bec7","#f0f0f0","position","absolute","width","330px","zIndex","100","\x3Cdiv style=\x22width: 100%; padding-top:3px;background-color: #DCE7EB; font-family: verdana; font-size: 10pt; font-weight: bold; height: 22px; text-align:center; background:url(Load.ashx?type=image\x26file=formbg2.gif) repeat-x left top;\x22\x3E[[InputRequired]]\x3C/div\x3E","\x3Cdiv style=\x22padding: 10px\x22\x3E","\x3CBR\x3E\x3CBR\x3E","\x3Cform action=\x22\x22 onsubmit=\x22return wrapupPrompt()\x22\x3E","\x3Cinput id=\x22iepromptfield\x22 name=\x22iepromptdata\x22 type=text size=46 value=\x22","\x22\x3E","\x3Cbr\x3E\x3Cbr\x3E\x3Ccenter\x3E","\x3Cinput type=\x22submit\x22 value=\x22\x26nbsp;\x26nbsp;\x26nbsp;[[OK]]\x26nbsp;\x26nbsp;\x26nbsp;\x22\x3E","\x26nbsp;\x26nbsp;\x26nbsp;\x26nbsp;\x26nbsp;\x26nbsp;","\x3Cinput type=\x22button\x22 onclick=\x22wrapupPrompt(true)\x22 value=\x22\x26nbsp;[[Cancel]]\x26nbsp;\x22\x3E","\x3C/form\x3E\x3C/div\x3E","100px","left","offsetWidth","px","block","CuteEditor_ColorPicker_ButtonOver(this)"];function Window_GetDialogTop(Ox1a1){return Ox1a1[OxOe43a[0]];} ;var hiddenDirectory=Window_GetElement(window,OxOe43a[1],true);var hiddenFile=Window_GetElement(window,OxOe43a[2],true);var hiddenAlert=Window_GetElement(window,OxOe43a[3],true);var hiddenAction=Window_GetElement(window,OxOe43a[4],true);var hiddenActionData=Window_GetElement(window,OxOe43a[5],true);function CreateDir_click(){if(isDemoMode){alert(OxOe43a[6]);return false;} ;if(Event_GetSrcElement()[OxOe43a[7]]){alert(OxOe43a[8]);return false;} ;if(Browser_IsIE7()){IEprompt(Ox218,OxOe43a[9],OxOe43a[10]);function Ox218(Ox379){if(Ox379){hiddenActionData[OxOe43a[11]]=Ox379;hiddenAction[OxOe43a[11]]=OxOe43a[12];window.PostBackAction();return true;} else {return false;} ;} ;return Event_CancelEvent();} else {var Ox379=prompt(OxOe43a[9],OxOe43a[10]);if(Ox379){hiddenActionData[OxOe43a[11]]=Ox379;return true;} else {return false;} ;return false;} ;} ;function Move_click(){if(isDemoMode){alert(OxOe43a[6]);return false;} ;if(Event_GetSrcElement()[OxOe43a[7]]){alert(OxOe43a[8]);return false;} ;if(Browser_IsIE7()){IEprompt(Ox218,OxOe43a[13],OxOe43a[14]);function Ox218(Ox379){if(Ox379){hiddenActionData[OxOe43a[11]]=Ox379;hiddenAction[OxOe43a[11]]=OxOe43a[15];window.PostBackAction();return true;} else {return false;} ;} ;return Event_CancelEvent();} else {var Ox379=prompt(OxOe43a[13],OxOe43a[14]);if(Ox379){hiddenActionData[OxOe43a[11]]=Ox379;return true;} else {return false;} ;return false;} ;} ;function Copy_click(){if(isDemoMode){alert(OxOe43a[6]);return false;} ;if(Event_GetSrcElement()[OxOe43a[7]]){alert(OxOe43a[8]);return false;} ;if(Browser_IsIE7()){IEprompt(Ox218,OxOe43a[13],OxOe43a[14]);function Ox218(Ox379){if(Ox379){hiddenActionData[OxOe43a[11]]=Ox379;hiddenAction[OxOe43a[11]]=OxOe43a[16];window.PostBackAction();return true;} else {return false;} ;} ;return Event_CancelEvent();} else {var Ox379=prompt(OxOe43a[13],OxOe43a[14]);if(Ox379){hiddenActionData[OxOe43a[11]]=Ox379;return true;} else {return false;} ;return false;} ;} ;function Delete_click(){if(isDemoMode){alert(OxOe43a[6]);return false;} ;if(Event_GetSrcElement()[OxOe43a[7]]){alert(OxOe43a[8]);return false;} ;return confirm(OxOe43a[17]);} ;function EditImg_click(img){if(isDemoMode){alert(OxOe43a[6]);return false;} ;if(img[OxOe43a[7]]){alert(OxOe43a[8]);return false;} ;var Ox37e=img[OxOe43a[18]][OxOe43a[18]];var Ox37f=Ox37e[OxOe43a[19]];var name;var Ox380;if(Browser_IsOpera()){Ox380=Ox37e.getAttribute(OxOe43a[20])==OxOe43a[21];} else {Ox380=Ox37e[OxOe43a[20]];} ;if(Browser_IsIE7()){var Oxc3;if(Ox380){IEprompt(Ox218,OxOe43a[9],Ox37f);} else {var i=Ox37f.lastIndexOf(OxOe43a[22]);Oxc3=Ox37f.substr(i);var Ox12=Ox37f.substr(0,Ox37f.lastIndexOf(OxOe43a[22]));IEprompt(Ox218,OxOe43a[23],Ox12);} ;function Ox218(Ox379){if(Ox379&&Ox379!=Ox37e[OxOe43a[19]]){if(!Ox380){Ox379=Ox379+Oxc3;} ;hiddenAction[OxOe43a[11]]=OxOe43a[24];hiddenActionData[OxOe43a[11]]=(Ox380?OxOe43a[25]:OxOe43a[26])+OxOe43a[27]+Ox37e[OxOe43a[28]]+OxOe43a[27]+Ox379;window.PostBackAction();} ;} ;} else {if(Ox380){name=prompt(OxOe43a[9],Ox37f);} else {var i=Ox37f.lastIndexOf(OxOe43a[22]);var Oxc3=Ox37f.substr(i);var Ox12=Ox37f.substr(0,Ox37f.lastIndexOf(OxOe43a[22]));name=prompt(OxOe43a[23],Ox12);if(name){name=name+Oxc3;} ;} ;if(name&&name!=Ox37e[OxOe43a[19]]){hiddenAction[OxOe43a[11]]=OxOe43a[24];hiddenActionData[OxOe43a[11]]=(Ox380?OxOe43a[25]:OxOe43a[26])+OxOe43a[27]+Ox37e[OxOe43a[28]]+OxOe43a[27]+name;window.PostBackAction();} ;} ;return Event_CancelEvent();} ;setMouseOver();function setMouseOver(){var FoldersAndFiles=Window_GetElement(window,OxOe43a[29],true);var Ox383=FoldersAndFiles.getElementsByTagName(OxOe43a[30]);for(var i=0;i<Ox383[OxOe43a[31]];i++){var Ox37e=Ox383[i];Ox37e[OxOe43a[32]]= new Function(OxOe43a[10],OxOe43a[33]);Ox37e[OxOe43a[34]]= new Function(OxOe43a[10],OxOe43a[35]);} ;} ;function row_click(Ox37e){var Ox380;if(Browser_IsOpera()){Ox380=Ox37e.getAttribute(OxOe43a[20])==OxOe43a[21];} else {Ox380=Ox37e[OxOe43a[20]];} ;if(Ox380){if(Event_GetSrcElement()[OxOe43a[36]]==OxOe43a[37]){return ;} ;hiddenAction[OxOe43a[11]]=OxOe43a[38];hiddenActionData[OxOe43a[11]]=Ox37e.getAttribute(OxOe43a[28]);window.PostBackAction();} else {var Ox102=Ox37e.getAttribute(OxOe43a[28]);hiddenFile[OxOe43a[11]]=Ox102;var Ox280=Ox37e.getAttribute(OxOe43a[39]);Window_GetElement(window,OxOe43a[40],true)[OxOe43a[11]]=Ox280;var htmlcode=Ox37e.getAttribute(OxOe43a[41]);if(htmlcode!=OxOe43a[10]&&htmlcode!=null){do_preview(htmlcode);} else {try{Actualsize();} catch(x){do_preview();} ;} ;} ;} ;function do_preview(){} ;function reset_hiddens(){if(hiddenAlert[OxOe43a[11]]){alert(hiddenAlert.value);} ;if(TargetUrl[OxOe43a[11]]!=OxOe43a[10]&&TargetUrl[OxOe43a[11]]!=null){do_preview();} ;hiddenAlert[OxOe43a[11]]=OxOe43a[10];hiddenAction[OxOe43a[11]]=OxOe43a[10];hiddenActionData[OxOe43a[11]]=OxOe43a[10];} ;Event_Attach(window,OxOe43a[42],reset_hiddens);function RequireFileBrowseScript(){} ;Event_Attach(window,OxOe43a[42],sortables_init);var SORT_COLUMN_INDEX;function sortables_init(){if(!document[OxOe43a[43]]){return ;} ;var Ox388=document.getElementsByTagName(OxOe43a[44]);for(var Ox389=0;Ox389<Ox388[OxOe43a[31]];Ox389++){var Ox38a=Ox388[Ox389];if(((OxOe43a[46]+Ox38a[OxOe43a[47]]+OxOe43a[46]).indexOf(OxOe43a[45])!=-1)&&(Ox38a[OxOe43a[48]])){ts_makeSortable(Ox38a);} ;} ;} ;function ts_makeSortable(Ox38c){if(Ox38c[OxOe43a[49]]&&Ox38c[OxOe43a[49]][OxOe43a[31]]>0){var Ox38d=Ox38c[OxOe43a[49]][0];} ;if(!Ox38d){return ;} ;for(var i=2;i<4;i++){var Ox38e=Ox38d[OxOe43a[50]][i];var Ox27b=ts_getInnerText(Ox38e);Ox38e[OxOe43a[51]]=OxOe43a[52]+Ox27b+OxOe43a[53];} ;} ;function ts_getInnerText(Ox27){if( typeof Ox27==OxOe43a[54]){return Ox27;} ;if( typeof Ox27==OxOe43a[55]){return Ox27;} ;if(Ox27[OxOe43a[56]]){return Ox27[OxOe43a[56]];} ;var Ox24=OxOe43a[10];var Ox33a=Ox27[OxOe43a[57]];var Ox11=Ox33a[OxOe43a[31]];for(var i=0;i<Ox11;i++){switch(Ox33a[i][OxOe43a[59]]){case 1:Ox24+=ts_getInnerText(Ox33a[i]);break ;;case 3:Ox24+=Ox33a[i][OxOe43a[58]];break ;;} ;} ;return Ox24;} ;function ts_resortTable(Ox391){var Ox29e;for(var Ox392=0;Ox392<Ox391[OxOe43a[57]][OxOe43a[31]];Ox392++){if(Ox391[OxOe43a[57]][Ox392][OxOe43a[36]]&&Ox391[OxOe43a[57]][Ox392][OxOe43a[36]].toLowerCase()==OxOe43a[60]){Ox29e=Ox391[OxOe43a[57]][Ox392];} ;} ;var Ox393=ts_getInnerText(Ox29e);var Ox1dd=Ox391[OxOe43a[18]];var Ox394=Ox1dd[OxOe43a[61]];var Ox38c=getParent(Ox1dd,OxOe43a[62]);if(Ox38c[OxOe43a[49]][OxOe43a[31]]<=1){return ;} ;var Ox395=ts_getInnerText(Ox38c[OxOe43a[49]][1][OxOe43a[50]][Ox394]);var Ox396=ts_sort_caseinsensitive;if(Ox395.match(/^\d\d[\/-]\d\d[\/-]\d\d\d\d$/)){Ox396=ts_sort_date;} ;if(Ox395.match(/^\d\d[\/-]\d\d[\/-]\d\d$/)){Ox396=ts_sort_date;} ;if(Ox395.match(/^[?]/)){Ox396=ts_sort_currency;} ;if(Ox395.match(/^[\d\.]+$/)){Ox396=ts_sort_numeric;} ;SORT_COLUMN_INDEX=Ox394;var Ox38d= new Array();var Ox397= new Array();for(var i=0;i<Ox38c[OxOe43a[49]][0][OxOe43a[31]];i++){Ox38d[i]=Ox38c[OxOe43a[49]][0][i];} ;for(var j=1;j<Ox38c[OxOe43a[49]][OxOe43a[31]];j++){Ox397[j-1]=Ox38c[OxOe43a[49]][j];} ;Ox397.sort(Ox396);if(Ox29e.getAttribute(OxOe43a[63])==OxOe43a[64]){var Ox398=OxOe43a[65];Ox397.reverse();Ox29e.setAttribute(OxOe43a[63],OxOe43a[66]);} else {Ox398=OxOe43a[67];Ox29e.setAttribute(OxOe43a[63],OxOe43a[64]);} ;for(i=0;i<Ox397[OxOe43a[31]];i++){if(!Ox397[i][OxOe43a[47]]||(Ox397[i][OxOe43a[47]]&&(Ox397[i][OxOe43a[47]].indexOf(OxOe43a[68])==-1))){Ox38c[OxOe43a[69]][0].appendChild(Ox397[i]);} ;} ;for(i=0;i<Ox397[OxOe43a[31]];i++){if(Ox397[i][OxOe43a[47]]&&(Ox397[i][OxOe43a[47]].indexOf(OxOe43a[68])!=-1)){Ox38c[OxOe43a[69]][0].appendChild(Ox397[i]);} ;} ;var Ox399=document.getElementsByTagName(OxOe43a[60]);for(var Ox392=0;Ox392<Ox399[OxOe43a[31]];Ox392++){if(Ox399[Ox392][OxOe43a[47]]==OxOe43a[70]){if(getParent(Ox399[Ox392],OxOe43a[44])==getParent(Ox391,OxOe43a[44])){Ox399[Ox392][OxOe43a[51]]=OxOe43a[71];} ;} ;} ;Ox29e[OxOe43a[51]]=Ox398;} ;function getParent(Ox27,Ox39b){if(Ox27==null){return null;} else {if(Ox27[OxOe43a[59]]==1&&Ox27[OxOe43a[36]].toLowerCase()==Ox39b.toLowerCase()){return Ox27;} else {return getParent(Ox27.parentNode,Ox39b);} ;} ;} ;function ts_sort_date(Oxe7,b){var Ox39d=ts_getInnerText(Oxe7[OxOe43a[50]][SORT_COLUMN_INDEX]);var Ox39e=ts_getInnerText(b[OxOe43a[50]][SORT_COLUMN_INDEX]);if(Ox39d[OxOe43a[31]]==10){var Ox39f=Ox39d.substr(6,4)+Ox39d.substr(3,2)+Ox39d.substr(0,2);} else {var Ox3a0=Ox39d.substr(6,2);if(parseInt(Ox3a0)<50){Ox3a0=OxOe43a[72]+Ox3a0;} else {Ox3a0=OxOe43a[73]+Ox3a0;} ;var Ox39f=Ox3a0+Ox39d.substr(3,2)+Ox39d.substr(0,2);} ;if(Ox39e[OxOe43a[31]]==10){var Ox3a1=Ox39e.substr(6,4)+Ox39e.substr(3,2)+Ox39e.substr(0,2);} else {Ox3a0=Ox39e.substr(6,2);if(parseInt(Ox3a0)<50){Ox3a0=OxOe43a[72]+Ox3a0;} else {Ox3a0=OxOe43a[73]+Ox3a0;} ;var Ox3a1=Ox3a0+Ox39e.substr(3,2)+Ox39e.substr(0,2);} ;if(Ox39f==Ox3a1){return 0;} ;if(Ox39f<Ox3a1){return -1;} ;return 1;} ;function ts_sort_currency(Oxe7,b){var Ox39d=ts_getInnerText(Oxe7[OxOe43a[50]][SORT_COLUMN_INDEX]).replace(/[^0-9.]/g,OxOe43a[10]);var Ox39e=ts_getInnerText(b[OxOe43a[50]][SORT_COLUMN_INDEX]).replace(/[^0-9.]/g,OxOe43a[10]);return parseFloat(Ox39d)-parseFloat(Ox39e);} ;function ts_sort_numeric(Oxe7,b){var Ox39d=parseFloat(ts_getInnerText(Oxe7[OxOe43a[50]][SORT_COLUMN_INDEX]));if(isNaN(Ox39d)){Ox39d=0;} ;var Ox39e=parseFloat(ts_getInnerText(b[OxOe43a[50]][SORT_COLUMN_INDEX]));if(isNaN(Ox39e)){Ox39e=0;} ;return Ox39d-Ox39e;} ;function ts_sort_caseinsensitive(Oxe7,b){var Ox39d=ts_getInnerText(Oxe7[OxOe43a[50]][SORT_COLUMN_INDEX]).toLowerCase();var Ox39e=ts_getInnerText(b[OxOe43a[50]][SORT_COLUMN_INDEX]).toLowerCase();if(Ox39d==Ox39e){return 0;} ;if(Ox39d<Ox39e){return -1;} ;return 1;} ;function ts_sort_default(Oxe7,b){var Ox39d=ts_getInnerText(Oxe7[OxOe43a[50]][SORT_COLUMN_INDEX]);var Ox39e=ts_getInnerText(b[OxOe43a[50]][SORT_COLUMN_INDEX]);if(Ox39d==Ox39e){return 0;} ;if(Ox39d<Ox39e){return -1;} ;return 1;} [sortables_init];RequireFileBrowseScript();var Form1=Window_GetElement(window,OxOe43a[74],true);var hiddenDirectory=Window_GetElement(window,OxOe43a[1],true);var hiddenFile=Window_GetElement(window,OxOe43a[2],true);var hiddenAlert=Window_GetElement(window,OxOe43a[3],true);var hiddenAction=Window_GetElement(window,OxOe43a[4],true);var hiddenActionData=Window_GetElement(window,OxOe43a[5],true);var Image1=Window_GetElement(window,OxOe43a[75],true);var FolderDescription=Window_GetElement(window,OxOe43a[76],true);var CreateDir=Window_GetElement(window,OxOe43a[77],true);var Copy=Window_GetElement(window,OxOe43a[78],true);var Move=Window_GetElement(window,OxOe43a[79],true);var FoldersAndFiles=Window_GetElement(window,OxOe43a[29],true);var Delete=Window_GetElement(window,OxOe43a[80],true);var DoRefresh=Window_GetElement(window,OxOe43a[81],true);var name_Cell=Window_GetElement(window,OxOe43a[82],true);var size_Cell=Window_GetElement(window,OxOe43a[83],true);var op_Cell=Window_GetElement(window,OxOe43a[84],true);var divpreview=Window_GetElement(window,OxOe43a[85],true);var Table3=Window_GetElement(window,OxOe43a[86],true);var Table4=Window_GetElement(window,OxOe43a[87],true);var sel_target=Window_GetElement(window,OxOe43a[88],true);var inp_color=Window_GetElement(window,OxOe43a[89],true);var inp_color_preview=Window_GetElement(window,OxOe43a[90],true);var inc_class=Window_GetElement(window,OxOe43a[91],true);var inp_id=Window_GetElement(window,OxOe43a[92],true);var inp_index=Window_GetElement(window,OxOe43a[93],true);var inp_access=Window_GetElement(window,OxOe43a[94],true);var Table8=Window_GetElement(window,OxOe43a[95],true);var TargetUrl=Window_GetElement(window,OxOe43a[40],true);var inp_title=Window_GetElement(window,OxOe43a[96],true);var Button1=Window_GetElement(window,OxOe43a[97],true);var Button2=Window_GetElement(window,OxOe43a[98],true);var btn_zoom_in=Window_GetElement(window,OxOe43a[99],true);var btn_zoom_out=Window_GetElement(window,OxOe43a[100],true);var btn_Actualsize=Window_GetElement(window,OxOe43a[101],true);var obj=Window_GetDialogArguments(window);var element=null;if(obj){element=obj[OxOe43a[102]];} ;var editor=obj[OxOe43a[103]];var htmlcode=OxOe43a[10];if(element[OxOe43a[105]][OxOe43a[104]]){inp_color[OxOe43a[11]]=revertColor(element[OxOe43a[105]].color);inp_color[OxOe43a[105]][OxOe43a[106]]=inp_color[OxOe43a[11]];inp_color_preview[OxOe43a[105]][OxOe43a[106]]=inp_color[OxOe43a[11]];} ;if(element[OxOe43a[47]]==OxOe43a[10]){element.removeAttribute(OxOe43a[47]);} ;if(element[OxOe43a[47]]==OxOe43a[10]){element.removeAttribute(OxOe43a[107]);} ;if(element[OxOe43a[108]]){inp_title[OxOe43a[11]]=element[OxOe43a[108]];} ;if(element[OxOe43a[109]]){sel_target[OxOe43a[11]]=element[OxOe43a[109]];} ;if(element[OxOe43a[110]]){inp_index[OxOe43a[11]]=element[OxOe43a[110]];} ;if(element[OxOe43a[111]]){inp_access[OxOe43a[11]]=element[OxOe43a[111]];} ;var src=OxOe43a[10];if(element.getAttribute(OxOe43a[112])){src=element.getAttribute(OxOe43a[112]);} ;if(element.getAttribute(OxOe43a[113])){src=element.getAttribute(OxOe43a[113]);} ;if(TargetUrl[OxOe43a[11]]){Actualsize();} else {if(element&&src){TargetUrl[OxOe43a[11]]=src;} ;} ;inp_id[OxOe43a[11]]=element[OxOe43a[48]];var divpreview=Window_GetElement(window,OxOe43a[85],true);do_preview();function do_preview(Ox27a){if(Ox27a!=OxOe43a[10]&&Ox27a!=null){htmlcode=Ox27a;divpreview[OxOe43a[51]]=Ox27a;return ;} ;divpreview[OxOe43a[51]]=OxOe43a[10];var Ox280=TargetUrl[OxOe43a[11]];if(Ox280==OxOe43a[10]){return ;} ;var Oxc3=Ox280.substring(Ox280.lastIndexOf(OxOe43a[22])).toLowerCase();switch(Oxc3){case OxOe43a[114]:;case OxOe43a[115]:;case OxOe43a[116]:;case OxOe43a[117]:;case OxOe43a[120]:divpreview[OxOe43a[51]]=OxOe43a[118]+Ox280+OxOe43a[119];break ;;case OxOe43a[123]:var Ox3c2=OxOe43a[121]+Ox280+OxOe43a[122];divpreview[OxOe43a[51]]=Ox3c2+OxOe43a[71];break ;;case OxOe43a[124]:;case OxOe43a[125]:;case OxOe43a[126]:;case OxOe43a[129]:var Ox3c3=OxOe43a[127]+Ox280+OxOe43a[128];divpreview[OxOe43a[51]]=Ox3c3+OxOe43a[71];break ;;} ;} ;function do_insert(){element[OxOe43a[47]]=inc_class[OxOe43a[11]];element[OxOe43a[109]]=sel_target[OxOe43a[11]];element[OxOe43a[108]]=inp_title[OxOe43a[11]];if(TargetUrl[OxOe43a[11]]){element[OxOe43a[112]]=TargetUrl[OxOe43a[11]];element.setAttribute(OxOe43a[113],TargetUrl.value);} ;element[OxOe43a[110]]=inp_index[OxOe43a[11]];element[OxOe43a[111]]=inp_access[OxOe43a[11]];element[OxOe43a[48]]=inp_id[OxOe43a[11]];if(element[OxOe43a[108]]==OxOe43a[10]){element.removeAttribute(OxOe43a[108]);} ;if(element[OxOe43a[109]]==OxOe43a[10]){element.removeAttribute(OxOe43a[109]);} ;if(element[OxOe43a[47]]==OxOe43a[10]){element.removeAttribute(OxOe43a[47]);} ;if(element[OxOe43a[47]]==OxOe43a[10]){element.removeAttribute(OxOe43a[107]);} ;if(element[OxOe43a[110]]==OxOe43a[10]){element.removeAttribute(OxOe43a[110]);} ;if(element[OxOe43a[111]]==OxOe43a[10]){element.removeAttribute(OxOe43a[111]);} ;if(element[OxOe43a[48]]==OxOe43a[10]){element.removeAttribute(OxOe43a[48]);} ;try{element[OxOe43a[105]][OxOe43a[104]]=inp_color[OxOe43a[11]];} catch(er){element[OxOe43a[105]][OxOe43a[104]]=OxOe43a[10];} ;var Ox27a=element[OxOe43a[51]];switch(Ox27a.toLowerCase()){case OxOe43a[130]:;case OxOe43a[131]:;case OxOe43a[132]:;case OxOe43a[133]:;case OxOe43a[134]:;case OxOe43a[135]:element[OxOe43a[51]]=OxOe43a[10];break ;;default:break ;;} ;if(element[OxOe43a[51]]==OxOe43a[10]){element[OxOe43a[51]]=element[OxOe43a[108]]||TargetUrl[OxOe43a[11]]||element[OxOe43a[136]]||OxOe43a[10];} ;Window_SetDialogReturnValue(window,element);Window_CloseDialog(window);} ;function do_Close(){Window_SetDialogReturnValue(window,null);Window_CloseDialog(window);} ;function Zoom_In(){if(divpreview[OxOe43a[105]][OxOe43a[137]]!=0){divpreview[OxOe43a[105]][OxOe43a[137]]*=1.2;} else {divpreview[OxOe43a[105]][OxOe43a[137]]=1.2;} ;} ;function Zoom_Out(){if(divpreview[OxOe43a[105]][OxOe43a[137]]!=0){divpreview[OxOe43a[105]][OxOe43a[137]]*=0.8;} else {divpreview[OxOe43a[105]][OxOe43a[137]]=0.8;} ;} ;function Actualsize(){divpreview[OxOe43a[105]][OxOe43a[137]]=1;do_preview();} ;inp_color[OxOe43a[138]]=inp_color_preview[OxOe43a[138]]=function inp_color_onclick(){SelectColor(inp_color,inp_color_preview);} ;if(!Browser_IsWinIE()){btn_zoom_in[OxOe43a[105]][OxOe43a[139]]=btn_zoom_out[OxOe43a[105]][OxOe43a[139]]=btn_Actualsize[OxOe43a[105]][OxOe43a[139]]=OxOe43a[140];inp_color_preview.setAttribute(OxOe43a[141],OxOe43a[142]);} ;if(Browser_IsIE7()){var _dialogPromptID=null;function IEprompt(Ox218,Ox219,Ox21a){that=this;this[OxOe43a[143]]=function (Ox21b){val=document.getElementById(OxOe43a[144])[OxOe43a[11]];_dialogPromptID[OxOe43a[105]][OxOe43a[139]]=OxOe43a[140];document.getElementById(OxOe43a[144])[OxOe43a[11]]=OxOe43a[10];if(Ox21b){val=OxOe43a[10];} ;Ox218(val);return false;} ;if(Ox21a==undefined){Ox21a=OxOe43a[10];} ;if(_dialogPromptID==null){var Ox21c=document.getElementsByTagName(OxOe43a[145])[0];tnode=document.createElement(OxOe43a[146]);tnode[OxOe43a[48]]=OxOe43a[147];Ox21c.appendChild(tnode);_dialogPromptID=document.getElementById(OxOe43a[147]);tnode=document.createElement(OxOe43a[146]);tnode[OxOe43a[48]]=OxOe43a[148];Ox21c.appendChild(tnode);_dialogPromptID[OxOe43a[105]][OxOe43a[149]]=OxOe43a[150];_dialogPromptID[OxOe43a[105]][OxOe43a[106]]=OxOe43a[151];_dialogPromptID[OxOe43a[105]][OxOe43a[152]]=OxOe43a[153];_dialogPromptID[OxOe43a[105]][OxOe43a[154]]=OxOe43a[155];_dialogPromptID[OxOe43a[105]][OxOe43a[156]]=OxOe43a[157];} ;var Ox21d=OxOe43a[158];Ox21d+=OxOe43a[159]+Ox219+OxOe43a[160];Ox21d+=OxOe43a[161];Ox21d+=OxOe43a[162]+Ox21a+OxOe43a[163];Ox21d+=OxOe43a[164];Ox21d+=OxOe43a[165];Ox21d+=OxOe43a[166];Ox21d+=OxOe43a[167];Ox21d+=OxOe43a[168];_dialogPromptID[OxOe43a[51]]=Ox21d;_dialogPromptID[OxOe43a[105]][OxOe43a[0]]=OxOe43a[169];_dialogPromptID[OxOe43a[105]][OxOe43a[170]]=parseInt((document[OxOe43a[145]][OxOe43a[171]]-315)/2)+OxOe43a[172];_dialogPromptID[OxOe43a[105]][OxOe43a[139]]=OxOe43a[173];var Ox21e=document.getElementById(OxOe43a[144]);try{var Ox21f=Ox21e.createTextRange();Ox21f.collapse(false);Ox21f.select();} catch(x){Ox21e.focus();} ;} ;} ;if(CreateDir){CreateDir[OxOe43a[32]]= new Function(OxOe43a[174]);} ;if(Copy){Copy[OxOe43a[32]]= new Function(OxOe43a[174]);} ;if(Move){Move[OxOe43a[32]]= new Function(OxOe43a[174]);} ;if(Delete){Delete[OxOe43a[32]]= new Function(OxOe43a[174]);} ;if(DoRefresh){DoRefresh[OxOe43a[32]]= new Function(OxOe43a[174]);} ;if(btn_zoom_in){btn_zoom_in[OxOe43a[32]]= new Function(OxOe43a[174]);} ;if(btn_zoom_out){btn_zoom_out[OxOe43a[32]]= new Function(OxOe43a[174]);} ;if(btn_Actualsize){btn_Actualsize[OxOe43a[32]]= new Function(OxOe43a[174]);} ;