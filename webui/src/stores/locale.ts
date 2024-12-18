import { Message } from '@arco-design/web-vue'
import { useStorage } from '@vueuse/core'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import { defineStore } from 'pinia'
import { useI18n } from 'vue-i18n'

const useLocalStore = defineStore('locale', () => {
  const localeStore = useStorage('locale.store', '')
  const setLocale = (locale: string) => {
    localeStore.value = locale
  }
  return {
    localeStore,
    setLocale
  }
})

export default function useLocale() {
  const store = useLocalStore()
  const i18 = useI18n({ useScope: 'global' })
  const changeLocale = (value: string) => {
    if (i18.locale.value === value || !i18.availableLocales.includes(value)) {
      return
    }
    i18.locale.value = value
    dayjs.locale(value)
    store.setLocale(value)
    document.querySelector('html')?.setAttribute('lang', value)
    Message.success(i18.t('navbar.action.locale'))
  }
  if (store.localeStore !== '' && i18.availableLocales.includes(store.localeStore)) {
    changeLocale(store.localeStore)
  }
  document.querySelector('html')?.setAttribute('lang', i18.locale.value)

  return {
    changeLocale
  }
}
