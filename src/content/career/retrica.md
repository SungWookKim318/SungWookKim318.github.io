---
title: "레트리카 (Retrica)"
subtitle: "iOS 그래픽스 / 렌더러 엔지니어"
period: "2024.02 ~ 2024.08"
summary: "Metal node graph 기반 iOS 그래픽스 엔진을 단독 설계·구현하고, Packs 앱의 렌더러를 최적화했습니다."
order: 20
highlights:
  - "Cheetah — Metal 그래픽스 엔진"
  - "Retrica Packs — Renderer 최적화"
links:
  - label: retrica.co
    url: https://retrica.co
---

수천만 다운로드 규모의 카메라 및 사진·영상 편집 애플리케이션입니다.

## Cheetah — Metal 그래픽스 엔진

*2024.03 ~ 2024.08*

Retrica와 Retrica Packs가 공통으로 사용하는 iOS 내부 그래픽스 엔진을 구상부터 설계, 구현까지 단독 담당했습니다.

- Apple Metal용 node graph 기반 렌더링 엔진 설계 및 구현
- 이미지 필터 개발 리딩. Grain, Spinning Blur, 3D LUT(Color Cube) 필터를 Metal로 직접 구현
- Core Image CIFilter와 Metal Performance Shaders를 엔진 노드로 사용할 수 있는 wrapper 각각 구현
- Image / Video decoder 포팅 및 개선, 카메라 기능 연동
- 비디오·이미지 Exporter 개발

**기술** · Swift, Objective-C, Metal, Metal Performance Shaders, Core Image, AVFoundation

## Retrica Packs — Renderer 최적화

*2024.02 ~ 2024.04*

- Packs 내부 Metal renderer 설정 최적화
- Stream-texture 구조 단독 개선
- 출시 후 발생한 그래픽 문제 분석 및 수정

**기술** · Swift, Metal
