---
id: 0209-work-on-object-explorer
title: 개체 탐색기로 작업하기
sidebar_label: 개체 탐색기로 작업하기
---


## 개체 검색하기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,postgresql,db2,tibero,cubrid>)

**개체 검색하기**에 대해서 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **보기**>**개체 검색**을 선택합니다. 또는 뷰 도구 모음에서 [개체 검색]을 클릭합니다.
3. 검색할 개체의 이름을 입력하고 조건을 선택합니다.
4. 엔터 키를 입력합니다. 또는 검색을 클릭합니다.
5. 그리드에 조건에 맞는 결과값이 표시됩니다.

![개체 검색하기](https://resource.sqlgate.com/resource/captures/objectExplorer/object-searchPanel-ko.png)

6. 해당 그리드에서 더블 클릭하거나 F4를 누릅니다.
7. 개체 상세 정보 결과를 확인합니다.

![검색한 개체 상세 정보 확인](https://resource.sqlgate.com/resource/captures/objectExplorer/object-searchPanelDetail-ko.png)



## 필드의 데이터 값을 변경하기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero,cubrid>)

필드의 데이터 값을 변경하기를 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **보기**>**개체 탐색기**를 실행합니다. 또는 뷰 도구 모음에서 개체 탐색기를 클릭합니다.
3. 테이블 개체를 선택합니다.
4. 데이터 탭에서 변경할 열을 마우스 왼쪽 클릭하고 값을 입력합니다.
5. [확인] 버튼을 클릭합니다.
6. [새로 고침]을 클릭하여 실행 결과를 확인합니다.

![필드의 데이터 값 변경하기](https://resource.sqlgate.com/resource/captures/objectExplorer/object-searchPanelDetailData-ko.png)


## 개체 탐색기와  패널의 탭 항목들

개체 탐색기와 개체 패널의 탭 항목들은 다음과 같습니다.

### 테이블
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero,cubrid>)

소유자의 테이블 목록과 각 테이블의 상세 정보를 조회하고 테이블 생성, 변경, 삭제 등 테이블에 관한 모든 기능을 제공합니다.

- 열 : 선택한 테이블의 열 정보를 조회, 추가, 변경, 삭제, 출력할 수 있습니다.또한 테이블 주석과 열 주석을 조회, 변경할 수 있습니다.
- 인덱스 : 선택한 테이블의 인덱스 정보를 조회, 추가, 변경, 삭제, 출력할 수 있습니다.
- 제약 조건 : 선택한 테이블의 제약 조건을 조회, 추가, 변경, 삭제, 활성화, 비활성화, 출력할 수 있습니다.
- 트리거 : 선택한 테이블의 트리거 정보를 조회, 추가, 변경, 삭제, 활성화, 비활성화, 컴파일, 출력할 수 있습니다.
- 데이터 : 선택한 테이블의 전체 데이터를 조회, 추가, 변경, 삭제, 출력할 수 있습니다.
- 스크립트 : 선택한 테이블의 생성 스크립트를 조회하고 클립보드로 복사, 저장, SQL 편집기로 보낼 수 있습니다.
- 권한 : 선택한 테이블의 권한을 조회, 권한 부여, 권한 취소, 출력할 수 있습니다.
- 분할 영역 : 선택한 테이블이 분할 영역 테이블일 경우 분할 영역의 정보를 조회할 수 있습니다.
- 하위 분할 영역 : 선택한 테이블이 하위 분할 영역일 경우 하위 분할 영역의 정보를 조회할 수 있습니다.
- 속성 : 선택한 테이블의 생성 옵션 및 저장 영역 정보를 조회할 수 있습니다.
- 참조 제약 조건 : 선택한 테이블의 참조 정보를 조회할 수 있습니다.


#### 테이블 콘텍스트 메뉴
| 버튼                                                                                                                                 | 명령어          | 동작                                                                   |
| ---------------------------------------------------------------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------- |
| ![설명 창 열기 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-descriptionPane.png)   | 설명 창 열기 (F4) | 선택한 테이블의 설명 창을 엽니다.                                                  |
|                                                                                                                                    | 추가           | 선택한 테이블에 열, 제약 조건, 인덱스, 트리거를 추가 합니다.                                 |
| ![새 테이블 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-add.png)                 | 새 테이블        | 새 테이블을 추가합니다.                                                        |
| ![변경 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-modify.png)                 | 변경           | 선택한 테이블의 열과 주석을 변경합니다.                                               |
| ![삭제 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-delete.png)                 | 삭제           | 선택한 테이블을 삭제합니다.                                                      |
|                                                                                                                                    | 이름 바꾸기       | 선택한 테이블의 이름을 변경합니다.                                                  |
|                                                                                                                                    | 복사           | 선택한 테이블의 테이블 구조만, 테이블 구조 및 데이터를 선택 해서 복사합니다.                         |
| ![주석 편집 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-editComment.png)         | 주석 편집        | 선택한 테이블의 주석과 열 주석을 편집합니다.                                            |
|                                                                                                                                    | 행 수          | 선택한 테이블의 레코드 수를 표시합니다.                                               |
| ![분석 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-analyze.png)                | 분석           | 선택한 테이블의 통계 분석을 표시합니다.                                               |
| ![새 동의어 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-newSynonym.png)          | 새 동의어        | 선택한 테이블의 동의어를 만듭니다.                                                  |
|                                                                                                                                    | 개체 보고서       | 선택한 테이블의 정보를 보고서로 출력합니다.                                             |
|                                                                                                                                    | 스크립트 보고서     | 선택한 테이블의 스크립트를 보고서로 출력합니다.                                           |
| ![데이터 내보내기 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-exportData.png)       | 데이터 내보내기     | 선택한 테이블의 데이터를 DBase, 텍스트, Excel, SQL 스크립트,  MS Access 파일로 내보내기 합니다.  |
| ![데이터 가져오기 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-importData.png)       | 데이터 가져오기     | 선택한 테이블의 데이터를 DBase, 텍스트, Excel, SQL 스크립트,  MS Access 파일에서 가져오기 합니다. |
| ![휴지통 비우기 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-viewEditPrivilege.png) | 권한 보기/편집     | 선택한 테이블의 권한을 조회, 편집합니다.                                              |
|                                                                                                                                    | 휴지통 비우기      | 휴지통에 있는 Drop된 테이블을 비웁니다.                                             |
| ![필터 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-filter.png)                 | 필터           | 필터 창을 이용하여 항목별로 필터링하여 정렬합니다.                                         |
| ![새로 고침 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-refresh.png)             | 새로 고침        | 새로 고침을 실행합니다.                                                        |

### 뷰
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero,cubrid>)

소유자의 뷰 목록과 각 뷰의 상세 정보를 조회하고 테이블 생성, 변경, 삭제 등 뷰에 관한 모든 기능을 제공합니다.

- 열 : 선택한 뷰의 열 정보 및 뷰 주석을 조회, 추가, 출력할 수 있습니다.
- 데이터 : 선택한 뷰의 데이터를 추가, 변경, 삭제, 출력할 수 있습니다.
- 스크립트 : 선택한 뷰의 생성 스크립트를 조회하고 클립보드로 복사, 저장, SQL 편집기로 보낼 수 있습니다.
- 권한 : 선택한 뷰의 권한을 조회, 권한 부여, 권한 취소, 출력할 수 있습니다.
- 트리거 : 선택한 뷰의 트리거를 조회, 추가, 삭제할 수 있습니다.
- 오류 : 뷰 컴파일 시 발생한 오류 목록을 조회할 수 있습니다.


#### 뷰 콘텍스트 메뉴

| 버튼                                                                                                                                  | 명령어          | 동작                           |
| ----------------------------------------------------------------------------------------------------------------------------------- | ------------ | ---------------------------- |
| ![설명 창 열기 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-descriptionPane.png)    | 설명 창 열기 (F4) | 선택한 뷰의 설명 창을 엽니다.            |
| ![새 뷰 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-add.png)                    | 새 뷰          | 새 뷰를 만듭니다.                   |
| ![변경 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-modify.png)                  | 변경           | 선택한 테이블의 뷰의 내용을 변경합니다.       |
| ![삭제 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-delete.png)                  | 삭제           | 선택한 뷰를 삭제합니다.                |
|                                                                                                                                     | 이름 바꾸기       | 선택한 뷰의 이름을 변경합니다.            |
| ![이름 바꾸기 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-compileRebuild.png)      | 컴파일 뷰        | 선택한 뷰를 재컴파일합니다.              |
|                                                                                                                                     | 행 수          | 선택한 뷰의 레코드 수를 표시합니다.         |
| ![새 동의어 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-newSynonym.png)           | 새 동의어        | 선택한 뷰의 동의어를 만듭니다.            |
|                                                                                                                                     | 개체 보고서       | 선택한 뷰의 정보를 보고서로 출력합니다.       |
|                                                                                                                                     | 스크립트 보고서     | 선택한 뷰의 스크립트를 보고서로 출력합니다.     |
| ![권한 보기/편집 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-viewEditPrivilege.png) | 권한 보기/편집     | 선택한 뷰의 권한을 조회, 편집합니다.        |
| ![필터 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-filter.png)                  | 필터           | 필터 창을 이용하여 항목별로 필터링하여 정렬합니다. |
| ![새로 고침 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-refresh.png)              | 새로 고침        | 새로 고침을 실행합니다.                |



### 트리거
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero,cubrid>)

