---
id: database-link
title: 데이터베이스 링크
sidebar_label: 데이터베이스 링크
---

## 데이터베이스 링크

오라클 데이터베이스에 원격에 있는 데이터베이스를 접근 할 수 있도록 데이터베이스 링크를 만듭니다. 데이터베이스 링크 만들기 실행을 위해서는 소유자의 CREATE DATABASE LINK, 공용으로 생성하기 위해서는 CREATE PUBLIC DATABASE LINK권한이 요구됩니다.

1. 데이터베이스에 접속합니다.
2. 주 메뉴 만들기>데이터베이스 링크를 실행합니다.
3. 만들 데이터베이스 링크의 이름을 입력하고 서비스 이름을 선택합니다.
![데이터베이스 링크 만들기](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/0407C8C5FC534D1EECD7D6079DB7B8FA.jpg)
4. SQL 보기를 클릭하여 자동 생성된 SQL 문장을 확인합니다.
![생성된 SQL 확인](https://s3.ap-northeast-2.amazonaws.com/sqlgate-manual-content/A8AE240BBF9B5DA0DAB951762D435236.jpg)
5. 확인을 클릭하여 실행 결과를 확인합니다.
6. 데이터베이스 접속 테스트 확인 창이 나타납니다. 예를 클릭하여 접속 확인을 합니다.

> 노트 : 오라클 데이터베이스 연결 정보는 tbdsn.tbr 파일에 저장되어 있습니다.
