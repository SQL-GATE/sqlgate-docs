---
id: 0206-export-import-data
title: Export and Import Data
sidebar_label: Export and Import Data
---

## Export Query Results to Excel

This section explains how to export query results to Excel.

1. Connect to database.
2. On the main menu bar, go to **File**>**New**>**SQL Editor**. Or, simply click [SQL Editor] on the New Toolbar or press Ctrl+N.
3. Write SQL.
4. Click [Run] or press F5.
5. On the grid, right-click and select **Export**>**Excel File**.

![Export as Excel file](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/A1EFCC6F322DE16A5F7E320DF475AA53.jpg)

6. On the **Data Export Wizard** window, select the export file type. And then click [Next].

![Select file type from data export wizard](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/998E7C02F4E3FF22CDAE86150D679E73.jpg)

7. On the **Set File path and Additional options** window, select a file path and enter a name for the file to export. If you set a records count for each file, additional files will be created if the records count exceeds the number you entered.

![Set data export wizard options](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/74A70BE3FB50E324B0FEBCD2A2D1EB86.jpg)

> Tip: If the file is named dept.xlsx, the additional files will be named as dept_o01.xlsx, dept_002.xlsx and so on.

8. Click [Run]. Check the created file(s) in Excel.

![Check the created file from data export wizard](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/10949DA2E068FF62A95625A7D1F0B7AE.jpg)





## Export Data from Object Explorer

This section explains how to export data from Object Explorer.

1. Connect to Database.
2. Select a table from Object Panel or Object Explorer.
3. Right-click and select [Export Data].

![Export data from Object Explorer](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/CE933DEF55C47EF44B1DB072B1BBC5AC.jpg)

4. On **Data Export Wizard** window, select a file type to export data. And then click [Next].

![Data Export Wizard](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/998E7C02F4E3FF22CDAE86150D679E73.jpg)

5. On **File Path and Additional options settings** window, select a file to export. If you select _Records count of Each File_, additional files will be created if it goes over the entered record number.
6. Click [Run].

![Set Options for Data Export Wizard](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/74A70BE3FB50E324B0FEBCD2A2D1EB86.jpg)

> Note: If the exported file name is dept.xlsx, the files created over the records count will be named dept_001.xlsx, dept_002.xlsx, and so on.
7. Check the created files.

![Check exported data by Data Export Wizard](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/10949DA2E068FF62A95625A7D1F0B7AE.jpg)



## Import data from Excel as Tables

This section explains how to import data from Excel as tables.

1. Choose a table from Object Panel or Search for Objects.
2. Right-click the table and select [Import Data].

![Import Data from Excel](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/37B60F8B8943C335FC7DBE063E29CF0C.jpg)

3. When **Data Import Wizard** opens, select file type as ‘Excel’. Then, click [Next].

![Select file type from Data Import Wizard](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/689D4B584C175A71E555673F1F09200F.jpg)

4. On **Select the file to import** window, select a file to import. Then click [Next].

![Select a file to import on data import wizard](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/5DC849DDA51F92B7DE8D007667ACDA19.jpg)

5. On **Additional options settings**, set options. Then, click ‘Next’.
6. First Row: If the data in the Excel file has a field name in the first row, enter ‘2’. If not, enter ‘1’.

![Additional options settings on data import wizard](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/B61D4DFA4B465FD9F141433343EEE6FA.jpg)

7. Last Row: If left empty, it reads all rows in the Excel file.
8. On the **File Preview** window, you can map the rows in the file and the rows of the table. Then click [Next].

![File preview on data import wizard](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/E17DE7BFCB5D7B2BA0A50BBD0E995693.jpg)

9. On the **Column Mapping** window, check if the source field and the table fields are mapped correctly.

![Column mapping on data import wizard](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/798BA2EBEEEBC79CCD6E8B2353ABE79F.jpg)

10. On the **Data Preview** window, check the data before import begins. Click [Next].

![Data preview on data import wizard](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/B10D501461090C66C9267E796D2B70A6.jpg)

11. On the **Run Summary** window, select [Import Mode] and click [Run].

![Run summary on data import wizard](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/EFAAED888A8924CBFF6EA98F2C6388EC.jpg)

12. Check the result and click [OK].

**Import modes are as followed**
- Append: Add Records to the destination table
- Update: Update Destination Record that matches with Record in Source
- Append/Update: If Destination Record exists, update it. Otherwise, add it
- Delete: Delete the destination Records that match records in source
- Copy: Delete all destinaiton records, and replace with source contents
- Append New: Add Records only if there is no destination record


## Import Data from Other Files

This section explains how to import data from other file types.

1. Select a table from Object Panel or Object Explorer.
2. Right-click and select [Import Data].
3. On **Data Import Wizard** window, check _Text File_ under File Type. And then, click [Next].

![Select File Type from Data Import Wizard](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/3E6C4BB0D92E78D3240AA16C8816C55A.jpg)

4. On **Select the file to import** window, click [Browse] to select the file and click [Next].

![Select the file to import from Data Import Wizard](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/898172DFA1061CD052848A2B2500A355.jpg)

5. On **File Option Settings** window, set options and click [Next]. Then, select one Separator. Contents in File Option Settings are as followed:

![File Options Setting in Data Import Wizard](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/7AFBE3903C2AABEF18EE5C1C96D17449.jpg)

- Separator: A character to separate fields in data rows. Select when there is a tab, comma, or other special symbols in between fields.
- Fixed width: Select if there is a fixed width of characters in between fields.
- Field Separator: Check _Field Separator_ box and select a symbol as the field separator. (If there is no symbol, check _Miscellaneous Symbols_ and choose a symbol.)
- Line break: Choose from CRLF, CR, and LF as a distinguished line break character.
- Qualifiers: Choose from none, single quotation mark, and double quotation mark to distinguish string in the file.
6. On **Additional options settings** window, set options.

![Additional options settings from Data Import Wizard](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/5A6E74B82CE2E5B2A4425C58BB23AD16.jpg)

7. On File Preview window, you can map file columns and table columns. Select ‘Auto Column Mapping’ to consecutively map fields in the table to columns in the file. Click [Next].

![File Preview on Data Import Wizard](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/D621E82BE46F47C3464957B3FD6D2B4F.jpg)

On ‘Column Mapping’ window, check if the source file and table fields are mapped correctly.

![Column Mapping in Data Import Wizard](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/6A08B0DC3DC81531142C5C4E7F113DC0.jpg)

8. Before importing data to **Data Preview** window, check the data and then click [Next].

![Data Preview on Data Import Wizard](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/A0D66BA9C3C8573A3004E29E9346123E.jpg)

9. On **Run Summary** window, select _Import Mode_ and then click [Run].

![Run Summary on Data Import Wizard](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/0273934A00B8B3495D7ECFE984C6B610.jpg)

10. Check if it has run successfully, and then click [Ok].

**Import Mode is as follows**
- Append: Add Records to the destination table.
- Update: Update Destination Record that matches with Record in Source.
- Append/Update: If Destination Record exists, update it. Otherwise, add it.
- Delete: Delete the destination Records that match records in source.
- Copy: Delete all destination records, and replace with source contents.
- Append New: Add Records only if there is no destination record.