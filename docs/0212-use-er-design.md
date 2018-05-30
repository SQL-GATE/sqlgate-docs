---
id: 0212-use-er-design
title: Use ER Design
sidebar_label: Use ER Design
---



## View Table Objects

This section explains how to view table objects.

1. Connect to database.
2. On the main menu bar, go to **File**>**New**>**ER Design**. Or, click [ER Design] on the New Toolbar.
3. Select a schema. Then, select tables and drag them to canvas. Or, click [Add].
4. On canvas, check the added tables.

![Check the added table object](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/1B1F9296278BA7041689BAFA7DA15BFF.jpg)

> Note: ER Design only supports database reverse function.


## Find Table Objects On Canvas

This section explains how to find table objects on canvas.

1. Connect to database.
2. On the main menu bar, go to **File**>**New**>**ER Design**, or simply click [ER Design] on the New Toolbar.
3. Specify a schema and select a table. Drag to canvas or click [Add].
4. On the main menu bar, go to **Edit**>**Find and Replace**>**Find** or press Ctrl+F.
5. Enter the name of the table on the Search window.

![Find table objects](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/86B49BAF275F2FA5EF390FABA70504BF.jpg)

6. Check the search results.

![Check the searched table objects](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/076A5056B6A58C49D5806D4666897907.jpg)



## View Relationship Between Tables

This section explains how to view a relationship between tables.

1. Connect to database.
2. On the main menu bar, go to **File**>**New**>**ER Design**. Or, click [ER Design] on the New Toolbar.
3. Select a schema. Then, select tables and drag them on canvas. Or, click [Add].
4. Double-click the link between a table and an object.
5. Check the relationship between a table and an object.

![Check relationship between table and object](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/3716EF1B92314F1DB37040E616DD859E.jpg)




## Alter Relationships Between Table Objects

This section explains how to alter table objects.

1. Connect to database.
2. On the main menu bar, go to **File**>**New**>**ER Design**. Or, click [ER Design] on the New Toolbar.
3. Select a schema. Then, select tables and drag them to canvas. Or, click [Add].
4. On the Toolbar, click one from: 1:1 Nonidentifying Relationship, 1:n Nonidentifying Relationship, and n:m Nonidentifying Relationship.
5. Click the original table and then the destination table.
6. You will see a link created between the tables.
7. Set a Relationship Key.
8. Click [Ok].

![Alter relationship between table objects](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/B51A564EB1A265FD2A2C702465DC7381.jpg)

> Note: Logical relationships between table objects will be linked in dotted line.



## Change Options for Table Display

This section explains how to change table view options.

1. Connect to database.
2. On the main menu bar, go to **File**>**New**>**ER Design**. Or, click [ER Design] on the New Toolbar.
3. Select a schema. Then, select tables and drag them to canvas. Or, click [Add].
4. Double-click a table object. You will see Change Options for Table Display window.

![Change options for table display](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/76414DA73CD30067388762D29E4477B8.jpg)

6. Set values to display. Click [OK].
7. Check the result.

![Check the changes made for table display option](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/FEBBE2B638B2BD0CF2D9794DEE7DC6B8.jpg)



## ER Design Toolbar


| Button | Instruction | Shortcut keys | Action |
| --- | --- | --- | --- |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/C139C4797D29D10FD9FAD4FDEEE98A06.jpg) | Select | | Select object with left mouse button drag. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/53F5C0BAAD1B800669C62CD3B2A8FF57.jpg) | Move | | Move selected objects. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/B52EFCFE240B6FD595C1BD9823DC4A44.jpg) | Resize | | Resize the selected group. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/BE1FA8571FCE0598995B3D39F051033C.jpg) | Delete | | Delete the selected object. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/D23266B20DE3927DC824FFF32A8937CE.jpg) | Panning Hand | | Left-click on workspace and move. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/2E433E9461B9B783781FB892F43460A7.jpg) | Zoom Out | | View workspace smaller. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/CD349E22F3A88E99F2A8306569DD0DFF.jpg) | Zoom In | | Zoom in to workspace. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/146967B9C2EE0E8E96993BBE6BB56AD7.jpg) | Region | | Groups related objects together. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/AACEFA131BD609F482E544758519366A.jpg) | Text Box | | Add text or comment on canvas. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/BA9A99CC7393D220744659B656C89BAA.jpg) | 1:1 Non-identifying Relationship | | Set 1:1 non-identifying relationships between objects in a table. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/751CAD419D6BC681AC53CF3D938BFA20.jpg) | 1:n Non-identifying Relationship | | Set 1:n non-identifying relationships between objects in a table. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/15D341B4ADC9A878577EF46D36BF53AC.jpg) | n:m Non-identifying Relationship | | Set n:m non-identifying relationships between objects in a table. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/4150EBB0CDFFA932484EF5AD37055238.jpg) | View SQL | | View current ER Design script. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/1D0D799E5F67808D1371FCB8CB3D30FF.jpg) | Refresh | | Refresh canvas. |


