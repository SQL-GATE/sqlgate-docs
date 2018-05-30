---
id: 0201-manage-new-connections
title: Manage Connections
sidebar_label: Manage Connections
---

## New Connections

This section explains how to set a new connection.


![Managing New Connection for Oracle Database](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/7A79FE499B23E0FE77481002A9B2385B.jpg)

- Host: Input the server IP where Oracle database is installed.
- User: Enter a user ID that has access authority.
- Password: Enter password for the ID.
- Use Unicode: Check to view Korean, Japanese, and Chinese characters correctly.
- Save Pasword: Check to save password.
- Port: Enter a port number of the Oracle database. A default port number is '8629'.
- SID: Enter SID of the server to connecto to Oracle database. A default SID is 'Oracle'.
- Character Set: Select a character set for the client.
- Date Format: Select a date format.
- Color: You can select different colors for each session when connecting to multiple Oracle databases.
- Test Connection: Test the connection with the information you have entered.
- View Favorites Only: Display the access information of the connections that are added to the favorites.
- Show Password: Show the password for the users that are registered.

  
  
  
## Types of Connection Error Messages

The following are important messages for Oracle database connection error.

| Error Code | Cause |
| --- | --- |
| 2002 | DSN(Database Source Name) file was not found. |
| 2048 | Data source was not found. |
| 2131 | Generic I/O Error. |
| 6006 | Data dictionary needs ALTERDD process. |
| 7200 | Occurred while processing parameter '_EX_USE_SORT_AIO' |
| 12003 | Unable to open a session. |
| 12079 | The requested DB_NAME does not match with the server DB_NAME. |
| 17001 | Login failed: invalid user name or password. |
| 17004 | Permission denied. |
| 90401 | Connection refused by the server. |
| 130105 | Unable to start gateway process |

> Tip : For more information, see Oracle RDBMS Error Reference Guide. http://www.tmaxdata.com/pdsDownload.do?board_file_seq=102