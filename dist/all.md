 

## SQLGate 설치하기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

SQLGate 설치 마법사를 이용하여 사용자의 컴퓨터 설치하는 과정을 설명합니다.

**SQLGate를 설치하려면**

1. 설치 시작을 위해 SQLGateFor[Database system]Dev.exe를 실행합니다.
2. 설치 언어를 선택하고 [확인] 버튼을 클릭합니다.
3. **사용자 계약 페이지**에서 "사용자 계약에 동의합니다." 를 선택하고 [다음]을 클릭합니다.
4. **설치할 위치 선택**창에서 SQLGate가 설치 될 폴더를 선택합니다. 다른 폴더를 선택하려면 [찾아보기]를 클릭하십시오. 그리고 [다음]을 클릭합니다.
5. **시작 메뉴 폴더 선택**창에서 프로그램의 바로 가기를 저장할 폴더를 선택합니다. 시작 메뉴 폴더는 기본으로 선택되어 있습니다. 다른 폴더를 선택하려면 [찾아보기]를 클릭하십시오. 그리고 [다음]을 클릭합니다.
6. **추가 사항 적용**창에서는 설치과정에서 추가로 적용하고자 하는 사항을 선택합니다. '바탕 화면에 아이콘 생성'과 '빠른 실행에 아이콘 생성' 두가지 아이콘을 생성할 수 있습니다. 그리고 [다음]을 클릭합니다.
7. [설치] 버튼을 클릭하여 설치를 시작하거나, [뒤로]를 클릭하여 설치 내용을 검토하거나 변경할 수 있습니다. 설치를 하려면 [설치] 버튼을 클릭하고 취소를 하려면 [취소] 버튼을 클릭하십시오.
8. 마지막 페이지에서는 [SQLGate 실행]을 선택하면 [완료] 버튼 클릭 후 바로 실행됩니다.


## SQLGate 제거하기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

SQLGate를 제거하는 과정을 설명합니다.

1. 삭제를 시작하려면 **제어판**> **프로그램 추가/제거** 메뉴로 갑니다.
2. **SQLGate**를 선택합니다.
3. [제거] 버튼을 클릭합니다.
4. 제거 창이 열립니다. 제거를 하려면 [예]를 클릭합니다.  SQLGate 제거가 시작됩니다.
5. 제거가 성공적이면 "SQLGate 의 제거가 끝났습니다." 라는 메시지가 표시됩니다. [확인] 버튼을 클릭하면 제거가 끝납니다.
> 팁: 일부 항목을 제거할 수 없습니다. 관련 항목들을 직접 제거하시기 바랍니다 라는 메시지는 설치 폴더에 사용자가 생성한 일부 파일이 제거 되지 않았기 때문입니다. 완벽하게 제거 하려면 설치 폴더를 모두 삭제하시기 바랍니다.



## 데이터베이스에 접속하기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

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
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

**쿼리를 생성하고 실행하는 방법은 아래와 같습니다.**
1. 오라클 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**SQL 편집기**를 선택합니다. 또는 새로 만들기 도구 모음에서 [SQL 편집기]를 클릭하거나 Ctrl+N를 누릅니다.
3. SQL을 작성합니다.
4. [실행] 버튼을 클릭하거나 F5를 누릅니다.
5. 쿼리 실행 결과를 확인합니다.


## 쿼리 작성기를 이용하여 쿼리 만들기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

쿼리작성기를 이용하여 쿼리를 작성하는 방법은 아래와 같습니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**쿼리 작성기**를 선택합니다. 또는 새로 만들기 도구 모음에서 [쿼리 작성기]를 클릭합니다. 빈 쿼리 작성기 문서가 열립니다.

![쿼리작성기 메뉴](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/query-editor/query-builder-menu-ko.png)

3. 개체 패널에서 쿼리에 필요한 테이블과 뷰들을 선택한 후에 쿼리 작성기 창에 끌어서 놓기를 합니다.
4. 표시할 필드들을 선택합니다.
5. 관계가 있는 필드를 선택한 후에 다른 테이블의 필드에 끌어서 놓기를 합니다.
6. 조건 절을 추가하기 위해서는 화면 하단의 **...**>**Add condition**을 클릭합니다.

![쿼리작성기 조건 추가, query builder add condition, Criteria, 기준](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/query-editor/query-builder-add-condition-ko.png)

7. [실행] 버튼을 클릭하거나 F5를 누릅니다.
8. **결과** 탭에서 쿼리 실행 결과를 확인합니다.

![쿼리작성기 실행 결과, query builder run result, 오라클](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/query-editor/query-builder-result-ko.png)

1. **SQL** 탭에서 생성된 SQL 쿼리문을 확인합니다.

![쿼리작성기 SQL, query builder SQL, 오라클](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/query-editor/query-builder-SQL-ko.png)

> 팁 : 테이블 Alias를 지정하려면 테이블 이름을 더블 클릭하고 Alias를 입력합니다.



## 테이블에서 데이터 편집하기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

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
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

테이블 설명 창에서 데이터를 편집하는 방법은 아래와 같습니다.

1. 개체 패널에서 편집할 테이블을 더블 클릭합니다.
2. **설명** 창에서 데이터 탭을 선택합니다.

![테이블설명창에서 데이터 수정](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/edit-data/edit-data-on-table-detail-window-ko.png)

3. 수정할 데이터를 더블 클릭한 후에 편집합니다.
4. 편집이 완료되면 그리드의 다른 곳을 클릭하거나, 상단의 네비게이터의 [레코드 저장] 버튼을 클릭합니다.
5. 레코드를 편집하면 트랜잭션 발생하므로 필요에 따라 주 메뉴 **쿼리**>**커밋(F10)** 또는 **쿼리**>**롤백(F11)** 을 합니다.
 |
| DBase파일      | *.dbf         |
| 텍스트 파일       | *.txt,*.csv   |
| Excel 파일     | *.xlsx, *.xls |
| MS Access 파일 | *.mdb         |

### 개체 패널/개체 탐색기에서 Excel 파일 데이터 가져오기
1. **개체 패널** 또는 **개체 탐색기**에서 테이블을 선택합니다.
2. 마우스 오른쪽을 클릭하고 [데이터 가져오기]를 선택합니다.
3. **데이터 가져오기 마법사** 창이 열립니다. 파일 유형에 *Excel 파일*을 체크합니다. [다음]을 클릭합니다.
4. **가져올 파일 선택** 창에서 [찾아보기]를 클릭하여 가져올 파일을 선택합니다. [다음]을 클릭합니다.
5. **추가 옵션 설정** 창에서 옵션을 설정합니다. [다음]을 클릭합니다.
6. 첫 행: Excel 파일의 데이터에 첫번째 행에 필드 이름이 있으면 2를 입력합니다. 만약 그렇지 않다면 1을 입력합니다.

![데이터 가져오기 마법사 추가 옵션 설정](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/wizard/data-import-wizard-file-additional-option-ko.png)

7. 마지막 행: 입력하지 않으면 파일의 모든 행을 읽습니다.
8. **파일 미리 보기** 창에서는 가져올 파일의 열과 테이블 열을 매핑합니다. 자동 열 매핑을 선택하면 테이블 필드 순서대로 가져올 파일의 열과 매핑합니다. [다음]을 클릭합니다.
9. 열 매핑 창에서 소스 파일과 테이블 필드가 올바르게 매핑이 되었는지 확인합니다.

![Excel 데이터 가져오기 마법사_열 매핑](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/06973AF7048FBE06AA18CC183C576E03.jpg)

> 노트: 열 매핑 창에서 키를 지정하지 않으면 추가, 복사만 활성화 됩니다. 다른 가져오기 모드를 활성화 시키려면 열 매핑 창에서 키를 체크해야 합니다.

10. **데이터 미리 보기** 창에서 가져오기 전에 데이터를 확인합니다. [다음]을 클릭합니다.
11. **실행 요약** 창에서 *가져오기 모드*를 선택하시고 [실행]을 클릭합니다.

![데이터 가져오기 마법사 실행 요약](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/wizard/data-import-wizard-run-summary-ko.png)

- 추가: 대상테이블에 레코드를 추가합니다.
- 업데이트: 소스의 레코드와 일치하는 대상 레코드 업데이트
- 추가/업데이트: 대상 레코드가 존재하면 업데이트, 그렇지 않으면 추가합니다.
- 삭제: 소스의 레코드와 일치하는 대상 레코드를 삭제합니다.
- 복사: 모든 대상 레코드를 삭제하고 소스 내용으로 바꾸기 합니다.
- 새로 추가: 대상 레코드가 없을 경우에만 레코드를 추가합니다.
12. 마지막으로 성공 여부를 확인 후에 확인 버튼을 클릭합니다.

### 개체 패널/개체 탐색기에서 텍스트 또는 .CSV 파일 데이터 가져오기
1. **개체 패널** 또는 **개체 탐색기**에서 테이블을 선택합니다.
2. 마우스 오른쪽을 클릭하고 [데이터 가져오기]를 선택합니다.
3. **데이터 가져오기 마법사** 창이 열립니다.  파일 유형에 *텍스트 파일*을 체크합니다. [다음]을 클릭합니다.
4. **가져올 파일 선택** 창에서 [...]를 클릭 후 가져올 파일을 선택합니다. [다음]을 클릭합니다.
5. **파일 옵션 설정** 창에서 옵션을 설정합니다. [다음]을 클릭합니다. 데이터 구분 기호 선택 중에 하나를 선택합니다.

![데이터 가져오기 마법사 옵션 설정](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/wizard/data-import-wizard-file-option-ko.png)

- 필드 구분 기호: 데이터 행에서 각 필드를 구분하는 문자이며, 각 필드 사이에 탭,(쉼표) 또는 특별한 기호가 있을 경우 체크합니다.
- 고정된 너비: 각 필드 사이에 문자의 너비가 고정되어 있을 경우 체크합니다.
- 필드 구분 기호: 필드 구분 기호를 체크하고 각 필드를 구분하는 기호를 체크합니다. 기호가 없으면 기타 기호를 체크하고 입력란에 입력합니다.
- 줄 바꿈: 파일에서 바꿈 문자를 구분하는 CRLF,CR,LF 중에 선택합니다.
- 한정자: 파일에서 문자열을 어떻게 구분하는지를 표시하는 데 사용되는 한정자(Qualifier)를 없음, 작은따옴표 또는 큰따옴표 중에서 선택합니다.

6. **파일 미리 보기** 창에서는 가져올 파일의 열과 테이블 열을 매핑합니다. *자동 열 매핑*을 선택하면 테이블 필드 순서대로 가져올 파일의 열과 매핑합니다. [다음]을 클릭합니다.
7. **열 매핑 창**에서 소스 파일과 테이블 필드가 올바르게 매핑이 되었는지 확인합니다.

![Excel 데이터 가져오기 마법사_열 매핑](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/06973AF7048FBE06AA18CC183C576E03.jpg)

