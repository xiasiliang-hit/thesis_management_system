﻿<%@ Page Language="C#" MasterPageFile="~/MMasterPage.master" AutoEventWireup="true" CodeFile="ManageNotice.aspx.cs" Inherits="manager_ManageNotice" Title="管理通知" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <table border="1" width="100%"> 
        <asp:Repeater ID="rpNotice" runat="server">
            <HeaderTemplate>
                    <tr>
                        <th width="65%">&#26631;&#39064;</th>
                        <th width="20%">&#21457;&#34920;&#26102;&#38388;</th>
                        <th>&#25805;&#20316;</th>
                    </tr>
            </HeaderTemplate>
        
            <ItemTemplate>
                <tr>
                    <td><a href=ViewDetailNotice.aspx?id=<%#Eval("nid") %>><%#DataBinder.Eval(Container.DataItem, "ntitle")%></a></td>
                    <td><%#Eval("ndatetime")%></td>
                    <th><a href=EditNotice.aspx?id=<%#Eval("nid") %>>编辑</a>&nbsp&nbsp<a href=DeleteNotice.aspx?id=<%#Eval("nid") %>>删除</a></td>
                </tr>
            </ItemTemplate>    
        </asp:Repeater>
        <tr>
            <th colspan="3">
                <asp:LinkButton ID="lbFront" runat="server" onclick="lbFront_Click">&#39318;&#39029;</asp:LinkButton>
                <asp:LinkButton ID="lbPrev" runat="server" onclick="lbPrev_Click">&#19978;&#39029;</asp:LinkButton>
                <asp:LinkButton ID="lbNext" runat="server" onclick="lbNext_Click">&#19979;&#19968;&#39029;</asp:LinkButton>
                <asp:LinkButton ID="lbEnd" runat="server" onclick="lbEnd_Click">&#23614;&#39029;</asp:LinkButton>
                &#31532;<asp:Label ID="lblCurrentPage" runat="server" Text="Label"></asp:Label>
                &#39029;/&#20849;<asp:Label ID="lblAllPage" runat="server" Text="Label"></asp:Label>
                &#39029;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#19968;&#20849;<asp:Label 
                    ID="lblNumber" runat="server" Text="Label"></asp:Label>
                 &#26465;&#35760;&#24405;
            </th>
        </tr>
    </table>
</asp:Content>

