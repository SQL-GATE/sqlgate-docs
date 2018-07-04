---
id: 0210-functions-of-create
title: 만들기 기능
sidebar_label: 만들기 기능
---

## 컬렉션 유형
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

데이터베이스에 변경 가능한 새로운 배열 또는 관련된 테이블을 만듭니다. 컬렉션 유형을 만들기 위해서는 소유자의 CREATE TYPE 또는 CREATE ANY TYPE 권한이 요구됩니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **만들기**>**컬렉션 유형**을 실행합니다.
3. 만들 컬렉션 이름을 입력하고 스키마를 선택합니다.
4. 배열 유형 또는 테이블 유형을 선택합니다.데이터 유형을 선택하고 값을 입력합니다.
5. [SQL 보기]를 클릭하여 자동 생성된 SQL 문장을 확인합니다. [확인]을 클릭하여 실행 결과를 확인합니다.

![컬렉션 유형 만들기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-collectionType-ko.png)

![컬렉션 유형 만들기 생성된 SQL 확인](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-collectionType-sqlView-ko.png)


## 제약 조건
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

데이터베이스 테이블에 기본, 검사, 고유, 외래 키를 만듭니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **만들기**>**제약 조건**을 실행합니다.
3. 만들 제약 조건 이름을 입력하고 스키마를 선택합니다.
4. 테이블을 선택합니다.
5. 제약 조건 탭에서 [외래 키]를 선택합니다.
6. 대상 테이블 열을 선택하고 [추가]를 클릭합니다.
7. [ON DELETE CASCADE]를 선택합니다.

![제약 조건 만들기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-constraint-ko.png)
8. 옵션 탭에서 옵션들을 설정합니다.
9. SQL 보기를 클릭하여 자동 생성된 SQL 문장을 확인합니다.
10. 확인을 클릭하여 실행 결과를 확인합니다.


## 데이터베이스 링크
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

원격에 있는 데이터베이스를 접근 할 수 있도록 데이터베이스 링크를 만듭니다. 데이터베이스 링크 만들기 실행을 위해서는 소유자의 ’CREATE DATABASE LINK’, 공용으로 생성하기 위해서는 ’CREATE PUBLIC DATABASE LINK’ 권한이 요구됩니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **만들기**>**데이터베이스 링크**를 실행합니다.
3. 만들 데이터베이스 링크의 이름을 입력하고 서비스 이름을 선택합니다.

![데이터베이스 링크 만들기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-databaseLink-ko.png)
4. [SQL 보기]를 클릭하여 자동 생성된 SQL 문장을 확인합니다.

![데이터베이스 링크 만들기 생성된 SQL 확인](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-databaseLink-sqlView-ko.png)
5. [확인]을 클릭하여 실행 결과를 확인합니다.
6. 데이터베이스 접속 테스트 확인 창이 나타납니다. 예를 클릭하여 접속 확인을 합니다.

> 노트 : 오라클 데이터베이스 연결 정보는 tbdsn.tbr 파일에 저장되어 있습니다.


## 인덱스
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,db2,tibero>)

오라클 데이터베이스 테이블 또는 클러스터에 인덱스를 만듭니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **만들기**>**인덱스**를 실행합니다.
3. 스키마를 선택하고 만들 인덱스의 이름을 입력합니다.
4. 테이블 스페이스를 선택합니다.
5. 일반 탭에서 스키마와 테이블을 선택합니다.
6. 테이블 열을 선택하고 [선택 항목 추가]를 클릭합니다.

![인덱스 만들기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-index-ko.png)
7. 저장 영역 탭에서 저장 영역의 크기, 트랜잭션 수, 공간 사용량을 입력합니다.

![인덱스 만들기 생성된 SQL 확인](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-index-sqlView-ko.png)
8. [SQL 보기]를 클릭하여 자동 생성된 SQL 문장을 확인합니다.
9. [확인]을 클릭하여 실행 결과를 확인합니다.


## 작업
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

오라클 데이터베이스에 새로운 작업을 만듭니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **만들기**>**작업**을 실행합니다.
3. 다음 날짜/시간을 선택합니다. 또는 반복에서 선택합니다.
4. [프로시저 검색]을 클릭합니다.
5. 유형, 스키마, 개체 이름을 선택합니다. [확인]을 클릭합니다.

![작업 만들기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-job-ko.png)
6. 실행 스크립트에서 결과를 확인합니다..
7. [확인]을 클릭하여 실행 결과는 확인합니다.


## 개체 유형
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