> 노트: 열 매핑 창에서 키를 지정하지 않으면 추가, 복사만 활성화 됩니다.  다른 가져오기 모드를 활성화시키려면 **열 매핑 창**에서 *키*를 체크해야 합니다.

8. **데이터 미리 보기** 창에서 가져오기 전에 데이터를 확인합니다. [다음]을 클릭합니다.
9. **실행 요약** 창에서 *가져오기 모드*를 선택하시고 [실행]을 클릭합니다.

![데이터 가져오기 마법사 실행 요약](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/wizard/data-import-wizard-run-summary-ko.png)

- 추가: 대상테이블에 레코드를 추가합니다.
- 업데이트: 소스의 레코드와 일치하는 대상 레코드 업데이트를 업데이트 합니다.
- 추가/업데이트: 대상 레코드가 존재하면 업데이트, 그렇지 않으면 추가합니다.
- 삭제: 소스의 레코드와 일치하는 대상 레코드를 삭제합니다.
- 복사: 모든 대상 레코드를 삭제하고 소스 내용으로 바꾸기 합니다.
- 새로 추가: 대상 레코드가 없을 경우에만 레코드를 추가합니다.
10. 마지막으로 성공 여부를 확인 후에 [확인] 버튼을 클릭합니다.


 |
| 2002   | DSN(Database Source Name) file was not found.                 |
| 2048   | Data source was not found.                                    |
| 2131   | Generic I/O Error.                                            |
| 6006   | Data dictionary needs ALTERDD process.                        |
| 7200   | Occurred while processing parameter '_EX_USE_SORT_AIO'        |
| 12003  | Unable to open a session.                                     |
| 12079  | The requested DB_NAME does not match with the server DB_NAME. |
| 17001  | Login failed: invalid user name or password.                  |
| 17004  | Permission denied.                                            |
| 90401  | Connection refused by the server.                             |
| 130105 | Unable to start gateway process                               |

