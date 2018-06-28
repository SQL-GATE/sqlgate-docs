---
id: 0213-functions-of-administrators
title: 관리자 기능들
sidebar_label: 관리자 기능들
---

## 새 사용자 등록과 권한 부여하기
> Supported models :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,mysql,mariadb,postgresql,sqlserver,db2,tibero>)

새 사용자 등록과 권한 부여하기를 설명합니다.

1. DBA 권한으로 오라클 데이터베이스에 접속합니다.
2. 주 메뉴 **관리자**>**보안 관리자**를 선택합니다. 또는 관리자 도구 모음에서 [보안 관리자]를 클릭합니다.
3. 사용자 탭에서 [새 사용자]를 클릭합니다.
4. 사용자 정보 탭에서 만들 사용자 이름을 입력하고 인증 방법을 선택합니다.
5. 데이터베이스 인증은 로그인 할 때 암호를 요구합니다. 운영 체제 인증은 운영체제의 사용자 인증을 요구합니다
6. 테이블스페이스 기본값을 선택하고 임시 테이블스페이스를 선택합니다.
7. 리소스 프로파일을 선택하고 상태를 선택합니다.

![사용자 등록하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/manager/manager-securityManager-newUser-ko.png)


## 새 사용자 롤 정의하기
> Supported models :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,sqlserver,tibero>)

1. 롤 탭에서 롤을 선택하고 [선택 항목 부여]를 클릭합니다.

![사용자 롤 정의 하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/manager/manager-securityManager-role-ko.png)


## 새 사용자 시스템 권한 부여와 취소하기
> Supported models :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,sqlserver,tibero>)

1. 시스템 권한 탭을 선택합니다.
2. 부여할 시스템 권한을 선택하고 [선택 항목 부여]를 클릭합니다.
3. 화살표를 이용하여 권한을 부여 하거나 취소할 수 있습니다.

![사용자 권한 부여와 취소하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/manager/manager-securityManager-systemPrivileges-ko.png)

4. 개체 권한 탭을 선택합니다. 스키마와 테이블을 선택하고 [검색]을 클릭합니다.
5. 개체 이름을 선택하고 권한을 선택합니다. [선택 항목 추가] 화살표를 클릭 합니다.

![사용자 개체 권한 부여하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/manager/manager-securityManager-objectPrivilege-ko.png)

6. 테이블스페이스 할당량을 부여합니다.

![사용자 테이블스페이스 할당량 부여하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/manager/manager-securityManager-tableSpaceQuota-ko.png)

7. [SQL 보기]를 클릭하여 생성된 문장을 확인합니다.
8. [확인]을 클릭하고 실행 결과를 확인합니다.


## 사용자 시스템 권한 부여하기
> Supported models :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,sqlserver,tibero>)

사용자 시스템 권한 부여하기를 설명합니다.

1. DBA 권한으로 오라클 데이터베이스에 접속합니다.
2. 주 메뉴 **관리자**>**보안 관리자**를 선택합니다. 또는 관리자 도구 모음에서 [보안 관리자]를 클릭합니다.
3. 시스템 권한 탭에서 부여할 권한을 선택하고 마우스 오른쪽 클릭하고 [시스템 권한 부여]를 선택합니다. 또는 시스템 권한 부여를 클릭합니다.

![사용자 시스템 권한 부여하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/manager/manager-securityManager-grantSystemPrivileges-ko.png)

4. 사용자를 선택하고 [선택 항목 부여]를 클릭합니다.

![사용자 시스템 권한 선택 항목 부여하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/manager/manager-securityManager-grantSystemPrivileges-user-ko.png)

5. 롤 탭을 클릭하고 롤을 선택하고 [선택 항목 부여]를 클릭합니다.

![사용자 시스템 권한 롤 부여하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/manager/manager-securityManager-grantSystemPrivileges-role-ko.png)
6. [SQL 보기]를 클릭하여 자동 생성된 SQL 문장을 확인합니다.
7. [확인] 버튼을 클릭하여 실행 결과를 확인합니다.



## 테이블스페이스 관리자를 이용하여 테이블 스페이스 늘리기
> Supported models :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

테이블스페이스 관리자를 이용하여 테이블 스페이스를 늘리는 방법을 설명합니다.

1. DBA 권한으로 오라클 데이터베이스에 접속합니다.
2. **주 메뉴 관리자**>**테이블스페이스 관리자**를 선택합니다. 또는 관리자 도구 모음에서 테이블스페이스 관리자를 클릭합니다.
3. 테이블스페이스 탭에서 테이블스페이스를 선택하고 마우스 오른쪽 클릭으로 [테이블스페이스 변경]을 선택합니다. 또는 [테이블스페이스 변경]을 클릭합니다.

![테이블 스페이스 변경](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/manager/manager-tableSpaceManager-ko.png)

4. **테이블 스페이스 변경** 창이 나타납니다. [추가]를 클릭합니다.

![테이블스페이스 변경 기기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/manager/manager-tableSpaceManager-alterTableSpace-ko.png)

5. **데이터 파일 추가** 창이 나타납니다. 찾기를 클릭하면 데이터 파일 목록 창이 나타납니다.

![데이터 파일 목록 창](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/manager/manager-tableSpaceManager-alterTableSpace-addDataFile-ko.png)

6. 파일을 선택하고 [확인]을 클릭합니다.
7. 파일 크기를 입력하고 [확인]을 클릭합니다.
8. 실행 결과를 확인합니다.


## 세션 브라우저를 이용하여 세션 정보 보기
> Supported models :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

세션 브라우저를 이용하여 세션 정보 보기를 설명합니다.

1. DBA 권한으로 오라클 데이터베이스에 접속합니다.
2. 주 메뉴 **관리자**>**세션 브라우저**를 선택합니다. 또는 관리자 도구 모음에서 [세션 브라우저]를 클릭합니다.
3. 세션 탭에서 그룹 기준을 선택 합니다. 선택한 그룹에  따라 정렬됩니다.
4. [세션]을 클릭하고 세션 정보 탭에서 정보를 확인합니다.

![세션 정보 보기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/manager/manager-sessionBrowser-ko.png)


## 세션 추적
> Supported models :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

세션 추적을 설명합니다.

1. DBA 권한으로 오라클 데이터베이스에 접속합니다.
2. 주 메뉴 **관리자**>**세션 브라우저**를 선택합니다. 또는 관리자 도구 모음에서 [세션 브라우저]를 클릭합니다.
3. 추적을 원하는 세션에서 마우스 오른쪽 클릭으로 선택한 [세션 추적 시작]을 선택합니다.

![세션 추적 사용하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/manager/manager-sessionBrowser-trace-ko.png)



## 트랜잭션에 의해 잠금이 걸린 세션 확인 하기
> Supported models :
> ![support-database](<http://www.sqlgate.com/docs-badge/oracle,tibero>)

트랜잭션에 의해 잠금이 걸린 세션 확인 하기를 설명합니다.

1. DBA 권한으로 오라클 데이터베이스에 접속합니다.
2. 주 메뉴 **관리자**>**세션 브라우저**를 선택합니다. 또는 관리자 도구 모음에서 [세션 브라우저]를 클릭합니다.
3. 잠금 차단 탭을 클릭합니다.
4. 트랜잭션에 의해 잠금이 걸린 세션이 있을 경우 상태가 표시됩니다.
5. 세션 정보를 확인하고 불필요한 세션일 경우 마우스 오른쪽 클릭으로 [세션 종료]를 선택합니다.

![세션 종료하기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-resource/captures/manager/manager-sessionBrowser-kill-ko.png)