오라클 데이터베이스에 새로운 특성과 메소드, 본문을 선택하여 개체 유형을 만듭니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **만들기**>**개체 유형**을 실행합니다.
3. 만들 개체 유형 이름을 입력하고 스키마를 선택 합니다.
4. ’속성 및 메소드’ 탭에서 [추가] 버튼을 클릭합니다.
5. ’속성 추가’ 창에서 이름을 입력하고 개체 유형을 선택하고 [확인]을 클릭합니다.
6. [메소드 추가] 버튼을 클릭합니다.
7. 메소드의 이름을 입력하고 메소드 유형을 선택합니다. [매개변수 추가]를 클릭합니다.
8. ’매개 변수 추가’ 창에서 이름을 입력하고 모드를 선택합니다.
9. 데이터 유형을 선택하고 [확인]을 클릭합니다.
10. 추가된 속성과 메소드를 확인합니다.
11. [SQL 보기]를 클릭하여 자동 생성된 SQL 문장을 확인합니다.
12. [확인]을 클릭하여 실행 결과를 확인합니다.

![개체 유형 만들기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-objectType-ko.png)


## 리두 로그 그룹
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

오라클 데이터베이스에 새로운 리두 로그 그룹을 만듭니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **만들기**>**리두 로그 그룹**을 실행합니다.
3. 그룹 번호를 숫자로 입력합니다.
4. 리두 로그 멤버에서 파일 이름을 입력합니다. 또는 [파일 선택]을 클릭하여 파일을 찾습니다.
5. 파일 크기를 선택합니다.
6. SQL 보기를 클릭하여 자동 생성된 SQL 문장을 확인합니다.
7. ’확인’을 클릭하여 실행 결과를 확인합니다.

![리두 로그 그룹 만들기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-redoLogGroup-ko.png)



## 롤
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

오라클 데이터베이스에 새로운 롤을 만듭니다. 롤을 만들기 위해서는 소유자의 CREATE ROLE 권한이 요구됩니다. 또한 롤 만들기 실행을 위해서는 DBA_VIEWS를 조회할 수 있는 권한이 요구됩니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **만들기**>**롤**을 실행합니다.
3. 만들 롤 이름을 입력하고 인증 방법을 선택합니다.
4. 롤 탭에서 부여할 롤을 선택하고 [선택 항목 부여]를 클릭합니다.
5. 시스템 권한과 개체 권한도 설정합니다.
6. [SQL 보기]를 클릭하여 자동 생성된 SQL 문장을 확인합니다.
7. [확인]을 클릭하여 실행 결과를 확인합니다.

![롤 만들기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-role-ko.png)


## 롤백 세그먼트
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle>)

오라클 데이터베이스에 새로운 롤백 세그먼트를 만듭니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **만들기**>**롤백 세그먼트**를 실행합니다.
3. 만들 롤백 세그먼트 이름을 입력하고 테이블스페이스를 선택합니다.
4. 소유자가 DBA권한이 있을 경우 모든 인스턴스에서 사용 가능한 공용으로 생성할 수 있습니다.
5. 상태를 선택하고 값을 입력합니다.
6. [SQL 보기]를 클릭하여 자동 생성된 SQL 문장을 확인합니다.
7. [확인]을 클릭하여 실행 결과를 확인합니다.

![롤백 세그먼트 만들기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-rollbackSegment-ko.png)


## 시퀀스
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,sqlserver,tibero>)

오라클 데이터베이스에 새로운 시퀀스를 만듭니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **만들기**>**시퀀스…**를 실행합니다.
3. 만들 시퀀스 이름을 입력하고 스키마를 선택합니다.
4. 값을 입력하고 옵션을 선택합니다. 순환 (Cycle)은 시퀀스가 최대 값에 도달하면 초기값부터 시작하게 되고 순차(Sequential)은 시퀀스가 숫자를 만들 때 순서대로 할당합니다.
5. [SQL 보기]를 클릭하여 자동 생성된 SQL 문장을 확인합니다.
6. [확인]을 클릭하여 실행 결과를 확인합니다.

![시퀀스 만들기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-sequence-ko.png)


## 동의어
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,sqlserver,tibero>)

