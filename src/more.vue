<template >
    <list style="background-color: #F8F8F8">
        <cell style="background-color: white">
            <div style="flex-direction: row;height: 200;justify-content: center;align-items: center;">
                <div style="flex: 1;align-items: center">
                    <image style="width: 62;height: 60;" :src="path+'/vip2.png'"></image>
                    <text style="font-size: 25">会员中心</text>
                    <text style="font-size: 23;color: #BDBDBD;margin-top: 10">极致音乐体验</text>
                </div>
                <div style="flex: 1;align-items: center">
                    <image style="width: 62;height: 60;" :src="path+'/wehf2323.png'"></image>
                    <text style="font-size: 25">任务中心</text>
                    <text style="font-size: 23;color: #BDBDBD;margin-top: 10">做任务得奖励</text>
                </div>
                <div style="flex: 1;align-items: center">
                    <image style="width: 62;height: 60;" :src="path+'/2321kh.png'"></image>
                    <text style="font-size: 25">听歌免流量</text>
                    <text style="font-size: 23;color: #BDBDBD;margin-top: 10">联通流量包</text>
                </div>

            </div>

            <div style="background-color:rgb(244,244,244);height: 20;"></div>

            <div style="flex-direction: column;align-content: center; justify-content: center">
                <div style="border-bottom-width: 1;border-bottom-color: silver;height: 100;flex-direction: row;align-items: center">
                    <div style="flex: 0.13;align-items: flex-end;">
                        <image style="width: 40;height: 40" :src="path+'/alarm_icon.png'"/>
                    </div>
                    <text style="flex: 1;margin-left: 20;font-size: 29">定时关闭</text>
                    <div style="flex: 0.1">
                        <image style="width: 27;height: 30" :src="path+'/triangle.png'"/>
                    </div>
                </div>
                <div style="border-bottom-width: 1;border-bottom-color: silver;height: 100;flex-direction: row;align-items: center">
                    <div style="flex: 0.13;align-items: flex-end;">
                        <image style="width: 40;height: 40" :src="path+'/yinxoiapo.png'"/>
                    </div>
                    <text style="flex: 1;margin-left: 20;font-size: 29">音效设置</text>
                    <div style="flex: 0.1">
                        <image style="width: 27;height: 30" :src="path+'/triangle.png'"/>
                    </div>
                </div>
                <div style="height: 100;flex-direction: row;align-items: center">
                    <div style="flex: 0.13;align-items: flex-end;">
                        <image style="width: 40;height: 40" :src="path+'/CoGraphics.png'"/>
                    </div>
                    <text style="flex: 1;margin-left: 20;font-size: 29">主题换肤</text>
                    <div style="flex: 0.1">
                        <image style="width: 27;height: 30" :src="path+'/triangle.png'"/>
                    </div>
                </div>
            </div>

            <div style="background-color:rgb(244,244,244);height: 20;"></div>

            <div style="flex-direction: column;align-content: center; justify-content: center">
                <div style="border-bottom-width: 1;border-bottom-color: silver;height: 100;flex-direction: row;align-items: center">
                    <div style="flex: 0.13;align-items: flex-end;">
                        <image style="width: 40;height: 40" :src="path+'/yaoqing.png'"/>
                    </div>
                    <text style="flex: 1;margin-left: 20;font-size: 29">邀请好友，获得VIP</text>
                    <div style="flex: 0.1">
                        <image style="width: 27;height: 30" :src="path+'/triangle.png'"/>
                    </div>
                </div>
                <div style="border-bottom-width: 1;border-bottom-color: silver;height: 100;flex-direction: row;align-items: center">
                    <div style="flex: 0.13;align-items: flex-end;">
                        <image style="width: 45;height: 50" :src="path+'/xunguang3.png'"/>
                    </div>
                    <text style="flex: 1;margin-left: 20;font-size: 29">寻光计划，你就是评审</text>
                    <div style="flex: 0.1">
                        <image style="width: 27;height: 30" :src="path+'/triangle.png'"/>
                    </div>
                </div>
                <div style="height: 100;flex-direction: row;align-items: center">
                    <div style="flex: 0.13;align-items: flex-end;">
                        <image style="width: 40;height: 40" :src="path+'/import.png'"/>
                    </div>
                    <text style="flex: 1;margin-left: 20;font-size: 29">导入外部歌曲</text>
                    <div style="flex: 0.1">
                        <image style="width: 27;height: 30" :src="path+'/triangle.png'"/>
                    </div>
                </div>
            </div>

            <div style="background-color:rgb(244,244,244);height: 20;"></div>

            <div style="flex-direction: column;align-content: center; justify-content: center">
                <div style="height: 100;flex-direction: row;align-items: center">
                    <div style="flex: 0.13;align-items: flex-end;">
                        <image style="width: 40;height: 40" :src="path+'/shequ.png'"/>
                    </div>
                    <text style="flex: 1;margin-left: 20;font-size: 29">社区</text>
                    <div style="flex: 0.1">
                        <image style="width: 27;height: 30" :src="path+'/triangle.png'"/>
                    </div>
                </div>
            </div>

            <div style="background-color:rgb(244,244,244);height: 20;"></div>

            <div style="flex-direction: column;align-content: center; justify-content: center">
                <div style="border-bottom-width: 1;border-bottom-color: silver;height: 100;flex-direction: row;align-items: center">
                    <div style="flex: 0.13;align-items: flex-end;">
                        <image style="width: 40;height: 40" :src="path+'/hepl3.png'"/>
                    </div>
                    <text style="flex: 1;margin-left: 20;font-size: 29">帮助与反馈</text>
                    <div style="flex: 0.1">
                        <image style="width: 27;height: 30" :src="path+'/triangle.png'"/>
                    </div>
                </div>
                <div style="height: 100;flex-direction: row;align-items: center">
                    <div style="flex: 0.13;align-items: flex-end;">
                        <image style="width: 40;height: 40" :src="path+'/alarm_icon.png'"/>
                    </div>
                    <text style="flex: 1;margin-left: 20;font-size: 29">设置</text>
                    <div style="flex: 0.1">
                        <image style="width: 27;height: 30" :src="path+'/triangle.png'"/>
                    </div>
                </div>
            </div>

            <div style="background-color:#F8F8F8;height: 80;"></div>

        </cell>
    </list>
</template>

<script>
    var api = require('./api.js');
    var path = api.apiurl.path;
    export default {
        data: {
            path: api.apiurl.path,
        },
        methods: {}
    }
</script>

<style>

</style>