---
title: "Mouse On Escape"
subtitle: "Team SIG"
period: "2013.03 ~ 2013.06"
role: "기술감독 (테크니컬 디렉터)"
platform: "Windows PC"
engine: "학교 제공 그래픽 라이브러리"
teamSize: "4인"
summary: "2D 탑다운 퍼즐 게임. 기술감독과 사운드 엔진 구현을 맡았습니다."
order: 40
media:
  - src: /media/academic/mouse-on-escape/01.webp
    kind: image
    width: 800
    height: 600
    caption: 게임화면 1
  - src: /media/academic/mouse-on-escape/02.webp
    kind: image
    width: 800
    height: 600
    caption: 게임화면 2
  - src: /media/academic/mouse-on-escape/03.webp
    kind: image
    width: 800
    height: 600
    caption: 게임화면 3
  - src: /media/academic/mouse-on-escape/04.webp
    kind: image
    width: 1028
    height: 770
    caption: 타이틀
  - src: /media/academic/mouse-on-escape/05.webp
    kind: image
    width: 1600
    height: 1201
    caption: 매뉴얼 1
  - src: /media/academic/mouse-on-escape/06.webp
    kind: image
    width: 1600
    height: 1201
    caption: 매뉴얼 2
  - src: /media/academic/mouse-on-escape/07.webp
    kind: image
    width: 1600
    height: 1201
    caption: 매뉴얼 3
  - src: /media/academic/mouse-on-escape/08.webp
    kind: image
    width: 1600
    height: 1201
    caption: 매뉴얼 4
---

본 프로젝트는 계명대학교 디지펜 복수학위과정에서 제작된 프로젝트이며 4명이 진행한 프로젝트입니다. 1학기 동안 진행되었으며 David Ly 교수의 조언 아래에서 제작되었습니다.

Mouse On Escape은 2D 탑다운 시점의 퍼즐 게임입니다. 닉(Nick)이라는, 실험실에서 실험을 받고 있는 쥐를 목표지점(탈출구)까지 보내서 탈출시킨다는 스토리의 게임입니다. 유저는 닉을 직접 움직일 수 없으며, 로봇 팔을 활용해 게임 내 나무상자를 이동시켜 닉의 움직임(AI)을 통제해서 탈출구 쪽으로 갈 수 있게 유도해야 합니다.

유저는 닉을 목표지점까지 안전하게 이동시켜야 하며, 함정을 피하고 아이템을 선택·사용하여 목표지점까지 보내는 것이 게임의 목표입니다.

### 본인의 주요 업무

- 팀원에게 기술적인 조언과 핵심 기능 설명
- 프로젝트의 핵심 기능 구현
  - 닉의 AI 구현
  - 게임 오브젝트, 타일맵 시스템 구현
  - 게임 내 함정, 아이템 구현
- 게임 내 필요한 충돌처리 구현
- 사운드 재생이 가능한 기능을 FMOD를 활용하여 구현
