<%@ Page Language="C#" Inherits="CuteEditor.EditorUtilityPage" %>
<script runat="server">
string GetDialogQueryString;
override protected void OnInit(EventArgs args)
{
	if(Context.Request.QueryString["Dialog"]=="Standard")
	{	
	if(Context.Request.QueryString["IsFrame"]==null)
	{
		string FrameSrc="colorpicker_basic.aspx?IsFrame=1&"+Request.ServerVariables["QUERY_STRING"];
		CuteEditor.CEU.WriteDialogOuterFrame(Context,"[[MoreColors]]",FrameSrc);
		Context.Response.End();
	}
	}
	string s="";
	if(Context.Request.QueryString["Dialog"]=="Standard")	
		s="&Dialog=Standard";
	
	GetDialogQueryString="Theme="+Context.Request.QueryString["Theme"]+s;	
	base.OnInit(args);
}
</script>
<html xmlns="http://www.w3.org/1999/xhtml">
	<head runat="server">
		<meta http-equiv="Page-Enter" content="blendTrans(Duration=0.1)" />
		<meta http-equiv="Page-Exit" content="blendTrans(Duration=0.1)" />
		<script type="text/javascript" src="Load.ashx?type=dialogscript&verfix=1002&file=DialogHead.js"></script>
		<script type="text/javascript" src="Load.ashx?type=dialogscript&verfix=1002&file=Dialog_ColorPicker.js"></script>
		<link href='Load.ashx?type=themecss&file=dialog.css&theme=[[_Theme_]]' type="text/css"
			rel="stylesheet" />
		<style type="text/css">
			.colorcell
			{
				width:16px;
				height:17px;
				cursor:hand;
			}
			.colordiv,.customdiv
			{
				border:solid 1px #808080;
				width:16px;
				height:17px;
				font-size:1px;
			}
		</style>
		<title>[[NamedColors]]</title>
		<script>
								
		var OxO469f=["Green","#008000","Lime","#00FF00","Teal","#008080","Aqua","#00FFFF","Navy","#000080","Blue","#0000FF","Purple","#800080","Fuchsia","#FF00FF","Maroon","#800000","Red","#FF0000","Olive","#808000","Yellow","#FFFF00","White","#FFFFFF","Silver","#C0C0C0","Gray","#808080","Black","#000000","DarkOliveGreen","#556B2F","DarkGreen","#006400","DarkSlateGray","#2F4F4F","SlateGray","#708090","DarkBlue","#00008B","MidnightBlue","#191970","Indigo","#4B0082","DarkMagenta","#8B008B","Brown","#A52A2A","DarkRed","#8B0000","Sienna","#A0522D","SaddleBrown","#8B4513","DarkGoldenrod","#B8860B","Beige","#F5F5DC","HoneyDew","#F0FFF0","DimGray","#696969","OliveDrab","#6B8E23","ForestGreen","#228B22","DarkCyan","#008B8B","LightSlateGray","#778899","MediumBlue","#0000CD","DarkSlateBlue","#483D8B","DarkViolet","#9400D3","MediumVioletRed","#C71585","IndianRed","#CD5C5C","Firebrick","#B22222","Chocolate","#D2691E","Peru","#CD853F","Goldenrod","#DAA520","LightGoldenrodYellow","#FAFAD2","MintCream","#F5FFFA","DarkGray","#A9A9A9","YellowGreen","#9ACD32","SeaGreen","#2E8B57","CadetBlue","#5F9EA0","SteelBlue","#4682B4","RoyalBlue","#4169E1","BlueViolet","#8A2BE2","DarkOrchid","#9932CC","DeepPink","#FF1493","RosyBrown","#BC8F8F","Crimson","#DC143C","DarkOrange","#FF8C00","BurlyWood","#DEB887","DarkKhaki","#BDB76B","LightYellow","#FFFFE0","Azure","#F0FFFF","LightGray","#D3D3D3","LawnGreen","#7CFC00","MediumSeaGreen","#3CB371","LightSeaGreen","#20B2AA","DeepSkyBlue","#00BFFF","DodgerBlue","#1E90FF","SlateBlue","#6A5ACD","MediumOrchid","#BA55D3","PaleVioletRed","#DB7093","Salmon","#FA8072","OrangeRed","#FF4500","SandyBrown","#F4A460","Tan","#D2B48C","Gold","#FFD700","Ivory","#FFFFF0","GhostWhite","#F8F8FF","Gainsboro","#DCDCDC","Chartreuse","#7FFF00","LimeGreen","#32CD32","MediumAquamarine","#66CDAA","DarkTurquoise","#00CED1","CornflowerBlue","#6495ED","MediumSlateBlue","#7B68EE","Orchid","#DA70D6","HotPink","#FF69B4","LightCoral","#F08080","Tomato","#FF6347","Orange","#FFA500","Bisque","#FFE4C4","Khaki","#F0E68C","Cornsilk","#FFF8DC","Linen","#FAF0E6","WhiteSmoke","#F5F5F5","GreenYellow","#ADFF2F","DarkSeaGreen","#8FBC8B","Turquoise","#40E0D0","MediumTurquoise","#48D1CC","SkyBlue","#87CEEB","MediumPurple","#9370DB","Violet","#EE82EE","LightPink","#FFB6C1","DarkSalmon","#E9967A","Coral","#FF7F50","NavajoWhite","#FFDEAD","BlanchedAlmond","#FFEBCD","PaleGoldenrod","#EEE8AA","Oldlace","#FDF5E6","Seashell","#FFF5EE","PaleGreen","#98FB98","SpringGreen","#00FF7F","Aquamarine","#7FFFD4","PowderBlue","#B0E0E6","LightSkyBlue","#87CEFA","LightSteelBlue","#B0C4DE","Plum","#DDA0DD","Pink","#FFC0CB","LightSalmon","#FFA07A","Wheat","#F5DEB3","Moccasin","#FFE4B5","AntiqueWhite","#FAEBD7","LemonChiffon","#FFFACD","FloralWhite","#FFFAF0","Snow","#FFFAFA","AliceBlue","#F0F8FF","LightGreen","#90EE90","MediumSpringGreen","#00FA9A","PaleTurquoise","#AFEEEE","LightCyan","#E0FFFF","LightBlue","#ADD8E6","Lavender","#E6E6FA","Thistle","#D8BFD8","MistyRose","#FFE4E1","Peachpuff","#FFDAB9","PapayaWhip","#FFEFD5"];var colorlist=[{n:OxO469f[0],h:OxO469f[1]},{n:OxO469f[2],h:OxO469f[3]},{n:OxO469f[4],h:OxO469f[5]},{n:OxO469f[6],h:OxO469f[7]},{n:OxO469f[8],h:OxO469f[9]},{n:OxO469f[10],h:OxO469f[11]},{n:OxO469f[12],h:OxO469f[13]},{n:OxO469f[14],h:OxO469f[15]},{n:OxO469f[16],h:OxO469f[17]},{n:OxO469f[18],h:OxO469f[19]},{n:OxO469f[20],h:OxO469f[21]},{n:OxO469f[22],h:OxO469f[23]},{n:OxO469f[24],h:OxO469f[25]},{n:OxO469f[26],h:OxO469f[27]},{n:OxO469f[28],h:OxO469f[29]},{n:OxO469f[30],h:OxO469f[31]}];var colormore=[{n:OxO469f[32],h:OxO469f[33]},{n:OxO469f[34],h:OxO469f[35]},{n:OxO469f[36],h:OxO469f[37]},{n:OxO469f[38],h:OxO469f[39]},{n:OxO469f[40],h:OxO469f[41]},{n:OxO469f[42],h:OxO469f[43]},{n:OxO469f[44],h:OxO469f[45]},{n:OxO469f[46],h:OxO469f[47]},{n:OxO469f[48],h:OxO469f[49]},{n:OxO469f[50],h:OxO469f[51]},{n:OxO469f[52],h:OxO469f[53]},{n:OxO469f[54],h:OxO469f[55]},{n:OxO469f[56],h:OxO469f[57]},{n:OxO469f[58],h:OxO469f[59]},{n:OxO469f[60],h:OxO469f[61]},{n:OxO469f[62],h:OxO469f[63]},{n:OxO469f[64],h:OxO469f[65]},{n:OxO469f[66],h:OxO469f[67]},{n:OxO469f[68],h:OxO469f[69]},{n:OxO469f[70],h:OxO469f[71]},{n:OxO469f[72],h:OxO469f[73]},{n:OxO469f[74],h:OxO469f[75]},{n:OxO469f[76],h:OxO469f[77]},{n:OxO469f[78],h:OxO469f[79]},{n:OxO469f[80],h:OxO469f[81]},{n:OxO469f[82],h:OxO469f[83]},{n:OxO469f[84],h:OxO469f[85]},{n:OxO469f[86],h:OxO469f[87]},{n:OxO469f[88],h:OxO469f[89]},{n:OxO469f[90],h:OxO469f[91]},{n:OxO469f[92],h:OxO469f[93]},{n:OxO469f[94],h:OxO469f[95]},{n:OxO469f[96],h:OxO469f[97]},{n:OxO469f[98],h:OxO469f[99]},{n:OxO469f[100],h:OxO469f[101]},{n:OxO469f[102],h:OxO469f[103]},{n:OxO469f[104],h:OxO469f[105]},{n:OxO469f[106],h:OxO469f[107]},{n:OxO469f[108],h:OxO469f[109]},{n:OxO469f[110],h:OxO469f[111]},{n:OxO469f[112],h:OxO469f[113]},{n:OxO469f[114],h:OxO469f[115]},{n:OxO469f[116],h:OxO469f[117]},{n:OxO469f[118],h:OxO469f[119]},{n:OxO469f[120],h:OxO469f[121]},{n:OxO469f[122],h:OxO469f[123]},{n:OxO469f[124],h:OxO469f[125]},{n:OxO469f[126],h:OxO469f[127]},{n:OxO469f[128],h:OxO469f[129]},{n:OxO469f[130],h:OxO469f[131]},{n:OxO469f[132],h:OxO469f[133]},{n:OxO469f[134],h:OxO469f[135]},{n:OxO469f[136],h:OxO469f[137]},{n:OxO469f[138],h:OxO469f[139]},{n:OxO469f[140],h:OxO469f[141]},{n:OxO469f[142],h:OxO469f[143]},{n:OxO469f[144],h:OxO469f[145]},{n:OxO469f[146],h:OxO469f[147]},{n:OxO469f[148],h:OxO469f[149]},{n:OxO469f[150],h:OxO469f[151]},{n:OxO469f[152],h:OxO469f[153]},{n:OxO469f[154],h:OxO469f[155]},{n:OxO469f[156],h:OxO469f[157]},{n:OxO469f[158],h:OxO469f[159]},{n:OxO469f[160],h:OxO469f[161]},{n:OxO469f[162],h:OxO469f[163]},{n:OxO469f[164],h:OxO469f[165]},{n:OxO469f[166],h:OxO469f[167]},{n:OxO469f[168],h:OxO469f[169]},{n:OxO469f[170],h:OxO469f[171]},{n:OxO469f[172],h:OxO469f[173]},{n:OxO469f[174],h:OxO469f[175]},{n:OxO469f[176],h:OxO469f[177]},{n:OxO469f[178],h:OxO469f[179]},{n:OxO469f[180],h:OxO469f[181]},{n:OxO469f[182],h:OxO469f[183]},{n:OxO469f[184],h:OxO469f[185]},{n:OxO469f[186],h:OxO469f[187]},{n:OxO469f[188],h:OxO469f[189]},{n:OxO469f[190],h:OxO469f[191]},{n:OxO469f[192],h:OxO469f[193]},{n:OxO469f[194],h:OxO469f[195]},{n:OxO469f[196],h:OxO469f[197]},{n:OxO469f[198],h:OxO469f[199]},{n:OxO469f[200],h:OxO469f[201]},{n:OxO469f[202],h:OxO469f[203]},{n:OxO469f[204],h:OxO469f[205]},{n:OxO469f[206],h:OxO469f[207]},{n:OxO469f[208],h:OxO469f[209]},{n:OxO469f[210],h:OxO469f[211]},{n:OxO469f[212],h:OxO469f[213]},{n:OxO469f[214],h:OxO469f[215]},{n:OxO469f[216],h:OxO469f[217]},{n:OxO469f[218],h:OxO469f[219]},{n:OxO469f[220],h:OxO469f[221]},{n:OxO469f[156],h:OxO469f[157]},{n:OxO469f[222],h:OxO469f[223]},{n:OxO469f[224],h:OxO469f[225]},{n:OxO469f[226],h:OxO469f[227]},{n:OxO469f[228],h:OxO469f[229]},{n:OxO469f[230],h:OxO469f[231]},{n:OxO469f[232],h:OxO469f[233]},{n:OxO469f[234],h:OxO469f[235]},{n:OxO469f[236],h:OxO469f[237]},{n:OxO469f[238],h:OxO469f[239]},{n:OxO469f[240],h:OxO469f[241]},{n:OxO469f[242],h:OxO469f[243]},{n:OxO469f[244],h:OxO469f[245]},{n:OxO469f[246],h:OxO469f[247]},{n:OxO469f[248],h:OxO469f[249]},{n:OxO469f[250],h:OxO469f[251]},{n:OxO469f[252],h:OxO469f[253]},{n:OxO469f[254],h:OxO469f[255]},{n:OxO469f[256],h:OxO469f[257]},{n:OxO469f[258],h:OxO469f[259]},{n:OxO469f[260],h:OxO469f[261]},{n:OxO469f[262],h:OxO469f[263]},{n:OxO469f[264],h:OxO469f[265]},{n:OxO469f[266],h:OxO469f[267]},{n:OxO469f[268],h:OxO469f[269]},{n:OxO469f[270],h:OxO469f[271]},{n:OxO469f[272],h:OxO469f[273]}];
		
		</script>
	</head>
	<body>
		<div id="container">
			<div class="tab-pane-control tab-pane" id="tabPane1">
				<div class="tab-row">
					<h2 class="tab">
						<a tabindex="-1" href='colorpicker.aspx?<%=GetDialogQueryString%>'>
							<span style="white-space:nowrap;">
								[[WebPalette]]
							</span>
						</a>
					</h2>
					<h2 class="tab selected">
							<a tabindex="-1" href='colorpicker_basic.aspx?<%=GetDialogQueryString%>'>
								<span style="white-space:nowrap;">
									[[NamedColors]]
								</span>
							</a>
					</h2>
					<h2 class="tab">
							<a tabindex="-1" href='colorpicker_more.aspx?<%=GetDialogQueryString%>'>
								<span style="white-space:nowrap;">
									[[CustomColor]]
								</span>
							</a>
					</h2>
				</div>
				<div class="tab-page">			
					<table class="colortable" align="center">
						<tr>
							<td colspan="16" height="16"><p align="left">Basic:
								</p>
							</td>
						</tr>
						<tr>
							<script>
								var OxOed83=["length","\x3Ctd class=\x27colorcell\x27\x3E\x3Cdiv class=\x27colordiv\x27 style=\x27background-color:","\x27 title=\x27"," ","\x27 cname=\x27","\x27 cvalue=\x27","\x27\x3E\x3C/div\x3E\x3C/td\x3E",""];var arr=[];for(var i=0;i<colorlist[OxOed83[0]];i++){arr.push(OxOed83[1]);arr.push(colorlist[i].n);arr.push(OxOed83[2]);arr.push(colorlist[i].n);arr.push(OxOed83[3]);arr.push(colorlist[i].h);arr.push(OxOed83[4]);arr.push(colorlist[i].n);arr.push(OxOed83[5]);arr.push(colorlist[i].h);arr.push(OxOed83[6]);} ;document.write(arr.join(OxOed83[7]));
							</script>
						</tr>
						<tr>
							<td colspan="16" height="12"><p align="left"></p>
							</td>
						</tr>
						<tr>
							<td colspan="16"><p align="left">Additional:
								</p>
							</td>
						</tr>
						<script>
							var OxO3576=["length","\x3Ctr\x3E","\x3Ctd class=\x27colorcell\x27\x3E\x3Cdiv class=\x27colordiv\x27 style=\x27background-color:","\x27 title=\x27"," ","\x27 cname=\x27","\x27 cvalue=\x27","\x27\x3E\x3C/div\x3E\x3C/td\x3E","\x3C/tr\x3E",""];var arr=[];for(var i=0;i<colormore[OxO3576[0]];i++){if(i%16==0){arr.push(OxO3576[1]);} ;arr.push(OxO3576[2]);arr.push(colormore[i].n);arr.push(OxO3576[3]);arr.push(colormore[i].n);arr.push(OxO3576[4]);arr.push(colormore[i].h);arr.push(OxO3576[5]);arr.push(colormore[i].n);arr.push(OxO3576[6]);arr.push(colormore[i].h);arr.push(OxO3576[7]);if(i%16==15){arr.push(OxO3576[8]);} ;} ;if(colormore%16>0){arr.push(OxO3576[8]);} ;document.write(arr.join(OxO3576[9]));
						</script>
						<tr>
							<td colspan="16" height="8">
							</td>
						</tr>
						<tr>
							<td colspan="16" height="12">
								<input checked id="CheckboxColorNames" style="width: 16px; height: 20px" type="checkbox">
								<span style="width: 118px;">Use color names</span>
							</td>
						</tr>
						<tr>
							<td colspan="16" height="12">
							</td>
						</tr>
						<tr>
							<td colspan="16" valign="middle" height="24">
							<span style="height:24px;width:50px;vertical-align:middle;">Color : </span>&nbsp;
							<input type="text" id="divpreview" size="7" maxlength="7" style="width:180px;height:24px;border:#a0a0a0 1px solid; Padding:4;"/>
					
							</td>
						</tr>
				</table>
			</div>
		</div>
		<div id="container-bottom">
			<input type="button" id="buttonok" value="[[OK]]" class="formbutton" style="width:70px"	onclick="do_insert();" /> 
			&nbsp;&nbsp;&nbsp;&nbsp; 
			<input type="button" id="buttoncancel" value="[[Cancel]]" class="formbutton" style="width:70px"	onclick="do_Close();" />	
		</div>
	</div>
	</body>
</html>

