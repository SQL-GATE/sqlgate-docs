---
id: 0202-using-editor
title: Using SQL Editor
sidebar_label: Using SQL Editor
---

## Run a single SQL query

This section explains how to execute an SQL query on SQL Editor.

1. Connect to database.
2. On the main menu bar, go to **File**>**New**>**SQL Editor**. Or, simply click [SQL Editor] or press Ctrl+N.
3. Write SQL.
4. Click [Run] or press F5.

![SQL query editor](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/query-editor/query-editor-empty-en.png)

> Note: To view the table, right-click on a table and select [Open Description Pane], or select a table and press F4.

5. On the Data tab on the bottom, check the query result.

> Note: >>>'Autocommit' is activated as default.



## Run Multiple Queries At Once

This section explains how to run multiple queries simultaneously from SQL Editor.

1. Connect to database.
2. On main menu bar, go to **File**>**New**>**SQL Editor**. Or, simply click [SQL Editor] on the toolbar or press Ctrl+N.
3. Write SQL on multiple SQL Editors. Use semicolon(;) to separate the tables.
4. Click [Run] or press F5.
5. On the Data tab, check the generated query result.

![run multi query](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/run-multi-query-en.png)

## Run a Subquery

This section explains how to run a subquery block on SQL Editor.

1. Connect to database.
2. On the main menu bar, go to **File**>**New**>**SQL Editor**. Or, simply click **SQL Editor** on the toolbar or press Ctrl+N.
3. In the SQL editor, create an SQL statement that contains a subquery.
4. When you click a subquery, the background color changes automatically, and you can run them without blocking.
5. On the Toolbar, [Run SubQuery Block (Alt+F5)] button will be activated.
6. You can either click [Run SubQuery Block] or press Alt+F5.
7. On the Data tab, check the generated subquery result.

![run sub query](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/run-sub-query-en.png)

## Run A Single Query from Multiple Queries

This section explains how to run one query from multiple queries on SQL Editor.

1. Connect to database.
2. On the main menu bar, go to **File**>**New**>**SQL Editor**. Or, simply click [SQL Editor] on the Toolbar or press Ctrl+N.
3. Enter multiple SQL statements on SQL Editor.
4. Place the cursor on the query to execute.
5. On the main menu bar, go to **Query**>**Run Current SQL**. Or, click [Run Current SQL] on the Run Toolbar or press Ctrl+F5 or Ctrl+Enter.
6. Check the query result on the Data tab.

![run selected query](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/run-selected-query-en.png)


## Replace Selection At Once

This section explains how to replace column names at once.

1. Connect to database.
2. On the main menu bar, go to **File**>**New**>**SQL Editor**. Or, simply click [SQL Editor] on the New Toolbar or press Ctrl+N.
3. Write SQL on SQL editor.
4. Left-click and highlight the SQL statements to edit.
5. Click the icon that appears on the left.
6. When you select the part you want to modify, a text box appears in the SQL statement to which the batch change will be applied. If you modify it, the contents of all the text boxes change at once.

![selection sql replace](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/selection-sql-replace-en.png)

## Run and Modify Current SQL

This section explains how to run query in SQL Editor and edit it right away.

1. Connect to database.
2. On the main menu bar, go to **File**>**New**>**SQL Editor**. Or, simply click [SQL Editor] on the New Toolbar or press Ctrl+N.
3. Write SQL.
4. On the main menu bar, go to **Query**>**Run and Modify Current SQL**. Or, click [Run Current SQL] on the Run Toolbar or press F6.
5. Check the result.
6. Double-click the data to edit and make changes.
7. Click [Save Record].

![run and modify current SQL](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/run-and-modify-current-SQL-en.png)

## Add Data

This section explains how to add data on the result window.

1. Click [Add Record] on the result window navigator.
2. Empty record will be added on the bottom.
3. Enter data.
4. Click [Save Record].
5. Click [Refresh] and check the result.

![run SQL and add record, add record at query result](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/add-record-at-query-result-en.png)


## Delete Data

This section explains how to delete data on the result window.

1. Click the data to delete.
2. Click [Delete Record] on the navigator on the result window.
3. When the message "Are you sure you want to delete?" appears, click [OK].
4. Click [Refresh] and check the result.

![delete record query result](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/delete-record-at-query-result-en.png)


## Work with SQL History

This section explains how to work with SQL History.

