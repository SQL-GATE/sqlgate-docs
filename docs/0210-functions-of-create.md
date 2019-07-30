---
id: 0210-functions-of-create
title: Functions of Create
sidebar_label: Functions of Create
---


## Collection Type
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

This section explains how to create alterable tile or implicated tables. To create a collection type, the user is required of CREATE TYPE or CREATE ANY TYPE privilege.

1. Connect to database.
2. On the main menu bar, go to **Create**>**Collection Type**.
3. Enter a name for the new collection and choose a schema.
4. Choose a tile type or a table type. Choose a data type and enter a value.

5. Click [View SQL] and check the generated SQL statements. Click [OK] and check the result.

![create Collection Type](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-collectionType.png)

![create Collection Type SQL View](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-collectionType-sqlView.png)



## Constraints
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

This section explains how to create default, check, unique, and foreign key.

1. Connect to database.
2. On the main menu bar, go to **Create**>**Constraints**.
3. Specify a name and a schema for constraints to be created. 
4. Select a table.
5. Select [Foreign Key] on Constraints tab.
6. Select a destination table column and click [Add].
7. Click [ON DELETE CASCADE].

![create Constraints](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-constraint.png)

8. Set options on options set.
9. Click [View SQL] to check the generated statements.
10. Click [OK] to check the result.


## Database Link
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

This section explains how to access remote database by creating a database link. To create a link,’CREATE DATABASE LINK’ authority is required, and to create a public link, ‘CREATE PUBLIC DATABASE LINK’ authority is required. 

1. Connect to database.
2. On the main menu bar, go to **Create**>**Database Link**.
3. Enter a name for the link and choose a service name.

![create Database Link](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-databaseLink.png)

4. Click [View SQL] and check the generated SQL statements.

![create Database Link SQL View](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-databaseLink-sqlView.png)

5. Click [OK] and check result.
6. On the ‘Test Connection’ window, check connection and click [OK].

> Note: Information for Oracle database connection is saved at tbdsn.tbr file.


## Index
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,db2,tibero,cubrid>)

Create Index in Database Table or Cluster.

1. Connect to Database.
2. On the main menu bar, go to **Create**>**Index**.
3. Select a schema and enter a name.
4. Set the size of a tablespace. 
5. On Tab, select a schema and a table.
6. Select a column and click [Add Selected].
 
![create index](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-index.png)

7. On Storage Tab, enter size, transaction count, and space usage. 

![create index sql view](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-index-sqlView.png)

8. Click [View SQL] and check the generated SQL statement.
9. Click [OK] to confirm.



## Jobs
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

This section explains how to create new jobs on database.

1. Connect to database.
2. On the main menu bar, go to **Create**>**Jobs**.
3. Choose Date/Time. Or choose from _Repeating_.
4. Click [Search Procedure].
5. Specify a type, schema, and object name. Click [OK].

![create job](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-job.png)

6. Check the result on run script.
7. Click [OK] to check the result.


## Object Type
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

On database, select new attribute, method, and body to form an object type.

1. Connect to database.
2. On the main menu bar, go to **Create**>**Object Type**.
3. Enter the name for the new object type and select schema.
4. On ‘Attribute and method’ tab, click [Add].
5. On ‘Add Attribute’ window, enter a name, select an object type, and click [OK]. 
6. Click [Add Method].
7. Enter a name and select a method type. And then click [Add Variables].
8. On ‘Add Variables’ window, enter a name and select a mode.
9. Select a data type and click [OK].
10. Check the applied attribute and method.
11. Click [SQL View] and check the generated sentences.
12. Click [OK] to confirm result.

![create object type](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-objectType.png)

## Redo Log Group
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

This section explains how to create a new redo log group on database.

1. Connect to database.
2. On the main menu bar, go to **Create**>**Redo Log Group**.
3. Enter a group name in number.
4. Enter a file name in Redo Log Member. Or, click [Select File] to browse a file.
5. Choose a file size.
6. Click [View SQL] to check the generated SQL statements.
7. Click ‘Ok’ to check the result.

![create Redo Log Group](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-redoLogGroup.png)


## Role
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

Create a new role in Oracle Database. To create roles, users need a privilege to ‘CREATE ROLE’ and view ‘DBA_VIEWS’.

1. Connect to Database.
2. On the main menu, go to **Create**>**Role**.
3. Enter a name and select an authentication method.
4. On the Role Tab, select a role to grant and click [Grant Selected].
5. Set System Privilege and Object Privilege.
6. Click [View SQL] and view the generated statement.
7. Click [OK] to confirm result.

![create role](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-role.png)


## Rollback Segment
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle>)

This section explains how to create rollback segment.

1. Connect to database.
2. On the main menu bar, go to **Create**>**Rollback Segment**.
3. Enter a name and choose a tablespace.
4. If the owner has DBA authority, it could be created to use in all instance.
5. Choose a status and enter a value.
6. Click [View SQL] and check the generated SQL statements.
7. Click [Ok] and check the result.

![create Rollback Segment](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-rollbackSegment.png)

## Sequence
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,postgresql,sqlserver,db2,tibero>)

This section explains how to create new sequence on database.

1. Connect to database.
2. On the main menu bar, go to **Create**>**Sequence…**.
3. Specify a name and a schema for the sequence to be created.
4. Specify values and set Options. Specify cycle to generate sequence from the initial value when it reaches the maximum value, and specify ‘Sequential’ to number sequence in numerical order.  
5. Click [View SQL] and check the generated statements.
6. Click [OK] and check the result.

