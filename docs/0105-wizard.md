---
id: 0105-wizard
title: Wizard
sidebar_label: Wizard
---

## Create table Wizard

This is how to create tables without writing CREATE statements.

1. Connect to Oracle database.
2. On the main menu bar, go to **Create**>**Table**. Or simply right-click on tables on **Object Panel**, and select [New Table].

![Starting Table Creator](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/B9DE77D22A4F6275B2F718C095FEA88B.jpg)

3. On a given blank table creator sheet, enter name of the table. If needed, add comment. Press Enter to move to the next field.
4. Customize the tables by setting *constraints*, *storage*, and *options*.

![Creating tables with Table Creator](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/5FCF53F13651B88AD28BB0B95F1949B6.jpg)

5. After you add all the fields, click [View SQL] to see SQL statement that is automatically generated.
6. Once you are done, click [OK].
7. On the **SQL** window, check if your query has been carried out correctly.
8. After checking, click [OK].
9. On Object Panel, click [Refresh] to see the new table added on the list.



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


## Import Data with Data Import Wizard

You can import different types of documents. This section explains how to import Excel files and text files.

#### Supported File Types

| Document type | extension |
| --- | --- |
| DBasefile | *.dbf |
| text file |  *.txt,*.csv |
| Excel file | *.xlsx, *.xls |
| MS Access file | *.mdb |

#### Importing data from Excel file on Object Panel/Search for Object
1. Select a table from the **Object Panel** or **Search for Object**.
2. Right-click and select [Import Data].
3. When **Data Import Wizard** opens, check [Excel File] and click [Next].
4. On **Select File to Import**, click the icon to browse and select the file to import. Click [Next].
5. On **Additional Options Settings**, customize options for the importing data and then click [Next].
6. The first row: If the first row of the data consists of a field name, enter 2. If not, enter 1.

![Import data from Excel file_Row settings](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/CB927F2C2B288DA82A838A9803DC8AD8.jpg)

7. The last row: If you don't input any value, all rows from the file will be read.
8. On **File Preview** section, you can map the columns from the file and table. Click [Auto Columns Mapping] to map columns in the file to the fields on the table. Click [Next].
9. On **Column Mapping** window, check if the source file and the destination file are mapped correctly.

![Import data from Excel file_Column mapping](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/06973AF7048FBE06AA18CC183C576E03.jpg)

> Note: >>>>If you don't select keys on Column Mapping window, the data is simply added or copied. If you want to activate other importing mode, select the keys on Column Mapping window.

10. On **Data Preview** window, check the data you are about to import. To proceed, click 'Next'.
11. On **Run Summary** window, select one from *Import Mode* and click [Execute].

![Importing data from Excel_Run Summary](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/4D15B066A82B86C8F7AAF9C34A490AC9.jpg)

- Append: Add Records to the destination table.
- Update: Update Destination Record that matches with Record in Source.
- Append/Update: If Destination Record exists, update it. Otherwise, add it.
- Delete: Delete the destination Records that match records in source.
- Copy: Delete all destination records, and replace with source contents.
- Append New: Add Records only if there is no destination record.
12. Check if the data has been imported successfully and then click [OK].

#### Importing text or .CSV files from Object Panel/Search for Object.
1. On the **Object Panel** or **Search for Object**, select a table.
2. Right-click on the table and select [Import Data].
3. When the **Data Import Wizard** window opens, check [Text File] and then click [Next].
4. On **Select File to Import**, browse a file to import and click [Next].
5. On **File Option Settings**, customize options for the importing data and then click [Next]. You must select one from the *Field Separator* to proceed.

![Importing data from text or .CSV files_File Options Settings](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/F5A2D400D7D2112C9614083BCD5AD267.jpg)

- Field Separator: It is a symbol that marks a line break in a text file. Check if there is a specific symbol such as tab, comma, or other symbols.
- Fixed width: Check if the width of the characters from each field is fixed.
- Field Separator: Check [Field Separator] from above, and then select a field separator from the given symbols. You can add your own symbol on the field given next to *Miscellaneous Symbol*.
- Line break: Select one line terminator from CRLF, CR, and LF.
- Qualifier: From None, double quotation, and single quotation, select one qualifier that separates characters.

6. On **File Preview** window, you can map rows from the file and the tables. Click [Auto Column Mapping] to consecutively fetch the data and then click [Next].
7. On **Column Mapping** window, check if the source file and destination file are mapped correctly.

![Importing data from text or .CSC files_Column Mapping](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/3BBC5C1B278BEB8A64DBB428C5BCA10B.jpg)

> Note: If you do not check the keys on Column Mapping window, you can only add and copy the data. To activate other importing mode, select the keys.

8. On **Data Preview**, check the data you are about to import. To proceed, click [Next].
9. On **Run Summary** window, select one from *Import Mode* and click [Execute].

![Importing data from text or .CSV files_Run Summary](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/4D15B066A82B86C8F7AAF9C34A490AC9.jpg)

- Append: Add Records to the destination table.
- Update: Update Destination Record that matches with Record in Source.
- Append/Update: If Destination Record exists, update it. Otherwise, add it.
- Delete: Delete the destination Records that match records in source.
- Copy: Delete all destination records, and replace with source contents.
- Append New: Add Records only if there is no destination record.

10. Check if the data has been imported successfully and then click [OK].