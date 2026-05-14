import { test, expect } from '@playwright/test';

test('homepage loads with correct title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/agendallena/);
});

test('homepage shows primary CTA', async ({ page }) => {
  await page.goto('/');
  const cta = page.getByRole('link', { name: /empezar gratis/i }).first();
  await expect(cta).toBeVisible();
});

test('vertical page loads', async ({ page }) => {
  await page.goto('/dentistas');
  await expect(page).toHaveTitle(/agendallena/);
  await expect(page.getByRole('main')).toBeVisible();
});

test('soporte page loads', async ({ page }) => {
  await page.goto('/soporte');
  await expect(page).toHaveTitle(/agendallena/);
});