소유자의 트리거 목록과 각 트리거의 상세 정보를 조회하고 트리거 생성, 변경, 삭제 등 트리거에 관한 모든 기능을 제공합니다.

- 정보 : 선택한 트리거의 세부 정보를 조회할 수 있습니다.
- 스크립트 : 선택한 트리거의 생성 스크립트를 조회하고 클립보드로 복사, 저장, SQL 편집기로 보낼 수 있습니다.
- 열 : 선택한 트리거의 테이블 열 정보를 볼 수 있습니다.
- 오류 : 트리거 컴파일 시 발생한 오류 목록을 조회할 수 있습니다.

#### 트리거 콘텍스트 메뉴

| 버튼                                                                                                                              | 명령어          | 동작                           |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------ | ---------------------------- |
| ![새 트리거 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-add.png)              | 새 트리거        | 새 트리거를 만듭니다.                 |
| ![변경 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-modify.png)              | 변경           | 선택한 트리거의 내용을 변경합니다.          |
| ![삭제 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-delete.png)              | 삭제           | 선택한 트리거를 삭제합니다.              |
| ![컴파일 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-compileRebuild.png)     | 컴파일          | 선택한 트리거를 재컴파일합니다.            |
| ![활성화 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-enable.png)             | 활성화          | 선택한 트리거를 활성화 시킵니다.           |
| ![비활성화 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-disable.png)           | 비활성화         | 선택한 트리거를 비활성화 시킵니다.          |
| ![SQL 편집기로 보내기 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-sqlEditor.png) | SQL 편집기로 보내기 | 선택한 트리거를 SQL 편집기로 보냅니다.      |
|                                                                                                                                 | 개체 보고서       | 선택한 트리거 정보를 보고서로 출력합니다.      |
| ![필터 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-filter.png)              | 필터           | 필터 창을 이용하여 항목별로 필터링하여 정렬합니다. |
| ![새로 고침 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-refresh.png)          | 새로 고침        | 새로 고침을 실행합니다.                |


