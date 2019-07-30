---
id: 0104-edit-data
title:  SQL 문장을 작성하지 않고 데이터 편집하기
sidebar_label: SQL 문장을 작성하지 않고 데이터 편집하기
---

## 테이블에서 데이터 편집하기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero,cubrid>)

Insert, Delete, Update 문장을 실행하지 않고, 테이블의 데이터를 편집기에서 편집하는 방법은 아래와 같습니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**SQL 편집기**를 선택합니다. 또는 새로 만들기 도구 모음에서 [SQL 편집기]를 클릭하거나 Ctrl+N를 누릅니다.
3. 쿼리 실행 결과에 수정할 데이터가 포함되도록 SQL 문장을 작성합니다.
4. 실행 도구 모음 [현재 SQL 실행 및 수정] 버튼을 클릭하거나 F6를 누릅니다.

![현재 SQL 실행 및 수정, run and modify current SQL, 오라클](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/edit-data/run-and-modify-current-SQL-ko.png)

5. 쿼리 실행 결과를 확인합니다.
6. 수정할 데이터를 더블 클릭한 후에 편집합니다.
7. 편집이 완료되면 그리드의 다른 곳을 클릭하거나, 상단의 네비게이터의 [레코드 저장] 버튼을 클릭합니다.
8. 레코드를 편집하면 트랜잭션 발생하므로 필요에 따라 주 메뉴 **쿼리**>**커밋(F10)** 또는 **쿼리**>**롤백(F11)** 을 실행합니다


## 테이블 설명 창에서 데이터 편집하기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero,cubrid>)

테이블 설명 창에서 데이터를 편집하는 방법은 아래와 같습니다.

1. 개체 패널에서 편집할 테이블을 더블 클릭합니다.
2. **설명** 창에서 데이터 탭을 선택합니다.

![테이블설명창에서 데이터 수정](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/edit-data/edit-data-on-table-detail-window-ko.png)

3. 수정할 데이터를 더블 클릭한 후에 편집합니다.
4. 편집이 완료되면 그리드의 다른 곳을 클릭하거나, 상단의 네비게이터의 [레코드 저장] 버튼을 클릭합니다.
5. 레코드를 편집하면 트랜잭션 발생하므로 필요에 따라 주 메뉴 **쿼리**>**커밋(F10)** 또는 **쿼리**>**롤백(F11)** 을 합니다.