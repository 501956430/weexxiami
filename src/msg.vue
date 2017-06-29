<template>
    <scroller style="background-color: #F8F8F8;" append="tree">
        <refresh class="refresh-view" :display="refresh_display" @refresh="onrefresh">
            <img id="roate" ref="roate" src="http://gw.alicdn.com/bao/uploaded/TB1xDrVNFXXXXbEXFXXXXXXXXXX-48-48.png" style="width: 50px;height: 50px;"></img>
        </refresh>
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
</template>

<script>
    var api = require('./api.js');
    export default {
        data: {
            refresh_display: 'hide',
            path:api.apiurl.path,
        },
        methods: {
            onrefresh: function(e) {
                var self = this;
                self.refresh_display = 'show';
                setTimeout(function () {
                    self.refresh_display = 'hide';
                }, 3000)
            }
        }
    }
</script>

<style>
    .refresh-view {
        height: 120px;
        width: 750px;
        display: -ms-flex;
        display: -webkit-flex;
        display: flex;
        -ms-flex-align: center;
        -webkit-align-items: center;
        -webkit-box-align: center;
        align-items: center;
    }
</style>