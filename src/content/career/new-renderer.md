---
title: "New Renderer — Rust / wgpu / WASM"
company: "스튜디오씨드코리아 (Studio XID Korea / ProtoPie)"
period: "2025.11 ~ 현재"
summary: "DOM 기반 Web 렌더러를 GPU 렌더러로 전환하는 프로젝트를 계획 수립부터 실행까지 주도했습니다."
order: 10
stack:
  - "Rust"
  - "wgpu"
  - "WebGPU"
  - "WebGL2"
  - "WASM"
  - "TypeScript"
  - "Kotlin Multiplatform"
---

DOM 기반 Web 렌더러를 GPU 렌더러로 전환하는 프로젝트를 초기 계획과 마일스톤 수립부터 실행까지 주도했습니다.

- KMM 코어 엔진, 브리지 SDK, Rust 렌더러 3개 저장소를 연결하는 전체 아키텍처 설계
- scene graph, vector path rasterization, batching, GPU backend, WASM encoder로 이어지는 stencil clipping과 geometric mask 합성 기능 구현
- KMM/JS 엔진과 Rust/WASM 렌더러 사이의 명령 변환 브리지(SDK) 개발. JSON reference path와 binary fast path 두 전송 경로의 결과를 비교하는 parity 검증 체계 구축
- SVG rasterizer 개발
- WebGL2 fallback 적용 방향과 플랫폼 제약 검토, 관련 구현 리뷰
- 렌더러 개발 원칙과 구조를 RFC 3건으로 문서화하고 코드 리뷰로 팀에 전수