> 팁 : 자세한 정보는 [Oracle RDBMS 에러 참조 안내서](http://www.tmaxdata.com/pdsDownload.do?board_file_seq=102)를 참조하십시오. 

 |
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
> 지원 제품 :
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
> 지원 제품 :
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

 |
| ![Set Background Color](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-setBackgroundColor.png)            | 배경색 설정    |         | 선택한 문자의 배경색을 설정합니다.   |
| ![Use Substitution variables](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-useSubstitutionVariable.png) | 대체 변수 사용  |         | 대체 변수 사용을 설정/해제 합니다.  |
| ![Use bind variables](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-useBindVariable.png)                 | 바인드 변수 사용 |         | 바인드 변수 사용을 설정/해제 합니다. |

 |
| ![Enables/disables DBMS OUTPUT.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/DBMS_OUTPUT/icon-sql-editor-turnOffDBMSOutput.png)                                                                            | Turn off DBMS OUTPUT |               | DBMS OUTPUT을 비활성화 합니다.                                                         |
| ![Enables/disables DBMS OUTPUT.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/DBMS_OUTPUT/icon-sql-editor-turnOffDBMSOutput.png)                                                                            | Turn on DBMS OUTPUT  |               | DBMS OUTPUT을 활성화 합니다.                                                          |
| ![Refreshes the result.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/DBMS_OUTPUT/icon-sql-editor-refreshDBMSOutput.png)                                                                                    | DBMS OUTPUT 결과 새로 고침 |               | 실행결과를 새로 고칩니다.                                                                 |
| ![Set the size of DBMS OUTPUT buffer. Oracle databases support from 2KB to 1MB. The default is set to 10000KB.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/DBMS_OUTPUT/icon-sql-editor-setBufferSize.png) | 버퍼크기 설정              |               | DBMS OUTPUT 버퍼크기를 설정합니다. 오라클 데이터베이스는 최소 2K에서 1MB를 지원합니다. 기본설정은 10000K로 되어있습니다. |
| ![Clears off the output.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/DBMS_OUTPUT/icon-sql-editor-clearOutput.png)                                                                                         | 모두 지우기               |               | 출력 창의 내용을 지웁니다.                                                                |
| ![Saves the result as set file type.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/DBMS_OUTPUT/icon-sql-editor-saveAsFile.png)                                                                              | 파일로 저장               |               | 실행 결과를 파일 형식에 맞춰 저장합니다.                                                        |

- 새로 고침 시간을 설정할 수 있습니다.
- 마지막 줄로 자동 스크롤을 체크하면 쿼리 실행 결과의 마지막 줄로 이동합니다.



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




## 코드 자동 완성 기능을 이용하여 코드 입력 줄이기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

코드 자동 완성 기능을 이용하여 코드 입력 줄이기를 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**PL/SQL 편집기**를 실행합니다. 또는 새로 만들기 도구 모음에서 [PL/SQL 편집기]를 클릭합니다.
3. 프로시저를 작성합니다.
4. PL/SQL 편집기에서 변수, 매개변수로 선언된 값들은 자동으로 나타납니다.
5. 원하는 변수나 매개변수를 커서로 선택 하거나 더블 클릭합니다.
6. 실행 결과를 확인합니다.

![코드 자동 완성 기능을 이용하여 코드 입력 줄이기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/precedure/procedures-autocomplete-ko.png)
> 노트 : 내비게이터는 런타임 코드를 분석하여 매개 변수, 변수, 코드를 트리 구조로 보여줍니다.



## 프로시저의 오류를 찾아서 컴파일 하기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

프로시저의 오류를 찾아서 컴파일 하기를 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**PL/SQL 편집기**를 실행합니다. 또는 새로 만들기 도구 모음에서 [PL/SQL 편집기]를 클릭합니다.
3. 프로시저를 작성합니다.
4. 주 메뉴 **쿼리**>**실행**을 실행합니다. 또는 실행 버튼을 클릭하거나 F5를 누릅니다.
5. 오류가 있으면 오류 탭에 나타나고 편집기는 해당 줄을 표시합니다.
6. 오류를 확인하고 오류를 수정합니다.
7. 실행 버튼을 클릭하거나 F5를 누릅니다.
8. 메세지 창에서 '프로시저가 생성되었습니다.'를 확인합니다.

![프로시저 오류 찾아서 컴파일 하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/precedure/procedure-compile-find-error-ko.png)



## 프로시저 실행하여 결과 값 확인하기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,db2,tibero>)

프로시저 실행하여 결과값 확인하기를 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**PL/SQL 편집기**를 실행합니다. 또는 새로 만들기 도구 모음에서 [PL/SQL 편집기]를 클릭합니다.
3. 프로시저를 작성합니다.

![프로시저 작성](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/precedure/procedure-check-result-01-ko.png)

4. 주 메뉴 **쿼리**>**실행**을 실행하여 컴파일 합니다. 또는 도구 모음에서 [실행] 버튼을 클릭하거나 F5를 누릅니다.
5. 정상 컴파일 된 메세지 확인 후, [프로시저 실행] 버튼을 클릭하여 프로시저를 실행 합니다.

![프로시저 컴파일 후 실행](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/precedure/procedure-check-result-02-ko.png)

6. 파라미터 값을 입력 하고 , SQL 실행 버튼을 클릭하거나, F5를 누릅니다.

![프로시저 실행 후 파라미터 값 입력](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/precedure/procedure-check-result-03-ko.png)

7. SQL DBMS OUTPUT 탭에서 실행 결과를 확인합니다.



## 프로시저 코딩하면서 버전 기록 보기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,db2,tibero>)

프로시저 코딩하면서 버전 기록 보기를 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**PL/SQL 편집기**를 실행합니다. 또는 새로 만들기 도구 모음에서 [PL/SQL 편집기]를 클릭합니다.
3. 프로시저를 작성합니다.
4. 주 메뉴 **보기**>**SQL 기록**을 실행합니다. 또는 도구 모음에서 [SQL 기록] 버튼을 클릭하거나 F8을 누릅니다.
5. [Procedure/Function]을 클릭합니다.
6. [버전 기록]을 클릭하면 프로시저의 내용이 나타납니다. 더블 클릭하거나 Ctrl+Enter를 누르면 편집기에 추가가 됩니다.

![버전 기록 보기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/precedure/procedure-view-version-ko.png)

## 재컴파일 하기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

### 오류가 난 프로시저 확인하기
오류가 난 프로시저 확인하기를 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **보기**>**개체 탐색기**를 실행합니다.
3. 프로시저 개체를 클릭합니다.
4. 오류가 난 프로시저를 확인합니다.

![오류가 난 프로시저 확인](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/precedure/precedure-recompile-01-ko.png)



### 오류가 난 프로시저 디버깅 및 재컴파일 하기

오류가 난 프로시저 디버깅 및 재컴파일 하기를 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **보기**>**개체 탐색기**를 실행합니다.
3. 프로시저 개체를 클릭합니다.
4. 오류가 난 프로시저 개체에서 마우스 오른쪽 클릭하고 수정을 선택 합니다.
5. PL/SQL 편집기가 실행 됩니다. 오류를 수정합니다.
6. 주 메뉴 **도구**>**개체 재컴파일**을 실행합니다. 또는 도구 모음에서 개체 재컴파일을 클릭합니다.

![개체 재컴파일 선택](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/precedure/precedure-recompile-02-ko.png)


7. 스키마와 프로시저를 선택하고 [검색]을 클릭합니다.
8. 재컴파일 할 프로시저 개체를 선택하고 [컴파일] 버튼을 클릭합니다

![개체 재컴파일 실행](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/precedure/precedure-recompile-03-ko.png)

9. 선택한 PROCEDURE를 컴파일하시겠습니까? 창을 확인합니다. [예]를 클릭합니다.
10. 실행 결과를 확인합니다.

![개체 재컴파일 실행 결과 확인](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/precedure/precedure-recompile-04-ko.png)





## 쿼리 결과를 Excel로 내보내기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

쿼리 결과를 Excel로 내보내는 방법을 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**SQL 편집기**를 선택합니다. 또는 새로 만들기 도구 모음에서 SQL 편집기를 클릭하거나 Ctrl + N를 누릅니다.
3. SQL을 작성합니다.
4. [실행] 버튼을 클릭하거나 F5를 누릅니다.
5. 그리드에서 마우스 오른쪽을 클릭하고 **데이터 내보내기**>**Excel 파일**을 선택합니다.

![Excel 파일로 내보내기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/wizard/data-export-wizard-04-ko.png)

6. **데이터 내보내기 마법사** 창이 열립니다. 내보낼 데이터 파일 유형을 선택합니다. [다음]을 클릭합니다.

![데이터 내보내기 마법사 파일 유형 선택](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/export-data/data-export-wizard-selectFileType-ko.png)

7. **파일 경로 및 추가 옵션 설정** 창에서 내보낼 파일의 경로와 파일명을 선택합니다. 각 파일 별 레코드 수를 체크하면 입력된 레코드 수 보다 많을 경우 파일을 추가로 만듭니다.

![데이터 내보내기 마법사 옵션 설정](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/export-data/data-export-wizard-setFilePath-ko.png)

> 팁 : 내보낼 파일명이 dept.xlsx 이면, 각 파일 별 레코드 수가 입력 된 레코드 수 보다 많으면 dept_001.xlsx, dept_002.xlsx 처럼 생성됩니다.

8. [실행]을 클릭합니다. 생성된 파일을 Excel에서 확인합니다.

![데이터 내보내기 마법사로 생성된 결과 확인](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/10949DA2E068FF62A95625A7D1F0B7AE.jpg)



## 개체 탐색기에서 데이터 내보내기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

개체 탐색기에서 데이터 내보내기를 설명합니다.

1. 데이터베이스에 접속합니다.
2. 개체 패널 또는 개체 탐색기에서 테이블을 선택합니다.
3. 마우스 오른쪽을 클릭하고 [데이터 내보내기]를 선택합니다.

![개체 탐색기에서 데이터 내보내기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/wizard/data-export-wizard-02-ko.png)

4. **데이터 내보내기 마법사** 창이 열립니다. 내보낼 데이터 파일 유형을 선택합니다. [다음]을 클릭합니다.

![데이터 내보내기 마법사 파일 유형 선택](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/export-data/data-export-wizard-selectFileType-ko.png)

5. **파일 경로 및 추가 옵션 설정** 창에서 내보낼 파일을 선택합니다. 각 파일 별 레코드 수를 체크하면 입력된 레코드 수 보다 많을 경우 파일을 추가로 만듭니다.
6. [실행]을 클릭합니다.

![데이터 내보내기 마법사 옵션 설정](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/export-data/data-export-wizard-setFilePath-ko.png)

> 노트: 내보낼 파일명이 dept.xlsx 이면, 각 파일 별 레코드 수가 입력 된 레코드 수 보다 많으면 dept_001.xlsx, dept_002.xlsx 처럼 생성됩니다.
7. 생성된 파일을 확인합니다.

![데이터 내보내기 마법사로 생성된 결과 확인](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/10949DA2E068FF62A95625A7D1F0B7AE.jpg)


## Excel에서 테이블로 데이터 가져오기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

Excel에서 테이블로 데이터를 가져오는 방법을 설명합니다.

1. 개체 패널 또는 개체 탐색기에서 테이블을 선택합니다.
2. 마우스 오른쪽을 클릭하고 [데이터 가져오기]를 선택합니다.
3. **데이터 가져오기 마법사** 창이 열립니다. 파일 유형 선택에 Excel 파일을 선택합니다. [다음]을 클릭합니다.
4. **가져올 파일 선택** 창에서 찾아보기를 클릭하여 가져올 파일을 선택합니다. [다음]을 클릭합니다.
5. **추가 옵션 설정** 창에서 옵션을 설정합니다. [다음]을 클릭합니다.
6. 첫 행: Excel 파일의 데이터에 첫번째 행에 필드 이름이 있으면 '2'를 입력합니다. 만약 그렇지 않다면 '1'을 입력합니다.

![데이터 가져오기 마법사 추가 옵션 선택](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/wizard/data-import-wizard-file-additional-option-ko.png)

7. 마지막 행: 입력하지 않으면 Excel 파일의 모든 행을 읽습니다.
8. **파일 미리 보기** 창에서는 가져올 파일의 열과 테이블 열을 매핑합니다. 자동 열 매핑을 선택하면 테이블 필드 순서대로 가져올 파일의 열과 매핑합니다. [다음]을 클릭합니다.

![데이터 가져오기 마법사 파일 미리 보기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/wizard/data-import-wizard-file-preview-ko.png)

9. **열 매핑** 창에서 소스 파일과 테이블 필드가 올바르게 매핑이 되었는지 확인합니다.

![데이터 가져오기 마법사 열 매핑](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/wizard/data-import-wizard-column-mapping-ko.png)
10. **데이터 미리 보기** 창에서 가져오기 전에 데이터를 확인합니다. [다음]을 클릭합니다.
11. **실행 요약** 창에서 가져오기 모드를 선택하시고 [실행]을 클릭합니다.
12. 마지막으로 성공 여부 확인 후에 [확인] 버튼을 클릭합니다.

![import data wizard run summary](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/wizard/data-import-wizard-run-summary-ko.png)

**가져오기 모드의 옵션은 다음과 같습니다.**
- 추가: 대상테이블에 레코드를 추가합니다.
- 업데이트: 소스의 레코드와 일치하는 대상 레코드 업데이트
- 추가/업데이트: 대상 레코드가 존재하면 업데이트, 그렇지 않으면 추가합니다.
- 삭제: 소스의 레코드와 일치하는 대상 레코드를 삭제합니다.
- 복사: 모든 대상 레코드를 삭제하고 소스 내용으로 바꾸기 합니다.
- 새로 추가: 대상 레코드가 없을 경우에만 레코드를 추가합니다.

## 기타 파일에서 데이터 가져오기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

기타 파일에서 데이터 가져오기를 설명합니다.

1. 개체 패널 또는 개체 탐색기에서 테이블을 선택합니다.
2. 마우스 오른쪽을 클릭하고 [데이터 가져오기]를 선택합니다.
3. **데이터 가져오기 마법사** 창이 열립니다. 파일 유형에 텍스트 파일을 체크합니다. [다음]을 클릭합니다.
4. **가져올 파일 선택** 창에서 [찾아보기]를 클릭하여 가져올 파일을 선택합니다. [다음]을 클릭합니다.
5. **파일 옵션 설정** 창에서 옵션을 설정합니다. [다음]을 클릭합니다. 데이터 구분 기호 선택 중에 하나를 선택합니다. 파일 옵션 설정은 다음과 같습니다.
![데이터 가져오기 마법사 파일 옵션 설정](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/wizard/data-import-wizard-file-option-ko.png)
- 필드 구분 기호: 데이터 행에서 각 필드를 구분하는 문자이며, 각 필드 사이에 탭,(쉼표) 또는 특별한 기호가 있을 경우 체크합니다.
- 고정 너비: 각 필드 사이에 문자의 너비가 고정되어 있을 경우 체크합니다.
- 필드 구분 기호: 필드 구분 기호를 체크하고 각 필드를 구분하는 기호를 선택합니다. (기호가 없으면 기타 기호를 선택하고 입력란에 입력합니다.)
- 줄 바꿈: 파일에서 바꿈 문자를 구분하는 CRLF,CR,LF 중에 선택합니다.
- 한정자: 파일에서 문자열을 어떻게 구분하는지를 표시하는 데 사용되는 한정자(Qualifier)를 없음, 작은따옴표 또는 큰따옴표 중에서 선택합니다
6. **추가 옵션 설정** 창에서 옵션을 설정합니다.

![데이터 가져오기 마법사 추가 옵션 설정](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/wizard/data-import-wizard-file-additional-option-en.png)

7. **파일 미리 보기** 창에서는 가져올 파일의 열과 테이블 열을 매핑합니다. 자동 열 매핑을 선택하면 테이블 필드 순서대로 가져올 파일의 열과 매핑합니다. [다음]을 클릭합니다.
열 매핑 창에서 소스 파일과 테이블 필드가 올바르게 매핑이 되었는지 확인합니다.
8. **데이터 미리 보기** 창에서 가져오기 전에 데이터를 확인합니다. [다음]을 클릭합니다.
9. [실행 요약] 창에서 _가져오기 모드_를 선택하시고 [실행]을 클릭합니다.
10. 마지막으로 성공 여부 확인 후에 [확인] 버튼을 클릭합니다.

![import data wizard run summary](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/wizard/data-import-wizard-run-summary-en.png)

**가져오기 모드의 옵션은 다음과 같습니다.**
- 추가: 대상테이블에 레코드를 추가합니다.
- 업데이트: 소스의 레코드와 일치하는 대상 레코드 업데이트를 업데이트 합니다.
- 추가/업데이트: 대상 레코드가 존재하면 업데이트, 그렇지 않으면 추가합니다.
- 삭제: 소스의 레코드와 일치하는 대상 레코드를 삭제합니다.
- 복사: 모든 대상 레코드를 삭제하고 소스 내용으로 바꾸기 합니다.
- 새로 추가: 대상 레코드가 없을 경우에만 레코드를 추가합니다.


## 쿼리 작성기 테이블 추가 및 제거 하기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

쿼리 작성기를 이용하여 테이블 추가 및 제거하는 방법을 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**쿼리 작성기**를 선택합니다. 또는 새로 만들기 도구 모음에서 [쿼리 작성기]를 클릭합니다..
3. 주 메뉴 **보기**>**개체 패널**을 실행합니다. 또는 새로 만들기 도구 모음에서 [개체 패널]을 클릭하거나 F12를 누릅니다. 개체 패널이 열립니다.
4. 개체 패널에서 테이블을 선택한 후에 쿼리 작성기 창에 끌어서 놓기를 합니다.

![개체 패널에서 쿼리 작성기에 테이블 추가 하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/query-builder/queryBuilder-add-delete-table-01-ko.png)

5. 테이블이 추가 된 결과를 확인합니다.추가된 테이블 삭제는 마우스 오른쪽을 클릭하고 [Delete]를 선택합니다.

![쿼리 작성기에서 테이블 삭제 하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/query-builder/queryBuilder-add-delete-table-02-ko.png)

6. 실행 결과를 확인합니다.

## 쿼리 작성기에서 테이블 열 추가하기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

쿼리 작성기에서 테이블 열 추가하기를 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**쿼리 작성기**를 선택합니다. 또는 새로 만들기 도구 모음에서 [쿼리 작성기]를 클릭합니다..
3. 주 메뉴 **보기**>**개체 패널**을 실행합니다. 또는 새로 만들기 도구 모음에서 [개체 패널]을 클릭하거나 F12를 누릅니다. 개체 패널이 열립니다.
4. 개체 패널에서 필요한 테이블들을 선택한 후에 쿼리 작성기 창에 끌어서 놓기를 합니다.

![개체 패널에서 쿼리 작성기에 테이블 추가 하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/query-builder/queryBuilder-add-column-01-ko.png)

5. 표시할 테이블 열들을 선택합니다.

![쿼리 작성기에서 테이블 열 추가하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/query-builder/queryBuilder-add-column-02-ko.png)

6. SQL탭에서 자동 생성된 쿼리를 확인 합니다.


## 테이블 간 JOIN 하기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

쿼리 작성기에서 테이블 간 JOIN 하는 방법을 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**쿼리 작성기**를 선택합니다. 또는 새로 만들기 도구 모음에서 [쿼리 작성기]를 클릭합니다..
3. 주 메뉴 **보기**>**개체 패널**을 실행합니다. 또는 새로 만들기 도구 모음에서 [개체 패널]을 클릭하거나 F12를 누릅니다. 개체 패널이 열립니다.
4. 개체 패널에서 필요한 테이블들을 선택한 후에 쿼리 작성기 창에 끌어서 놓기를 합니다.
5. 표시할 테이블 열들을 선택합니다.
6. 관계가 있는 열을  선택한 후에 다른 테이블의 열에 끌어서 놓기를 합니다.
7. 연결선(Link)에서 마우스 오른쪽을 클릭하고 [Property]를 선택합니다.

![테이블에 관련 있는 필드 끌어서 놓기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/query-builder/queryBuilder-create-join-01-ko.png)

8. 'Link Properties' 창에서 값을 입력합니다. [Ok]를 클릭합니다.

![테이블 조인하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/query-builder/queryBuilder-create-join-02-ko.png)

9. SQL탭에서 자동 생성된 쿼리를 확인 합니다.

![자동 생성된 SQL 확인하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/query-builder/queryBuilder-create-join-03-ko.png)

10. 실행 버튼을 클릭하거나 F5를 누릅니다.
11. 결과 탭에서 쿼리 실행 결과를 확인합니다.

![테이블 조인 결과 확인](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/query-builder/queryBuilder-create-join-04-ko.png)

> 팁 : 테이블 Alias를 지정하려면 테이블 이름을 더블 클릭하고 Alias를 입력합니다.


## 셀 여러 개 선택 하기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

데이터 그리드에서 셀 여러 개 선택하는 방법을 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**SQL 편집기**를 실행합니다. 또는 새로 만들기 도구 모음에서 [SQL 편집기]를 클릭하거나 Ctrl+N를 누릅니다.
3. SQL을 작성합니다.
4. 실행 버튼을 클릭하거나 F5를 누릅니다.
5. 데이터 탭에서 쿼리 결과를 확인 합니다.
6. 마우스 왼쪽을 클릭하고 셀을 여러 개 선택합니다.

![데이터 그리드에서 셀 여러 개 선택하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/datagrid/datagrid-selectMultipleCells-ko.png)


## 선택한 셀 값을 연산하기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

데이터 그리드에서 선택한 셀 값 연산 하기를 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**SQL 편집기**를 실행합니다. 또는 새로 만들기 도구 모음에서 [SQL 편집기]를 클릭하거나 Ctrl+N를 누릅니다.
3. SQL을 작성합니다.
4. [실행] 버튼을 클릭하거나 F5를 누릅니다.
5. 데이터 탭에서 쿼리 결과를 확인 합니다.
6. 마우스 왼쪽을 클릭한 상태로 셀들을 선택합니다
7. 상태 막대에서 선택된 열의 개수와 결과값을 확인합니다.

![상태 막대에서 결과값 확인](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/datagrid/datagrid-operateSelectedCell-ko.png)

> 노트: 기본 설정은 합계입니다. 상태 막대에서 마우스 오른쪽을 클릭하고 개수, 숫자 개수, 평균, 최대값, 최소값을 선택해서 같이 볼 수 있습니다.


## 셀 선택 후 복사하기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

데이터 그리드에서 셀 선택 후 복사하기를 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**SQL 편집기**를 실행합니다. 또는 새로 만들기 도구 모음에서 [SQL 편집기]를 클릭하거나 Ctrl+N를 누릅니다.
3. SQL을 작성합니다.
4. [실행] 버튼을 클릭하거나 F5를 누릅니다.
5. 데이터 탭에서 쿼리 결과를 확인 합니다.
6. 마우스 왼쪽을 클릭하고 셀을 여러 개 선택합니다.
7. 마우스 오른쪽을 클릭하고 **복사**>**선택한 셀 복사**를 선택합니다.

![데이터 그리드에서 셀 복사하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/datagrid/datagrid-copySelectedCells-ko.png)

8. 편집기 창이나 외부 편집기에서 붙여넣기 혹은 Ctrl+V를 누릅니다.
9. 실행 결과를 확인합니다.



## 결과물을 Excel로 저장하기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

데이터 그리드에서 실행 결과물을 Excel로 저장 하기를 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**SQL 편집기**를 실행합니다. 또는 새로 만들기 도구 모음에서 SQL쿼리 편집기를 클릭하거나 Ctrl+N를 누릅니다.
3. SQL을 작성합니다.
4. [실행] 버튼을 클릭하거나 F5를 누릅니다.
5. 데이터 탭에서 쿼리 결과를 확인 합니다.
6. 마우스 오른쪽을 클릭하고 **데이터 내보내기**>**Excel파일**을 선택합니다.
7. **데이터 내보내기 마법사** 창이 열립니다. 내보낼 데이터 파일 유형을 선택합니다. [다음]을 클릭합니다. 파일 경로 및 추가 옵션 설정을 합니다. [실행]을 클릭합니다.
8. 생성된 파일을 Excel에서 확인합니다.



## 선택한 열 고정하기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

데이터 그리드에서 선택한 열로 고정 하기를 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**SQL 편집기**를 실행합니다. 또는 새로 만들기 도구 모음에서 **SQL 편집기**를 클릭하거나 Ctrl+N를 누릅니다.
3. SQL을 작성합니다.
4. [실행] 버튼을 클릭하거나 F5를 누릅니다.
5. 데이터 탭에서 쿼리 결과를 확인 합니다.
6. 열을 선택하고 마우스 오른쪽을 클릭하고 [선택한 열 고정]을 선택합니다.
7. 실행 결과를 확인합니다.

![선택한 열 고정](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/datagrid/datagrid-pinSelectedColumn-ko.png)



## 선택한 열로 정렬하기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

데이터 그리드에서 선택한 열로 정렬하기를 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**SQL 편집기**를 실행합니다. 또는 새로 만들기 도구 모음에서 [SQL 편집기]를 클릭하거나 Ctrl+N를 누릅니다.
3. SQL을 작성합니다.
4. [실행] 버튼을 클릭하거나 F5를 누릅니다.
5. 데이터 탭에서 쿼리 결과를 확인 합니다.
6. 열을 선택하고 마우스 오른쪽을 클릭하고 정렬을 선택합니다.

![열 선택하고 정렬하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/datagrid/datagrid-sortSelectedColumn-ko.png)

7. 정렬 창이 열립니다. 정렬 기준을 선택하고 확인을 클릭합니다.

![정렬 기준 선택](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/datagrid/datagrid-sortSelectedColumn-01-ko.png)

8. 실행 결과를 확인합니다.(https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/datagrid/datagrid-sortSelectedColumn-02.png)

**간단하게 정렬 하는 방법은 다음과 같습니다.**
1. 열 이름에서 마우스 왼쪽 클릭을 합니다.
2. 확인 창이 열립니다. [예]를 클릭합니다.

![간단하게 정렬하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/datagrid/datagrid-sortSelectedColumn-02-ko.png)

3. 열 이름을 클릭하면 오름차순,내림차순 정렬이 됩니다.



## 데이터 가로/세로로 보기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,db2,tibero>)

데이터 그리드에서 데이터 가로/세로로 보기를 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**SQL 편집기**를 실행합니다. 또는 새로 만들기 도구 모음에서 [SQL 편집기]를 클릭하거나 Ctrl+N를 누릅니다.
3. SQL을 작성합니다.
4. [실행] 버튼을 클릭하거나 F5를 누릅니다.
5. 데이터 탭에서 쿼리 결과를 확인 합니다.
6. 그리드에서 마우스 오른쪽을 클릭하고 [가로/세로 보기 변경]을 선택합니다.
7. 실행 결과를 확인합니다.

![데이터 가로/세로 보기 변경](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/datagrid/datagrid-viewDataHorizontallyVertically-ko.png)

![데이터 가로 보기 실행 결과](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/datagrid/datagrid-viewDataHorizontallyVertically-01-ko.png)




## 열 이름을 편집기에 추가하기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

데이터 그리드에서 열 이름을 편집기에 추가 하는 방법을 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**SQL 편집기**를 실행합니다. 또는 새로 만들기 도구 모음에서 **SQL 편집기**를 클릭하거나 Ctrl+N를 누릅니다.
3. SQL을 작성합니다.
4. [실행] 버튼을 클릭하거나 F5를 누릅니다.
5. 데이터 탭에서 쿼리 결과를 확인 합니다.
6. 열 이름을 편집기에 끌어서 놓기를 합니다.
7. 열 이름이 편집기에 추가됩니다.
8. 실행 결과를 확인합니다.

![데이터 그리드에서 열 이름 편집기에 추가](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/datagrid/datagrid-addColumnNameOnTheEditor-ko.png)




## 클립보드의 데이터를 그리드에 추가/변경하기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

클립보드의 데이터를 그리드에 추가/변경하기를 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**SQL 편집기**를 실행합니다. 또는 새로 만들기 도구 모음에서 [SQL 편집기]를 클릭하거나 Ctrl+N를 누릅니다.
3. SQL을 작성합니다.
4. 주 메뉴 **쿼리**>**현재 SQL 실행 및 수정**을 클릭합니다. 또는 실행 도구 모음 [현재 SQL 실행 및 수정] 버튼을 클릭하거나 F6를 누릅니다.

![클립보드 데이터를 그리드에 추가하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/datagrid/datagrid-addModifyClipboardData-ko.png)

5. 데이터 탭에서 쿼리 결과를 확인합니다.
6. 편집기나 외부 편집기에서 구분 기호 탭을 사용하여 입력할 데이터를 만듭니다.
7. 데이터를 마우스 왼쪽을 클릭하고 선택합니다. [복사 하기] 또는 Ctrl+C를 눌러 클립보드로 복사하기를 실행합니다.

![데이터 그리드에서 셀 복사하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/datagrid/datagrid-copySelectedCells-ko.png)

8. 데이터 탭 네비게이터의 [레코드 추가]를 클릭합니다

![데이터 탭에서 레코드 추가하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/datagrid/datagrid-addModifyClipboardData-01-ko.png)

9. 셀에서 마우스 오른쪽을 클릭하고 [붙여넣기]를 선택합니다. 또는 Ctrl+V를 누릅니다.
10. 클립보드 확인 창이 열립니다. [예]를 클릭합니다.
11. 실행 결과를 확인합니다.


## lN 구문 자동으로 생성하기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

데이터 그리드에서 IN 구문 자동 생성하기를 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**SQL 편집기**를 실행합니다. 또는 새로 만들기 도구 모음에서 [SQL 편집기]를 클릭하거나 Ctrl+N를 누릅니다.
3. SQL을 작성합니다
4. [실행] 버튼을 클릭하거나 F5를 누릅니다.
5. 데이터 탭에서 쿼리 결과를 확인 합니다.
6. 셀을 선택합니다. 마우스 오른쪽을 클릭하고 [IN 구문 생성]을 선택합니다.

![IN 구문 생성하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/datagrid/datagrid-createInSystax-ko.png)

7. 주 메뉴 **편집**>**붙여넣기**를 실행합니다. 또는 편집기 도구 모음 [붙여넣기]를 클릭하거나 Ctrl+V를 누릅니다.
8. 실행 결과를 확인합니다.

![IN 구문 생성 확인](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/datagrid/datagrid-createInSystax-01-ko.png)
 |
| ![비우기 아이콘](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-empty.png)     | 비우기   | 선택한 개체를 삭제합니다. |
| ![복원 아이콘](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-restore.png)    | 복원    | 선택한 개체를 복원합니다. |
| ![새로 고침 아이콘](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/icon-object-refresh.png) | 새로 고침 | 새로 고침을 실행합니다.  |



### 휴지통 복원하기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

휴지통 복원하기에 대해서 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **보기**>**개체 탐색기**를 실행합니다. 또는 뷰 도구 모음에서 [개체 탐색기]를 클릭합니다.
3. 개체 탐색기 테이블 개체에서 마우스 오른쪽을 클릭하고 [새 테이블]을 선택합니다.

![개체 탐색기에서 새 테이블 만들기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/objectPanel-recycleBin-01-ko.png)

4. 새 테이블을 만듭니다. ’확인’을 클릭합니다.

![새 테이블 만들기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/objectPanel-recycleBin-02-ko.png)

5. 실행된 SQL을 확인합니다. [확인]을 클릭합니다.
6. 개체 탐색기에서 생성된 테이블을 확인 합니다.
7. 생성된 테이블에서 마우스 오른쪽 버튼을 클릭하고 [삭제]를 선택합니다.
8. 드롭 테이블을 선택합니다. [확인]을 클릭합니다.

![테이블 삭제하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/objectPanel-recycleBin-03-ko.png)

9. [새로 고침]을 클릭합니다. 개체 탐색기 휴지통에서 삭제된 테이블을 확인합니다.
10. 삭제된 테이블에서 마우스 오른쪽을 클릭하고 [복원]을 선택합니다.

![휴지통에서 복원하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/objectPanel-recycleBin-04-ko.png)

11. 복원된 테이블을 확인합니다.


### 개체 필터링하기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

개체 필터링하기를 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **보기**>**개체 탐색기**를 실행합니다. 또는 뷰 도구 모음에서 [개체 탐색기]를 클릭합니다.
3. 탐색 창 테이블 개체에 마우스 오른쪽을 클릭하고 필터를 선택합니다.

![개체 필터링 하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/objectPanel-filter-01-ko.png)

4. 필터 창이 나타납니다. 필터링할 이름을 입력하고 조건을 선택합니다.

![필터 조건 선택](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/objectPanel-filter-02-ko.png)
**필터 조건**
- [none] : 개체 이름을 선택하지 않습니다.
- In : 입력한 개체 이름으로 검색합니다.
- Not In : 입력한 개체 이름을 제외하고 검색합니다.
- Starts with : 입력한 개체 이름으로 시작하는 동의어를 검색합니다.
- Includes : 입력한 개체 이름을 포함한 동의어를 검색합니다.
- Ends with : 입력한 개체 이름으로 끝나는 동의어를 검색합니다.
- Not Includes : 입력한 개체 이름을 포함하지 않는 동의어를 검색합니다.

5. [테스트] 버튼을 클릭합니다. 테스트 SQL 탭에서 결과를 확인합니다.
6. [확인]을 클릭하고 실행 결과를 확인합니다.

![필터링 결과 확인](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/objectPanel-filter-03-ko.png)

7. 필터 적용 이전으로 돌릴 때는 [원래대로]를 클릭 후 [확인]을 클릭합니다.


### 항상 맨 위 보기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

개체 탐색기 항상 맨 위 보기를 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **보기**>**개체 탐색기**를 선택합니다. 또는 뷰 도구 모음에서 [개체 탐색기]를 클릭합니다.
3. 개체 탐색기가 실행되면 ’항상 맨 위’를 선택합니다.
4. 개체 탐색기가 새 창으로 열립니다.

![항상 맨 위 보기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/objectExplorer/objectExplorer-alwaysOnTop-ko.png)



## 컬렉션 유형
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

데이터베이스에 변경 가능한 새로운 배열 또는 관련된 테이블을 만듭니다. 컬렉션 유형을 만들기 위해서는 소유자의 CREATE TYPE 또는 CREATE ANY TYPE 권한이 요구됩니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **만들기**>**컬렉션 유형**을 실행합니다.
3. 만들 컬렉션 이름을 입력하고 스키마를 선택합니다.
4. 배열 유형 또는 테이블 유형을 선택합니다.데이터 유형을 선택하고 값을 입력합니다.
5. [SQL 보기]를 클릭하여 자동 생성된 SQL 문장을 확인합니다. [확인]을 클릭하여 실행 결과를 확인합니다.

![컬렉션 유형 만들기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-collectionType-ko.png)

![컬렉션 유형 만들기 생성된 SQL 확인](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-collectionType-sqlView-ko.png)


## 제약 조건
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

데이터베이스 테이블에 기본, 검사, 고유, 외래 키를 만듭니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **만들기**>**제약 조건**을 실행합니다.
3. 만들 제약 조건 이름을 입력하고 스키마를 선택합니다.
4. 테이블을 선택합니다.
5. 제약 조건 탭에서 [외래 키]를 선택합니다.
6. 대상 테이블 열을 선택하고 [추가]를 클릭합니다.
7. [ON DELETE CASCADE]를 선택합니다.

![제약 조건 만들기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-constraint-ko.png)
8. 옵션 탭에서 옵션들을 설정합니다.
9. SQL 보기를 클릭하여 자동 생성된 SQL 문장을 확인합니다.
10. 확인을 클릭하여 실행 결과를 확인합니다.


## 데이터베이스 링크
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

원격에 있는 데이터베이스를 접근 할 수 있도록 데이터베이스 링크를 만듭니다. 데이터베이스 링크 만들기 실행을 위해서는 소유자의 ’CREATE DATABASE LINK’, 공용으로 생성하기 위해서는 ’CREATE PUBLIC DATABASE LINK’ 권한이 요구됩니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **만들기**>**데이터베이스 링크**를 실행합니다.
3. 만들 데이터베이스 링크의 이름을 입력하고 서비스 이름을 선택합니다.

![데이터베이스 링크 만들기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-databaseLink-ko.png)
4. [SQL 보기]를 클릭하여 자동 생성된 SQL 문장을 확인합니다.

![데이터베이스 링크 만들기 생성된 SQL 확인](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-databaseLink-sqlView-ko.png)
5. [확인]을 클릭하여 실행 결과를 확인합니다.
6. 데이터베이스 접속 테스트 확인 창이 나타납니다. 예를 클릭하여 접속 확인을 합니다.

> 노트 : 오라클 데이터베이스 연결 정보는 tbdsn.tbr 파일에 저장되어 있습니다.


## 인덱스
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,db2,tibero>)

