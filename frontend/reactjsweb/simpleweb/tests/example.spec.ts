import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:8080/sandbox.html');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Demo Simple Website/);
});

test('get started link', async ({ page }) => {
  await page.goto('http://localhost:8080/sandbox.html');

  // Click the get started link.
  await page.getByRole('button').click();
  page.on('dialog', async dialog => {
        // Verify type of dialog
        expect(dialog.type()).toContain('alert');   
  })
  // Expects the URL to contain intro.
  //await expect(page).toHaveURL(/.*intro/);
});
