---
id: 0202-using-editor
title: SQL 편집기 사용
sidebar_label: SQL 편집기 사용
---

## SQL 한 개의 쿼리 실행 하기

SQL 편집기의 쿼리 실행하는 방법을 설명합니다.

1. 오라클 데이터베이스에 접속합니다.
2. 주 메뉴 파일>새로 만들기>SQL 편집기를 실행합니다. 또는 새로 만들기 도구 모음에서 SQL 편집기를 클릭하거나 Ctrl+N를 누릅니다.
3. SQL을 작성합니다.
4. 실행 버튼을 클릭하거나 F5를 누릅니다.
![SQL 편집기에서 쿼리 실행 하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/C9B88A278014199CECBA97B814E11E57.jpg)
> 노트: 편집기에서 개체 키워드 옆에서 F4(스키마 설명)를 누르면 테이블 보기가 실행됩니다.

5. 데이터 탭에서 쿼리 실행 결과를 확인합니다.
![SQL 데이터 탭에서 쿼리 실행 결과 확인하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/1C11BC265403AA5D3845EF7A1DCA6DE7.jpg)

> 노트: SQLGate는 ‘자동 커밋 활성화’가 기본 설정입니다.



## 여러 개의 쿼리 동시에 실행하기

SQL 편집기의 여러 개 쿼리를 동시에 실행하는 방법을 설명합니다.

1. 오라클 데이터베이스에 접속합니다.
2. 주 메뉴 파일>새로 만들기>SQL 편집기를 실행합니다. 또는 새로 만들기 도구 모음에서 SQL쿼리 편집기를 클릭하거나 Ctrl+N를 누릅니다.
3. SQL 편집기에서 여러 개의 SQL을 작성합니다. (SQL사이 구분 기호는 ; 입니다.)
![SQL 편집기에서 여러 개의 쿼리 실행 하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/D0E62C230406B5AD9143D2611AD89420.jpg)
4. 실행 버튼을 클릭하거나 F5를 누릅니다.
5. 데이터 탭에서 쿼리 실행 결과를 확인합니다.
![데이터 탭에서 여러 개의 쿼리 실행 결과 확인하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/35ACF8DE3CF4C30CD5E55D7E65F98FEB.jpg)



## 하위 쿼리 블록 실행하기

SQL 편집기의 하위 쿼리 블록 실행하는 방법을 설명합니다.

1. 오라클 데이터베이스에 접속합니다.
2. 주 메뉴 파일>새로 만들기>SQL 편집기를 실행합니다. 또는 새로 만들기 도구 모음에서 SQL쿼리 편집기를 클릭하거나 Ctrl+N를 누릅니다.
3. SQL 편집기에서 하위 쿼리를 작성합니다.
![하위 쿼리 블록 실행하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/EEC7CDEB22C9D4BC13B78F17A196B068.jpg)
4. 하위 쿼리를 클릭 하면 자동으로 배경색이 바뀌며, 블록을 씌우지 않아도 실행 할 수 있습니다.
5. 도구 모음에 '하위 쿼리 블록 실행 버튼 (Alt+F5)'이 활성화 됩니다.
6. '하위 쿼리 블록 실행' 버튼을 클릭하거나 주 메뉴 쿼리>하위 쿼리 블록 실행을 클릭하거나 Alt+F5를 누릅니다.
7. 데이터 탭에서 하위 쿼리 실행 결과를 확인합니다.
![하위 쿼리 블록 실행 쿼리 결과 확인하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/5F2FD8D050F0165A2F625EDEE9EAC316.jpg)



## 여러 개의 쿼리에서 한 개의 쿼리만 실행하기

SQL 편집기의 여러 개의 쿼리에서 한 개의 쿼리만 실행하기를 설명합니다.

1. 오라클 데이터베이스에 접속합니다.
2. 주 메뉴 파일>새로 만들기>SQL 편집기를 실행합니다. 또는 새로 만들기 도구 모음에서 SQL 편집기를 클릭하거나 Ctrl+N를 누릅니다.
3. SQL 편집기에서 여러 개의 SQL을 작성합니다.
![여러 개의 쿼리에서 한 개의 쿼리 실행하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/D0E62C230406B5AD9143D2611AD89420.jpg)
4. 실행할 SQL에 커서를 이동합니다.
5. 주 메뉴 쿼리>현재 SQL실행을 클릭합니다. 또는 실행 도구 모음 현재 SQL 실행 버튼을 클릭하거나 Ctrl+F5 또는 Ctrl+Enter를 누릅니다.
6. 데이터 탭에서 쿼리 실행 결과를 확인합니다.
![여러 개의 쿼리에서 한 개의 쿼리 실행 결과 확인하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/B4FC5FB7754B16631D600FE62304EBA2.jpg)



