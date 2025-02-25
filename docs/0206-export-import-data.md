---
id: 0206-export-import-data
title: Export and Import Data
sidebar_label: Export and Import Data
---

## Export Query Results to Excel
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero,cubrid>)

This section explains how to export query results to Excel.

1. Connect to database.
2. On the main menu bar, go to **File**>**New**>**SQL Editor**. Or, simply click [SQL Editor] on the New Toolbar or press Ctrl+N.
3. Write SQL.
4. Click [Run] or press F5.
5. On the grid, right-click and select **Export**>**Excel File**.

![export data in query result](https://resource.sqlgate.com/resource/captures/wizard/data-export-wizard-04-en.png)

6. On the **Data Export Wizard** window, select the export file type. And then click [Next].

![export data in query result](https://resource.sqlgate.com/resource/captures/export-data/data-export-wizard-selectFileType.png)

7. On the **Set File path and Additional options** window, select a file path and enter a name for the file to export. If you set a records count for each file, additional files will be created if the records count exceeds the number you entered.

![Set data export wizard options](https://resource.sqlgate.com/resource/captures/export-data/data-export-wizard-setFilePath.png)

> Tip: If the file is named dept.xlsx, the additional files will be named as dept_o01.xlsx, dept_002.xlsx and so on.

8. Click [Run]. Check the created file(s) in Excel.

![Check the created file from data export wizard](https://resource.sqlgate.com/manual-content/10949DA2E068FF62A95625A7D1F0B7AE.jpg)





## Export Data from Object Explorer
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero,cubrid>)

This section explains how to export data from Object Explorer.

1. Connect to Database.
2. Select a table from Object Panel or Object Explorer.
3. Right-click and select [Export Data].

![export data in order panel](https://resource.sqlgate.com/resource/captures/wizard/data-export-wizard-02-en.png)

4. On **Data Export Wizard** window, select a file type to export data. And then click [Next].

![export data in query result](https://resource.sqlgate.com/resource/captures/export-data/data-export-wizard-selectFileType.png)

5. On **File Path and Additional options settings** window, select a file to export. If you select _Records count of Each File_, additional files will be created if it goes over the entered record number.
6. Click [Run].

![Set data export wizard options](https://resource.sqlgate.com/resource/captures/export-data/data-export-wizard-setFilePath.png)

> Note: If the exported file name is dept.xlsx, the files created over the records count will be named dept_001.xlsx, dept_002.xlsx, and so on.
7. Check the created files.

![Check exported data by Data Export Wizard](https://resource.sqlgate.com/manual-content/10949DA2E068FF62A95625A7D1F0B7AE.jpg)



## Import data from Excel as Tables
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero,cubrid>)

This section explains how to import data from Excel as tables.

1. Choose a table from Object Panel or Search for Objects.
2. Right-click the table and select [Import Data].
3. When **Data Import Wizard** opens, select file type as ‘Excel’. Then, click [Next].
4. On **Select the file to import** window, select a file to import. Then click [Next].
5. On **Additional options settings**, set options. Then, click ‘Next’.
6. First Row: If the data in the Excel file has a field name in the first row, enter ‘2’. If not, enter ‘1’.

![import data wizard file additional option](https://resource.sqlgate.com/resource/captures/wizard/data-import-wizard-file-additional-option-en.png)

7. Last Row: If left empty, it reads all rows in the Excel file.
8. On the **File Preview** window, you can map the rows in the file and the rows of the table. Then click [Next].

![import data wizard file preview](https://resource.sqlgate.com/resource/captures/wizard/data-import-wizard-file-preview-en.png)

9. On the **Column Mapping** window, check if the source field and the table fields are mapped correctly.

![import data wizard column mapping](https://resource.sqlgate.com/resource/captures/wizard/data-import-wizard-column-mapping-en.png)

10. On the **Data Preview** window, check the data before import begins. Click [Next].
11. On the **Run Summary** window, select [Import Mode] and click [Run].
12. Check the result and click [OK].

![import data wizard run summary](https://resource.sqlgate.com/resource/captures/wizard/data-import-wizard-run-summary-en.png)

**Import modes are as followed**
- Append: Add Records to the destination table
- Update: Update Destination Record that matches with Record in Source
- Append/Update: If Destination Record exists, update it. Otherwise, add it
- Delete: Delete the destination Records that match records in source
- Copy: Delete all destinaiton records, and replace with source contents
- Append New: Add Records only if there is no destination record


## Import Data from Other Files
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero,cubrid>)

This section explains how to import data from other file types.

1. Select a table from Object Panel or Object Explorer.
2. Right-click and select [Import Data].
3. On **Data Import Wizard** window, check _Text File_ under File Type. And then, click [Next].
4. On **Select the file to import** window, click [Browse] to select the file and click [Next].
5. On **File Option Settings** window, set options and click [Next]. Then, select one Separator. Contents in File Option Settings are as followed.

![import data wizard fiile option](https://resource.sqlgate.com/resource/captures/wizard/data-import-wizard-file-option-en.png)

- Separator: A character to separate fields in data rows. Select when there is a tab, comma, or other special symbols in between fields.
- Fixed width: Select if there is a fixed width of characters in between fields.
- Field Separator: Check _Field Separator_ box and select a symbol as the field separator. (If there is no symbol, check _Miscellaneous Symbols_ and choose a symbol.)
- Line break: Choose from CRLF, CR, and LF as a distinguished line break character.
- Qualifiers: Choose from none, single quotation mark, and double quotation mark to distinguish string in the file.
6. On **Additional options settings** window, set options.

![import data wizard file additional option](https://resource.sqlgate.com/resource/captures/wizard/data-import-wizard-file-additional-option-en.png)

7. On **File Preview** window, you can map file columns and table columns. Select ‘Auto Column Mapping’ to consecutively map fields in the table to columns in the file. Click [Next].
On ‘Column Mapping’ window, check if the source file and table fields are mapped correctly.
8. Before importing data to **Data Preview** window, check the data and then click [Next].
9. On **Run Summary** window, select _Import Mode_ and then click [Run].
10. Check if it has run successfully, and then click [Ok].

![import data wizard run summary](https://resource.sqlgate.com/resource/captures/wizard/data-import-wizard-run-summary-en.png)

**Import Mode is as follows**
- Append: Add Records to the destination table.
- Update: Update Destination Record that matches with Record in Source.
- Append/Update: If Destination Record exists, update it. Otherwise, add it.
- Delete: Delete the destination Records that match records in source.
- Copy: Delete all destination records, and replace with source contents.
- Append New: Add Records only if there is no destination record.