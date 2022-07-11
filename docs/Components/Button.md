# Button  按钮
## 基础用法
有五种类型的按钮：primary（深色背景），dashed（虚线border），text（文本），link（链接），default（默认浅色背景）
<code src="../../components/button/demo/basic.tsx"></code>
## 按钮尺寸
按钮的尺寸有三种：small，default，large
<code src="../../components/button/demo/size.tsx"></code>
## 按钮的不可用状态
按钮的不可用状态是通过disabled来控制
<code src="../../components/button/demo/disabled.tsx"></code>
## 按钮的加载中状态
按钮的加载中状态通过loading字段控制
<code src="../../components/button/demo/loadingicon.tsx"></code>
## 危险类型的按钮
按钮的危险类型通过danger字段控制
<code src="../../components/button/demo/danger.tsx"></code>
## 按钮的形状
按钮的形状通过shape来控制
<code src="../../components/button/demo/shape.tsx"><code>
## Block按钮
<code src="../../components/button/demo/block.tsx"><code>

## API
### props
| props    | 字段                               |
|----------|----------------------------------|
| type     | primary、default、dashed、text、link |
| danger   | 传入即可，危险按钮                        |
| ghost    | 传入即可，幽灵按钮                        |
| disabled | 传入即可，不可点击的按钮                     |
| loading  | 传入即可，加载中                         |
| icon     | 设置按钮的图标组件                        |
| size     | 设置按钮的大小                          |
| target   | 当href存在时，此属性和a标签的默认行为一致          |
| shape    | default、circle、round             |
| block    | 设置按钮默认占据父元素的全部宽度                 |

### events
| events  | 作用        |
|---------|-----------|
| onClick | 按钮点击的回调函数 |
