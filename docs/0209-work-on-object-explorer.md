---
id: 0209-work-on-object-explorer
title: Work on Object Explorer
sidebar_label: Work on Object Explorer
---

## Search for Object

This section explains how to use ‘Search for Object’.

1. Connect to database.
2. On the main menu, go to **View**>**Search for Object**. Or, simply click [Search for Object] in Toolbar.
3. Enter the name of the object and select a constraint.
4. Press Enter, or click [Search].
5. On the grid, you will see the result that fits the constraint.

![Search for Object](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/0297D718881B6D3D0D7FE9508E597F99.jpg)

6. Double-click the grid or press F4.
7. Check details of the searched objects.

![Check details of searched objects](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/6E4F87B1D5E56901DFD908D2021B8C8A.jpg)




## Change Data Value on Field

This section explains how to change values in data.

1. Connect to database.
2. On the main menu bar, go to **View**>**Object Explorer**. Or, click [Object Explorer] on the View Toolbar.
3. Select an object on a table.
4. On a data tab, click a row to make changes and enter value.
5. Click [OK].

![Change data value on field](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/7090CBC8F695B45EADCFC5C4144023EA.jpg)

6. Click [Refresh] and check the result.



## Object Tabs in Object Explorer

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
| Button | Instruction | Action |
| ---- | ------ | ---- |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/BB57B82F285D3D0D99FD94E6DD7404AE.jpg) | Open Description Pane (F4) | Open the description pane of the table selected. |
| | Add | Add columns, constraints, index, and trigger to the selected table |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/4E794ECDF9A9A6CE1A3F7F2B905D8474.jpg) | New Table | Add a new table. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/22BADBA0889559D954EFE15BFB788A56.jpg) | Change | Make changes in columns and comments in the selected table. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/A4056E77B45DF02904F067CC1024D3BC.jpg) | Delete | Delete a table. |
| | Rename | Change the name of the selected table. |
| | Copy | Copy only table structure or table structure and data. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/FF95CA4F223D6ED5311213F86C43CD76.jpg) | Edit Comment | Edit comments for tables and columns in the selected tables. |
| | Row Count | Show number of records in tables selected. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/D888F3BF6BC75F77CCDFFC83BA4FC110.jpg) | Analyze | Show statistics analysis in the table selected. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/5ED29F6169D25C9BAB22B725E47C1D29.jpg) | New Synonym | Create a synonym of the table selected. |
| | Object Reports | Print table information in reports. |
| | Script Report | Print reports of table script. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/A3843F23BC7E4110472A6FBBC394D96C.jpg) | Export Data | From the selected table, export data to DBase, text, Excel, SQL script, or MS Access File. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/B79CB570FBE283D2D7305B11C9D4CB26.jpg) | Import Data | From the selected table, import data from DBase, text, Excel, SQL script, or MS Access File. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/4012E0BF260A3291BD82D277C9970130.jpg) | View/Edit Privilege | View and edit privilege of the selected table. |
| | Empty Recycle Bin | Empty dropped tables in the Recycle Bin. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/5C5458006A8A50CDAA7B54170AC4BAF6.jpg) | Filter | Use Filter window to sort items. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/FEAE30BAC133482B779F3F9A5A50505D.jpg) | Refresh | Refresh. |

### View

You can view list and details of each view, create, modify, delete.

- Column : You can view, add, and print column information and view comments in the view.
- Data : You can add, modify, delete, and print data to the selected view.
- Script : You can view, copy and save to clipboard, and send the created script to SQL Editor. // The created script can be viewed, copied and saved to clipboard, and sent to SQL Editor.
- Privilege : You can view, grant, revoke, and print privilege in the view.
- Trigger : You can view, add, and delete trigger in the view.
- Error : You can view the list of errors that occurred while compiling views.


### View Context Menu

