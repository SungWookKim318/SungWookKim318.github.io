---
title: "멸치 모바일 iOS 엔진 포팅 및 개발"
company: "리치빔 (멸치)"
period: "2021.01 ~ 2022.07"
platform: "iOS"
summary: "Android 엔진을 iOS로 포팅하고 iOS 미디어 엔진을 개발·연동했습니다."
order: 130
stack:
  - "C++"
  - "Objective-C++"
  - "Swift"
  - "AVFoundation"
  - "FlatBuffers"
---

Android 엔진을 iOS로 포팅하고 iOS 미디어 엔진을 개발·연동했습니다.

- 엔진의 오픈소스 의존성을 iOS용으로 빌드하고 적용
- Swift와 Objective-C++로 앱-엔진 bridge 단독 구현 (FlatBuffers)
- AVFoundation 기반 iOS 미디어 엔진(encoder, decoder) 개발 및 연동
- 개인 시간에 Metal 테스트 앱으로 포팅 구조를 선행 검증하고 아키텍처를 제안, 채택되어 일정 단축에 기여
