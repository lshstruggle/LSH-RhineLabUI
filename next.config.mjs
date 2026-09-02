/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // 开发模式下注释掉 output: 'export' 以支持 API 路由
  // 部署静态站点时再取消注释（API 路由在静态导出下不可用）
  // output: 'export',
  // basePath: '/LSH-portfolio',
  // assetPrefix: '/LSH-portfolio/',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