### 인덱스
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,postgresql,sqlserver,db2,tibero>)

소유자의 인덱스 목록과 각 인덱스의 상세 정보를 조회하고 인덱스 생성, 변경, 삭제 등 인덱스에 관한 모든 기능을 제공합니다.

- 열 : 선택한 인덱스의 열 세부 정보를 조회할 수 있습니다.
- 속성 : 선택한 인덱스의 생성 옵션 및 저장 영역 정보를 조회할 수 있습니다.
- 분할 영역 :선택한 인덱스가 분할 영역 인덱스일 경우 분할 영역의 정보를 조회할 수 있습니다.
- 스크립트 : 선택한 인덱스의 생성 스크립트를 조회하고 클립보드로 복사, 저장, SQL 편집기로 보낼 수 있습니다.

#### 인덱스 콘텍스트 메뉴

| 버튼                                                                                                                          | 명령어      | 동작                           |
| --------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------- |
| ![새 인덱스 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-add.png)          | 새 인덱스    | 새 인덱스를 만듭니다.                 |
| ![변경 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-modify.png)          | 변경       | 선택한 인덱스의 내용을 변경합니다.          |
| ![삭제 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-delete.png)          | 삭제       | 선택한 인덱스를 삭제합니다.              |
| ![재구축 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-compileRebuild.png) | 재구축      | 선택한 인덱스를 재구축합니다.             |
|                                                                                                                             | 이름 바꾸기   | 선택한 인덱스의 이름을 변경합니다.          |
|                                                                                                                             | 개체 보고서   | 선택한 인덱스의 정보를 보고서로 출력합니다.     |
|                                                                                                                             | 스크립트 보고서 | 선택한 인덱스의 스크립트를 보고서로 출력합니다.   |
| ![필터 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-filter.png)          | 필터       | 필터 창을 이용하여 항목별로 필터링하여 정렬합니다. |
| ![새로 고침 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-refresh.png)      | 새로 고침    | 새로 고침을 실행합니다.                |


