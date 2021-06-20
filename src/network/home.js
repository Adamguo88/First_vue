import { request } from "./request";

export function getHomeMultidate() {
  return request({
    // url: "/home/multidata"
    url: "/home"
  });
}

export function getHomeGoods(type, page) {
  return request({
    url:'/home',
    params:{
      type,
      page
    }
  })
}