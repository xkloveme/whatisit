<!--
 * @describe: 描述
 * @Author: superDragon
 * @Date: 2019-07-06 09:07:03
 * @LastEditors: superDragon
 * @LastEditTime: 2019-09-10 17:06:49
 -->
<template>
  <div class="hello">
    <h1>弄啥哩</h1>
    <input v-model="fun" style="height:200px;width:500px;" type="text" />
    <br />
    {{ fun }}
    <br />
    要转换的字符串流：
    <input v-model="sourceCode" type="text" />
    <button @click="run">解码/运行</button>
    <iframe :src="src" ref="iframe" frameborder="0" scrolling="auto"></iframe>
    {{ result }}
  </div>
</template>

<script>
// eslint-disable
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      src: 'https://allinone-ufile.hekr.me/xiaofang-web/7638634c8f9548b089d01d22f853ae9b/iframe.html',
      fun: `function reportData (data) {
      return {
        cmdId: data,
        data: '返回数据：' + data
      }
    }`,
      sourceCode: null,
      result: null,
      receivedFromWorker: false,
      iframeWin: null
    }
  },
  methods: {
    run () {
      // 发送数据
      this.iframeWin.postMessage({
        cmd: 'getFormJson',
        params: { code: this.fun + `;reportData(${this.sourceCode});` }
      }, '*')
    },
    handleMessage (event) {
      // 根据上面制定的结构来解析iframe内部发回来的数据
      const data = event.data
      // eslint-disable-next-line
      console.log(data, '子组件传输')
      switch (data.cmd) {
        case 'returnJson':
          this.receivedFromWorker = true;
          if (data.params) {
            this.result = data.params
          }
          break
        case 'returnHeight':
          // 业务逻辑
          break
      }
    }
  },
  mounted () {
    // 在外部vue的window上添加postMessage的监听，并且绑定处理函数handleMessage
    window.addEventListener('message', this.handleMessage)
    this.iframeWin = this.$refs.iframe.contentWindow
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
