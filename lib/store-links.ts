// 应用商店链接（上线前必须配置以下环境变量，否则按钮回退为 disabled）。
//
// 部署设置：
//   NEXT_PUBLIC_APP_STORE_URL   — 必须，iOS App Store URL（含国际/区域 URL 选择）
//   NEXT_PUBLIC_GOOGLE_PLAY_URL — 必须，Google Play URL
//
// 未配置时按钮按 disabled 渲染（href 为空 + aria-disabled，避免点击发生跳"#"）。

/**
 * 获取 iOS App Store URL（未配置返回 null）。
 */
export function getAppStoreUrl(): string | null {
  const url = process.env.NEXT_PUBLIC_APP_STORE_URL
  return url && url.length > 0 ? url : null
}

/**
 * 获取 Google Play URL（未配置返回 null）。
 */
export function getGooglePlayUrl(): string | null {
  const url = process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL
  return url && url.length > 0 ? url : null
}
