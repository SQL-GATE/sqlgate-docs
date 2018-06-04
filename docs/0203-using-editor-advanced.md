---
id: 0203-using-editor-advanced
title: Using the Advanced SQL Editor
sidebar_label: Using the Advanced SQL Editor
---

## Use Table AutoComplete

This section explains how to autocomplete tables.

1. Connect to database.
2. On the main menu bar, go to **File**>**New**>**SQL Editor**. Or, simply click [SQL Editor] on the New Toolbar or press Ctrl+N.
3. Write SQL.
4. Table lists will follow keywords From/Into/Update.
![AutoComplete tables](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/9BE1086AF61A2696E0B2BF118B857A1E.jpg)
5. Select a table with the cursor or double-click.
6. If granted a related privilege, you can select the tables you own and other users’ objects.
![Select other owner’s object table.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/DAD0039E82547341E23AD2FEA25DD847.jpg)
7. You can press Ctrl+H to autocomplete tables anywhere.


## Use Field AutoComplete

This section explains how to use field autocomplete.

1. Connect to Oracle database.
2. On the main menu bar, go to **File**>**New**>**SQL Editor**. Or, simply click **SQL Editor** on the New Toolbar or press Ctrl+N.
3. Write SQL.
4. If you enter period (.) on SQL editor, it will display the nickname or a table field.
![Field Autocomplete](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/481F5BA0AF013466D1B607BABCD126DC.jpg)
5. Select a field on a table and press Enter.



## Use Code AutoComplete

This section explains how to use code autocompletion.

1. Connect to oracle database.
2. On the main menu bar, go to **File**>**New**>**SQL Editor** Or, simply click [SQL Editor] or press Ctrl+N.
3. On the **Editor** window, type ‘selectw’.
![Entering code autocomplete](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/FCB664AB3099BEB1A9679EF5FB9F49D9.jpg)
4. Press Ctrl+J.
5. Write SQL and see the codes being extended as listed in the code template.
6. Check the result.
![Screen of code template](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/A0F6B711ABC9F94268BD6E7110F80326.jpg)
7. Go to **Tool**>**Option**>**SQL Editor**>**Editor Option**>**Code Template** on the main menu bar to find the definition of code template.
8. You can add, modify, and delete items to customize the code template.
![Setting code template options](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/CBB26E43D56E9E9DF14859B8F4D6B327.jpg)



## Display Two SQL Editor Windows

This section explains how to display two SQL Editor windows.

1. Connect to database.
2. On the main menu bar, go to **File**>**New**>**SQL Editor**. Or, simply click [SQL Editor] on the Toolbar or press Ctrl+N.
3. Write SQL. Left-click on the bottom or the top of the editor and drag to the side. You can display SQL editors side to side or up and down.
![Select SQL Editor window](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/DD5BF3E3F35809F3BFB3689DED0EE81A.jpg)
4. From SQL Editor windows displayed side to side, you can drag one to where it used to be to view only one.
![Display two SQL Editor windows](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/11DFF43CB050DB0F823EE9CE7B5DFAC4.jpg)

## Change Query Result Window View Horizontally/Vertically

This section explains how to change the view of query result windows horizontally or vertically.

1. Connect to database.
2. On the main menu bar, go to **File**>**New**>**SQL Editor**. Or, simply click [SQL Editor] on the New Toolbar or press Ctrl+N.
3. Write SQL.
4. Click [Run] or press F5.
5. On the Data tab, right-click and select [Change Horizontal/Vertical View].
![Change Horizontal/Vertical View window](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/50D2352F208AFD1D69DDE9630655D412.jpg)
6. Check the result.
![Horizontal view](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/27E731796040CDF08D90459661ED772F.jpg)

## Switch Horizontal/Vertical Views for Multiple Query Result Windows

This section explains how to change views of multiple query result windows horizontally or vertically.

1. Connect to database.
2. On the main menu bar, go to **File**>**New**>**SQL Editor**. Or, simply click [SQL Editor] on the Toolbar or press Ctrl+N.
3. Write SQL.
![SQL query builder](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/257924A2DCDD75E62A2C6B9CE4EC8BF1.jpg)
4. Click [Run] or press F5.
5. On the right of the **Data** tab, click [Change Horizontal/Vertical View].
![Change horizontal/vertical view of multiple queries](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/9460A7CBC5E023865E7BE2B6309AF970.jpg)
6. Check the changes made.
![Check the vertical view of multiple query results](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/4DF57E9D0C00BDB86A7CF18CCF70BA56.jpg)


## Align Query Statements

This section explains how to align query statements.

1. Connect to database.
2. On the main menu bar, go to **File**>**New**>**SQL Editor**. Or, simply click [SQL Editor] on the New Toolbar or press Ctrl+N.
3. Write SQL.
4. On the main menu bar, go to **Query**>**SQL Alignment**. Or, click [SQL Alignment] on Run Toolbar or press F9.
![Check result of SQL Alignment](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/CECF9B45440C440A673363FE48FD6934.jpg)
5. On the main menu bar, go to **Tool**>**Option**>**SQL Editor**>**SQL Alignment Options**>**Options**. Or, simply click **SQL Alignment Options** on the Run Toolbar.
6. You can set **SQL Alignment Options**.
![Set SQL Alignment Options](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/0CABFDD68E1AFCB499AB4BB73D495DB4.jpg)