오라클 데이터베이스에 동의어를 만듭니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **만들기**>**동의어**를 실행합니다.
3. 로컬 또는 원격을 선택합니다.
4. 스키마를 선택하고 개체 유형을 선택합니다.
5. 키워드 값 입력 또는 [검색]을 클릭합니다. 키워드 검색에는 %로 필터링 할 수 있습니다.
6. 개체를 선택하고 [추가]를 클릭합니다 또는 더블 클릭합니다..
7. 동의어 이름을 입력합니다. [모두 PUBLIC]을 클릭합니다.
8. [SQL 보기]를 클릭하여 자동 생성된 SQL 문장을 확인합니다.
9. [확인]을 클릭하여 실행 결과를 확인합니다.

![동의어 만들기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-synonym-ko.png)


## 테이블
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

오라클 데이터베이스에 테이블을 만듭니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **만들기**>**테이블**을 실행합니다.
3. 만들 테이블 이름을 입력하고 스키마와 테이블스페이스를 선택합니다.
4. 주석을 입력합니다.
5. 일반 탭에서 열 이름과 정보를 입력합니다.
6. 제약 조건, 저장 영역, 옵션 탭에 값을 선택합니다.
7. [SQL 보기]를 클릭하면 자동 생성된 문장을 확인합니다.
8. [확인]을 클릭하여 실행 결과를 확인합니다.

![테이블 만들기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-table-ko.png)


## 테이블스페이스
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

오라클 데이터베이스에 새로운 테이블스페이스를 만듭니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **만들기**>**테이블스페이스**를 실행합니다.
3. 만들 테이블스페이스 이름을 입력하고 [추가]를 클릭합니다.
4. 데이터 파일 추가 창이 열립니다.
5. [찾기]를 클릭하고 데이터 파일 목록을 선택합니다. [확인]을 클릭합니다.
6. ’데이터 파일 추가’ 창에서 파일 크기를 입력하고 [확인]을 클릭합니다.
7. 추가된 데이터 파일을 확인하고 상태를 선택합니다. 온라인은 생성되는 테이블스페이스가 활성화되어 생성 후 바로 사용가능하고, 오프라인은 비활성화 상태로 바로 사용 할 수 없습니다.
8. 유형을 선택합니다. 영구는 일반 개체를 저장하는 테이블스페이스 입니다. 임시는 임시 개체를 저장하는 임시 테이블스페이스입니다.
9. 저장 영역 탭의 [옵션]을 선택합니다
10. [SQL 보기]를 클릭하여 자동 생성된 SQL 문장을 확인합니다.
11. [확인]을 클릭하여 실행 결과를 확인합니다.

![테이블스페이스 만들기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-tableSpace-01-ko.png)


## 사용자
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

오라클 데이터베이스에 새로운 사용자를 만듭니다. 사용자를 만들기 실행을 위해서는 ’CREATE USER’ 권한이 요구됩니다. 또한 ’DBA_VIEWS’를 조회할 수 있는 권한이 요구됩니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **만들기**>**사용자**를 실행합니다.
3. ’사용자 정보’ 탭에서 만들 사용자 이름을 입력하고 인증 방법을 선택합니다.
4. 데이터베이스 인증은 로그인 할 때 암호를 요구합니다. 운영 체제 인증은 운영체제의 사용자 인증을 요구합니다.
5. 테이블스페이스 기본값을 선택하고 임시 테이블 스페이스를 선택합니다.
6. 리소스 프로파일을 선택하고 상태를 선택합니다.

![사용자 만들기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/manager/manager-securityManager-newUser-ko.png)

7. 롤 탭에서 부여할 ’롤’을 선택하고 ’선택 항목 부여’를 클릭합니다.

![사용자 롤 부여하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/manager/manager-securityManager-role-ko.png)

8. 시스템 권한, 개체 권한, 리소스 그룹 탭에서 값을 선택합니다.
9. [SQL 보기]를 클릭하여 자동 생성된 문장을 확인합니다.
10. [확인]을 클릭하여 실행 결과를 확인합니다.


## 뷰
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

데이터베이스에 새로운 뷰를 만듭니다. 뷰를 만들기 실행을 위해서는 소유자의 CREATE VIEW 권한이 요구됩니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **만들기**>**뷰**를 실행합니다.
3. 만들 뷰 이름을 입력하고 스키마를 선택합니다.
4. 주석을 입력합니다.
5. 스크립트 탭에 스크립트를 입력합니다.
6. [SQL 유효성 검사]를 클릭하여 유효성을 확인합니다.
7. 뷰 정보 탭에서 [자동 추가] 또는 [추가] 버튼을 클릭하여 열을 추가합니다.
8. 옵션을 설정하고 SQL 보기를 클릭하여 자동 생성된 SQL 문장을 확인합니다.
9. [확인]을 클릭하여 실행 결과를 확인합니다.

