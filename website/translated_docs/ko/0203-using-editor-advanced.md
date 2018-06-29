---
id: 0203-using-editor-advanced
title: SQL편집기의 세부기능
sidebar_label: SQL편집기의 세부기능
---

## 테이블 자동 완성 사용하기
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

테이블 자동 완성 기능을  사용하는 방법에 대해 설명합니다

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**SQL 편집기**를 실행합니다. 또는 새로 만들기 도구 모음에서 [SQL 편집기]를 클릭하거나 Ctrl+N를 누릅니다.
3. SQL을 작성합니다.
4. 키워드 From / Into / Update 뒤에는 자동으로 테이블 리스트가 나타납니다.

![SQL 에디터에서 테이블 자동완성](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditorAdvanced/use-table-autocomplete-ko.png)

5. 원하는 테이블을 커서로 선택 하거나 더블 클릭합니다.
6. 소유 권한이 있는 테이블과 다른 소유자 개체도 선택할 수 있습니다.

![SQL 에디터에서 테이블 자동완성 목록 특정 오브젝트 선택](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditorAdvanced/use-table-autocomplete-choice-object-ko.png)

7. 어떤 위치에서도 바로 가기 키 Ctrl+H를 누르면 테이블 자동 완성이 실행됩니다.



## 필드 자동 완성 사용하기
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

필드 자동 완성 기능을 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**SQL 편집기**를 실행합니다. 또는 새로 만들기 도구 모음에서 [SQL 편집기]를 클릭하거나 Ctrl+N를 누릅니다.
3. SQL을 작성합니다
4. SQL 편집기에 점(.) 을 입력하면 별칭 또는 테이블의 필드를 표시합니다.
5. 원하는 테이블의 필드를 선택하고 엔터 키를 입력합니다.

![SQL 에디터에서 컬럼 자동완성](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditorAdvanced/use-field-autocomplete-ko.png)


## 코드 자동 완성 사용하기
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

코드 자동 완성 기능을 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**SQL 편집기**를 실행합니다. 또는 새로 만들기 도구 모음에서 [SQL 편집기]를 클릭하거나 Ctrl+N를 누릅니다.
3. 편집기 창에 'selectw'를 입력합니다.

![SQL 에디터에서 코드 템플릿 자동완성](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditorAdvanced/use-code-template-autocomplete-ko.png)

4. 코드 자동완성 화면에 표시되는 SELECTW를 더블클릭 합니다. 자동완성 화면이 표시되지 않을 경우 Ctrl+J를 누릅니다.
5. 코드 템플릿이 실행되어 코드가 자동으로 완성됩니다.
6. 실행 결과를 확인합니다.

![SQL 에디터에서 코드 템플릿 자동완성 실행 결과](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditorAdvanced/use-code-template-autocomplete-result-ko.png)

7. 코드 템플릿의 정의는 주 메뉴 **도구**>**옵션**>**SQL 편집기**>**편집기 옵션**>**코드 템플릿**에 정의되어 있습니다.
8. 사용자 지정으로 추가, 변경, 삭제가 가능합니다.

![SQL 에디터에서 코드 템플릿 사용자화 하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditorAdvanced/use-code-template-customize-ko.png)



## SQL 편집기 창을 두 개로 보기
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

SQL 편집기 창을 두 개로 보기를 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**SQL 편집기**를 실행합니다. 또는 새로 만들기 도구 모음에서 [SQL 편집기]를 클릭하거나 Ctrl+N를 누릅니다.
3. SQL을 작성합니다, 편집기 아래쪽이나 위쪽의 버튼을 마우스 왼쪽을 클릭하고 이동합니다. SQL 편집기를 가로나 세로로 두 개의 창으로 볼 수 있습니다.
4. SQL 편집기 창이 가로로 두 개 보입니다. 원래 위치로 가져가면 창이 하나로 보입니다.

![SQL편집기 창을 두개로 보기 좌우로 분할](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditorAdvanced/display-two-SQL-editor-01-ko.png)

![SQL편집기 창을 두개로 보기 위아래로 분할](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditorAdvanced/display-two-SQL-editor-02-ko.png)


## 쿼리 결과 창을 가로/세로 전환하기
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

쿼리 결과 창을 가로/세로로 전환하는 방법을 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**SQL 편집기**를 실행합니다. 또는 새로 만들기 도구 모음에서 [SQL 편집기]를 클릭하거나 Ctrl+N를 누릅니다.
3. SQL을 작성합니다.
4. 실행 버튼을 클릭하거나 F5를 누릅니다.
5. 데이터 탭에서 마우스 오른쪽을 클릭하고 가로/세로 보기 변경을 선택합니다

![쿼리 결과 창을 가로/세로 전환하기 가로보기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditorAdvanced/change-query-result-view-01-ko.png)

