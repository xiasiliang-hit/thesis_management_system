var OxOa98b=["nodeName","INPUT","TEXTAREA","BUTTON","IMG","SELECT","TABLE","position","style","absolute","relative","|H1|H2|H3|H4|H5|H6|P|PRE|LI|TD|DIV|BLOCKQUOTE|DT|DD|TABLE|HR|IMG|","|","body","document","allanchors","anchor_name","editor","window","name","value","[[ValidName]]","options","length","anchors","OPTION","text","#","images","className","cetempAnchor","anchorname"];function Element_IsBlockControl(element){var name=element[OxOa98b[0]];if(name==OxOa98b[1]){return true;} ;if(name==OxOa98b[2]){return true;} ;if(name==OxOa98b[3]){return true;} ;if(name==OxOa98b[4]){return true;} ;if(name==OxOa98b[5]){return true;} ;if(name==OxOa98b[6]){return true;} ;var Ox11f=element[OxOa98b[8]][OxOa98b[7]];if(Ox11f==OxOa98b[9]||Ox11f==OxOa98b[10]){return true;} ;return false;} ;function Element_CUtil_IsBlock(Ox366){var Ox367=OxOa98b[11];return (Ox366!=null)&&(Ox367.indexOf(OxOa98b[12]+Ox366[OxOa98b[0]]+OxOa98b[12])!=-1);} ;function Window_SelectElement(Ox1a1,element){if(Browser_UseIESelection()){if(Element_IsBlockControl(element)){var Ox2f=Ox1a1[OxOa98b[14]][OxOa98b[13]].createControlRange();Ox2f.add(element);Ox2f.select();} else {var Ox21f=Ox1a1[OxOa98b[14]][OxOa98b[13]].createTextRange();Ox21f.moveToElementText(element);Ox21f.select();} ;} else {var Ox21f=Ox1a1[OxOa98b[14]].createRange();try{Ox21f.selectNode(element);} catch(x){Ox21f.selectNodeContents(element);} ;var Ox12f=Ox1a1.getSelection();Ox12f.removeAllRanges();Ox12f.addRange(Ox21f);} ;} ;var allanchors=Window_GetElement(window,OxOa98b[15],true);var anchor_name=Window_GetElement(window,OxOa98b[16],true);var obj=Window_GetDialogArguments(window);var editor=obj[OxOa98b[17]];var editwin=obj[OxOa98b[18]];var editdoc=obj[OxOa98b[14]];var name=obj[OxOa98b[19]];function insert_link(){var Ox36c=anchor_name[OxOa98b[20]];var Ox36d=/[^a-z\d]/i;if(Ox36d.test(Ox36c)){alert(OxOa98b[21]);} else {Window_SetDialogReturnValue(window,Ox36c);Window_CloseDialog(window);} ;} ;function updateList(){while(allanchors[OxOa98b[22]][OxOa98b[23]]!=0){allanchors[OxOa98b[22]].remove(allanchors.options(0));} ;if(Browser_IsWinIE()){for(var i=0;i<editdoc[OxOa98b[24]][OxOa98b[23]];i++){var Ox36f=document.createElement(OxOa98b[25]);Ox36f[OxOa98b[26]]=OxOa98b[27]+editdoc[OxOa98b[24]][i][OxOa98b[19]];Ox36f[OxOa98b[20]]=editdoc[OxOa98b[24]][i][OxOa98b[19]];allanchors[OxOa98b[22]].add(Ox36f);} ;} else {var Ox370=editdoc[OxOa98b[28]];if(Ox370){for(var j=0;j<Ox370[OxOa98b[23]];j++){var img=Ox370[j];if(img[OxOa98b[29]]==OxOa98b[30]){var Ox36f=document.createElement(OxOa98b[25]);Ox36f[OxOa98b[26]]=OxOa98b[27]+img.getAttribute(OxOa98b[31]);Ox36f[OxOa98b[20]]=img.getAttribute(OxOa98b[31]);allanchors[OxOa98b[22]].add(Ox36f);} ;} ;} ;} ;} ;function selectAnchor(Ox372){editor.FocusDocument();for(var i=0;i<editdoc[OxOa98b[24]][OxOa98b[23]];i++){if(editdoc[OxOa98b[24]][i][OxOa98b[19]]==Ox372){anchor_name[OxOa98b[20]]=Ox372;Window_SelectElement(editwin,editdoc[OxOa98b[24]][i]);} ;} ;} ;if(name){anchor_name[OxOa98b[20]]=name;} ;updateList();