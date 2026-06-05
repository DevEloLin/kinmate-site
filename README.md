# KinMate 官网

面向海外华人家庭的本地优先健康保险箱官方介绍站。Next.js 14 App Router + Tailwind + next-intl，部署到 Cloudflare Pages / Vercel 都免费。

## 快速跑起来

```bash
cd KinMateSite
npm install         # 或 pnpm install / yarn
npm run dev         # http://localhost:3000，会重定向到 /en
```

切换语言：右上角 🌐 按钮，路由前缀 `/en` ↔ `/zh`。

## 页面清单

英文与中文均可用 `/en` 或 `/zh` 前缀访问。

| 路径 | 用途 |
|---|---|
| `/` | 首页（Landing） |
| `/features` | 功能详解 |
| `/pricing` | 套餐对比（Free / Personal Plus / Family 3 / Family 5）|
| `/byoc` | 自带云盘备份说明 |
| `/referral` | 邀请奖励三层规则 |
| `/download` | 商店徽章下载页 |
| `/about` | 我们是谁 |
| `/contact` | 联系邮箱 |
| `/privacy` | 隐私政策（App Store / Google Play 强制）|
| `/terms` | 服务条款 |
| `/delete-account` | 网页版账号删除入口（Google Play 强制）|
| `/ai-disclaimer` | AI 免责声明 |

## 工程结构

```
KinMateSite/
  app/
    layout.tsx                 # 根 layout（仅 metadata）
    globals.css                # Tailwind 基础 + 长文章排版
    robots.ts                  # SEO robots
    sitemap.ts                 # 双语 sitemap + hreflang
    [locale]/
      layout.tsx               # 语言级 layout（Navbar + Footer + i18n Provider）
      page.tsx                 # /
      features/page.tsx
      pricing/page.tsx
      byoc/page.tsx
      referral/page.tsx
      download/page.tsx
      about/page.tsx
      contact/page.tsx
      privacy/page.tsx
      terms/page.tsx
      delete-account/page.tsx
      ai-disclaimer/page.tsx
      not-found.tsx
  components/
    navbar.tsx
    footer.tsx
    locale-switcher.tsx
    section.tsx
    cta.tsx
  i18n/
    routing.ts                 # locale 路由配置
    request.ts                 # 服务端 messages 加载
    messages/{en,zh}.json      # 所有可见文本
  middleware.ts                # 根路径语言自动选择
  public/
    kinmate-mark.svg
    favicon.ico
  package.json
  next.config.mjs
  tailwind.config.ts
  tsconfig.json
```

## 文案修改

所有用户可见文本都在 `i18n/messages/{en,zh}.json`。改文案不用动代码。
两个 JSON 必须 key 对齐；缺 key 会在 build 时被 next-intl 标红。

## 部署

### Cloudflare Pages（免费）

```bash
npm run build
# 输出在 .next/ + .vercel/ 兼容 Cloudflare adapter
```

Cloudflare Pages 控制台选 "Next.js" 模板，构建命令 `npm run build`，输出目录 `.next`。

### Vercel

直接 import GitHub 仓库即可，零配置。

### 自家 VPS

```bash
npm run build
npm run start  # 默认 0.0.0.0:3000
```

用 nginx 反代到 443 端口。

## 后续优化（V1.1+）

- 加 Open Graph 真实大图（现在仅文本元数据）
- 加 App 截图轮播（首屏 + 功能页）
- 加博客 `/blog/` 子目录用于 SEO 长尾内容
- 接入 Plausible / Umami 做无 Cookie 的访问统计
