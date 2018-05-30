---
id: 0210-functions-of-create
title: Functions of Create
sidebar_label: Functions of Create
---


## Collection Type

This section explains how to create alterable tile or implicated tables. To create a collection type, the user is required of ’CREATE TYPE’ or ‘CREATE ANY TYPE’ privilege.

1. Connect to database.
2. On the main menu bar, go to **Create**>**Collection Type**.
3. Enter a name for the new collection and choose a schema.
4. Choose a tile type or a table type. Choose a data type and enter a value.

![Create collection type](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/C901387BB4435169CFB85439D7C2AE4A.jpg)

5. Click [View SQL] and check the generated SQL statements. Click [OK] and check the result.

![Check the generated SQL](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/797541DB945DD9DB7EF45DA7F8183947.jpg)



## Constraints

This section explains how to create default, check, unique, and foreign key.

1. Connect to database.
2. On the main menu bar, go to **Create**>**Constraints**.
3. Specify a name and a schema for constraints to be created. 
4. Select a table.
5. Select [Foreign Key] on Constraints tab.
6. Select a destination table column and click [Add].
7. Click [ON DELETE CASCADE].

![Create constraints](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/5890F617613D7302E6608E840EBF7879.jpg)

8. Set options on options set.
9. Click [View SQL] to check the generated statements.
10. Click [OK] to check the result.



## Database Link

This section explains how to access remote database by creating a database link. To create a link,’CREATE DATABASE LINK’ authority is required, and to create a public link, ‘CREATE PUBLIC DATABASE LINK’ authority is required. 

1. Connect to database.
2. On the main menu bar, go to **Create**>**Database Link**.
3. Enter a name for the link and choose a service name.

![Create a database link](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/0407C8C5FC534D1EECD7D6079DB7B8FA.jpg)

4. Click [View SQL] and check the generated SQL statements.

![Check generated SQL](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/A8AE240BBF9B5DA0DAB951762D435236.jpg)

5. Click [OK] and check result.
6. On the ‘Test Connection’ window, check connection and click [OK].

> Note: Information for Oracle database connection is saved at tbdsn.tbr file.


## Index

Create Index in Oracle Database Table or Cluster.

1. Connect to Database.
2. On the main menu bar, go to **Create**>**Index**.
3. Select a schema and enter a name.
4. Set the size of a tablespace. 
5. On Tab, select a schema and a table.
6. Select a column and click [Add Selected].
 
![Create Index](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/2C105CAB63237E060F09D8B481E0F409.jpg)

7. On Storage Tab, enter size, transaction count, and space usage. 

![Set Index Storage](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/18FBC551E68D4E59C280B9F02F9CCE6E.jpg)

8. Click [View SQL] and check the generated SQL statement.
9. Click [OK] to confirm.



## Jobs

This section explains how to create new jobs on Oracle database.

1. Connect to database.
2. On the main menu bar, go to **Create**>**Jobs**.
3. Choose Date/Time. Or choose from _Repeating_.
4. Click [Search Procedure].
5. Specify a type, schema, and object name. Click [OK].

![Create jobs](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/526B801E5F9A06F19B9BEDA3BC96FEDE.jpg)

6. Check the result on run script.
7. Click [OK] to check the result.


## Object Type

On oracle database, select new attribute, method, and body to form an object type.

1. Connect to database.
2. On the main menu bar, go to **Create**>**Object Type**.
3. Enter the name for the new object type and select schema.

![Create Object Type](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/F0A36A302EAE01EEE8C10FA3952DF3B5.jpg)

4. On ‘Attribute and method’ tab, click [Add].
5. On ‘Add Attribute’ window, enter a name, select an object type, and click [OK]. 

![Add Attribute to Object Type](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/1C9957286DB8D71237DCAAEE2AB7A6BA.jpg)

6. Click [Add Method].
7. Enter a name and select a method type. And then click [Add Variables].
8. On ‘Add Variables’ window, enter a name and select a mode.
9. Select a data type and click [OK].

![Add Object Type Variables](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/66E0F9D87540DC5E09550733D2680B72.jpg)

10. Check the applied attribute and method.

![Check Object Type Attribute and Method](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/87432C7A109C4BC05A09253E8DE4263F.jpg)

11. Click SQL View] and check the generated sentences.
12. Click [OK] to confirm result.


