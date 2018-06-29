---
id: 0202-using-editor
title: SQL 편집기 사용
sidebar_label: SQL 편집기 사용
---

## SQL 한 개의 쿼리 실행 하기
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

SQL 편집기의 쿼리 실행하는 방법을 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**SQL 편집기**를 실행합니다. 또는 새로 만들기 도구 모음에서 SQL 편집기를 클릭하거나 Ctrl+N를 누릅니다.
3. SQL을 작성합니다.
4. 실행 버튼을 클릭하거나 F5를 누릅니다.
![빈쿼리에디터, empty query editor, 기본에디터, default editor, SQL Editor, SQL 에디터, 오라클](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/query-editor/query-editor-empty-ko.png)
> 노트: 편집기에서 개체 키워드 옆에서 F4(스키마 설명)를 누르면 테이블 보기가 실행됩니다.

5. 데이터 탭에서 쿼리 실행 결과를 확인합니다.
> 노트: SQLGate는 ‘자동 커밋 활성화’가 기본 설정입니다.



## 여러 개의 쿼리 동시에 실행하기
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

SQL 편집기의 여러 개 쿼리를 동시에 실행하는 방법을 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**SQL 편집기**를 실행합니다. 또는 새로 만들기 도구 모음에서 SQL쿼리 편집기를 클릭하거나 Ctrl+N를 누릅니다.
3. SQL 편집기에서 여러 개의 SQL을 작성합니다. (SQL사이 구분 기호는 ; 입니다.)
4. 실행 버튼을 클릭하거나 F5를 누릅니다.
5. 데이터 탭에서 쿼리 실행 결과를 확인합니다.

![여러개의 쿼리 동시에 실행하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/run-multi-query-ko.png)



## 하위 쿼리 실행하기
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

SQL 편집기의 하위 쿼리 실행하는 방법을 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 파일>새로 만들기>SQL 편집기를 실행합니다. 또는 새로 만들기 도구 모음에서 SQL쿼리 편집기를 클릭하거나 Ctrl+N를 누릅니다.
3. SQL 편집기에서 하위 쿼리 포함한 SQL문을 작성합니다.
4. 하위 쿼리를 클릭 하면 자동으로 배경색이 바뀌며, 블록을 씌우지 않아도 실행 할 수 있습니다.
5. 도구 모음에 '하위 쿼리 블록 실행 버튼 (Alt+F5)'이 활성화 됩니다.
6. '하위 쿼리 블록 실행' 버튼을 클릭하거나 주 메뉴 **쿼리**>**하위 쿼리** 블록 실행을 클릭하거나 Alt+F5를 누릅니다.
7. 데이터 탭에서 하위 쿼리 실행 결과를 확인합니다.

![하위 쿼리 블록 실행하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/run-sub-query-ko.png)


## 여러 개의 쿼리에서 한 개의 쿼리만 실행하기
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

SQL 편집기의 여러 개의 쿼리에서 한 개의 쿼리만 실행하기를 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**SQL 편집기**를 실행합니다. 또는 새로 만들기 도구 모음에서 SQL 편집기를 클릭하거나 Ctrl+N를 누릅니다.
3. SQL 편집기에서 여러 개의 SQL을 작성합니다.
4. 실행할 SQL에 커서를 이동합니다.
5. 주 메뉴 **쿼리**>**현재 SQL실행**을 클릭합니다. 또는 실행 도구 모음 현재 SQL 실행 버튼을 클릭하거나 Ctrl+F5 또는 Ctrl+Enter를 누릅니다.
6. 데이터 탭에서 쿼리 실행 결과를 확인합니다.

![여러개의 쿼리에서 한개](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/run-selected-query-ko.png)



## 선택 영역 내 일괄 변경
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

SQL 편집기의 선택 영역 내에서 일괄 변경 기능을 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**SQL 편집기**를 실행합니다. 또는 새로 만들기 도구 모음에서 [SQL 편집기]를 클릭하거나 Ctrl+N를 누릅니다.
3. SQL 편집기에서 SQL을 작성합니다.
4. 편집 할 SQL을 마우스 왼쪽 클릭으로 선택 합니다. 선택 영역 바꾸기 버튼이 생깁니다.
5. 선택 영역 바꾸기 버튼을 클릭합니다.
6. 수정하려는 부분을 선택 시 일괄 변경이 적용될 SQL문에 텍스트 상자 모양이 표시되며, 이 상태에서 수정하면 모든 텍스트 상자의 내용이 한꺼번에 변경됩니다.