## 한꺼번에 선택 영역 바꾸기

SQL 편집기의 선택 영역 바꾸기 기능을 설명합니다.

1. 오라클 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**SQL 편집기**를 실행합니다. 또는 새로 만들기 도구 모음에서 [SQL 편집기]를 클릭하거나 Ctrl+N를 누릅니다.
3. SQL 편집기에서 SQL을 작성합니다.
4. 편집 할 SQL을 마우스 왼쪽 클릭으로 선택 합니다. 선택 영역 바꾸기 버튼이 생깁니다.
![한꺼번에 선택 영역 바꾸기 선택하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/2CF9780E92E7255B4FA86C90DF0B9C2D.jpg)
5. 선택 영역 바꾸기 버튼을 클릭합니다.
6. 텍스트 상자를 클릭해서 SQL을 수정 하면 모든 텍스트 상자의 내용이 한꺼번에 바뀝니다.



## 쿼리를 실행하고 바로 편집하기

SQL 편집기의 쿼리를 실행하고 바로 편집하기를 설명합니다.

1. 오라클 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**SQL 편집기**를 실행합니다. 또는 새로 만들기 도구 모음에서 [SQL 편집기]를 클릭하거나 Ctrl+N를 누릅니다.
3. SQL을 작성합니다.
4. 주 메뉴 쿼리>현재 SQL실행을 클릭합니다. 또는 실행 도구 모음 현재 SQL 실행 버튼을 클릭하거나 F6를 누릅니다.
![현재 SQL 실행 및 수정 하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/F0986FECD22856514AB7F967F340FC33.jpg)
5. 쿼리 실행 결과를 확인합니다.
6. 수정할 데이터를 더블 클릭 한 후 편집합니다.
7. 레코드 저장 버튼을 클릭합니다.
![그리드에서 직접 수정하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/D4042EFC8EC9934B33DEBF26C1490D53.jpg)



## 데이터 추가하기

결과 창에서 데이터를 추가하는 방법을 설명합니다.

1. 결과 창 네비게이터의 레코드 추가 버튼을 클릭합니다.
2. 맨 아래 빈 레코드가 추가됩니다.
3. 데이터를 입력합니다.
4. 레코드 저장 버튼을 클릭합니다.
5. 새로 고침 버튼을 클릭하여 실행 결과를 확인합니다.
![데이터 추가하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/55F38B54A95D4038970D91DE0E5F7E25.jpg)


## 데이터 삭제하기

결과 창에서 데이터를 삭제하는 방법을 설명합니다.

1. 삭제할 데이터를 클릭합니다.
2. 결과 창 네비게이터의 레코드 삭제 버튼을 클릭합니다.
3. 삭제하시겠습니까? 메시지 창이 열립니다. 확인 버튼을 클릭합니다.
![데이터 삭제하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/0C69E2FE3E7FDF42EC70ACA7C9E323A2.jpg)
4. 새로 고침 버튼을 클릭하여 실행 결과를 확인합니다.



## SQL 기록으로 작업하기

SQL 기록으로 작업하는 방법을 설명합니다.

1. 오라클 데이터베이스에 접속합니다.
2. 주 메뉴 보기>SQL 기록을 실행합니다. 또는 도구 모음 SQL 기록을 클릭하거나 F8를 누릅니다.
3. 재사용할 SQL의 Reuse를 선택합니다.
![SQL 기록으로 작업하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/6457511BA416C73D5FA4821940C88BBD.jpg)
4. 더블 클릭 또는 네비게이터 편집기에 추가 버튼을 클릭하거나 Ctrl+Enter 누릅니다
5. SQL 편집기에서 실행 결과를 확인합니다.

> 노트: SQL은 SQL History그룹에 저장이 되고 프로시저와 함수는 Procedure/Function History그룹에 저장됩니다.



## SQL 기록 바로 가기 키 일람표

SQL 기록의 바로 가기 키는 다음과 같습니다.

