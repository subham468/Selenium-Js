const { Builder, By } = require('selenium-webdriver');
const driver = new Builder().forBrowser('firefox').build();

async function openWebsites(params) {
	try {
		await driver.get('http://gopakhi.epizy.com/login.php');
		await driver.findElement(By.name('email')).sendKeys('example@gmail.com');
		await driver.findElement(By.name('password')).sendKeys('example');
		await driver.findElement(By.name('send')).click();
	} catch (error) {
		console.log('====================================');
		console.log(error);
		console.log('====================================');
	}
}

openWebsites();
