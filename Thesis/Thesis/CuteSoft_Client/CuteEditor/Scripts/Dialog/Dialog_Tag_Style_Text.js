var OxOd6bd=["","sel_align","sel_valign","sel_justify","sel_letter","tb_letter","sel_letter_unit","sel_line","tb_line","sel_line_unit","tb_indent","sel_indent_unit","sel_direction","sel_writingmode","outer","div_demo","disabled","selectedIndex","cssText","style","value","textAlign","verticalAlign","textJustify","letterSpacing","length","options","lineHeight","textIndent","direction","writingMode"];function ParseFloatToString(Ox24){var Ox8=parseFloat(Ox24);if(isNaN(Ox8)){return OxOd6bd[0];} ;return Ox8+OxOd6bd[0];} ;var sel_align=Window_GetElement(window,OxOd6bd[1],true);var sel_valign=Window_GetElement(window,OxOd6bd[2],true);var sel_justify=Window_GetElement(window,OxOd6bd[3],true);var sel_letter=Window_GetElement(window,OxOd6bd[4],true);var tb_letter=Window_GetElement(window,OxOd6bd[5],true);var sel_letter_unit=Window_GetElement(window,OxOd6bd[6],true);var sel_line=Window_GetElement(window,OxOd6bd[7],true);var tb_line=Window_GetElement(window,OxOd6bd[8],true);var sel_line_unit=Window_GetElement(window,OxOd6bd[9],true);var tb_indent=Window_GetElement(window,OxOd6bd[10],true);var sel_indent_unit=Window_GetElement(window,OxOd6bd[11],true);var sel_direction=Window_GetElement(window,OxOd6bd[12],true);var sel_writingmode=Window_GetElement(window,OxOd6bd[13],true);var outer=Window_GetElement(window,OxOd6bd[14],true);var div_demo=Window_GetElement(window,OxOd6bd[15],true);UpdateState=function UpdateState_Text(){tb_letter[OxOd6bd[16]]=sel_letter_unit[OxOd6bd[16]]=(sel_letter[OxOd6bd[17]]>0);tb_line[OxOd6bd[16]]=sel_line_unit[OxOd6bd[16]]=(sel_line[OxOd6bd[17]]>0);div_demo[OxOd6bd[19]][OxOd6bd[18]]=element[OxOd6bd[19]][OxOd6bd[18]];} ;SyncToView=function SyncToView_Text(){sel_align[OxOd6bd[20]]=element[OxOd6bd[19]][OxOd6bd[21]];sel_valign[OxOd6bd[20]]=element[OxOd6bd[19]][OxOd6bd[22]];sel_justify[OxOd6bd[20]]=element[OxOd6bd[19]][OxOd6bd[23]];sel_letter[OxOd6bd[20]]=element[OxOd6bd[19]][OxOd6bd[24]];sel_letter_unit[OxOd6bd[17]]=0;if(sel_letter[OxOd6bd[17]]==-1){if(ParseFloatToString(element[OxOd6bd[19]].letterSpacing)){tb_letter[OxOd6bd[20]]=ParseFloatToString(element[OxOd6bd[19]].letterSpacing);for(var i=0;i<sel_letter_unit[OxOd6bd[26]][OxOd6bd[25]];i++){var Ox13b=sel_letter_unit[OxOd6bd[26]][i][OxOd6bd[20]];if(Ox13b&&element[OxOd6bd[19]][OxOd6bd[24]].indexOf(Ox13b)!=-1){sel_letter_unit[OxOd6bd[17]]=i;break ;} ;} ;} ;} ;sel_line[OxOd6bd[20]]=element[OxOd6bd[19]][OxOd6bd[27]];sel_line_unit[OxOd6bd[17]]=0;if(sel_line[OxOd6bd[17]]==-1){if(ParseFloatToString(element[OxOd6bd[19]].lineHeight)){tb_line[OxOd6bd[20]]=ParseFloatToString(element[OxOd6bd[19]].lineHeight);for(var i=0;i<sel_line_unit[OxOd6bd[26]][OxOd6bd[25]];i++){var Ox13b=sel_line_unit[OxOd6bd[26]][i][OxOd6bd[20]];if(Ox13b&&element[OxOd6bd[19]][OxOd6bd[27]].indexOf(Ox13b)!=-1){sel_line_unit[OxOd6bd[17]]=i;break ;} ;} ;} ;} ;sel_indent_unit[OxOd6bd[17]]=0;if(!isNaN(ParseFloatToString(element[OxOd6bd[19]].textIndent))){tb_indent[OxOd6bd[20]]=ParseFloatToString(element[OxOd6bd[19]].textIndent);for(var i=0;i<sel_indent_unit[OxOd6bd[26]][OxOd6bd[25]];i++){var Ox13b=sel_indent_unit[OxOd6bd[26]][i][OxOd6bd[20]];if(Ox13b&&element[OxOd6bd[19]][OxOd6bd[28]].indexOf(Ox13b)!=-1){sel_indent_unit[OxOd6bd[17]]=i;break ;} ;} ;} ;sel_direction[OxOd6bd[20]]=element[OxOd6bd[19]][OxOd6bd[29]];sel_writingmode[OxOd6bd[20]]=element[OxOd6bd[19]][OxOd6bd[30]];} ;SyncTo=function SyncTo_Text(element){element[OxOd6bd[19]][OxOd6bd[21]]=sel_align[OxOd6bd[20]];element[OxOd6bd[19]][OxOd6bd[22]]=sel_valign[OxOd6bd[20]];element[OxOd6bd[19]][OxOd6bd[23]]=sel_justify[OxOd6bd[20]];if(sel_letter[OxOd6bd[17]]>0){element[OxOd6bd[19]][OxOd6bd[24]]=sel_letter[OxOd6bd[20]];} else {if(ParseFloatToString(tb_letter.value)){element[OxOd6bd[19]][OxOd6bd[24]]=ParseFloatToString(tb_letter.value)+sel_letter_unit[OxOd6bd[20]];} else {element[OxOd6bd[19]][OxOd6bd[24]]=OxOd6bd[0];} ;} ;if(sel_line[OxOd6bd[17]]>0){element[OxOd6bd[19]][OxOd6bd[27]]=sel_line[OxOd6bd[20]];} else {if(ParseFloatToString(tb_line.value)){element[OxOd6bd[19]][OxOd6bd[27]]=ParseFloatToString(tb_line.value)+sel_line_unit[OxOd6bd[20]];} else {element[OxOd6bd[19]][OxOd6bd[27]]=OxOd6bd[0];} ;} ;if(ParseFloatToString(tb_indent.value)){element[OxOd6bd[19]][OxOd6bd[28]]=ParseFloatToString(tb_indent.value)+sel_indent_unit[OxOd6bd[20]];} else {element[OxOd6bd[19]][OxOd6bd[28]]=OxOd6bd[0];} ;element[OxOd6bd[19]][OxOd6bd[29]]=sel_direction[OxOd6bd[20]]||OxOd6bd[0];element[OxOd6bd[19]][OxOd6bd[30]]=sel_writingmode[OxOd6bd[20]]||OxOd6bd[0];} ;