---
id: 0205-procedure-compile
title: Run and Compile Procedures
sidebar_label: Run and Compile Procedures
---


## Use Code AutoComplete to Type Less Codes

This section explains how to complete codes by typing fewer codes.

1. Connect to database.
2. On the main menu bar, go to **File**>**New**>**PL/SQL Editor**. Or, simply click [PL/SQL Editor] on the New Toolbar.
3. Enter procedure.
4. As you enter procedure, the values you put in that are declared as variables or object variables PL/SQL Editor will be autocompleted.
5. Select or double-click a variable or an object variable.
6. Check the result.

![Use Code AutoComplete to Type Less Codes](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/precedure/procedures-autocomplete.png)

> Note: Navigator analyzes runtime code and shows codes as object variables, variables, and tree view.


## Find Error in Procedure and Compile

This section explains how to find error in procedure and compile.

1. Connect to database.
2. On the main menu bar, go to **File**>**New**>**PL/SQL Editor**. Or, click [PL/SQL Editor] on the New Toolbar.
3. Write procedure.
4. On the main menu bar, go to **Query**>**Run**. Or, click [Run] or press F5.
5. If there is an error, it shows on the error tab. In the editor, the line that includes the error will highlighted.
6. Check and correct the error.
7. Click [Run] or press F5.
8. On the Status bar, check if the message reads "Procedure created".

![Find Error in Procedure and Compile](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/precedure/procedure-compile-find-error.png)

## Run Procedure and Check The Result Value

This section explains how to run procedure and check the result value.

1. Connect to database.
2. On the main menu bar, go to **File**>**New**>**PL/SQL Editor**. Or, click [PL/SQL Editor] on the New Toolbar.
3. Write Procedure.

![Run Procedure and Check The Result Value](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/precedure/procedure-check-result-01.png)

4. On the main menu bar, go to **Query**>**Run** to compile the procedure. Or, click [Run] on Tool Toolbar or press F5.
5. If it is compiled successfully, click [Run Procedure].

![Run Procedure and Check The Result Value](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/precedure/procedure-check-result-02.png)

6. Input parameter values and then click [Run SQL] or press F5.

![Run Procedure and Check The Result Value](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/precedure/procedure-check-result-03.png)

7. Check the result on SQL DBMS OUTPUT tab.



## View Version While Coding Procedure

This section explains how to view version history while coding procedure.

1. Connect to database.
2. On the main menu bar, go to **File**>**New**>**PL/SQL Editor**. Or, click [PL/SQL Editor] on the New Toolbar.
3. Write procedure.
4. On the main menu bar, go to **View**>**SQL History**. Or, click [SQL History] on the Toolbar or press F8.
5. Click [Procedure/Function].
6. Click [Version History] to view contents on procedure. Double-click or press Ctrl+Enter to add to the editor.

![View Version While Coding Procedure](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/precedure/procedure-view-version.png)


## Recompile Objects

### Check Procedure with Error

Check the procedure where error occurred.

1. Connect to database.
2. On the main menu bar, go to **View**>**Object Explorer**.
3. Click an object in the procedure.
4. Check the procedure with errors.

![Procedure Recompile Objects](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/precedure/precedure-recompile-01.png)


### Debug and Recompile Procedure with Error

This section explains how to debug or recompile the procedure with errors.

1. Connect to database.
2. On the main menu bar, go to **View**>**Object Explorer**.
3. Click an object in a procedure.
4. Right-click on the procedure error occurred and click [Modify].
5. PL/SQL Editor will run. Modify the errors.
6. On the main menu bar, go to **Tools**>**Recompile Object**. Or, simply click [Recompile Object] on the Toolbar.

![Procedure Recompile Objects](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/precedure/precedure-recompile-02.png)

7. Specify a schema and procedure and click [Search].
8. Specify a procedure to recompile and click [Compile].

![Procedure Recompile Objects](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/precedure/precedure-recompile-03.png)

9. On the window that asks “Do you want to compile the selected PROCEDURE?”, click [Yes].
10. Check the result.

![Procedure Recompile Objects](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/precedure/precedure-recompile-04.png)
