// 结构化数据（JSON-LD）——SEO / GEO（生成式引擎）/ AEO（答案引擎）三合一。
//
// 渲染到每个页面 <body>：
//   - Organization        品牌实体（AI / 搜索引擎识别「KinMate 是谁」）
//   - WebSite             站点实体（站内搜索潜力 + 双语）
//   - MobileApplication   App 实体 + 套餐 offers（ProductivityApplication，不
//                          标记为 HealthApplication 以避免商店医疗类强审）
//   - FAQPage             常见问答（AEO：答案框 / 语音 / AI 概览直接引用）
//
// 静态导出安全：纯 server component，输出 <script type="application/ld+json">。
// FAQ 文案双语内置，按 locale 选择——这些 Q&A 也是 GEO/AEO 的「事实答案源」。

const SITE = 'https://develolin.github.io/kinmate-site'

type Faq = { q: string; a: string }

const FAQ_EN: Faq[] = [
  {
    q: 'What is KinMate?',
    a: 'KinMate is a local-first family record organizer. It stores documents, daily reminders and tracking entries for you, your family members and pets, explains uploaded documents with bilingual (English / 中文) AI, and lets you back up to your own cloud (iCloud, Google Drive or OneDrive).',
  },
  {
    q: 'Is KinMate free?',
    a: 'Yes. KinMate has a free plan (1 pet, basic records and reminders). Paid plans add more managed profiles, family seats, higher AI quota and pet slots: Personal Plus and Family 3 / 5 monthly or yearly subscriptions, plus a Family 8 lifetime one-time purchase ($199.99). New users get a 60-day free trial.',
  },
  {
    q: 'Who owns my data?',
    a: 'You do. KinMate is private by design and local-first: your records live on your device and, if you enable backup, in your own cloud account (bring-your-own-cloud). KinMate does not sell data and uses no third-party analytics or crash SDKs.',
  },
  {
    q: 'Can AI help me read uploaded documents?',
    a: 'Yes. KinMate reads documents you upload (image or PDF) and gives a plain-language bilingual explanation of key values and notable items. It is for understanding and reference only and is not medical advice — always consult a licensed healthcare professional.',
  },
  {
    q: 'Does KinMate work for older family members?',
    a: 'Yes. You can create managed profiles for older parents, children and other family members, share profiles within a family, run safety check-ins and gentle reminders, and invite family members — all in one place.',
  },
  {
    q: 'Can I track my pet too?',
    a: 'Yes. KinMate manages pet profiles, vaccination and care records, feeding and daily reminders, and you can share a personal pet into the family pool so everyone helps look after it.',
  },
  {
    q: 'Which cloud backups are supported?',
    a: 'Bring your own cloud: iCloud Drive, Google Drive and OneDrive. Your encrypted reports and files sync to the cloud account you choose; switch providers anytime.',
  },
  {
    q: 'Does KinMate work offline?',
    a: 'Yes. KinMate is local-first, so adding records, reminders and profiles works offline; cloud backup and AI explanation sync when you are back online.',
  },
  {
    q: 'Can I delete my account and data?',
    a: 'Yes. You can permanently delete your account and associated cloud data from inside the app at any time.',
  },
  {
    q: 'What platforms does KinMate support?',
    a: 'KinMate is available on iOS (iPhone / iPad) and Android. Sign in with email or Google.',
  },
]

