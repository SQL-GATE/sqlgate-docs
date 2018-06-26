---
id: 0209-work-on-object-explorer
title: Work on Object Explorer
sidebar_label: Work on Object Explorer
---

## Search for Object

This section explains how to use **Search for Object**.

1. Connect to database.
2. On the main menu, go to **View**>**Search for Object**. Or, simply click [Search for Object] in Toolbar.
3. Enter the name of the object and select a constraint.
4. Press Enter, or click [Search].
5. On the grid, you will see the result that fits the constraint.

![Search for Object](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/object-searchPanel.png)

6. Double-click the grid or press F4.
7. Check details of the searched objects.

![Check details of the searched objects.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/object-searchPanelDetail.png)


## Change Data Value on Field

This section explains how to change values in data.

1. Connect to database.
2. On the main menu bar, go to **View**>**Object Explorer**. Or, click [Object Explorer] on the View Toolbar.
3. Select an object on a table.
4. On a data tab, click a row to make changes and enter value.
5. Click [OK].
6. Click [Refresh] and check the result.

![Change Data Value on Field](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/object-searchPanelDetailData.png)

## Object Tabs in Object Explorer and Object Panel

The following are tabs on Object Explorer and Object Panel:

### Table

It includes functions such as view table details of the owner and create, modify, delete tables. 

- Column : You can view details, add, modify, delete, and print column in the table selected. You can also view and modify table comments and column comments.
- Index: You can view details, add, modify, delete, and print index in the table selected.
- Constraints: You can view details, add, modify, delete, and print constraints in the table selected.
- Trigger: You can view details, add, modify, delete, enable, disable, compile, and print trigger information in the table selected.
- Data: You can view details, add, modify, delete, and print all the data in the table.
- Script : You can view the script created in the selected table and copy to clipboard, save, and send to SQL Editor.
- Privilege: You can view, grant, revoke, and print privilege.
- Partitions: If the selected table has partitions, you can view information of partitions.
- Subpartition: If the selected table is in subpartition, you can view information of subpartitions.
- Properties: You can view options and storage information of the tables selected.
- Referential Constraints : You can view referential constraints of the tables selected.


### Table Context Menu
| Button                                                                                                                                           | Instruction                | Action                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------- | -------------------------------------------------------------------------------------------- |
| ![description pane, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-descriptionPane.png)      | Open Description Pane (F4) | Open the description pane of the table selected.                                             |
|                                                                                                                                                  | Add                        | Add columns, constraints, index, and trigger to the selected table                           |
| ![add/new, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-add.png)                           | New Table                  | Add a new table.                                                                             |
| ![new synonym, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-modify.png)                    | Change                     | Make changes in columns and comments in the selected table.                                  |
| ![delete, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-delete.png)                         | Delete                     | Delete a table.                                                                              |
|                                                                                                                                                  | Rename                     | Change the name of the selected table.                                                       |
|                                                                                                                                                  | Copy                       | Copy only table structure or table structure and data.                                       |
| ![edit comment, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-editComment.png)              | Edit Comment               | Edit comments for tables and columns in the selected tables.                                 |
|                                                                                                                                                  | Row Count                  | Show number of records in tables selected.                                                   |
| ![analyze, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-analyze.png)                       | Analyze                    | Show statistics analysis in the table selected.                                              |
| ![new synonym, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-newSynonym.png)                | New Synonym                | Create a synonym of the table selected.                                                      |
|                                                                                                                                                  | Object Reports             | Print table information in reports.                                                          |
|                                                                                                                                                  | Script Report              | Print reports of table script.                                                               |
| ![export data, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-exportData.png)                | Export Data                | From the selected table, export data to DBase, text, Excel, SQL script, or MS Access File.   |
| ![import data, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-importData.png)                | Import Data                | From the selected table, import data from DBase, text, Excel, SQL script, or MS Access File. |
| ![view/edit privilege, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-viewEditPrivilege.png) | View/Edit Privilege        | View and edit privilege of the selected table.                                               |
|                                                                                                                                                  | Empty Recycle Bin          | Empty dropped tables in the Recycle Bin.                                                     |
| ![filter, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-filter.png)                         | Filter                     | Use Filter window to sort items.                                                             |
| ![refresh, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-refresh.png)                       | Refresh                    | Refresh.                                                                                     |


