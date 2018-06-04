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

[PL/SQL 편집기 창]

4. 실행 버튼을 누르거나 F5를 누릅니다.
5. DBMS OUTPUT 탭에서 쿼리 실행 결과를 확인합니다.

[DBMS_OUTPUT 결과 창에서 실행 결과 확인]


## Toolbar of DBMS OUTPUT Tab

| Button | Instruction | Shortcut keys | Action |
| --- | --- | --- | --- |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/24C27D09F0BD97C9A95474DBCF858A10.jpg) | Turn off DBMS OUTPUT| | Disables DBMS OUTPUT. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/4A5C96A673660B4FFCE1C49D2D740273.jpg)| Turn on DBMS OUTPUT| | Enables DBMS OUTPUT. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/7769FBA2E28842B9ED0E7AB9BCDCB381.jpg) | Refresh DBMS OUTPUT Result| | Refreshes the result. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/6E81E9E388839D0E0FD5E3B0DC6BBAD7.jpg) | Set Buffer Size| | Set the size of DBMS OUTPUT buffer. Oracle databases support from 2KB to 1MB. The default is set to 10000KB.|
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/06D79AC3E46F1C8F152ED5D0058B6A15.jpg) | Clear Output| | Clears off the output.|
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/B4E338254BC06D0D6A587D6E6F16522F.jpg) | Save as File| | Saves the result as set file type. |
| | | | You can set refresh interval. |
| | | | If you check ‘Auto scroll to last line’, it will take you to the last line of the query run result.|