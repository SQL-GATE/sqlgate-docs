---
id: 0202-using-editor
title: Using SQL Editor
sidebar_label: Using SQL Editor
---

## Run a single SQL query

This section explains how to execute an SQL query on SQL Editor.

1. Connect to Oracle database.
2. On the main menu bar, go to **File**>**New**>**SQL Editor**. Or, simply click [SQL Editor] or press Ctrl+N.
3. Write SQL.
4. Click [Run] or press F5.

![Running the query on SQL Editor](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/C9B88A278014199CECBA97B814E11E57.jpg)

> Note: To view the table, right-click on a table and select [Open Description Pane], or select a table and press F4.

5. On the Data tab on the bottom, check the query result.

![Checking the query result on Data tab](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/1C11BC265403AA5D3845EF7A1DCA6DE7.jpg)

> Note: >>>'Autocommit' is activated as default.



## Run Multiple Queries At Once

This section explains how to run multiple queries simultaneously from SQL Editor.

1. Connect to Oracle database.
2. On main menu bar, go to **File**>**New**>**SQL Editor**. Or, simply click [SQL Editor] on the toolbar or press Ctrl+N.
3. Write SQL on multiple SQL Editors. Use semicolon(;) to separate the tables.
![Run multiple queries on SQL Editors](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/D0E62C230406B5AD9143D2611AD89420.jpg)
4. Click [Run] or press F5.
5. On the Data tab, check the generated query result.
![Checkcing multiple query results on the Data tab](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/35ACF8DE3CF4C30CD5E55D7E65F98FEB.jpg)

## Run a Subquery

This section explains how to run a subquery block on SQL Editor.

1. Connect to Oracle database.
2. On the main menu bar, go to **File**>**New**>**SQL Editor**. Or, simply click **SQL Editor** on the toolbar or press Ctrl+N.
3. On the SQL Editor, write a subquery.
![Running a subquery block](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/EEC7CDEB22C9D4BC13B78F17A196B068.jpg)
4. When you click a subquery, the background color changes automatically, and you can run them without blocking.
5. On the Toolbar, [Run SubQuery Block (Alt+F5)] button will be activated.
6. You can either click [Run SubQuery Block] or press Alt+F5.
7. On the Data tab, check the generated subquery result.
![Checking the generated subquery block result](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/5F2FD8D050F0165A2F625EDEE9EAC316.jpg)

## Run A Single Query from Multiple Queries

This section explains how to run one query from multiple queries on SQL Editor.

1. Connect to Oracle database.
2. On the main menu bar, go to **File**>**New**>**SQL Editor**. Or, simply click [SQL Editor] on the Toolbar or press Ctrl+N.
3. Enter multiple SQL statements on SQL Editor.
![Running a single query from multiple queries](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/D0E62C230406B5AD9143D2611AD89420.jpg)
4. Place the cursor on the query to execute.
5. On the main menu bar, go to **Query**>**Run Current SQL**. Or, click [Run Current SQL] on the Run Toolbar or press Ctrl+F5 or Ctrl+Enter.
6. Check the query result on the Data tab.
![Checking the query result of the single query](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/B4FC5FB7754B16631D600FE62304EBA2.jpg)

## Replace Selection At Once

This section explains how to replace column names at once.

1. Connect to Oracle database.
2. On the main menu bar, go to **File**>**New**>**SQL Editor**. Or, simply click [SQL Editor] on the New Toolbar or press Ctrl+N.
3. Write SQL on SQL editor.
4. Left-click and highlight the SQL statements to edit.
![Replacing selection at once](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/2CF9780E92E7255B4FA86C90DF0B9C2D.jpg)
5. Click the icon that appears on the left.
6. Within the selected area, click the text and make the desired changes. The changes will be made at once.

## Run and Modify Current SQL

This section explains how to run query in SQL Editor and edit it right away.

1. Connect to Oracle database.
2. On the main menu bar, go to **File**>**New**>**SQL Editor**. Or, simply click [SQL Editor] on the New Toolbar or press Ctrl+N.
3. Write SQL.
4. On the main menu bar, go to **Query**>**Run Current SQL**. Or, click [Run Current SQL] on the Run Toolbar or press F6.
![Running and modifying current SQL](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/F0986FECD22856514AB7F967F340FC33.jpg)
5. Check the result.
6. Double-click the data to edit and make changes.
7. Click [Save Record].
![Making direct changes on the grid](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/D4042EFC8EC9934B33DEBF26C1490D53.jpg)

## Add Data

This section explains how to add data on the result window.

1. Click [Add Record] on the result window navigator.
2. Empty record will be added on the bottom.
3. Enter data.
4. Click [Save Record].
5. Click [Refresh] and check the result.
![Add Data](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/55F38B54A95D4038970D91DE0E5F7E25.jpg)


## Delete Data

