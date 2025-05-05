import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: true,
    viewport: { width: 1280, height: 800 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
    locale: 'es-ES',
    ignoreHTTPSErrors: true,
    screenshot: 'on',
    video: 'off',
    extraHTTPHeaders: {
      'accept-language': 'es-ES,es;q=0.9',
    },
    launchOptions: {
        args: ['--disable-http2']
    }
  },
  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
      },
    },
  ],
  reporter: 'html',
  timeout: 60000,
  testDir: './tests',
  outputDir: 'test-results',
});
