---
id: import-data-from-excel-as-tables
title: Excel에서 테이블로 데이터 가져오기
sidebar_label: Excel에서 테이블로 데이터 가져오기
---

## Excel에서 테이블로 데이터 가져오기

Excel에서 테이블로 데이터를 가져오는 방법을 설명합니다.

1. 개체 패널 또는 개체 탐색기에서 테이블을 선택합니다.
2. 마우스 오른쪽을 클릭하고 데이터 가져오기를 선택합니다.
![Excel 데이터 가져오기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/37B60F8B8943C335FC7DBE063E29CF0C.jpg)
3. 데이터 가져오기 마법사 창이 열립니다. 파일 유형 선택에 Excel 파일을 선택합니다. 다음을 클릭합니다.
![데이터 가져오기 마법사 파일 유형 선택](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/689D4B584C175A71E555673F1F09200F.jpg)
4. 가져올 파일 선택 창에서 찾아보기를 클릭하여 가져올 파일을 선택합니다. 다음을 클릭합니다.
![데이터 가져오기 마법사 가져올 파일 선택](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/5DC849DDA51F92B7DE8D007667ACDA19.jpg)
5. 추가 옵션 설정 창에서 옵션을 설정합니다. 다음을 클릭합니다.
6. 첫 행: Excel 파일의 데이터에 첫번째 행에 필드 이름이 있으면 2를 입력합니다. 만약 그렇지 않다면 1을 입력합니다.
![데이터 가져오기 마법사 추가 옵션 선택](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/B61D4DFA4B465FD9F141433343EEE6FA.jpg)
7. 마지막 행: 입력하지 않으면 Excel 파일의 모든 행을 읽습니다.
8. 파일 미리 보기 창에서는 가져올 파일의 열과 테이블 열을 매핑합니다. 자동 열 매핑을 선택하면 테이블 필드 순서대로 가져올 파일의 열과 매핑합니다. 다음을 클릭합니다.
![데이터 가져오기 마법사 파일 미리 보기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/E17DE7BFCB5D7B2BA0A50BBD0E995693.jpg)
9. 열 매핑 창에서 소스 파일과 테이블 필드가 올바르게 매핑이 되었는지 확인합니다.
![데이터 가져오기 마법사 열 매핑](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/798BA2EBEEEBC79CCD6E8B2353ABE79F.jpg)
10. 데이터 미리 보기 창에서 가져오기 전에 데이터를 확인합니다. 다음을 클릭합니다.
![데이터 가져오기 마법사 데이터 미리 보기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/B10D501461090C66C9267E796D2B70A6.jpg)
11. 실행 요약 창에서 가져오기 모드를 선택하시고 실행을 클릭합니다.
![데이터 가져오기 마법사 실행 요약](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/EFAAED888A8924CBFF6EA98F2C6388EC.jpg)
12. 마지막으로 성공 여부 확인 후에 확인 버튼을 클릭합니다.

**가져오기 모드는 다음과 같습니다.**
- 추가: 대상테이블에 레코드를 추가합니다.
- 업데이트: 소스의 레코드와 일치하는 대상 레코드 업데이트
- 추가/업데이트: 대상 레코드가 존재하면 업데이트, 그렇지 않으면 추가합니다.
- 삭제: 소스의 레코드와 일치하는 대상 레코드를 삭제합니다.
- 복사: 모든 대상 레코드를 삭제하고 소스 내용으로 바꾸기 합니다.
- 새로 추가: 대상 레코드가 없을 경우에만 레코드를 추가합니다.
