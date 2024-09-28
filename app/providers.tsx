'use client'

import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider, theme } from 'antd';
import type { ThemeConfig } from 'antd';
import { SessionProvider } from "next-auth/react"

const config: ThemeConfig = {
  // Use dark algorithm
  algorithm: theme.darkAlgorithm,
  token: {
  },
};

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <AntdRegistry>
        <ConfigProvider
          theme={config}
        >
          {children}
        </ConfigProvider>
      </AntdRegistry>
    </SessionProvider>
  )
}


