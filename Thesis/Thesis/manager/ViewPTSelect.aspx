<%@ Page Language="C#" MasterPageFile="~/MMasterPage.master" AutoEventWireup="true" CodeFile="ViewPTSelect.aspx.cs" Inherits="manager_ViewPTSelect" Title="查看论文选题情况" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
    <style type="text/css">
        .style3
        {
            width: 345px;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <p>
        <table class="style1">
            <tr>
                <td class="style3">
                    &#26597;&#30475;&#23398;&#29983;&#35770;&#25991;&#36873;&#39064;&#24773;&#20917;<br />
                </td>
            </tr>
            <tr>
                <td class="style3">
                    <asp:GridView ID="GridView1" runat="server" DataSourceID="SqlDataSource1" 
                        Width="663px">
                    </asp:GridView>
                    <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
                        ConnectionString="<%$ ConnectionStrings:ThesisConnectionString %>" 
                        
                        SelectCommand="SELECT student.name AS '&#23398;&#29983;', papertitle.ptname AS '&#35770;&#25991;&#39064;&#30446;' FROM papertitle INNER JOIN st_ptitle ON papertitle.ptid = st_ptitle.ptid INNER JOIN student ON st_ptitle.sid = student.sid">
                    </asp:SqlDataSource>
                </td>
            </tr>
            <tr>
                <td class="style3">
                    &nbsp;</td>
            </tr>
            <tr>
                <td class="style3">
                    &nbsp;</td>
            </tr>
        </table>
        <br />
    </p>
</asp:Content>

