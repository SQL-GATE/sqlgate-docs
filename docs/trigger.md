---
id: trigger
title: Trigger
sidebar_label: Trigger
---

## Trigger

Create a new Trigger in Oracle Database. To create Triggers, users must have a privilege to ‘CREATE TRIGGER’.

1. Connect to Database.
2. On the main menu bar, go to **Create**>**Trigger**.
3. Enter a name.
4. Select a schema and a table.
5. Select a trigger timing and event to run.
6. Select _FOR EACH_. ROW will be executed when changes are made in columns. STATEMENT will be executed if changes are made in the related columns regardless of the data in the column.  
![Create Trigger](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/D7655B433BEAF163FACFEC9AE129CAD3.jpg)
7. Enter conditions to run on Where Clause.
8. Click [View SQL] to view generated statements.
9. Click [OK] to confirm result.