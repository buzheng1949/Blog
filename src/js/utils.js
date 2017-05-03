/**
 * Created by buzheng on 17/5/4.
 */
/**
 * 用户获取Json长度
 * @param jsonData
 * @returns {number}
 */
function getJsonLength(jsonData) {
    var jsonLength = 0;
    for (var item in jsonData) {
        jsonLength++;
    }
    return jsonLength;
}
