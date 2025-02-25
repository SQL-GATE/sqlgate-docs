---
id: 0103-create-query
title: 쿼리 만들기
sidebar_label: 쿼리 만들기
---

## 쿼리 작성기를 이용하여 쿼리 만들기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero,cubrid>)

쿼리작성기를 이용하여 쿼리를 작성하는 방법은 아래와 같습니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**쿼리 작성기**를 선택합니다. 또는 새로 만들기 도구 모음에서 [쿼리 작성기]를 클릭합니다. 빈 쿼리 작성기 문서가 열립니다.

![쿼리작성기 메뉴](https://resource.sqlgate.com/resource/captures/query-editor/query-builder-menu-ko.png)

3. 개체 패널에서 쿼리에 필요한 테이블과 뷰들을 선택한 후에 쿼리 작성기 창에 끌어서 놓기를 합니다.
4. 표시할 필드들을 선택합니다.
5. 관계가 있는 필드를 선택한 후에 다른 테이블의 필드에 끌어서 놓기를 합니다.
6. 조건 절을 추가하기 위해서는 화면 하단의 **...**>**Add condition**을 클릭합니다.

![쿼리작성기 조건 추가, query builder add condition, Criteria, 기준](https://resource.sqlgate.com/resource/captures/query-editor/query-builder-add-condition-ko.png)

7. [실행] 버튼을 클릭하거나 F5를 누릅니다.
8. **결과** 탭에서 쿼리 실행 결과를 확인합니다.

![쿼리작성기 실행 결과, query builder run result, 오라클](https://resource.sqlgate.com/resource/captures/query-editor/query-builder-result-ko.png)

9. **SQL** 탭에서 생성된 SQL 쿼리문을 확인합니다.

![쿼리작성기 SQL, query builder SQL, 오라클](https://resource.sqlgate.com/resource/captures/query-editor/query-builder-SQL-ko.png)

> 팁 : 테이블 Alias를 지정하려면 테이블 이름을 더블 클릭하고 Alias를 입력합니다.