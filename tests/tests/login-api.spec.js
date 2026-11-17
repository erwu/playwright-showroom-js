
const { test, expect } = require('@playwright/test');

const loginUrl = 'https://practicetestautomation.com/practice-test-login/';

test('API01 - Login page returns HTTP 200', async ({ request }) => {
  const response = await request.get(loginUrl);

  expect(response.status()).toBe(200);
  expect(response.ok()).toBeTruthy();
});

test('API02 - Login page returns HTML content', async ({ request }) => {
  const response = await request.get(loginUrl);

  const contentType = response.headers()['content-type'];

  expect(contentType).toContain('text/html');
});

test('API03 - Login page contains required form elements', async ({ request }) => {
  const response = await request.get(loginUrl);
  const body = await response.text();

  expect(body).toContain('id="username"');
  expect(body).toContain('id="password"');
  expect(body).toContain('id="submit"');
});
