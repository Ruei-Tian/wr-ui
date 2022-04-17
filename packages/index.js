import WrBtn from './Button';
// 定義一個元件列表，將 WrBtn 元件放入其中
const components = [
    WrBtn
    //... 未來其他的元件需要在開頭引入
]
// 定義 呼叫 vue 的載入器方法，將 Vue 作為引數傳入
const install = function (Vue) {
  // 判斷是否安裝
  if (install.installed) return
  install.installed = true
  // 遍歷元件列表，將元件注入進 vue 元件中
  components.map(component => Vue.component(component.name, component))
}

// 判斷呼叫 vue 載入器，實現全域性載入
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...components
}
