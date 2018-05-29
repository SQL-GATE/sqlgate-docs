---
id: create-join-between-tables
title: 테이블 간 JOIN만들기
sidebar_label: 테이블 간 JOIN만들기
---

## 테이블 간 JOIN만들기

쿼리 작성기에서 테이블 간 JOIN만들기를 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 파일>새로 만들기>쿼리 작성기를 선택합니다. 또는 새로 만들기 도구 모음에서 쿼리 작성기를 클릭합니다..
3. 주 메뉴 보기>개체 패널을 실행합니다. 또는 새로 만들기 도구 모음에서 개체 패널을 클릭하거나 F12를 누릅니다. 개체 패널이 열립니다.
4. 개체 패널에서 필요한 테이블들을 선택한 후에 쿼리 작성기 창에 끌어서 놓기를 합니다.
![개체 패널에서 쿼리 작성기에 테이블 추가 하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/F1D37BE6232783D921276E27C243F148.jpg)
5. 표시할 테이블 열들을 선택합니다.
![테이블에서 표시할 컬럼 선택하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/CA148052A99D1287C03E3B8C8763A85E.jpg)
6. 관계가 있는 열을  선택한 후에 다른 테이블의 열에 끌어서 놓기를 합니다.
7. 연결선(Link)에서 마우스 오른쪽을 클릭하고 Property를 선택합니다.
![테이블에 관련 있는 필드 끌어서 놓기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/6E13814ECE514320351239915B801BA1.jpg)
8. Link Properties 창에서 값을 입력합니다. Ok를 클릭합니다.
![테이블 조인하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/38A5E80FF0B9AC33E41EC9B447954AB7.jpg)
9. SQL탭에서 자동 생성된 쿼리를 확인 합니다.
![자동 생성된 SQL 확인하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/B4B85D41B1EC2786324ED33C1CA5B760.jpg)
10. 실행 버튼을 클릭하거나 F5를 누릅니다.
11. 결과 탭에서 쿼리 실행 결과를 확인합니다.
![테이블 조인 결과 확인](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/FF8239EF7AD948B6AC8EE7F9EDF68744.jpg)

> 팁 : 테이블 Alias를 지정하려면 테이블 이름을 더블 클릭하고 Alias를 입력합니다.