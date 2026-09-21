---
title: "크로스플랫폼 Player 앱 — iOS / Android / HarmonyOS"
company: "스튜디오씨드코리아 (Studio XID Korea / ProtoPie)"
period: "2024.09 ~ 현재"
summary: "세 플랫폼의 Player 앱을 개발하고 엔진·렌더러와의 접점을 조율했습니다."
order: 40
stack:
  - "Swift"
  - "Kotlin"
  - "ArkTS/ArkUI"
  - "Kotlin Multiplatform"
  - "Rust"
links:
  - label: App Store
    url: https://apps.apple.com/us/app/protopie-player/id1015837511
  - label: Google Play
    url: https://play.google.com/store/apps/details?id=io.protopie.companion
  - label: AppGallery
    url: https://appgallery.huawei.com/app/detail?id=com.studioxid.playerohos
---

**HarmonyOS Player** (2026.06 ~) — ArkTS/ArkUI 기반 Player를 신규 개발해 공식 앱스토어에 출시했습니다. Rust Engine 포팅 PoC를 제품 코드에 적용하고 UI와 엔진을 연결하는 native bridge와 실행 흐름을 구현했습니다.

**iOS Player App Clip** (2025.02 ~ 2025.09) — 타당성 검토부터 설계, UI, App Store 출시까지 단독 담당했습니다. 공통 로직 모듈 분리와 정적 링크 전환으로 10MB 바이너리 제한을 충족했습니다.

**User Testing** (2024.09 ~ 2025.11) — 요구사항을 코어 엔진, iOS, Android, Web Preview 구현 계획으로 구체화하고 저장소별 작업 분배, 코드 리뷰, 통합을 조율했습니다. iOS의 type-safe JS-Native bridge와 Android native bridge를 개발하고 핵심 기능 개발자 PR 88건을 리뷰했습니다.