| Button | Instruction | Action |
| ---- | ------ | ---- |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/BB57B82F285D3D0D99FD94E6DD7404AE.jpg) | Open Description Pan (F4) | Open Description Pane in the view. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/4E794ECDF9A9A6CE1A3F7F2B905D8474.jpg) | New View | Create a new View. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/22BADBA0889559D954EFE15BFB788A56.jpg) | Change | Change contents in the table View. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/A4056E77B45DF02904F067CC1024D3BC.jpg) | Delete | Delete the selected View.  |
| | Rename | Change the name of the selected view. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/74BB40DEACEBA1602978CFF34585FBC5.jpg) | Compile View | Recompile the selected Views. |
| | Row Count | Show record count of the selected view. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/5ED29F6169D25C9BAB22B725E47C1D29.jpg) | New Synonym | Create a synonym of the selected View. |
| | Object Reports | Print reports of the View information. |
| | Script Reports | Print reports of the View script. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/4012E0BF260A3291BD82D277C9970130.jpg) | View/Edit Privilege | View and edit privilege of the view. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/5C5458006A8A50CDAA7B54170AC4BAF6.jpg) | Filter | Use Filter window to sort items. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/FEAE30BAC133482B779F3F9A5A50505D.jpg) | Refresh | Refresh. |



### Trigger
You can view list of Triggers and details of each Triggers, and create, modify, and delete Triggers. 

- Information: You can view details of the Trigger.
- Script: You can view created script, copy and save to clipboard, and send to SQL Editor.
- Column: You can view column information of the trigger.
- Error: You can view the list of errors that occurred while compiling triggers.

### Trigger Context Menu 

| Button | Instruction | Action |
| ---- | ------ | ---- |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/4E794ECDF9A9A6CE1A3F7F2B905D8474.jpg) | New Trigger | Create a new trigger. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/22BADBA0889559D954EFE15BFB788A56.jpg) | Change | Change contents of the trigger. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/A4056E77B45DF02904F067CC1024D3BC.jpg) | Delete | Delete the selected trigger. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/EED4E0D728E173FB52817F235571E8A2.jpg) | Compile | Recompile the selected triggers. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/CB7DB0B126F28C4CEAE241266846B258.jpg) | Enable | Enable the selected trigger. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/C416CE53B3AF60FCE9588A1F4BE15FD3.jpg) | Disable | Disable the selected trigger. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/67A13C3F1C3F3EFE5D3ADD9D27A8A73A.jpg) | Send to SQL Editor | Send the selected trigger to SQL Editor. |
| | Object Reports | Print trigger information in reports. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/5C5458006A8A50CDAA7B54170AC4BAF6.jpg) | Filter | Use filter window to sort items. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/FEAE30BAC133482B779F3F9A5A50505D.jpg) | Refresh | Refresh. |


### Index

You can view Index list and details of each index, and create, alter and delete Index.

- Column: You can view details of columns of the Index.
- Properties: You can view Index option and storage information.
- Partition: You can view partition information of the partitioned Index.
- Script: You can view index script, copy to clipboard, save, and send to SQL Editor.

### Index Context Menu

| Button | Instruction | Action |
| ---- | ------ | ---- |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/4E794ECDF9A9A6CE1A3F7F2B905D8474.jpg) | New Index | Create a new Index. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/22BADBA0889559D954EFE15BFB788A56.jpg) | Change | Change contents in the Index. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/A4056E77B45DF02904F067CC1024D3BC.jpg) | Delete | Delete Index. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/EED4E0D728E173FB52817F235571E8A2.jpg) | Rebuild | Rebuild Index. |
| | Rename | Change the name of the Index. |
| | Object Reports | Print Index information in report. |
| | Script Reports | Print Index script in report. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/5C5458006A8A50CDAA7B54170AC4BAF6.jpg) | Filter | Use filter window to sort items. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/FEAE30BAC133482B779F3F9A5A50505D.jpg) | Refresh | Refresh. |


### Function/Procedure/Package

You can view Function/Procedure/Package list and view details of each Function/Procedure/Package, and create, change, and delete Function/Procedure/Package.

