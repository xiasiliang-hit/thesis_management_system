<%@ Page Language="C#" MasterPageFile="~/TMasterPage.master" AutoEventWireup="true" CodeFile="ModidyTitle.aspx.cs" Inherits="tutor_ModidyTitle" Title="修改拟题" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">

</asp:Content>

<asp:Content ID="Content2" runat="server" 
    contentplaceholderid="ContentPlaceHolder1">
    <table class="style1">
        <tr>
            <td colspan="2">
                &#35831;&#36873;&#25321;&#35201;&#20462;&#25913;&#25110;&#21024;&#38500;&#30340;&#35770;&#25991;&#25311;&#39064;&#65306;</td>
        </tr>
        <tr>
            <td colspan="2">
                <asp:RadioButtonList ID="RadioButtonList1" runat="server" 
                    DataSourceID="SqlDataSource1" DataTextField="&#35770;&#25991;&#39064;&#30446;" DataValueField="&#35770;&#25991;&#39064;&#30446;">
                </asp:RadioButtonList>
                <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
                    ConnectionString="<%$ ConnectionStrings:ThesisConnectionString %>" 
                    SelectCommand="SELECT papertitle.ptname AS '&#35770;&#25991;&#39064;&#30446;' FROM papertitle INNER JOIN tu_ptitle ON papertitle.ptid = tu_ptitle.ptid WHERE (tu_ptitle.tid = @tid)">
                    <SelectParameters>
                        <asp:QueryStringParameter Name="tid" QueryStringField="tid" />
                    </SelectParameters>
                </asp:SqlDataSource>
            </td>
        </tr>
        <tr>
            <td>
                <asp:Button ID="Button1" runat="server" onclick="Button1_Click" Text="&#20462;&#25913;" />
                &nbsp;&nbsp;&nbsp;
                <asp:Button ID="Button2" runat="server" onclick="Button2_Click" Text="&#21024;&#38500;" />
            </td>
            <td>
                &nbsp;</td>
        </tr>
        <tr>
            <td>
                <asp:Label ID="Label1" runat="server" Text="&#35831;&#36755;&#20837;&#20462;&#25913;&#21518;&#30340;&#26631;&#39064;&#65306;" Visible="False"></asp:Label>
                <asp:TextBox ID="TextBox1" runat="server" Visible="False" Width="287px"></asp:TextBox>
            &nbsp;<asp:Button ID="Button3" runat="server" onclick="Button3_Click" Text="&#25552;&#20132;" 
                    Visible="False" />
            </td>
            <td>
                &nbsp;</td>
        </tr>
    </table>
</asp:Content>


