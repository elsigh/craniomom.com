import { withBotId } from 'botid/next/config'

/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheComponents: true,
}

export default withBotId(nextConfig)
