var OxO70a0=["SetStyle","length","","GetStyle","GetText",":",";","cssText","sel_font","div_font_detail","sel_fontfamily","cb_decoration_under","cb_decoration_over","cb_decoration_through","cb_style_bold","cb_style_italic","sel_fontTransform","sel_fontsize","inp_fontsize","sel_fontsize_unit","inp_color","inp_color_Preview","outer","div_demo","disabled","selectedIndex","style","value","font","fontFamily","color","backgroundColor","textDecoration","checked","overline","underline","line-through","fontWeight","bold","fontStyle","italic","fontSize","options","textTransform","font-family","overline ","underline ","line-through ","onclick"];function pause(Ox49d){var Oxa1= new Date();var Ox49e=Oxa1.getTime()+Ox49d;while(true){Oxa1= new Date();if(Oxa1.getTime()>Ox49e){return ;} ;} ;} ;function StyleClass(Ox1fa){var Ox4a0=[];var Ox4a1={};if(Ox1fa){Ox4a6();} ;this[OxO70a0[0]]=function SetStyle(name,Ox4e,Ox4a3){name=name.toLowerCase();for(var i=0;i<Ox4a0[OxO70a0[1]];i++){if(Ox4a0[i]==name){break ;} ;} ;Ox4a0[i]=name;Ox4a1[name]=Ox4e?(Ox4e+(Ox4a3||OxO70a0[2])):OxO70a0[2];} ;this[OxO70a0[3]]=function GetStyle(name){name=name.toLowerCase();return Ox4a1[name]||OxO70a0[2];} ;this[OxO70a0[4]]=function Ox4a5(){var Ox1fa=OxO70a0[2];for(var i=0;i<Ox4a0[OxO70a0[1]];i++){var n=Ox4a0[i];var p=Ox4a1[n];if(p){Ox1fa+=n+OxO70a0[5]+p+OxO70a0[6];} ;} ;return Ox1fa;} ;function Ox4a6(){var arr=Ox1fa.split(OxO70a0[6]);for(var i=0;i<arr[OxO70a0[1]];i++){var p=arr[i].split(OxO70a0[5]);var n=p[0].replace(/^\s+/g,OxO70a0[2]).replace(/\s+$/g,OxO70a0[2]).toLowerCase();Ox4a0[Ox4a0[OxO70a0[1]]]=n;Ox4a1[n]=p[1];} ;} ;} ;function GetStyle(Ox130,name){return  new StyleClass(Ox130.cssText).GetStyle(name);} ;function SetStyle(Ox130,name,Ox4e,Ox4a7){var Ox4a8= new StyleClass(Ox130.cssText);Ox4a8.SetStyle(name,Ox4e,Ox4a7);Ox130[OxO70a0[7]]=Ox4a8.GetText();} ;function ParseFloatToString(Ox24){var Ox8=parseFloat(Ox24);if(isNaN(Ox8)){return OxO70a0[2];} ;return Ox8+OxO70a0[2];} ;var sel_font=Window_GetElement(window,OxO70a0[8],true);var div_font_detail=Window_GetElement(window,OxO70a0[9],true);var sel_fontfamily=Window_GetElement(window,OxO70a0[10],true);var cb_decoration_under=Window_GetElement(window,OxO70a0[11],true);var cb_decoration_over=Window_GetElement(window,OxO70a0[12],true);var cb_decoration_through=Window_GetElement(window,OxO70a0[13],true);var cb_style_bold=Window_GetElement(window,OxO70a0[14],true);var cb_style_italic=Window_GetElement(window,OxO70a0[15],true);var sel_fontTransform=Window_GetElement(window,OxO70a0[16],true);var sel_fontsize=Window_GetElement(window,OxO70a0[17],true);var inp_fontsize=Window_GetElement(window,OxO70a0[18],true);var sel_fontsize_unit=Window_GetElement(window,OxO70a0[19],true);var inp_color=Window_GetElement(window,OxO70a0[20],true);var inp_color_Preview=Window_GetElement(window,OxO70a0[21],true);var outer=Window_GetElement(window,OxO70a0[22],true);var div_demo=Window_GetElement(window,OxO70a0[23],true);UpdateState=function UpdateState_Font(){inp_fontsize[OxO70a0[24]]=sel_fontsize_unit[OxO70a0[24]]=(sel_fontsize[OxO70a0[25]]>0);div_font_detail[OxO70a0[24]]=sel_font[OxO70a0[25]]>0;div_demo[OxO70a0[26]][OxO70a0[7]]=element[OxO70a0[26]][OxO70a0[7]];} ;SyncToView=function SyncToView_Font(){sel_font[OxO70a0[27]]=element[OxO70a0[26]][OxO70a0[28]].toLowerCase()||null;sel_fontfamily[OxO70a0[27]]=element[OxO70a0[26]][OxO70a0[29]];inp_color[OxO70a0[27]]=element[OxO70a0[26]][OxO70a0[30]];inp_color[OxO70a0[26]][OxO70a0[31]]=inp_color[OxO70a0[27]];var Ox5dd=element[OxO70a0[26]][OxO70a0[32]].toLowerCase();cb_decoration_over[OxO70a0[33]]=Ox5dd.indexOf(OxO70a0[34])!=-1;cb_decoration_under[OxO70a0[33]]=Ox5dd.indexOf(OxO70a0[35])!=-1;cb_decoration_through[OxO70a0[33]]=Ox5dd.indexOf(OxO70a0[36])!=-1;cb_style_bold[OxO70a0[33]]=element[OxO70a0[26]][OxO70a0[37]]==OxO70a0[38];cb_style_italic[OxO70a0[33]]=element[OxO70a0[26]][OxO70a0[39]]==OxO70a0[40];sel_fontsize[OxO70a0[27]]=element[OxO70a0[26]][OxO70a0[41]];sel_fontsize_unit[OxO70a0[25]]=0;if(sel_fontsize[OxO70a0[25]]==-1){if(ParseFloatToString(element[OxO70a0[26]].fontSize)){sel_fontsize[OxO70a0[27]]=ParseFloatToString(element[OxO70a0[26]].fontSize);for(var i=0;i<sel_fontsize_unit[OxO70a0[42]][OxO70a0[1]];i++){var Ox13b=sel_fontsize_unit.options(i)[OxO70a0[27]];if(Ox13b&&element[OxO70a0[26]][OxO70a0[41]].indexOf(Ox13b)!=-1){sel_fontsize_unit[OxO70a0[25]]=i;break ;} ;} ;} ;} ;sel_fontTransform[OxO70a0[27]]=element[OxO70a0[26]][OxO70a0[43]];} ;SyncTo=function SyncTo_Font(element){SetStyle(element.style,OxO70a0[28],sel_font.value);if(sel_fontfamily[OxO70a0[27]]){element[OxO70a0[26]][OxO70a0[29]]=sel_fontfamily[OxO70a0[27]];} else {SetStyle(element.style,OxO70a0[44],OxO70a0[2]);} ;try{element[OxO70a0[26]][OxO70a0[30]]=inp_color[OxO70a0[27]]||OxO70a0[2];} catch(x){element[OxO70a0[26]][OxO70a0[30]]=OxO70a0[2];} ;var Ox5df=cb_decoration_over[OxO70a0[33]];var Ox5e0=cb_decoration_under[OxO70a0[33]];var Ox5e1=cb_decoration_through[OxO70a0[33]];if(!Ox5df&&!Ox5e0&&!Ox5e1){element[OxO70a0[26]][OxO70a0[32]]=OxO70a0[2];} else {var Ox51=OxO70a0[2];if(Ox5df){Ox51+=OxO70a0[45];} ;if(Ox5e0){Ox51+=OxO70a0[46];} ;if(Ox5e1){Ox51+=OxO70a0[47];} ;element[OxO70a0[26]][OxO70a0[32]]=Ox51.substr(0,Ox51[OxO70a0[1]]-1);} ;element[OxO70a0[26]][OxO70a0[37]]=cb_style_bold[OxO70a0[33]]?OxO70a0[38]:OxO70a0[2];element[OxO70a0[26]][OxO70a0[39]]=cb_style_italic[OxO70a0[33]]?OxO70a0[40]:OxO70a0[2];element[OxO70a0[26]][OxO70a0[43]]=sel_fontTransform[OxO70a0[27]]||OxO70a0[2];if(sel_fontsize[OxO70a0[25]]>0){element[OxO70a0[26]][OxO70a0[41]]=sel_fontsize[OxO70a0[27]];} else {if(ParseFloatToString(inp_fontsize.value)){element[OxO70a0[26]][OxO70a0[41]]=ParseFloatToString(inp_fontsize.value)+sel_fontsize_unit[OxO70a0[27]];} else {element[OxO70a0[26]][OxO70a0[41]]=OxO70a0[2];} ;} ;} ;inp_color[OxO70a0[48]]=inp_color_Preview[OxO70a0[48]]=function inp_color_onclick(){SelectColor(inp_color,inp_color_Preview);} ;