> Tip: Click [Reset] to reset back to default settings.



## Convert SQL to Java Codes

This section explains how to convert SQL to Java codes.

1. Connect to database.
2. On the main menu bar, go to **File**>**New**>**SQL Editor**. Or, simply click [SQL Editor] on the Toolbar or press Ctrl+N.
3. Write SQL statement.
4. Left-click on SQL.
5. On the main menu bar, go to **Edit**>**Convert SQL**>**JSP, Java, C**. Or, simply click [Convert SQL] on the Toolbar. It will be copied to Clipboard.
![Convert SQL and copy to Clipboard.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/A4FC1F4B12B9D1FEF8EB9F102216BBDA.jpg)
6. Open external editor and create a blank document. Right-click to paste, or press Ctrl+V.
7. Check the pasted codes.

![Check pasted codes.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/66AA89BCB072A80EEDAC5314D66E4AA1.jpg)



## Extract SQL from Java

This section explains how to extract SQL from Java.

1. Connect to database.
2. On the menu bar, go to **File**>**New**>**SQL Editor**. Or, simply click [SQL Editor] on the Toolbar or press Ctrl+N.
3. On External Editor, left-click and drag on Java. Click [Copy] or press Ctrl+C to copy the code.
![Copy SQL to clipboard](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/23F5EE9B8B37599BBAA43BAF56BE7458.jpg)
4. On the menu bar, go to **Edit**> **Paste from the code**. Or, simply click [Paste from the code] on the Toolbar or press Shift+Ctrl+V.
5. See if the code are copied successfully.
![See extracted SQL code](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/0507C868D51CDC8C83409ABE68279A24.jpg)



## View Table Schema Right Away

This section explains how to view table schema right away.

1. Connect to database.
2. On the main menu bar, go to **File**>**New**>**SQL Editor**. Or, click [SQL Editor] on the New Toolbar.
3. Write SQL and place the cursor next to the object name. Then, press Alt+1.
![View table schema right away](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/7D1AC4B0379DAE33202ED7439F4F2A4E.jpg)
4. Check the schema information on Data tab.
![Check schema information](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/03292BF1E77A19E22565C07D82227721.jpg)

> Note: The definition of ‘View Table Schema Right Away’ can be found in ‘Tools’>’Options’>’Query Shortcuts’.


## View Table Data Right Away

This section explains how to view table data right away.

1. Connect to database.
2. On the main menu bar, go to **File**>**New**>**SQL Editor**. Or, simply click [SQL Editor] on the New Toolbar or press Ctrl+N.
3. Write SQL and move the cursor next to the object keyword. Then, press Alt+2.
![Write SQL query](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/7D1AC4B0379DAE33202ED7439F4F2A4E.jpg)
4. Check data information on Data tab.
![Check data information](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/F08C63362C2E95C75BBE61A8FA7EE06C.jpg)



## Get Full Table Information

This section explains how to get a full table information.

1. Connect to database.
2. On the main menu bar, go to **File**>**New**>**SQL Editor**. Or, simply click [SQL Editor] on the New Toolbar or press Ctrl+N.
3. Write SQL and place the cursor next to object keyword.
4. On the main menu bar, go to **Edit**>**Schema Description** or press F4.
![Write SQL query](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/7D1AC4B0379DAE33202ED7439F4F2A4E.jpg)
5. A full table information will be given.
![View full table information](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/DDFB04C6CE47BC21E599F19B6C35244E.jpg)

> Note: You will see a message that says “You must select an object if not a table name.”



## Add an Editor Tab and Run SQL

This section explains how to create an additional tab of SQL editor.

1. Connect to database.
2. On the main menu bar, go to **File**>**New**>**SQL Editor**. Or, simply click [SQL Editor] on  the New Toolbar or press Ctrl+N.
3. Click [Add Editor].
![Add Editor window tab](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/38F0D7DD6C6811578B10772F7167D33C.jpg)
4. Write SQL on the new tab.



## Add Multiple Tabs on Editor Window

This section explains how to add multiple tabs on editor window.

1. Connect to database.
2. On the main menu bar, go to **Tools**>**Options**. The, click the list of SQL Editors.
3. Open a query editor and set the number of tabs. Click [OK].
![Set editor window](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/06675CFD5B084CAA4F09524C0EF8F612.jpg)
4. On the main menu bar, go to **File**>**New**>**SQL Editor**. Or, simply click [SQL Editor] on the New Toolbar or press Ctrl+N.
5. Set number of blank SQL documents will be open.



## View Editor Only

This section explains how to view editor only.

1. Connect to database.
2. On the main menu bar, go to **File**>**New**>**SQL Editor**. Or, simply click [SQL Editor] on the New Toolbar or press Ctrl+N.
3. Write SQL.
4. Click [Show Grid] or press F11.
5. Grid will not be displayed, and you will only see Editor window.

![View Editor window only](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/9159FC08E95039AC21604B4669349E08.jpg)




