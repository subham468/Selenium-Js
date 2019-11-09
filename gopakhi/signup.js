const {
	Builder,
	By
} = require('selenium-webdriver');
const driver = new Builder().forBrowser('firefox').build();

async function openWebsites(params) {
	try {
		await driver.get('http://gopakhi.epizy.com/form.php');
		await driver.findElement(By.name('name')).sendKeys('Example');
		await driver.findElement(By.name('email')).sendKeys('example');
		await driver.findElement(By.name('contact')).sendKeys('9874561230');
		await driver.findElement(By.name('gender')).sendKeys('Male');
		await driver.findElement(By.name('nationality')).sendKeys('India');
		await driver.findElement(By.name('password')).sendKeys('example@P123');
		// await driver.findElement(By.xpath("//input[@name='dob']").sendKeys("01/01/1996"));
		await driver.findElement(By.xpath("/html/body/div[1]/div[3]/form/div[7]/input").sendKeys("01011996"));
		await driver.findElement(By.name('send')).click();
	} catch (error) {
		console.log('====================================');
		console.log(error);
		console.log('====================================');
	}
}

openWebsites();