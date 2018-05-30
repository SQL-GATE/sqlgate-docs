---
id: 0212-use-er-design
title: ER 디자인으로 작업하기
sidebar_label: ER 디자인으로 작업하기
---

## 테이블 개체 살펴 보기

테이블 개체 살펴 보기를 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 파일>새로 만들기>ER 디자인을 실행합니다. 또는 새로 만들기 도구 모음에서 ER 디자인을 클릭합니다.
3. 스키마를 선택합니다. 테이블을 선택하고 캔버스에 끌어서 놓기를 합니다. 또는 추가 버튼을 클릭합니다.
4. 캔버스에 추가된 테이블 개체들을 확인합니다.
![추가 된 테이블 개체 확인](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/1B1F9296278BA7041689BAFA7DA15BFF.jpg)

> 노트: ER 디자인은 데이터베이스 리버스 기능만 지원합니다.


## 캔버스에서 원하는 테이블 개체 찾기

캔버스에서 원하는 테이블 개체 찾기를 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 파일> 새로 만들기>ER 디자인을 실행합니다. 또는 새로 만들기 도구 모음에서 ER 디자인을 클릭합니다.
3. 스키마를 선택합니다. 테이블을 선택하고 캔버스에 끌어서 놓기를 합니다. 또는 추가 버튼을 클릭합니다.
4. 주 메뉴 편집>찾기 및 바꾸기>찾기를 실행합니다. 또는 Ctrl+F를 누릅니다.
5. 찾기 창에 테이블 이름을 입력합니다.
![테이블 개체 찾기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/86B49BAF275F2FA5EF390FABA70504BF.jpg)
6. 관련 테이블 개체를 찾은 결과를 확인합니다.
![테이블 개체 찾은 결과 확인](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/076A5056B6A58C49D5806D4666897907.jpg)


## 테이블 간의 관계 보기

테이블 간의 관계 보기를 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 파일>새로 만들기>ER 디자인을 실행합니다. 또는 새로 만들기 도구 모음에서 ER 디자인을 클릭합니다.
3. 스키마를 선택합니다. 테이블을 선택하고 캔버스에 끌어서 놓기를 합니다. 또는 추가 버튼을 클릭합니다.
4. 테이블 개체 사이 연결선을 더블 클릭합니다.
5. 테이블 개체 간의 관계를 확인합니다.
![테이블 개체 간의 관계 확인](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/3716EF1B92314F1DB37040E616DD859E.jpg)


## 테이블 개체간의 관계 변경하기

테이블 개체간의 관계 변경하기를 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 파일>새로 만들기>ER 디자인을 실행합니다. 또는 새로 만들기 도구 모음에서 ER 디자인을 클릭합니다.
3. 스키마를 선택합니다. 테이블을 선택하고 캔버스에 끌어서 놓기를 합니다. 또는 추가 버튼을 클릭합니다.
4. 도구 모음 1:1 비확인 관계,1:n 비확인 관계,n:m 비확인 관계중 하나를 클릭합니다.
5. 원본 테이블과 대상 테이블을 순서대로 클릭합니다.
6. 테이블 개체 사이에 연결선이 생깁니다.
7. 관계 키를 설정합니다.
8. 확인 버튼을 클릭합니다.
![테이블 개체간의 관계 변경하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/B51A564EB1A265FD2A2C702465DC7381.jpg)

> 노트: 테이블 개체간에 논리적 관계는 점선으로 표시됩니다.


## 테이블 보기 옵션 변경하기

테이블 보기 옵션 변경하기를 설명합니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 파일>새로 만들기>ER 디자인을 실행합니다. 또는 새로 만들기 도구 모음에서 ER 디자인을 클릭합니다.
3. 스키마를 선택합니다. 테이블을 선택하고 캔버스에 끌어서 놓기를 합니다. 또는 추가 버튼을 클릭합니다.
4. 테이블 개체를 더블 클릭합니다.
5. 테이블 표시 옵션 변경 창이 열립니다.
![테이블 표시 옵션 변경하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/76414DA73CD30067388762D29E4477B8.jpg)
6. 표시할 값을 설정합니다. 확인 버튼을 클릭합니다.
7. 실행 결과를 확인합니다.
![테이블 보기 옵션 변경 결과](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/FEBBE2B638B2BD0CF2D9794DEE7DC6B8.jpg)


## ER 디자인 도구 모음 탭


| 버튼 | 명령어 | 바로 가기 키 | 동작 |
| --- | --- | --- | --- |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/C139C4797D29D10FD9FAD4FDEEE98A06.jpg) | 선택 | | 마우스 왼쪽 클릭 드래그로 개체를 선택합니다. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/53F5C0BAAD1B800669C62CD3B2A8FF57.jpg) | 이동 | | 선택된 개체를 이동합니다. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/B52EFCFE240B6FD595C1BD9823DC4A44.jpg) | 크기 조정 | | 선택된 그룹의 크기를 조정합니다. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/BE1FA8571FCE0598995B3D39F051033C.jpg) | 삭제 | | 선택된 개체를 삭제합니다. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/D23266B20DE3927DC824FFF32A8937CE.jpg) | 이동 핸들 | | 작업 영역을 마우스 왼쪽을 클릭하고 이동합니다. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/2E433E9461B9B783781FB892F43460A7.jpg) | 축소 | | 작업 영역을 축소합니다. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/CD349E22F3A88E99F2A8306569DD0DFF.jpg) | 확대 | | 작업 영역을 확대합니다. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/146967B9C2EE0E8E96993BBE6BB56AD7.jpg) | 영역 | | 개체를 그룹으로 묶어주는 영역 개체를 만듭니다. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/AACEFA131BD609F482E544758519366A.jpg) | 텍스트 상자 | | 캔버스에 주석이나 텍스트를 쓸 수 있습니다. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/BA9A99CC7393D220744659B656C89BAA.jpg) | 1:1 비확인 관계 | | 테이블 개체간의 1:1 비확인 관계를 설정합니다. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/751CAD419D6BC681AC53CF3D938BFA20.jpg) | 1:n 비확인 관계 | | 테이블 개체간의 1:n 비확인 관계를 설정합니다. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/15D341B4ADC9A878577EF46D36BF53AC.jpg) | n:m 비확인 관계 | | 테이블 개체간의 n:m 비확인 관계를 설정합니다. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/4150EBB0CDFFA932484EF5AD37055238.jpg) | SQL 보기 | | 현재의 ER 디자인의 스크립트를 보여줍니다. |
| ![IMAGE](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/1D0D799E5F67808D1371FCB8CB3D30FF.jpg) | 새로 고침 | | 캔버스를 새로 고칩니다. |