![선택영역에서 문자열 일괄 변환하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/selection-sql-replace-ko.png)

## 쿼리를 실행하고 바로 편집하기
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

SQL 편집기의 쿼리를 실행하고 바로 편집하기를 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**SQL 편집기**를 실행합니다. 또는 새로 만들기 도구 모음에서 [SQL 편집기]를 클릭하거나 Ctrl+N를 누릅니다.
3. SQL을 작성합니다.
4. 주 메뉴 쿼리>현재 SQL실행을 클릭합니다. 또는 실행 도구 모음 현재 SQL 실행 버튼을 클릭하거나 F6를 누릅니다.
5. 쿼리 실행 결과를 확인합니다.
6. 수정할 데이터를 더블 클릭 한 후 편집합니다.
7. 레코드 저장 버튼을 클릭합니다.

![쿼리를 실행하고 바로 편집하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/run-and-modify-current-SQL-ko.png)



## 데이터 추가하기
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

결과 창에서 데이터를 추가하는 방법을 설명합니다.

1. 결과 창 네비게이터의 레코드 추가 버튼을 클릭합니다.
2. 맨 아래 빈 레코드가 추가됩니다.
3. 데이터를 입력합니다.
4. 레코드 저장 버튼을 클릭합니다.
5. 새로 고침 버튼을 클릭하여 실행 결과를 확인합니다.

![쿼리를 실행하고 결과 편집에서 데이터 추가](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/add-record-at-query-result-ko.png)

## 데이터 삭제하기
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

결과 창에서 데이터를 삭제하는 방법을 설명합니다.

1. 삭제할 데이터를 클릭합니다.
2. 결과 창 네비게이터의 레코드 삭제 버튼을 클릭합니다.
3. 삭제하시겠습니까? 메시지 창이 열립니다. 확인 버튼을 클릭합니다.
4. 새로 고침 버튼을 클릭하여 실행 결과를 확인합니다.

![쿼리를 실행하고 결과 편집에서 데이터 삭제](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/delete-record-at-query-result-ko.png)


## SQL 기록으로 작업하기
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

SQL 기록으로 작업하는 방법을 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **보기**>**SQL 기록**을 실행합니다. 또는 도구 모음 SQL 기록을 클릭하거나 F8를 누릅니다.
3. 재사용할 SQL의 Reuse를 선택합니다.
4. 더블 클릭 또는 네비게이터 편집기에 추가 버튼을 클릭하거나 Ctrl+Enter 누릅니다
5. SQL 편집기에서 실행 결과를 확인합니다.

![아이콘, SQL 기록으로 작업하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/work-sql-history-ko.png)
> 노트: SQL은 SQL History그룹에 저장이 되고 프로시저와 함수는 Procedure/Function History그룹에 저장됩니다.



## SQL 기록 바로 가기 키 일람표
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

SQL 기록의 바로 가기 키는 다음과 같습니다.