### View

You can view list and details of each view, create, modify, delete.

- Column : You can view, add, and print column information and view comments in the view.
- Data : You can add, modify, delete, and print data to the selected view.
- Script : You can view, copy and save to clipboard, and send the created script to SQL Editor.
- Privilege : You can view, grant, revoke, and print privilege in the view.
- Trigger : You can view, add, and delete trigger in the view.
- Error : You can view the list of errors that occurred while compiling views.


### View Context Menu

| Button                                                                                                                                           | Instruction               | Action                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------- | --------------------------------------- |
| ![description pane, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-descriptionPane.png)      | Open Description Pan (F4) | Open Description Pane in the view.      |
| ![add/new, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-add.png)                           | New View                  | Create a new View.                      |
| ![modify, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-modify.png)                         | Change                    | Change contents in the table View.      |
| ![delete, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-delete.png)                         | Delete                    | Delete the selected View.               |
|                                                                                                                                                  | Rename                    | Change the name of the selected view.   |
| ![compile/rebuild, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-compileRebuild.png)        | Compile View              | Recompile the selected Views.           |
|                                                                                                                                                  | Row Count                 | Show record count of the selected view. |
| ![new synonym, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-newSynonym.png)                | New Synonym               | Create a synonym of the selected View.  |
|                                                                                                                                                  | Object Reports            | Print reports of the View information.  |
|                                                                                                                                                  | Script Reports            | Print reports of the View script.       |
| ![view/edit privilege, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-viewEditPrivilege.png) | View/Edit Privilege       | View and edit privilege of the view.    |
| ![filter, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-filter.png)                         | Filter                    | Use Filter window to sort items.        |
| ![refresh, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-refresh.png)                       | Refresh                   | Refresh.                                |



### Trigger
You can view list of Triggers and details of each Triggers, and create, modify, and delete Triggers. 

- Information: You can view details of the Trigger.
- Script: You can view created script, copy and save to clipboard, and send to SQL Editor.
- Column: You can view column information of the trigger.
- Error: You can view the list of errors that occurred while compiling triggers.

### Trigger Context Menu 

| Button                                                                                                                                    | Instruction        | Action                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ---------------------------------------- |
| ![add/new, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-add.png)                    | New Trigger        | Create a new trigger.                    |
| ![modify, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-modify.png)                  | Change             | Change contents of the trigger.          |
| ![delete, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-delete.png)                  | Delete             | Delete the selected trigger.             |
| ![compile/rebuild, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-compileRebuild.png) | Compile            | Recompile the selected triggers.         |
| ![enable, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-enable.png)                  | Enable             | Enable the selected trigger.             |
| ![disable, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-disable.png)                | Disable            | Disable the selected trigger.            |
| ![sql editor, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-sqlEditor.png)           | Send to SQL Editor | Send the selected trigger to SQL Editor. |
|                                                                                                                                           | Object Reports     | Print trigger information in reports.    |
| ![filter, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-filter.png)                  | Filter             | Use filter window to sort items.         |
| ![refresh, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-refresh.png)                | Refresh            | Refresh.                                 |


### Index

You can view Index list and details of each index, and create, alter and delete Index.

- Column: You can view details of columns of the Index.
- Properties: You can view Index option and storage information.
- Partition: You can view partition information of the partitioned Index.
- Script: You can view index script, copy to clipboard, save, and send to SQL Editor.

### Index Context Menu

