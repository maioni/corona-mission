module.exports = {
    'Should open Corona Mission Login page' : function (browser) {
      browser
        .url('http://localhost:8100/login')
        .waitForElementVisible('body', 1000)
        .assert.title('Ionic App')
        .waitForElementVisible('.corona-mission-login', 1000)
        .waitForElementVisible('.corona-icon-login', 1000)
        .waitForElementVisible('.enter-text', 1000)
        .assert.containsText('.enter-text','Entrar com:')
        .end()
    }
  }