import { expect, test } from '@playwright/test';

test('home page has expected h2', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('h1')).toBeHidden();
	await expect(page.locator('h2')).toBeVisible();
});

test('home page contains links to all pages', async ({ page }) => {
	await page.goto('/');
	const links = await page.locator('a.link').count();
	expect(links).toBe(6);

	// Check that each link goes to the correct page

	// home
	await expect(page.locator('a.link[href="/"]')).toBeVisible();
	// Expect it to have the text 'Home'
	await expect(page.locator('a.link[href="/"]')).toHaveText('Home');

	// services
	await expect(page.locator('a.link[href="/services"]')).toBeVisible();
	// Expect it to have the text 'Services'
	await expect(page.locator('a.link[href="/services"]')).toHaveText('Services');

	// products
	await expect(page.locator('a.link[href="/products"]')).toBeVisible();
	// Expect it to have the text 'Products'
	await expect(page.locator('a.link[href="/products"]')).toHaveText('Products');

	// photos
	await expect(page.locator('a.link[href="/photos"]')).toBeVisible();
	// Expect it to have the text 'Photos'
	await expect(page.locator('a.link[href="/photos"]')).toHaveText('Photos');

	// why us
	await expect(page.locator('a.link[href="/about"]')).toBeVisible();
	// Expect it to have the text 'Why Us'
	await expect(page.locator('a.link[href="/about"]')).toHaveText('Why Us');

	// contact
	await expect(page.locator('a.link[href="/contact"]')).toBeVisible();
	// Expect it to have the text 'Contact'
	await expect(page.locator('a.link[href="/contact"]')).toHaveText('Contact');
});

test('home page has contact info', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('#contact')).toBeVisible();
	await expect(page.locator('#phone')).toBeVisible();
	await expect(page.locator('#email')).toBeVisible();

	await expect(page.locator('#phone')).not.toBeEmpty();
	await expect(page.locator('#email')).not.toBeEmpty();
});
