import WrBtn from './src/Button'
// 為元件提供 install 方法，供元件對外按需引入
// 所有元件，必須具有 install，才能使用 Vue.use()
WrBtn.install = Vue => {
    Vue.component(WrBtn.name, WrBtn)
}
export default WrBtn