| 버튼 | 명령어 | 바로 가기 키 | 동작 |
| --- | --- | --- | --- |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/4C45141F1F82AF05991CDC3507ED3D8B.jpg) | 그룹 확장 | | 하위 그룹을 보여줍니다. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/05DB33FEF038C1BB6AD63DF50B6BF416.jpg) | 그룹 축소 | | 루트 그룹으로 축소합니다. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/686D856958D245681FE0C6C9B30864E9.jpg) | 새 그룹 | | 새로운 그룹을 만듭니다. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/7F738432D5CABEAC719AC31354C4122B.jpg) | 그룹 수정 | | 사용자 그룹의 이름을 바꿉니다. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/8A800BFA2B23E91D026DBA662E5D11C8.jpg) | 그룹 삭제 | | 사용자 그룹을 삭제합니다. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/2354A6303C428DA3C92038CBAC638216.jpg) | SQL 추가 | | 새 SQL을 추가합니다. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/9D06EC93FC4E96678EFBBF374C009C78.jpg) | SQL 수정 | | 선택한 SQL의 내용을 수정합니다. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/099A6D393897EB9598E893836CB389F6.jpg) | SQL 삭제 | Del | 선택한 SQL을 삭제합니다. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/5DE7781A4991045F34BB83CC73E1D07C.jpg) | 그룹 이동 | | 선택한 SQL의 그룹을 이동합니다. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/1680AA1BD2A4C023F1AF49B8FD1274BB.jpg) | 편집기에 추가 | Ctrl+Enter | 선택한 SQL을 SQL 편집기에 추가합니다. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/11815E192ADB34B30D20E2E99DB676C8.jpg) | 편집기에서 바꾸기 | | SQL 편집기의 현재 내용을 삭제하고 선택한 SQL로 바꿉니다. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/C22AFD06002669693C0456889192DC7B.jpg) | 새 탭에 붙여넣기 | | 선택한 SQL을 SQL 편집기의 새 탭으로 붙여 넣습니다. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/94CF1BD51FBEE19EC29D643C5CB4BFD2.jpg) | 클립보드로 복사 | Ctrl+C | 선택한 SQL을 클립보드로 복사합니다. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/7AA0C9206E01D4F5580F0F0D3E66269B.jpg) | 현재 그룹의 SQL모두 삭제 | | 선택한 그룹의 SQL을 모두 삭제합니다. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/48B1D0CA6E7345686DD99749ADD00751.jpg) | 파일 열기 | | SQL 기록 파일 열기를 실행합니다. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/25EFDD23A903B94813FA422CC5E2E011.jpg) | 파일로 저장 | | SQL 기록을 파일로 저장합니다. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/7A1B99EADFECBCEB470DBA16AD3DB624.jpg) | 찾기 | | SQL 기록에서 찾기를 실행합니다. |



## 바인드 변수를 이용하여 실행하기

바인드 변수를 이용하여 실행하는 방법을 설명합니다.

1. 오라클 데이터베이스에 접속합니다.
2. 주 메뉴 파일>새로 만들기>SQL 편집기를 실행합니다. 또는 새로 만들기 도구 모음에서 SQL쿼리 편집기를 클릭하거나 Ctrl+N를 누릅니다.
3. 도구 모음에 바인드 변수 사용(:)을 클릭합니다.
![바인드 변수를 이용하여 실행하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/587BB84EB53EF37B7467B6BF42DFFBD0.jpg)
4. 바인드 변수를 사용하는 SQL을 작성합니다.
5. 실행 버튼을 클릭하거나 F5를 누릅니다.
6. 값을 입력 받는 창이 열립니다. 원하는 값을 입력 합니다.
![바인드 변수 값 입력하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/1E20EE49EDCA69B6B1636DB913974490.jpg)
7. 확인 버튼을 클릭하여 결과 탭에서 쿼리 실행 결과를 확인합니다.
![바인드 변수 실행 결과 확인하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/C8CA6A6B10EF0676B33B35B4A7166F16.jpg)


## 대체 변수를 이용하여 실행하기

대체 변수를 이용하여 실행하는 방법을 설명합니다.

1. 오라클 데이터베이스에 접속합니다.
2. 주 메뉴 파일>새로 만들기>SQL 편집기를 실행합니다. 또는 새로 만들기 도구 모음에서 SQL쿼리 편집기를 클릭하거나 Ctrl+N를 누릅니다.
3. 도구 모음에 대체 변수 사용(&)을 클릭합니다.
![대체 변수를 이용하여 실행하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/3ECF6D0FDF054C1B7467D5161D57B6FF.jpg)
4. 대체 변수를 사용하는 SQL을 작성합니다.
5. 실행 버튼을 클릭하거나 F5를 누릅니다.
6. 값을 입력 받는 창이 나타납니다. 원하는 값을 입력합니다.
![대체 변수 값 입력하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/B4421CDE204928972F26C8049123E8B3.jpg)
7. 확인 버튼을 클릭하고 결과 탭에서 쿼리 결과를 확인합니다.
![대체 변수 실행 결과 확인하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/2BF14B3E3416884EA14F05302163E9F8.jpg)
