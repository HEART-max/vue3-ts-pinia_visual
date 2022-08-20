import axios from 'axios'

const server = axios.create({
  baseURL: 'https://api.inews.qq.com/newsqa/v1'
})

export const getApiList = () => {
  return server.get('/query/inner/publish/modules/list?modules=statisGradeCityDetail,diseaseh5Shelf').then(res => {
    return res.data
  })
}
