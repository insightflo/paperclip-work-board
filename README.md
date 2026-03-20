# Work Board

업무 영역 기준의 주간 칸반 보드 플러그인.

현재 설정된 3개 영역:

- 포트폴리오: `9c8eaeef-7131-471b-a722-887512e9529d`
- 주간활동: `217735b3-9b01-46cc-8b83-53efbb0c56e8`
- 데이터수집: `ea84f697-0c2a-4c36-9916-2c1ea965300e`

동작 방식:

- 현재 회사 컨텍스트의 이슈를 읽는다.
- `projectId` 또는 `goalId`가 위 영역 ID와 일치하면 그 영역으로 직접 매핑한다.
- 직접 매핑이 없으면 제목/설명 키워드로 보조 분류한다.
- 열린 이슈는 항상 보여주고, `done` 이슈는 이번 주(KST) 완료분만 보여준다.

UI surfaces:

- `page` route: `/:companyPrefix/work-board`
- `sidebar` link
- `dashboardWidget` summary

## Development

```bash
pnpm install
pnpm dev            # watch builds
pnpm dev:ui         # local dev server with hot-reload events
pnpm test
```



## Install Into Paperclip

```bash
curl -X POST http://127.0.0.1:3100/api/plugins/install \
  -H "Content-Type: application/json" \
  -d '{"packageName":"/Users/kwak/Projects/ai/paperclip/packages/plugins/work-board","isLocalPath":true}'
```

## Build Options

- `pnpm build` uses esbuild presets from `@paperclipai/plugin-sdk/bundlers`.
- `pnpm build:rollup` uses rollup presets from the same SDK.
