<%@ Page Language="C#" MasterPageFile="~/SMasterPage.master" AutoEventWireup="true" CodeFile="ViewPaperTitle.aspx.cs" Inherits="student_viewPaperTitle" Title="论文选题" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
    <style type="text/css">
        .style3
        {
            width: 100%;
        }
        .style4
        {
            width: 310px;
        }
    </style>
</asp:Content>

<asp:Content ID="Content2" runat="server" 
    contentplaceholderid="ContentPlaceHolder1">

                    <table class="style3">
                        <tr>
                            <td class="style4">
                                &#35770;&#25991;&#36873;&#39064;</td>
                            <td>
                                &nbsp;</td>
                        </tr>
                        <tr>
                            <td class="style4">
                                &#20197;&#19979;&#26159;&#24744;&#21487;&#36873;&#30340;&#35770;&#25991;&#39064;&#30446;&#65292;&#35831;&#36873;&#25321;&#19968;&#20010;&#65306;</td>
                            <td>
                                &nbsp;</td>
                        </tr>
                        <tr>
                            <td class="style4">
                                <asp:RadioButtonList ID="RadioButtonList1" runat="server" 
                                    DataSourceID="SqlDataSource1" DataTextField="ptname" DataValueField="ptname">
                                </asp:RadioButtonList>
                                <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
                                    ConnectionString="<%$ ConnectionStrings:ThesisConnectionString %>" 
                                    SelectCommand="SELECT papertitle.ptname FROM papertitle INNER JOIN tu_ptitle ON papertitle.ptid = tu_ptitle.ptid WHERE (tu_ptitle.tid = '90001')">
                                </asp:SqlDataSource>
                            </td>
                            <td>
                                &nbsp;</td>
                        </tr>
                        <tr>
                            <td class="style4">
                                <asp:Button ID="Button1" runat="server" onclick="Button1_Click" Text="&#25552;&#20132;" />
                            </td>
                            <td>
                                &nbsp;</td>
                        </tr>
    </table>

</asp:Content>


