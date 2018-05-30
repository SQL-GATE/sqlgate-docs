---
id: 0201-manage-new-connections
title: 접속 관리
sidebar_label: 접속 관리
---

## 새 접속 연결 관리

새 접속의 접속 옵션을 설명합니다.


![데이터베이스 새 접속 연결 관리](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/7A79FE499B23E0FE77481002A9B2385B.jpg)

- 호스트: 데이터베이스가 설치된 서버 IP 주소를 입력합니다.
- 사용자: 데이터 베이스 접속 권한이 있는 사용자 아이디를 입력합니다.
- 암호: 해당 사용자의 암호를 입력합니다.
- 유니코드 사용: 한국어, 일본어, 중국어 등을 올바르게 사용하기 위해서는 유니코드 사용을 선택하십시오.
- 암호 저장: 사용자의 암호 저장 여부를 선택 할 수 있습니다.
- 포트: 오라클 데이터베이스의 포트 번호를 입력합니다 기본 포트는 ‘8629’입니다
- SID: 오라클 데이터베이스 접속할 서버의 SID를 입력합니다. 기본 SID는 ‘Oracle’ 입니다.
- 문자 집합: 클라이언트의 문자 집합(Character Set) 형식을 선택합니다.
- 날짜 형식: 날짜 표기의 유형을 선택합니다.
- 색: 여러 개의 오라클 데이터베이스에 접속을 할 경우 세션 별로 고유색을 정할 수 있습니다.
- 접속 테스트: 입력한 정보로 데이터베이스 연결 접속을 테스트합니다.
- 즐겨찾기만 보기: 즐겨찾기를 선택한 접속 정보만 보여줍니다.
- 암호 표시: 접속 정보에 등록된 사용자의 암호를 보여줍니다.

  
## 접속 오류 메시지 유형

오라클 데이터베이스의 중요 접속 오류 메시지는 다음과 같습니다.

| 오류 코드 | 원인 |
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

> 팁 : 자세한 정보는 [Oracle RDBMS 에러 참조 안내서](http://www.tmaxdata.com/pdsDownload.do?board_file_seq=102)를 참조하십시오. 