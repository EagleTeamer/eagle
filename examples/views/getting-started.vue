<template>
  <div>
    <div class="docs">
      <h2 id="get_started">
        快速上手
        <a href="#get_started" class="header-anchor">¶</a>
      </h2>
      <h3 id="npm">
        npm 安装
        <a href="#npm" class="header-anchor">¶</a>
      </h3>
      <p>推荐使用 npm 的方式安装，它能更好地和 webpack, gulp等打包工具配合使用。</p>
      <blockquote>
        <p>npm i vue-eagle -S</p>
      </blockquote>
      <h3 id="project">
        在项目中引入
        <a href="#project" class="header-anchor">¶</a>
      </h3>
      <p>在项目中引入eagle使用，可以选择完整引入，也可以按需加载组件使用。</p>
      <h4 id="all">
        完整引入
        <a href="#all" class="header-anchor">¶</a>
      </h4>
      <p>在项目入口文件main.js中完整引入</p>
      <div class="code">
        <pre v-highlightjs>
          <code class="javascript">
            <span>import Vue from 'vue'<br />import EagleUI from 'vue-eagle'<br />import 'vue-eagle/lib/css/style.css'<br />import App from './App.vue'<br /><br />Vue.use(EagleUI)<br /><br />new Vue({<br />  el: '#app',<br />  render: h =&gt; h(App)<br />})</span>
          </code>
        </pre>
      </div>
      <h4 id="import">
        按需引入
        <a href="#import" class="header-anchor">¶</a>
      </h4>
      <p>借助插件 <a href="https://github.com/ant-design/babel-plugin-import">babel-plugin-import</a> 可以实现按需加载组件。首先安装babel-plugin-import，并在文件 .babelrc 中配置：</p>
      <blockquote>
        <p>npm i babel-plugin-import -D</p>
      </blockquote>
      <p>.babelrc文件中的配置:</p>
      <div class="code">
        <pre v-highlightjs>
          <code class="json">
            <span>{<br />    "plugins": [["import", {<br />        "libraryName": "vue-eagle",<br />        "libraryDirectory": "src/packages"<br />    }]]<br />}</span>
          </code>
        </pre>
      </div>
      <p>配置完成后，在项目入口文件main.js中按需引入组件</p>
      <div class="code">
        <pre v-highlightjs>
          <code class="javascript">
            <span>import Vue from 'vue'<br />import { Button, Scroller, Table } from 'vue-eagle'<br />import 'vue-eagle/lib/css/style.css'<br />import App from './App.vue'<br /><br />Vue.component(Button.name, Button) <br />Vue.component(Scroller.name, Scroller) <br />Vue.component(Table.name, Table)<br /><br />new Vue({<br />    el: '#app',<br />    render: h = &gt;h(App)<br />})</span>
          </code>
        </pre>
      </div>
      <p>按需引入组件时，所有的组件列表参照 <a href="https://github.com/EagleTeamer/eagle/blob/master/src/index.js">eagle-components</a></p>
      <h3 id="use">
        在项目中使用
        <a href="#use" class="header-anchor">¶</a>
      </h3>
      <p>在template中的使用案例，具体以单个组件的文档说明为主</p>
      <div class="code">
        <pre v-highlightjs>
          <code class="xml">
            <span>&lt;template&gt;<br />  &lt;v-button&gt;&lt;/v-button&gt;<br />&lt;/template&gt;</span>
          </code>
        </pre>
      </div>

      <h3 id="script">
        通过 script、link标签引入使用
        <a href="#script" class="header-anchor">¶</a>
      </h3>
      <div class="code">
        <pre v-highlightjs>
          <code class="xml">
            <span>&lt;!DOCTYPE html&gt;<br />&lt;html&gt;<br />&lt;head&gt;<br />  &lt;meta charset="UTF-8"&gt;<br />  &lt;!-- import CSS --&gt;<br />  &lt;link rel="stylesheet" href="https://github.com/EagleTeamer/eagle/blob/master/lib/css/style.css"&gt;<br />&lt;/head&gt;<br />&lt;body&gt;<br />  &lt;div id="app"&gt;<br />    &lt;v-button&gt;Button&lt;/v-button&gt;<br />  &lt;/div&gt;<br />&lt;/body&gt;<br />  &lt;script src="https://unpkg.com/vue/dist/vue.js"&gt;&lt;/script&gt;<br />  &lt;!-- import JavaScript --&gt;<br />  &lt;script src="https://github.com/EagleTeamer/eagle/blob/master/lib/eagle.min.js"&gt;&lt;/script&gt;<br />  &lt;script&gt;<br />    new Vue({<br />      el: '#app'<br />    })<br />  &lt;/script&gt;<br />&lt;/html&gt;</span>
          </code>
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'getting-started'
};
</script>

<style>

</style>
