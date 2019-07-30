---
id: 0102-run-query
title: 쿼리 실행하기
sidebar_label: 쿼리 실행하기
---


## 데이터베이스에 접속하기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero,cubrid>)

데이터베이스 서버에 접속하는 방법을 설명합니다.

- 주 메뉴 **파일**>**새 접속**을 선택합니다. 또는 도구 모음에서 [새 접속] 버튼을 클릭하거나 Ctrl+Alt+L를 누릅니다. **새 접속** 창이 열립니다.
- 데이터베이스와 접속을 위한 항목을 입력한 후에 [접속]을 클릭합니다.

![새 접속, 오라클](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/start/new-connection-ko.png)

> 노트: 한국어, 일본어, 중국어등을 올바르게 사용하기 위해서는 *유니코드 사용*을 체크하십시오. 기본 포트는 8629이며 기본 SID는 Oracle입니다. 서버의 환경을 확인하고 입력하십시오.

## 접속 옵션
- 색: 접속 세션 별로 색상을 선택할 수 있습니다.
- 즐겨찾기만 보기: 접속 목록에 즐겨찾기를 선택한 항목만 표시합니다.
- 암호 표시: 접속 목록에 사용자의 암호를 보여줍니다.
- 접속 테스트: 접속 정보를 통해 연결을 테스트 할 수 있습니다.
> 노트: 오라클 클라이언트를 설치하지 않을 경우 접속 오류가 발생하며, 클라이언트 설치를 권장합니다.

## 쿼리를 실행하고 편집하기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero,cubrid>)

**쿼리를 생성하고 실행하는 방법은 아래와 같습니다.**
1. 오라클 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**SQL 편집기**를 선택합니다. 또는 새로 만들기 도구 모음에서 [SQL 편집기]를 클릭하거나 Ctrl+N를 누릅니다.
3. SQL을 작성합니다.
4. [실행] 버튼을 클릭하거나 F5를 누릅니다.
5. 쿼리 실행 결과를 확인합니다.