오라클 데이터베이스 테이블 또는 클러스터에 인덱스를 만듭니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **만들기**>**인덱스**를 실행합니다.
3. 스키마를 선택하고 만들 인덱스의 이름을 입력합니다.
4. 테이블 스페이스를 선택합니다.
5. 일반 탭에서 스키마와 테이블을 선택합니다.
6. 테이블 열을 선택하고 [선택 항목 추가]를 클릭합니다.

![인덱스 만들기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-index-ko.png)
7. 저장 영역 탭에서 저장 영역의 크기, 트랜잭션 수, 공간 사용량을 입력합니다.

![인덱스 만들기 생성된 SQL 확인](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-index-sqlView-ko.png)
8. [SQL 보기]를 클릭하여 자동 생성된 SQL 문장을 확인합니다.
9. [확인]을 클릭하여 실행 결과를 확인합니다.


## 작업
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

오라클 데이터베이스에 새로운 작업을 만듭니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **만들기**>**작업**을 실행합니다.
3. 다음 날짜/시간을 선택합니다. 또는 반복에서 선택합니다.
4. [프로시저 검색]을 클릭합니다.
5. 유형, 스키마, 개체 이름을 선택합니다. [확인]을 클릭합니다.

![작업 만들기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-job-ko.png)
6. 실행 스크립트에서 결과를 확인합니다..
7. [확인]을 클릭하여 실행 결과는 확인합니다.


