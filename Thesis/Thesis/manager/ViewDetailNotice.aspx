<%@ Page Language="C#" MasterPageFile="~/MMasterPage.master" AutoEventWireup="true" CodeFile="ViewDetailNotice.aspx.cs" Inherits="manager_ViewDetailNotice" Title="无标题页" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <table width="100%" border=1>
        <tr>
            <th height="15px">
               <h1><b><%# title %></b></h1>
            </th>
        </tr>
        <tr>
            <th height="5px">
               <i>&#21457;&#24067;&#26102;&#38388;&nbsp&nbsp<%# datetime %></i>
            </th>
        </tr>
        <tr>
            <td height="200px">
               <%# content %>
            </td>
        </tr>
        <tr>
            <th height="20px">
                <a href=EditNotice.aspx?id=<%# id %>>编辑</a>&nbsp&nbsp<a href=DeleteNotice.aspx?id=<%# id %>>删除</a>
            </th>
        </tr>
    </table>
</asp:Content>

