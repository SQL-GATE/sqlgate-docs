---
id: 0205-procedure-compile
title: Run and Compile Procedures
sidebar_label: Run and Compile Procedures
---


## Use Code AutoComplete to Type Less Codes

This section explains to complete codes by typing fewer codes.

1. Connect to database.
2. On the main menu bar, go to **File**>**New**>**PL/SQL Editor**. Or, simply click [PL/SQL Editor] on the New Toolbar.
3. Enter procedure.
4. As you enter procedure, the values you put in that are declared as variables or object variables PL/SQL Editor will be autocompleted.
5. Select or double-click a variable or an object variable.
6. Check the result.

![Use code autocomplete](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/B921C3538F4C965F2F1380D1F4696857.jpg)

> Note: Navigator analyzes runtime code and shows codes as object variables, variables, and tree view.


## Find Error in Procedure and Compile

This section explains how to find error in procedure and compile.

1. Connect to database.
2. On the main menu bar, go to **File**>**New**>**PL/SQL Editor**. Or, click [PL/SQL Editor] on the New Toolbar.
3. Write procedure.
4. On the main menu bar, go to **Query**>**Run**. Or, click [Run] or press F5.
5. If there is an error, it shows on the error tab. In the editor, the line that includes the error will highlighted.

![Detect error in procedure and compile](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/E8E787DC5BAB59ACB13F0C5AB62C01AD.jpg)

6. Check and correct the error.
7. Click [Run] or press F5.
8. On the Status bar, check if the message reads "Procedure created".


## Run Procedure and Check The Result Value

This section explains how to run procedure and check the result value.

1. Connect to database.
2. On the main menu bar, go to **File**>**New**>**PL/SQL Editor**. Or, click [PL/SQL Editor] on the New Toolbar.
3. Write Procedure.

![Write procedure](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/2EF9876F89B86245DCB3C01B860A30B8.jpg)

4. On the main menu bar, go to **Query**>**Run** to compile the procedure. Or, click [Run] on Tool Toolbar or press F5.
5. If it is compiled successfully, click [Run Procedure].

![Compile procedure and run](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/560AF209EF88DD824B74ECD43014733A.jpg)

6. Input parameter values and then click [Run SQL] or press F5.

![Run procedure and enter parameter](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/BA30B22D2DFEDD6935FEC62487BBE353.jpg)

7. Check the result on SQL DBMS OUTPUT tab.

![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/DB494295EA66D5E92B404D70ED835A0D.jpg)[Check result of DBMS_OUTPUT]



## View Version While Coding Procedure

This section explains how to view version history while coding procedure.

1. Connect to database.
2. On the main menu bar, go to **File**>**New**>**PL/SQL Editor**. Or, click [PL/SQL Editor] on the New Toolbar.
3. Write procedure.
4. On the main menu bar, go to **View**>**SQL History**. Or, click [SQL History] on the Toolbar or press F8.
5. Click [Procedure/Function].
6. Click [Version History] to view contents on procedure. Double-click or press Ctrl+Enter to add to the editor.

![View Version History](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/4AB2A77BDE41CD2B82656B4555F0DC8A.jpg)


## Recompile Objects


### Check Procedure with Error

Check the procedure where error occurred.

1. Connect to database.
2. On the main menu bar, go to **View**>**Object Explorer**.
3. Click an object in the procedure.
4. Check the procedure with errors.

![Check procedure with error](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/4718C54091BA0F0F9FD5CC57BB655A62.jpg)


### Debug and Recompile Procedure with Error

This section explains how to debug or recompile the procedure with errors.

1. Connect to database.
2. On the main menu bar, go to **View**>**Object Explorer**.
3. Click an object in a procedure.
4. Right-click on the procedure error occurred and click [Modify].
5. PL/SQL Editor will run. Modify the errors.

![Modify errors in the procedure](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/4718C54091BA0F0F9FD5CC57BB655A62.jpg)

6. On the main menu bar, go to **Tools**>**Recompile Object**. Or, simply click [Recompile Object] on the Toolbar.

![Select Recompile Object](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/12060563A79FCA475E1FE621105678D3.jpg)

7. Specify a schema and procedure and click [Search].
8. Specify a procedure to recompile and click [Compile].

![Recompile Objects](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/43589961670C31AC576D6DD1F7AB767E.jpg)

9. On the window that asks “Do you want to compile the selected PROCEDURE?”, click [Yes].
10. Check the result.

![Check the recompile result](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/310B7CCB52D883CF099FCE3E7B3F6F7D.jpg)