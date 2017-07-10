import webdriver from 'selenium-webdriver';
import chrome from 'chromedriver';

const By = webdriver.By;

const driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

describe('login form', function () {
  // e2e tests are too slow for default Mocha timeout
  this.timeout(10000);

  before(function (done) {
    driver.navigate().to('http://localhost:8081')
      .then(() => done())
  });

  it('logs in successfully', function (done) {
    driver.findElement(By.xpath('//*[@id="app"]/div/div/div[2]/div/form/div[1]/div/input')).sendKeys('admin@live.com');
    driver.findElement(By.xpath('//*[@id="app"]/div/div/div[2]/div/form/div[2]/div/input')).sendKeys('admin');
    driver.findElement(By.xpath('//*[@id="app"]/div/div/div[2]/div/form/input')).click()
      .then(() => done());
  });

  after(function (done) {
    driver.quit()
      .then(() => done())
  });
});