## 개체 유형
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

오라클 데이터베이스에 새로운 특성과 메소드, 본문을 선택하여 개체 유형을 만듭니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **만들기**>**개체 유형**을 실행합니다.
3. 만들 개체 유형 이름을 입력하고 스키마를 선택 합니다.
4. ’속성 및 메소드’ 탭에서 [추가] 버튼을 클릭합니다.
5. ’속성 추가’ 창에서 이름을 입력하고 개체 유형을 선택하고 [확인]을 클릭합니다.
6. [메소드 추가] 버튼을 클릭합니다.
7. 메소드의 이름을 입력하고 메소드 유형을 선택합니다. [매개변수 추가]를 클릭합니다.
8. ’매개 변수 추가’ 창에서 이름을 입력하고 모드를 선택합니다.
9. 데이터 유형을 선택하고 [확인]을 클릭합니다.
10. 추가된 속성과 메소드를 확인합니다.
11. [SQL 보기]를 클릭하여 자동 생성된 SQL 문장을 확인합니다.
12. [확인]을 클릭하여 실행 결과를 확인합니다.

![개체 유형 만들기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-objectType-ko.png)


## 리두 로그 그룹
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

오라클 데이터베이스에 새로운 리두 로그 그룹을 만듭니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **만들기**>**리두 로그 그룹**을 실행합니다.
3. 그룹 번호를 숫자로 입력합니다.
4. 리두 로그 멤버에서 파일 이름을 입력합니다. 또는 [파일 선택]을 클릭하여 파일을 찾습니다.
5. 파일 크기를 선택합니다.
6. SQL 보기를 클릭하여 자동 생성된 SQL 문장을 확인합니다.
7. ’확인’을 클릭하여 실행 결과를 확인합니다.

![리두 로그 그룹 만들기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-redoLogGroup-ko.png)



## 롤
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

오라클 데이터베이스에 새로운 롤을 만듭니다. 롤을 만들기 위해서는 소유자의 CREATE ROLE 권한이 요구됩니다. 또한 롤 만들기 실행을 위해서는 DBA_VIEWS를 조회할 수 있는 권한이 요구됩니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **만들기**>**롤**을 실행합니다.
3. 만들 롤 이름을 입력하고 인증 방법을 선택합니다.
4. 롤 탭에서 부여할 롤을 선택하고 [선택 항목 부여]를 클릭합니다.
5. 시스템 권한과 개체 권한도 설정합니다.
6. [SQL 보기]를 클릭하여 자동 생성된 SQL 문장을 확인합니다.
7. [확인]을 클릭하여 실행 결과를 확인합니다.

![롤 만들기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-role-ko.png)


## 롤백 세그먼트
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle>)

오라클 데이터베이스에 새로운 롤백 세그먼트를 만듭니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **만들기**>**롤백 세그먼트**를 실행합니다.
3. 만들 롤백 세그먼트 이름을 입력하고 테이블스페이스를 선택합니다.
4. 소유자가 DBA권한이 있을 경우 모든 인스턴스에서 사용 가능한 공용으로 생성할 수 있습니다.
5. 상태를 선택하고 값을 입력합니다.
6. [SQL 보기]를 클릭하여 자동 생성된 SQL 문장을 확인합니다.
7. [확인]을 클릭하여 실행 결과를 확인합니다.

![롤백 세그먼트 만들기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-rollbackSegment-ko.png)


## 시퀀스
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,sqlserver,tibero>)

