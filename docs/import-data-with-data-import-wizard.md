---
id: import-data-with-data-import-wizard
title: Import Data with Data Import Wizard
sidebar_label: Import Data with Data Import Wizard
---

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





