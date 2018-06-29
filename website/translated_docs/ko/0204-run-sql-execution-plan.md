---
id: 0204-run-sql-execution-plan
title: SQL 실행계획 활용
sidebar_label: SQL 실행계획 활용
---


## SQL 실행 계획을 실행하고 인덱스 확인하기
> Supports :
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
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,db2,tibero>)

블록 SQL 실행 계획을 실행하는 방법을 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**SQL 편집기**를 실행합니다. 또는 새로 만들기 도구 모음에서 [SQL 편집기]를 클릭하거나 Ctrl+N를 누릅니다.
3. SQL을 작성합니다.
4. 블록 SQL 실행 계획을 클릭하거나 Alt+F7를 누릅니다.
5. 실행 계획 탭에서 트리 뷰를 확인합니다.

![블록 SQL 실행 계획으로 실행하기 하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/execution-plan-block-ko.png)



## SQL 편집기 바로 가기 키 일람표

SQL 편집기의 바로 가기 키는 사용자 지정으로 변경 가능합니다.

### 실행 도구 모음

| 버튼                                                                                                                                                                              | 명령어            | 바로 가기 키                 | 동작                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ----------------------- | ------------------------------ |
| ![Run SQL](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-runSQL.png)                                                          | SQL 실행         | F5                      | SQL을 실행합니다.                    |
| ![Run current SQL](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-runCurrentSQL.png)                                           | 현재 SQL 실행      | Ctrl+Enter. Ctrl+F5     | 구분 기호로 분리된 현재 SQL을 실행합니다.      |
| ![Run the SubQuery block.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-subQueryBlock.png)                                   | 하위 쿼리 블록 실행    | Alt+F5                  | 하위 쿼리 블록을 실행합니다.               |
| ![Stop](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-stop.png)                                                               | 중지             | ESC                     | SQL 실행을 중지합니다.                 |
| ![Run current SQL and modify the data on the grid.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-runAndModifyCurrentSQL.png) | 현재 SQL 실행 및 수정 | F6                      | 현재 SQL을 실행하고 그리드에서 데이터를 수정합니다. |
| ![Run Execution plan](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-blockSQLExecutionPlan.png)                                | 현재 SQL 실행 계획   | F7 현재 SQL 실행 계획을 실행합니다. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/EA5C881671A89564872C8E5939221B79.jpg)                                                                   | 블록 SQL 실행 계획   | Alt+F7                  | 하위 쿼리 블록 SQL 실행 계획을 실행합니다.     |
| ![SQL History](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-SQLHistory.png)                                                  | 탭을 오른쪽으로 이동    |                         | 아래쪽 탭을 오른쪽으로 이동합니다.            |
| ![SQL History](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-showGrid.png)                                                    | SQL 기록         | F8                      | SQL 기록을 실행합니다.                 |
| ![SQL Alignment](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-SQLAlignment.png)                                              | 그리드 표시         | F11                     | 그리드를 설정/해제 합니다.                |
| ![SQL Alignment Options](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-SQLAlignmentOptions.png)                               | SQL 맞춤         | F9                      | SQL 편집기의 SQL을 정렬합니다.           |
| ![Move tab to right](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-moveTabToRight.png)                                        | SQL 맞춤 옵션      |                         | SQL맞춤의 옵션을 설정합니다.              |

#### 탭 도구 모음

| 버튼                                                                                                                                      | 명령어    | 바로 가기 키        | 동작             |
| --------------------------------------------------------------------------------------------------------------------------------------- | ------ | -------------- | -------------- |
| ![Add Editor](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-addEditor.png)            | 편집기 추가 | Ctrl+Alt+N     | 편집기를 추가합니다.    |
| ![Remove editor](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-removeEditor.png)      | 편집기 제거 | Ctrl+Alt+D     | 편집기를 제거합니다.    |
| ![Previouse Editor](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-previousEditor.png) | 이전 편집기 | Ctrl+Alt+Left  | 이전 편집기도 이동합니다. |
| ![Next editor](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-nextEditor.png)          | 다음 편집기 | Ctrl+Alt+Right | 다음 편집기로 이동합니다. |

#### 파일 도구 모음

| 버튼                                                                                                                                 | 명령어        | 바로 가기 키 | 동작                 |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------- | ------- | ------------------ |
| ![Open file](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-openFile.png)         | 파일 열기      | Ctrl+O  | 파일 열기를 실행합니다.      |
| ![Save as](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-saveAs.png)             | 다른 이름으로 저장 |         | 파일을 다른 이름으로 저장합니다. |
| ![Save](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-save.png)                  | 저장         | Ctrl+S  | 파일을 저장합니다.         |
| ![Print preview](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-printPreview.png) | 인쇄 미리 보기   | Ctrl+P  | 인쇄 미리 보기를 실행합니다.   |

#### 편집기 도구 모음

