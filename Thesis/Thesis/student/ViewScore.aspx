<%@ Page Language="C#" MasterPageFile="~/SMasterPage.master" AutoEventWireup="true" CodeFile="ViewScore.aspx.cs" Inherits="student_ViewScore1" Title="查看成绩" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
    <style type="text/css">
        .style3
        {
            width: 100%;
        }
        .style4
        {
            font-family: &#24494;&#36719;&#38597;&#40657;;
            font-weight: bold;
            font-size: large;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <table class="style3">
        <tr>
            <td class="style4">
                &#26597;&#30475;&#25104;&#32489;</td>
        </tr>
        <tr>
            <td>
                <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="False" 
                    DataSourceID="SqlDataSource1" Width="667px">
                    <Columns>
                        <asp:BoundField DataField="&#35770;&#25991;&#39064;&#30446;" HeaderText="&#35770;&#25991;&#39064;&#30446;" SortExpression="&#35770;&#25991;&#39064;&#30446;" />
                        <asp:BoundField DataField="&#25552;&#20132;&#26102;&#38388;" HeaderText="&#25552;&#20132;&#26102;&#38388;" SortExpression="&#25552;&#20132;&#26102;&#38388;" />
                        <asp:BoundField DataField="&#25104;&#32489;" HeaderText="&#25104;&#32489;" SortExpression="&#25104;&#32489;" />
                    </Columns>
                </asp:GridView>
                <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
                    ConnectionString="<%$ ConnectionStrings:ThesisConnectionString %>" SelectCommand="SELECT paper.pname AS &#35770;&#25991;&#39064;&#30446;, paper.dt AS &#25552;&#20132;&#26102;&#38388;, paper.score AS &#25104;&#32489;
FROM paper, student
WHERE paper.studentID=student.sid and student.sid=@sid">
                    <SelectParameters>
                        <asp:QueryStringParameter Name="sid" QueryStringField="sid" />
                    </SelectParameters>
                </asp:SqlDataSource>
            </td>
        </tr>
    </table>
</asp:Content>

