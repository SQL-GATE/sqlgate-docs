---
id: 0212-use-er-design
title: Use ER Design
sidebar_label: Use ER Design
---



## View Table Objects
> Supported models :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

This section explains how to view table objects.

1. Connect to database.
2. On the main menu bar, go to **File**>**New**>**ER Design**. Or, click [ER Design] on the New Toolbar.
3. Select a schema. Then, select tables and drag them to canvas. Or, click [Add].
4. On canvas, check the added tables.

![ER Design View Table Objects](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/erDesign/erDesign-viewTable.png)

> Note: ER Design only supports database reverse engineering.


## Find Table Objects On Canvas
> Supported models :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

This section explains how to find table objects on canvas.

1. Connect to database.
2. On the main menu bar, go to **File**>**New**>**ER Design**, or simply click [ER Design] on the New Toolbar.
3. Specify a schema and select a table. Drag to canvas or click [Add].
4. On the main menu bar, go to **Edit**>**Find and Replace**>**Find** or press Ctrl+F.
5. Enter the name of the table on the Search window.

![ER Design Find Table Objects On Canvas](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/erDesign/erDesign-findTableOnCanvas.png)

6. Check the search results.

![ER Design Find Table Objects On Canvas](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/erDesign/erDesign-findTableOnCanvas-01.png)



## View Relationship Between Tables
> Supported models :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

This section explains how to view a relationship between tables.

1. Connect to database.
2. On the main menu bar, go to **File**>**New**>**ER Design**. Or, click [ER Design] on the New Toolbar.
3. Select a schema. Then, select tables and drag them on canvas. Or, click [Add].
4. Double-click the link between a table and an object.
5. Check the relationship between a table and an object.

![ER Design View Relationship Between Tables](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/erDesign/erDesign-viewRelationship.png)




## Alter Relationships Between Table Objects
> Supported models :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

This section explains how to alter table objects.

1. Connect to database.
2. On the main menu bar, go to **File**>**New**>**ER Design**. Or, click [ER Design] on the New Toolbar.
3. Select a schema. Then, select tables and drag them to canvas. Or, click [Add].
4. On the Toolbar, click one from: 1:1 Non-identifying Relationship, 1:n Non-identifying Relationship, and n:m Non-identifying Relationship.
5. Click the original table and then the destination table.
6. You will see a link created between the tables.
7. Set a Relationship Key.
8. Click [Ok].

![ER Design Alter Relationships Between Table Objects](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/erDesign/erDesign-alterRelationship.png)

> Note: Logical relationships between table objects will be linked in dotted line.



## Change Options for Table Display
> Supported models :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

This section explains how to change table view options.

1. Connect to database.
2. On the main menu bar, go to **File**>**New**>**ER Design**. Or, click [ER Design] on the New Toolbar.
3. Select a schema. Then, select tables and drag them to canvas. Or, click [Add].
4. Double-click a table object. You will see Change Options for Table Display window.

![ER Design Change Options for Table Display](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/erDesign/erDesign-changeOptionsForTableDisplay.png)

5. Set values to display. Click [OK].
6. Check the result.


## ER Design Toolbar
> Supported models :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

| Button                                                                                                                                                                            | Instruction                      | Shortcut keys | Action                                                            |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------- | ----------------------------------------------------------------- |
| ![Select object with left mouse button drag.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/erDesign/icon-erDesign-select.png)                                | Select                           |               | Select object with left mouse button drag.                        |
| ![Move selected objects.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/erDesign/icon-erDesign-move.png)                                                      | Move                             |               | Move selected objects.                                            |
| ![Resize the selected group.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/erDesign/icon-erDesign-resize.png)                                                | Resize                           |               | Resize the selected group.                                        |
| ![Delete the selected object.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/erDesign/icon-erDesign-delete.png)                                               | Delete                           |               | Delete the selected object.                                       |
| ![Left-click on workspace and move.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/erDesign/icon-erDesign-panningHand.png)                                    | Panning Hand                     |               | Left-click on workspace and move.                                 |
| ![View workspace smaller.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/erDesign/icon-erDesign-zoomOut.png)                                                  | Zoom Out                         |               | View workspace smaller.                                           |
| ![Zoom in to workspace.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/erDesign/icon-erDesign-zoomIn.png)                                                     | Zoom In                          |               | Zoom in to workspace.                                             |
| ![Groups related objects together.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/erDesign/icon-erDesign-region.png)                                          | Region                           |               | Groups related objects together.                                  |
| ![Add text or comment on canvas.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/erDesign/icon-erDesign-textBox.png)                                           | Text Box                         |               | Add text or comment on canvas.                                    |
| ![Set 1:1 non-identifying relationships between objects in a table.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/erDesign/icon-erDesign-11Relationship.png) | 1:1 Non-identifying Relationship |               | Set 1:1 non-identifying relationships between objects in a table. |
| ![Set 1:n non-identifying relationships between objects in a table.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/erDesign/icon-erDesign-1nRelationShip.png) | 1:n Non-identifying Relationship |               | Set 1:n non-identifying relationships between objects in a table. |
| ![Set n:m non-identifying relationships between objects in a table.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/erDesign/icon-erDesign-nmRelationship.png) | n:m Non-identifying Relationship |               | Set n:m non-identifying relationships between objects in a table. |
| ![View current ER Design script.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/erDesign/icon-erDesign-viewSQL.png)                                           | View SQL                         |               | View current ER Design script.                                    |
| ![Refresh canvas.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/erDesign/icon-erDesign-refresh.png)                                                          | Refresh                          |               | Refresh canvas.                                                   |