6. 실행 결과를 확인합니다.

![쿼리 결과 창을 가로/세로 전환하기 세로보기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditorAdvanced/change-query-result-view-02-ko.png)


## 여러 개의 쿼리 결과 창을 가로/세로 전환하기
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

여러 개의 쿼리 결과 창을 가로/세로로 전환하는 방법을 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**SQL 편집기**를 실행합니다. 또는 새로 만들기 도구 모음에서 [SQL 편집기]를 클릭하거나 Ctrl+N를 누릅니다.
3. SQL을 작성합니다.
4. 실행 버튼을 클릭하거나 F5를 누릅니다.
5. 데이터 탭 오른쪽 가로/세로 보기 변경 버튼을 클릭합니다.
6. 실행 결과를 확인합니다.
![여러개의 쿼리 결과 창을 가로/세로 전환하기 위에서 부터](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditorAdvanced/change-query-result-view-03-ko.png)
![여러개의 쿼리 결과 창을 가로/세로 전환하기 좌에서 부터](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditorAdvanced/change-query-result-view-04-ko.png)


## 쿼리 구문을 보기 좋게 정렬하기
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

쿼리 구문을 보기 좋게 정리 하는 방법을 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**SQL 편집기**를 실행합니다. 또는 새로 만들기 도구 모음에서 [SQL 편집기]를 클릭하거나 Ctrl+N를 누릅니다.
3. SQL을 작성합니다.
4. 주 메뉴 **쿼리**>**SQL 맞춤**을 실행합니다. 또는 실행 도구 모음에서 **SQL 맞춤**을 클릭하거나 F9를 누릅니다. 정리된 SQL이 보입니다.

![SQL맞춤](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditorAdvanced/align-query-statements-01-ko.png)

5. 주 메뉴 **도구**>**옵션** 클릭 후, **SQL 편집기**>**SQL 맞춤 옵션**>**옵션** 버튼을 클릭합니다. 또는 실행 도구 모음에서 **SQL 맞춤 옵션**을 클릭합니다.
6. SQL 맞춤 옵션을 설정할 수 있습니다.
![SQL맞춤 옵션](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditorAdvanced/align-query-statements-03-ko.png)

> 팁 : 재설정 버튼을 누르시면 옵션 설정이 초기화됩니다.



## SQL을 Java 코드로 변환하기
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

SQL을 Java 코드로 변환하는 방법을 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**SQL 편집기**를 실행합니다. 또는 새로 만들기 도구 모음에서 [SQL 편집기]를 클릭하거나 Ctrl+N를 누릅니다.
3. SQL을 작성합니다.
4. SQL을 마우스 왼쪽을 클릭하고 선택합니다.
5. 주 메뉴 **편집**>**SQL 변환**>**JSP, Java, C**를 실행합니다. 또는 편집기 도구 모음에서 **SQL 변환**을 클릭합니다. 클립보드로 복사가 됩니다.

![SQL을 Java 코드로 변환하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditorAdvanced/convert-SQL-java-codes-ko.png)

6. 외부 편집기를 열고 빈 문서를 만듭니다. 붙여넣기 또는 Ctrl+V를 누릅니다.
7. 생성된 코드를 확인합니다.

![SQL을 Java 코드로 변환하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditorAdvanced/convert-SQL-java-codes-view.png)



## Java 코드에서 SQL 추출하기
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

Java 코드에서 SQL을 추출하는 방법을 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**SQL 편집기**를 실행합니다. 또는 새로 만들기 도구 모음에서 [SQL 편집기]를 클릭하거나 Ctrl+N를 누릅니다.
3. 외부 편집기에서 Java 코드를 마우스 왼쪽을 클릭하고 선택합니다. 복사하기 또는 Ctrl+C를 눌러 클립보드로 복사하기를 실행합니다.

![Java 코드에서 SQL 추출하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditorAdvanced/extract-SQL-from-java.png)

4. 주 메뉴 **편집**>**코드로부터 붙여넣기**를 실행합니다. 또는 편집기 도구 모음 **코드로부터 붙여넣기**를 클릭하거나 Shift+Ctrl+V를 누릅니다
5. 생성된 코드를 확인합니다.

![Java 코드에서 SQL 추출하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditorAdvanced/extract-SQL-from-java-result-ko.png)


## 테이블 스키마 바로 보기
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

SQL 편집기에서 테이블 스키마 바로 보기를 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**SQL 편집기**를 실행합니다. 또는 새로 만들기 도구 모음에서 [SQL 편집기]를 클릭하거나 Ctrl+N를 누릅니다.
3. SQL을 작성합니다 개체 명 옆으로 커서를 이동합니다. Alt+1를 누릅니다.
4. 데이터 탭에서 스키마 정보를 확인합니다.

![테이블 스키마 바로 보기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditorAdvanced/view-table-schema-right-away-ko.png)