### 함수/프로시저/패키지
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero,cubrid>)

소유자의 함수/프로시저/패키지 목록과 각각의 상세 정보를 조회하고 생성, 변경, 삭제 등 함수/프로시저/패키지의 모든 기능을 제공합니다.

- 스크립트 : 선택한 개체의 생성 스크립트를 조회하고 클립보드로 복사, 저장, SQL 편집기로 보낼 수 있습니다..
- 매개변수 : 선택한 개체의 매개 변수의 정보를 보여줍니다.
- 사용 : 선택한 개체가 사용하는 개체를 보여줍니다.
- 사용 대상 : 선택한 개체를 사용하는 개체를 보여줍니다.
- 오류 : 선택한 개체의 컴파일 시 발생한 오류 목록을 조회할 수 있습니다.
- 권한 : 선택한 개체의 권한을 조회, 권한 부여, 권한 취소, 출력할 수 있습니다.

#### 함수/프로시저/패키지 콘텍스트 메뉴

| 버튼                                                                                                                         | 명령어           | 동작                           |
| -------------------------------------------------------------------------------------------------------------------------- | ------------- | ---------------------------- |
| ![새 함수/프로시저/패키지 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-add.png) | 새 함수/프로시저/패키지 | 새 개체를 만듭니다.                  |
| ![수정 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-modify.png)         | 수정            | 선택한 개체의 내용을 수정합니다.           |
| ![삭제 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-delete.png)         | 삭제            | 선택한 개체를 삭제합니다.               |
|                                                                                                                            | 컴파일           | 선택한 개체를 컴파일합니다.              |
| ![실행 아이콘](https://resource.sqlgate.com/resource/captures/executionPlan/icon-sql-editor-runSQL.png)      | 실행            | 선택한 개체를 실행합니다.               |
| ![새 동의어 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-newSynonym.png)  | 새 동의어         | 선택한 개체의 동의어를 만듭니다.           |
|                                                                                                                            | 스크립트 보고서      | 선택한 개체의 스크립트를 보고서로 출력합니다.    |
|                                                                                                                            | 권한 보기/편집      | 선택한 개체의 권한 보기 및 편집을 합니다.     |
| ![필터 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-filter.png)         | 필터            | 필터 창을 이용하여 항목별로 필터링하여 정렬합니다. |
| ![새로 고침 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-refresh.png)     | 새로 고침         | 새로 고침을 실행합니다.                |


### 시퀀스
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,postgresql,sqlserver,db2,tibero>)

