---
id: export-data-with-data-export-wizard
title: Export Data with Data Export Wizard
sidebar_label: Export Data with Data Export Wizard
---

## Export data with Data Export Wizard

You can export tables, views, or query results in different document types.

#### Supported document types

| Document type | extension |
| --- | --- |
| DBasefile | *.dbf |
| text file |  *.txt,*.csv |
| Excel file | *.xlsx, *.xls |
| SQL script file | *.sql |
| MS Access file | *.mdb |


#### Export data

**Export data on SQL Editor**
1. Connect to Oracle database.
2. On the main menu bar, selelct **File**>**New**>**SQL Editor**. Or, simply click [SQL Editor] on the Toolbar or press Ctrl+N.
3. Write SQL.
4. Click [Run] or press F5.
5. Right-click on the grid, and select **Export Data**>**Excel file**.
![Exporting data from SQL Editor in Excel sheet](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/018AF83845C1094DC4F6DC729755016F.jpg)
6. As **Data Export Wizard** window opens, select a file type and then click [Next].
7. On **Set File path and Additional option**, select a file to export. If you check *Records Count of Each file*, additional files will be created if the number goes beyond the number you entered. Then click [Execute].
8. Check the file(s).

> Tip : Let's say the file name of the exported data is dept.xlsx. If Record count is larger than the input value, files will be created as: dept_001.xlsx, dept_002.xlsx.


**Export data from Object Panel/Search for Object.**
1. Select a table from **Object Panel** or **Search for Object**.
2. Right-click on the table, and select [Export Data].
![Exporting data from Search for Object](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/49F210996AA1C7DEA7B8438C0C452E6F.jpg)
3. As **Data Export Wizard** window opens, select a file type and then click [Next].
4. On **Set File path and Additional option**, select a file to export. If you check *Records Count of Each file*, additional files will be created if the number goes beyond the number you entered. Then click [Execute].
5. Check the file(s).
> Note: Let's say the file name of the exported data is dept.xlsx. If Record count is larger than the input value, files will be created as: dept_001.xlsx, dept_002.xlsx.

**Export data from multiple tables at once**
1. On the main menu bar, go to **Tools**>**Export Data**.
2. Select tables to export. You can select multiple tables.
3. If you choose one table,
4. It will function exactly the same as you export data from **Object Panel**/**Search for Object**.
5. If you choose more than one table,
6. On [Export Folder], click the browsing icon to select a folder to export the data to.
7. Click [Start].
8. You can see the files on [Export Folder] by the names of the tables.

![Exporting data from multiple tables at once](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/5A8ABE601165CFB0DF5932CD1C827820.jpg)
> Note: The created files are named after the tables.
