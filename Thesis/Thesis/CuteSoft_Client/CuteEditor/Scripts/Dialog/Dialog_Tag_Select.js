var OxO6243=["inp_name","inp_access","inp_id","inp_index","inp_size","inp_Multiple","inp_Disabled","inp_item_text","inp_item_value","btnInsertItem","btnUpdateItem","btnDeleteItem","btnMoveUpItem","btnMoveDownItem","list_options","list_options2","inp_item_forecolor","inp_item_forecolor_Preview","inp_item_backcolor_Preview","text","value","color","style","backgroundColor","selectedIndex","options","Please select an item first","length","ondblclick","onclick","OPTION","document","id","cssText","Name","name","size","checked","disabled","multiple","tabIndex","","accessKey"];var inp_name=Window_GetElement(window,OxO6243[0],true);var inp_access=Window_GetElement(window,OxO6243[1],true);var inp_id=Window_GetElement(window,OxO6243[2],true);var inp_index=Window_GetElement(window,OxO6243[3],true);var inp_size=Window_GetElement(window,OxO6243[4],true);var inp_Multiple=Window_GetElement(window,OxO6243[5],true);var inp_Disabled=Window_GetElement(window,OxO6243[6],true);var inp_item_text=Window_GetElement(window,OxO6243[7],true);var inp_item_value=Window_GetElement(window,OxO6243[8],true);var btnInsertItem=Window_GetElement(window,OxO6243[9],true);var btnUpdateItem=Window_GetElement(window,OxO6243[10],true);var btnDeleteItem=Window_GetElement(window,OxO6243[11],true);var btnMoveUpItem=Window_GetElement(window,OxO6243[12],true);var btnMoveDownItem=Window_GetElement(window,OxO6243[13],true);var list_options=Window_GetElement(window,OxO6243[14],true);var list_options2=Window_GetElement(window,OxO6243[15],true);var inp_item_forecolor=Window_GetElement(window,OxO6243[16],true);var inp_item_forecolor=Window_GetElement(window,OxO6243[16],true);var inp_item_forecolor_Preview=Window_GetElement(window,OxO6243[17],true);var inp_item_backcolor_Preview=Window_GetElement(window,OxO6243[18],true);function SetOption(Ox19f){Ox19f[OxO6243[19]]=inp_item_text[OxO6243[20]];Ox19f[OxO6243[20]]=inp_item_value[OxO6243[20]];Ox19f[OxO6243[22]][OxO6243[21]]=inp_item_forecolor[OxO6243[20]];Ox19f[OxO6243[22]][OxO6243[23]]=inp_item_backcolor[OxO6243[20]];} ;function SetOption2(Ox19f){Ox19f[OxO6243[19]]=inp_item_value[OxO6243[20]];Ox19f[OxO6243[20]]=inp_item_text[OxO6243[20]];Ox19f[OxO6243[22]][OxO6243[21]]=inp_item_forecolor[OxO6243[20]];Ox19f[OxO6243[22]][OxO6243[23]]=inp_item_backcolor[OxO6243[20]];} ;function Select(Ox19f){var Ox59a=Ox19f[OxO6243[24]];list_options[OxO6243[24]]=Ox59a;list_options2[OxO6243[24]]=Ox59a;inp_item_text[OxO6243[20]]=list_options2[OxO6243[20]];inp_item_value[OxO6243[20]]=list_options[OxO6243[20]];} ;function Insert(){var Ox19f= new Option();SetOption(Ox19f);list_options[OxO6243[25]].add(Ox19f);var Ox59c= new Option();SetOption2(Ox59c);list_options2[OxO6243[25]].add(Ox59c);FireUIChanged();} ;function Update(){if(list_options[OxO6243[24]]==-1){alert(OxO6243[26]);return ;} ;var Ox19f=list_options.options(list_options.selectedIndex);SetOption(Ox19f);var Ox59c=list_options2.options(list_options2.selectedIndex);SetOption2(Ox59c);FireUIChanged();} ;function Move(Ox13b){var Ox59a=list_options[OxO6243[24]];if(Ox59a<0){return ;} ;var Ox59e=Ox59a-Ox13b;if(Ox59e<0){Ox59e=0;} ;if(Ox59e>(list_options[OxO6243[25]][OxO6243[27]]-1)){Ox59e=list_options[OxO6243[25]][OxO6243[27]]-1;} ;if(Ox59a==Ox59e){return ;} ;var Ox19f=list_options.options(list_options.selectedIndex);var Ox12=list_options2[OxO6243[20]];var Ox8=list_options[OxO6243[20]];Delete();inp_item_text[OxO6243[20]]=Ox12;inp_item_value[OxO6243[20]]=Ox8;var Ox19f= new Option();SetOption(Ox19f);list_options[OxO6243[25]].add(Ox19f,Ox59e);var Ox59c= new Option();SetOption2(Ox59c);list_options2[OxO6243[25]].add(Ox59c,Ox59e);list_options[OxO6243[24]]=Ox59e;list_options2[OxO6243[24]]=Ox59e;FireUIChanged();} ;function Delete(){if(list_options[OxO6243[24]]==-1||list_options[OxO6243[24]]==-1){alert(OxO6243[26]);return ;} ;var Ox59f=list_options[OxO6243[24]];var Ox19f=list_options.options(list_options.selectedIndex);Ox19f.removeNode(true);Ox19f=list_options2.options(list_options2.selectedIndex);Ox19f.removeNode(true);if(list_options[OxO6243[25]][OxO6243[27]]>Ox59f){list_options[OxO6243[24]]=Ox59f;} else {if(list_options[OxO6243[25]][OxO6243[27]]){list_options[OxO6243[24]]=list_options[OxO6243[25]][OxO6243[27]]-1;} ;} ;list_options.ondblclick();if(list_options2[OxO6243[25]][OxO6243[27]]>Ox59f){list_options2[OxO6243[24]]=Ox59f;} else {if(list_options2[OxO6243[25]][OxO6243[27]]){list_options2[OxO6243[24]]=list_options2[OxO6243[25]][OxO6243[27]]-1;} ;} ;FireUIChanged();} ;list_options[OxO6243[28]]=function list_options_ondblclick(){if(list_options[OxO6243[24]]==-1){return ;} ;var Ox19f=list_options.options(list_options.selectedIndex);inp_item_text[OxO6243[20]]=Ox19f[OxO6243[19]];inp_item_value[OxO6243[20]]=Ox19f[OxO6243[20]];inp_item_forecolor[OxO6243[20]]=inp_item_forecolor[OxO6243[22]][OxO6243[23]]=inp_item_forecolor_Preview[OxO6243[22]][OxO6243[23]]=Ox19f[OxO6243[22]][OxO6243[21]];inp_item_backcolor[OxO6243[20]]=inp_item_backcolor[OxO6243[22]][OxO6243[23]]=inp_item_backcolor_Preview[OxO6243[22]][OxO6243[23]]=Ox19f[OxO6243[22]][OxO6243[23]];} ;inp_item_forecolor[OxO6243[29]]=inp_item_forecolor_Preview[OxO6243[29]]=function inp_item_forecolor_onclick(){SelectColor(inp_item_forecolor,inp_item_forecolor_Preview);} ;inp_item_backcolor[OxO6243[29]]=inp_item_backcolor_Preview[OxO6243[29]]=function inp_item_backcolor_onclick(){SelectColor(inp_item_backcolor,inp_item_backcolor_Preview);} ;function CopySelect(Ox5a4,Ox5a5){Ox5a5[OxO6243[25]][OxO6243[27]]=0;for(var i=0;i<Ox5a4[OxO6243[25]][OxO6243[27]];i++){var Ox5a6=Ox5a4[OxO6243[25]][i];var Ox59c;if(Browser_IsWinIE()){Ox59c=Ox5a5[OxO6243[31]].createElement(OxO6243[30]);} else {Ox59c=document.createElement(OxO6243[30]);} ;if(Ox5a5[OxO6243[32]]!=OxO6243[15]){Ox59c[OxO6243[20]]=Ox5a6[OxO6243[20]];Ox59c[OxO6243[19]]=Ox5a6[OxO6243[19]];} else {Ox59c[OxO6243[20]]=Ox5a6[OxO6243[19]];Ox59c[OxO6243[19]]=Ox5a6[OxO6243[20]];} ;Ox59c[OxO6243[22]][OxO6243[33]]=Ox5a6[OxO6243[22]][OxO6243[33]];Ox5a5[OxO6243[25]].add(Ox59c);} ;Ox5a5[OxO6243[24]]=Ox5a4[OxO6243[24]];} ;UpdateState=function UpdateState_Select(){} ;SyncToView=function SyncToView_Select(){if(element[OxO6243[34]]){inp_name[OxO6243[20]]=element[OxO6243[34]];} ;if(element[OxO6243[35]]){inp_name[OxO6243[20]]=element[OxO6243[35]];} ;inp_id[OxO6243[20]]=element[OxO6243[32]];inp_size[OxO6243[20]]=element[OxO6243[36]];CopySelect(element,list_options);CopySelect(element,list_options2);inp_Disabled[OxO6243[37]]=element[OxO6243[38]];inp_Multiple[OxO6243[37]]=element[OxO6243[39]];if(element[OxO6243[40]]==0){inp_index[OxO6243[20]]=OxO6243[41];} else {inp_index[OxO6243[20]]=element[OxO6243[40]];} ;if(element[OxO6243[42]]){inp_access[OxO6243[20]]=element[OxO6243[42]];} ;} ;SyncTo=function SyncTo_Select(element){element[OxO6243[35]]=inp_name[OxO6243[20]];if(element[OxO6243[34]]){element[OxO6243[34]]=inp_name[OxO6243[20]];} else {if(element[OxO6243[35]]){element.removeAttribute(OxO6243[35],0);element[OxO6243[34]]=inp_name[OxO6243[20]];} else {element[OxO6243[34]]=inp_name[OxO6243[20]];} ;} ;element[OxO6243[32]]=inp_id[OxO6243[20]];element[OxO6243[36]]=inp_size[OxO6243[20]];element[OxO6243[38]]=inp_Disabled[OxO6243[37]];element[OxO6243[39]]=inp_Multiple[OxO6243[37]];element[OxO6243[42]]=inp_access[OxO6243[20]];element[OxO6243[40]]=inp_index[OxO6243[20]];if(element[OxO6243[40]]==OxO6243[41]){element.removeAttribute(OxO6243[40]);} ;if(element[OxO6243[42]]==OxO6243[41]){element.removeAttribute(OxO6243[42]);} ;CopySelect(list_options,element);} ;