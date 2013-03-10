<%@ Page Language="C#" MasterPageFile="~/SMasterPage.master" AutoEventWireup="true" CodeFile="AddMessage.aspx.cs" Inherits="manager_AddMessage" Title="添加留言" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <div>
<center>
    <asp:Label ID="lblTitle" runat="server" Text="&#30041;&#35328;&#20869;&#23481;"></asp:Label>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <asp:Label ID="lblTarget" runat="server" Text="&#30041;&#35328;&#23545;&#35937;"></asp:Label>
    <asp:DropDownList ID="ddlTargetRange" runat="server" AutoPostBack="True" 
        onselectedindexchanged="ddlTargetRange_SelectedIndexChanged">
        <asp:ListItem Value="0">&#23398;&#29983;</asp:ListItem>
        <asp:ListItem Value="1">&#23548;&#24072;</asp:ListItem>
        <asp:ListItem Value="2">&#31649;&#29702;&#21592;</asp:ListItem>
    </asp:DropDownList>
    <asp:DropDownList ID="ddlTarget" runat="server">
    </asp:DropDownList></center>
    <br />
        &nbsp;
        <asp:TextBox ID="txtTitle" runat="server" MaxLength="50" Rows="2" 
    Width="334px" Height="108px"></asp:TextBox>
    <br />
    <br />
    <br />
    <br />
    <br />
    <center>
    <asp:Button ID="cmdCommit" runat="server" Text="&#30041;&#35328;" onclick="cmdCommit_Click" />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <asp:Button ID="cmdReturn" runat="server" Text="&#36820;&#22238;" 
            onclick="cmdReturn_Click" />
    <div>
    </center>
</asp:Content>

