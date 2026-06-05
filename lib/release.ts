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

export const latestRelease: ReleaseInfo = {
  ...fallbackReleaseInfo,
  ...(releaseJson as Partial<ReleaseInfo>),
}
