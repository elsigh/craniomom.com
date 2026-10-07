import { withBotId } from 'botid/next/config'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  cacheComponents: true,
  partialPrefetching: true,
}

export default withBotId(nextConfig)
