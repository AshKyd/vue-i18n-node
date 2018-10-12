// Local Vue
const Vue = require('vue')
const VueI18n = require('vue-i18n')

// Instantiation throws because Vue isn't accessible
const i18n = new VueI18n({
  locale: 'ja', // set locale
  messages: {ja: {}}, // set locale messages
})
