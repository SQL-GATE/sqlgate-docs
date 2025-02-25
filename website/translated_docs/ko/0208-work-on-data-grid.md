---
id: 0208-work-on-data-grid
title: 데이터 그리드로 작업하기
sidebar_label: 데이터 그리드로 작업하기
---

## 셀 여러 개 선택 하기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero,cubrid>)

데이터 그리드에서 셀 여러 개 선택하는 방법을 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**SQL 편집기**를 실행합니다. 또는 새로 만들기 도구 모음에서 [SQL 편집기]를 클릭하거나 Ctrl+N를 누릅니다.
3. SQL을 작성합니다.
4. 실행 버튼을 클릭하거나 F5를 누릅니다.
5. 데이터 탭에서 쿼리 결과를 확인 합니다.
6. 마우스 왼쪽을 클릭하고 셀을 여러 개 선택합니다.

![데이터 그리드에서 셀 여러 개 선택하기](https://resource.sqlgate.com/resource/captures/datagrid/datagrid-selectMultipleCells-ko.png)


## 선택한 셀 값을 연산하기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero,cubrid>)

데이터 그리드에서 선택한 셀 값 연산 하기를 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**SQL 편집기**를 실행합니다. 또는 새로 만들기 도구 모음에서 [SQL 편집기]를 클릭하거나 Ctrl+N를 누릅니다.
3. SQL을 작성합니다.
4. [실행] 버튼을 클릭하거나 F5를 누릅니다.
5. 데이터 탭에서 쿼리 결과를 확인 합니다.
6. 마우스 왼쪽을 클릭한 상태로 셀들을 선택합니다
7. 상태 막대에서 선택된 열의 개수와 결과값을 확인합니다.

![상태 막대에서 결과값 확인](https://resource.sqlgate.com/resource/captures/datagrid/datagrid-operateSelectedCell-ko.png)

> 노트: 기본 설정은 합계입니다. 상태 막대에서 마우스 오른쪽을 클릭하고 개수, 숫자 개수, 평균, 최대값, 최소값을 선택해서 같이 볼 수 있습니다.


## 셀 선택 후 복사하기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero,cubrid>)

데이터 그리드에서 셀 선택 후 복사하기를 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**SQL 편집기**를 실행합니다. 또는 새로 만들기 도구 모음에서 [SQL 편집기]를 클릭하거나 Ctrl+N를 누릅니다.
3. SQL을 작성합니다.
4. [실행] 버튼을 클릭하거나 F5를 누릅니다.
5. 데이터 탭에서 쿼리 결과를 확인 합니다.
6. 마우스 왼쪽을 클릭하고 셀을 여러 개 선택합니다.
7. 마우스 오른쪽을 클릭하고 **복사**>**선택한 셀 복사**를 선택합니다.

![데이터 그리드에서 셀 복사하기](https://resource.sqlgate.com/resource/captures/datagrid/datagrid-copySelectedCells-ko.png)

8. 편집기 창이나 외부 편집기에서 붙여넣기 혹은 Ctrl+V를 누릅니다.
9. 실행 결과를 확인합니다.



## 결과물을 Excel로 저장하기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero,cubrid>)

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
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero,cubrid>)

데이터 그리드에서 선택한 열로 고정 하기를 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**SQL 편집기**를 실행합니다. 또는 새로 만들기 도구 모음에서 **SQL 편집기**를 클릭하거나 Ctrl+N를 누릅니다.
3. SQL을 작성합니다.
4. [실행] 버튼을 클릭하거나 F5를 누릅니다.
5. 데이터 탭에서 쿼리 결과를 확인 합니다.
6. 열을 선택하고 마우스 오른쪽을 클릭하고 [선택한 열 고정]을 선택합니다.
7. 실행 결과를 확인합니다.

![선택한 열 고정](https://resource.sqlgate.com/resource/captures/datagrid/datagrid-pinSelectedColumn-ko.png)



## 선택한 열로 정렬하기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero,cubrid>)

데이터 그리드에서 선택한 열로 정렬하기를 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**SQL 편집기**를 실행합니다. 또는 새로 만들기 도구 모음에서 [SQL 편집기]를 클릭하거나 Ctrl+N를 누릅니다.
3. SQL을 작성합니다.
4. [실행] 버튼을 클릭하거나 F5를 누릅니다.
5. 데이터 탭에서 쿼리 결과를 확인 합니다.
6. 열을 선택하고 마우스 오른쪽을 클릭하고 정렬을 선택합니다.

![열 선택하고 정렬하기](https://resource.sqlgate.com/resource/captures/datagrid/datagrid-sortSelectedColumn-ko.png)

7. 정렬 창이 열립니다. 정렬 기준을 선택하고 확인을 클릭합니다.

![정렬 기준 선택](https://resource.sqlgate.com/resource/captures/datagrid/datagrid-sortSelectedColumn-01-ko.png)

8. 실행 결과를 확인합니다.

![실행 결과 확인](https://resource.sqlgate.com/resource/captures/datagrid/datagrid-sortSelectedColumn-02.png)

**간단하게 정렬 하는 방법은 다음과 같습니다.**
1. 열 이름에서 마우스 왼쪽 클릭을 합니다.
2. 확인 창이 열립니다. [예]를 클릭합니다.

![간단하게 정렬하기](https://resource.sqlgate.com/resource/captures/datagrid/datagrid-sortSelectedColumn-02-ko.png)

3. 열 이름을 클릭하면 오름차순,내림차순 정렬이 됩니다.



## 데이터 가로/세로로 보기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,db2,tibero,cubrid>)

데이터 그리드에서 데이터 가로/세로로 보기를 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**SQL 편집기**를 실행합니다. 또는 새로 만들기 도구 모음에서 [SQL 편집기]를 클릭하거나 Ctrl+N를 누릅니다.
3. SQL을 작성합니다.
4. [실행] 버튼을 클릭하거나 F5를 누릅니다.
5. 데이터 탭에서 쿼리 결과를 확인 합니다.
6. 그리드에서 마우스 오른쪽을 클릭하고 [가로/세로 보기 변경]을 선택합니다.
7. 실행 결과를 확인합니다.

![데이터 가로/세로 보기 변경](https://resource.sqlgate.com/resource/captures/datagrid/datagrid-viewDataHorizontallyVertically-ko.png)

![데이터 가로 보기 실행 결과](https://resource.sqlgate.com/resource/captures/datagrid/datagrid-viewDataHorizontallyVertically-01-ko.png)




## 열 이름을 편집기에 추가하기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero,cubrid>)

데이터 그리드에서 열 이름을 편집기에 추가 하는 방법을 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**SQL 편집기**를 실행합니다. 또는 새로 만들기 도구 모음에서 **SQL 편집기**를 클릭하거나 Ctrl+N를 누릅니다.
3. SQL을 작성합니다.
4. [실행] 버튼을 클릭하거나 F5를 누릅니다.
5. 데이터 탭에서 쿼리 결과를 확인 합니다.
6. 열 이름을 편집기에 끌어서 놓기를 합니다.
7. 열 이름이 편집기에 추가됩니다.
8. 실행 결과를 확인합니다.

![데이터 그리드에서 열 이름 편집기에 추가](https://resource.sqlgate.com/resource/captures/datagrid/datagrid-addColumnNameOnTheEditor-ko.png)




## 클립보드의 데이터를 그리드에 추가/변경하기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero,cubrid>)

클립보드의 데이터를 그리드에 추가/변경하기를 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**SQL 편집기**를 실행합니다. 또는 새로 만들기 도구 모음에서 [SQL 편집기]를 클릭하거나 Ctrl+N를 누릅니다.
3. SQL을 작성합니다.
4. 주 메뉴 **쿼리**>**현재 SQL 실행 및 수정**을 클릭합니다. 또는 실행 도구 모음 [현재 SQL 실행 및 수정] 버튼을 클릭하거나 F6를 누릅니다.

![클립보드 데이터를 그리드에 추가하기](https://resource.sqlgate.com/resource/captures/datagrid/datagrid-addModifyClipboardData-ko.png)

5. 데이터 탭에서 쿼리 결과를 확인합니다.
6. 편집기나 외부 편집기에서 구분 기호 탭을 사용하여 입력할 데이터를 만듭니다.
7. 데이터를 마우스 왼쪽을 클릭하고 선택합니다. [복사 하기] 또는 Ctrl+C를 눌러 클립보드로 복사하기를 실행합니다.

![데이터 그리드에서 셀 복사하기](https://resource.sqlgate.com/resource/captures/datagrid/datagrid-copySelectedCells-ko.png)

8. 데이터 탭 네비게이터의 [레코드 추가]를 클릭합니다

![데이터 탭에서 레코드 추가하기](https://resource.sqlgate.com/resource/captures/datagrid/datagrid-addModifyClipboardData-01-ko.png)

9. 셀에서 마우스 오른쪽을 클릭하고 [붙여넣기]를 선택합니다. 또는 Ctrl+V를 누릅니다.
10. 클립보드 확인 창이 열립니다. [예]를 클릭합니다.
11. 실행 결과를 확인합니다.


## lN 구문 자동으로 생성하기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero,cubrid>)

데이터 그리드에서 IN 구문 자동 생성하기를 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**SQL 편집기**를 실행합니다. 또는 새로 만들기 도구 모음에서 [SQL 편집기]를 클릭하거나 Ctrl+N를 누릅니다.
3. SQL을 작성합니다
4. [실행] 버튼을 클릭하거나 F5를 누릅니다.
5. 데이터 탭에서 쿼리 결과를 확인 합니다.
6. 셀을 선택합니다. 마우스 오른쪽을 클릭하고 [IN 구문 생성]을 선택합니다.

![IN 구문 생성하기](https://resource.sqlgate.com/resource/captures/datagrid/datagrid-createInSystax-ko.png)

7. 주 메뉴 **편집**>**붙여넣기**를 실행합니다. 또는 편집기 도구 모음 [붙여넣기]를 클릭하거나 Ctrl+V를 누릅니다.
8. 실행 결과를 확인합니다.

![IN 구문 생성 확인](https://resource.sqlgate.com/resource/captures/datagrid/datagrid-createInSystax-01-ko.png)