This section explains how to delete data on the result window.

1. Click the data to delete.
2. Click [Delete Record] on the navigator on the result window.
3. When the message "Are you sure you want to delete?" appears, click [OK].
![Deleting Data](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/0C69E2FE3E7FDF42EC70ACA7C9E323A2.jpg)
4. Click [Refresh] and check the result.

## Work with SQL History

This section explains how to work with SQL History.

1. Connect to Oracle database.
2. On the main menu bar, go to **View**>**SQL History**. Or, simply click [SQL History] on the Toolbar or press F8.
3. Select [Reuse] on SQL to reuse.
![Working with SQL History](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/6457511BA416C73D5FA4821940C88BBD.jpg)
4. Double-click or click [Add] on Navigator Editor, or press Ctrl+Enter.
5. Check the result on SQL Editor.

> Note: SQL is saved in a group **SQL History**, and procedures and functions are saved in **Procedure/Function History**. 

## List of Shortcut Keys of SQL History

Shortcut keys to SQL History are shown below.

| Button | Instructions | Shortcut keys | Action |
| --- | --- | --- | --- |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/4C45141F1F82AF05991CDC3507ED3D8B.jpg) | Expand Group | | Shows subgroups |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/05DB33FEF038C1BB6AD63DF50B6BF416.jpg) | Collapse Group | | Collapses to root group |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/686D856958D245681FE0C6C9B30864E9.jpg) | New Group | | Create a new group |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/7F738432D5CABEAC719AC31354C4122B.jpg) | Modify Group | | Change the name of the user group. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/8A800BFA2B23E91D026DBA662E5D11C8.jpg) | Delete Group | | Delete the user group. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/2354A6303C428DA3C92038CBAC638216.jpg) | Add SQL | | Add a new SQL. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/9D06EC93FC4E96678EFBBF374C009C78.jpg) | Modify SQL | | Make changes in selected SQL. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/099A6D393897EB9598E893836CB389F6.jpg) | Delete SQL | Del | Delete selected SQL |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/5DE7781A4991045F34BB83CC73E1D07C.jpg) | Move Group | | Move the selected SQL Group |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/1680AA1BD2A4C023F1AF49B8FD1274BB.jpg) | Add to editor | Ctrl+Enter | Add the selected SQL to SQL Editor. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/11815E192ADB34B30D20E2E99DB676C8.jpg) | Replace in editor | | Delete current SQL and replace them with the selected SQL. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/C22AFD06002669693C0456889192DC7B.jpg) | Paste to New Tab | | Paste the selected SQL to the New Tab in SQL Editor. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/94CF1BD51FBEE19EC29D643C5CB4BFD2.jpg) | Copy to Clipboard | Ctrl+C | Copy the selected SQL to Clipboard. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/7AA0C9206E01D4F5580F0F0D3E66269B.jpg) | Delete all SQLs in current group | | Delete all SQLs in the selected group. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/48B1D0CA6E7345686DD99749ADD00751.jpg) | Open File | | Open SQL History file. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/25EFDD23A903B94813FA422CC5E2E011.jpg) | Save as File | | Save SQL History as file. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/7A1B99EADFECBCEB470DBA16AD3DB624.jpg) | Find | | Find SQL in SQL History |


## Use Bind Variables to Run SQL

This section explains how to perform SQL using bind variables.

1. Connect to Oracle database.
2. On the main menu bar, go to **File**>**New**>**SQL Editor**. Or, simply click [SQL Editor] on the Toolbar or press Ctrl+N.
3. On the Toolbar, click [Use Bind Variables(:)].
![Using bind variables to run SQL](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/587BB84EB53EF37B7467B6BF42DFFBD0.jpg)
4. Write SQL using bind variables.
5. Click [Run] or press F5.
6. On the window given, enter the values.
![Entering bind variable values](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/1E20EE49EDCA69B6B1636DB913974490.jpg)
7. Click [Ok] to check the query result on the Result tab.
![Checking the query result](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/C8CA6A6B10EF0676B33B35B4A7166F16.jpg)


## Use the Substitution Variable to Run

This section explains how to run using substitution variables.

1. Connect to Oracle database.
2. On the main menu bar, go to **File**>**New**>**SQL Editor**. Or, simply click [SQL Editor] on the Toolbar or press Ctrl+N.
3. On the Toolbar, click [Use Substitution Variable(&)].
![Using substitution variable to run](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/3ECF6D0FDF054C1B7467D5161D57B6FF.jpg)
4. Write SQL using substitution variable.
5. Click [Run] or press F5.
6. On the window, enter values.
![Entering values for substitution variable](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/B4421CDE204928972F26C8049123E8B3.jpg)
7. Click [Ok] and check the query result on the Result tab.
![Check the query result of queries with substitution variables](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/2BF14B3E3416884EA14F05302163E9F8.jpg)