---
id: import-data-from-other-files
title: Import Data from Other Files
sidebar_label: Import Data from Other Files
---

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