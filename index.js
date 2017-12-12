/**
 * Compile 阶段插件接口(文件内容替换)
 * @param  {string} content     文件内容
 * @param  {File}   file        fis 的 File 对象 [fis3/lib/file.js]
 * @param  {object} settings    插件配置属性
 * @return {string}             处理后的文件内容
 */
module.exports = function(content, file, settings) {
    if(file.isText() && !!content){
        var srcReg = new RegExp('@ConfigManager.CloudUrlConvertor\\(\\"',"g");
        var afterReg = new RegExp('\\"(\\s)*\\+(\\s)*\\"\\?v=\\"(\\s)*\\+(\\s)*ConfigManager.CssJsVersion\\)', "g"); //是否取掉版本号
        content = content.replace(srcReg, "");
        content = content.replace(afterReg, "");
        file.setContent(content);
    }
}
