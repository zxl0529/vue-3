## vue-3
使用vue模仿ele.me  [源码](https://github.com/bailicangdu/vue2-elm)

2017-9-1  以大多数人的努力程度之低，没必要拼天赋哟


### 技术栈
vue2-webpack-vuex-vueRouter-flex-svg


### 问题
* id=app、router-view标签为什么在根目录的index.html页面和App.vue文件中重复出现两次
* 代理的饿了吗后台好像不太稳定，有时候会出现请求失败，状态码为430
* @import "@/style/mixin"报错(url-loader与webapck的alias是两种不同的url解析方式???)
* vue代码进行调试的时候，总感觉有些卡顿
* router的模式为history的时候，会影响回退页面的滚动条的起始位置(样式异常),切换为hash模式就好了
* 目前发现v-bind指令可以将data返回的属性值绑定到标签属性上
* 目前发现v-on指令可以触发监听的函数方法<br>
1.methods对象中定义的函数方法<br>
2.原生DOM事件，如表单的submit动作，阻止表单的默认提交--> v-on:submit.prevent<br>


### vue知识点
* `hash`与`history`两种模式的区别<br>
`hash`模式路由地址会带上#,但是浏览器发送给服务器的却是#之前的URL。hash模式的好处是，虽然你是个单页面应用，但是你可以只刷新当前页，而不必刷新整个单页面应用。<br>
`history`模式的话需要服务端配合，如果服务器配置仅仅是找不到对应的路由，就会重定向到index.html，那么刷新当前页会跳首页。如果服务器对于匹配不到URL不做配置，那么一般返回404页面。

* `v-for`指令可用于遍历数组和对象。<br>
遍历数组时： `(item,index) in arr`<br>
遍历对象时： `(value,key,index) in obj`<br>

* `slot`标签用于父组件向子组件分发想要显示的内容。<br>
使用场景:几个父组件公用一个子组件，且想要该子组件在不同的父组件中显示不同的内容。

* `v-model`用于绑定表单控件元素，如`input、textarea、select`<br>
1.`textarea/input[type=text]`，将data返回的属性值双向绑定到input的value属性上<br>
2.`input[type=checkbox]/input[type=radio]/select-option`<br>
  a.以上元素有value属性时，将data返回的属性值双向绑定到input的value属性上<br>
  b.以上元素无value属性时，将data返回的属性值双向绑定到以上元素是否被选中，选中为true，未选中为false<br>

* `v-if/v-show/slot`标签都不会在文档排版中占位置，即不会像opacity样式那样占位置。

* `v-if`与`v-show`区别<br>
`v-show` 会在app初始化的时候编译并且渲染，并且在之后一直存在。当切换v-show模块时，只是简单的更改css。<br>
`v-if` 当切换v-if模块时，Vue.js 有一个局部编译/卸载过程，因为 v-if 之中的模板也可能包括数据绑定或子组件。v-if 是真实的条件渲染，因为它会确保条件块在切换当中合适地销毁与重建条件块内的事件监听器和子组件。 v-if 是惰性的，如果为false，则什么也不错-不编译，不渲染。 当第一次条件为真时，才开始编译。
#####建议#####
`v-show`的切换消耗比较低，但是不会重新渲染子组件，所以最好用于静态的内容或者不需要重新构建结构的组件。而 v-if 比较适合不太频繁的切换状态的组件。所以项目设计的时候，不要对复杂的业务设计模块太频繁的视图切换。尽量将静态内容和动态内容分离到不同的模块中。<br>
一般来说，v-if 有更高的切换消耗而 v-show 有更高的初始渲染消耗。因此，如果需要频繁切换 v-show 较好，如果在运行时条件不大可能改变 v-if 较好

* enter(进入过渡的开始状态) --> enter-to(进入过渡的结束状态) ; enter + enter-to === enter-active(进入过渡的整个状态)

### CSS
* font-zize:0(给inline、inline-block元素的父元素设置) 解决inline、inline-block元素之间的间距<br>
我们为了页面代码的整洁可读性，往往会设置一些适当的缩进、换行，但当元素的display为inline或者inline-block的时候，这些缩进、换行就会产生空白
* fixed与absolute的定位区别
  1.没有滚动条的情况下没有差异
  2.在有滚动条的情况下，fixed定位不会随着滚动条的滚动而滚动，而absolute会随着滚动条的滚动而滚动。


### JS
* `document.defaultView`<br>
属性返回当前document对象关联的window对象，如果没有，会返回null。IE9以下不支持。基本上用`window.getComputedStyle()`就可以了，只有一种情况必须用`defaultView`，就是firefox3.6上访问子框架内的样式(iframe)
* `window.getComputedStyle`<br>
是一个可以获取当前元素所有最终使用的CSS属性值。返回的是一个CSS样式声明对象([object CSSStyleDeclaration])，只读。<br>
语法：`var style = window.getComputedStyle("元素", "伪类")`;<br>
如果是伪类元素需要传递第二个参数，不是则传递null
* `element.currentStyle`<br>
`currentStyle`是IE浏览器自娱自乐的一个属性，其与`element.style`可以说是近亲，至少在使用形式上类似，`element.currentStyle`，差别在于`element.currentStyle`返回的是元素当前应用的最终CSS属性值（包括外链CSS文件，页面中嵌入的<style>属性等）。
* `element.scrollTop` 属性可以设置或者获取一个元素被卷起的像素距离。一个元素的 scrollTop 是可以去计算出这个元素最高高度距离它容器顶部的可见高度。当一个元素的容器没有产生垂直方向的滚动条,那它的 scrollTop 的值默认为0.
* 冒泡(默认)false与捕获true
1.一种事件触发方式 <br>
冒泡：子元素先触发冒泡，父元素次之。捕获：父元素先触发捕获，子元素次之
2.两种事件触发方式混合<br>
点击子元素：父元素捕获-->子元素冒泡-->子元素捕获-->父元素冒泡<br>
点击父元素：父元素冒泡-->父元素捕获
* [addEventLister passive:true](http://www.cnblogs.com/ziyunfei/p/5545439.html)可以移动端解决滚动和触摸事件的卡顿
* [DOMContentLoaded与load事件的区别](http://www.cnblogs.com/caizhenbo/p/6679478.html)


### 插件
* fastclick.js 处理移动端click事件300毫秒延迟
1.为什么存在延迟<br>
从点击屏幕上的元素到触发元素的click事件，移动浏览器会有大约300毫秒的等待时间。为什么这么设计？因为它想想看看你是不是要进行双击（double tap）操作。
2.不应用fastclick的场景
a.桌面浏览器
b.如果viewport meta标签中设置了 width=device-width，Android上的Chrome32+会禁用300ms延迟
<meta name='viewport' content='width=device-width,initial-scale=1'>
c.viewport meta 标签如果设置了user-scalable=no,Android上的Chrome(所有版本)都会禁用300ms延迟。
d.IE10中，可以使用css属性 -ms-touch-action:none  禁止元素双击缩放
* showdown.js 一个javascript环境下markdown语法解释工具


### 不足
* 需要系统学习一下svg
* 强化一下flex布局
* 切换页面的效果不太好