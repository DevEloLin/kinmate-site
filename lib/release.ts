import releaseJson from '@/data/release.json'

/**
 * 单个 build 的下载坐标。prod 和 beta 各自一份。
 */
export interface ReleaseInfo {
  baseVersion: string
  buildNumber: number
  appVersion: string
  releaseTag: string
  releaseUrl: string
  apkDownloadUrl: string
}

/**
 * Beta 入口。`available=false` 时下载页隐藏整个 Beta badge。
 * 每次 CI 跑 staging build 都会写 `beta`，把这个对象更新到最新的 prerelease。
 */
export interface BetaReleaseInfo extends ReleaseInfo {
  available: boolean
}

/**
 * 顶层 metadata。`prod.status`：
 *   - `in_review` —— 商店审核中 / 未上架，下载页对 APK 也显示 "Under review"，
 *     不暴露下载链接（隐私 / 防误下）；
 *   - `ready` —— prod 已 GA，APK badge 可点。
 */
export interface ReleaseMetadata {
  prod: ReleaseInfo & { status: 'in_review' | 'ready' }
  beta: BetaReleaseInfo
}

const fallbackProd: ReleaseInfo & { status: 'in_review' | 'ready' } = {
  baseVersion: '1.0.0',
  buildNumber: 1,
  appVersion: '1.0.0+1',
  releaseTag: 'v1.0.0',
  releaseUrl: '',
  apkDownloadUrl: '',
  status: 'in_review',
}

const fallbackBeta: BetaReleaseInfo = {
  available: false,
  baseVersion: '1.0.0',
  buildNumber: 0,
  appVersion: '1.0.0+0',
  releaseTag: '',
  releaseUrl: '',
  apkDownloadUrl: '',
}

// `data/release.json` 由 CI 写。schema v2 长这样：
//   { prod: {...}, beta: {...} }
// 但为兼容 v1（早期 flat schema，CI 还没改完成时仍可能写 flat），这里也接：
//   { version, buildNumber, appVersion, releaseTag, releaseUrl, apkDownloadUrl }
// 解析时若没有 `prod` 字段，就把根级字段当 prod 用。
type RawRelease = {
  // v2 fields
  prod?: Partial<ReleaseInfo> & { status?: string; version?: string }
  beta?: Partial<BetaReleaseInfo> & { version?: string }
  // v1 fields（fallback parse）
  version?: string
  buildNumber?: number
  appVersion?: string
  releaseTag?: string
  releaseUrl?: string
  apkDownloadUrl?: string
}
const raw = releaseJson as RawRelease

function normalizeStatus(s?: string): 'in_review' | 'ready' {
  return s === 'ready' ? 'ready' : 'in_review'
}

function parseRelease(
  data: Partial<ReleaseInfo> & { version?: string },
  fallback: ReleaseInfo,
): ReleaseInfo {
  return {
    ...fallback,
    ...data,
    baseVersion: data.baseVersion ?? data.version ?? fallback.baseVersion,
  }
}

const prodSource: Partial<ReleaseInfo> & { status?: string; version?: string } =
  raw.prod ?? {
    version: raw.version,
    buildNumber: raw.buildNumber,
    appVersion: raw.appVersion,
    releaseTag: raw.releaseTag,
    releaseUrl: raw.releaseUrl,
    apkDownloadUrl: raw.apkDownloadUrl,
  }

export const metadata: ReleaseMetadata = {
  prod: {
    ...parseRelease(prodSource, fallbackProd),
    status: normalizeStatus(prodSource.status),
  },
  beta: {
    ...parseRelease(raw.beta ?? {}, fallbackBeta),
    available: raw.beta?.available ?? false,
  },
}

/**
 * 向后兼容旧 import：现在仍然 export `latestRelease` 指向 prod，避免老代码改名。
 */
export const latestRelease: ReleaseInfo = metadata.prod
