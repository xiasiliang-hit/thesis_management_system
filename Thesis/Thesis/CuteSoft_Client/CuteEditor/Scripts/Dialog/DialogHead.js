var OxO2a6f=["ua","userAgent","isOpera","opera","isSafari","safari","isGecko","gecko","isWinIE","msie","isMac","Mac","compatMode","document","CSS1Compat","XMLHttpRequest","","caller","(","\x0A","attachEvent","on","\x0D\x0A","closeeditordialog","close","top","returnValue","_dialog_returnvalue","opener","_dialog_arguments","dialogArguments","length","element \x27","\x27 not found","all","childNodes","nodeType","UNSELECTABLE","tabIndex","-1","//TODO: event not found? throw error ?","preventDefault","event","arguments","parent","frames","srcElement","target","//TODO: srcElement not found? throw error ?","fromElement","relatedTarget","toElement","keyCode","which","clientX","clientY","offsetX","offsetY","button","ctrlKey","altKey","shiftKey","cancelBubble","stopPropagation","buttonInitialized","oncontextmenu","onmouseout","onmousedown","onmouseup","isover","className","CuteEditorButtonOver","CuteEditorButton","CuteEditorButtonDown","CuteEditorDown","border","style","solid 1px #0A246A","backgroundColor","#b6bdd2","padding","1px","solid 1px #f5f5f4","inset 1px","IsCommandDisabled","CuteEditorButtonDisabled","IsCommandActive","CuteEditorButtonActive","onerror","\x0D\x0A\x0D\x0A","href","location","view-source:","?\x26view-source=","_blank","ondblclick","onkeydown","//duplicated?\x0D\x0A","var ","=Window_GetElement(window,\x22","\x22,true);","Text","clipboardData","addEventListener","isdir","path","url","text","return this.getAttribute(\x27","\x27);","prototype","attributes","\x3C","tagName","specified"," ","name","=\x22","value","\x22","\x3E","innerHTML","\x3C/","AREA","BASE","BASEFONT","COL","FRAME","HR","IMG","BR","INPUT","ISINDEX","LINK","META","PARAM","00","0123456789ABCDEF","#","object","undefined","Microsoft.XMLHTTP","head","script","language","javascript","type","text/javascript","src","id","_cpinstalled","1","ResourceDir","/Load.ashx?type=script\x26verfix=1002\x26file=ColorPicker.js","CuteEditorColorPickerInitialize","GET","onreadystatechange","readyState","responseText"," \x0D\x0A window.CuteEditorColorPickerInitialize=CuteEditorColorPickerInitialize","colorScript","oncolorselect","FireUIChanged","onclick","popupColorPicker"];var _Browser_TypeInfo=null;function Browser__InitType(){if(_Browser_TypeInfo!=null){return ;} ;var Ox4={};Ox4[OxO2a6f[0]]=navigator[OxO2a6f[1]].toLowerCase();Ox4[OxO2a6f[2]]=(Ox4[OxO2a6f[0]].indexOf(OxO2a6f[3])>-1);Ox4[OxO2a6f[4]]=(Ox4[OxO2a6f[0]].indexOf(OxO2a6f[5])>-1);Ox4[OxO2a6f[6]]=(!Ox4[OxO2a6f[2]]&&Ox4[OxO2a6f[0]].indexOf(OxO2a6f[7])>-1);Ox4[OxO2a6f[8]]=(!Ox4[OxO2a6f[2]]&&Ox4[OxO2a6f[0]].indexOf(OxO2a6f[9])>-1);Ox4[OxO2a6f[10]]=navigator[OxO2a6f[1]].indexOf(OxO2a6f[11])!=-1;_Browser_TypeInfo=Ox4;} ;Browser__InitType();function Browser_IsWinIE(){return _Browser_TypeInfo[OxO2a6f[8]];} ;function Browser_IsGecko(){return _Browser_TypeInfo[OxO2a6f[6]];} ;function Browser_IsOpera(){return _Browser_TypeInfo[OxO2a6f[2]];} ;function Browser_IsSafari(){return _Browser_TypeInfo[OxO2a6f[4]];} ;function Browser_UseIESelection(){return _Browser_TypeInfo[OxO2a6f[8]];} ;function Browser_IsCSS1Compat(){return window[OxO2a6f[13]][OxO2a6f[12]]==OxO2a6f[14];} ;function Browser_IsIE7(){return _Browser_TypeInfo[OxO2a6f[8]]&&window[OxO2a6f[15]];} ;function GetStackTrace(){var Ox119=OxO2a6f[16];for(var Ox228=GetStackTrace[OxO2a6f[17]];Ox228!=null;Ox228=Ox228[OxO2a6f[17]]){var Ox229=Ox228+OxO2a6f[16];Ox229=Ox229.substr(0,Ox229.indexOf(OxO2a6f[18]));Ox119+=Ox229+OxO2a6f[19];} ;return Ox119;} ;function Event_Attach(obj,name,Ox22b){if(obj[OxO2a6f[20]]){if(name.substr(0,2)!=OxO2a6f[21]){name=OxO2a6f[21]+name;} ;obj.attachEvent(name,Ox22b);} else {if(name.substr(0,2)==OxO2a6f[21]){name=name.substring(2);} ;obj.addEventListener(name,Ox22b,false);} ;} ;var __ISDEBUG=false;function Debug_Todo(msg){if(!__ISDEBUG){return ;} ;throw ( new Error(msg+OxO2a6f[22]+Debug_Todo[OxO2a6f[17]]));} ;function Window_CloseDialog(Ox230){(top[OxO2a6f[23]]||top[OxO2a6f[24]])();} ;function Window_SetDialogReturnValue(Ox1a1,Ox4e){var Ox232=Ox1a1[OxO2a6f[25]];Ox232[OxO2a6f[26]]=Ox4e;Ox232[OxO2a6f[13]][OxO2a6f[27]]=Ox4e;var Ox233=Ox232[OxO2a6f[28]];if(Ox233==null){return ;} ;try{Ox233[OxO2a6f[13]][OxO2a6f[27]]=Ox4e;} catch(x){} ;} ;function Window_GetDialogArguments(Ox1a1){var Ox232=Ox1a1[OxO2a6f[25]];try{var Ox233=Ox232[OxO2a6f[28]];if(Ox233&&Ox233[OxO2a6f[13]][OxO2a6f[29]]){return Ox233[OxO2a6f[13]][OxO2a6f[29]];} ;} catch(x){} ;if(Ox232[OxO2a6f[13]][OxO2a6f[29]]){return Ox232[OxO2a6f[13]][OxO2a6f[29]];} ;if(Ox232[OxO2a6f[30]]){return Ox232[OxO2a6f[30]];} ;return Ox232[OxO2a6f[13]][OxO2a6f[29]];} ;function Window_GetElement(Ox1a1,Ox93,Ox236){var Ox27=Ox1a1[OxO2a6f[13]].getElementById(Ox93);if(Ox27){return Ox27;} ;var Ox2f=Ox1a1[OxO2a6f[13]].getElementsByName(Ox93);if(Ox2f[OxO2a6f[31]]>0){return Ox2f.item(0);} ;if(Ox236){if(__ISDEBUG){alert(OxO2a6f[32]+Ox93+OxO2a6f[33]);} ;throw ( new Error(OxO2a6f[32]+Ox93+OxO2a6f[33]));} ;return null;} ;function Element_GetAllElements(p){var arr=[];if(Browser_IsWinIE()){for(var i=0;i<p[OxO2a6f[34]][OxO2a6f[31]];i++){arr.push(p[OxO2a6f[34]].item(i));} ;return arr;} ;Ox238(p);function Ox238(Ox27){var Ox239=Ox27[OxO2a6f[35]];var Ox11=Ox239[OxO2a6f[31]];for(var i=0;i<Ox11;i++){var n=Ox239.item(i);if(n[OxO2a6f[36]]!=1){continue ;} ;arr.push(n);Ox238(n);} ;} ;return arr;} ;function Element_SetUnselectable(element){element.setAttribute(OxO2a6f[37],OxO2a6f[21]);element.setAttribute(OxO2a6f[38],OxO2a6f[39]);var arr=Element_GetAllElements(element);var len=arr[OxO2a6f[31]];if(!len){return ;} ;for(var i=0;i<len;i++){arr[i].setAttribute(OxO2a6f[37],OxO2a6f[21]);arr[i].setAttribute(OxO2a6f[38],OxO2a6f[39]);} ;} ;function Event_GetEvent(Ox23c){Ox23c=Event_FindEvent(Ox23c);if(Ox23c==null){Debug_Todo(OxO2a6f[40]);} ;return Ox23c;} ;function Array_IndexOf(arr,Ox23e){for(var i=0;i<arr[OxO2a6f[31]];i++){if(arr[i]==Ox23e){return i;} ;} ;return -1;} ;function Array_Contains(arr,Ox23e){return Array_IndexOf(arr,Ox23e)!=-1;} ;function clearArray(Ox241){for(var i=0;i<Ox241[OxO2a6f[31]];i++){Ox241[i]=null;} ;} ;function Event_FindEvent(Ox23c){if(Ox23c&&Ox23c[OxO2a6f[41]]){return Ox23c;} ;if(Browser_IsGecko()){return Event_FindEvent_FindEventFromCallers();} else {if(window[OxO2a6f[42]]){return window[OxO2a6f[42]];} ;return Event_FindEvent_FindEventFromWindows();} ;return null;} ;function Event_FindEvent_FindEventFromCallers(){var Ox188=Event_GetEvent[OxO2a6f[17]];for(var i=0;i<100;i++){if(!Ox188){break ;} ;var Ox23c=Ox188[OxO2a6f[43]][0];if(Ox23c&&Ox23c[OxO2a6f[41]]){return Ox23c;} ;Ox188=Ox188[OxO2a6f[17]];} ;} ;function Event_FindEvent_FindEventFromWindows(){var arr=[];return Ox245(window);function Ox245(Ox1a1){if(Ox1a1==null){return null;} ;if(Ox1a1[OxO2a6f[42]]){return Ox1a1[OxO2a6f[42]];} ;if(Array_Contains(arr,Ox1a1)){return null;} ;arr.push(Ox1a1);var Ox246=[];if(Ox1a1[OxO2a6f[44]]!=Ox1a1){Ox246.push(Ox1a1.parent);} ;if(Ox1a1[OxO2a6f[25]]!=Ox1a1[OxO2a6f[44]]){Ox246.push(Ox1a1.top);} ;if(Ox1a1[OxO2a6f[28]]){Ox246.push(Ox1a1.opener);} ;for(var i=0;i<Ox1a1[OxO2a6f[45]][OxO2a6f[31]];i++){Ox246.push(Ox1a1[OxO2a6f[45]][i]);} ;for(var i=0;i<Ox246[OxO2a6f[31]];i++){try{var Ox23c=Ox245(Ox246[i]);if(Ox23c){return Ox23c;} ;} catch(x){} ;} ;return null;} ;} ;function Event_GetSrcElement(Ox23c){Ox23c=Event_GetEvent(Ox23c);if(Ox23c[OxO2a6f[46]]){return Ox23c[OxO2a6f[46]];} ;if(Ox23c[OxO2a6f[47]]){return Ox23c[OxO2a6f[47]];} ;Debug_Todo(OxO2a6f[48]);return null;} ;function Event_GetFromElement(Ox23c){Ox23c=Event_GetEvent(Ox23c);if(Ox23c[OxO2a6f[49]]){return Ox23c[OxO2a6f[49]];} ;if(Ox23c[OxO2a6f[50]]){return Ox23c[OxO2a6f[50]];} ;return null;} ;function Event_GetToElement(Ox23c){Ox23c=Event_GetEvent(Ox23c);if(Ox23c[OxO2a6f[51]]){return Ox23c[OxO2a6f[51]];} ;if(Ox23c[OxO2a6f[50]]){return Ox23c[OxO2a6f[50]];} ;return null;} ;function Event_GetKeyCode(Ox23c){Ox23c=Event_GetEvent(Ox23c);return Ox23c[OxO2a6f[52]]||Ox23c[OxO2a6f[53]];} ;function Event_GetClientX(Ox23c){Ox23c=Event_GetEvent(Ox23c);return Ox23c[OxO2a6f[54]];} ;function Event_GetClientY(Ox23c){Ox23c=Event_GetEvent(Ox23c);return Ox23c[OxO2a6f[55]];} ;function Event_GetOffsetX(Ox23c){Ox23c=Event_GetEvent(Ox23c);return Ox23c[OxO2a6f[56]];} ;function Event_GetOffsetY(Ox23c){Ox23c=Event_GetEvent(Ox23c);return Ox23c[OxO2a6f[57]];} ;function Event_IsLeftButton(Ox23c){Ox23c=Event_GetEvent(Ox23c);if(Browser_IsWinIE()){return Ox23c[OxO2a6f[58]]==1;} ;if(Browser_IsGecko()){return Ox23c[OxO2a6f[58]]==0;} ;return Ox23c[OxO2a6f[58]]==0;} ;function Event_IsCtrlKey(Ox23c){Ox23c=Event_GetEvent(Ox23c);return Ox23c[OxO2a6f[59]];} ;function Event_IsAltKey(Ox23c){Ox23c=Event_GetEvent(Ox23c);return Ox23c[OxO2a6f[60]];} ;function Event_IsShiftKey(Ox23c){Ox23c=Event_GetEvent(Ox23c);return Ox23c[OxO2a6f[61]];} ;function Event_PreventDefault(Ox23c){Ox23c=Event_GetEvent(Ox23c);Ox23c[OxO2a6f[26]]=false;if(Ox23c[OxO2a6f[41]]){Ox23c.preventDefault();} ;} ;function Event_CancelBubble(Ox23c){Ox23c=Event_GetEvent(Ox23c);Ox23c[OxO2a6f[62]]=true;if(Ox23c[OxO2a6f[63]]){Ox23c.stopPropagation();} ;return false;} ;function Event_CancelEvent(Ox23c){Ox23c=Event_GetEvent(Ox23c);Event_PreventDefault(Ox23c);return Event_CancelBubble(Ox23c);} ;function CuteEditor_ButtonOver(element){if(!element[OxO2a6f[64]]){element[OxO2a6f[65]]=Event_CancelEvent;element[OxO2a6f[66]]=CuteEditor_ButtonOut;element[OxO2a6f[67]]=CuteEditor_ButtonDown;element[OxO2a6f[68]]=CuteEditor_ButtonUp;Element_SetUnselectable(element);element[OxO2a6f[64]]=true;} ;element[OxO2a6f[69]]=true;element[OxO2a6f[70]]=OxO2a6f[71];} ;function CuteEditor_ButtonOut(){var element=this;element[OxO2a6f[70]]=OxO2a6f[72];element[OxO2a6f[69]]=false;} ;function CuteEditor_ButtonDown(){if(!Event_IsLeftButton()){return ;} ;var element=this;element[OxO2a6f[70]]=OxO2a6f[73];} ;function CuteEditor_ButtonUp(){if(!Event_IsLeftButton()){return ;} ;var element=this;if(element[OxO2a6f[69]]){element[OxO2a6f[70]]=OxO2a6f[71];} else {element[OxO2a6f[70]]=OxO2a6f[74];} ;} ;function CuteEditor_ColorPicker_ButtonOver(element){if(!element[OxO2a6f[64]]){element[OxO2a6f[65]]=Event_CancelEvent;element[OxO2a6f[66]]=CuteEditor_ColorPicker_ButtonOut;element[OxO2a6f[67]]=CuteEditor_ColorPicker_ButtonDown;Element_SetUnselectable(element);element[OxO2a6f[64]]=true;} ;element[OxO2a6f[69]]=true;element[OxO2a6f[76]][OxO2a6f[75]]=OxO2a6f[77];element[OxO2a6f[76]][OxO2a6f[78]]=OxO2a6f[79];element[OxO2a6f[76]][OxO2a6f[80]]=OxO2a6f[81];} ;function CuteEditor_ColorPicker_ButtonOut(){var element=this;element[OxO2a6f[69]]=false;element[OxO2a6f[76]][OxO2a6f[75]]=OxO2a6f[82];element[OxO2a6f[76]][OxO2a6f[78]]=OxO2a6f[16];element[OxO2a6f[76]][OxO2a6f[80]]=OxO2a6f[81];} ;function CuteEditor_ColorPicker_ButtonDown(){var element=this;element[OxO2a6f[76]][OxO2a6f[75]]=OxO2a6f[83];element[OxO2a6f[76]][OxO2a6f[78]]=OxO2a6f[16];element[OxO2a6f[76]][OxO2a6f[80]]=OxO2a6f[81];} ;function CuteEditor_ButtonCommandOver(element){element[OxO2a6f[69]]=true;if(element[OxO2a6f[84]]){element[OxO2a6f[70]]=OxO2a6f[85];} else {element[OxO2a6f[70]]=OxO2a6f[71];} ;} ;function CuteEditor_ButtonCommandOut(element){element[OxO2a6f[69]]=false;if(element[OxO2a6f[86]]){element[OxO2a6f[70]]=OxO2a6f[87];} else {if(element[OxO2a6f[84]]){element[OxO2a6f[70]]=OxO2a6f[85];} else {element[OxO2a6f[70]]=OxO2a6f[72];} ;} ;} ;function CuteEditor_ButtonCommandDown(element){if(!Event_IsLeftButton()){return ;} ;element[OxO2a6f[70]]=OxO2a6f[73];} ;function CuteEditor_ButtonCommandUp(element){if(!Event_IsLeftButton()){return ;} ;if(element[OxO2a6f[84]]){element[OxO2a6f[70]]=OxO2a6f[85];return ;} ;if(element[OxO2a6f[69]]){element[OxO2a6f[70]]=OxO2a6f[71];} else {if(element[OxO2a6f[86]]){element[OxO2a6f[70]]=OxO2a6f[87];} else {element[OxO2a6f[70]]=OxO2a6f[72];} ;} ;} [CuteEditor_ButtonOver,CuteEditor_ColorPicker_ButtonOver];[Window_GetDialogArguments,Window_SetDialogReturnValue,Window_CloseDialog,Window_GetElement];function CancelEventIfNotDigit(){var Ox262=Event_GetKeyCode();if(Browser_IsWinIE()){if((Ox262>=48)&&(Ox262<=57)){return true;} ;} else {if((Ox262<48||Ox262>57)&&Ox262!=8&&(Ox262<35||Ox262>37)&&Ox262!=39&&Ox262!=46){} else {return true;} ;} ;return Event_CancelEvent();} ;window[OxO2a6f[88]]=function window_onerror(Oxe7,b,Ox239){if(!__ISDEBUG){return false;} ;alert(Oxe7+OxO2a6f[22]+b+OxO2a6f[22]+Ox239+OxO2a6f[89]+GetStackTrace());return true;} ;function DialogHandleDblClick(){if(Event_IsCtrlKey()){window[OxO2a6f[91]][OxO2a6f[90]]=OxO2a6f[92]+window[OxO2a6f[91]][OxO2a6f[90]]+OxO2a6f[93]+ new Date().getTime();} ;if(Event_IsShiftKey()){window.open(window[OxO2a6f[91]].href,OxO2a6f[94]);} ;} ;function DialogHandleKeyDown(){var Ox266=Event_GetKeyCode();if(Ox266==116){window[OxO2a6f[91]].reload();} ;if(Ox266==27){Window_SetDialogReturnValue(window,false);Window_CloseDialog(window);} ;} ;Event_Attach(document,OxO2a6f[95],DialogHandleDblClick);Event_Attach(document,OxO2a6f[96],DialogHandleKeyDown);function Debug_ReportElements(Ox268){var Ox269={};var Ox26a=[];function Ox26b(Ox93){if(!Ox93){return ;} ;if(Ox269[Ox93]){Ox26a.push(OxO2a6f[97]);} ;Ox269[Ox93]=true;Ox26a.push(OxO2a6f[98]);Ox26a.push(Ox93);Ox26a.push(OxO2a6f[99]);Ox26a.push(Ox93);Ox26a.push(OxO2a6f[100]);Ox26a.push(OxO2a6f[22]);} ;var arr=Element_GetAllElements(Ox268);for(var i=0;i<arr[OxO2a6f[31]];i++){var Ox42=arr[i];Ox26b(Ox42.id);} ;var Ox1fa=Ox26a.join(OxO2a6f[16]);window[OxO2a6f[102]].setData(OxO2a6f[101],Ox1fa);} ;if(document[OxO2a6f[103]]){var rowprops=[OxO2a6f[104],OxO2a6f[105],OxO2a6f[106],OxO2a6f[107]];for(var rowpropi=0;rowpropi<rowprops[OxO2a6f[31]];rowpropi++){try{HTMLElement[OxO2a6f[110]].__defineGetter__(rowprops[rowpropi], new Function(OxO2a6f[108]+rowprops[rowpropi]+OxO2a6f[109]));} catch(x){} ;} ;} ;function outerHTML(element){var attr;var Ox270=element[OxO2a6f[111]];var Ox24=OxO2a6f[112]+element[OxO2a6f[113]];for(var i=0;i<Ox270[OxO2a6f[31]];i++){attr=Ox270[i];if(attr[OxO2a6f[114]]){Ox24+=OxO2a6f[115]+attr[OxO2a6f[116]]+OxO2a6f[117]+attr[OxO2a6f[118]]+OxO2a6f[119];} ;} ;if(!canHaveChildren(element)){return Ox24+OxO2a6f[120];} ;return Ox24+OxO2a6f[120]+element[OxO2a6f[121]]+OxO2a6f[122]+element[OxO2a6f[113]]+OxO2a6f[120];} ;function canHaveChildren(element){switch(element[OxO2a6f[113]]){case OxO2a6f[123]:;case OxO2a6f[124]:;case OxO2a6f[125]:;case OxO2a6f[126]:;case OxO2a6f[127]:;case OxO2a6f[128]:;case OxO2a6f[129]:;case OxO2a6f[130]:;case OxO2a6f[131]:;case OxO2a6f[132]:;case OxO2a6f[133]:;case OxO2a6f[134]:;case OxO2a6f[135]:return false;;} ;return true;} ;function RGBtoHex(Ox273,Ox274,Ox275){return toHex(Ox273)+toHex(Ox274)+toHex(Ox275);} ;function toHex(Ox277){if(Ox277==null){return OxO2a6f[136];} ;Ox277=parseInt(Ox277);if(Ox277==0||isNaN(Ox277)){return OxO2a6f[136];} ;Ox277=Math.max(0,Ox277);Ox277=Math.min(Ox277,255);Ox277=Math.round(Ox277);return OxO2a6f[137].charAt((Ox277-Ox277%16)/16)+OxO2a6f[137].charAt(Ox277%16);} ;var dec_pattern=/rgb\((\d{1,3})[,]\s*(\d{1,3})[,]\s*(\d{1,3})\)/gi;function revertColor(Ox27a){if(Ox27a.match(dec_pattern)){var Ox27b=Ox27a.replace(dec_pattern,function (Ox24,p1,Ox6b,Ox27c){return (OxO2a6f[138]+RGBtoHex(p1,Ox6b,Ox27c)).toLowerCase();} );return Ox27b;} ;return Ox27a;} ;function isNull(Oxe7){return  typeof Oxe7==OxO2a6f[139]&&!Oxe7;} ;function CreateXMLHttpRequest(){try{if( typeof (XMLHttpRequest)!=OxO2a6f[140]){return  new XMLHttpRequest();} ;if( typeof (ActiveXObject)!=OxO2a6f[140]){return  new ActiveXObject(OxO2a6f[141]);} ;} catch(x){return null;} ;} ;function include(Oxc2,Ox280){var Ox281=document.getElementsByTagName(OxO2a6f[142]).item(0);var Ox282=document.getElementById(Oxc2);if(Ox282){Ox281.removeChild(Ox282);} ;var Ox283=document.createElement(OxO2a6f[143]);Ox283.setAttribute(OxO2a6f[144],OxO2a6f[145]);Ox283.setAttribute(OxO2a6f[146],OxO2a6f[147]);Ox283.setAttribute(OxO2a6f[148],Ox280);Ox283.setAttribute(OxO2a6f[149],Oxc2);Ox281.appendChild(Ox283);} ;function SelectColor(Ox285,Ox286){if(Ox285.getAttribute(OxO2a6f[150])==OxO2a6f[151]){return ;} ;var Ox287=editor.GetScriptProperty(OxO2a6f[152])+OxO2a6f[153];if(!window[OxO2a6f[154]]){var Ox288=CreateXMLHttpRequest();if(Ox288){Ox288.open(OxO2a6f[155],Ox287,true,null,null);Ox288[OxO2a6f[156]]=function (){if(Ox288[OxO2a6f[157]]<4){return ;} ;var Ox262=Ox288[OxO2a6f[158]];Ox288=null;eval(Ox262+OxO2a6f[159]);Ox289();} ;Ox288.send(OxO2a6f[16]);} else {include(OxO2a6f[160],Ox287);setTimeout(Ox289,100);} ;} else {Ox289();} ;function Ox289(){Ox285.setAttribute(OxO2a6f[150],OxO2a6f[151]);Ox285[OxO2a6f[118]]=OxO2a6f[16];window.CuteEditorColorPickerInitialize(Ox285,window.editor);Ox285[OxO2a6f[161]]=function (Oxd5){if(Oxd5!=null&&Oxd5!==false){Ox285[OxO2a6f[118]]=Oxd5.toUpperCase();Ox285[OxO2a6f[76]][OxO2a6f[78]]=Oxd5;if(Ox286){Ox286[OxO2a6f[76]][OxO2a6f[78]]=Oxd5;} ;if(window[OxO2a6f[162]]){window.FireUIChanged();} ;} ;} ;Ox285[OxO2a6f[163]]=Ox285[OxO2a6f[164]];if(Ox286){Ox286[OxO2a6f[163]]=function (){setTimeout(Ox285.popupColorPicker,100);} ;} ;setTimeout(Ox285.popupColorPicker,100);} ;} ;function row_click(src){} ;function do_Close(){Window_SetDialogReturnValue(window,null);Window_CloseDialog(window);} ;var isDemoMode=false;