오라클 데이터베이스에 새로운 시퀀스를 만듭니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **만들기**>**시퀀스…**를 실행합니다.
3. 만들 시퀀스 이름을 입력하고 스키마를 선택합니다.
4. 값을 입력하고 옵션을 선택합니다. 순환 (Cycle)은 시퀀스가 최대 값에 도달하면 초기값부터 시작하게 되고 순차(Sequential)은 시퀀스가 숫자를 만들 때 순서대로 할당합니다.
5. [SQL 보기]를 클릭하여 자동 생성된 SQL 문장을 확인합니다.
6. [확인]을 클릭하여 실행 결과를 확인합니다.

![시퀀스 만들기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-sequence-ko.png)


## 동의어
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,sqlserver,tibero>)

오라클 데이터베이스에 동의어를 만듭니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **만들기**>**동의어**를 실행합니다.
3. 로컬 또는 원격을 선택합니다.
4. 스키마를 선택하고 개체 유형을 선택합니다.
5. 키워드 값 입력 또는 [검색]을 클릭합니다. 키워드 검색에는 %로 필터링 할 수 있습니다.
6. 개체를 선택하고 [추가]를 클릭합니다 또는 더블 클릭합니다..
7. 동의어 이름을 입력합니다. [모두 PUBLIC]을 클릭합니다.
8. [SQL 보기]를 클릭하여 자동 생성된 SQL 문장을 확인합니다.
9. [확인]을 클릭하여 실행 결과를 확인합니다.

![동의어 만들기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-synonym-ko.png)


## 테이블
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

오라클 데이터베이스에 테이블을 만듭니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **만들기**>**테이블**을 실행합니다.
3. 만들 테이블 이름을 입력하고 스키마와 테이블스페이스를 선택합니다.
4. 주석을 입력합니다.
5. 일반 탭에서 열 이름과 정보를 입력합니다.
6. 제약 조건, 저장 영역, 옵션 탭에 값을 선택합니다.
7. [SQL 보기]를 클릭하면 자동 생성된 문장을 확인합니다.
8. [확인]을 클릭하여 실행 결과를 확인합니다.

![테이블 만들기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-table-ko.png)


## 테이블스페이스
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

오라클 데이터베이스에 새로운 테이블스페이스를 만듭니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **만들기**>**테이블스페이스**를 실행합니다.
3. 만들 테이블스페이스 이름을 입력하고 [추가]를 클릭합니다.
4. 데이터 파일 추가 창이 열립니다.
5. [찾기]를 클릭하고 데이터 파일 목록을 선택합니다. [확인]을 클릭합니다.
6. ’데이터 파일 추가’ 창에서 파일 크기를 입력하고 [확인]을 클릭합니다.
7. 추가된 데이터 파일을 확인하고 상태를 선택합니다. 온라인은 생성되는 테이블스페이스가 활성화되어 생성 후 바로 사용가능하고, 오프라인은 비활성화 상태로 바로 사용 할 수 없습니다.
8. 유형을 선택합니다. 영구는 일반 개체를 저장하는 테이블스페이스 입니다. 임시는 임시 개체를 저장하는 임시 테이블스페이스입니다.
9. 저장 영역 탭의 [옵션]을 선택합니다
10. [SQL 보기]를 클릭하여 자동 생성된 SQL 문장을 확인합니다.
11. [확인]을 클릭하여 실행 결과를 확인합니다.

![테이블스페이스 만들기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-tableSpace-01-ko.png)


## 사용자
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

오라클 데이터베이스에 새로운 사용자를 만듭니다. 사용자를 만들기 실행을 위해서는 ’CREATE USER’ 권한이 요구됩니다. 또한 ’DBA_VIEWS’를 조회할 수 있는 권한이 요구됩니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **만들기**>**사용자**를 실행합니다.
3. ’사용자 정보’ 탭에서 만들 사용자 이름을 입력하고 인증 방법을 선택합니다.
4. 데이터베이스 인증은 로그인 할 때 암호를 요구합니다. 운영 체제 인증은 운영체제의 사용자 인증을 요구합니다.
5. 테이블스페이스 기본값을 선택하고 임시 테이블 스페이스를 선택합니다.
6. 리소스 프로파일을 선택하고 상태를 선택합니다.

![사용자 만들기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/manager/manager-securityManager-newUser-ko.png)

7. 롤 탭에서 부여할 ’롤’을 선택하고 ’선택 항목 부여’를 클릭합니다.

![사용자 롤 부여하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/manager/manager-securityManager-role-ko.png)

8. 시스템 권한, 개체 권한, 리소스 그룹 탭에서 값을 선택합니다.
9. [SQL 보기]를 클릭하여 자동 생성된 문장을 확인합니다.
10. [확인]을 클릭하여 실행 결과를 확인합니다.


## 뷰
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

데이터베이스에 새로운 뷰를 만듭니다. 뷰를 만들기 실행을 위해서는 소유자의 CREATE VIEW 권한이 요구됩니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **만들기**>**뷰**를 실행합니다.
3. 만들 뷰 이름을 입력하고 스키마를 선택합니다.
4. 주석을 입력합니다.
5. 스크립트 탭에 스크립트를 입력합니다.
6. [SQL 유효성 검사]를 클릭하여 유효성을 확인합니다.
7. 뷰 정보 탭에서 [자동 추가] 또는 [추가] 버튼을 클릭하여 열을 추가합니다.
8. 옵션을 설정하고 SQL 보기를 클릭하여 자동 생성된 SQL 문장을 확인합니다.
9. [확인]을 클릭하여 실행 결과를 확인합니다.

![뷰 만들기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-view-ko.png)


## 프로파일
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

오라클 데이터베이스에 새로운 프로파일을 만듭니다. 프로파일은 데이터베이스 리소스의 제한을 설정할 수 있습니다. 프로파일을 할당 받은 소유자는 프로파일에 정의한 리소스 제한을 받게 됩니다. 프로파일 만들기 실행을 위해서는 소유자의 ‘CREATE PROFILE‘ 권한이 요구됩니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 만들기>프로파일을 실행합니다.
3. 만들 프로파일 이름을 입력합니다..
4. 일반 탭의 세부 정보 값들을 선택합니다.

![프로파일 만들기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-profile-01-ko.png)
일반 탭 옵션의 내용은 다음과 같습니다.
- CPU/세션 : 세션의 CPU 시간 제한입니다.
- CPU/호출 : 호출(Parser, Execute, Fetch 등)에 대한 CPU 시간 제한입니다.
- 접속 시간 : 세션의 총 경과시간 제한입니다.
- 유휴 시간 : 세션이 연속적으로 비활성화 되어있는 시간을 제한합니다.

데이터베이스 서비스 옵션의 내용은 다음과 같습니다.
- 동시 세션 : 동시 접속 세션의 개수 입니다.
- 읽기/세션 : 세션이 메모리와 디스크로부터 읽는 데이터 블록의 개수 입니다.
- 읽기/호출 : SQL 호출(Parse, Execute, Fetch 등)로부터 읽는 데이터 블록의 개수 입니다.
- 전용 SGA : 세션이 사용할 수 있는 SGA의 전용 공간의 크기 입니다.
- 조합 제한 : 세션의 모든 리소스 비용을 서비스 단위로 지정한 겁니다.

5. 암호 탭의 세부 정보 값들을 선택합니다.

![프로파일 암호 세부 정보 설정](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-profile-02-ko.png)

암호 탭 옵션의 내용은 다음과 같습니다.
- 암호 만료 시간 : 지정한 기간까지 암호 사용이 가능하며, 기간이 지나면 계정이 만료됩니다.
- 잠금 (만료일 이후) : 지정한 유예 기간 동안 암호를 변경하지 않으면 계정이 만료됩니다.
- 보관할 암호 수 : 암호를 보관할 수 있는 횟수 입니다.
- 보관 일 수 : 암호를 보관할 수 있는 일 수 입니다.
- 잠금 전 로그인 시도 실패 횟수 : 지정한 수만큼 로그인 실패하면 계정을 잠급니다.
- 잠금 일 수 : 로그인 실패 시 잠금 기간입니다.
- 복합성 함수 : 암호를 검증하는 함수를 지정합니다.
6. [SQL 보기]를 클릭하여 자동 생성된 문장을 확인합니다.
7. [확인]을 클릭하여 실행 결과를 확인합니다.


## 프로시저/함수/패키지
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

오라클 데이터베이스에 새로운 프로시저/함수/패키지를 만듭니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **만들기**>**프로시저/함수/패키지**를 실행합니다.
3. 만들 개체의 탭에서 [예제 열기]를 선택합니다.
4. [편집] 버튼을 클릭하면 [PL/SQL 편집기]가 실행 됩니다.
5. 예제를 바탕으로 로직에 맞게 편집하여 작성 합니다.

![프로시저/함수/패키지 만들기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-PLSQLObject-ko.png)


## 트리거
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

오라클 데이터베이스에 새로운 트리거를 만듭니다. 트리거 만들기 실행을 위해서는 소유자의 ‘CREATE TRIGGER‘ 권한이 요구됩니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **만들기**>**트리거**를 실행합니다.
3. 만들 트리거의 이름을 입력합니다.
4. 테이블에서 생성할 스키마와 테이블을 선택합니다.
5. 트리거 실행 시점을 선택하고 실행할 이벤트를 선택합니다.
6. FOR EACH 조건을 선택합니다. ROW는 열의 변화가 있을 때 트리거가 실행이 됩니다. STATEMENT는 열의 데이터와 상관없이 해당 열의 변화가 일어나면 실행됩니다.
7. Where 절 탭에서 실행 될 조건을 입력합니다.
8. [SQL 보기]를 클릭하여 자동 생성된 SQL 문장을 확인합니다.
9. [확인]을 클릭하여 실행 결과를 확인합니다.

![트리거 만들기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-trigger-ko.png)


## 개체 보고서 디자인 하기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

개체 보고서 디자인 하기를 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **도구**>**보고서**>**개체 보고서**를 선택합니다. 또는 도구 모음에서 [개체 보고서]를 클릭합니다.
3. 개체 보고서 창에서 출력할 보고서 종류를 선택합니다.
4. 스키마와 개체를 선택합니다.

![개체 보고서 작성하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/report/report-selectSchema-ko.png)

5. [디자인] 버튼을 클릭합니다.
6. 디자인 편집기 창이 열립니다. 출력할 양식을 편집하고 저장합니다.

![개체 보고서 디자인하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/report/report-design-ko.png)


## 개체 보고서 미리 보기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

개체 보고서 미리 보기를 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **도구**>**보고서**>**개체 보고서**를 선택합니다. 또는 도구 모음에서 [개체 보고서를 클릭합니다.
3. 개체 보고서] 창에서 출력할 보고서 종류를 선택합니다.
4. 스키마와 개체를 선택합니다.
5. 미리 보기 버튼을 클릭합니다.
6. 보고서 미리 보기 창에서 실행 결과를 확인합니다.



## 개체 보고서 Excel로 출력하기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

