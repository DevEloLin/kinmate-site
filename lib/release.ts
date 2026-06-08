import releaseJson from '@/data/release.json'

export interface ReleaseInfo {
  baseVersion: string
  buildNumber: number
  appVersion: string
  releaseTag: string
  releaseUrl: string
  apkDownloadUrl: string
}

const fallbackReleaseInfo: ReleaseInfo = {
  baseVersion: '1.0.0',
  buildNumber: 1,
  appVersion: '1.0.0+1',
  releaseTag: 'android-v1.0.0-b1',
  releaseUrl: '',
  apkDownloadUrl: '',
}

// CI 在每次发版时把 release.json 写到 data/，schema 用的是 `version`（与 pubspec 语义
// 版本字段名一致）。本接口对外暴露 `baseVersion`：这里做一次字段重命名，让 CI 写入的
// 版本自动流到下载页，避免页面永远显示 fallback 的 1.0.0。
type RawRelease = Partial<ReleaseInfo> & { version?: string }
const raw = releaseJson as RawRelease

export const latestRelease: ReleaseInfo = {
  ...fallbackReleaseInfo,
  ...raw,
  baseVersion: raw.baseVersion ?? raw.version ?? fallbackReleaseInfo.baseVersion,
}
