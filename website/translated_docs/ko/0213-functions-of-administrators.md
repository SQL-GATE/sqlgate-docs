---
id: 0213-functions-of-administrators
title: 관리자 기능들
sidebar_label: 관리자 기능들
---

## 새 사용자 등록과 권한 부여하기

새 사용자 등록과 권한 부여하기를 설명합니다.

1. DBA 권한으로 오라클 데이터베이스에 접속합니다.
2. 주 메뉴 관리자>보안 관리자를 선택합니다. 관리자 도구 모음에서 보안 관리자를 클릭합니다.
3. 사용자 탭에서 새 사용자를 클릭합니다.
4. 사용자 정보 탭에서 만들 사용자 이름을 입력하고 인증 방법을 선택합니다.
5. 데이터베이스 인증은 로그인 할 때 암호를 요구합니다. 운영 체제 인증은 운영체제의 사용자 인증을 요구합니다
6. 테이블스페이스 기본값을 선택하고 임시 테이블스페이스를 선택합니다.
7. 리소스 프로파일을 선택하고 상태를 선택합니다.

![사용자 등록하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/840CC96FF14F9DEDC684B937F7235E6D.jpg)


## 새 사용자 롤 정의하기

1. 롤 탭에서 롤을 선택하고 선택 항목 부여를 클릭합니다.

![사용자 롤 정의 하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/95650815CE79BF653CE3198BF12C2C86.jpg)


## 새 사용자 시스템 권한 부여와 취소하기

1. 시스템 권한 탭을 선택합니다.
2. 부여할 시스템 권한을 선택하고 선택 항목 부여를 클릭합니다.
3. 화살표를 이용하여 권한을 부여 하거나 취소 할 수 있습니다.
![사용자 권한 부여와 취소하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/BA6594551BE6B41EFB24AB14BCE93FF9.jpg)
4. 개체 권한 탭을 선택합니다. 스키마와 테이블을 선택하고 검색을 클릭합니다.
5. 개체 이름을 선택하고 권한을 선택합니다. 선택 항목 추가 화살표를 클릭 합니다.
![사용자 개체 권한 부여하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/F4B4A7EBCE3CE95F996790E26A4C18E9.jpg)
6. 테이블스페이스 할당량을 부여 합니다.
![사용자 테이블스페이스 할당량 부여하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/91A97388249B5571FAF36A44FAD41C39.jpg)
7. SQL 보기를 클릭하여 자동 생성된 문장을 확인합니다.
![생성 SQL 확인하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/7167F157AB2EF88294034E5662A2D659.jpg)
8. 확인을 클릭하고 실행 결과를 확인합니다.


## 사용자 시스템 권한 부여하기

사용자 시스템 권한 부여하기를 설명합니다.

1. DBA 권한으로 오라클 데이터베이스에 접속합니다.
2. 주 메뉴 관리자>보안 관리자를 선택합니다. 또는 관리자 도구 모음에서 보안 관리자를 클릭합니다.
3. 시스템 권한 탭에서 부여할 권한을 선택하고 마우스 오른쪽 클릭하고 시스템 권한 부여를 선택합니다. 또는 시스템 권한 부여를 클릭합니다.
![사용자 시스템 권한 부여하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/DF69ECB1F910FD7F4ABB527017C3DEF7.jpg)
4. 사용자를 선택하고 선택 항목 부여를 클릭합니다.
![사용자 시스템 권한 선택 항목 부여하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/197858DE7ED73AE88E38494DD194CEFB.jpg)
5. 롤 탭을 클릭하고 롤을 선택하고 선택 항목 부여를 클릭합니다.
![사용자 시스템 권한 롤 부여하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/AFB6C14A5C1F499809842435CC217F95.jpg)
6. SQL 보기를 클릭하여 자동 생성된 SQL 문장을 확인합니다.
7. 확인 버튼을 클릭하여 실행 결과를 확인합니다.



## 테이블스페이스 관리자를 이용하여 테이블 스페이스 늘리기

테이블스페이스 관리자를 이용하여 테이블 스페이스 늘리기를 설명합니다.

1. DBA 권한으로 오라클 데이터베이스에 접속합니다.
2. 주 메뉴 관리자>테이블스페이스 관리자를 선택합니다. 또는 관리자 도구 모음에서 테이블스페이스 관리자를 클릭합니다.
3. 테이블스페이스 탭에서 테이블스페이스를 선택하고 마우스 오른쪽 클릭으로 테이블스페이스 변경을 선택합니다. 또는 테이블스페이스 변경을 클릭합니다.
![테이블 스페이스 변경](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/1B049BE702EF86FBC62FE2E98F86356F.jpg)
4. 테이블 스페이스 변경 창이 나타납니다. 추가를 클릭합니다.
![테이블스페이스 변경 기기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/B23289F0FB028FAB5093FA81211C5299.jpg)
5. 데이터 파일 추가 창이 나타납니다. 찾기를 클릭하면 데이터 파일 목록 창이 나타납니다.
![데이터 파일 목록 창](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/F8CBB333A41C5D2E1B5AA22D290E559B.jpg)
6. 파일을 선택하고 확인을 클릭합니다.
7. 파일 크기를 입력하고 확인을 클릭합니다.
8. 실행 결과를 확인합니다.


## 세션 브라우저를 이용하여 세션 정보 보기

세션 브라우저를 이용하여 세션 정보 보기를 설명합니다.

1. DBA 권한으로 오라클 데이터베이스에 접속합니다.
2. 주 메뉴 관리자>세션 브라우저를 선택합니다. 또는 관리자 도구 모음에서 세션 브라우저를 클릭합니다.
3. 세션 탭에서 그룹 기준을 선택 합니다. 선택한 그룹에  따라 정렬됩니다.
4. 세션을 클릭하고 세션 정보 탭에서 정보를 확인합니다.

![세션 정보 보기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/3BD43C10F4191623B26A99B56F4C5BB7.jpg)


## 세션 추적 사용하기

세션 추적 사용하기를 설명합니다.

1. DBA 권한으로 오라클 데이터베이스에 접속합니다.
2. 주 메뉴 관리자>세션 브라우저를 선택합니다. 또는 관리자 도구 모음에서 세션 브라우저를 클릭합니다.
3. 추적을 원하는 세션에서 마우스 오른쪽 클릭으로 선택한 세션 추적 시작을 선택합니다.

![세션 추적 사용하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/CA22A907B64DEAFC59451CBD82603D4D.jpg)



## 트랜잭션에 의해 잠금이 걸린 세션 확인 하기

트랜잭션에 의해 잠금이 걸린 세션 확인 하기를 설명합니다.

1. DBA 권한으로 오라클 데이터베이스에 접속합니다.
2. 주 메뉴 관리자>세션 브라우저를 선택합니다. 또는 관리자 도구 모음에서 세션 브라우저를 클릭합니다.
3. 잠금 차단 탭을 클릭합니다.
4. 트랜잭션에 의해 잠금이 걸린 세션이 있을 경우 상태가 표시됩니다.
5. 세션 정보를 확인하고 불필요한 세션일 경우 마우스 오른쪽 클릭으로 선택한 세션 종료를 선택합니다.

![세션 종료하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/9FABAF57BBECAB32CC46942EAE771BE2.jpg)


