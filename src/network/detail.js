// 导入封装好的request.js
import { request } from "./request";

// 发起请求获取数据
export function getDetail(iid) {
  return request({
    url: "/detail",
    params: {
      iid,
    },
  });
}
