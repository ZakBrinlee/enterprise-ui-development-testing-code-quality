import { test, expect } from '@playwright/test';

test('it has an input field', async ({ page }) => {
  await page.goto('/pokemon-search');

  const searchInput = page.getByPlaceholder('Search Pokémon…');
  await searchInput.fill('Pika');

  const link = page.getByRole('link', { name: 'Pikachu' });

  await link.click();

  expect(page.url()).toContain('/25');
})

test('test', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Pokémon Search' }).click();
  await page.getByTestId('search').click();
  await page.getByTestId('search').fill('Bulba');
  const heading = page.getByRole('heading', { name: 'Bulbasaur' });

  // Set and save snapshot
  await expect(heading).toHaveScreenshot('heading.png', { maxDiffPixels: 100 });
  await page.getByRole('cell', { name: 'Pokédex Number' }).click();
  const label = page.getByTestId('search-label');
  await expect(await label.textContent()).toMatchSnapshot();
});
