const {Builder, Capabilities} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const {addMovie, crossOffMovie, deleteMovie, revealMessage} = require('../index.js')

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5501/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('Add a movie', async () => {
    await addMovie(driver)
    await driver.sleep(3000)
})

test('Cross off movie', async () => {
    await crossOffMovie(driver)
    await driver.sleep(3000)
})

test('Delete movie', async () => {
    await deleteMovie(driver)
    await driver.sleep(3000)
})

test('Notification appeared', async () =>{
    await revealMessage(driver)
    await driver.sleep(3000)
})