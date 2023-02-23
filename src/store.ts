// 状態管理 ⇨ 値と更新処理をセットで管理
import { reactive } from 'vue'

export const store = reactive({
  count: 0,
  increment() {
    this.count++
  }
})
