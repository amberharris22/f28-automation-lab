const {By} = require('selenium-webdriver')

const addMovie = async (driver) => {

    await driver.findElement(By.xpath('//input')).sendKeys('Avatar')
    await driver.findElement(By.xpath('//button')).click()
    await driver.sleep(2000)

    const movie = await driver.findElement(By.xpath('//li'))
    const displayed = movie.isDisplayed()

    expect(displayed).toBeTruthy()
}

const crossOffMovie = async (driver) =>{
    await driver.findElement(By.xpath('//input')).sendKeys('Avatar')
    await driver.findElement(By.xpath('//button')).click()

    await driver.findElement(By.xpath('//li/span[1]')).click()
    await driver.sleep(2000)

    const checked = await driver.findElement(By.xpath("//*[contains(@class, 'checked')]"))
    const displayed = checked.isDisplayed()
    
    expect(displayed).toBeTruthy()
}
const revealMessage = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('Avatar')
    await driver.findElement(By.xpath('//button')).click()
    
    await driver.findElement(By.xpath('//li/span[1]')).click()

    let message = await driver.findElement(By.id("message")).getText()
    expect(message).toContain('watch')
}

const deleteMovie = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('Avatar')
    await driver.findElement(By.xpath('//button')).click()

    await driver.findElement(By.id('Avatar')).click()
    await driver.sleep(2000)

    expect(await driver.findElement(By.xpath('//ul')).hasChildren).toBeFalsy()

}

module.exports = {
    addMovie,
    crossOffMovie,
    deleteMovie,
    revealMessage
}