- Script: You can view script, copy to clipboard, save, and send to SQL Editor.
- Variables: You can view Variables of the selected object.
- Use: You can see what is used by the selected object. 
- Used By: You can see who used the selected object.
- Error: You can view the list of errors that occurred during compiling selected objects.
- Privilege: You can view, grant, revoke, and print privilege of the selected object.

### Function/Procedure/Package Context Menu

| Button | Instruction | Action |
| ---- | ------ | ---- |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/4E794ECDF9A9A6CE1A3F7F2B905D8474.jpg) | New Function/Procedure/Package | Create a new Object. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/22BADBA0889559D954EFE15BFB788A56.jpg) | Modify | Modify contents of the Object.선택한 개체의 내용을 수정합니다. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/A4056E77B45DF02904F067CC1024D3BC.jpg) | Delete | Delete Object. |
| | Compile | Compile Objects. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/8F4C12B6A4A31B382B79067B6898C060.jpg) | Run | Run Objects. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/5ED29F6169D25C9BAB22B725E47C1D29.jpg)| New Synonym | Generate new synonym for selected objects. |
| | Script Reports | Print Object script in report. |
| | View/Edit Privilege | You can view and edit Privilege. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/5C5458006A8A50CDAA7B54170AC4BAF6.jpg) | Filter | Use filter window to sort items. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/FEAE30BAC133482B779F3F9A5A50505D.jpg) | Refresh | Refresh. |


### Sequence

You can view Sequence list and the details of each Sequence, and create, alter, and delete Sequences.

- Information: You can view details of the sequence.
- Privilege: You can view privileges of the sequence. If you have the administrative privileges, you can grant or revoke privileges.
- Script: You can see the generated script and copy to Clipboard, save, and send to SQL Editor.

### Sequence Context Menu

| Button | Instruction | Action |
| ---- | ------ | ---- |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/4E794ECDF9A9A6CE1A3F7F2B905D8474.jpg) | New Sequence | Add a new Sequence. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/22BADBA0889559D954EFE15BFB788A56.jpg) | Alter | Alter contents of the Sequence. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/A4056E77B45DF02904F067CC1024D3BC.jpg) | Delete | Delete Sequence. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/5ED29F6169D25C9BAB22B725E47C1D29.jpg) | New Synonym | Generate a new Synonym for the Sequence. |
| | Object Reports | Print Sequence information in report. |
| | Script Report | Print Sequence Script in report. |
| | View/Edit Privileges | View and edit Sequence Privileges. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/5C5458006A8A50CDAA7B54170AC4BAF6.jpg) | Filter | Use filter window to sort items. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/FEAE30BAC133482B779F3F9A5A50505D.jpg) | Refresh | Refresh. |



### Constraints

You can view constraints of the owner and details of each constraint, and create, alter, and drop constraints.

- Information: You can view details of the constraints.
- Column: You can view information of columns of the constraints.
- Script: You can view, add, and drop constraints.

### Constraints Context Menu

| Button | Instruction | Action |
| ---- | ------ | ---- |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/4E794ECDF9A9A6CE1A3F7F2B905D8474.jpg) | New Constraint | Add a new Constraint. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/22BADBA0889559D954EFE15BFB788A56.jpg) | Alter | Change contents of the Constraint. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/A4056E77B45DF02904F067CC1024D3BC.jpg) | Drop | Drop Constraint. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/FF45B7329933D542948926DF2BDA77CE.jpg) | Enable | Enable Constraint. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/BC3E10F51B91C828DF81FAB7CF8C6E9B.jpg) | Disable | Disable Constraint. |
| | Object Reports | Print information of the Constraint in report. |
| | Script Report | | Print Script of the Constraint in report. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/5C5458006A8A50CDAA7B54170AC4BAF6.jpg) | Filter | Use filter window to sort items. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/FEAE30BAC133482B779F3F9A5A50505D.jpg) | Refresh | Refresh. |


### Synonym

You can view the list of Synonym and details of each Synonym, and create, alter, and drop Synonyms.