| Button                                                                                                                                    | Instruction    | Action                             |
| ----------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ---------------------------------- |
| ![add/new, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-add.png)                    | New Index      | Create a new Index.                |
| ![modify, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-modify.png)                  | Change         | Change contents in the Index.      |
| ![delete, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-delete.png)                  | Delete         | Delete Index.                      |
| ![compile/rebuild, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-compileRebuild.png) | Rebuild        | Rebuild Index.                     |
|                                                                                                                                           | Rename         | Change the name of the Index.      |
|                                                                                                                                           | Object Reports | Print Index information in report. |
|                                                                                                                                           | Script Reports | Print Index script in report.      |
| ![filter, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-filter.png)                  | Filter         | Use filter window to sort items.   |
| ![refresh, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-refresh.png)                | Refresh        | Refresh.                           |


### Function/Procedure/Package

You can view Function/Procedure/Package list and view details of each Function/Procedure/Package, and create, change, and delete Function/Procedure/Package.

- Script: You can view script, copy to clipboard, save, and send to SQL Editor.
- Variables: You can view Variables of the selected object.
- Use: You can see what is used by the selected object. 
- Used By: You can see who used the selected object.
- Error: You can view the list of errors that occurred during compiling selected objects.
- Privilege: You can view, grant, revoke, and print privilege of the selected object.

### Function/Procedure/Package Context Menu

| Button                                                                                                                            | Instruction                    | Action                                           |
| --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | ------------------------------------------------ |
| ![add/new, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-add.png)            | New Function/Procedure/Package | Create a new Object.                             |
| ![modify, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-modify.png)          | Modify                         | Modify contents of the Object.선택한 개체의 내용을 수정합니다. |
| ![delete, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-delete.png)          | Delete                         | Delete Object.                                   |
|                                                                                                                                   | Compile                        | Compile Objects.                                 |
| ![Run SQL, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-runSQL.png)      | Run                            | Run Objects.                                     |
| ![new synonym, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-newSynonym.png) | New Synonym                    | Generate new synonym for selected objects.       |
|                                                                                                                                   | Script Reports                 | Print Object script in report.                   |
|                                                                                                                                   | View/Edit Privilege            | You can view and edit Privilege.                 |
| ![filter, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-filter.png)          | Filter                         | Use filter window to sort items.                 |
| ![refresh, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-refresh.png)        | Refresh                        | Refresh.                                         |


### Sequence

You can view Sequence list and the details of each Sequence, and create, alter, and delete Sequences.

- Information: You can view details of the sequence.
- Privilege: You can view privileges of the sequence. If you have the administrative privileges, you can grant or revoke privileges.
- Script: You can see the generated script and copy to Clipboard, save, and send to SQL Editor.

### Sequence Context Menu

| Button                                                                                                                            | Instruction          | Action                                   |
| --------------------------------------------------------------------------------------------------------------------------------- | -------------------- | ---------------------------------------- |
| ![add/new, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-add.png)            | New Sequence         | Add a new Sequence.                      |
| ![modify, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-modify.png)          | Alter                | Alter contents of the Sequence.          |
| ![delete, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-delete.png)          | Delete               | Delete Sequence.                         |
| ![new synonym, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-newSynonym.png) | New Synonym          | Generate a new Synonym for the Sequence. |
|                                                                                                                                   | Object Reports       | Print Sequence information in report.    |
|                                                                                                                                   | Script Report        | Print Sequence Script in report.         |
|                                                                                                                                   | View/Edit Privileges | View and edit Sequence Privileges.       |
| ![filter, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-filter.png)          | Filter               | Use filter window to sort items.         |
| ![refresh, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-refresh.png)        | Refresh              | Refresh.                                 |



### Constraints

You can view constraints of the owner and details of each constraint, and create, alter, and drop constraints.

- Information: You can view details of the constraints.
- Column: You can view information of columns of the constraints.
- Script: You can view, add, and drop constraints.

### Constraints Context Menu

| Button                                                                                                                     | Instruction    | Action                                         |
| -------------------------------------------------------------------------------------------------------------------------- | -------------- | ---------------------------------------------- |
| ![add/new, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-add.png)     | New Constraint | Add a new Constraint.                          |
| ![modify, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-modify.png)   | Alter          | Change contents of the Constraint.             |
| ![delete, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-delete.png)   | Drop           | Drop Constraint.                               |
| ![enable, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-enable.png)   | Enable         | Enable Constraint.                             |
| ![disable, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-disable.png) | Disable        | Disable Constraint.                            |
|                                                                                                                            | Object Reports | Print information of the Constraint in report. |
|                                                                                                                            | Script Report  | Print Script of the Constraint in report.      |
| ![filter, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-filter.png)   | Filter         | Use filter window to sort items.               |
| ![refresh, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-refresh.png) | Refresh        | Refresh.                                       |