![뷰 만들기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-view-ko.png)


## 프로파일
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

오라클 데이터베이스에 새로운 프로파일을 만듭니다. 프로파일은 데이터베이스 리소스의 제한을 설정할 수 있습니다. 프로파일을 할당 받은 소유자는 프로파일에 정의한 리소스 제한을 받게 됩니다. 프로파일 만들기 실행을 위해서는 소유자의 ‘CREATE PROFILE‘ 권한이 요구됩니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 만들기>프로파일을 실행합니다.
3. 만들 프로파일 이름을 입력합니다..
4. 일반 탭의 세부 정보 값들을 선택합니다.

![프로파일 만들기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-profile-01-ko.png)
일반 탭 옵션의 내용은 다음과 같습니다.
- CPU/세션 : 세션의 CPU 시간 제한입니다.
- CPU/호출 : 호출(Parser, Execute, Fetch 등)에 대한 CPU 시간 제한입니다.
- 접속 시간 : 세션의 총 경과시간 제한입니다.
- 유휴 시간 : 세션이 연속적으로 비활성화 되어있는 시간을 제한합니다.

데이터베이스 서비스 옵션의 내용은 다음과 같습니다.
- 동시 세션 : 동시 접속 세션의 개수 입니다.
- 읽기/세션 : 세션이 메모리와 디스크로부터 읽는 데이터 블록의 개수 입니다.
- 읽기/호출 : SQL 호출(Parse, Execute, Fetch 등)로부터 읽는 데이터 블록의 개수 입니다.
- 전용 SGA : 세션이 사용할 수 있는 SGA의 전용 공간의 크기 입니다.
- 조합 제한 : 세션의 모든 리소스 비용을 서비스 단위로 지정한 겁니다.

5. 암호 탭의 세부 정보 값들을 선택합니다.

![프로파일 암호 세부 정보 설정](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-profile-02-ko.png)

암호 탭 옵션의 내용은 다음과 같습니다.
- 암호 만료 시간 : 지정한 기간까지 암호 사용이 가능하며, 기간이 지나면 계정이 만료됩니다.
- 잠금 (만료일 이후) : 지정한 유예 기간 동안 암호를 변경하지 않으면 계정이 만료됩니다.
- 보관할 암호 수 : 암호를 보관할 수 있는 횟수 입니다.
- 보관 일 수 : 암호를 보관할 수 있는 일 수 입니다.
- 잠금 전 로그인 시도 실패 횟수 : 지정한 수만큼 로그인 실패하면 계정을 잠급니다.
- 잠금 일 수 : 로그인 실패 시 잠금 기간입니다.
- 복합성 함수 : 암호를 검증하는 함수를 지정합니다.
6. [SQL 보기]를 클릭하여 자동 생성된 문장을 확인합니다.
7. [확인]을 클릭하여 실행 결과를 확인합니다.


## 프로시저/함수/패키지
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

오라클 데이터베이스에 새로운 프로시저/함수/패키지를 만듭니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **만들기**>**프로시저/함수/패키지**를 실행합니다.
3. 만들 개체의 탭에서 [예제 열기]를 선택합니다.
4. [편집] 버튼을 클릭하면 [PL/SQL 편집기]가 실행 됩니다.
5. 예제를 바탕으로 로직에 맞게 편집하여 작성 합니다.

![프로시저/함수/패키지 만들기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-PLSQLObject-ko.png)


## 트리거
> 지원 제품 :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

오라클 데이터베이스에 새로운 트리거를 만듭니다. 트리거 만들기 실행을 위해서는 소유자의 ‘CREATE TRIGGER‘ 권한이 요구됩니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 **만들기**>**트리거**를 실행합니다.
3. 만들 트리거의 이름을 입력합니다.
4. 테이블에서 생성할 스키마와 테이블을 선택합니다.
5. 트리거 실행 시점을 선택하고 실행할 이벤트를 선택합니다.
6. FOR EACH 조건을 선택합니다. ROW는 열의 변화가 있을 때 트리거가 실행이 됩니다. STATEMENT는 열의 데이터와 상관없이 해당 열의 변화가 일어나면 실행됩니다.
7. Where 절 탭에서 실행 될 조건을 입력합니다.
8. [SQL 보기]를 클릭하여 자동 생성된 SQL 문장을 확인합니다.
9. [확인]을 클릭하여 실행 결과를 확인합니다.

![트리거 만들기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/create/create-trigger-ko.png)