## Create a Separate Window for Editor and Grid

This section explains how to separate an editor window from grid.

1. Connect to database.
2. On the main menu bar, go to **File**>**New**>**SQL Editor**. Or, simply click [SQL Editor] on the New Toolbar or press Ctrl+N.
3. Write SQL.
4. Click [Run] or press F5.
5. Check query result on data tab.
![Create a separate window for editor and grid](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/7E11F695AF27D0A11DBF6DD1F78EB04E.jpg)
6. Double-click the result.
7. The grid will be separated from the query editor window.
![Query editor window and the separated grid](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/6907DED62B25DC9430E129CACEF118F7.jpg)
8. Double-click the title of the grid to sort query editor window and grid again.




## Relocate Editor Window and Grid

This section explains how to relocate the editor window and grid.

1. Connect to database.
2. On the main menu bar, go to **File**>**New**>**SQL Editor**. Or, simply click [SQL Editor] on the New Toolbar or press Ctrl+N.
3. Write SQL.
4. Click [Run] or press F5.
5. On the Run Toolbar, click [Move Tabs to Right].
![Move result tabs to right](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/8DB9D8F7E9A7FEC5711E14946E88AD22.jpg)
6. Check the tabs moved to right.
![Result tabs moved to right](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/D19F69E0C96C387549A16DA156D66264.jpg)
(Result windows will move to bottom if you click ‘Move Tab to Bottom.)


## Move Editor Tab

This section explains how to move editor tab.

1. Connect to database.
2. On the main menu bar, go to **File**>**New**>**SQL Editor**. Or, simply click [SQL Editor] on the New Toolbar or press Ctrl+N.
3. Write SQL.
4. To move a tab, drag and drop it to a location of your preference.
![Move Editor tab](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/BCEF5B6BD2542C28459C04B03C0B20BF.jpg)
5. Check the result.
![Check the tab that has been moved.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/E1F3A911990DF833ADE67108A29A10A0.jpg)



## Close All But This

This section explains how to close all tabs but current working tab.

1. Connect to database.
2. On current tab, right-click and select [Close All But This].
![Close All But This](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/BA6B7E9F98FF4D0B477401E5C8D4D4E6.jpg)
3. Check the result.


## Bookmark Shortcut

This section explains the bookmark shortcut features.

1. Connect to database.
2. On the main menu bar, go to **File**>**New**>**SQL Editor**. Or, simply click [SQL Editor] on the Toolbar or press Ctrl+N.
![Set Bookmark](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/6F81503DBD22DAD86CF032593D6D0770.jpg)
3. Write SQL.
4. On the SQL statements to bookmark, go to **Editor**>**Bookmark**>**Toggle Bookmark**, or press Ctrl+Alt+0.
![Bookmark shortcut](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/123FA28947A47E42F8A8E3DF414AA9C5.jpg)
5. On the editor, press Ctrl+0. The cursor will be moved to the bookmark.

> Note: You can bookmark from 0 to 9 on the number key within the same editor window.


## Add SQL Comment At Once

This section explains how to add SQL comments at once.

1. Connect to database.
2. On main menu bar, go to **File**>**New**>**SQL Editor**. Or, simply click [SQL Editor] on the Toolbar or press Ctrl+N.
3. Generate SQL statements.
4. Left-click on texts to comment and click [Block].
5. On the main menu bar, go to **File**>**Block Comment**. Or, simply click [Comment Block] on the Toolbar or press Ctrl+-.
![Add SQL Comment At Once](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/379F73B1E0CCE3BE690549CC4CA17808.jpg)
6. Check if it is added successfully.
![Check Added Comments](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/EAA10C1A6A81CE9DDF28551AEFA62E6A.jpg)


## Uncomment SQL At Once

This section explains how to uncomment SQL at once.

1. Connect to database.
2. On the main menu bar, go to **File**>**New**>**SQL Editor**. Or, simply click [SQL Editor] on the Toolbar or press Ctrl+N.
3. Generate SQL statements.
4. Left-click on comments to uncomment and click [Block].
![Uncomment SQL At Once](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/D7FB70A848143FCF699A858D5AF16EFA.jpg)
5. On the main menu bar, **Edit**>**Uncomment Block**. Or, simply click [Uncomment Block] on the Toolbar or press Shift+Ctrl+-.
6. Check if it is done successfully.
![Check Uncommented Blocks](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/42D4674C00D504D9C114B9C46AD56F14.jpg)


## Set SQL Alignment Options

This section explains how to set SQL Alignment Options.

1. Connect to database.
2. On the main menu bar, go to **Tool**>**SQL Alignment Options**. Or, simply click [SQL Alignment Options] on the Toolbar.
![Set SQL Alignment Options](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/0CABFDD68E1AFCB499AB4BB73D495DB4.jpg)
- Normal : Set symbols to uppercase/lowercase, clear comment, no space, and separator for keywords.
- Line Break : Set where to place line breaks.
- Space : Set to remove unnecessary whitespace, spaces around operators, spaces around commas, and spaces around brackets.
- Stored Procedure : Set to align variable declaration and conditional statement, and line break and indent for parameters.

