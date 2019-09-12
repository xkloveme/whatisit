<!--
 * @describe: 描述
 * @Author: superDragon
 * @Date: 2019-07-06 09:07:03
 * @LastEditors: superDragon
 * @LastEditTime: 2019-09-12 09:59:12
 -->
<template>
  <div class="hello">
    <h1>弄点啥</h1>
    <div style="width:500px;margin:0 auto;">
      <codemirror v-model="fun" style="text-align: left;" :options="cmOption"></codemirror>
    </div>
    <br />
    要转换的字符串流：
    <input v-model="sourceCode" style="height:20px;width:300px;margin:0 auto;" type="text" />
    <button @click="run">解码/运行</button>
    <br />
    <iframe :src="src" style="display:none;" ref="iframe" frameborder="0" scrolling="auto"></iframe>
    结果：{{ result }}
  </div>
</template>

<script>
import { codemirror } from 'vue-codemirror'
// eslint-disable
export default {
  name: 'encode',
  components: { codemirror },
  props: {
    msg: String
  },
  data () {
    return {
      src: 'iframe.html',
      fun: `function raw2Protocol(reportData) {
  let deviceStatus=function(reportData) {
   let str = reportData
  let jsonMap = new Object()
  let data = Number(reportData.substring(reportData.length - 2, reportData.length - 4))
  jsonMap['data'] = data
  jsonMap['cmdId'] = 1
  let deviceType = reportData.substring(4, 6)
  let device = ''
  let type = [{ id: '00', name: 'Smoke' }, { id: '01', name: 'CO' }, { id: '02', name: 'GAS' }]
  for (const key in type) {
    if (type[key].id === deviceType) {
      device = type[key].name
    }
  }
  jsonMap['deviceType'] = device
  return jsonMap
}
    return deviceStatus(reportData)
}`,
      sourceCode: '55AA00015A',
      result: null,
      receivedFromWorker: false,
      iframeWin: null,
      cmOption: {
        origLeft: null,
        connect: 'align',
        mode: 'text/html',
        lineNumbers: true,
        collapseIdentical: false,
        highlightDifferences: true
      }
    }
  },
  methods: {
    run () {
      // 发送数据
      this.iframeWin.postMessage({
        cmd: 'getJson',
        code: this.fun,
        params: this.sourceCode
      }, '*')
    },
    handleMessage (event) {
      // 根据上面制定的结构来解析iframe内部发回来的数据
      const data = event.data
      // eslint-disable-next-line
      console.log(data, '子组件传输')
      switch (data.cmd) {
        case 'returnJson':
          if (data.params) {
            this.result = data.params
          }
          break
        case 'error':
          // 业务逻辑
          break
      }
    }
  },
  mounted () {
    // 在外部vue的window上添加postMessage的监听，并且绑定处理函数handleMessage
    // eslint-disable-next-line
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
