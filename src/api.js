/**
 * Created by tangbo on 2017/6/26.
 */
exports.apiurl = {
    path:"http://192.168.1.114:8080/images",
    imageUrl:"http://192.168.1.114:8080/images",
    dev:"dev",
    getUrl:function(){
        if(this.dev=='debug'){
            var bundleUrl = weex.config.bundleUrl;
            return bundleUrl.substring(0,bundleUrl.lastIndexOf("/")+1);
        }else{
            return this.path;
        }
    }
}