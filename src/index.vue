<template>
  <div class="rootview">
    <!-- 搜索-->
    <div style="flex-direction: row;height: 60;top: 20;">
      <div style="flex-direction: row;margin-left:30;flex: 1;justify-content: flex-start;align-items: center;border-radius: 50;background-color: rgb(233,233,233)">
        <image style="height: 40;width: 40;margin-left: 20" :src="serach"></image>
        <input placeholder="音乐基因拯救计划" style="font-size:25;margin-left:5;color:gray;height:60;width: 500"/>
      </div>
      <div style="flex: 0.2;justify-content: center;align-items: center">
        <image style="width: 40;height: 40" :src="headerrighticon"></image>
      </div>
    </div>

    <!-- banner-->
    <div style="margin-top: 30;">
      <slider class="slider" interval="3000" auto-play="true">
        <div v-for="img in imageList">
          <image style="height: 300;width: 750" resize="cover" :src="img"></image>
        </div>
        <indicator style="item-selectedColor:white;item-color: #dddddd;item-size:12px;top:80px;left:300px;width:700px;height:380px;"></indicator>
      </slider>
    </div>

    <!-- 功能列表-->
    <div style="height:170;flex-direction: row">
      <div v-for="lieb in gongnlist" style="flex: 1">
        <div style="margin-top: 20;margin-left: 20;margin-bottom:20;flex-direction: column;justify-content: center;align-items: center">
          <image style="height: 80;width: 80;margin-bottom: 10;" :src="lieb.icon"></image>
          <text style="font-size: 25">{{lieb.title}}</text>
        </div>
      </div>
    </div>

    <div style="height: 170;flex-direction: row">
      <div style="flex: 0.8;margin-left: 10" >
        <image style="width: 325;height: 170" :src="geshou1"/>
        <image style="width: 50;height: 50;position: absolute;top: 110;right: 10;" :src="bofang"/>
      </div>
      <div style="flex: 1;margin-left: 10;margin-right: 10">
        <image style="width: 405;height: 170" :src="geshou2"/>
        <image style="width: 50;height: 50;position: absolute;top: 110;right: 10;" :src="bofang"/>
      </div>
    </div>

    <div style="margin-top: 30;height: 500">
        <div style="flex-direction: row;height: 40;margin-left: 10;justify-content: center;align-items: center">
          <div style="flex:0.02;height: 50;background-color: rgb(239,118,0)"></div>
          <text style="flex: 1;margin-left: 10">必听歌单</text>
          <div style="flex: 0.2;flex-direction: row;justify-content: center;align-items: center">
            <text style="color: rgb(239,118,0)">更多</text>
            <image style="width: 40;height: 40" :src="fdfd"></image>
          </div>
        </div>
    </div>

  </div>
</template>

<style>

</style>

<script>
  var api = require('./api.js');
  export default {
    data: {
        fdfd:api.apiurl.path+'/switch_play.png',
        bofang:api.apiurl.path+'/mv_play_btn_normal.png',
        geshou1:api.apiurl.path+'/342425.jpg',
        geshou2:api.apiurl.path+'/46456345.jpeg',
        headerrighticon:api.apiurl.path+'/list_icon_music_musician.png',
        serach:api.apiurl.path+'/ic_search_gray2.png',
        logoUrl: 'https://alibaba.github.io/weex/img/weex_logo_blue@3x.png',
        imageList: [api.apiurl.path+'/1498368221764.jpg',api.apiurl.path+'/1498530619308.jpg', api.apiurl.path+'/1498540614906.jpg',api.apiurl.path+'/1498213644689.jpg'],
        gongnlist:[{title:'猜你喜欢',icon:api.apiurl.path+'/music_recommend.png'},{title:'歌单',icon:api.apiurl.path+'/shortcut_play_guess_like.png'}
        ,{title:'排行榜',icon:api.apiurl.path+'/search_music_style.png'},{title:'排行榜',icon:api.apiurl.path+'/shortcut_daily_thirty.png'},{title:'排行榜',icon:api.apiurl.path+'/search_artist.png'}],
        avc:api.apiurl.path+'/shortcut_play_guess_like.png',
    },
    methods: {

    }
  }
</script>
