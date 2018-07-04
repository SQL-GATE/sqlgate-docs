---
id: 0204-dbms-output
title: DBMS_OUTPUT
sidebar_label: DBMS_OUTPUT
---

## 쿼리 실행하고 DBMS_OUTPUT 결과 보기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

DBMS_OUTPUT은 오라클 데이터베이스가 제공하는 메시지 버퍼 패키지입니다. 
프로시저,함수, 트리거 등에 의해 DBMS_OUTPUT 버퍼에 저장된 메시지는 다른 프로시저,함수, 트리거등에서 읽어올 수 있습니다.

쿼리 실행하고 DBMS_OUTPUT으로 결과 보기를 설명합니다.

1. 오라클 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**PL/SQL 편집기**를 실행합니다. 또는 새로 만들기 도구 모음에서 [PL/SQL 편집기]를 클릭합니다.
3. PL/SQL 쿼리를 작성합니다.
4. 실행 버튼을 누르거나 F5를 누릅니다.
5. DBMS OUTPUT 탭에서 쿼리 실행 결과를 확인합니다.

![DBMS_OUTPUT view](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/DBMS_OUTPUT/dbmsoutput-plsql-editor.png)




## Toolbar of DBMS OUTPUT Tab
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

| Button                                                                                                                                                                                                                           | Instruction          | Shortcut keys | Action                                                                         |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | ------------- | ------------------------------------------------------------------------------ |
| ![Enables/disables DBMS OUTPUT.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/DBMS_OUTPUT/icon-sql-editor-turnOffDBMSOutput.png)                                                                            | Turn off DBMS OUTPUT |               | DBMS OUTPUT을 비활성화 합니다.                                                         |
| ![Enables/disables DBMS OUTPUT.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/DBMS_OUTPUT/icon-sql-editor-turnOffDBMSOutput.png)                                                                            | Turn on DBMS OUTPUT  |               | DBMS OUTPUT을 활성화 합니다.                                                          |
| ![Refreshes the result.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/DBMS_OUTPUT/icon-sql-editor-refreshDBMSOutput.png)                                                                                    | DBMS OUTPUT 결과 새로 고침 |               | 실행결과를 새로 고칩니다.                                                                 |
| ![Set the size of DBMS OUTPUT buffer. Oracle databases support from 2KB to 1MB. The default is set to 10000KB.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/DBMS_OUTPUT/icon-sql-editor-setBufferSize.png) | 버퍼크기 설정              |               | DBMS OUTPUT 버퍼크기를 설정합니다. 오라클 데이터베이스는 최소 2K에서 1MB를 지원합니다. 기본설정은 10000K로 되어있습니다. |
| ![Clears off the output.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/DBMS_OUTPUT/icon-sql-editor-clearOutput.png)                                                                                         | 모두 지우기               |               | 출력 창의 내용을 지웁니다.                                                                |
| ![Saves the result as set file type.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/DBMS_OUTPUT/icon-sql-editor-saveAsFile.png)                                                                              | 파일로 저장               |               | 실행 결과를 파일 형식에 맞춰 저장합니다.                                                        |

- 새로 고침 시간을 설정할 수 있습니다.
- 마지막 줄로 자동 스크롤을 체크하면 쿼리 실행 결과의 마지막 줄로 이동합니다.