> 노트: 테이블 스키마 바로 보기는 도구>옵션>쿼리 바로 가기에서 설정 변경할 수 있습니다.



## 테이블 데이터 바로 보기
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

SQL 편집기에서 테이블 데이터 바로 보기를 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**SQL 편집기**를 실행합니다. 또는 새로 만들기 도구 모음에서 [SQL 편집기]를 클릭하거나 Ctrl+N를 누릅니다.
3. SQL을 작성합니다 개체 키워드 옆으로 커서를 이동합니다. Alt+2를 누릅니다.
4. 데이터 탭에서 데이터 정보를 확인합니다.

![테이블 데이터 바로 보기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditorAdvanced/view-table-data-right-away-ko.png)


## 테이블 전체 정보 바로 보기
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

편집기에서 테이블 전체 정보 바로 보기를 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**SQL 편집기**를 실행합니다. 또는 새로 만들기 도구 모음에서 [SQL 편집기]를 클릭하거나 Ctrl+N를 누릅니다.
3. SQL을 작성합니다 개체 키워드 옆으로 커서를 이동합니다.
4. 주 메뉴 **편집**>**스키마** 설명을 실행합니다. 또는 F4를 누릅니다.
5. 테이블 전체 정보가 표시됩니다.

![테이블 전체 정보 바로 보기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditorAdvanced/view-table-infomation-ko.png)

> 노트: 테이블 이름이 아닐 경우 '개체를 찾을 수 없습니다.' 라는 창이 열립니다.



## 편집기 창 탭 추가하기
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

편집기 창의 탭을 추가하는 방법을 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**SQL 편집기**를 실행합니다. 또는 새로 만들기 도구 모음에서 [SQL 편집기]를 클릭하거나 Ctrl+N를 누릅니다.
3. [편집기 추가]를 클릭합니다. 새로운 탭이 추가 됩니다.
4. 새 탭에서 SQL을 작성합니다.

![편집기 창 탭 추가하여 SQL 실행하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditorAdvanced/add-tab-editor-ko.png)


## 편집기 창의 탭 여러 개 추가하기
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

편집기 창의 탭을 여러 개 추가하는 방법을 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 도구>옵션을 실행합니다. 좌측 메뉴목록에서 [SQL 편집기]를 클릭합니다.
3. 쿼리 편집기 시작 시 탭 개수의 값을 설정합니다. 확인 버튼을 클릭합니다.
4. 주 메뉴 **파일**>**새로 만들기**>**SQL 편집기**를 실행합니다. 또는 새로 만들기 도구 모음에서 [SQL 편집기]를 클릭하거나 Ctrl+N를 누릅니다.
5. 설정 한 개수만큼 빈 SQL 문서가 열립니다.

![편집기 창의 탭 여러 개 추가하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditorAdvanced/add-tab-editor-option-ko.png)



## 편집기 창만 보기
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

편집기 창만 보기를 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**SQL 편집기**를 실행합니다. 또는 새로 만들기 도구 모음에서 [SQL 편집기]를 클릭하거나 Ctrl+N를 누릅니다.
3. SQL을 작성합니다.
4. 실행 도구 모음에서 [그리드 표시]를 클릭하거나 F11을 누릅니다.
5. 그리드 창은 표시되지 않고 편집기 창만 보입니다.

![편집기 창만 보기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditorAdvanced/view-editor-only-ko.png)



## 편집기 창과 그리드 분리하기
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

편집기 창과 그리드 분리하기를 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**SQL 편집기**를 실행합니다. 또는 새로 만들기 도구 모음에서 [SQL 편집기]를 클릭하거나 Ctrl+N를 누릅니다.
3. SQL을 작성합니다.
4. [실행] 버튼을 클릭하거나 F5를 누릅니다.
5. 데이터 탭에서 쿼리 실행 결과를 확인합니다.
6. 실행 결과를 더블 클릭합니다.
7. 쿼리 편집기 창과 그리드가 분리 됩니다.
8. 그리드의 제목을 마우스 더블 클릭하면, 쿼리 편집기 창과 그리드가 원래 상태로 정렬됩니다.

![편집기 창과 그리드 분리하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditorAdvanced/create-separate-window-query-result-ko.png)


## 편집기 창과 그리드 위치 재정렬 하기
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

편집기 창과 그리드 위치 재정렬 하기를 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**SQL 편집기**를 실행합니다. 또는 새로 만들기 도구 모음에서 [SQL 편집기]를 클릭하거나 Ctrl+N를 누릅니다.
3. SQL을 작성합니다.
4. [실행] 버튼을 클릭하거나 F5를 누릅니다.
5. 실행 도구 모음에서 [탭을 오른쪽으로 이동]을 클릭합니다.
6. 결과 창이 오른쪽으로 이동한 결과를 확인합니다.

    (탭을 아래쪽으로 이동을 클릭하면 결과 창이 아래쪽으로 이동합니다.)