## Redo Log Group

This section explains how to create a new redo log group on Oracle database.

1. Connect to database.
2. On the main menu bar, go to **Create**>**Redo Log Group**.
3. Enter a group name in number.
4. Enter a file name in Redo Log Member. Or, click [Select File] to browse a file.
5. Choose a file size.
6. Click [View SQL] to check the generated SQL statements.

![Create Redo Log Group](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/CCC82A5C11556C28D771A7867F8C711B.jpg)

7. Click ‘Ok’ to check the result.



## Role

Create a new role in Oracle Database. To create roles, users need a privilege to ‘CREATE ROLE’ and view ‘DBA_VIEWS’.

1. Connect to Database.
2. On the main menu, go to **Create**>**Role**.
3. Enter a name and select an authentication method.

![Create Role](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/1A5495A8C752A87FBEBD040B988B57B0.jpg)

4. On the Role Tab, select a role to grant and click [Grant Selected].
5. Set System Privilege and Object Privilege.
6. Click [View SQL] and view the generated statement.
7. Click [OK] to confirm result.


## Rollback Segment

This section explains how to create rollback segment.

1. Connect to database.
2. On the main menu bar, go to **Create**>**Rollback Segment**.
3. Enter a name and choose a tablespace.
4. If the owner has DBA authority, it could be created to use in all instance.
5. Choose a status and enter a value.

![Create Rollback Segment](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/3F7023A63A85F8A69E969275F1364773.jpg)

6. Click [View SQL] and check the generated SQL statements.
7. Click [Ok] and check the result.



## Sequence

This section explains how to create new sequence on Oracle database.

1. Connect to database.
2. On the main menu bar, go to **Create**>**Sequence…**.
3. Specify a name and a schema for the sequence to be created.
4. Specify values and set Options. Specify cycle to generate sequence from the initial value when it reaches the maximum value, and specify ‘Sequential’ to number sequence in numerical order.  

![Create Sequence](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/D904F42CAD1D900FCFA9D3B2D5E30B1C.jpg)

5. Click [View SQL] and check the generated statements.
6. Click [OK] and check the result.



## Synonym

This section explains how to create synonyms on Oracle database.

1. Connect to database.
2. On the main menu bar, go to **Create**>**Synonym**.
3. Choose either _Local_ or _Remote_.
4. Choose a schema and an object type.
5. Click [Browse] or enter keyword value. You can filter with % when browsing keyword.

![Create Synonym](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/434978EED34A0E5217579CD87DAEFC9C.jpg)

6. Select an object and click [Add]. Or simply double-click the object.
7. Enter a name for the synonym. Select [All Public].

![Set Synonym Details](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/0ED4CCBC377CE445D3803AFB893F8CF8.jpg)

8. Click [View SQL] and check the generated SQL statements.
9. Click [OK] to check reseult.


## Table

Create Tables in Oracle Database.

1. Connect to Database.
2. On the main menu bar, go to **Create**>**Table**.
3. Enter a name and select schema and table space.
4. Enter comment.
5. On Tab, enter column name and information.
6. Enter value for constraints, storage, and Option. 

![Create Table](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/D305762E2295D241378FF693ADC0C150.jpg)

7. Click [View SQL] to check the generated statements.
8. Click [Ok] to confirm the result.




## Tablespace

This section explains how to create a new table space on Oracle database.

1. Connect to database.
2. On the main menu bar, go to **Create**>**Tablespace**.
3. Give a name to the tablespace to be created, and click [Add].

![Create data space](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/F2D1C2DFC6D0FD8515A32F4734E0FEE8.jpg)

4. ‘Add Data File’ window will open.

![Add Data File](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/86E3914FE66BD13F7550CAC579CDEC4E.jpg)

5. Click [Find] and select a list of data files. Then, click [OK].

![Select a list of data files](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/0B062717F98329BBA678478F287F5F49.jpg)

6. Enter a file size on ‘Add Data File’ window and click [OK].

![Add a data file](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/A9E623BCEBB3FCBBF408876E5C8B0707.jpg)

7. Check the added data file and select a Status. If you are working online, the generated tablespace would be activated as soon as it is created; if you are working offline, it will be created in inactive form thus cannot be used right away.
8. Select a type. “Persistent” is tablespace for general objects. “Temporary” is a tablespace for temporary objects.