소유자의 시퀀스 목록과 각 시퀀스의 상세 정보를 조회하고 생성, 변경, 삭제 들 시퀀스에 대한 모든 기능을 제공합니다.

- 정보 : 선택한 시퀀스의 세부 정보를 조회할 수 있습니다.
- 권한 : 선택한 시퀀스의 권한을 조회할 수 있습니다.  관리자 권한이 있을 경우 권한 부여/취소가 가능합니다.
- 스크립트 : 선택한 시퀀스의 생성 스크립트를 조회하고 클립보드로 복사, 저장, SQL 편집기로 보낼 수 있습니다.

#### 시퀀스 콘텍스트 메뉴

| 버튼                                                                                                                        | 명령어      | 동작                           |
| ------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------- |
| ![새 시퀀스 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-add.png)        | 새 시퀀스    | 새 시퀀스를 추가합니다.                |
| ![변경 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-modify.png)        | 변경       | 선택한 시퀀스의 내용을 변경합니다.          |
| ![삭제 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-delete.png)        | 삭제       | 선택한 시퀀스를 삭제합니다.              |
| ![새 동의어 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-newSynonym.png) | 새 동의어    | 선택한 시퀀스의 동의어를 만듭니다.          |
|                                                                                                                           | 개체 보고서   | 선택한 시퀀스의 정보를 보고서로 출력합니다.     |
|                                                                                                                           | 스크립트 보고서 | 선택한 시퀀스의 스크립트를 보고서로 출력합니다.   |
|                                                                                                                           | 권한 보기/편집 | 선택한 시퀀스의 권한을 조회, 편집합니다.      |
| ![필터 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-filter.png)        | 필터       | 필터 창을 이용하여 항목별로 필터링하여 정렬합니다. |
| ![새로 고침 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-refresh.png)    | 새로 고침    | 새로 고침을 실행합니다.                |



### 제약 조건
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

소유자의 제약 조건과 각 제약 조건의 상세 정보를 조회하고 생성, 변경, 삭제 등 제약 조건의 모든 기능을 제공합니다.

- 정보 : 선택한 제약 조건의 상세 정보를 조회할 수 있습니다.
- 열 : 선택한 제약 조건의 열 정보를 조회할 수 있습니다.
- 스크립트 : 선택한 제약 조건의 생성 스크립트를 조회, 추가, 삭제할 수 있습니다.

#### 제약 조건 콘텍스트 메뉴

| 버튼                                                                                                                     | 명령어      | 동작                           |
| ---------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------- |
| ![새 제약 조건 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-add.png)   | 새 제약 조건  | 새 제약 조건을 추가합니다.              |
| ![변경 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-modify.png)     | 변경       | 선택한 제약 조건의 내용을 변경합니다.        |
| ![삭제 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-delete.png)     | 삭제       | 선택한 제약 조건을 삭제합니다.            |
| ![활성화 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-enable.png)    | 활성화      | 선택한 제약 조건을 활성화 시킵니다.         |
| ![비활성화 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-disable.png)  | 비활성화     | 선택한 제약 조건을 비활성화 시킵니다.        |
|                                                                                                                        | 개체 보고서   | 선택한 제약 조건의 정보를 보고서로 출력합니다.   |
|                                                                                                                        | 스크립트 보고서 | 선택한 제약 조건의 스크립트를 보고서로 출력합니다. |
| ![필터 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-filter.png)     | 필터       | 필터 창을 이용하여 항목별로 필터링하여 정렬합니다. |
| ![새로 고침 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-refresh.png) | 새로 고침    | 새로 고침을 실행합니다.                |


### 동의어
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

