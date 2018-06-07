---
id: 0204-dbms-output
title: DBMS_OUTPUT
sidebar_label: DBMS_OUTPUT
---

## 쿼리 실행하고 DBMS_OUTPUT 결과 보기

DBMS_OUTPUT은 오라클 데이터베이스가 제공하는 메시지 버퍼 패키지입니다. 
프로시저,함수, 트리거 등에 의해 DBMS_OUTPUT 버퍼에 저장된 메시지는 다른 프로시저,함수, 트리거등에서 읽어올 수 있습니다.

쿼리 실행하고 DBMS_OUTPUT으로 결과 보기를 설명합니다.

1. 오라클 데이터베이스에 접속합니다.
2. 주 메뉴 파일>새로 만들기>PL/SQL 편집기를 실행합니다. 또는 새로 만들기 도구 모음에서 PL/SQL 편집기를 클릭합니다.
3. PL/SQL 쿼리를 작성합니다.
4. 실행 버튼을 누르거나 F5를 누릅니다.
5. DBMS OUTPUT 탭에서 쿼리 실행 결과를 확인합니다.

![DBMS_OUTPUT view](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/DBMS_OUTPUT/dbmsoutput-plsql-editor.png)


## Toolbar of DBMS OUTPUT Tab

| Button | Instruction | Shortcut keys | Action |
| --- | --- | --- | --- |
| ![Enables/disables DBMS OUTPUT.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/DBMS_OUTPUT/icon-sql-editor-turnOffDBMSOutput.png) | Turn off DBMS OUTPUT| | Disables DBMS OUTPUT. |
| ![Enables/disables DBMS OUTPUT.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/DBMS_OUTPUT/icon-sql-editor-turnOffDBMSOutput.png) | Turn on DBMS OUTPUT| | Enables DBMS OUTPUT. |
| ![Refreshes the result.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/DBMS_OUTPUT/icon-sql-editor-refreshDBMSOutput.png) | Refresh DBMS OUTPUT Result| | Refreshes the result. |
| ![Set the size of DBMS OUTPUT buffer. Oracle databases support from 2KB to 1MB. The default is set to 10000KB.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/DBMS_OUTPUT/icon-sql-editor-setBufferSize.png) | Set Buffer Size| | Set the size of DBMS OUTPUT buffer. Oracle databases support from 2KB to 1MB. The default is set to 10000KB.|
| ![Clears off the output.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/DBMS_OUTPUT/icon-sql-editor-clearOutput.png) | Clear Output| | Clears off the output.|
| ![Saves the result as set file type.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/DBMS_OUTPUT/icon-sql-editor-saveAsFile.png) | Save as File| | Saves the result as set file type. |
| | | | You can set refresh interval. |
| | | | If you check ‘Auto scroll to last line’, it will take you to the last line of the query run result.|