결과 보고서를 Excel로 출력하기를 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **도구**>**보고서**>**개체 보고서**를 선택합니다. 또는 도구 모음에서 [개체 보고서]를 클릭합니다.
3. 개체 보고서 창에서 출력할 보고서 종류를 선택합니다.
4. 스키마와 개체를 선택합니다.
5. [파일로 내보내기]를 클릭합니다. [Excel Table (OLE)…]를 선택합니다.
6. 페이지 설정을 합니다. [Ok]를 클릭합니다.
7. 생성된 파일을 Excel에서 확인합니다.

![Excel에서 결과 확인](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/report/report-exportExcel-ko.png)


## 테이블 스크립트 보기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

테이블 스크립트 보기를 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **도구**>**보고서**>**스크립트 내보내기**를 선택합니다. 또는 도구 모음에서 [스크립트 내보내기]를 클릭합니다.
3. 스크립트 내보내기 창에서 개체를 선택합니다.
4. 스키마와 개체를 선택합니다.
5. 스크립트 보기 탭에서 [스크립트 생성]을 클릭합니다.

![테이블 스크립트 생성하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/report/report-exportScript-ko.png)

6. 실행 결과를 확인합니다.
7. 스크립트를 클립보드로 복사 하거나, 스크립트 저장, SQL 편집기로 보내기 할 수 있습니다.


## 테이블 스크립트 내보내기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,sqlserver,tibero>)

테이블 스크립트 내보내기를 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **도구**>**보고서**>**스크립트 내보내기**를 선택합니다. 또는 도구 모음에서 [스크립트 내보내기]를 클릭합니다.

![Export 테이블 스크립트 내보내기_개체 선택](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/report/report-exportScript-menu-ko.png)

3. 스크립트 내보내기 창에서 개체를 선택합니다.
4. 스키마와 개체를 선택합니다.
5. 스크립트 보기 탭에서 [스크립트 내보내기]를 클릭합니다.
6. 내보낼 폴더를 선택합니다.

![테이블 스크립트 파일로 내보내기_폴더 선택](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/report/report-exportScript-exportFile-ko.png)

7. 파일로 내보내기 버튼을 클릭합니다.
8. 로그 창에서 실행 결과를 확인합니다.

 |
| ![마우스 왼쪽 클릭 드래그로 개체를 선택합니다.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/erDesign/icon-erDesign-select.png)           | 선택         |         | 마우스 왼쪽 클릭 드래그로 개체를 선택합니다.   |
| ![선택된 개체를 이동합니다.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/erDesign/icon-erDesign-move.png)                        | 이동         |         | 선택된 개체를 이동합니다.              |
| ![선택된 그룹의 크기를 조정합니다.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/erDesign/icon-erDesign-resize.png)                  | 크기 조정      |         | 선택된 그룹의 크기를 조정합니다.          |
| ![선택된 개체를 삭제합니다](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/erDesign/icon-erDesign-delete.png)                       | 삭제         |         | 선택된 개체를 삭제합니다.              |
| ![작업 영역을 마우스 왼쪽을 클릭하고 이동합니다.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/erDesign/icon-erDesign-panningHand.png)     | 이동 핸들      |         | 작업 영역을 마우스 왼쪽을 클릭하고 이동합니다.  |
| ![작업 영역을 축소합니다.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/erDesign/icon-erDesign-zoomOut.png)                      | 축소         |         | 작업 영역을 축소합니다.               |
| ![작업 영역을 확대합니다.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/erDesign/icon-erDesign-zoomIn.png)                       | 확대         |         | 작업 영역을 확대합니다.               |
| ![개체를 그룹으로 묶어주는 영역 개체를 만듭니다.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/erDesign/icon-erDesign-region.png)          | 영역         |         | 개체를 그룹으로 묶어주는 영역 개체를 만듭니다.  |
| ![캔버스에 주석이나 텍스트를 쓸 수 있습니다.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/erDesign/icon-erDesign-textBox.png)           | 텍스트 상자     |         | 캔버스에 주석이나 텍스트를 쓸 수 있습니다.    |
| ![테이블 개체간의 1:1 비식별 관계를 설정합니다.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/erDesign/icon-erDesign-11Relationship.png) | 1:1 비식별 관계 |         | 테이블 개체간의 1:1 비식별 관계를 설정합니다. |
| ![테이블 개체간의 1:n 비식별 관계를 설정합니다.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/erDesign/icon-erDesign-1nRelationShip.png) | 1:n 비식별 관계 |         | 테이블 개체간의 1:n 비식별 관계를 설정합니다. |
| ![테이블 개체간의 n:m 비식별 관계를 설정합니다.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/erDesign/icon-erDesign-nmRelationship.png) | n:m 비식별 관계 |         | 테이블 개체간의 n:m 비식별 관계를 설정합니다. |
| ![현재의 ER 디자인의 스크립트를 보여줍니다.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/erDesign/icon-erDesign-viewSQL.png)           | SQL 보기     |         | 현재의 ER 디자인의 스크립트를 보여줍니다.    |
| ![캔버스를 새로 고칩니다.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/erDesign/icon-erDesign-refresh.png)                      | 새로 고침      |         | 캔버스를 새로 고칩니다.               |


## 새 사용자 등록과 권한 부여하기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

새 사용자 등록과 권한 부여하기를 설명합니다.

1. DBA 권한으로 오라클 데이터베이스에 접속합니다.
2. 주 메뉴 **관리자**>**보안 관리자**를 선택합니다. 또는 관리자 도구 모음에서 [보안 관리자]를 클릭합니다.
3. 사용자 탭에서 [새 사용자]를 클릭합니다.
4. 사용자 정보 탭에서 만들 사용자 이름을 입력하고 인증 방법을 선택합니다.
5. 데이터베이스 인증은 로그인 할 때 암호를 요구합니다. 운영 체제 인증은 운영체제의 사용자 인증을 요구합니다
6. 테이블스페이스 기본값을 선택하고 임시 테이블스페이스를 선택합니다.
7. 리소스 프로파일을 선택하고 상태를 선택합니다.

![사용자 등록하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/manager/manager-securityManager-newUser-ko.png)


## 새 사용자 롤 정의하기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,sqlserver,tibero>)

1. 롤 탭에서 롤을 선택하고 [선택 항목 부여]를 클릭합니다.

![사용자 롤 정의 하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/manager/manager-securityManager-role-ko.png)


## 새 사용자 시스템 권한 부여와 취소하기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,sqlserver,tibero>)

1. 시스템 권한 탭을 선택합니다.
2. 부여할 시스템 권한을 선택하고 [선택 항목 부여]를 클릭합니다.
3. 화살표를 이용하여 권한을 부여 하거나 취소할 수 있습니다.

![사용자 권한 부여와 취소하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/manager/manager-securityManager-systemPrivileges-ko.png)

4. 개체 권한 탭을 선택합니다. 스키마와 테이블을 선택하고 [검색]을 클릭합니다.
5. 개체 이름을 선택하고 권한을 선택합니다. [선택 항목 추가] 화살표를 클릭 합니다.

![사용자 개체 권한 부여하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/manager/manager-securityManager-objectPrivilege-ko.png)

6. 테이블스페이스 할당량을 부여합니다.

![사용자 테이블스페이스 할당량 부여하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/manager/manager-securityManager-tableSpaceQuota-ko.png)

7. [SQL 보기]를 클릭하여 생성된 문장을 확인합니다.
8. [확인]을 클릭하고 실행 결과를 확인합니다.


## 사용자 시스템 권한 부여하기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,sqlserver,tibero>)

사용자 시스템 권한 부여하기를 설명합니다.

1. DBA 권한으로 오라클 데이터베이스에 접속합니다.
2. 주 메뉴 **관리자**>**보안 관리자**를 선택합니다. 또는 관리자 도구 모음에서 [보안 관리자]를 클릭합니다.
3. 시스템 권한 탭에서 부여할 권한을 선택하고 마우스 오른쪽 클릭하고 [시스템 권한 부여]를 선택합니다. 또는 시스템 권한 부여를 클릭합니다.

![사용자 시스템 권한 부여하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/manager/manager-securityManager-grantSystemPrivileges-ko.png)

4. 사용자를 선택하고 [선택 항목 부여]를 클릭합니다.

![사용자 시스템 권한 선택 항목 부여하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/manager/manager-securityManager-grantSystemPrivileges-user-ko.png)

5. 롤 탭을 클릭하고 롤을 선택하고 [선택 항목 부여]를 클릭합니다.

![사용자 시스템 권한 롤 부여하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/manager/manager-securityManager-grantSystemPrivileges-role-ko.png)
6. [SQL 보기]를 클릭하여 자동 생성된 SQL 문장을 확인합니다.
7. [확인] 버튼을 클릭하여 실행 결과를 확인합니다.



## 테이블스페이스 관리자를 이용하여 테이블 스페이스 늘리기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

테이블스페이스 관리자를 이용하여 테이블 스페이스를 늘리는 방법을 설명합니다.

1. DBA 권한으로 오라클 데이터베이스에 접속합니다.
2. **주 메뉴 관리자**>**테이블스페이스 관리자**를 선택합니다. 또는 관리자 도구 모음에서 테이블스페이스 관리자를 클릭합니다.
3. 테이블스페이스 탭에서 테이블스페이스를 선택하고 마우스 오른쪽 클릭으로 [테이블스페이스 변경]을 선택합니다. 또는 [테이블스페이스 변경]을 클릭합니다.

![테이블 스페이스 변경](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/manager/manager-tableSpaceManager-ko.png)

4. **테이블 스페이스 변경** 창이 나타납니다. [추가]를 클릭합니다.

![테이블스페이스 변경 기기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/manager/manager-tableSpaceManager-alterTableSpace-ko.png)

5. **데이터 파일 추가** 창이 나타납니다. 찾기를 클릭하면 데이터 파일 목록 창이 나타납니다.

![데이터 파일 목록 창](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/manager/manager-tableSpaceManager-alterTableSpace-addDataFile-ko.png)

6. 파일을 선택하고 [확인]을 클릭합니다.
7. 파일 크기를 입력하고 [확인]을 클릭합니다.
8. 실행 결과를 확인합니다.


## 세션 브라우저를 이용하여 세션 정보 보기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

세션 브라우저를 이용하여 세션 정보 보기를 설명합니다.

1. DBA 권한으로 오라클 데이터베이스에 접속합니다.
2. 주 메뉴 **관리자**>**세션 브라우저**를 선택합니다. 또는 관리자 도구 모음에서 [세션 브라우저]를 클릭합니다.
3. 세션 탭에서 그룹 기준을 선택 합니다. 선택한 그룹에  따라 정렬됩니다.
4. [세션]을 클릭하고 세션 정보 탭에서 정보를 확인합니다.

![세션 정보 보기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/manager/manager-sessionBrowser-ko.png)


## 세션 추적
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

세션 추적을 설명합니다.

1. DBA 권한으로 오라클 데이터베이스에 접속합니다.
2. 주 메뉴 **관리자**>**세션 브라우저**를 선택합니다. 또는 관리자 도구 모음에서 [세션 브라우저]를 클릭합니다.
3. 추적을 원하는 세션에서 마우스 오른쪽 클릭으로 선택한 [세션 추적 시작]을 선택합니다.

