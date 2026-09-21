---
title: "Cheetah — Metal 그래픽스 엔진"
company: "레트리카 (Retrica)"
period: "2024.03 ~ 2024.08"
summary: "Retrica와 Retrica Packs가 공통으로 쓰는 node graph 기반 iOS 그래픽스 엔진을 단독 설계·구현했습니다."
order: 60
stack:
  - "Swift"
  - "Objective-C"
  - "Metal"
  - "Metal Performance Shaders"
  - "Core Image"
  - "AVFoundation"
---

Retrica와 Retrica Packs가 공통으로 사용하는 iOS 내부 그래픽스 엔진을 구상부터 설계, 구현까지 단독 담당했습니다.

- Apple Metal용 node graph 기반 렌더링 엔진 설계 및 구현
- 이미지 필터 개발 리딩. Grain, Spinning Blur, 3D LUT(Color Cube) 필터를 Metal로 직접 구현
- Core Image CIFilter와 Metal Performance Shaders를 엔진 노드로 사용할 수 있는 wrapper 각각 구현
- Image / Video decoder 포팅 및 개선, 카메라 기능 연동
- 비디오·이미지 Exporter 개발