소유자의 동의어 목록과 각 동의어의 상세 정보를 조회하고 동의어 생성, 변경, 삭제 등 동의어에 관한 모든 기능을 제공합니다.

- 개체 이름 : 선택한 동의어의 원본 개체의 이름
- 개체 유형 : 선택한 동의어의 원본 개체의 유형
- 동의어 소유자 : 선택한 동의어의 소유자 정보, 공용일 경우는 Public 입니다.
- 데이터베이스 링크 : 선택한 동의어의 데이터베이스 링크 정보

#### 동의어 콘텍스트 메뉴

| 버튼                                                                                                                     | 명령어   | 동작                           |
| ---------------------------------------------------------------------------------------------------------------------- | ----- | ---------------------------- |
| ![새 동의어 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-add.png)     | 새 동의어 | 새 동의어를 만듭니다.                 |
| ![삭제 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-delete.png)     | 삭제    | 선택한 동의어를 삭제합니다.              |
| ![필터 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-filter.png)     | 필터    | 필터 창을 이용하여 항목별로 필터링하여 정렬합니다. |
| ![새로 고침 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-refresh.png) | 새로 고침 | 새로 고침을 실행합니다.                |


### 작업
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

소유자의 작업 목록과 각 작업의 상세 정보를 조회하고 생성, 삭제, 실행 등 작업에 관한 모든 기능을 제공합니다.

- 정보 : 선택한 작업의 세부 정보를 조회할 수 있습니다.
- WHAT (실행 스크립트) : 작업 실행 시 실행 할 스크립트를 조회합니다.
- 스크립트 : 선택한 작업의 생성 스크립트를 조회하고 클립보드로 복사, 저장, SQL 편집기로 보낼 수 있습니다.

#### 작업 콘텍스트 메뉴

| 버튼                                                                                                                     | 명령어       | 동작                           |
| ---------------------------------------------------------------------------------------------------------------------- | --------- | ---------------------------- |
| ![새 작업 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-add.png)      | 새 작업      | 새 작업을 만듭니다.                  |
| ![삭제 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-delete.png)     | 삭제        | 선택한 작업을 삭제합니다.               |
| ![실행 아이콘](https://resource.sqlgate.com/resource/captures/executionPlan/icon-sql-editor-runSQL.png)  | 실행        | 선택한 작업을 실행합니다.               |
|                                                                                                                        | 온라인으로 설정  | 선택한 작업을 온라인 생태로 변경합니다.       |
|                                                                                                                        | 오프라인으로 설정 | 선택한 작업을 오프라인 상태로 변경합니다.      |
|                                                                                                                        | 개체 보고서    | 선택한 작업의 정보를 보고서로 출력합니다.      |
|                                                                                                                        | 스크립트 보고서  | 선택한 작업의 스크립트를 보고서로 출력합니다.    |
| ![필터 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-filter.png)     | 필터        | 필터 창을 이용하여 항목별로 필터링하여 정렬합니다. |
| ![새로 고침 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-refresh.png) | 새로 고침     | 새로 고침을 실행합니다.                |


### 데이터베이스 링크
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

소유자의 데이터베이스 링크 목록과 각 데이터베이스 링크의 상세 정보를 조회하고 생성, 변경, 삭제 등 데이터베이스 링크의 모든 기능을 제공합니다.

- 정보 : 선택한 데이터베이스 링크의 세부 정보를 조회할 수 있습니다.
- 스크립트 : 선택한 데이터베이스 링크의 생성 스크립트를 조회하고 클립보드로 복사, 저장, SQL 편집기로 보낼 수 있습니다.

#### 데이터베이스 링크 콘텍스트 메뉴
| 버튼                                                                                                                       | 명령어         | 동작                                     |
| ------------------------------------------------------------------------------------------------------------------------ | ----------- | -------------------------------------- |
| ![새 데이터베이스 링크 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-add.png) | 새 데이터베이스 링크 | 새 데이터베이스 링크를 만듭니다.                     |
| ![변경 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-modify.png)       | 변경          | 선택한 데이터베이스 링크의 내용을 변경합니다.              |
| ![삭제 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-delete.png)       | 삭제          | 선택한 데이터베이스 링크를 삭제합니다.                  |
|                                                                                                                          | 테스트         | 선택한 데이터베이스 링크의 접속 테스트를 실행하고 결과를 보여줍니다. |
|                                                                                                                          | 개체 보고서      | 선택한 데이터베이스 링크의 정보를 보고서로 출력합니다.         |
|                                                                                                                          | 스크립트 보고서    | 선택한 데이터베이스 링크의 스크립트를 보고서로 출력합니다.       |
| ![필터 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-filter.png)       | 필터          | 필터 창을 이용하여 항목별로 필터링하여 정렬합니다.           |
| ![새로 고침 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-refresh.png)   | 새로 고침       | 새로 고침을 실행합니다.                          |


### 구체화된 뷰
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,postgresql,tibero>)

