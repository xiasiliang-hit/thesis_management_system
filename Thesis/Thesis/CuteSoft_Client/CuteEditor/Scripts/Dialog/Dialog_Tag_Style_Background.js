var OxO27bb=["SetStyle","length","","GetStyle","GetText",":",";","cssText","inp_color","inp_color_Preview","tb_image","btnbrowse","sel_bgrepeat","sel_bgattach","sel_hor","tb_hor","sel_hor_unit","sel_ver","tb_ver","sel_ver_unit","outer","div_demo","onclick","value","disabled","selectedIndex","style","backgroundImage","backgroundColor","backgroundRepeat","backgroundAttachment","backgroundPositionX","options","backgroundPositionY","url(",")","background-image","backgroundPosition","none"];function pause(Ox49d){var Oxa1= new Date();var Ox49e=Oxa1.getTime()+Ox49d;while(true){Oxa1= new Date();if(Oxa1.getTime()>Ox49e){return ;} ;} ;} ;function StyleClass(Ox1fa){var Ox4a0=[];var Ox4a1={};if(Ox1fa){Ox4a6();} ;this[OxO27bb[0]]=function SetStyle(name,Ox4e,Ox4a3){name=name.toLowerCase();for(var i=0;i<Ox4a0[OxO27bb[1]];i++){if(Ox4a0[i]==name){break ;} ;} ;Ox4a0[i]=name;Ox4a1[name]=Ox4e?(Ox4e+(Ox4a3||OxO27bb[2])):OxO27bb[2];} ;this[OxO27bb[3]]=function GetStyle(name){name=name.toLowerCase();return Ox4a1[name]||OxO27bb[2];} ;this[OxO27bb[4]]=function Ox4a5(){var Ox1fa=OxO27bb[2];for(var i=0;i<Ox4a0[OxO27bb[1]];i++){var n=Ox4a0[i];var p=Ox4a1[n];if(p){Ox1fa+=n+OxO27bb[5]+p+OxO27bb[6];} ;} ;return Ox1fa;} ;function Ox4a6(){var arr=Ox1fa.split(OxO27bb[6]);for(var i=0;i<arr[OxO27bb[1]];i++){var p=arr[i].split(OxO27bb[5]);var n=p[0].replace(/^\s+/g,OxO27bb[2]).replace(/\s+$/g,OxO27bb[2]).toLowerCase();Ox4a0[Ox4a0[OxO27bb[1]]]=n;Ox4a1[n]=p[1];} ;} ;} ;function GetStyle(Ox130,name){return  new StyleClass(Ox130.cssText).GetStyle(name);} ;function SetStyle(Ox130,name,Ox4e,Ox4a7){var Ox4a8= new StyleClass(Ox130.cssText);Ox4a8.SetStyle(name,Ox4e,Ox4a7);Ox130[OxO27bb[7]]=Ox4a8.GetText();} ;function ParseFloatToString(Ox24){var Ox8=parseFloat(Ox24);if(isNaN(Ox8)){return OxO27bb[2];} ;return Ox8+OxO27bb[2];} ;var inp_color=Window_GetElement(window,OxO27bb[8],true);var inp_color_Preview=Window_GetElement(window,OxO27bb[9],true);var tb_image=Window_GetElement(window,OxO27bb[10],true);var btnbrowse=Window_GetElement(window,OxO27bb[11],true);var sel_bgrepeat=Window_GetElement(window,OxO27bb[12],true);var sel_bgattach=Window_GetElement(window,OxO27bb[13],true);var sel_hor=Window_GetElement(window,OxO27bb[14],true);var tb_hor=Window_GetElement(window,OxO27bb[15],true);var sel_hor_unit=Window_GetElement(window,OxO27bb[16],true);var sel_ver=Window_GetElement(window,OxO27bb[17],true);var tb_ver=Window_GetElement(window,OxO27bb[18],true);var sel_ver_unit=Window_GetElement(window,OxO27bb[19],true);var outer=Window_GetElement(window,OxO27bb[20],true);var div_demo=Window_GetElement(window,OxO27bb[21],true);btnbrowse[OxO27bb[22]]=function btnbrowse_onclick(){function Ox354(Ox137){if(Ox137){tb_image[OxO27bb[23]]=Ox137;} ;} ;editor.SetNextDialogWindow(window);if(Browser_IsSafari()){editor.ShowSelectImageDialog(Ox354,tb_image.value,tb_image);} else {editor.ShowSelectImageDialog(Ox354,tb_image.value);} ;} ;UpdateState=function UpdateState_Background(){tb_hor[OxO27bb[24]]=sel_hor_unit[OxO27bb[24]]=(sel_hor[OxO27bb[25]]>0);tb_ver[OxO27bb[24]]=sel_ver_unit[OxO27bb[24]]=(sel_ver[OxO27bb[25]]>0);div_demo[OxO27bb[26]][OxO27bb[7]]=element[OxO27bb[26]][OxO27bb[7]];} ;SyncToView=function SyncToView_Background(){tb_image[OxO27bb[23]]=element[OxO27bb[26]][OxO27bb[27]];FixTbImage();inp_color[OxO27bb[23]]=element[OxO27bb[26]][OxO27bb[28]];inp_color[OxO27bb[26]][OxO27bb[28]]=element[OxO27bb[26]][OxO27bb[28]];inp_color_Preview[OxO27bb[26]][OxO27bb[28]]=element[OxO27bb[26]][OxO27bb[28]];sel_bgrepeat[OxO27bb[23]]=element[OxO27bb[26]][OxO27bb[29]];sel_bgattach[OxO27bb[23]]=element[OxO27bb[26]][OxO27bb[30]];sel_hor[OxO27bb[23]]=element[OxO27bb[26]][OxO27bb[31]];sel_hor_unit[OxO27bb[25]]=0;if(sel_hor[OxO27bb[25]]==-1){if(ParseFloatToString(element[OxO27bb[26]].backgroundPositionX)){tb_hor[OxO27bb[23]]=ParseFloatToString(element[OxO27bb[26]].backgroundPositionX);for(var i=0;i<sel_hor_unit[OxO27bb[32]][OxO27bb[1]];i++){var Ox13b=sel_hor_unit[OxO27bb[32]][i][OxO27bb[23]];if(Ox13b&&element[OxO27bb[26]][OxO27bb[31]].indexOf(Ox13b)!=-1){sel_hor_unit[OxO27bb[25]]=i;break ;} ;} ;} ;} ;sel_ver[OxO27bb[23]]=element[OxO27bb[26]][OxO27bb[33]];sel_ver_unit[OxO27bb[25]]=0;if(sel_ver[OxO27bb[25]]==-1){if(ParseFloatToString(element[OxO27bb[26]].backgroundPositionY)){tb_ver[OxO27bb[23]]=ParseFloatToString(element[OxO27bb[26]].backgroundPositionY);for(var i=0;i<sel_ver_unit[OxO27bb[32]][OxO27bb[1]];i++){var Ox13b=sel_ver_unit[OxO27bb[32]][i][OxO27bb[23]];if(Ox13b&&element[OxO27bb[26]][OxO27bb[33]].indexOf(Ox13b)!=-1){sel_ver_unit[OxO27bb[25]]=i;break ;} ;} ;} ;} ;} ;SyncTo=function SyncTo_Background(element){if(tb_image[OxO27bb[23]]){element[OxO27bb[26]][OxO27bb[27]]=OxO27bb[34]+tb_image[OxO27bb[23]]+OxO27bb[35];} else {SetStyle(element.style,OxO27bb[36],OxO27bb[2]);} ;try{element[OxO27bb[26]][OxO27bb[28]]=inp_color[OxO27bb[23]]||OxO27bb[2];} catch(x){element[OxO27bb[26]][OxO27bb[28]]=OxO27bb[2];} ;element[OxO27bb[26]][OxO27bb[29]]=sel_bgrepeat[OxO27bb[23]]||OxO27bb[2];element[OxO27bb[26]][OxO27bb[30]]=sel_bgattach[OxO27bb[23]]||OxO27bb[2];element[OxO27bb[26]][OxO27bb[37]]=OxO27bb[2];if(sel_hor[OxO27bb[25]]>0){element[OxO27bb[26]][OxO27bb[31]]=sel_hor[OxO27bb[23]];} else {if(ParseFloatToString(tb_hor.value)){element[OxO27bb[26]][OxO27bb[31]]=ParseFloatToString(tb_hor.value)+sel_hor_unit[OxO27bb[23]];} else {element[OxO27bb[26]][OxO27bb[31]]=OxO27bb[2];} ;} ;if(sel_ver[OxO27bb[25]]>0){element[OxO27bb[26]][OxO27bb[33]]=sel_ver[OxO27bb[23]];} else {if(ParseFloatToString(tb_ver.value)){element[OxO27bb[26]][OxO27bb[33]]=ParseFloatToString(tb_ver.value)+sel_ver_unit[OxO27bb[23]];} else {element[OxO27bb[26]][OxO27bb[33]]=OxO27bb[2];} ;} ;} ;function FixTbImage(){var Ox13b=tb_image[OxO27bb[23]].replace(/^(\s+)/g,OxO27bb[2]).replace(/(\s+)$/g,OxO27bb[2]);if(Ox13b.substr(0,4).toLowerCase()==OxO27bb[34]){Ox13b=Ox13b.substr(4,Ox13b[OxO27bb[1]]-4);} ;if(Ox13b.substr(Ox13b[OxO27bb[1]]-1,1)==OxO27bb[35]){Ox13b=Ox13b.substr(0,Ox13b[OxO27bb[1]]-1);} ;if(Ox13b==OxO27bb[38]){Ox13b=OxO27bb[2];} ;tb_image[OxO27bb[23]]=Ox13b;} ;inp_color[OxO27bb[22]]=inp_color_Preview[OxO27bb[22]]=function inp_color_onclick(){SelectColor(inp_color,inp_color_Preview);} ;