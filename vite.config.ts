import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import type { Plugin } from 'vite'
import mockjs from 'mockjs'
import url from 'node:url'
//1.vite插件
const viteMockServer = (): Plugin => {
  return {
    name: 'vite-mock-server',
    configureServer(server) {
      server.middlewares.use('/api/list', (req, res) => {
        const parseUrl = url.parse(req.originalUrl, true).query
        //xxxx?page=1&pageSize=10  {page:1,pageSize:10}
        res.setHeader('content-type', 'application/json')
        const data = mockjs.mock({
          'list|1000': [
            {
              'id|+1': 1,
              name: parseUrl.keyWord,
              'address': '@county(true)',
            }
          ]
        })
        res.end(JSON.stringify(data))
      })
    }
  }
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteMockServer()],
})
