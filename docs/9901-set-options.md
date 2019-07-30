---
id: 9901-set-options
title: Set Options
sidebar_label: Set Options
---

## General
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero,cubrid>)

![option general](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/option/option-general.png)
- Theme: Select a theme. We provide two themes: Default and Dream.
- Automatic Update: Check for updates each time you start the program.
- Select a Language: Select a language for the program. We currently support Korean, English, Japanese, Chinese, French, German, and Spanish.
- Getting Started Pane: Select a window to open each time you start the program. SQL Editor is set to open as default.
- SQL Editor: Open SQL Editor each time you start the program.
- PL/SQL Editor: Open PL/SQL Editor each time you start the program.
- Object Explorer: Open Object Explorer each time you start the program.
- Display connection info in TaskBar: Display session ID on the Task Bar.

## {DATABASE} Configuration
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero,cubrid>)

You can configure the number of rows, Execution Plan Table, users, auto commit. 

![option oracleConfiguration](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/option/option-oracleConfiguration.png)

- Options for Fetching Records
- Fetch all Records : Fetch all records after running query.
- Query Options
- Use Auto Commit : Check to commit automatically when running DML command.
- Execution Plan Table Name : This name is used to enable Execution Plan on SQL Editor. When using other user's table, enter 'User - Name or Table name'.
- DBMS OUTPUT
- Default Buffer Size : Set the buffer size of the information of DBMS OUTPUT. 15,000 is the default size.
- Keep Connection : Check to keep the connection throughout the set time range.

## SQL Editor
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero,cubrid>)

You can set the number of tabs, editor option, alignment options, and options for storing history.

![option SQLEditor](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/option/option-SQLEditor.png)

- Editor Option : Set options for Query Editor. Click [Options…] to open the window to set options.
- SQL Alignment Options: Customize SQL alignment options. Click [Options…] to open the window to set options.
- Current SQL Separator: Set to use either semicolon or carraige return as a SQL separator.
- Auto Save SQL History : Select to save SQL.
- Maximum Save Count of SQL History
- Unlimited: Save without limit
- Count: Save up to the entered value.
- Store point-in-time of SQL History
- After Executing SQL: Save the result of queries that have run successfully.
- Before Executing SQL: Save all SQL statements before running queries.
- Tab Count of Editor Startup: The number of tabs automatically added when running SQL Editor.
- Show Grid at Startup: Select to show Grid when running SQL Editor. If not selected, the Grid will show after running the query.
- Display SQL Hint on Tab: If selected, you will see SQL by placing the cursor on the tab.



### General

![option SQLEditor general](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/option/option-SQLEditor-general.png)

You can set editor general options.


### Font

Choose a font.

![option SQLEditor font](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/option/option-SQLEditor-font.png)

Select a font for the Editor. If you have problems displaying characters, change the character set.



### Highlight

You can set highlight options.

![option SQLEditor highlight](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/option/option-SQLEditor-highlight.png)

Element : Select one element and change font, font color, etc. Also, when you select a sentence from the editor below, highlight is automatically selected from ‘Element’.



### Code Template

You can add, modify, and delete code template.

![option SQLEditor codeTemplate](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/option/option-SQLEditor-codeTemplate.png)

View, add, modify, and delete code template. Press Ctrl+J on the Editor to open template.



### Keyword Template

You can add, modify, delete keyword template.

![option SQLEditor keywordTemplate](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/option/option-SQLEditor-keywordTemplate.png)

Select [Table AutoComplete] on AutoComplete tab.



### AutoComplete

Set AutoComplete Features.
![option SQLEditor autoComplete](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/option/option-SQLEditor-autoComplete.png)

- AutoComplete
- Code AutoComplete: Contents in code template are automatically completed and displayed.
- Keyword AutoComplete: When you enter 3 or more words on the editor, it automatically generates the statement.
- Reuse SQL: It displays statements in the History that are checked to reuse.
- Field AutoComplete: After the table alias name, the field autocomplete is displayed.
- Variables AutoComplete: It displays values that are declared as variables or object variables on PL/SQL Editor.
- Object Variable AutoComplete: On SQL Editor and PL/SQL Editor, press ‘Ctrl+Shift+H’ to open Object Variables AutoComplete window.
- AutoComplete of Keyword Case Change: It displays keywords that are completed by keyword autocomplete according to their cases.
- AutoComplete for changing case of Object Name: It displays keywords that are completed by table autocomplete according to their cases.
- Table AutoComplete: Enter characters after FROM/INTO/SET to display object autocomplete.
- If there are many objects, you can choose to display a portion.


## Object Explorer
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero,cubrid>)

Select objects to show in Object Explorer and Object Panel.

![option objectExplorer](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/option/option-objectExplorer.png)

- Bring to front: Select to run Object Explorer on a separate window.
- Run query in the background: Select to run query in the background.
- Object to show: Select objects to show in Object Explorer and Object Panel.
- Tab Style: Set styles of tab. Select from Multi-line Tab or Single-line Tab.


## Grid
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero,cubrid>)

Change grid style.

![option grid](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/option/option-grid.png)

- Display NULL: You can set display NULL in grid, and set background color.
- Font color of multiple-line: If there is a Carriage Return value, it will show background color.
- Grid Type: You can change grid type. (The current version only supports Office style gird.)
- Grid Style: You can change grid style. The user can change the style.
- Move cursor at vertical scrolling: You can move cursor at vertical scrolling.
- Date Format: You can set date format that is displayed on grid.

## Query Shortcut
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero,cubrid>)

You can set shortcut keys for certain instructions.

![option queryShortcuts](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/option/option-queryShortcuts.png)

Enter SQL to set from Alt+1 to 0.



## Convert SQL
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero,cubrid>)

Set the format you would like to convert SQL into. You can set Escape Characters and Separators per language.

![option convertSQL](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/option/option-convertSQL.png)

Option in SQL conversion : Set Escape Language and Separators per language.



## Network
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero,cubrid>)

![옵션_Subscription](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/option/option-subscription.png)

Set network options.