---
title: "스튜디오씨드코리아 (Studio XID Korea / ProtoPie)"
subtitle: "Engine & Player 팀 소프트웨어 엔지니어"
period: "2024.09 ~ 현재"
summary: "Kotlin Multiplatform 런타임 기반 프로토타이핑 플랫폼의 코어 엔진, GPU 렌더러, 크로스플랫폼 Player를 개발합니다."
order: 10
highlights:
  - "New Renderer — Rust / wgpu / WASM"
  - "KMM Core Engine — 렌더러 데이터 계약"
  - "AI Agent Extension PoC"
  - "크로스플랫폼 Player 앱 — iOS / Android / HarmonyOS"
  - "개발 인프라 — 정적 분석과 AI 코드 리뷰"
links:
  - label: protopie.io
    url: https://www.protopie.io
  - label: App Store
    url: https://apps.apple.com/us/app/protopie-player/id1015837511
  - label: Google Play
    url: https://play.google.com/store/apps/details?id=io.protopie.companion
  - label: AppGallery
    url: https://appgallery.huawei.com/app/detail?id=com.studioxid.playerohos
---

iOS, Android, Web에서 동작하는 Kotlin Multiplatform 런타임 기반의 고정밀 프로토타이핑 플랫폼입니다. Engine & Player 팀에서 코어 엔진과 새 GPU 렌더러, iOS·Android·HarmonyOS Player 앱을 개발합니다.

## New Renderer — Rust / wgpu / WASM

*2025.11 ~ 현재*

DOM 기반 Web 렌더러를 GPU 렌더러로 전환하는 프로젝트를 초기 계획과 마일스톤 수립부터 실행까지 주도했습니다.

- KMM 코어 엔진, 브리지 SDK, Rust 렌더러 3개 저장소를 연결하는 전체 아키텍처 설계
- scene graph, vector path rasterization, batching, GPU backend, WASM encoder로 이어지는 stencil clipping과 geometric mask 합성 기능 구현
- KMM/JS 엔진과 Rust/WASM 렌더러 사이의 명령 변환 브리지(SDK) 개발. JSON reference path와 binary fast path 두 전송 경로의 결과를 비교하는 parity 검증 체계 구축
- SVG rasterizer 개발
- WebGL2 fallback 적용 방향과 플랫폼 제약 검토, 관련 구현 리뷰
- 렌더러 개발 원칙과 구조를 RFC 3건으로 문서화하고 코드 리뷰로 팀에 전수

기술: Rust, wgpu, WebGPU, WebGL2, WASM, TypeScript, Kotlin Multiplatform

## KMM Core Engine — 렌더러 데이터 계약

*2024.12 ~ 현재*

코어 엔진과 플랫폼 렌더러 사이의 데이터 계약을 개발하고 팀의 핵심 기능 검수, 통합, 릴리스를 관리했습니다.

- Star / Polygon 벡터 도형의 path 데이터 계산 (코어 엔진 → 렌더러 계약)
- SDK용 Stroke 명령 계약 설계, mask 관계 명령 생성
- 요구사항을 전체 개발 계획과 마일스톤으로 구조화하고 Jira 이슈로 분배
- PixiJS 기반 실험용 Web Engine PoC (2024.09 - 2025.01)에서 Primitive Layer(Line, Triangle, Polygon)와 Text Box 개발, Asset Manager 단독 설계 및 개발

## AI Agent Extension PoC

*2026.04*

AI 에이전트가 프로토타입을 직접 생성하고 수정하는 방식을 제안하고, 아키텍처와 단계별 로드맵 수립부터 구현까지 단독 진행했습니다.

- VS Code Extension (webview wrapper, CSP 적용, 패널) 개발
- MCP 서버 개발로 Claude Code, Codex 등 복수 에이전트가 WASM 렌더러를 제어하도록 연동
- 렌더러를 수정하지 않고 명령만 전달하도록 경계 분리. 같은 구조를 ChatGPT 앱(OpenAI Apps SDK)으로 이식

## 크로스플랫폼 Player 앱 — iOS / Android / HarmonyOS

*2024.09 ~ 현재*

**HarmonyOS Player** (2026.06 ~) — ArkTS/ArkUI 기반 Player를 신규 개발해 공식 앱스토어에 출시했습니다. Rust Engine 포팅 PoC를 제품 코드에 적용하고 UI와 엔진을 연결하는 native bridge와 실행 흐름을 구현했습니다.

**iOS Player App Clip** (2025.02 ~ 2025.09) — 타당성 검토부터 설계, UI, App Store 출시까지 단독 담당했습니다. 공통 로직 모듈 분리와 정적 링크 전환으로 10MB 바이너리 제한을 충족했습니다.

**User Testing** (2024.09 ~ 2025.11) — 요구사항을 코어 엔진, iOS, Android, Web Preview 구현 계획으로 구체화하고 저장소별 작업 분배, 코드 리뷰, 통합을 조율했습니다. iOS의 type-safe JS-Native bridge와 Android native bridge를 개발하고 핵심 기능 개발자 PR 88건을 리뷰했습니다.

## 개발 인프라 — 정적 분석과 AI 코드 리뷰

*2024.09 ~ 현재*

- iOS와 Android에 SonarQube 품질 게이트를 설정하고, 정적 분석에서 확인된 reliability, security, duplication 문제를 후속 PR로 단계적으로 개선
- iOS, Android, engine, renderer, engine-sdk 5개 저장소에 AI 기반 PR 자동 리뷰 파이프라인 도입 (영문 리뷰 + 한국어 번역, 심각도 분류)
- App Center에서 Firebase로 배포 환경 전환, GitHub Actions 기반 배포와 릴리스 노트·태그 자동화