![create sequence](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-sequence.png)


## Synonym
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,sqlserver,tibero>)

This section explains how to create synonyms on database.

1. Connect to database.
2. On the main menu bar, go to **Create**>**Synonym**.
3. Choose either _Local_ or _Remote_.
4. Choose a schema and an object type.
5. Click [Search] or enter keyword value. You can filter with % when searching keyword.
6. Select an object and click [Add]. Or simply double-click the object.
7. Enter a name for the synonym. Select [All Public].
8. Click [View SQL] and check the generated SQL statements.
9. Click [OK] to check reseult.

![create synonym](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-synonym.png)

## Table
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero,cubrid>)

Create Tables in Database.

1. Connect to Database.
2. On the main menu bar, go to **Create**>**Table**.
3. Enter a name and select schema and table space.
4. Enter comment.
5. On Tab, enter column name and information.
6. Enter value for constraints, storage, and Option. 
7. Click [View SQL] to check the generated statements.
8. Click [Ok] to confirm the result.

![create table](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-table.png)


## Tablespace
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

This section explains how to create a new table space on database.

1. Connect to database.
2. On the main menu bar, go to **Create**>**Tablespace**.
3. Give a name to the tablespace to be created, and click [Add].
4. ‘Add Data File’ window will open.
5. Click [Find] and select a list of data files. Then, click [OK].
6. Enter a file size on ‘Add Data File’ window and click [OK].
7. Check the added data file and select a Status. If you are working online, the generated tablespace would be activated as soon as it is created; if you are working offline, it will be created in inactive form thus cannot be used right away.
8. Select a type. “Persistent” is tablespace for general objects. “Temporary” is a tablespace for temporary objects.
9. Click [Option] on Storage tab.
10. Click [View SQL] and check the autogenerated SQL statements.
11. Click [OK] and check the result.

![create tableSpace](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-tableSpace-01.png)


## User
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

This section explains how to create a new user on database. To create a new user, you must be privileged to ’CREATE USER’ and to view ‘DBA_VIEWS’.

1. Connect to database.
2. On the main menu bar, go to **Create**>**User**.
3. On the ‘User Information’ tab, enter a user name and select an authentication method.
4. Database authentication requires password to log in. Operating system authentication requires OS user authentication.
5. Choose a default value for table space and select a temporary table space.
6. Select a resource profile and select a status.

![Define Roles for New User](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/manager/manager-securityManager-newUser.png)

7. Select a role on the ‘Role’ tab, and click ‘Grant Selected’.

![Define Roles for New User Role](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/manager/manager-securityManager-role.png)

8. Select values on _System Privileges_, _Object Privileges_, and _Resource Group_.
9. Click [View SQL] to view the generated statements.
10. Click [OK] and check result.




## View
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero,cubrid>)

Create a new view in Database. To create a view, you need CREATE VIEW privilege.

1. Connect to Database.
2. On the main menu, go to **Create**>**View**.
3. Enter the name of the View and select a schema.
4. Enter comment.
5. Enter Script on Script Tab.
6. Click [SQL Validate] to check its validation.
7. On View Information Tab, click [Auto Add] or [Add] to add a column.
8. Set option and click [View SQL] to see the generated statements.
9. Click [OK] to check results.

![create view](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-view.png)


## Profile
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

This section explains how to create new profile in database. On profile, you can set limitations on database resource. The owner who is assigned a profile will have limited access to resourced defined by the profile. To create profile, owner’s ‘CREATE PROFILE’ privilege is required.

1. Connect to database.
2. On the main menu bar, go to **Create**>**Profile**.
3. Enter a name for the profile.
4. Select values for details on general tab.

![create profile](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-profile-01.png)

The contents of general tab are given below:
- CPU/Session: CPU time limit on session.
- CPU/Call: CPU time limit on a call(Parser, Execute, Fetch, etc)
- Connect time: The total elapsed time limit for a session.
- Idle Time: The permitted periods of continuous active time during a session.

Database service options are as followed
- Concurrent Sessions: The number of sessions running at the same time.
- Reads/Session: The number of data blocks session reads from memory and disk.
- Reads/Call: The number of data read from SQL Calls(Parse, Execute, Fetch etc.).
- Private SGA: The size of the private SGA space for a session.
- Composite Limit: The total resource cost for a session, expressed in service units

5. Set details for password tab.

![create profile - Set details for password tab](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-profile-02.png)

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


## Procedure/Function/Package
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero,cubrid>)

This section explains how to create new procedure/function/package on database.

1. Connect to database.
2. On the main menu bar, go to **Create**>**Procedure/Function/Package**.
3. Click [Open Example] on the object tab to create.
4. Click [Edit] to open [PL/SQL Editor] or [SQL Editor].
5. Write and edit codes based on example fitting to logic.

![create Procedure/Function/Package](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-PLSQLObject.png)


## Trigger
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero,cubrid>)

Create a new Trigger in Database. To create Triggers, users must have a privilege to ‘CREATE TRIGGER’.

1. Connect to Database.
2. On the main menu bar, go to **Create**>**Trigger**.
3. Enter a name.
4. Select a schema and a table.
5. Select a trigger timing and event to run.
6. Select _FOR EACH_. ROW will be executed when changes are made in columns. STATEMENT will be executed if changes are made in the related columns regardless of the data in the column.  
7. Enter conditions to run on Where Clause.
8. Click [View SQL] to view generated statements.
9. Click [OK] to confirm the result.

![create trigger](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-trigger.png)
