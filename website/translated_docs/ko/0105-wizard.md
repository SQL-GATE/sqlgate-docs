---
id: 0105-wizard
title: 마법사 활용
sidebar_label: 마법사 활용
---

## 테이블 만들기 마법사를 이용하여 테이블 만들기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero,cubrid>)

CREATE 문장을 작성하지 않고 테이블을 만들 수 있는 테이블 만들기 마법사에 대해 설명합니다. 테이블 만들기 마법사를 이용하는 방법은 아래와 같습니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **만들기**>**테이블**을 선택합니다. 또는 개체 패널에서 테이블을 선택하고 마우스 오른쪽을 클릭하고 [새 테이블]을 선택합니다.

![새테이블 만들기 마법사 메뉴](https://resource.sqlgate.com/resource/captures/wizard/create-table-wizard-01-ko.png)

3. 빈 테이블 만들기 마법사가 열립니다.테이블 이름과 주석을 입력합니다. 필드 이름을 클릭하고 필드 이름을 입력 후에 엔터 키를 입력하면 다음 입력 항목으로 이동합니다.
4. 필드에 필요한 정보를 모두 입력합니다. 추가로 필요할 경우 *제약 조건*, *저장 영역*, *옵션* 탭에서 설정합니다.

![새테이블 만들기 컬럼정보 입력 양식](https://resource.sqlgate.com/resource/captures/wizard/create-table-wizard-02-ko.png)

5. 모든 필드를 추가한 후에 [SQL 보기]를 클릭하여 자동 생성된 SQL 문장을 확인합니다.
6. 작업이 완료되면 [확인] 버튼을 클릭합니다.
7. 실행된 **SQL** 창에서 쿼리가 실행된 것을 확인합니다.
8. [확인] 버튼을 클릭합니다.
9. 개체 패널에서 [새로 고침] 버튼을 클릭하여 생성된 테이블을 확인합니다.


## 데이터 내보내기 마법사로 작업하기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero,cubrid>)

테이블, 뷰 또는 쿼리 실행 결과를 다양한 문서형식으로 내보내기 할 수 있습니다.

### 지원하는 문서 형식

| 문서형식         | 확장자           |
| ------------ | ------------- |
| DBase파일      | *.dbf         |
| 텍스트 파일       | *.txt,*.csv   |
| Excel 파일     | *.xlsx, *.xls |
| SQL 스크립트 파일  | *.sql         |
| MS Access 파일 | *.mdb         |


### 데이터 내보내기

#### SQL 편집기에서 데이터 내보내기
1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**SQL 편집기**를 선택합니다. 또는 새로 만들기 도구 모음에서 [SQL 편집기]를 클릭하거나 Ctrl+N를 누릅니다.
3. SQL을 작성합니다.
4. [실행] 버튼을 클릭하거나 F5를 누릅니다.
5. 그리드에서 마우스 오른쪽을 클릭하고 **데이터 내보내기>Excel 파일**을 선택합니다.

![데이터 내보내기 마법사 쿼리 결과에서 시작](https://resource.sqlgate.com/resource/captures/wizard/data-export-wizard-04-ko.png)

6. **데이터 내보내기 마법사** 창이 열립니다. 내보낼 데이터 파일 유형을 선택합니다. [다음]을 클릭합니다.
7. **파일 경로 및 추가 옵션 설정** 창에서 내보낼 파일을 선택합니다. 필요할  경우 *각 파일 별 레코드 수*를 설정한 후, [실행]을 클릭합니다.
8. 생성된 파일을 확인합니다.

> 팁 : 내보낼 파일명이 dept.xlsx 이면, 각 파일 별 레코드 수가 입력 된 레코드 수 보다 많으면 dept_001.xlsx, dept_002.xlsx 처럼 생성됩니다.


#### 개체 패널/개체 탐색기에서 데이터 내보내기
1. **개체 패널** 또는 **개체 탐색기**에서 테이블을 선택합니다.
2. 마우스 오른쪽을 클릭하고 [데이터 내보내기]를 선택합니다.

![데이터 내보내기 바법사 개체탐색기에서 시작](https://resource.sqlgate.com/resource/captures/wizard/data-export-wizard-02-ko.png)

3. **데이터 내보내기 마법사** 창이 열립니다. 내보낼 데이터 파일 유형을 선택합니다. 다음을 클릭합니다.
4. **파일 경로 및 추가 옵션 설정** 창에서 내보낼 파일을 선택합니다. *각 파일 별 레코드 수*를 체크하면 입력된 레코드 수 보다 많을 경우 파일을 추가로 만듭니다. [실행]을 클릭합니다.
5. 생성된 파일을 확인합니다.
> 노트: 내보낼 파일명이 dept.xlsx 이면, 각 파일 별 레코드 수가 입력 된 레코드 수 보다 많으면 dept_001.xlsx, dept_002.xlsx 처럼 생성됩니다.

#### 여러 개의 테이블의 데이터를 한꺼번에 내보내기
1. 주 메뉴 **도구**>**데이터 내보내기**를 선택합니다.

![export data in toolbar](https://resource.sqlgate.com/resource/captures/wizard/data-export-wizard-01-ko.png)

2. 내보낼 테이블을 체크합니다. 여러 개의 테이블을 체크할 수 있습니다.
3. 하나의 테이블을 선택할 경우

   **개체 패널**/**개체 탐색기**에서 데이터 내보내기와 동일하게 작동합니다.
4. 하나 이상의 테이블을 선택할 경우

   내보낼 폴더에서 [폴더 찾아보기] 아이콘을 클릭하고 폴더를 선택하고 [확인] 버튼을 클릭합니다.
5. [시작] 버튼을 클릭합니다.
6. 내보낼 폴더에서 테이블 이름으로 저장된 파일들을 볼 수 있습니다.

![데이터 내보내기할 개체 선택하기 창](https://resource.sqlgate.com/resource/captures/wizard/data-export-wizard-03-ko.png)

> 노트: 파일 이름은 테이블 이름과 동일합니다.



## 데이터 가져오기 마법사로 작업하기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero,cubrid>)

다양한 문서의 데이터를 테이블로 가져올 수 있습니다. 이 사용설명서에서는 Excel 파일, 텍스트 파일 가져오기를 설명합니다.

### 지원하는 문서 형식

| 문서형식         | 확장자           |
| ------------ | ------------- |
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

![데이터 가져오기 마법사 추가 옵션 설정](https://resource.sqlgate.com/resource/captures/wizard/data-import-wizard-file-additional-option-ko.png)

7. 마지막 행: 입력하지 않으면 파일의 모든 행을 읽습니다.
8. **파일 미리 보기** 창에서는 가져올 파일의 열과 테이블 열을 매핑합니다. 자동 열 매핑을 선택하면 테이블 필드 순서대로 가져올 파일의 열과 매핑합니다. [다음]을 클릭합니다.
9. 열 매핑 창에서 소스 파일과 테이블 필드가 올바르게 매핑이 되었는지 확인합니다.

![Excel 데이터 가져오기 마법사_열 매핑](https://resource.sqlgate.com/manual-content/06973AF7048FBE06AA18CC183C576E03.jpg)

> 노트: 열 매핑 창에서 키를 지정하지 않으면 추가, 복사만 활성화 됩니다. 다른 가져오기 모드를 활성화 시키려면 열 매핑 창에서 키를 체크해야 합니다.

10. **데이터 미리 보기** 창에서 가져오기 전에 데이터를 확인합니다. [다음]을 클릭합니다.
11. **실행 요약** 창에서 *가져오기 모드*를 선택하시고 [실행]을 클릭합니다.

![데이터 가져오기 마법사 실행 요약](https://resource.sqlgate.com/resource/captures/wizard/data-import-wizard-run-summary-ko.png)

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

![데이터 가져오기 마법사 옵션 설정](https://resource.sqlgate.com/resource/captures/wizard/data-import-wizard-file-option-ko.png)

- 필드 구분 기호: 데이터 행에서 각 필드를 구분하는 문자이며, 각 필드 사이에 탭,(쉼표) 또는 특별한 기호가 있을 경우 체크합니다.
- 고정된 너비: 각 필드 사이에 문자의 너비가 고정되어 있을 경우 체크합니다.
- 필드 구분 기호: 필드 구분 기호를 체크하고 각 필드를 구분하는 기호를 체크합니다. 기호가 없으면 기타 기호를 체크하고 입력란에 입력합니다.
- 줄 바꿈: 파일에서 바꿈 문자를 구분하는 CRLF,CR,LF 중에 선택합니다.
- 한정자: 파일에서 문자열을 어떻게 구분하는지를 표시하는 데 사용되는 한정자(Qualifier)를 없음, 작은따옴표 또는 큰따옴표 중에서 선택합니다.

6. **파일 미리 보기** 창에서는 가져올 파일의 열과 테이블 열을 매핑합니다. *자동 열 매핑*을 선택하면 테이블 필드 순서대로 가져올 파일의 열과 매핑합니다. [다음]을 클릭합니다.
7. **열 매핑 창**에서 소스 파일과 테이블 필드가 올바르게 매핑이 되었는지 확인합니다.

![Excel 데이터 가져오기 마법사_열 매핑](https://resource.sqlgate.com/manual-content/06973AF7048FBE06AA18CC183C576E03.jpg)

> 노트: 열 매핑 창에서 키를 지정하지 않으면 추가, 복사만 활성화 됩니다.  다른 가져오기 모드를 활성화시키려면 **열 매핑 창**에서 *키*를 체크해야 합니다.

8. **데이터 미리 보기** 창에서 가져오기 전에 데이터를 확인합니다. [다음]을 클릭합니다.
9. **실행 요약** 창에서 *가져오기 모드*를 선택하시고 [실행]을 클릭합니다.

![데이터 가져오기 마법사 실행 요약](https://resource.sqlgate.com/resource/captures/wizard/data-import-wizard-run-summary-ko.png)

- 추가: 대상테이블에 레코드를 추가합니다.
- 업데이트: 소스의 레코드와 일치하는 대상 레코드 업데이트를 업데이트 합니다.
- 추가/업데이트: 대상 레코드가 존재하면 업데이트, 그렇지 않으면 추가합니다.
- 삭제: 소스의 레코드와 일치하는 대상 레코드를 삭제합니다.
- 복사: 모든 대상 레코드를 삭제하고 소스 내용으로 바꾸기 합니다.
- 새로 추가: 대상 레코드가 없을 경우에만 레코드를 추가합니다.
10. 마지막으로 성공 여부를 확인 후에 [확인] 버튼을 클릭합니다.

