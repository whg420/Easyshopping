
import request from "../../util/request"
// 抛出loginActions
export let shopActions = () => {
    // 登录接口
    return request.post("/cart/index?'x-nideshop-token'='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxNiwiaWF0IjoxNTYzOTUxMjg1fQ.qbMBV1MycS7iq8u0uhtmmH7RjOCwjeLrBSvtNaxGMRk'")
}