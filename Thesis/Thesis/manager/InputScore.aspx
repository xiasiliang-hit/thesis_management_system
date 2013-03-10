<%@ Page Language="C#" MasterPageFile="~/MMasterPage.master" AutoEventWireup="true" CodeFile="InputScore.aspx.cs" Inherits="manager_InputScore" Title="录入成绩" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
        ConnectionString="<%$ ConnectionStrings:ThesisConnectionString %>" 
        SelectCommand="SELECT paper.pid AS &#35770;&#25991;&#32534;&#21495;, paper.pname AS &#35770;&#25991;&#39064;&#30446;, student.name AS &#23398;&#29983;&#23398;&#21495;, student.name AS &#23398;&#29983;&#22995;&#21517;, paper.dt AS &#25552;&#20132;&#26102;&#38388;,paper.score AS &#25104;&#32489;
FROM paper, student
WHERE paper.studentID=student.sid and paper.type = 3" 
        UpdateCommand="UPDATE paper SET score = @score WHERE (pid = @pid)">
        <UpdateParameters>
            <asp:Parameter Name="score" />
            <asp:Parameter Name="pid" />
        </UpdateParameters>
    </asp:SqlDataSource>
    <asp:GridView ID="GridView1" runat="server" AllowPaging="True" 
        AutoGenerateColumns="False" 
        DataSourceID="SqlDataSource1" Width="730px" 
        onrowediting="GridView1_RowEditing" onrowupdating="GridView1_RowUpdating">
        <Columns>
            <asp:BoundField DataField="&#35770;&#25991;&#39064;&#30446;" HeaderText="&#35770;&#25991;&#39064;&#30446;" ReadOnly="True" 
                SortExpression="&#35770;&#25991;&#39064;&#30446;" />
            <asp:BoundField DataField="&#23398;&#29983;&#23398;&#21495;" HeaderText="&#23398;&#29983;&#23398;&#21495;" ReadOnly="True" 
                SortExpression="&#23398;&#29983;&#23398;&#21495;" />
            <asp:BoundField DataField="&#23398;&#29983;&#22995;&#21517;" HeaderText="&#23398;&#29983;&#22995;&#21517;" ReadOnly="True" 
                SortExpression="&#23398;&#29983;&#22995;&#21517;" />
            <asp:BoundField DataField="&#25552;&#20132;&#26102;&#38388;" HeaderText="&#25552;&#20132;&#26102;&#38388;" ReadOnly="True" 
                SortExpression="&#25552;&#20132;&#26102;&#38388;" />
            <asp:BoundField DataField="&#25104;&#32489;" HeaderText="&#25104;&#32489;" SortExpression="&#25104;&#32489;" />
            <asp:CommandField ShowEditButton="True" />
        </Columns>
    </asp:GridView>
    </asp:Content>

