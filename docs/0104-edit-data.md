---
id: 0104-edit-data
title: Edit data without writing SQL statements
sidebar_label: Edit data without writing SQL statements
---

## Edit data on tables

This is how to edit data on tables without writing INSERT, DELETE, UPDATE statements.

1. Connect to database.
2. On the main menu bar, Go to **File**>**New**>**SQL Editor**. Or simply click [SQL Editor] on the toolbar, or press Ctrl+N.
3. Write the SQL statement so that the results of the query execution contain the data to be modified.
4. On the Run Toolbar, click [Run and Modify Current SQL] or press F6.

![run and modify current SQL](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/edit-data/run-and-modify-current-SQL-en.png)

5. Check the query result.
6. Double click on the data to edit.
7. Once you are done editing, click other area of the grid or click [Save] on Navigator on the top.
8. All changes made are referenced by the transaction. To commit transaction, go to **Query**>**Commit(F10)** to roll back, go to **Query**>**Rollbak(F11)**

## Edit data on table explanation window

This is how to edit data on table explanation window

1. On **Object Panel**, double-click on a table to edit.
2. On the **Table Explanation** window, click the Data tab.

![Edit data on table explanation window, On the Table Explanation window, click the Data tab.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/edit-data/edit-data-on-table-detail-window-en.png)

3. Double-click on the grid to edit, and then make changes.
4. Once you are done, click other area of the grid or click 'Save' on navigator on top of the page.
5. All changes made are referenced by the transaction. To commit transaction, go to **Query**>**Commit(F10)** to roll back, go to **Query**>**Rollbak(F11)**