### Synonym

You can view the list of Synonym and details of each Synonym, and create, alter, and drop Synonyms.

- Object Name: The name of the original object name of the selected Synonym.
- Object Type: The original object type of the selected Synonym.
- Synonym Owner: The Owner information of the selected Synonym. If it is a Public synonym, it will be set as Public.
- Database Link: The link information of the selected Synonym.

### Synonym Context Menu

| Button                                                                                                                     | Instruction | Action                           |
| -------------------------------------------------------------------------------------------------------------------------- | ----------- | -------------------------------- |
| ![new synonym, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-add.png) | New Synonym | Create a new Synonym.            |
| ![delete, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-delete.png)   | Drop        | Drop the Synonym.                |
| ![filter, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-filter.png)   | Filter      | Use filter window to sort items. |
| ![refresh, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-refresh.png) | Refresh     | Refresh.                         |


### Job
You can view Job list and details of each Job, and create, drop, run etc.

- Information: You can view information of the selected job.
- WHAT (Run Script): You can view Script when running jobs.
- Script: You can see the generated script of the Job, copy to Clipboard, save, and send to SQL Editor.

### Job Context Menu

| Button                                                                                                                       | Instruction    | Action                           |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------- | -------------------------------- |
| ![add/new, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-add.png)       | New Job        | Create a new Job.                |
| ![delete, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-delete.png)     | Delete         | Delete Job.                      |
| ![Run SQL, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-runSQL.png) | Run            | Run Job.                         |
|                                                                                                                              | Place Online   | Place the selected Job online.   |
|                                                                                                                              | Place Offline  | Place the selected Job offline.  |
|                                                                                                                              | Object Reports | Print Job information in report. |
|                                                                                                                              | Script Report  | Print Job Script in report.      |
| ![filter, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-filter.png)     | Filter         | Use filter window to sort items. |
| ![refresh, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-refresh.png)   | Refresh        | Refresh.                         |


### Database Link

You can view Database Link list and details of each Database Link, and create, alter, and drop Database Link.

- Information: You can view details of Database Link.
- Script: You can see the generated script of Database Link, copy to Clipboard, save, and send to SQL Editor.

### Database Link Context Menu
| Button                                                                                                                     | Instruction       | Action                                            |
| -------------------------------------------------------------------------------------------------------------------------- | ----------------- | ------------------------------------------------- |
| ![add/new, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-add.png)     | New Database Link | Create a new Database Link.                       |
| ![modify, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-modify.png)   | Alter             | Change the contents of Database Link.             |
| ![delete, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-delete.png)   | Drop              | Drop Database Link.                               |
|                                                                                                                            | Test              | Testrun the Database Link and show the result.    |
|                                                                                                                            | Object Reports    | Print the information of Database Link in report. |
|                                                                                                                            | Script Report     | Prink Script of Database Link in report.          |
| ![filter, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-filter.png)   | Filter            | Use filter window to sort items.                  |
| ![refresh, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-refresh.png) | Refresh           | Refresh.                                          |


### Materialized View

You can see the list of materialized views, see details of each materialized view, alter, and drop.

- Column: You can view, add, and print column information and comments.
- Information: You can lookup Default Information of the materialized view.
- Privilege: You can see, grant, revoke, and print privileges of the materialized view.
- Script: You can see the generated script for the materialized view, copy to Clipboard, save, and send to SQL Editor.

