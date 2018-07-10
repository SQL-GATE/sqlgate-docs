---
id: 0204-run-sql-execution-plan
title: SQL 실행계획 활용
sidebar_label: SQL 실행계획 활용
---


## SQL 실행 계획을 실행하고 인덱스 확인하기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

SQL 실행 계획을 실행하는 방법을 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**SQL 편집기**를 실행합니다. 또는 새로 만들기 도구 모음에서 [SQL 편집기]를 클릭하거나 Ctrl+N를 누릅니다.
3. SQL을 작성합니다.
4. 주 메뉴 **쿼리**>**현재 SQL실행 계획**을 클릭합니다. 또는 실행 도구 모음 [현재 SQL 실행 계획] 버튼을 클릭하거나 F7를 누릅니다.
5. 실행 계획 탭에서 트리 뷰 실행 결과를 확인합니다.

![SQL 실행 계획을 실행하고 인덱스 확인하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/execution-plan-ko.png)

6. 순서도 탭에서 순서도를 확인합니다.

![SQL 실행계획 플로우 차트로 보기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/execution-plan-aflow-chart-ko.png)

7. 인덱스 실행 결과를 확인합니다.

![SQL 실행계획 텍스트로 보기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/execution-plan-text-ko.png)



## 블록 SQL 실행 계획으로 실행하기 하기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,db2,tibero>)

블록 SQL 실행 계획을 실행하는 방법을 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**SQL 편집기**를 실행합니다. 또는 새로 만들기 도구 모음에서 [SQL 편집기]를 클릭하거나 Ctrl+N를 누릅니다.
3. SQL을 작성합니다.
4. 블록 SQL 실행 계획을 클릭하거나 Alt+F7를 누릅니다.
5. 실행 계획 탭에서 트리 뷰를 확인합니다.

![블록 SQL 실행 계획으로 실행하기 하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/execution-plan-block-ko.png)
