/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:8000/api/:path*', // Ajustez l'URL selon votre configuration Symfony
            },
        ];
    },
};

export default nextConfig;