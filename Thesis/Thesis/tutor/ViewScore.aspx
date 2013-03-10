<%@ Page Language="C#" MasterPageFile="~/TMasterPage.master" AutoEventWireup="true" CodeFile="ViewScore.aspx.cs" Inherits="tutor_ViewScore1" Title="查看成绩" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <table class="style1">
        <tr>
            <td>
                &#26597;&#30475;&#23398;&#29983;&#25104;&#32489;</td>
        </tr>
        <tr>
            <td>
                <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="False" 
                    DataSourceID="SqlDataSource1" Width="526px">
                    <Columns>
                        <asp:BoundField DataField="&#35770;&#25991;&#39064;&#30446;" HeaderText="&#35770;&#25991;&#39064;&#30446;" SortExpression="&#35770;&#25991;&#39064;&#30446;" />
                        <asp:BoundField DataField="&#23398;&#29983;&#22995;&#21517;" HeaderText="&#23398;&#29983;&#22995;&#21517;" SortExpression="&#23398;&#29983;&#22995;&#21517;" />
                        <asp:BoundField DataField="&#25552;&#20132;&#26102;&#38388;" HeaderText="&#25552;&#20132;&#26102;&#38388;" SortExpression="&#25552;&#20132;&#26102;&#38388;" />
                        <asp:BoundField DataField="&#25104;&#32489;" HeaderText="&#25104;&#32489;" SortExpression="&#25104;&#32489;" />
                    </Columns>
                </asp:GridView>
                <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
                    ConnectionString="<%$ ConnectionStrings:ThesisConnectionString %>" SelectCommand="SELECT paper.pname AS &#35770;&#25991;&#39064;&#30446;, student.name AS &#23398;&#29983;&#22995;&#21517;, paper.dt AS &#25552;&#20132;&#26102;&#38388;, paper.score AS &#25104;&#32489;
FROM paper, student, stu_tu
WHERE paper.studentID=student.sid and student.sid=stu_tu.sid and stu_tu.tid=@tid">
                    <SelectParameters>
                        <asp:QueryStringParameter Name="tid" QueryStringField="tid" />
                    </SelectParameters>
                </asp:SqlDataSource>
            </td>
        </tr>
    </table>
</asp:Content>

