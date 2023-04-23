import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  // await page.goto('https://playwright.dev/');
  await page.goto('http://localhost:8081/#/login')
  // await page.goto('https://github.com/ChangChiao?tab=repositories')
  // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/Playwright/);
  await expect(page.locator('#title')).toBeVisible();
});


