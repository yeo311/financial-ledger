import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '커플가계부',
    short_name: '커플가계부',
    start_url: '/',
    display: 'standalone',
    background_color: '#fafafa',
    theme_color: '#fff',
    orientation: 'portrait',
    icons: [
      {
        src: 'assets/icons/favicon.ico',
        sizes: '64x64 32x32 24x24 16x16',
        type: 'image/x-icon',
      },
      {
        src: 'assets/icons/icon-72x72.png',
        sizes: '72x72',
        type: 'image/png',
      },
      {
        src: 'assets/icons/icon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        src: 'assets/icons/icon-128x128.png',
        sizes: '128x128',
        type: 'image/png',
      },
      {
        src: 'assets/icons/icon-144x144.png',
        sizes: '144x144',
        type: 'image/png',
      },
      {
        src: 'assets/icons/icon-152x152.png',
        sizes: '152x152',
        type: 'image/png',
      },
      {
        src: 'assets/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'assets/icons/icon-384x384.png',
        sizes: '284x284',
        type: 'image/png',
      },
      {
        src: 'assets/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
