---
title: "AI Agent Extension PoC"
company: "스튜디오씨드코리아 (Studio XID Korea / ProtoPie)"
period: "2026.04"
summary: "AI 에이전트가 프로토타입을 직접 생성하고 수정하는 구조를 제안해 단독으로 구현했습니다."
order: 30
stack:
  - "TypeScript"
  - "VS Code Extension"
  - "MCP"
  - "WASM"
  - "OpenAI Apps SDK"
---

AI 에이전트가 프로토타입을 직접 생성하고 수정하는 방식을 제안하고, 아키텍처와 단계별 로드맵 수립부터 구현까지 단독 진행했습니다.

- VS Code Extension (webview wrapper, CSP 적용, 패널) 개발
- MCP 서버 개발로 Claude Code, Codex 등 복수 에이전트가 WASM 렌더러를 제어하도록 연동
- 렌더러를 수정하지 않고 명령만 전달하도록 경계 분리. 같은 구조를 ChatGPT 앱(OpenAI Apps SDK)으로 이식
