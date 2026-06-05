// Tailwind 配置。色板与 App 同源（墨绿 + 珊瑚橙 + 奶白），保证营销页与 App 视觉一致。

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f1f7f4',
          100: '#dbece4',
          200: '#b8dcd0',    // 新增：浅色边框
          500: '#2f6b5c',    // 主色，与 App 一致
          600: '#28594d',
          700: '#1e4a3f',
          800: '#163830',    // 新增：深色渐变
          900: '#0f2d25',
        },
        accent: {
          400: '#e8917a',    // 新增：浅色变体
          500: '#e07a5f',    // 珊瑚橙 CTA
          600: '#c66a51',
          700: '#b55a43',    // 新增：深色变体
        },
        cream: '#faf7f2',
        ink: {
          900: '#1f2937',
          700: '#374151',
          600: '#4b5563',
          500: '#6b7280',
          300: '#d1d5db',
          200: '#e5e7eb',
          100: '#f3f4f6',
          50: '#f9fafb',
        },
        // App 真实配色（手机 mockup 专用，确保宣传图与 KinMate App 完全一致）
        app: {
          primary: '#15803D',    // 自然绿（App 主色）
          secondary: '#059669',  // 翠绿
          accent: '#D97706',     // 暖橙 CTA
          bg: '#F0FDF4',         // 浅绿背景
          surface: '#FFFFFF',
          ink: '#0F172A',
          muted: '#64748B',
          border: '#E2EFE7',
          med: '#3B82F6',        // 服药蓝
          pet: '#F97316',        // 宠物橙
          health: '#22C55E',     // 健康绿
          care: '#EAB308',       // 关怀黄
        },
      },
      keyframes: {
        floaty: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'gradient-pan': {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        'gradient-pan': 'gradient-pan 12s ease infinite',
      },
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"PingFang SC"',
          '"Hiragino Sans"',
          '"Microsoft YaHei"',
          'sans-serif',
        ],
      },
      maxWidth: {
        prose: '70ch',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#1f2937',
          },
        },
      },
    },
  },
  plugins: [],
}

export default config
