// 边缘中间件：把根路径 / 重定向到带 locale 前缀的路径，
// 同时根据 Accept-Language 与已有 cookie 选语言。

import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

export default createMiddleware(routing)

export const config = {
  // 跳过 api / _next / 资源文件
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
