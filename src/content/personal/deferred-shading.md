---
title: "Deferred shading with shadow"
subtitle: "OpenGL practice"
period: "2018.11 ~ 2019.02"
platform: "x86, AMD64 (GLFW 기반)"
summary: "Deferred shading에 point 광원과 shadow cubemap, multi-pass 렌더링을 구현했습니다."
order: 20
stack:
  - "OpenGL (glew)"
  - "GLFW"
  - "assimp"
links:
  - label: Google Drive
    url: https://drive.google.com/drive/folders/1lz_esEzPRcJYLDnAwlca6w4H6BUgnjbk?usp=share_link
media:
  - src: /media/personal/deferred-shading/01.webp
    kind: image
    width: 1282
    height: 752
  - src: /media/personal/deferred-shading/02.webp
    kind: image
    width: 1282
    height: 752
  - src: /media/personal/deferred-shading/03.webp
    kind: image
    width: 1282
    height: 752
  - src: /media/personal/deferred-shading/04.webp
    kind: image
    width: 1282
    height: 752
  - src: /media/personal/deferred-shading/05.webp
    kind: image
    width: 1282
    height: 752
  - src: /media/personal/deferred-shading/06.webp
    kind: image
    width: 1282
    height: 752
  - src: /media/personal/deferred-shading/07.webp
    kind: image
    width: 1282
    height: 752
  - src: /media/personal/deferred-shading/08.mp4
    kind: loop
    width: 1280
    height: 720
    poster: /media/personal/deferred-shading/08-poster.jpg
    caption: Deferred Shading
  - src: /media/personal/deferred-shading/09.mp4
    kind: loop
    width: 1280
    height: 720
    poster: /media/personal/deferred-shading/09-poster.jpg
    caption: Deferred Shading
---

OpenGL tutorial의 예제 중에서 Deferred shading(지연 처리 쉐이딩)을 구현하고 거기에 point 광원을 구현한 후 큐브맵 그림자를 구현하고, multi-pass 렌더링을 구현하여 다중 광원과 그림자를 구현한 프로젝트입니다. 성만규 교수님의 조언과 검토를 받으며 구현하였습니다.
