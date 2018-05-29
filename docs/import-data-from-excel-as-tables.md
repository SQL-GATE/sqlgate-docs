---
id: import-data-from-excel-as-tables
title: Import data from Excel as Tables
sidebar_label: Import data from Excel as Tables
---

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