- Object Name: The name of the original object name of the selected Synonym.
- Object Type: The original object type of the selected Synonym.
- Synonym Owner: The Owner information of the selected Synonym. If it is a Public synonym, it will be set as Public.
- Database Link: The link information of the selected Synonym.

### Synonym Context Menu

| Button | Instruction | Action |
| ---- | ------ | ---- |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/4E794ECDF9A9A6CE1A3F7F2B905D8474.jpg) | New Synonym | Create a new Synonym. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/A4056E77B45DF02904F067CC1024D3BC.jpg) | Drop | Drop the Synonym. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/5C5458006A8A50CDAA7B54170AC4BAF6.jpg) | Filter | Use filter window to sort items. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/FEAE30BAC133482B779F3F9A5A50505D.jpg) | Refresh | Refresh. |


### Job
You can view Job list and details of each Job, and create, drop, run etc.

- Information: You can view information of the selected job.
- WHAT (Run Script): You can view Script when running jobs.
- Script: You can see the generated script of the Job, copy to Clipboard, save, and send to SQL Editor.

### Job Context Menu

| Button | Instruction | Action |
| ---- | ------ | ---- |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/4E794ECDF9A9A6CE1A3F7F2B905D8474.jpg) | New Job | Create a new Job. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/A4056E77B45DF02904F067CC1024D3BC.jpg) | Delete | Delete Job. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/8F4C12B6A4A31B382B79067B6898C060.jpg) | Run | Run Job. |
| | Place Online | Place the selected Job online. |
| | Place Offline | Place the selected Job offline. |
| | Object Reports | Print Job information in report. |
| | Script Report | Print Job Script in report. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/5C5458006A8A50CDAA7B54170AC4BAF6.jpg) | Filter | Use filter window to sort items. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/FEAE30BAC133482B779F3F9A5A50505D.jpg) | Refresh | Refresh. |


### Database Link

You can view Database Link list and details of each Database Link, and create, alter, and drop Database Link.

- Information: You can view details of Database Link.
- Script: You can see the generated script of Database Link, copy to Clipboard, save, and send to SQL Editor.

### Database Link Context Menu
| Button | Instruction | Action |
| ---- | ------ | ---- |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/4E794ECDF9A9A6CE1A3F7F2B905D8474.jpg) | New Database Link | Create a new Database Link. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/22BADBA0889559D954EFE15BFB788A56.jpg) | Alter | Change the contents of Database Link. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/A4056E77B45DF02904F067CC1024D3BC.jpg) | Drop | Drop Database Link. |
| | Test | Testrun the Database Link and show the result. |
| | Object Reports | Print the information of Database Link in report. |
| | Script Report | Prink Script of Database Link in report. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/5C5458006A8A50CDAA7B54170AC4BAF6.jpg) | Filter | Use filter window to sort items. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/FEAE30BAC133482B779F3F9A5A50505D.jpg) | Refresh | Refresh. |


### Materialized View

You can see the list of materialized views, see details of each materialized view, alter, and drop.

- Column: You can view, add, and print column information and comments.
- Information: You can lookup Default Information of the materialized view.
- Privilege: You can see, grant, revoke, and print privileges of the materialized view.
- Script: You can see the generated script for the materialized view, copy to Clipboard, save, and send to SQL Editor.

### Materialized View Context Menu
| Button | Instruction | Action |
| ---- | ------ | ---- |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/A4056E77B45DF02904F067CC1024D3BC.jpg) | Drop | Drop the materialized view. |
| | Compile | Compile the materialized view. |
| | New Synonym | Create a synonym of the materialized view. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/4012E0BF260A3291BD82D277C9970130.jpg) | View/Edit Privilege | View and edit privileges of the materialized views. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/5C5458006A8A50CDAA7B54170AC4BAF6.jpg) | Filter | Use filter window to sort items. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/FEAE30BAC133482B779F3F9A5A50505D.jpg) | Refresh | Refresh. |

### Materialized View Log

You can see the list of materialized view logs, see list of each materialized view log, alter, and drop.

