---
id: user
title: User
sidebar_label: User
---

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