| 버튼                                                                                                                                                   | 명령어             | 바로 가기 키    | 동작                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ---------- | ----------------------------------- |
| ![아이콘, SQL 기록 그룹확장](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/icon-sql-history-expand-group.png)                   | 그룹 확장           |            | 하위 그룹을 보여줍니다.                       |
| ![아이콘, SQL 기록 그룹축소](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/icon-sql-history-collapse.png)                       | 그룹 축소           |            | 루트 그룹으로 축소합니다.                      |
| ![아이콘, SQL 기록 새 그룹](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/icon-sql-history-new-group.png)                      | 새 그룹            |            | 새로운 그룹을 만듭니다.                       |
| ![아이콘, SQL 기록 그룹 수정](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/icon-sql-history-modify-group.png)                  | 그룹 수정           |            | 사용자 그룹의 이름을 바꿉니다.                   |
| ![아이콘, SQL 기록 그룹 삭제](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/icon-sql-history-delete-group.png)                  | 그룹 삭제           |            | 사용자 그룹을 삭제합니다.                      |
| ![아이콘, SQL 기록 SQL 추가](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/icon-sql-history-new-sql.png)                      | SQL 추가          |            | 새 SQL을 추가합니다.                       |
| ![아이콘, SQL 기록 SQL 수정](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/icon-sql-history-modify-sql.png)                   | SQL 수정          |            | 선택한 SQL의 내용을 수정합니다.                 |
| ![아이콘, SQL 기록 SQL 삭제](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/icon-sql-history-delete-sql.png)                   | SQL 삭제          | Del        | 선택한 SQL을 삭제합니다.                     |
| ![아이콘, SQL 기록 SQL 삭제](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/icon-sql-history-delete-sql.png)                   | 그룹 이동           |            | 선택한 SQL의 그룹을 이동합니다.                 |
| ![아이콘, SQL 기록 편집기에 추가](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/icon-sql-history-add-to-editor.png)               | 편집기에 추가         | Ctrl+Enter | 선택한 SQL을 SQL 편집기에 추가합니다.            |
| ![아이콘, SQL 기록 편집기에서 바꾸기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/icon-sql-history-replace-in-editor.png)         | 편집기에서 바꾸기       |            | SQL 편집기의 현재 내용을 삭제하고 선택한 SQL로 바꿉니다. |
| ![아이콘, SQL 기록 새탭에 붙여넣기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/icon-sql-history-add-to-new-tab.png)             | 새 탭에 붙여넣기       |            | 선택한 SQL을 SQL 편집기의 새 탭으로 붙여 넣습니다.    |
| ![아이콘, SQL 기록 클립보드로 복사](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/icon-sql-history-copy-to-clipboard.png)          | 클립보드로 복사        | Ctrl+C     | 선택한 SQL을 클립보드로 복사합니다.               |
| ![아이콘, SQL 기록 현재 그룹의 SQL모두 삭제](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/icon-sql-history-delete-all-in-group.png) | 현재 그룹의 SQL모두 삭제 |            | 선택한 그룹의 SQL을 모두 삭제합니다.              |
| ![icon sql history open file](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/icon-sql-history-open-file.png)            | 파일 열기           |            | SQL 기록 파일 열기를 실행합니다.                |
| ![아이콘, SQL 기록 파일로 저장](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/icon-sql-history-save-to-file.png)                 | 파일로 저장          |            | SQL 기록을 파일로 저장합니다.                  |
| ![icon sql history find](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/icon-sql-history-find.png)                      | 찾기              |            | SQL 기록에서 찾기를 실행합니다.                 |



## 바인드 변수를 이용하여 실행하기
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

바인드 변수를 이용하여 실행하는 방법을 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**SQL 편집기**를 실행합니다. 또는 새로 만들기 도구 모음에서 SQL쿼리 편집기를 클릭하거나 Ctrl+N를 누릅니다.
3. 도구 모음에 바인드 변수 사용(:)을 클릭합니다.

![대체 변수 사용 활성화](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/bind-substitution-variables-active-ko.png)

4. 바인드 변수를 사용하는 SQL을 작성합니다.
5. 실행 버튼을 클릭하거나 F5를 누릅니다.
6. 값을 입력 받는 창이 열립니다. 원하는 값을 입력 합니다.
7. 확인 버튼을 클릭하여 결과 탭에서 쿼리 실행 결과를 확인합니다.

![바인드 변수이용한 SQL 실행 결과](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/bind-variables-run-sql-result-ko.png)


## 대체 변수를 이용하여 실행하기
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

대체 변수를 이용하여 실행하는 방법을 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**SQL 편집기**를 실행합니다. 또는 새로 만들기 도구 모음에서 SQL쿼리 편집기를 클릭하거나 Ctrl+N를 누릅니다.
3. 도구 모음에 대체 변수 사용(&)을 클릭합니다.
![대체 변수 사용 활성화](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/bind-substitution-variables-active-ko.png)
4. 대체 변수를 사용하는 SQL을 작성합니다.
5. 실행 버튼을 클릭하거나 F5를 누릅니다.
6. 값을 입력 받는 창이 나타납니다. 원하는 값을 입력합니다.
7. 확인 버튼을 클릭하고 결과 탭에서 쿼리 결과를 확인합니다.
![대체 변수이용한 SQL 실행](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/bind-substitution-variables-run-sql-ko.png)
