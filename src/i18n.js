import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { koKR, enUS, zhCN } from './locale'

Vue.use(VueI18n)

// Create VueI18n instance with options
export const i18n = new VueI18n({
  locale: 'ko_KR',
  messages: {
    'ko_KR': koKR,
    'en_US': enUS,
    'zh_CN': zhCN
  }
})
