import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    timeout: 60000,
    reporter: 'html',
    outputDir: 'test-results',
    use: {
        headless: true,
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
        video: 'off',
        screenshot: 'on',
        launchOptions: {
            args: ['--disable-http2']
        }
    },
    projects: [
        {
            name: 'chrome',
            use: {
                browserName: 'chromium',
            },
        },
        // {
        //     name: 'firefox',
        //     use: {
        //         browserName: 'firefox',
        //     },
        // }
    ],
});