<%@ Page Language="C#" MasterPageFile="~/TMasterPage.master" AutoEventWireup="true" CodeFile="SubmitTitle.aspx.cs" Inherits="tutor_SubmitTitle" Title="拟定选题" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
    <style type="text/css">
        .style3
        {
            width: 385px;
        }
        .style4
        {
            width: 417px;
        }
        .style5
        {
            width: 97px;
        }
    </style>
</asp:Content>

<asp:Content ID="Content2" runat="server" 
    contentplaceholderid="ContentPlaceHolder1">

                    <p>
                        <table class="style1">
                            <tr>
                                <td class="style4">
                                    &#35770;&#25991;&#25311;&#39064;</td>
                                <td class="style3">
                                    <br />
                                </td>
                                <td class="style5">
                                    &nbsp;</td>
                            </tr>
                            <tr>
                                <td class="style4">
                                    &#24744;&#30340;&#24403;&#21069;&#35770;&#25991;&#25311;&#39064;&#22914;&#19979;&#65306;</td>
                                <td class="style3">
                                    <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="False" 
                                        DataSourceID="SqlDataSource1" Width="313px" 
                                        onselectedindexchanged="GridView1_SelectedIndexChanged">
                                        <Columns>
                                            <asp:BoundField DataField="&#35770;&#25991;&#39064;&#30446;" HeaderText="&#35770;&#25991;&#39064;&#30446;" SortExpression="&#35770;&#25991;&#39064;&#30446;" />
                                        </Columns>
                                    </asp:GridView>
                                    <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
                                        ConnectionString="<%$ ConnectionStrings:ThesisConnectionString %>" 
                                        SelectCommand="SELECT papertitle.ptname AS '&#35770;&#25991;&#39064;&#30446;' FROM papertitle INNER JOIN tu_ptitle ON papertitle.ptid = tu_ptitle.ptid WHERE (tu_ptitle.tid = '90001')"></asp:SqlDataSource>
                                           </td>
                                <td class="style5">
                                    <asp:SqlDataSource ID="SqlDataSource2" runat="server"></asp:SqlDataSource>
                                           </td>
                            </tr>
                            <tr>
                                <td class="style4">
                                    &nbsp;</td>
                                <td class="style3">
                                    &nbsp;</td>
                                <td class="style5">
                                    &nbsp;</td>
                            </tr>
                            <tr>
                                <td class="style4">
                                    &#35831;&#36755;&#20837;&#24744;&#30340;&#35770;&#25991;&#25311;&#39064;&#65306;</td>
                                <td class="style3">
                                    <asp:TextBox ID="TextBox1" runat="server" Height="20px" 
                                        ontextchanged="TextBox1_TextChanged" Width="302px"></asp:TextBox>
                                </td>
                                <td class="style5">
                                    &nbsp;&nbsp;&nbsp;
                                    <asp:Button ID="Button1" runat="server" onclick="Button1_Click" Text="&#25552;&#20132;" />
                                </td>
                            </tr>
                            <tr>
                                <td class="style4">
                                    &nbsp;</td>
                                <td class="style3">
                                    &nbsp;</td>
                                <td class="style5">
                                    &nbsp;</td>
                            </tr>
                        </table>
                        <br />
    </p>

</asp:Content>