![편집기 창과 그리드 위치 재정렬 하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditorAdvanced/relocate-editor-window-grid-ko.png)




## 편집기 탭 위치 이동하기
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

편집기 탭의 위치 이동하기를 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**SQL 편집기**를 실행합니다. 또는 새로 만들기 도구 모음에서 [SQL 편집기]를 클릭하거나 Ctrl+N를 누릅니다.
3. SQL을 작성합니다.
4. 이동 할 탭을 원하는 위치로 끌어서 놓기를 합니다.
5. 실행 결과를 확인합니다.



## 현재 창 이외에 모두 닫기
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

현재의 작업 창 이외에 모든 탭 닫기를 설명합니다.

1. 데이터베이스에 접속합니다.
2. 현재 탭에서 마우스 오른쪽을 클릭하고 [이 창을 제외하고 모두 닫기]를 선택합니다.
3. 실행 결과를 확인 합니다.

![현재 창 이외에 모두 닫기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditorAdvanced/close-all-tab-ko.png)


## 책갈피로 바로 가기
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

책갈피로 바로 가기 기능을 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**SQL 편집기**를 실행합니다. 또는 새로 만들기 도구 모음에서 [SQL 편집기]를 클릭하거나 Ctrl+N를 누릅니다.
3. SQL을 작성합니다.
4. 책갈피를 설정할 SQL구문에서 편집>책갈피>책갈피 설정/해제를 실행합니다. 또는 Ctrl+Alt+0을 누릅니다.
5. 편집기에서 Ctrl+0을 누릅니다. 설정된 책갈피로 커서가 이동합니다.

![책갈피로 바로 가기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditorAdvanced/bookmark-shortcut-01-ko.png)

![책갈피로 바로 가기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditorAdvanced/bookmark-shortcut-02-ko.png)
> 노트: 책갈피는 숫자 키 0-9번까지 설정할 수 있으며 같은 편집기 창에서만 실행됩니다.


## SQL 구문 주석 한 번에 추가하기
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

SQL 구문에서 주석을 한 번에 추가하기를 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**SQL 편집기**를 실행합니다. 또는 새로 만들기 도구 모음에서 [SQL 편집기]를 클릭하거나 Ctrl+N를 누릅니다.
3. SQL을 작성합니다.
4. 주석 처리할 텍스트를 마우스 왼쪽 클릭하고 블록을 선택합니다.
5. 주 메뉴 **편집**>**블록 주석 처리**를 실행합니다. 또는 편집기 도구 모음에서 [블록 주석 처리]를 클릭하거나 Ctrl+-를 누릅니다.
6. 실행 결과를 확인합니다.

![SQL 구문 주석 한 번에 추가하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditorAdvanced/comment-block-01-ko.png)

![SQL 구문 주석 한 번에 추가하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditorAdvanced/comment-block-02-ko.png)

## SQL 구문 주석 한 번에 해제하기
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

SQL 구문에서 주석을 한 번에 해제하기를 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**SQL 편집기**를 실행합니다. 또는 새로 만들기 도구 모음에서 [SQL 편집기]를 클릭하거나 Ctrl+N를 누릅니다.
3. SQL을 작성합니다.
4. 해제할 주석에 마우스 왼쪽을 클릭하고 블록을 선택합니다.
5. 주 메뉴 **편집**>**블록 주석 제거**를 실행합니다. 또는 편집기 도구모음에서 [블록 주석 제거]를 클릭하거나 Shift+Ctrl+-를 누릅니다.
6. 실행 결과를 확인합니다.

![SQL 구문 주석 한 번에 해제하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditorAdvanced/comment-block-remove-01-ko.png)

![SQL 구문 주석 한 번에 해제하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditorAdvanced/comment-block-remove-02-ko.png)

## SQL 맞춤 옵션 설정 하기
> Supports :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

SQL 맞춤 옵션 설정 하기를 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **도구**>**SQL 맞춤 옵션**을 실행합니다. 또는 새로 만들기 도구 모음에서 [SQL 맞춤 옵션]을 클릭합니다.

![SQL맞춤 옵션](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/SQLEditorAdvanced/align-query-statements-03-ko.png)

- 일반 : 키워드의 대/소문자, 주석 지우기, 공백 제거, 문자열 구분 기호를 설정합니다.
- 줄 바꿈 : 줄 바꿈 할 위치를 설정합니다.
- 공백 : 불필요한 공백 제거 및 연산자 주위 공백, 쉼표 주위 공백, 괄호 주위 공백을 설정합니다.
- 내장 프로시져 : 변수 선언 맞춤 및 조건문, 매개변수에 대한 줄 바꿈과 들여쓰기를 설정합니다.

