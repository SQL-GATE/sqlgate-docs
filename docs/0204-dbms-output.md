---
id: 0204-dbms-output
title: DBMS_OUTPUT
sidebar_label: DBMS_OUTPUT
---

## Run query and see the DBMS_OUTPUT result
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)


DBMS_OUTPUT is a message buffer package provided by Oracle database.  
You can fetch messages saved in procedures, functions, triggers, etc. from DBMS_OUTPUT buffer.

This section explains how to run query and see the results in DBMS_OUTPUT.

1. Connect to Oracle database.
2. On the main menu bar, select **Files**>**New**>**PL/SQL Editor**. Or, simply click [PL/SQL Editor] on the New Toolbar.
3. Enter procedure.
4. Click [Run] or press F5.
5. Check the query result on DBMS OUTPUT tab.

![DBMS_OUTPUT view](https://resource.sqlgate.com/resource/captures/DBMS_OUTPUT/dbmsoutput-plsql-editor.png)


## Toolbar of DBMS OUTPUT Tab
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

| Button                                                                                                                                                                                                                           | Instruction                | Shortcut keys | Action                                                                                                       |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------ |
| ![Enables/disables DBMS OUTPUT.](https://resource.sqlgate.com/resource/captures/DBMS_OUTPUT/icon-sql-editor-turnOffDBMSOutput.png)                                                                            | Turn off DBMS OUTPUT       |               | Disables DBMS OUTPUT.                                                                                        |
| ![Enables/disables DBMS OUTPUT.](https://resource.sqlgate.com/resource/captures/DBMS_OUTPUT/icon-sql-editor-turnOffDBMSOutput.png)                                                                            | Turn on DBMS OUTPUT        |               | Enables DBMS OUTPUT.                                                                                         |
| ![Refreshes the result.](https://resource.sqlgate.com/resource/captures/DBMS_OUTPUT/icon-sql-editor-refreshDBMSOutput.png)                                                                                    | Refresh DBMS OUTPUT Result |               | Refreshes the result.                                                                                        |
| ![Set the size of DBMS OUTPUT buffer. Oracle databases support from 2KB to 1MB. The default is set to 10000KB.](https://resource.sqlgate.com/resource/captures/DBMS_OUTPUT/icon-sql-editor-setBufferSize.png) | Set Buffer Size            |               | Set the size of DBMS OUTPUT buffer. Oracle databases support from 2KB to 1MB. The default is set to 10000KB. |
| ![Clears off the output.](https://resource.sqlgate.com/resource/captures/DBMS_OUTPUT/icon-sql-editor-clearOutput.png)                                                                                         | Clear All                  |               | Clears off the output.                                                                                       |
| ![Saves the result as set file type.](https://resource.sqlgate.com/resource/captures/DBMS_OUTPUT/icon-sql-editor-saveAsFile.png)                                                                              | Save as File               |               | Saves the result as set file type.                                                                           |


- You can set refresh interval.
- If you check ‘Auto scroll to last line’, it will take you to the last line of the query run result.
