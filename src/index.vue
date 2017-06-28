<template>
  <div class="rootview">
  <scroller  append="tree" style="position:relative;">
    <!-- 搜索-->
    <div style="flex-direction: row;height: 60;top: 20;">
      <div style="flex-direction: row;margin-left:30;flex: 1;justify-content: flex-start;align-items: center;border-radius: 50;background-color: rgb(233,233,233)">
        <image style="height: 40;width: 40;margin-left: 20" :src="path+'/ic_search_gray2.png'"></image>
        <input placeholder="音乐基因拯救计划" style="font-size:25;margin-left:5;color:gray;height:60;width: 500"/>
      </div>
      <div style="flex: 0.2;justify-content: center;align-items: center">
        <image style="width: 40;height: 40" :src="path+'/list_icon_music_musician.png'"></image>
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
        <image style="width: 325;height: 170" :src="path+'/342425.jpg'"/>
        <image style="width: 50;height: 50;position: absolute;top: 110;right: 10;" :src="path+'/mv_play_btn_normal.png'"/>
      </div>
      <div style="flex: 1;margin-left: 10;margin-right: 10">
        <image style="width: 405;height: 170" :src="path+'/46456345.jpeg'"/>
        <image style="width: 50;height: 50;position: absolute;top: 110;right: 10;" :src="path+'/mv_play_btn_normal.png'"/>
      </div>
    </div>

    <div style="margin-top: 30;">
        <div style="flex-direction: row;height: 40;margin-left: 10;justify-content: center;align-items: center">
          <div style="flex:0.01;height: 50;background-color: rgb(239,118,0)"></div>
          <text style="flex: 1;margin-left: 10;color: #535353;">必听歌单</text>
          <div style="flex: 0.2;flex-direction: row;justify-content: center;align-items: center">
            <text style="color: rgb(239,118,0)">更多</text>
            <image style="width: 40;height: 40" :src="path+'/switch_play.png'"></image>
          </div>
        </div>
        <!--歌单-->
      <div style="flex-direction: column" v-for="colList in muisdlistcolsize">
        <div style="flex-direction: row;margin-left: 10;margin-top: 20;height: 280;">
          <div  v-for="(bcs,index) in muisdlist" >
          <div style="flex: 1;margin-right: 6;" v-if="index>=((colList-1)*3) && index <(colList*3)">
            <image style="height: 240;width: 240" :src="bcs.icon"/>
            <text style="color: white;top: 10;right:20;position: absolute;font-size: 25">3.6万{{muisdlist.length%3+1}}</text>
            <div style="flex-direction: row;justify-content: space-between;width: 240;margin-top: 10">
              <text style="color: #ACACAC;font-size: 25;margin-left: 10">#{{bcs.tag}}</text>
              <text style="font-size: 25;margin-right: 10">{{bcs.title}}</text>
            </div>
          </div>
          </div>
        </div>
      </div>

    </div>

    <div style="margin-top: 30;">
      <div style="flex-direction: row;height: 40;margin-left: 10;justify-content: center;align-items: center">
        <div style="flex:0.01;height: 50;background-color: rgb(239,118,0)"></div>
        <text style="flex: 1;margin-left: 10;color: #535353;">新歌推荐</text>
        <div style="flex: 0.2;flex-direction: row;justify-content: center;align-items: center">
          <text style="color: rgb(239,118,0)">更多</text>
          <image style="width: 40;height: 40" :src="path+'/switch_play.png'"></image>
        </div>
      </div>
      <div style="flex-direction: column;margin-left: 10;margin-top: 30">
          <div style="flex-direction: row;height: 110;">
            <div style="flex: 0.42;">
              <image  style="width: 110;height: 110" :src="path+'/52379014985237.jpg'"/>
            </div>
            <div style="flex: 2;flex-direction: column;justify-content: center;">
              <div style="flex-direction: row;margin-left: 20;">
                <text>最后一首情歌</text>
                <text style="color: #C0C0C0;margin-left: 10;font-size: 25">滚石创作全才</text>
              </div>
              <div style="flex-direction: row;align-items: center;margin-left: 20;margin-top: 5">
                <image :src="path+'/global_icon_sq_select.png'" style="width: 24;height: 16"></image>
                <text style="color:#C0C0C0;margin-left: 10">陈零九</text>
              </div>
            </div>
            <div style="flex: 0.7;justify-content: flex-start;align-items: center;flex-direction: row">
              <image :src="path+'/MV.png'" style="width: 60;height: 50"></image>
              <image :src="path+'/sandian.png'" style="width: 50;height: 40;margin-left: 10"></image>
            </div>
          </div>
          <div style="border-bottom-width: 1;border-bottom-color: #F8F8F8;margin-top: 20"></div>

        <div style="flex-direction: row;height: 110;">
          <div style="flex: 0.42;">
            <image  style="width: 110;height: 110" :src="path+'/282566688.jpg'"/>
          </div>
          <div style="flex: 2;flex-direction: column;justify-content: center;">
            <div style="flex-direction: row;margin-left: 20;">
              <text>Hallow Fate</text>
            </div>
            <div style="flex-direction: row;align-items: center;margin-left: 20;margin-top: 5">
              <image :src="path+'/global_icon_hq_select.png'" style="width: 24;height: 16"></image>
              <text style="color:#C0C0C0;margin-left: 10">Gin Wigmore</text>
            </div>
          </div>
          <div style="flex: 0.7;justify-content: flex-start;align-items: center;flex-direction: row">
            <image :src="path+'/MV.png'" style="width: 60;height: 50"></image>
            <image :src="path+'/sandian.png'" style="width: 50;height: 40;margin-left: 10"></image>
          </div>
        </div>
        <div style="border-bottom-width: 1;border-bottom-color: #F8F8F8;margin-top: 20"></div>

        <div style="flex-direction: row;height: 110;">
          <div style="flex: 0.42;">
            <image  style="width: 110;height: 110" :src="path+'/282416231.jpg'"/>
          </div>
          <div style="flex: 2;flex-direction: column;justify-content: center;">
            <div style="flex-direction: row;margin-left: 20;">
              <text>一颗滚动的石头</text>
            </div>
            <div style="flex-direction: row;align-items: center;margin-left: 20;margin-top: 5">
              <image :src="path+'/global_icon_hq_select.png'" style="width: 24;height: 16"></image>
              <text style="color:#C0C0C0;margin-left: 10">看理想</text>
            </div>
          </div>
          <div style="flex: 0.7;justify-content: flex-start;align-items: center;flex-direction: row">
            <image :src="path+'/MV.png'" style="width: 60;height: 50"></image>
            <image :src="path+'/sandian.png'" style="width: 50;height: 40;margin-left: 10"></image>
          </div>
        </div>
        <div style="border-bottom-width: 1;border-bottom-color: #F8F8F8;margin-top: 20"></div>

      </div>


    </div>

  </scroller>
  </div>
