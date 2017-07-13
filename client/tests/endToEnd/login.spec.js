import webdriver from 'selenium-webdriver';
import chrome from 'chromedriver';

const By = webdriver.By;

const driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

describe('EndToEnd test for login form', function () {
  this.timeout(50000);

  before((done) => {
    driver.navigate().to('http://localhost:8080')
      .then(() => done());
  });

  it('logs in successfully', (done) => {
    driver.findElement(By.xpath('//*[@id="app"]/div/div/form/div[1]/div/div/div/input')).sendKeys('admin@live.com');
    driver.findElement(By.xpath('//*[@id="app"]/div/div/form/div[2]/div/div/div/input')).sendKeys('admin');
    driver.findElement(By.xpath('//*[@id="app"]/div/div/form/div[3]/div/input')).click()
      .then(() => done());
  });

  // after((done) => {
  //   driver.quit()
  //     .then(() => done());
  // });
});