소유자의 구체화된 뷰 목록과 각 구체화된 뷰의 상세 정보를 조회하고 변경, 삭제 등 구체화된 뷰의 모든 기능을 제공합니다.

- 열 : 선택한 구체화된 뷰의 열 정보 및 주석을 조회, 추가, 출력할 수 있습니다.
- 정보 : 선택한 구체화된 뷰의 기본정보를 조회할 수 있습니다. .
- 권한 : 선택한 구체화된 뷰의 권한 정보를 조회, 권한 부여, 권한 취소, 출력할 수 있습니다.
- 스크립트 : 선택한 구체화된 뷰의 생성 스크립트를 조회하고 클립보드로 복사, 저장, SQL 편집기로 보낼 수 있습니다.

#### 구체화된 뷰 콘텍스트 메뉴
| 버튼                                                                                                                                  | 명령어      | 동작                           |
| ----------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------- |
| ![삭제 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-delete.png)                  | 삭제       | 선택한 구체화된 뷰를 삭제합니다.           |
|                                                                                                                                     | 컴파일      | 선택한 구체화된 뷰를 컴파일합니다.          |
|                                                                                                                                     | 새 동의어    | 선택한 구체화된 뷰의 동의어를 만듭니다.       |
| ![권한 보기/편집 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-viewEditPrivilege.png) | 권한 보기/편집 | 선택한 구체화된 뷰의 권한을 조회, 편집합니다.   |
| ![필터 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-filter.png)                  | 필터       | 필터 창을 이용하여 항목별로 필터링하여 정렬합니다. |
| ![새로 고침 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-refresh.png)              | 새로 고침    | 새로 고침을 실행합니다.                |

### 구체화된 뷰 로그
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

소유자의 구체화된 뷰 로그 목록과 각 구체화된 뷰 로그의 상세정보를 조회하고 변경, 삭제 들 구체화된 뷰 로그의 모든 기능을 제공합니다.

- 정보 : 선택한 구체화된 뷰 로그의 기본정보를 조회할 수 있습니다.
- 스크립트 : 선택한 구체화된 뷰 로그의 생성 스크립트를 조회하고 클립보드로 복사, 저장, SQL 편집기로 보낼 수 있습니다.

#### 구체화된 뷰 로그 콘텍스트 메뉴

| 버튼                                                                                                                     | 명령어   | 동작                           |
| ---------------------------------------------------------------------------------------------------------------------- | ----- | ---------------------------- |
| ![삭제 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-delete.png)     | 삭제    | 선택한 구체화된 뷰 로그를 삭제합니다.        |
| ![필터 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-filter.png)     | 필터    | 필터 창을 이용하여 항목별로 필터링하여 정렬합니다. |
| ![새로 고침 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-refresh.png) | 새로 고침 | 새로 고침을 실행합니다.                |


### 휴지통
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

소유자의 개체들이 삭제 되었을 때 임시로 보관을 하고 복원을 하거나 비우기를 하는 기능을 제공합니다.