</template>

<style>

</style>

<script>
  var api = require('./api.js');
  var path = api.apiurl.path;
  export default {
    data: {
        path:api.apiurl.path,
        muisdlist:[{tag:'国语',title:'寂寞唱歌',icon:path+'/52379014985237.jpg'},{tag:'话语',title:'话语情歌',icon:path+'/280762448.jpg'},{tag:'民谣',title:'静静听歌',icon:path+'/33453414.jpg'}
            ,{tag:'话语',title:'话语情歌',icon:path+'/280762448.jpg'},{tag:'国语',title:'话语情歌',icon:path+'/52379014985237.jpg'},{tag:'国语',title:'话语情歌',icon:path+'/52379014985237.jpg'}],
        muisdlistcolsize:0,
        imageList: [api.apiurl.path+'/1498368221764.jpg',api.apiurl.path+'/1498530619308.jpg', api.apiurl.path+'/1498540614906.jpg',api.apiurl.path+'/1498213644689.jpg'],
        gongnlist:[{title:'猜你喜欢',icon:api.apiurl.path+'/music_recommend.png'},{title:'歌单',icon:api.apiurl.path+'/shortcut_play_guess_like.png'}
        ,{title:'排行榜',icon:api.apiurl.path+'/search_music_style.png'},{title:'电台',icon:api.apiurl.path+'/shortcut_daily_thirty.png'},{title:'寻光',icon:api.apiurl.path+'/search_artist.png'}],
    },
      created: function() {
          this.muisdlistcolsize=parseInt((this.muisdlist.length/3)+(this.muisdlist.length%3>0?1:0));
      },
    methods: {

    }
  }
</script>
