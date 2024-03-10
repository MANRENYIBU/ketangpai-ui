import request from "@/utils/request.js"

const baseUrl = "/api"

//获取用户数据
export function getUserInfo (params) {
  return request({
    url: baseUrl + "/user/getUserList",
    method: "get",
    params: params
  })
}