- 정보 : 휴지통에 담겨진 선택한 개체의 정보를 조회할 수 있습니다.

#### 휴지통 콘텍스트 메뉴

| 버튼                                                                                                                     | 명령어   | 동작             |
| ---------------------------------------------------------------------------------------------------------------------- | ----- | -------------- |
| ![비우기 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-empty.png)     | 비우기   | 선택한 개체를 삭제합니다. |
| ![복원 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-restore.png)    | 복원    | 선택한 개체를 복원합니다. |
| ![새로 고침 아이콘](https://resource.sqlgate.com/resource/captures/objectExplorer/icon-object-refresh.png) | 새로 고침 | 새로 고침을 실행합니다.  |



### 휴지통 복원하기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

휴지통 복원하기에 대해서 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **보기**>**개체 탐색기**를 실행합니다. 또는 뷰 도구 모음에서 [개체 탐색기]를 클릭합니다.
3. 개체 탐색기 테이블 개체에서 마우스 오른쪽을 클릭하고 [새 테이블]을 선택합니다.

![개체 탐색기에서 새 테이블 만들기](https://resource.sqlgate.com/resource/captures/objectExplorer/objectPanel-recycleBin-01-ko.png)

4. 새 테이블을 만듭니다. ’확인’을 클릭합니다.

![새 테이블 만들기](https://resource.sqlgate.com/resource/captures/objectExplorer/objectPanel-recycleBin-02-ko.png)

5. 실행된 SQL을 확인합니다. [확인]을 클릭합니다.
6. 개체 탐색기에서 생성된 테이블을 확인 합니다.
7. 생성된 테이블에서 마우스 오른쪽 버튼을 클릭하고 [삭제]를 선택합니다.
8. 드롭 테이블을 선택합니다. [확인]을 클릭합니다.

![테이블 삭제하기](https://resource.sqlgate.com/resource/captures/objectExplorer/objectPanel-recycleBin-03-ko.png)

9. [새로 고침]을 클릭합니다. 개체 탐색기 휴지통에서 삭제된 테이블을 확인합니다.
10. 삭제된 테이블에서 마우스 오른쪽을 클릭하고 [복원]을 선택합니다.

![휴지통에서 복원하기](https://resource.sqlgate.com/resource/captures/objectExplorer/objectPanel-recycleBin-04-ko.png)

11. 복원된 테이블을 확인합니다.


### 개체 필터링하기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero,cubrid>)

개체 필터링하기를 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **보기**>**개체 탐색기**를 실행합니다. 또는 뷰 도구 모음에서 [개체 탐색기]를 클릭합니다.
3. 탐색 창 테이블 개체에 마우스 오른쪽을 클릭하고 필터를 선택합니다.

![개체 필터링 하기](https://resource.sqlgate.com/resource/captures/objectExplorer/objectPanel-filter-01-ko.png)

4. 필터 창이 나타납니다. 필터링할 이름을 입력하고 조건을 선택합니다.

![필터 조건 선택](https://resource.sqlgate.com/resource/captures/objectExplorer/objectPanel-filter-02-ko.png)
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

![필터링 결과 확인](https://resource.sqlgate.com/resource/captures/objectExplorer/objectPanel-filter-03-ko.png)

7. 필터 적용 이전으로 돌릴 때는 [원래대로]를 클릭 후 [확인]을 클릭합니다.


### 항상 맨 위 보기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero,cubrid>)

개체 탐색기 항상 맨 위 보기를 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **보기**>**개체 탐색기**를 선택합니다. 또는 뷰 도구 모음에서 [개체 탐색기]를 클릭합니다.
3. 개체 탐색기가 실행되면 ’항상 맨 위’를 선택합니다.
4. 개체 탐색기가 새 창으로 열립니다.

![항상 맨 위 보기](https://resource.sqlgate.com/resource/captures/objectExplorer/objectExplorer-alwaysOnTop-ko.png)
