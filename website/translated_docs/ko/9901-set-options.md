---
id: 9901-set-options
title: 옵션 설정하기
sidebar_label: 옵션 설정하기
---


## 일반
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero,cubrid>)

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
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero,cubrid>)

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
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero,cubrid>)

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
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero,cubrid>)

개체 탐색기와 개체 패널에 표시 될 개체를 선택합니다.

![옵션_개체 탐색기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/option/option-objectExplorer-ko.png)

- 맨 앞으로 가져오기 : 선택하면 개체 탐색기가 별도의 창으로 실행됩니다.
- 백그라운드에서 쿼리 실해 : 선택하면 쿼리가 백그라운드에서 실행됩니다.
- 표시할 개체 : 개체 탐색기와 개체 패널에 표시할 개체를 선택합니다.
- 탭 스타일 : 탭의 모양을 설정합니다. 여러 줄 탭 혹은 한 줄 탭 중에서 선택합니다.



## 그리드
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero,cubrid>)

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
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero,cubrid>)

특정 명령을 바로 가기 키로 설정 할 수 있습니다.

![옵션_쿼리 바로 가기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/option/option-queryShortcuts-ko.png)

Alt+1 에서 0번까지 설정 할 SQL을 입력합니다.




## SQL 변환
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero,cubrid>)

SQL 변환에 사용되는 포맷을 정합니다. 프로그램 언어별 이스케이프 문자, 구분 기호 변호나 포맷을 정합니다.

![옵션_SQL 변환](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/option/option-convertSQL-ko.png)

SQL 변환 옵션 : 사용언어 별 이스케이프 문자, 구분 기호를 설정합니다.



## 네트워크
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero,cubrid>)


![옵션_Subscription](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/option/option-subscription-ko.png)

네트워크 관련 옵션들을 설정합니다.