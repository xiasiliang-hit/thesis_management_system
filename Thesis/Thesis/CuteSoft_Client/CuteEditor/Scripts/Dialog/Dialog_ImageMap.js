var OxO507e=["contains","parentNode","selection","document","type","None","Text","body","rangeCount","window","Control","anchorOffset","childNodes","anchorNode","isCollapsed","focusNode","length","nodeType","nodeName","INPUT","TEXTAREA","BUTTON","IMG","SELECT","TABLE","position","style","absolute","relative","top","contentWindow","contentDocument","parentWindow","id","frames","frameElement","//TODO:frame contentWindow not found?","iframe","editor","img","onload","src","","src_cetemp","contentEditable","designMode","on","clearAttributes","marginTop","0","marginLeft","color","black","background","white","unselectable","2D-Position","LiveResize","innerHTML","outerHTML","MAP","name","useMap","#","areas","href","target","alt","coords",",","\x3Cimg id=\x27myIMAGE","\x27 border=1 src=\x27Load.ashx?type=image\x26file=space.gif\x27 title=\x27[[AddLinktoImageMap]]\x27 style=\x27position:absolute;left:","px;top:","px;width:","px;height:","px;z-index:","\x27\x3E","Load.ashx?Type=Dialog\x26file=MapLink.htm\x26","dialogWidth:350px;dialogHeight:200px;help:no;scroll:no;status:no;resizable:0;","UseStandardDialog","1","\x26Dialog=Standard","Theme=","Theme","\x26","DNNArg","zoom","width","height","\x27  border=1 src=\x27Load.ashx?type=image\x26file=space.gif\x27 title=\x27[[AddLinktoImageMap]]\x27 style=\x27position:absolute;z-index:",";width:20;height:20;left:",";top:","myIMAGE","\x3Carea shape=\x27rect\x27 coords=\x27","\x27","href=\x27","\x27 ","target=\x27","alt=\x27","\x3E","PasteHTML","\x3Cmap name=\x27","\x3C/map\x3E","off","AutoMap","display","img_zoom_in","none","img_zoom_out","img_bestfit","img_actualsize"];function Element_Contains(element,Ox17c){if(!Browser_IsOpera()){if(element[OxO507e[0]]){return element.contains(Ox17c);} ;} ;for(;Ox17c!=null;Ox17c=Ox17c[OxO507e[1]]){if(element==Ox17c){return true;} ;} ;return false;} ;function Window_CreateSelectionRange(Ox1a1){var Ox21f;if(Browser_UseIESelection()){var Ox12f=Ox1a1[OxO507e[3]][OxO507e[2]];if(Ox12f[OxO507e[4]]==OxO507e[5]||Ox12f[OxO507e[4]]==OxO507e[6]){Ox21f=Ox12f.createRange();} else {Ox21f=document[OxO507e[7]].createTextRange();Ox21f.moveToElement(Ox12f.createRange().item(0));} ;} else {var Ox12f=Ox1a1.getSelection();if(Ox12f[OxO507e[8]]==0){Ox21f=Ox1a1[OxO507e[3]].createRange();} else {Ox21f=Ox12f.getRangeAt(0).cloneRange();} ;} ;Ox21f[OxO507e[9]]=Ox1a1;return Ox21f;} ;function Window_GetSelectionNode(Ox1a1){var Ox17c=Window_GetSelectionNode_Core(Ox1a1);if(Ox17c==Ox1a1[OxO507e[3]][OxO507e[7]]){return null;} ;if(!Element_Contains(Ox1a1[OxO507e[3]].body,Ox17c)){return null;} ;return Ox17c;} ;function Window_GetSelectionNode_Core(Ox1a1){var Ox12f;if(Browser_UseIESelection()){Ox12f=Ox1a1[OxO507e[3]][OxO507e[2]];if(Ox12f[OxO507e[4]]==OxO507e[5]||Ox12f[OxO507e[4]]==OxO507e[6]){return Ox12f.createRange().parentElement();} ;return Ox12f.createRange().item(0);} ;var Ox12f=Ox1a1.getSelection();if(Window_GetSelectionType(Ox1a1)==OxO507e[10]){return Ox12f[OxO507e[13]][OxO507e[12]][Ox12f[OxO507e[11]]];} ;if(Ox12f[OxO507e[14]]){return Ox12f[OxO507e[13]];} ;if(Ox12f[OxO507e[13]]==Ox12f[OxO507e[15]]){return Ox12f[OxO507e[13]];} ;var p=Ox12f[OxO507e[13]];var Ox33a=p[OxO507e[12]];for(var i=0;i<Ox33a[OxO507e[16]];i++){var Ox239=Ox33a.item(i);if(Ox12f.containsNode(Ox239,true)){if(i!=0&&Ox12f.containsNode(Ox33a.item(i-1),false)){continue ;} ;if(i<Ox33a[OxO507e[16]]-1&&Ox12f.containsNode(Ox33a.item(i+1),false)){continue ;} ;return Ox239;} ;} ;if(Ox12f[OxO507e[8]]==1){return Range_GetParentNode(Window_CreateSelectionRange(Ox1a1));} ;if(!Element_Contains(Ox1a1[OxO507e[3]].body,Ox12f.anchorNode)){return null;} ;return Element_GetSameParent(Ox12f.anchorNode,Ox12f.focusNode);} ;function Window_GetSelectionElement(Ox1a1){var Ox17c=Window_GetSelectionNode(Ox1a1);if(Ox17c==null){return null;} ;if(Ox17c[OxO507e[17]]==1){return Ox17c;} ;return Ox17c[OxO507e[1]];} ;function Window_GetSelectionType(Ox1a1){if(Browser_UseIESelection()){return Ox1a1[OxO507e[3]][OxO507e[2]][OxO507e[4]];} ;var Ox12f=Ox1a1.getSelection();if(Ox12f[OxO507e[14]]){return OxO507e[6];} ;if(Ox12f[OxO507e[13]]!=Ox12f[OxO507e[15]]){return OxO507e[6];} ;var p=Ox12f[OxO507e[13]];var Ox33a=p[OxO507e[12]];for(var i=0;i<Ox33a[OxO507e[16]];i++){var Ox239=Ox33a.item(i);if(Ox239[OxO507e[17]]!=1){continue ;} ;if(Ox12f.containsNode(Ox239,true)){if(i!=0&&Ox12f.containsNode(Ox33a.item(i-1),false)){continue ;} ;if(i<Ox33a[OxO507e[16]]-1&&Ox12f.containsNode(Ox33a.item(i+1),false)){continue ;} ;if(Element_IsBlockControl(Ox239)){return OxO507e[10];} ;return OxO507e[6];} ;} ;return OxO507e[6];} ;function Element_IsBlockControl(element){var name=element[OxO507e[18]];if(name==OxO507e[19]){return true;} ;if(name==OxO507e[20]){return true;} ;if(name==OxO507e[21]){return true;} ;if(name==OxO507e[22]){return true;} ;if(name==OxO507e[23]){return true;} ;if(name==OxO507e[24]){return true;} ;var Ox11f=element[OxO507e[26]][OxO507e[25]];if(Ox11f==OxO507e[27]||Ox11f==OxO507e[28]){return true;} ;return false;} ;function Window_GetDialogTop(Ox1a1){return Ox1a1[OxO507e[29]];} ;function Frame_GetContentWindow(Ox340){if(Ox340[OxO507e[30]]){return Ox340[OxO507e[30]];} ;if(Ox340[OxO507e[31]]){if(Ox340[OxO507e[31]][OxO507e[32]]){return Ox340[OxO507e[31]][OxO507e[32]];} ;} ;var Ox1a1;if(Ox340[OxO507e[33]]){Ox1a1=window[OxO507e[34]][Ox340[OxO507e[33]]];if(Ox1a1){return Ox1a1;} ;} ;var len=window[OxO507e[34]][OxO507e[16]];for(var i=0;i<len;i++){Ox1a1=window[OxO507e[34]][i];if(Ox1a1[OxO507e[35]]==Ox340){return Ox1a1;} ;if(Ox1a1[OxO507e[3]]==Ox340[OxO507e[31]]){return Ox1a1;} ;} ;Debug_Todo(OxO507e[36]);} ;var iframe=Window_GetElement(window,OxO507e[37],true);var iframe_win=Frame_GetContentWindow(iframe);var obj=Window_GetDialogArguments(window);var editor=obj[OxO507e[38]];var editwin=obj[OxO507e[9]];var editdoc=obj[OxO507e[3]];var oImg=obj[OxO507e[39]];var oMap=null;var aMapName= new Array();var aLeft= new Array();var aTop= new Array();var aWidth= new Array();var aHeight= new Array();var aHref= new Array();var aTarget= new Array();var aTitle= new Array();var aCoords= new Array();window[OxO507e[40]]=function window_onload(){var src;src=oImg.getAttribute(OxO507e[41])+OxO507e[42];if(oImg.getAttribute(OxO507e[43])){src=oImg.getAttribute(OxO507e[43])+OxO507e[42];} ;oImg[OxO507e[41]]=src;if(Browser_IsWinIE()){iframe_win[OxO507e[3]][OxO507e[7]][OxO507e[44]]=true;} else {iframe_win[OxO507e[3]][OxO507e[45]]=OxO507e[46];iframe_win[OxO507e[3]][OxO507e[7]][OxO507e[44]]=true;} ;iframe_win[OxO507e[3]][OxO507e[7]][OxO507e[47]];iframe_win[OxO507e[3]][OxO507e[7]][OxO507e[26]][OxO507e[48]]=OxO507e[49];iframe_win[OxO507e[3]][OxO507e[7]][OxO507e[26]][OxO507e[50]]=OxO507e[49];iframe_win[OxO507e[3]][OxO507e[7]][OxO507e[26]][OxO507e[51]]=OxO507e[52];iframe_win[OxO507e[3]][OxO507e[7]][OxO507e[26]][OxO507e[53]]=OxO507e[54];oImg[OxO507e[55]]=OxO507e[46];if(Browser_IsWinIE()){iframe_win[OxO507e[3]].execCommand(OxO507e[56],true,true);iframe_win[OxO507e[3]].execCommand(OxO507e[57],true,true);} ;iframe_win.focus();if(Browser_IsWinIE()){iframe_win[OxO507e[3]][OxO507e[7]][OxO507e[58]]=oImg[OxO507e[59]];} else {iframe_win[OxO507e[3]][OxO507e[7]][OxO507e[58]]=outerHTML(oImg);} ;var Ox34e=editdoc[OxO507e[7]].getElementsByTagName(OxO507e[60]);for(var i=0;i<Ox34e[OxO507e[16]];i++){aMapName[i]=Ox34e[i][OxO507e[61]].toUpperCase();} ;var Ox34f=oImg[OxO507e[62]];if(Ox34f!=OxO507e[42]){Ox34f=Ox34f.toUpperCase();for(var i=0;i<Ox34e[OxO507e[16]];i++){if((OxO507e[63]+aMapName[i])==Ox34f){oMap=Ox34e[i];} ;} ;} ;if(oMap){for(var i=0;i<oMap[OxO507e[64]][OxO507e[16]];i++){aHref[i]=oMap[OxO507e[64]][i][OxO507e[65]];aTarget[i]=oMap[OxO507e[64]][i][OxO507e[66]];aTitle[i]=oMap[OxO507e[64]][i][OxO507e[67]];aCoords[i]=oMap[OxO507e[64]][i][OxO507e[68]];var Oxe7=aCoords[i].split(OxO507e[69]);aLeft[i]=parseInt(Oxe7[0]);aTop[i]=parseInt(Oxe7[1]);aWidth[i]=parseInt(Oxe7[2])-aLeft[i];aHeight[i]=parseInt(Oxe7[3])-aTop[i];iframe_win[OxO507e[3]][OxO507e[7]][OxO507e[58]]+=OxO507e[70]+i+OxO507e[71]+aLeft[i]+OxO507e[72]+aTop[i]+OxO507e[73]+aWidth[i]+OxO507e[74]+aHeight[i]+OxO507e[75]+(i+1)+OxO507e[76];} ;} ;} ;function SearchSelectionElement(Ox351){var body=iframe_win[OxO507e[3]][OxO507e[7]];for(var Ox42=Window_GetSelectionElement(iframe_win);Element_Contains(body,Ox42);Ox42=Ox42[OxO507e[1]]){if(Ox42[OxO507e[18]]==Ox351){return Ox42;} ;} ;return null;} ;function Addlink(){var img=SearchSelectionElement(OxO507e[22]);if(!img){return ;} ;function Ox354(arr){if(arr){aHref[Ox356]=arr[0];aTarget[Ox356]=arr[1];aTitle[Ox356]=arr[2];} ;} ;var Ox355=img[OxO507e[33]];var Ox356=parseInt(Ox355.substr(7));var obj={editor:editor,href:aHref[Ox356],target:aTarget[Ox356],title:aTitle[Ox356]};editor.SetNextDialogWindow(window);editor.ShowDialog(Ox354,OxO507e[77]+GetDialogQueryString(),obj,OxO507e[78]);} ;function GetDialogQueryString(){var Ox119=OxO507e[42];if(editor.GetScriptProperty(OxO507e[79])==OxO507e[80]){Ox119=OxO507e[81];} ;return OxO507e[82]+editor.GetScriptProperty(OxO507e[83])+Ox119+OxO507e[84]+editor.GetScriptProperty(OxO507e[85]);} ;function do_Close(){Window_SetDialogReturnValue(window,null);Window_CloseDialog(window);} ;function Zoom_In(){if(iframe_win[OxO507e[3]][OxO507e[7]][OxO507e[26]][OxO507e[86]]!=0){iframe_win[OxO507e[3]][OxO507e[7]][OxO507e[26]][OxO507e[86]]*=1.2;} else {iframe_win[OxO507e[3]][OxO507e[7]][OxO507e[26]][OxO507e[86]]=1.2;} ;} ;function Zoom_Out(){if(iframe_win[OxO507e[3]][OxO507e[7]][OxO507e[26]][OxO507e[86]]!=0){iframe_win[OxO507e[3]][OxO507e[7]][OxO507e[26]][OxO507e[86]]*=0.8;} else {iframe_win[OxO507e[3]][OxO507e[7]][OxO507e[26]][OxO507e[86]]=0.8;} ;} ;function BestFit(){if(!oImg){return ;} ;var Ox6c=280;var Ox6d=290;iframe_win[OxO507e[3]][OxO507e[7]][OxO507e[26]][OxO507e[86]]=1/Math.max(oImg[OxO507e[87]]/Ox6d,oImg[OxO507e[88]]/Ox6c);} ;function Actualsize(){iframe_win[OxO507e[3]][OxO507e[7]][OxO507e[26]][OxO507e[86]]=1;} ;function newMap(){var n=aHref[OxO507e[16]];var Oxda=(oImg[OxO507e[87]]-20)*0.5;var Ox2b=(oImg[OxO507e[88]]-20)*0.5;aHref[n]=OxO507e[42];aTarget[n]=OxO507e[42];aTitle[n]=OxO507e[42];iframe_win[OxO507e[3]][OxO507e[7]][OxO507e[58]]+=OxO507e[70]+n+OxO507e[89]+(n+1)+OxO507e[90]+Oxda+OxO507e[91]+Ox2b+OxO507e[76];iframe_win.scrollBy(0,0);iframe_win.focus();} ;function do_insert(){var b=false;for(var i=0;i<aHref[OxO507e[16]];i++){var obj=Window_GetElement(iframe_win,OxO507e[92]+i,false);if(obj){b=true;} ;} ;if(b){var Ox27a=OxO507e[42];for(var i=0;i<aHref[OxO507e[16]];i++){var obj=Window_GetElement(iframe_win,OxO507e[92]+i,false);if(obj){var Ox35c=parseInt(obj[OxO507e[26]].left);var Ox35d=parseInt(obj[OxO507e[26]].top);var Ox35e=parseInt(obj[OxO507e[26]].width);var Ox35f=parseInt(obj[OxO507e[26]].height);var Ox360=Ox35c+Ox35e;var Ox361=Ox35d+Ox35f;Ox27a+=OxO507e[93]+Ox35c+OxO507e[69]+Ox35d+OxO507e[69]+Ox360+OxO507e[69]+Ox361+OxO507e[94];if(aHref[i]!=OxO507e[42]){Ox27a+=OxO507e[95]+aHref[i]+OxO507e[96];} ;if((aTarget[i]!=OxO507e[42])&&aTarget[i]){Ox27a+=OxO507e[97]+aTarget[i]+OxO507e[96];} ;if(aTitle[i]!=OxO507e[42]&&aTitle[i]!=null){Ox27a+=OxO507e[98]+aTitle[i]+OxO507e[96];} ;Ox27a+=OxO507e[99];} ;} ;if(oMap){oMap[OxO507e[58]]=Ox27a;} else {var Ox34f=getAutoMapName();oImg[OxO507e[62]]=OxO507e[63]+Ox34f;editor.ExecCommand(OxO507e[100],false,OxO507e[101]+Ox34f+OxO507e[76]+Ox27a+OxO507e[102]);} ;} else {if(oMap){if(Browser_IsWinIE()){oMap[OxO507e[59]]=OxO507e[42];} ;} ;oImg[OxO507e[62]]=OxO507e[42];} ;oImg[OxO507e[55]]=OxO507e[103];oImg.removeAttribute(OxO507e[55]);if(!Browser_IsWinIE()){editor.InsertElement(oImg);} ;Window_CloseDialog(window);} ;function getAutoMapName(){for(var i=1;true;i++){var Ox119=OxO507e[104]+i;if(isValidMapName(Ox119)){return Ox119;} ;} ;} ;function isValidMapName(Ox24){Ox24=Ox24.toUpperCase();for(var i=0;i<aMapName[OxO507e[16]];i++){if(aMapName[i]==Ox24){return false;} ;} ;return true;} ;function do_Close(){oImg.removeAttribute(OxO507e[55]);Window_CloseDialog(window);} ;if(!Browser_IsWinIE()){Window_GetElement(window,OxO507e[106],true)[OxO507e[26]][OxO507e[105]]=OxO507e[107];Window_GetElement(window,OxO507e[108],true)[OxO507e[26]][OxO507e[105]]=OxO507e[107];Window_GetElement(window,OxO507e[109],true)[OxO507e[26]][OxO507e[105]]=OxO507e[107];Window_GetElement(window,OxO507e[110],true)[OxO507e[26]][OxO507e[105]]=OxO507e[107];} ;