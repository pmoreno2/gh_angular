// e2e/selenium.test.js
const { driver, By, until } = require('./selenium.config');

describe('RickAndMorty App', () => {
  beforeAll(async () => {
    await driver.get('http://localhost:4200');
  });

  afterAll(async () => {
    await driver.quit();
  });

  it('should have the correct title', async () => {
    const title = await driver.getTitle();
    expect(title).toBe('RickAndMorty');
  });

  it('should display the character list', async () => {
    const characterList = await driver.findElement(By.css('app-character-list'));
    expect(characterList).not.toBeNull();
  });

  it('should navigate to the next page', async () => {
    const nextButton = await driver.findElement(By.css('.pagination button:last-child'));
    await nextButton.click();
    await driver.wait(until.urlContains('page=2'), 5000);
    const url = await driver.getCurrentUrl();
    expect(url).toContain('page=2');
  });
});