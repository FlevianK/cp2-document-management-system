import webdriver from 'selenium-webdriver';
import chrome from 'chromedriver';

const By = webdriver.By;

const driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

describe('EndToEnd test for register form', function () {
  this.timeout(50000);

  before((done) => {
    driver.navigate().to('http://localhost:8080/users/create')
      .then(() => done());
  });

  it('register successfully', (done) => {
    driver.findElement(By.xpath('//*[@id="app"]/div/div/form/div[1]/div/div/div/input')).sendKeys('mercy');
    driver.findElement(By.xpath('//*[@id="app"]/div/div/form/div[2]/div/div/div/input')).sendKeys('mushai');
    driver.findElement(By.xpath('//*[@id="app"]/div/div/form/div[3]/div/div/div/input')).sendKeys('mercy');
    driver.findElement(By.xpath('//*[@id="app"]/div/div/form/div[4]/div/div/div/input')).sendKeys('kan@gmail.com');
    driver.findElement(By.xpath('//*[@id="app"]/div/div/form/div[5]/div/div/div/input')).sendKeys('Kannn@T4');
    driver.findElement(By.xpath('//*[@id="app"]/div/div/form/div[6]/div/input')).click()
      .then(() => done());
  });

  after((done) => {
    driver.quit()
      .then(() => done());
  });
});
