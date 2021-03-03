<template>
    <div class="row">
    <div class="col-xs-6 col-md-4"></div>
    <div class="col-xs-6 col-md-4">
        <div class="sun" @click="themeChange(isDarkTheme = !isDarkTheme)"></div>
        <!-- <div class="backery"> -->
            <div class="roof"></div>
            <div class="backery-name">
                <span>COOKIE BACKERY</span>
            </div>
            <div class="wall">
                <div class="window left" v-show="!isCookie.left" @mouseover="transformCookie(true,'left')"></div>
                <img src="images/cookie.jfif" alt="cookie" class="window left" v-show="isCookie.left" @mouseout="transformCookie(false,'left')"/>

                <div class="window right" v-show="!isCookie.right" @mouseover="transformCookie(true,'right')" ></div>
                <img src="images/cookie.jfif" alt="cookie" class="window right" v-show="isCookie.right" @mouseout="transformCookie(false,'right')"/>

                <div class="door">
                    <div class="locker"></div>
                </div>
                <div class="mail-box"></div>
            </div>
        <!-- </div> -->
    </div>
    <div class="col-xs-6 col-md-4"></div>

    </div>
</template>


<script>
export default {
    name: 'building',
    data:  function() {
		return {
        isCookie: {
            left : false,
            right : false
            }
        }
    },
    methods: {
        themeChange:  function (isDarkTheme) {
        document.documentElement.setAttribute('data-theme', isDarkTheme?'dark':'light');
        },
        transformCookie: function (isCookie,side) {
            this.isCookie[side] = isCookie;
        }
    }
}
</script>

<style>
.sun {
    float: right;
    width: 21%;
    height: 13vh;
    background-color: rgb(255, 255, 1);
    border-radius: 50%;
}
.roof {
    clear: both;
    border-left: 241px solid transparent;
    border-right: 241px solid transparent;
    border-bottom: 192px solid rgb(221, 126, 106);
}

.wall {
    width: 100%;
    height: 45vh;
    background-color: rgb(204, 204, 204);
    position: relative;
}

.window{
    position: absolute;
    width: 19%;
    height: 13vh;
    background-color: rgb(207, 226, 243);
    border: 2px solid rgb(159, 194, 226);
    border-radius: 50%;
}

.left {
    left: 40px;
    top: 30px;
}

.right {
    right: 40px;
    top: 30px;
}

.door {
    width: 28%;
    height: 35vh;
    background-color: rgb(246, 178, 107);
    bottom: 0;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
}

.locker {

}

.mail-box {
    position: absolute;
    right: 40px;
    bottom: 80px;
    width: 25%;
    height: 10vh;
    background-color: rgb(153, 153, 153);
}

.backery-name {
   width: 41%;
    height: 7vh;
    background-color: hotpink;
    z-index: 5;
    position: absolute;
    left: 0;
    right: 0;
    top: -40px;
    bottom: 0;
    margin: auto;
    text-align: center;
}
</style>