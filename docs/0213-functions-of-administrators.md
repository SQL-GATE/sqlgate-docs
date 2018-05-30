---
id: 0213-functions-of-administrators
title: Functions of Administrators
sidebar_label: Functions of Administrators
---


## Register a New User and Grant Privileges

This section explains how to register a new user and grant privileges.

1. Connect to Oracle database as a DBA privileged user.
2. On the main menu bar, go to **Manager**>**Security Manager**. Or, simply click [Security Manager] on Manager Toolbar.
3. Click [New User] on User tab.
4. On User Information tab, enter a name for the user and choose an authentication method.
5. Database authentication requires a password when logging in. Operating system authentication requires a user authentication for the operating system.
6. Choose a default table space value and choose a temporary table space.
7. Choose a resource profile and select a status.

![Register user](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/840CC96FF14F9DEDC684B937F7235E6D.jpg)


## Define Roles for New User

1. On Role tab, select a role and click [Grant Selected].

![Define User Role](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/95650815CE79BF653CE3198BF12C2C86.jpg)



## Grant/Revoke New User System Privileges

1. Select a System Privileges tab.
2. Select system privileges to grant and click [Grant Selected].
3. Use the arrow to grant or revoke privileges.

![Grant/Revoke New User System Privileges](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/BA6594551BE6B41EFB24AB14BCE93FF9.jpg)

4. Select Object Privileges tab. Choose a schema and a table, and click [Search].
5. Choose an object name and select privileges. Click [Add Selected] arrow.

![Grant User Object Privilege](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/F4B4A7EBCE3CE95F996790E26A4C18E9.jpg)

6. Grant a tablespace quota.

![Grant user a tablespace quota](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/91A97388249B5571FAF36A44FAD41C39.jpg)

7. Click [View SQL] and check the generated statements.

![Check generated SQL](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/7167F157AB2EF88294034E5662A2D659.jpg)

8. Click [OK] and check the result.



## Grant System Privileges to Users

This section explains how to grant system privileges to users.

1. Connect to Oracle database as a privileged user, as a DBA.
2. On the main menu bar, go to **Manager**>**Security Manager**. Or, click [Security Manage] on the Manager Toolbar.
3. On System Privileges tab, select a privilege to grant, right-click and select [Grant System Privileges].

![Grant system privileges to users](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/DF69ECB1F910FD7F4ABB527017C3DEF7.jpg)

4. Choose a user and click [Grant Selected].

![Grant selected system privileges to users](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/197858DE7ED73AE88E38494DD194CEFB.jpg)

5. Click Role tab, select roles, and click [Grant Selected].

![Grant system privileges to users](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/AFB6C14A5C1F499809842435CC217F95.jpg)

6. Click [View SQL] and check the generated SQL statements.
7. Click [OK] and check the result.


## Expand Tablespace Using Tablespace Manager

This section explains how to expand tablespace using Tablespace manager.

1. Connect to Oracle database as a DBA.
2. On the main menu bar, go to **Manager**>**Tablespace Manager**. Or, click [Tablespace Manager] on the Manager Toolbar.
3. On Tablespace tab, choose a tablespace and right-click [Alter Tablespace]. Or, click [Tablespace].

![Alter Tablespace](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/1B049BE702EF86FBC62FE2E98F86356F.jpg)

4. On **Alter Tablespace** window, click [Add].

![Alter tablespace device](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/B23289F0FB028FAB5093FA81211C5299.jpg)

5. On **Add Data File** window, click ‘Browse’. You will be given a list of data files.

![View list of data files](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/F8CBB333A41C5D2E1B5AA22D290E559B.jpg)

6. Choose a file and click [OK].
7. Enter a file size and click [OK].
8. Check the result.



## View Session Info with Session Browser

This section explains how to view session info using session browser.

1. Connect to Oracle database as a DBA.
2. On the main menu bar, go to **Manager**>**Session Browser**. Or, simply click [Session Browser] on Manager Toolbar.
3. On the session tab, choose a grouping method. Sessions will be grouped as selected.
4. Click [Session] and check the information on session info tab.

![View session info](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/3BD43C10F4191623B26A99B56F4C5BB7.jpg)



## Trace Sessions

This section explains how to trace sessions.

1. Connect to Oracle database as a DBA.
2. On the main menu bar, go to **Manager**>**Session Browser**. Or, simply click [Session Browser] on Manager Toolbar.
3. Right-click the session to trace and click [Start tracing the selected session].

![Trace sessions](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/CA22A907B64DEAFC59451CBD82603D4D.jpg)



## Check the Session Locked by Transaction

This section explains how to view sessions that are locked by transaction.

1. Connect to Oracle database as a DBA.
2. On the main menu bar, go to **Manager**>**Session Browser**. Or, click [Session Browser] on Manager Toolbar.
3. Click Blocking Locks tab.
4. If there is any session locked by transaction, its status will be displayed.
5. Check the session information. If the session is unnecessary, right-click [End Session].

![End session](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/9FABAF57BBECAB32CC46942EAE771BE2.jpg)