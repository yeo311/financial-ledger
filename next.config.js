/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const withPwa = require('next-pwa');

const nextConfig = {};

module.exports = withPlugins([
  [
    withPwa,
    {
      pwa: {
        dest: 'public',
      },
    },
  ],
  nextConfig,
]);