| 버튼                                                                                                                                                        | 명령어               | 바로 가기 키      | 동작                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- | ------------ | -------------------------------------------------------- |
| ![Undo](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-undo.png)                                         | 실행 취소             | Ctrl+Z       | 이전 실행을 취소합니다.                                            |
| ![Redo](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-redo.png)                                         | 다시 실행             | Shift+Ctrl+Z | 이전 실행을 다시 실행합니다.                                         |
| ![Cut](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-cut.png)                                           | 잘라내기              | Ctrl+X       | 클립보드로 잘라내기를 실행합니다.                                       |
| ![icon sql history copy to clipboard](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditor/icon-sql-history-copy-to-clipboard.png) | 복사                | Ctrl+C       | 클립보드로 복사하기를 실행합니다.                                       |
| ![Paste](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-paste.png)                                       | 붙여넣기              | Ctrl+V       | 클립보드로 붙여넣기를 실행합니다.                                       |
| ![Paste from the code](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-pasteFromTheCode.png)              | 코드로부터 붙여넣기        |              | Java, C, C#, ASP ,PHP, PB, VB, Delphi 코드로부터 붙여넣기를 실행합니다. |
| ![Select all](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-selectAll.png)                              | 모두 선택             | Ctrl+A       | 편집기의 모든 문자를 선택합니다.                                       |
| ![Clear ALL](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-clearAll.png)                                | 모두 지우기            |              | 편집기의 모든 문자를 지웁니다.                                        |
| ![Delete](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-delete.png)                                     | 삭제                | Del          | 편집기의 문자를 지웁니다.                                           |
| ![Find](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-find.png)                                         | 찾기                | Ctrl+F       | 편집기 내에서 찾기를 실행합니다.                                       |
| ![Find next](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-findNext.png)                                | 다음 찾기             | F3           | 찾을 내용 다음 찾기를 실행합니다.                                      |
| ![Find all](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-findAll.png)                                  | 모두 찾기             |              | 찾을 내용 모두 찾기를 실행합니다.                                      |
| ![Find first](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-findFirst.png)                              | 처음부터 찾기           |              | 찾을 내용을 처음부터 찾기를 실행합니다.                                   |
| ![Find last](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-findLast.png)                                | 마지막 찾기            |              | 찾을 내용의 마지막 찾기를 실행합니다.                                    |
| ![Replace](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-replace.png)                                   | 바꾸기               | Ctrl+R       | 내용을 찾아서 바꾸기를 실행합니다.                                      |
| ![Comment Block](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-commentBlock.png)                        | 블록 주석 처리          | Ctrl+-       | 블록으로 설정한 부분을 주석 처리합니다.                                   |
| ![Uncomment block](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-uncommentBlock.png)                    | 블록 주석 제거          | Shift+Ctrl+- | 블록으로 설정한 부분의 주석을 제거합니다.                                  |
| ![Indent](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-indent.png)                                     | 들여쓰기              |              | 커서가 위치한 줄에서 들여쓰기합니다.                                     |
| ![Outdent](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-outdent.png)                                   | 내어쓰기              | Shift+Tab    | 커서가 위치한 줄에서 내어쓰기합니다.                                     |
| ![Uppercase](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-uppercase.png)                               | 대문자               | Ctrl+U       | 커서가 위치한 문자를 대문자로 변환합니다.                                  |
| ![Lowercase](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-lowercase.png)                               | 소문자               | Ctrl+L       | 커서가 위치한 문자를 소문자로 변환합니다.                                  |
| ![Change Case](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-changeCase.png)                            | 대/소문자 바꾸기         |              | 커서가 위치한 문자를 대/소문자로 변환합니다.                                |
| ![Capitalize](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-capitalize.png)                             | 첫 글자를 대문자로        | Ctrl+I       | 선택한 문자의 첫 글자를 대문자로 변환합니다.                                |
| ![Goto line](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-gotoLine.png)                                | 줄 이동              | Ctrl+G       | 원하는 줄로 커서를 이동합니다.                                        |
| ![Word wrap](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-wordWrap.png)                                | 자동 줄 바꿈           |              | 자동 줄 바꿈을 설정/해제 합니다.                                      |
| ![Show blank, tab, Return](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-showBlankTabReturn.png)        | 공백/탭/문자/캐리지 리턴 표시 |              | 공백/탭/문자/캐리지 리턴을 표시합니다.                                   |
| ![Toggle folding.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-toggleFolding.png)                     | 접기 설정/해제          |              | 접기 기능을 설정/해제 합니다.                                        |
| ![SQL Convert](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-SQLConvert.png)                            | SQL 변환            |              | Delphi, VB, C#, ASP, PHP,  JSP, Java, C 코드로 SQL을 변환합니다.  |

#### 형식 도구 모음

| 버튼                                                                                                                                                         | 명령어       | 바로 가기 키 | 동작                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------- | --------------------- |
| ![Set Background Color](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-setBackgroundColor.png)            | 배경색 설정    |         | 선택한 문자의 배경색을 설정합니다.   |
| ![Use Substitution variables](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-useSubstitutionVariable.png) | 대체 변수 사용  |         | 대체 변수 사용을 설정/해제 합니다.  |
| ![Use bind variables](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/executionPlan/icon-sql-editor-useBindVariable.png)                 | 바인드 변수 사용 |         | 바인드 변수 사용을 설정/해제 합니다. |