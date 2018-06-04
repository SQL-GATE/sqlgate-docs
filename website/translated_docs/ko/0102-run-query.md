---
id: 0102-run-query
title: 쿼리 실행하기
sidebar_label: 쿼리 실행하기
---


## 데이터베이스에 접속하기

데이터베이스 서버에 접속하는 방법을 설명합니다.

- 주 메뉴 **파일**>**새 접속**을 선택합니다. 또는 도구 모음에서 [새 접속] 버튼을 클릭하거나 Ctrl+Alt+L를 누릅니다. **새 접속** 창이 열립니다.
- 데이터베이스와 접속을 위한 항목을 입력한 후에 [접속]을 클릭합니다.

![새접속](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/C0DC7094EF271F7BC9CA82FBEAFFDCB2.jpg)

> 노트: 한국어, 일본어, 중국어등을 올바르게 사용하기 위해서는 *유니코드 사용*을 체크하십시오. 기본 포트는 8629이며 기본 SID는 Oracle입니다. 서버의 환경을 확인하고 입력하십시오.

- 접속 옵션
- 색: 접속 세션 별로 색상을 선택할 수 있습니다.
- 접속 테스트: 접속 정보를 통해 연결을 테스트 할 수 있습니다.
- 즐겨찾기만 보기: 접속 목록에 즐겨찾기를 선택한 항목만 표시합니다.
- 암호 표시: 접속 목록에 사용자의 암호를 보여줍니다.
> 노트: 오라클 클라이언트를 설치하지 않을 경우 접속 오류가 발생하며, 클라이언트 설치를 권장합니다.

## 쿼리를 실행하고 편집하기

**쿼리를 생성하고 실행하는 방법은 아래와 같습니다.**
1. 오라클 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**SQL 편집기**를 선택합니다. 또는 새로 만들기 도구 모음에서 [SQL 편집기]를 클릭하거나 Ctrl+N를 누릅니다.
3. SQL을 작성합니다.
4. [실행] 버튼을 클릭하거나 F5를 누릅니다.
5. 쿼리 실행 결과를 확인합니다.


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


## DBMS OUTPUT 탭의 도구 모음

| 버튼 | 명령어 | 바로 가기 키 | 동작 |
| --- | --- | --- | --- |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/24C27D09F0BD97C9A95474DBCF858A10.jpg) | DBMS OUTPUT 끄기| | DBMS OUTPUT을 비활성화합니다. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/4A5C96A673660B4FFCE1C49D2D740273.jpg)| DBMS OUTPUT 켜기| | DBMS OUTPUT을 활성화합니다. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/7769FBA2E28842B9ED0E7AB9BCDCB381.jpg) | DBMS OUTPUT 결과 새로 고침| | 실행 결과를 새로 고칩니다. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/6E81E9E388839D0E0FD5E3B0DC6BBAD7.jpg) | 버퍼 크기 설정| | DBMS OUTPUT 버퍼 크기를 설정합니다. 오라클 데이터베이스는 최소 2K에서 1메가를 지원합니다. 기본 설정은 10000K로 되어있습니다.|
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/06D79AC3E46F1C8F152ED5D0058B6A15.jpg) | 출력 지우기| | 출력 창의 내용을 지웁니다.|
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/B4E338254BC06D0D6A587D6E6F16522F.jpg) | 파일로 저장| | 실행 결과를 파일 형식에 맞춰 저장합니다. |
| | | | 새로 고침 시간을 설정할 수 있습니다. |
| | | | 마지막 줄로 자동 스크롤을 체크하면 쿼리 실행 결과의 마지막 줄로 이동합니다. |