1. Connect to database.
2. On the main menu bar, go to **View**>**SQL History**. Or, simply click [SQL History] on the Toolbar or press F8.
3. Select [Reuse] on SQL to reuse.
4. Double-click or click [Add] on Navigator Editor, or press Ctrl+Enter.
5. Check the result on SQL Editor.

![work sql history](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/work-sql-history-en.png)

> Note: SQL is saved in a group **SQL History**, and procedures and functions are saved in **Procedure/Function History**. 

## List of Shortcut Keys of SQL History

Shortcut keys to SQL History are shown below.

| Button                                                                                                                                                        | Instructions                     | Shortcut keys | Action                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------- | ---------------------------------------------------------- |
| ![icon sql history expand group](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/icon-sql-history-expand-group.png)               | Expand Group                     |               | Shows subgroups                                            |
| ![icon sql history collapse](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/icon-sql-history-collapse.png)                       | Collapse Group                   |               | Collapses to root group                                    |
| ![icon sql history new group](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/icon-sql-history-new-group.png)                     | New Group                        |               | Create a new group                                         |
| ![icon sql history modify group](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/icon-sql-history-modify-group.png)               | Modify Group                     |               | Change the name of the user group.                         |
| ![icon sql history delete group](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/icon-sql-history-delete-group.png)               | Delete Group                     |               | Delete the user group.                                     |
| ![icon sql history new sql](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/icon-sql-history-new-sql.png)                         | Add SQL                          |               | Add a new SQL.                                             |
| ![icon sql history modify sql](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/icon-sql-history-modify-sql.png)                   | Modify SQL                       |               | Make changes in selected SQL.                              |
| ![icon sql history delete sql](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/icon-sql-history-delete-sql.png)                   | Delete SQL                       | Del           | Delete selected SQL                                        |
| ![icon sql history move group](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/icon-sql-history-move-group.png)                   | Move Group                       |               | Move the selected SQL Group                                |
| ![icon sql history add to editor](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/icon-sql-history-add-to-editor.png)             | Add to editor                    | Ctrl+Enter    | Add the selected SQL to SQL Editor.                        |
| ![icon sql history replace in editor](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/icon-sql-history-replace-in-editor.png)     | Replace in editor                |               | Delete current SQL and replace them with the selected SQL. |
| ![icon sql history add to new tab](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/icon-sql-history-add-to-new-tab.png)           | Paste to New Tab                 |               | Paste the selected SQL to the New Tab in SQL Editor.       |
| ![icon sql history copy to clipboard](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/icon-sql-history-copy-to-clipboard.png)     | Copy to Clipboard                | Ctrl+C        | Copy the selected SQL to Clipboard.                        |
| ![icon sql history delete all in group](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/icon-sql-history-delete-all-in-group.png) | Delete all SQLs in current group |               | Delete all SQLs in the selected group.                     |
| ![icon sql history open file](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/icon-sql-history-open-file.png)                     | Open File                        |               | Open SQL History file.                                     |
| ![icon sql history save to file](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/icon-sql-history-save-to-file.png)               | Save as File                     |               | Save SQL History as file.                                  |
| ![icon sql history find](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/icon-sql-history-find.png)                               | Find                             |               | Find SQL in SQL History                                    |


## Use Bind Variables to Run SQL

This section explains how to perform SQL using bind variables.

1. Connect to database.
2. On the main menu bar, go to **File**>**New**>**SQL Editor**. Or, simply click [SQL Editor] on the Toolbar or press Ctrl+N.
3. On the Toolbar, click [Use Bind Variables(:)].

![active bind variables function](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/bind-variables-active-en.png)

4. Write SQL using bind variables.
5. Click [Run] or press F5.
6. On the window given, enter the values.

![bind variables run sql](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/bind-variables-run-sql-en.png)

7. Click [Ok] to check the query result on the Result tab.

![bind variables run sql result](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/bind-variables-run-sql-result-en.png)


## Use the Substitution Variable to Run

This section explains how to run using substitution variables.

1. Connect to database.
2. On the main menu bar, go to **File**>**New**>**SQL Editor**. Or, simply click [SQL Editor] on the Toolbar or press Ctrl+N.
3. On the Toolbar, click [Use Substitution Variable(&)].

![active bind substitution variables](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/bind-substitution-variables-active-en.png)

4. Write SQL using substitution variable.
5. Click [Run] or press F5.
6. On the window, enter values.
7. Click [Ok] and check the query result on the Result tab.

![bind substitution variables run sql](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/bind-substitution-variables-run-sql-en.png)