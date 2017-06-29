<template>
  <div>

      <list>

          <cell style="height: 300;flex-direction: column">

              <div style="height:150;flex-direction: row;">
                  <div style="flex: 1;flex-direction:row;justify-content:center;align-items: center;border-width: 1;border-color: #F8F8F8">
                      <div style="flex: 0.5;justify-content: center;align-items: center;">
                        <image style="width: 45;height: 45" :src="path+'/dowload.png'"/>
                      </div>
                      <div style="margin-left: 1;flex: 1">
                          <text style="color: rgb(135,135,135)">本地歌曲</text>
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
                          <text style="color: rgb(135,135,135)">我的收藏</text>
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
                      <text>最近播放</text>
                  </div>
                  <div style="flex: 1;align-items: center;justify-content: center">
                      <image style="height: 45;width: 55;margin-bottom: 10" :src="path+'/3543.png'" />
                      <text>已购音乐</text>
                  </div>
                  <div style="flex: 1;align-items: center;justify-content: center">
                      <image style="height: 45;width: 50;margin-bottom: 10" :src="path+'/3534535.png'" />
                      <text>离线音乐包</text>
                  </div>
              </div>

              <div style="background-color:rgb(244,244,244);height: 10;margin-top: 20"></div>

              <div style="justify-content: center;align-items: center;margin-top: 50;height: 200;">

                  <div style="margin-bottom:20;align-items:center;justify-content:center;border-color: rgb(242,160,105);border-width: 1;border-radius: 50;width: 300;height: 70">
                      <text style="color: rgb(242,160,105)">创建歌单</text>
                  </div>
                  <text style="color: rgb(119,119,119)">让生活律动起来！</text>

              </div>

              <div style="background-color:rgb(244,244,244);height: 10;margin-top: 20"></div>

          </cell>

      </list>

  </div>
</template>

<script>
    var api = require('./api.js');
    export default {
        data: {
            path:api.apiurl.path,
        },
        methods: {}
    }
</script>

<style>

</style>