### Materialized View Context Menu
| Button                                                                                                                                           | Instruction         | Action                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------- | --------------------------------------------------- |
| ![delete, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-delete.png)                         | Drop                | Drop the materialized view.                         |
|                                                                                                                                                  | Compile             | Compile the materialized view.                      |
|                                                                                                                                                  | New Synonym         | Create a synonym of the materialized view.          |
| ![view/edit privilege, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-viewEditPrivilege.png) | View/Edit Privilege | View and edit privileges of the materialized views. |
| ![filter, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-filter.png)                         | Filter              | Use filter window to sort items.                    |
| ![refresh, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-refresh.png)                       | Refresh             | Refresh.                                            |

### Materialized View Log

You can see the list of materialized view logs, see list of each materialized view log, alter, and drop.

- Information: You can see Default Information of the materialized view logs.
- Script: You can see the generated script for the materialized view log, copy to Clipboard, save, and send to SQL Editor.

### Materialized View Log Context Menu

| Button                                                                                                                     | Instruction | Action                           |
| -------------------------------------------------------------------------------------------------------------------------- | ----------- | -------------------------------- |
| ![delete, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-delete.png)   | Drop        | Drop the materialized view log.  |
| ![filter, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-filter.png)   | Filter      | Use filter window to sort items. |
| ![refresh, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-refresh.png) | Refresh     | Refresh.                         |


### Recycle Bin

You can keep the dropped objects temporarily. Objects can be restored or removed from here.

- Information: You can see information of the object in the Recycle Bin.

### Recycle Bin Context Menu

| Button                                                                                                                     | Instruction | Action              |
| -------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------------- |
| ![empty, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-empty.png)     | Empty       | Empty the Object.   |
| ![restore, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-restore.png) | Restore     | Restore the Object. |
| ![refresh, icon](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-refresh.png) | Refresh     | Refresh.            |



### Restore Recycle Bin

This section explains how to restore object from the Recycle Bin.

1. Connect to Database.
2. On the main menu bar, go to **View**>**Object Explorer**. Or, simply click [Object Explorer] on the View Toolbar.
3. On tables of Object Explorer, right-click and click [New Table].

![how to restore object from the Recycle Bin.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/objectPanel-recycleBin-01.png)

4. Click ‘Ok’ to create a new table.

![how to restore object from the Recycle Bin.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/objectPanel-recycleBin-02.png)

5. Check the executed SQL and click [Ok].

6. On Object Explorer, check the created table.
7. On the created table, right-click and select [Drop].
8. Select a table to drop and select [OK].

![how to restore object from the Recycle Bin.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/objectPanel-recycleBin-03.png)

9. Click [Refresh]. Check the dropped items in the Object Explorer Recycle Bin.
10. Right-click the table in the Recycle Bin and select [Restore].

![how to restore object from the Recycle Bin.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/objectPanel-recycleBin-04.png)

11. Check the restored tables.


### Filter Objects

This section how to filter Objects.

1. Connect to Database.
2. On the main menu bar, go to **View**>**Object Explorer**. Or, simply click [Object Explorer] on the View Toolbar.
3. Right-click on a table object in Object Explorer and select _Filter_.

![Filter Objects](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/objectPanel-filter-01.png)

4. On the filter window, enter a name of filter and select conditions.

![Filter Objects](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/objectPanel-filter-02.png)

**Filter Condition**
- [none] : Give no name to the object.
- In : Search with the name entered.
- Not In : Search without the name entered.
- Starts with : Search for synonyms that starts with the name entered.
- Includes : Search for synonyms that includes the name entered.
- Ends with : Search for synonyms that ends with the name entered.
- Not Includes : Search for synonyms that does not include the name entered.
5. Click [Test]. Check the result in Test SQL Tab.
6. Click [Ok] and confirm result.

![Filter Objects](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/objectPanel-filter-03.png)

7. To take out filter, click [Reset] and [Ok].


### Display Always On Top

This section explains how to display Object Explorer always on top.

1. Connect to Database.
2. On the main menu bar, go to **View**>**Object Explorer**. Or, simply click [Object Explorer] on the View Toolbar.
3. As Object Explorer opens, select *Always On Top*.
4. Object Explorer will open in new window.

![Object Tabs in Object Explorer](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/objectExplorer-alwaysOnTop.png)
