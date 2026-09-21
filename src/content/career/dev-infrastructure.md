---
title: "개발 인프라 — 정적 분석과 AI 코드 리뷰"
company: "스튜디오씨드코리아 (Studio XID Korea / ProtoPie)"
period: "2024.09 ~ 현재"
summary: "5개 저장소에 정적 분석과 AI 기반 PR 리뷰 파이프라인을 표준화했습니다."
order: 50
stack:
  - "SonarQube"
  - "GitHub Actions"
  - "Firebase"
---

- iOS와 Android에 SonarQube 품질 게이트를 설정하고, 정적 분석에서 확인된 reliability, security, duplication 문제를 후속 PR로 단계적으로 개선
- iOS, Android, engine, renderer, engine-sdk 5개 저장소에 AI 기반 PR 자동 리뷰 파이프라인 도입 (영문 리뷰 + 한국어 번역, 심각도 분류)
- App Center에서 Firebase로 배포 환경 전환, GitHub Actions 기반 배포와 릴리스 노트·태그 자동화
