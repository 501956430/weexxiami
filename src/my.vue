<template>
      <list>
          <cell>
              <div style="height:150;flex-direction: row;">
                  <div style="flex: 1;flex-direction:row;justify-content:center;align-items: center;border-width: 1;border-color: #F8F8F8">
                      <div style="flex: 0.5;justify-content: center;align-items: center;">
                        <image style="width: 45;height: 45" :src="path+'/dowload.png'"/>
                      </div>
                      <div style="margin-left: 1;flex: 1">
                          <text style="color: rgb(135,135,135);font-size: 25">本地歌曲</text>
                          <text style="color: rgb(154,154,154);font-size: 25;margin-top: 10">0首</text>
                      </div>
                      <div style="flex: 0.3">
                        <image style="height: 35;width: 35" :src="path+'/open_icon.png'"></image>
                      </div>
                  </div>
                  <div style="flex: 1;flex-direction:row;justify-content:center;align-items: center;border-width: 1;border-color: #F8F8F8">
                      <div style="flex: 0.6;justify-content: center;align-items: center">
                          <image style="width: 45;height: 45" :src="path+'/sc.png'"/>
                      </div>
                      <div style="margin-left: 5;flex: 1">
                          <text style="color: rgb(135,135,135);font-size: 25">我的收藏</text>
                          <text style="color: rgb(154,154,154);font-size: 25;margin-top: 10">0首</text>
                      </div>
                      <div style="flex: 0.3">
                          <image style="height: 35;width: 35" :src="path+'/open_icon.png'"></image>
                      </div>
                  </div>
              </div>

              <div style="flex-direction: row;justify-content: center;height: 100;margin-top: 20;margin-bottom: 10">
                  <div style="flex: 1;align-items: center;justify-content: center">
                      <image style="height: 45;width: 45;margin-bottom: 10" :src="path+'/sdfpbc.png'" />
                      <text style="font-size: 25">最近播放</text>
                  </div>
                  <div style="flex: 1;align-items: center;justify-content: center">
                      <image style="height: 45;width: 55;margin-bottom: 10" :src="path+'/rfewfwef.png'" />
                      <text style="font-size: 25">已购音乐</text>
                  </div>
                  <div style="flex: 1;align-items: center;justify-content: center">
                      <image style="height: 45;width: 50;margin-bottom: 10" :src="path+'/3534535.png'" />
                      <text style="font-size: 25">离线音乐包</text>
                  </div>
              </div>

              <div style="background-color:rgb(244,244,244);height: 10;margin-top: 20"></div>

              <div style="justify-content: center;align-items: center;margin-top: 50;height: 200;">

                  <div style="margin-bottom:20;align-items:center;justify-content:center;border-color: rgb(242,160,105);border-width: 1;border-radius: 50;width: 300;height: 70">
                      <text style="color: rgb(242,160,105);font-size: 25">创建歌单</text>
                  </div>
                  <text style="color: rgb(119,119,119);font-size: 25">让生活律动起来！</text>

              </div>

              <div style="background-color:rgb(244,244,244);height: 10;margin-top: 20"></div>

              <div style="margin-top: 30;">
                  <div style="flex-direction: row;height: 40;margin-left: 10;justify-content: center;align-items: center">
                      <div style="flex:0.01;height: 40;background-color: rgb(239,118,0)"></div>
                      <text style="flex: 1;margin-left: 10;color: #535353;font-size: 25">你可能会喜欢的歌单</text>
                  </div>
                  <!--歌单-->
                  <div style="flex-direction: column;margin-top: 20" v-for="colList in muisdlistcolsize">
                      <div style="flex-direction: row;margin-left: 10;">
                          <div  v-for="(bcs,index) in muisdlist" >
                              <div style="flex: 1;margin-right: 6;margin-bottom: 20" v-if="index>=((colList-1)*3) && index <(colList*3)">
                                  <image style="height: 240;width: 240" :src="bcs.icon"/>
                                  <div style="justify-content: space-between;width: 240;margin-top: 10">
                                      <text style="font-size: 25;margin-left: 12">{{bcs.title}}</text>
                                      <text style="color: #ACACAC;font-size: 25;margin-left: 12;margin-top: 10">{{bcs.tag}}</text>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

              </div>

              <div style="background-color:rgb(244,244,244);height: 80;"></div>

          </cell>
      </list>
</template>

<script>
    var api = require('./api.js');
    var path = api.apiurl.path;
    export default {
        data: {
            path:api.apiurl.path,
            muisdlist:[{tag:'根据你听过的歌曲',title:'自己喜欢的中文歌曲',icon:path+'/52379014985237.jpg'},{tag:'根据你听过的歌曲',title:'那些青春美丽的歌曲,请你静静的...',icon:path+'/280762448.jpg'},{tag:'根据你听过的歌曲',title:'在夏天的艳阳理飘来飘去',icon:path+'/33453414.jpg'}
                ,{tag:'新竹野猴子',title:'你就不要想起我的爱',icon:path+'/1466162110752.jpg'},{tag:'终yali絮鸳',title:'毕业季,让我们一起旅行!',icon:path+'/100276700.jpg'},{tag:'一个人听',title:'没有我的日子但愿还有一首歌陪你 ',icon:path+'/273756434.jpg'}],
            muisdlistcolsize:0,
        },
        created: function() {
            this.muisdlistcolsize=parseInt((this.muisdlist.length/3)+(this.muisdlist.length%3>0?1:0));
        },
        methods: {}
    }
</script>

<style>

</style>