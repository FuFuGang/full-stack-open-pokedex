const express = require('express')
const app = express()

// 使用环境变量端口或默认 3001
const PORT = process.env.PORT || 3001

app.use(express.static('dist'))

// 移除或修改 console.log
app.listen(PORT, () => {
  // 在生产环境中应该使用proper logging库
})