const FAQ_ZH: Faq[] = [
  {
    q: 'KinMate 是什么？',
    a: 'KinMate 是一款「本地优先」的家庭档案整理工具。它为你、家人和宠物保存文件、日常提醒和指标记录，用中英双语 AI 帮你读懂上传的文件，并支持备份到你自己的网盘（iCloud / Google Drive / OneDrive）。',
  },
  {
    q: 'KinMate 免费吗？',
    a: '有免费版（1 只宠物、基础档案与提醒）。付费档增加托管档案、家庭席位、AI 配额和宠物位：Personal Plus 与 Family 3 / 5 按月或按年订阅，另有 Family 8 永久买断（一次性 ￥199.99）。新用户享 60 天免费试用。',
  },
  {
    q: '我的数据归谁所有？',
    a: '归你。KinMate 隐私优先、本地优先：数据存在你的设备上；开启备份后存进你自己的网盘账户（自带网盘）。KinMate 不出售数据，不接入任何第三方分析或崩溃 SDK。',
  },
  {
    q: 'AI 能帮我读懂上传的文件吗？',
    a: '能。KinMate 可读取你上传的文件（图片或 PDF），用通俗的中英双语解释各项关键值与值得注意的项目。仅用于理解与查阅参考，不构成医疗建议——请务必咨询持证医生。',
  },
  {
    q: 'KinMate 适合管理长辈和家人吗？',
    a: '适合。你可以为父母、孩子等家人建立托管档案，在家庭内共享档案，进行平安打卡与温和提醒，并邀请家人——所有家庭信息事务集中在一处。',
  },
  {
    q: '可以管理宠物吗？',
    a: '可以。KinMate 管理宠物档案、疫苗与护理记录、喂养和日常提醒，还能把个人宠物共享进家庭，让全家一起照看。',
  },
  {
    q: '支持哪些网盘备份？',
    a: '自带网盘：iCloud Drive、Google Drive 和 OneDrive。加密的报告和文件同步到你选择的网盘账户，可随时切换。',
  },
  {
    q: 'KinMate 能离线使用吗？',
    a: '能。KinMate 本地优先，添加档案、提醒和资料离线即可用；网盘备份与 AI 解读会在联网后同步。',
  },
  {
    q: '可以注销账户并删除数据吗？',
    a: '可以。你随时能在 App 内永久注销账户并删除相关云端数据。',
  },
  {
    q: 'KinMate 支持哪些平台？',
    a: 'KinMate 支持 iOS（iPhone / iPad）和 Android，可用邮箱或 Google 登录。',
  },
]

export function JsonLd({ locale }: { locale: string }) {
  const isZh = locale === 'zh'
  const url = `${SITE}/${isZh ? 'zh' : 'en'}`
  const faqs = isZh ? FAQ_ZH : FAQ_EN

  const description = isZh
    ? 'KinMate 是本地优先的家庭档案整理工具：为自己、家人和宠物保存文件、日常提醒与指标记录，中英双语 AI 帮你读懂上传的文件，自带网盘备份（iCloud / Google Drive / OneDrive）。隐私优先，数据归你。'
    : 'KinMate is a local-first family record organizer: keep documents, daily reminders and tracking entries for yourself, family and pets, get bilingual AI explanations of uploaded files, and back up to your own cloud (iCloud / Google Drive / OneDrive). Private by design.'

  const graph = [
    {
      '@type': 'Organization',
      '@id': `${SITE}/#org`,
      name: 'KinMate',
      url: SITE,
      logo: `${SITE}/icon-512.png`,
      brand: 'KinMate',
      founder: { '@type': 'Organization', name: 'AppLabs' },
      sameAs: [] as string[],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE}/#website`,
      name: 'KinMate',
      url: SITE,
      inLanguage: isZh ? 'zh-CN' : 'en',
      publisher: { '@id': `${SITE}/#org` },
      description,
    },
    {
      '@type': 'MobileApplication',
      '@id': `${SITE}/#app`,
      name: 'KinMate',
      url,
      operatingSystem: 'iOS, Android',
      applicationCategory: 'ProductivityApplication',
      inLanguage: ['en', 'zh-CN'],
      description,
      publisher: { '@id': `${SITE}/#org` },
      featureList: isZh
        ? '家庭档案整理；上传文件 AI 解读；日常提醒与平安打卡；家人关怀；宠物记录；自带网盘备份；本地优先与隐私保护'
        : 'Family records organization; AI explanation of uploaded files; daily reminders & safety check-ins; family member care; pet records; bring-your-own-cloud backup; local-first privacy',
      offers: [
        {
          '@type': 'Offer',
          name: isZh ? '免费版' : 'Free',
          price: '0',
          priceCurrency: 'USD',
        },
        {
          '@type': 'Offer',
          name: isZh ? 'Family 8 永久买断' : 'Family 8 (Lifetime)',
          price: '199.99',
          priceCurrency: 'USD',
          category: 'Lifetime one-time purchase',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      inLanguage: isZh ? 'zh-CN' : 'en',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ]

  const json = { '@context': 'https://schema.org', '@graph': graph }

  return (
    <script
      type="application/ld+json"
      // 结构化数据由本组件可信生成，非用户输入。
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  )
}
