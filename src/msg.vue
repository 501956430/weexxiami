<template>
    <scroller style="background-color: #F8F8F8">
        <div style="background-color: white">
            <div style="height: 150;flex-direction:row;justify-content:center;align-items:center;border-bottom-color: #EEEEEE;border-bottom-width: 1;">
                <div style="flex: 0.3;margin-left: 20;">
                    <image style="width: 50;height: 50" :src="path+'/msg1.png'"/>
                </div>
                <text style="flex: 0.5">通知</text>
                <div style="flex:2;justify-content: flex-end;align-items: flex-end;right: 40">
                    <image style="width: 30;height: 30" :src="path+'/open_icon.png'"/>
                </div>
            </div>
            <div style="height: 150;flex-direction:row;justify-content:center;align-items:center;border-bottom-color: #EEEEEE;border-bottom-width: 1">
                <div style="flex: 0.3;margin-left: 20;">
                    <image style="width: 50;height: 50" :src="path+'/common.png'"/>
                </div>
                <text style="flex: 0.5">评论和赞</text>
                <div style="flex:2;justify-content: flex-end;align-items: flex-end;right: 40">
                    <image style="width: 30;height: 30" :src="path+'/open_icon.png'"/>
                </div>
            </div>
            <div style="height: 150;flex-direction:row;justify-content:center;align-items:center;border-bottom-color: #EEEEEE;border-bottom-width: 1">
                <div style="flex: 0.3;margin-left: 20;">
                    <image style="width: 50;height: 50" :src="path+'/new-msc.png'"/>
                </div>
                <text style="flex: 0.5">新歌新碟</text>
                <div style="flex:2;justify-content: flex-end;align-items: flex-end;right: 40">
                    <image style="width: 30;height: 30" :src="path+'/open_icon.png'"/>
                </div>
            </div>
            <div style="height: 150;flex-direction:row;justify-content:center;align-items:center;border-bottom-color: #EEEEEE;border-bottom-width: 1">
                <div style="flex: 0.3;margin-left: 20;">
                    <image style="width: 50;height: 50" :src="path+'/fdgrth.png'"/>
                </div>
                <text style="flex: 0.5">新粉丝</text>
                <div style="flex:2;justify-content: flex-end;align-items: flex-end;right: 40">
                    <image style="width: 30;height: 30" :src="path+'/open_icon.png'"/>
                </div>
            </div>
        </div>
    </scroller>
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