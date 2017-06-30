<template>
    <div style="flex-direction: column;">
        <tabbar :tabItems="tabItems" @tabBarOnClick="tabBarOnClick"></tabbar>
    </div>
</template>

<script>
    var modal  = weex.requireModule('modal');
    var api = require('./api.js');
    export default {
        data: {
            tabItems: [
                {
                    index: 0,
                    title: '首页',
                    titleColor: '#000000',
                    icon: '',
                    image: 'http://gtms01.alicdn.com/tps/i1/TB1qw.hMpXXXXagXXXX9t7RGVXX-46-46.png',
                    selectedImage: 'http://gtms04.alicdn.com/tps/i4/TB16jjPMpXXXXazXVXX9t7RGVXX-46-46.png',
                    src: '/index.js',
                    visibility: 'visible',
                },
                {
                    index: 1,
                    title: '我的',
                    titleColor: '#000000',
                    icon: '',
                    image: 'http://gtms01.alicdn.com/tps/i1/TB1B0v5MpXXXXcvXpXX9t7RGVXX-46-46.png',
                    selectedImage: 'http://gtms04.alicdn.com/tps/i4/TB1NxY5MpXXXXcrXpXX9t7RGVXX-46-46.png',
                    src: '/my.js',
                    visibility: 'hidden',
                },
                {
                    index: 2,
                    title: '消息',
                    titleColor: '#000000',
                    icon: '',
                    image: 'http://gtms01.alicdn.com/tps/i1/TB1B0v5MpXXXXcvXpXX9t7RGVXX-46-46.png',
                    selectedImage: 'http://gtms04.alicdn.com/tps/i4/TB1NxY5MpXXXXcrXpXX9t7RGVXX-46-46.png',
                    src: '/msg.js',
                    visibility: 'hidden',
                },
                {
                    index: 3,
                    title: '更多',
                    titleColor: '#000000',
                    icon: '',
                    image: 'http://gtms01.alicdn.com/tps/i1/TB1B0v5MpXXXXcvXpXX9t7RGVXX-46-46.png',
                    selectedImage: 'http://gtms04.alicdn.com/tps/i4/TB1NxY5MpXXXXcrXpXX9t7RGVXX-46-46.png',
                    src: '/more.js',
                    visibility: 'hidden',
                }
            ]
        },
        components: {
            tabbar: require('./include/tabbar.vue')
        },
        created: function() {

            var bundleUrl = api.apiurl.getUrl()

            for(var i = 0; i < this.tabItems.length; i++) {
                var tabItem = this.tabItems[i];
                tabItem.src = bundleUrl + tabItem.src;
            }
        },
        methods: {
            tabBarOnClick (e) {
                console.log('tabBarOnClick', e.index)
            }

        }
    }
</script>

<style>

</style>