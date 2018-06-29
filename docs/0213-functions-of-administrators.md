---
id: 0213-functions-of-administrators
title: Functions of Administrators
sidebar_label: Functions of Administrators
---


## Register a New User and Grant Privileges
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

This section explains how to register a new user and grant privileges.

1. Connect to Oracle database as a DBA privileged user.
2. On the main menu bar, go to **Manager**>**Security Manager**. Or, simply click [Security Manager] on Manager Toolbar.
3. Click [New User] on User tab.
4. On User Information tab, enter a name for the user and choose an authentication method.
5. Database authentication requires a password when logging in. Operating system authentication requires a user authentication for the operating system.
6. Choose a default table space value and choose a temporary table space.
7. Choose a resource profile and select a status.

![Define Roles for New User](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/manager/manager-securityManager-newUser.png)


## Define Roles for New User
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,sqlserver,tibero>)

1. On Role tab, select a role and click [Grant Selected].

![Define Roles for New User Role](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/manager/manager-securityManager-role.png)


## Grant/Revoke New User System Privileges
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,sqlserver,tibero>)

1. Select a System Privileges tab.
2. Select system privileges to grant and click [Grant Selected].
3. Use the arrow to grant or revoke privileges.

![Grant/Revoke New User System Privileges](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/manager/manager-securityManager-systemPrivileges.png)

4. Select Object Privileges tab. Choose a schema and a table, and click [Search].
5. Choose an object name and select privileges. Click [Add Selected] arrow.

![Define Roles for New User Object Privilege](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/manager/manager-securityManager-objectPrivilege.png)

6. Grant a tablespace quota.

![Grant a tablespace quota.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/manager/manager-securityManager-tableSpaceQuota.png)

7. Click [View SQL] and check the generated statements.
8. Click [OK] and check the result.



## Grant System Privileges to Users
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,sqlserver,tibero>)

This section explains how to grant system privileges to users.

1. Connect to Oracle database as a privileged user, as a DBA.
2. On the main menu bar, go to **Manager**>**Security Manager**. Or, click [Security Manage] on the Manager Toolbar.
3. On System Privileges tab, select a privilege to grant, right-click and select [Grant System Privileges].

![Grant System Privileges to Users](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/manager/manager-securityManager-grantSystemPrivileges.png)

4. Choose a user and click [Grant Selected].

![Grant System Privileges to Users](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/manager/manager-securityManager-grantSystemPrivileges-user.png)

5. Click Role tab, select roles, and click [Grant Selected].

![Grant System Privileges to Users Role](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/manager/manager-securityManager-grantSystemPrivileges-role.png)

6. Click [View SQL] and check the generated SQL statements.
7. Click [OK] and check the result.


## Expand Tablespace Using Tablespace Manager
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

This section explains how to expand tablespace using Tablespace manager.

1. Connect to Oracle database as a DBA.
2. On the main menu bar, go to **Manager**>**Tablespace Manager**. Or, click [Tablespace Manager] on the Manager Toolbar.
3. On Tablespace tab, choose a tablespace and right-click [Alter Tablespace]. Or, click [Alter Tablespace].

![Expand Tablespace Using Tablespace Manager](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/manager/manager-tableSpaceManager.png)

4. On **Alter Tablespace** window, click [Add].

![Expand Tablespace Using Tablespace Manager Alter Tablespace](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/manager/manager-tableSpaceManager-alterTableSpace.png)

5. On **Add Data File** window, click ‘Browse’. You will be given a list of data files.

![Expand Tablespace Using Tablespace Manager Add Data File](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/manager/manager-tableSpaceManager-alterTableSpace-addDataFile.png)

6. Choose a file and click [OK].
7. Enter a file size and click [OK].
8. Check the result.



## View Session Info with Session Browser
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

This section explains how to view session info using session browser.

1. Connect to Oracle database as a DBA.
2. On the main menu bar, go to **Manager**>**Session Browser**. Or, simply click [Session Browser] on Manager Toolbar.
3. On the session tab, choose a grouping method. Sessions will be grouped as selected.
4. Click [Session] and check the information on session info tab.

![View Session Info with Session Browser](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/manager/manager-sessionBrowser.png)



## Trace Sessions
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

This section explains how to trace sessions.

1. Connect to Oracle database as a DBA.
2. On the main menu bar, go to **Manager**>**Session Browser**. Or, simply click [Session Browser] on Manager Toolbar.
3. Right-click the session to trace and click [Start tracing the selected session].

![View Session Info with Session Browser Trace](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/manager/manager-sessionBrowser-trace.png)



## Check the Session Locked by Transaction
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

This section explains how to view sessions that are locked by transaction.

1. Connect to Oracle database as a DBA.
2. On the main menu bar, go to **Manager**>**Session Browser**. Or, click [Session Browser] on Manager Toolbar.
3. Click Blocking Locks tab.
4. If there is any session locked by transaction, its status will be displayed.
5. Check the session information. If the session is unnecessary, right-click [End Session].

![View Session Info with Session Browser Kill](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/manager/manager-sessionBrowser-kill.png)