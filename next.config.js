/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        domains: [
            "images.pexels.com",
            "www.sidechef.com",
            "rainbowplantlife.com",
            "i0.wp.com",
            "cdn.sanity.io"
        ]
    }
}

module.exports = nextConfig
