<%@ Page Language="C#" MasterPageFile="~/MMasterPage.master" AutoEventWireup="true" CodeFile="AddNotice.aspx.cs" Inherits="manager_AddNotice" Title="发布通知" %>
<%@ Register TagPrefix="CE" Namespace="CuteEditor" Assembly="CuteEditor" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
    <style type="text/css">
        .style3
        {
            height: 26px;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <table style="width:100%; height: 90px;">
    <tr>
    <td>
        <asp:Label ID="lblTitle" runat="server" Font-Bold="True" Font-Names="&#40657;&#20307;" 
            Font-Size="Large" Text="&#26631;&#39064;"></asp:Label>
            </td>
            <td>
        <asp:TextBox ID="txtTitle" runat="server" Width="547px" BorderColor="#00001E" 
                    MaxLength="20" TabIndex="1" ToolTip="&#26368;&#22823;20&#20010;&#23383;&#31526;"></asp:TextBox>
        </td>
    </tr>
    <tr>
    <td class="style3">
        <asp:Label ID="lblTarget" runat="server" Font-Bold="True" Font-Names="&#40657;&#20307;" 
            Font-Size="Large" Text="&#21457;&#24067;&#23545;&#35937;"></asp:Label>
            </td>
            <td class="style3">
        <asp:DropDownList ID="ddlTarget" runat="server" TabIndex="2" >
            <asp:ListItem Value="0">&#23398;&#29983;</asp:ListItem>
            <asp:ListItem Value="1">&#23548;&#24072;</asp:ListItem>
            <asp:ListItem Value="2">&#23398;&#29983;&#21644;&#23548;&#24072;</asp:ListItem>
        </asp:DropDownList>
        </td>
    </tr>
    <tr>
    <td colspan="2">
        <asp:Label ID="lblNotice" runat="server" Font-Bold="True" Font-Names="&#40657;&#20307;" 
            Font-Size="Large" Text="&#20869;&#23481;"></asp:Label>
            </td>
    </tr>
    <tr>
    <td colspan="2">
    <CE:Editor id="editorNotice" runat="server" ThemeType="Office2007" Width="100%" 
            Height="200px" AutoConfigure="Simple" MaxTextLength="500" TabIndex="3"/>
         <center>   
        <asp:Button ID="cmdCommit" runat="server"  
            Font-Size="Large" Text="&#21457;&#24067;" 
                 ToolTip="&#21457;&#24067;&#36890;&#30693;" Font-Bold="True" 
                 onclick="cmdCommit_Click" /></center>
    </td></tr>
    </table>
</asp:Content>