![세션 추적 사용하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/manager/manager-sessionBrowser-trace-ko.png)



## 트랜잭션에 의해 잠금이 걸린 세션 확인 하기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

트랜잭션에 의해 잠금이 걸린 세션 확인 하기를 설명합니다.

1. DBA 권한으로 오라클 데이터베이스에 접속합니다.
2. 주 메뉴 **관리자**>**세션 브라우저**를 선택합니다. 또는 관리자 도구 모음에서 [세션 브라우저]를 클릭합니다.
3. 잠금 차단 탭을 클릭합니다.
4. 트랜잭션에 의해 잠금이 걸린 세션이 있을 경우 상태가 표시됩니다.
5. 세션 정보를 확인하고 불필요한 세션일 경우 마우스 오른쪽 클릭으로 [세션 종료]를 선택합니다.

![세션 종료하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/manager/manager-sessionBrowser-kill-ko.png)



## 일반
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

![옵션_일반](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/option/option-general-ko.png)
- 테마 : 프로그램의 테마를 선택 합니다. 현재 Default와 Dream 두 가지를 제공합니다.
- 자동 업데이트 : 프로그램이 실행 될 때마다 제품의 업데이트가 있는지 확인합니다.
- 언어 선택 : 프로그램에서 사용 할 언어를 선택합니다. 현재 한국어, 영어, 일본어, 중국어, 프랑스어, 독일어, 스페인어를 지원합니다.
- 시작 창 : 프로그램이 실행 될 때 자동으로 실행 될 창을 선택합니다. 기본은 SQL 편집기입니다.
- SQL 편집기 : 프로그램을 시작할 때 자동으로 SQL 편집기를 실행합니다.
- PL/SQL 편집기 : 프로그램을 시작할 때 자동으로 PL/SQL 편집기를 실행합니다.
- 개체 탐색기 : 프로그램을 시작할 때 자동으로 개체 탐색기를 실행합니다.
- 작업 표시줄에 접속 정보 표시 : 작업 표시줄에 세션ID를 표시합니다.


## {DATABASE} 구성
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

쿼리 결과 행 개수, 실행 계획 테이블, 사용자와 자동 커밋 여부를 설정 할 수 있습니다.

![옵션_Oracle 구성](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/option/option-oracleConfiguration-ko.png)

- 레코드 인출 옵션
- 모든 레코드 인출 : 쿼리 실행 후 모든 레코드를 가져옵니다.
- 부분적으로 레코드 인출 : 쿼리 실행 후 부분적으로 가져옵니다. 인출할 행 수는 부분적으로 가져올 레코드의 수입니다.
- 쿼리 옵션
- 자동 커밋 사용 : 선택하면 DML 명령 실행 시 자동으로 커밋합니다.
- 실행 계획 테이블 이름 : SQL 편집기에서 실행 계획을 사용하기 위한 테이블 이름입니다. 다른 사용자의 테이블을 이용할 경우 사용자 - 이름 또는 테이블 이름으로 입력해야 합니다.
- DBMS OUTPUT
- 기본 버퍼 크기 : DBMS OUTPUT 정보를 가져올 때의 버퍼 크기를 설정합니다. 기본 크기는 15,000 입니다.
- 접속 유지 : 선택하면 설정된 시간 동안 연결을 유지합니다.


## SQL 편집기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

시작 탭의 개수, 편집기 옵션, 맞춤 옵션, 기록 저장 옵션 등을 설정합니다.

![옵션_SQL 편집기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/option/option-SQLEditor-ko.png)

- 편집기 옵션 : 쿼리 편집기 옵션을 설정합니다. [옵션…] 버튼을 클릭하면 설정을 위한 새 창이 나타납니다.
- SQL 맞춤 옵션 : SQL 맞춤 옵션을 설정합니다. [옵션…] 버튼을 클릭하면 설정을 위한 새 창이 나타납니다.
- 현재 SQL 구분 기호 : 각 SQL문의 구분 기호를 세미콜론 또는 캐리지 리턴으로 할지 설정합니다.
- SQL 기록 자동 저장 : 저장 여부 옵션을 선택하면 SQL을 저장합니다.
- SQL 기록 최대 저장 개수
- 제한 없음 : 제한없이 모두 저장합니다.
- 개수 : 입력한 수 만큼만 저장합니다.
- SQL 기록 저장 시점
- SQL 실행 후 : 쿼리가 실행된 후 성공한 것만 저장합니다.
- SQL 실행 전 : 쿼리 실행 전 모든 SQL을 저장합니다.
- 편집기 시작 시 탭 개수 : SQL 편집기 실행 시 자동으로 추가되는 탭의 개수입니다.
- 시작 시 그리드 표시 : 선택 한 후 SQL 편집기를 실행하면 SQL 편집기에 그리드가 표시됩니다. 선택하지 않으면 편집기만 표시되고 그리드는 쿼리 실행 후 표시됩니다.
- 탭에 SQL 힌트 표시 : 선택 한 후 탭에 마우스 커서를 올리면 SQL이 표시됩니다.


### 일반

![쿼리 편집기 옵션_일반](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/option/option-SQLEditor-general-ko.png)
편집기의 기본 옵션을 설정합니다.


### 글꼴

글꼴 옵션을 설정합니다.

![쿼리 편집기 옵션_글꼴](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/option/option-SQLEditor-font-ko.png)

편집기의 글꼴을 설정합니다. 편집기에 특정 텍스트가 깨져 보이면 문자 집합을 변경합니다.


### 강조 표시

강조 표시 옵션을 설정합니다.

![쿼리 편집기 옵션_강조 표시](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/option/option-SQLEditor-highlight-ko.png)

요소 : 강조 요소중 하나를 선택해 글꼴 스타일, 글꼴 색 등을 변경할 수 있습니다. 또한 아래의 편집기에서 문장을 선택하면 자동으로 요소에서 강조 요소가 선택됩니다.


### 코드 템플릿

코드 템플릿을 추가, 변경, 삭제합니다.

![쿼리 편집기 옵션_코드 템플릿](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/option/option-SQLEditor-codeTemplate-ko.png)

코드 템플릿을 확인하고 추가, 변경, 삭제 합니다. 편집기에서 Ctrl+J를 누르면 템플릿이 실행됩니다.


### 키워드 템플릿

키워드 템플릿을 추가, 변경, 삭제합니다

![쿼리 편집기 옵션_키워드 템플릿](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/option/option-SQLEditor-keywordTemplate-ko.png)

SQL 편집기에서 동작하게 하려면 자동 완성 탭에서 테이블 자동 완성을 선택합니다.


### 자동 완성

자동 완성 기능 사용 여부를 설정합니다.
![쿼리 편집기 옵션_자동 완성](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/option/option-SQLEditor-autoComplete-ko.png)

- 자동 완성 기능
- 코드 자동 완성 : 코드 템플릿에 있는 내용이 자동 완성되어 표시됩니다.
- 키워드 자동 완성 : 편집기에서 3글자 이상을 입력하면 키워드 자동 완성이 표시됩니다.
- 재사용 SQL : SQL 기록에 있는 내용 중 재사용을 체크한 문장이 표시됩니다.
- 필드 자동 완성 : 테이블 별칭 뒤에 필드 자동 완성이 표시됩니다.
- 변수 자동 완성 : PL/SQL 편집기 에서 변수나 매개 변수로 선언된 값들을 자동으로 나타냅니다.
- 매개변수 자동 완성: SQL 편집기, PL/SQL 편집기에서 Ctrl+Shift+H 키를 눌러 매개변수 자동 완성 창을 띄웁니다.
- 키워드 대/소문자 바꾸기 자동 완성 : 키워드 자동 완성 기능으로 완성된 키워드를 대/소문자 구분하여 표시합니다.
- 개체 이름 대/소문자 바꾸기 자동 완성 : 테이블 자동 완성 기능으로 완성된 개체를 대/소문자로 구분하여 나타냅니다.
- 테이블 자동 완성 : FROM/INTO/SET 뒤에 문자를 입력하면 개체 자동 완성이 표시됩니다.
- 개체가 많을 경우 일부만 선택하여 나타나게 할 수 있습니다.



## 개체 탐색기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

개체 탐색기와 개체 패널에 표시 될 개체를 선택합니다.

![옵션_개체 탐색기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/option/option-objectExplorer-ko.png)

- 맨 앞으로 가져오기 : 선택하면 개체 탐색기가 별도의 창으로 실행됩니다.
- 백그라운드에서 쿼리 실해 : 선택하면 쿼리가 백그라운드에서 실행됩니다.
- 표시할 개체 : 개체 탐색기와 개체 패널에 표시할 개체를 선택합니다.
- 탭 스타일 : 탭의 모양을 설정합니다. 여러 줄 탭 혹은 한 줄 탭 중에서 선택합니다.



## 그리드
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

그리드의 스타일을 변경 할 수 있습니다.
![옵션_그리드](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/option/option-grid-ko.png)

- NULL 표시 : 그리드의 널(NULL) 값을 표시하고, 배경색을 설정합니다.
- 여러 줄 글꼴 색 : 그리드의 텍스트 내 캐리지 리턴 값이 있으면 배경색이 표시됩니다.
- 그리드 유형 : 그리드 유형을 변경합니다. (현재 버전은 Office 스타일만 지원합니다.)
- 그리드 스타일 : 그리드 스타일을 변경합니다. 그리드 스타일은 사용자가 직접 변경할 수 있습니다.
- 세로 스크롤할 때 커서를 이동 : 세로 스크롤 시에 커서를 이동합니다.
- 날짜 형식 : 그리드에 표시되는 날짜 형식을 설정합니다.



## 쿼리 바로 가기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

특정 명령을 바로 가기 키로 설정 할 수 있습니다.

![옵션_쿼리 바로 가기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/option/option-queryShortcuts-ko.png)

Alt+1 에서 0번까지 설정 할 SQL을 입력합니다.




## SQL 변환
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

SQL 변환에 사용되는 포맷을 정합니다. 프로그램 언어별 이스케이프 문자, 구분 기호 변호나 포맷을 정합니다.

![옵션_SQL 변환](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/option/option-convertSQL-ko.png)

SQL 변환 옵션 : 사용언어 별 이스케이프 문자, 구분 기호를 설정합니다.



## 구독
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)


![옵션_Subscription](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/option/option-subscription-ko.png)

구독 관련 옵션들을 설정합니다.



## Plugin
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,sqlserver>)

![옵션_Plugin](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/option/option-plugin-ko.png)

- DBSAFER
- 자동 로그인 : 새 접속 없이 자동으로 로그인 합니다.
- 로그 보기 : 로그를 볼 수 있습니다.
 |
| 코드 자동 완성 / 템플릿 | Ctrl + J | 재사용 SQL  | Ctrl + M |
| 키워드 자동 완성      | Ctrl + K | 필드 자동 완성 |          |
| 도움말            | F1       |          |          |
