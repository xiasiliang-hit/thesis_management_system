var OxOffc3=["SetStyle","length","","GetStyle","GetText",":",";","cssText","div_selector_event","div_selector","sel_part","tb_margin","sel_margin_unit","tb_padding","sel_padding_unit","tb_border","sel_border_unit","sel_border","sel_style","inp_color","inp_color_Preview","outer","div_demo","offsetWidth","offsetHeight","Top","Left","Bottom","Right","onmousemove","runtimeStyle","border","4px solid red","style","onmouseout","onclick","value","onchange","disabled","selectedIndex","4px solid blue","-","Color"," ","#7f7c75","backgroundColor","Style","Width","options","margin","padding"];function pause(Ox49d){var Oxa1= new Date();var Ox49e=Oxa1.getTime()+Ox49d;while(true){Oxa1= new Date();if(Oxa1.getTime()>Ox49e){return ;} ;} ;} ;function StyleClass(Ox1fa){var Ox4a0=[];var Ox4a1={};if(Ox1fa){Ox4a6();} ;this[OxOffc3[0]]=function SetStyle(name,Ox4e,Ox4a3){name=name.toLowerCase();for(var i=0;i<Ox4a0[OxOffc3[1]];i++){if(Ox4a0[i]==name){break ;} ;} ;Ox4a0[i]=name;Ox4a1[name]=Ox4e?(Ox4e+(Ox4a3||OxOffc3[2])):OxOffc3[2];} ;this[OxOffc3[3]]=function GetStyle(name){name=name.toLowerCase();return Ox4a1[name]||OxOffc3[2];} ;this[OxOffc3[4]]=function Ox4a5(){var Ox1fa=OxOffc3[2];for(var i=0;i<Ox4a0[OxOffc3[1]];i++){var n=Ox4a0[i];var p=Ox4a1[n];if(p){Ox1fa+=n+OxOffc3[5]+p+OxOffc3[6];} ;} ;return Ox1fa;} ;function Ox4a6(){var arr=Ox1fa.split(OxOffc3[6]);for(var i=0;i<arr[OxOffc3[1]];i++){var p=arr[i].split(OxOffc3[5]);var n=p[0].replace(/^\s+/g,OxOffc3[2]).replace(/\s+$/g,OxOffc3[2]).toLowerCase();Ox4a0[Ox4a0[OxOffc3[1]]]=n;Ox4a1[n]=p[1];} ;} ;} ;function GetStyle(Ox130,name){return  new StyleClass(Ox130.cssText).GetStyle(name);} ;function SetStyle(Ox130,name,Ox4e,Ox4a7){var Ox4a8= new StyleClass(Ox130.cssText);Ox4a8.SetStyle(name,Ox4e,Ox4a7);Ox130[OxOffc3[7]]=Ox4a8.GetText();} ;function ParseFloatToString(Ox24){var Ox8=parseFloat(Ox24);if(isNaN(Ox8)){return OxOffc3[2];} ;return Ox8+OxOffc3[2];} ;var div_selector_event=Window_GetElement(window,OxOffc3[8],true);var div_selector=Window_GetElement(window,OxOffc3[9],true);var sel_part=Window_GetElement(window,OxOffc3[10],true);var tb_margin=Window_GetElement(window,OxOffc3[11],true);var sel_margin_unit=Window_GetElement(window,OxOffc3[12],true);var tb_padding=Window_GetElement(window,OxOffc3[13],true);var sel_padding_unit=Window_GetElement(window,OxOffc3[14],true);var tb_border=Window_GetElement(window,OxOffc3[15],true);var sel_border_unit=Window_GetElement(window,OxOffc3[16],true);var sel_border=Window_GetElement(window,OxOffc3[17],true);var sel_style=Window_GetElement(window,OxOffc3[18],true);var inp_color=Window_GetElement(window,OxOffc3[19],true);var inp_color_Preview=Window_GetElement(window,OxOffc3[20],true);var outer=Window_GetElement(window,OxOffc3[21],true);var div_demo=Window_GetElement(window,OxOffc3[22],true);function GetPartFromEvent(){var src=Event_GetSrcElement();var x=Event_GetOffsetX();var y=Event_GetOffsetY();if(src==div_selector){x+=10;y+=10;} ;var Ox11=15-x;var Oxa=x-(div_selector_event[OxOffc3[23]]-15);var Ox12=15-y;var b=y-(div_selector_event[OxOffc3[24]]-15);if(Ox11>0){if(Ox12>0){return Ox11>Ox12?OxOffc3[25]:OxOffc3[26];} ;if(b>0){return Ox11>b?OxOffc3[27]:OxOffc3[26];} ;return OxOffc3[26];} ;if(Oxa>0){if(Ox12>0){return Oxa>Ox12?OxOffc3[25]:OxOffc3[28];} ;if(b>0){return Oxa>b?OxOffc3[27]:OxOffc3[28];} ;return OxOffc3[28];} ;if(Ox12>0){return OxOffc3[25];} ;if(b>0){return OxOffc3[27];} ;return OxOffc3[2];} ;div_selector_event[OxOffc3[29]]=function div_selector_event_onmousemove(){var Ox4c0=GetPartFromEvent();if(Browser_IsWinIE()){div_selector[OxOffc3[30]][OxOffc3[7]]=OxOffc3[2];div_selector[OxOffc3[30]][OxOffc3[31]+Ox4c0]=OxOffc3[32];} else {div_selector[OxOffc3[33]][OxOffc3[7]]=OxOffc3[2];div_selector[OxOffc3[33]][OxOffc3[31]+Ox4c0]=OxOffc3[32];} ;} ;div_selector_event[OxOffc3[34]]=function div_selector_event_onmouseout(){if(Browser_IsWinIE()){div_selector[OxOffc3[30]][OxOffc3[7]]=OxOffc3[2];} else {div_selector[OxOffc3[33]][OxOffc3[7]]=OxOffc3[2];} ;} ;div_selector_event[OxOffc3[35]]=function div_selector_event_onclick(){sel_part[OxOffc3[36]]=GetPartFromEvent();SyncToViewInternal();UpdateState();} ;sel_part[OxOffc3[37]]=function sel_part_onchange(){SyncToViewInternal();UpdateState();} ;UpdateState=function UpdateState_Border(){tb_border[OxOffc3[38]]=sel_border_unit[OxOffc3[38]]=(sel_border[OxOffc3[39]]>0);div_demo[OxOffc3[33]][OxOffc3[7]]=element[OxOffc3[33]][OxOffc3[7]];div_selector[OxOffc3[33]][OxOffc3[7]]=OxOffc3[2];div_selector[OxOffc3[33]][OxOffc3[31]+(sel_part[OxOffc3[36]]||OxOffc3[2])]=OxOffc3[40];} ;SyncToView=function SyncToView_Border(){var Ox4c0=sel_part[OxOffc3[36]];var Ox4c1=Ox4c0?OxOffc3[41]+Ox4c0:Ox4c0;if(Browser_IsWinIE()){inp_color[OxOffc3[36]]=element[OxOffc3[33]][OxOffc3[31]+Ox4c0+OxOffc3[42]];} else {var arr=revertColor(element[OxOffc3[33]][OxOffc3[31]+Ox4c0+OxOffc3[42]]).split(OxOffc3[43]);if(arr[0]!=OxOffc3[44]){inp_color[OxOffc3[36]]=arr[0];} ;} ;inp_color[OxOffc3[33]][OxOffc3[45]]=inp_color[OxOffc3[36]];sel_style[OxOffc3[36]]=element[OxOffc3[33]][OxOffc3[31]+Ox4c0+OxOffc3[46]];sel_border[OxOffc3[36]]=element[OxOffc3[33]][OxOffc3[31]+Ox4c0+OxOffc3[47]];var Ox5ca=element[OxOffc3[33]][OxOffc3[31]+Ox4c0+OxOffc3[47]];tb_border[OxOffc3[36]]=ParseFloatToString(Ox5ca);if(tb_border[OxOffc3[36]]){for(var i=0;i<sel_border_unit[OxOffc3[48]][OxOffc3[1]];i++){var Ox13b=sel_border_unit[OxOffc3[48]][i][OxOffc3[36]];if(Ox13b&&Ox5ca.indexOf(Ox13b)!=-1){sel_border_unit[OxOffc3[39]]=i;break ;} ;} ;} ;var Ox5cb=element[OxOffc3[33]][OxOffc3[49]+Ox4c0];tb_margin[OxOffc3[36]]=ParseFloatToString(Ox5cb);if(tb_margin[OxOffc3[36]]){for(var i=0;i<sel_margin_unit[OxOffc3[48]][OxOffc3[1]];i++){var Ox13b=sel_margin_unit[OxOffc3[48]][i][OxOffc3[36]];if(Ox13b&&Ox5cb.indexOf(Ox13b)!=-1){sel_margin_unit[OxOffc3[39]]=i;break ;} ;} ;} ;var Ox5cc=element[OxOffc3[33]][OxOffc3[50]+Ox4c0];tb_padding[OxOffc3[36]]=ParseFloatToString(Ox5cc);if(tb_padding[OxOffc3[36]]){for(var i=0;i<sel_padding_unit[OxOffc3[48]][OxOffc3[1]];i++){var Ox13b=sel_padding_unit[OxOffc3[48]][i][OxOffc3[36]];if(Ox13b&&Ox5cc.indexOf(Ox13b)!=-1){sel_padding_unit[OxOffc3[39]]=i;break ;} ;} ;} ;} ;SyncTo=function SyncTo_Border(element){var Ox4c0=sel_part[OxOffc3[36]];var Ox4c1=Ox4c0?OxOffc3[41]+Ox4c0:Ox4c0;var Ox4c2=OxOffc3[2];if(sel_border[OxOffc3[39]]>0){Ox4c2=sel_border[OxOffc3[36]];} else {if(ParseFloatToString(tb_border.value)){Ox4c2=ParseFloatToString(tb_border.value)+sel_border_unit[OxOffc3[36]];} else {Ox4c2=OxOffc3[2];} ;} ;var Oxd5=inp_color[OxOffc3[36]]||OxOffc3[2];var Ox130=sel_style[OxOffc3[36]]||OxOffc3[2];if(Ox4c2||Ox130){SetStyle(element.style,OxOffc3[31]+Ox4c1,Ox4c2+OxOffc3[43]+Ox130+OxOffc3[43]+Oxd5);} else {SetStyle(element.style,OxOffc3[31]+Ox4c1,OxOffc3[2]);} ;SetStyle(element.style,OxOffc3[49]+Ox4c1,ParseFloatToString(tb_margin.value),sel_margin_unit.value);SetStyle(element.style,OxOffc3[50]+Ox4c1,ParseFloatToString(tb_padding.value),sel_padding_unit.value);} ;inp_color[OxOffc3[35]]=inp_color_Preview[OxOffc3[35]]=function inp_color_onclick(){SelectColor(inp_color,inp_color_Preview);} ;