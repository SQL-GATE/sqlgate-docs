---
id: 0206-export-import-data
title: 데이터 내보내기와 가져오기
sidebar_label: 데이터 내보내기와 가져오기
---

## 쿼리 결과를 Excel로 내보내기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero,cubrid>)

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
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero,cubrid>)

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
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero,cubrid>)

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
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero,cubrid>)

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

![데이터 가져오기 마법사 추가 옵션 설정](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/wizard/data-import-wizard-file-additional-option-ko.png)

7. **파일 미리 보기** 창에서는 가져올 파일의 열과 테이블 열을 매핑합니다. 자동 열 매핑을 선택하면 테이블 필드 순서대로 가져올 파일의 열과 매핑합니다. [다음]을 클릭합니다.
열 매핑 창에서 소스 파일과 테이블 필드가 올바르게 매핑이 되었는지 확인합니다.
8. **데이터 미리 보기** 창에서 가져오기 전에 데이터를 확인합니다. [다음]을 클릭합니다.
9. [실행 요약] 창에서 _가져오기 모드_를 선택하시고 [실행]을 클릭합니다.
10. 마지막으로 성공 여부 확인 후에 [확인] 버튼을 클릭합니다.

![import data wizard run summary](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/wizard/data-import-wizard-run-summary-ko.png)

**가져오기 모드의 옵션은 다음과 같습니다.**
- 추가: 대상테이블에 레코드를 추가합니다.
- 업데이트: 소스의 레코드와 일치하는 대상 레코드 업데이트를 업데이트 합니다.
- 추가/업데이트: 대상 레코드가 존재하면 업데이트, 그렇지 않으면 추가합니다.
- 삭제: 소스의 레코드와 일치하는 대상 레코드를 삭제합니다.
- 복사: 모든 대상 레코드를 삭제하고 소스 내용으로 바꾸기 합니다.
- 새로 추가: 대상 레코드가 없을 경우에만 레코드를 추가합니다.