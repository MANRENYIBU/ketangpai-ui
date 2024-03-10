import request from '@/utils/request'

//登录
export function login (data) {
  return request({
    url: "/api/login",
    method: "post",
    data: data
  })
}
//退出
export function logout (params) {
  return request({
    url: "/logout",
    method: "get",
    params: params
  })
}