![Create temporary tablespace](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/A67C9A1156D670FF659FEB5D9A0BD96D.jpg)

9. Click [Option] on Storage tab.
10. Click [View SQL] and check the autogenerated SQL statements.
11. Click [OK] and check the result.




## User

This section explains how to create a new user on Oracle database. To create a new user, you must be privileged to ’CREATE USER’ and to view ‘DBA_VIEWS’.

1. Connect to database.
2. On the main menu bar, go to **Create**>**User**.
3. On the ‘User Information’ tab, enter a user name and select an authentication method.
4. Database authentication requires password to log in. Operating system authentication requires OS user authentication.
5. Choose a default value for table space and select a temporary table space.
6. Select a resource profile and select a status.

![Create user](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/AFE7DD09BE7AE47F8254490858164261.jpg)

7. Select a role on the ‘Role’ tab, and click ‘Grant Selected’.

![Grant role to user](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/467F708D10ACD61BF082868E1321D63B.jpg)

8. Select values on _System Privileges_, _Object Privileges_, and _Resource Group_.
9. Click [View SQL] to view the generated statements.
10. Click [OK] and check result.




## View

Create a new view in Database. To create a view, you need CREATE VIEW privilege.

1. Connect to Database.
2. On the main menu, go to **Create**>**View**.
3. Enter the name of the View and select a schema.
4. Enter comment.
5. Enter Script on Script Tab.
6. Click [SQL Validate] to check its validation.

![Create View](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/C71C5DFD187F13C0D36E62E733B781C2.jpg)

7. On View Information Tab, click [Auto Add] or [Add] to add a column.
8. Set option and click [View SQL] to see the generated statements.
9. Click [OK] to check results.




## Profile

This section explains how to create new profile in Oracle database. On profile, you can set limitations on database resource. The owner who is assigned a profile will have limited access to resourced defined by the profile. To create profile, owner’s ‘CREATE PROFILE’ privilege is required.

1. Connect to database.
2. On the main menu bar, go to **Create**>**Profile**.
3. Enter a name for the profile.
4. Select values for details on general tab.

![Create profile](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/B0C1EAD903E20E250E337D2EFC1C8424.jpg)

The contents of general tab are given below:
- CPU/Session: CPU time limit on session.
- CPU/Call: CPU time limit on a call(Parser, Execute, Fetch, etc)
- Connect time: The total elapsed time limit for a session.
- Idle Time: The permitted periods of continuous active time during a session.
- Database service options are as followed
- Concurrent Sessions: The number of sessions running at the same time.
- Reads/Session: The number of data blocks session reads from memory and disk.
- Reads/Call: The number of data read from SQL Calls(Parse, Execute, Fetch etc.).
- Private SGA: The size of the private SGA space for a session.
- Composite Limit: The total resource cost for a session, expressed in service units

5. Set details for password tab.

![Set detailed options for profile password](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/18D248A09C5838AEDFD2F42260862A11.jpg)

Options for password tab are as followed.
- Expired in: The number of days specified. The account will be expired after the given number of days.
- Lock (Days past expiration): The number of days an account will be locked if the password is not changed until the specified number of days.
- Number of passwords to keep: The number of passwords that can be kept.
- Number of days to keep: The number of days the passwords can be kept.
- Number of failed login attempts to lock after: If login attempts fail more than the given number, the account will be locked.
- Number of days to lock for: The number of days the account is locked for after failing to login.
- Complexity Function: It is a function that verifies password.
6. Click [View SQL] to check the autogenerated statements.
7. Click [OK] to check the result.

https://docs.oracle.com/cd/B19306_01/server.102/b14200/statements_6010.htm


## Procedure/Function/Package

This section explains how to create new procedure/function/package on Oracle database.

1. Connect to database.
2. On the main menu bar, go to **Creat**>**Procedure/Function/Package**.
3. Click [Open Example] on the object tab to create.

![Create procedure](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/C30A4869F9D4E6054DEF6CE134FB755D.jpg)

4. Click [Edit] to open [PL/SQL Editor].

![Edit Create Procedure](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/8B97AAFF8190C3B5039C5B6F5CA2AA8F.jpg)

5. Write and edit codes based on example fitting to logic.



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