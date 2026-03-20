export const PLUGIN_ID = "paperclipai.work-board";
export const PLUGIN_VERSION = "0.1.0";
export const PLUGIN_DISPLAY_NAME = "Work Board";
export const PAGE_ROUTE = "work-board";

export const DEFAULT_COMPANY_ID = "11d0d62d-c2c5-439c-81ee-5d61ac178a55";

export const SLOT_IDS = {
  page: "work-board-page",
  sidebar: "work-board-sidebar-link",
  dashboardWidget: "work-board-dashboard-widget",
} as const;

export const EXPORT_NAMES = {
  page: "WorkBoardPage",
  sidebar: "WorkBoardSidebarLink",
  dashboardWidget: "WorkBoardDashboardWidget",
} as const;

export type WorkstreamDefinition = {
  name: string;
  description: string;
  keywords: string[];
};

export const WORKSTREAMS: readonly WorkstreamDefinition[] = [
  {
    name: "포트폴리오",
    description: "보유 종목, 전략 반영, watchlist/ledger 정합성",
    keywords: [
      "포트폴리오",
      "portfolio",
      "watchlist",
      "watch list",
      "strategy",
      "전략",
      "리밸런싱",
      "매수",
      "매도",
      "holding",
      "ledger",
      "장부",
      "sl/tp",
      "position",
    ],
  },
  {
    name: "주간활동",
    description: "주간 회고, 리포트, 개선 액션과 운영 점검",
    keywords: [
      "주간",
      "weekly",
      "회고",
      "review",
      "retrospective",
      "리포트",
      "report",
      "publish",
      "발행",
      "blog",
      "브리프",
      "improvement",
      "개선",
    ],
  },
  {
    name: "데이터수집",
    description: "시장 데이터, healthcheck, routine, crawler/collector",
    keywords: [
      "데이터",
      "data",
      "수집",
      "collect",
      "collector",
      "healthcheck",
      "health check",
      "check_",
      "morning_routine",
      "routine",
      "crawl",
      "scrape",
      "macro",
      "nps",
      "whale",
      "seohak",
      "memory",
      "signal",
      "시그널",
    ],
  },
] as const;

export const ISSUE_STATUS_LABELS = {
  backlog: "Backlog",
  todo: "Todo",
  in_progress: "In Progress",
  in_review: "In Review",
  blocked: "Blocked",
  done: "Done",
  cancelled: "Cancelled",
} as const;

export const PRIORITY_WEIGHTS = {
  critical: 4,
  high: 3,
  medium: 2,
  low: 1,
} as const;