- Information: You can see Default Information of the materialized view logs.
- Script: You can see the generated script for the materialized view log, copy to Clipboard, save, and send to SQL Editor.

### Materialized View Log Context Menu

| Button | Instruction | Action |
| ---- | ------ | ---- |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/A4056E77B45DF02904F067CC1024D3BC.jpg) | Drop | Drop the materialized view log. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/5C5458006A8A50CDAA7B54170AC4BAF6.jpg) | Filter | Use filter window to sort items. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/FEAE30BAC133482B779F3F9A5A50505D.jpg) | Refresh | Refresh. |


### Recycle Bin

You can keep the dropped objects temporarily. Objects can be restored or removed from here.

- Information: You can see information of the object in the Recycle Bin.

### Recycle Bin Context Menu

| Button | Instruction | Action |
| ---- | ------ | ---- |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/F5153C3064104035D895E06C611612F1.jpg) | Empty | Empty the Object. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/F6108E77FC0ACBCD9A706A132F229078.jpg) | Restore | Restore the Object. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/FEAE30BAC133482B779F3F9A5A50505D.jpg) | Refresh | Refresh. |



### Restore Recycle Bin

This section explains how to restore object from the Recycle Bin.

1. Connect to Database.
2. On the main menu bar, go to **View**>**Object Explorer**. Or, simply click [Object Explorer] on the View Toolbar.
3. On tables of Object Explorer, right-click and click [New Table]. 개체 탐색기 테이블 개체에서 마우스 오른쪽을 클릭하고 새 테이블을 선택합니다.

![Create new table in Object Explorer](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/B9C479E90C44429D459D6EB06F207AE0.jpg)

4. Click ‘Ok’ to create a new table.

![Create New Table](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/A47F7549C95EEEDBB112BBF5EFD8362C.jpg)

5. Check the executed SQL and click [Ok].

![Check executed SQL](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/11CE587A8A385F878F682A49CA8CC8F4.jpg)

6. On Object Explorer, check the created table.
7. On the created table, right-click and select [Drop].
8. Select a table to drop and select [OK].

![Drop Table](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/516A4368C96DD5B77D0B81C667D37D3E.jpg)

9. Click [Refresh]. Check the dropped items in the Object Explorer Recycle Bin.
10. Right-click the table in the Recycle Bin and select [Restore].

![Restore from Recycle Bin](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/185ECC7EBF6C98377B8320C800CC1FE3.jpg)

11. Check the restored tables.


### Filter Objects

This section how to filter Objects.

1. Connect to Database.
2. On the main menu bar, go to **View**>**Object Explorer**. Or, simply click [Object Explorer] on the View Toolbar.
3. Right-click on a table object in Object Explorer and select _Filter_.

![Filter Objects](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/94A6AF0D008D8EEB76021C950C9F9D0F.jpg)

4. On the filter window, enter a name of filter and select conditions.

![Select Filter Conditions](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/0612F11F2BECD3D6C54F66F067EBFB43.jpg)

**Filter Condition**
- [none] : Give no name to the object.
- In : Search with the name entered.
- Not In : Search without the name entered.
- Starts with : Search for synonyms that starts with the name entered.
- Includes : Search for synonyms that includes the name entered.
- Ends with : Search for synonyms that ends with the name entered.
- Not Includes : Search for synonyms that does not include the name entered.
5. Click [Test]. Check the result in Test SQL Tab.

![Test Filtering](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/FF165763CAD836524037B46D9763A05B.jpg)

6. Click [Ok] and confirm result.

![Check Filtering result](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/3117AAD3FAE3EA4A4262B554F70F11F5.jpg)

7. To take out filter, click [Reset] and [Ok].


### Disply Always On Top

This section explains how to display Object Explorer always on top.

1. Connect to Database.
2. On the main menu bar, go to **View**>**Object Explorer**. Or, simply click [Object Explorer] on the View Toolbar.
3. As Object Explorer opens, select *Always On Top*.
4. Object Explorer will open in new window.

![Display Always On Top](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/8FDCC66C06A1603D305CFD8BEE48760D.jpg)