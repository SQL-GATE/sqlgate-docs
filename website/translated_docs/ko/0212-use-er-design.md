---
id: 0212-use-er-design
title: ER 디자인 작업하기
sidebar_label: ER 디자인 작업하기
---

## 테이블 개체 살펴 보기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

테이블 개체 살펴 보기를 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**ER 디자인**을 실행합니다. 또는 새로 만들기 도구 모음에서 ER 디자인을 클릭합니다.
3. 스키마를 선택합니다. 테이블을 선택하고 캔버스에 끌어서 놓습니다. 또는 [추가] 버튼을 클릭합니다.
4. 캔버스에 추가된 테이블 개체들을 확인합니다.

![추가 된 테이블 개체 확인](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/erDesign/erDesign-viewTable-ko.png)

> 노트: ER 디자인은 데이터베이스 리버스 엔지니어링만 지원합니다.


## 캔버스에서 원하는 테이블 개체 찾기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

캔버스에서 원하는 테이블 개체 찾기를 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**ER 디자인**을 실행합니다. 또는 새로 만들기 도구 모음에서 [ER 디자인]을 클릭합니다.
3. 스키마를 선택합니다. 테이블을 선택하고 캔버스에 끌어서 놓기를 합니다. 또는 [추가] 버튼을 클릭합니다.
4. 주 메뉴 **편집**>**찾기 및 바꾸기**>**찾기**를 실행합니다. 또는 Ctrl+F를 누릅니다.
5. 검색 창에 테이블 이름을 입력합니다.

![테이블 개체 찾기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/erDesign/erDesign-findTableOnCanvas-ko.png)

6. 관련 테이블 개체를 찾은 결과를 확인합니다.

![테이블 개체 찾은 결과 확인](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/erDesign/erDesign-findTableOnCanvas-01-ko.png)


## 테이블 간의 관계 보기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

테이블 간의 관계 보기를 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**ER 디자인**을 실행합니다. 또는 새로 만들기 도구 모음에서 [ER 디자인]을 클릭합니다.
3. 스키마를 선택합니다. 테이블을 선택하고 캔버스에 끌어서 놓습니다. 또는 추가 버튼을 클릭합니다.
4. 테이블 개체 사이 연결선을 더블 클릭합니다.
5. 테이블 개체 간의 관계를 확인합니다.

![테이블 개체 간의 관계 확인](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/erDesign/erDesign-viewRelationship-ko.png)


## 테이블 개체간의 관계 변경하기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

테이블 개체간의 관계 변경하기를 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**ER 디자인**을 실행합니다. 또는 새로 만들기 도구 모음에서 [ER 디자인]을 클릭합니다.
3. 스키마를 선택합니다. 테이블을 선택하고 캔버스에 끌어서 놓기를 합니다. 또는 추가 버튼을 클릭합니다.
4. 도구 모음에서 1:1 비식별 관계, 1:n 비식별 관계, n:m 비식별 관계중 하나를 클릭합니다.
5. 원본 테이블과 대상 테이블을 순서대로 클릭합니다.
6. 테이블 개체 사이에 연결선이 생깁니다.
7. 관계 키를 설정합니다.
8. [확인] 버튼을 클릭합니다.

![테이블 개체간의 관계 변경하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/erDesign/erDesign-alterRelationship-ko.png)

> 노트: 테이블 개체간에 논리적 관계는 점선으로 표시됩니다.


## 테이블 보기 옵션 변경하기
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

테이블 보기 옵션 변경하기를 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **파일**>**새로 만들기**>**ER 디자인**을 실행합니다. 또는 새로 만들기 도구 모음에서 ER 디자인을 클릭합니다.
3. 스키마를 선택합니다. 테이블을 선택하고 캔버스에 끌어서 놓습니다. 또는 [추가] 버튼을 클릭합니다.
4. 테이블 개체를 더블 클릭하면, 테이블 표시 옵션 변경 창이 열립니다.

![테이블 표시 옵션 변경하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/erDesign/erDesign-changeOptionsForTableDisplay-ko.png)

5. 표시할 값을 설정합니다. 확인 버튼을 클릭합니다.
6. 실행 결과를 확인합니다.


## ER 디자인 도구 모음 탭
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)


| 버튼                                                                                                                                          | 명령어        | 바로 가기 키 | 동작                          |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ------- | --------------------------- |
| ![마우스 왼쪽 클릭 드래그로 개체를 선택합니다.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/erDesign/icon-erDesign-select.png)           | 선택         |         | 마우스 왼쪽 클릭 드래그로 개체를 선택합니다.   |
| ![선택된 개체를 이동합니다.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/erDesign/icon-erDesign-move.png)                        | 이동         |         | 선택된 개체를 이동합니다.              |
| ![선택된 그룹의 크기를 조정합니다.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/erDesign/icon-erDesign-resize.png)                  | 크기 조정      |         | 선택된 그룹의 크기를 조정합니다.          |
| ![선택된 개체를 삭제합니다](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/erDesign/icon-erDesign-delete.png)                       | 삭제         |         | 선택된 개체를 삭제합니다.              |
| ![작업 영역을 마우스 왼쪽을 클릭하고 이동합니다.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/erDesign/icon-erDesign-panningHand.png)     | 이동 핸들      |         | 작업 영역을 마우스 왼쪽을 클릭하고 이동합니다.  |
| ![작업 영역을 축소합니다.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/erDesign/icon-erDesign-zoomOut.png)                      | 축소         |         | 작업 영역을 축소합니다.               |
| ![작업 영역을 확대합니다.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/erDesign/icon-erDesign-zoomIn.png)                       | 확대         |         | 작업 영역을 확대합니다.               |
| ![개체를 그룹으로 묶어주는 영역 개체를 만듭니다.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/erDesign/icon-erDesign-region.png)          | 영역         |         | 개체를 그룹으로 묶어주는 영역 개체를 만듭니다.  |
| ![캔버스에 주석이나 텍스트를 쓸 수 있습니다.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/erDesign/icon-erDesign-textBox.png)           | 텍스트 상자     |         | 캔버스에 주석이나 텍스트를 쓸 수 있습니다.    |
| ![테이블 개체간의 1:1 비식별 관계를 설정합니다.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/erDesign/icon-erDesign-11Relationship.png) | 1:1 비식별 관계 |         | 테이블 개체간의 1:1 비식별 관계를 설정합니다. |
| ![테이블 개체간의 1:n 비식별 관계를 설정합니다.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/erDesign/icon-erDesign-1nRelationShip.png) | 1:n 비식별 관계 |         | 테이블 개체간의 1:n 비식별 관계를 설정합니다. |
| ![테이블 개체간의 n:m 비식별 관계를 설정합니다.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/erDesign/icon-erDesign-nmRelationship.png) | n:m 비식별 관계 |         | 테이블 개체간의 n:m 비식별 관계를 설정합니다. |
| ![현재의 ER 디자인의 스크립트를 보여줍니다.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/erDesign/icon-erDesign-viewSQL.png)           | SQL 보기     |         | 현재의 ER 디자인의 스크립트를 보여줍니다.    |
| ![캔버스를 새로 고칩니다.](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/erDesign/icon-erDesign-refresh.png)                      | 새로 고침      |         | 캔버스를 새로 고칩니다.               |