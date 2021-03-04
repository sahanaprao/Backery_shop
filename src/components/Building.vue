<template>
    <div class="row">
    <div class="col-xs-6 col-md-4"></div>
    <div class="col-xs-6 col-md-4">
        <div class="star" v-bind:class="{'moon': isDarkTheme, 'sun': !isDarkTheme}" @click="themeChange(isDarkTheme = !isDarkTheme)"></div>
        <!-- <div class="backery"> -->
            <div class="roof"></div>
            <div class="backery-name">
                <p style="margin-top: 0.5rem;">COOKIE BACKERY</p>
            </div>
            <div class="wall">
                <div class="window left" v-show="!isCookie.left" @mouseover="transformCookie(true,'left')"></div>
                <img src="images/cookie.jfif" alt="cookie" class="window left" v-show="isCookie.left" @mouseout="transformCookie(false,'left')"/>

                <div class="window right" v-show="!isCookie.right" @mouseover="transformCookie(true,'right')" ></div>
                <img src="images/cookie.jfif" alt="cookie" class="window right" v-show="isCookie.right" @mouseout="transformCookie(false,'right')"/>

                <div class="door" @click="makeOrder()">
                    <div class="locker"></div>
                </div>
                <div class="mail-box" v-bind:class="{'fall':fall}" @click="mailBox()">
                    <div class="opener"></div>
                    <p>Mailbox</p>
                </div>
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
        isDarkTheme: false,
        fall: false,
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
            if(document.documentElement.getAttribute('data-theme') !== 'dark')
                this.isCookie[side] = isCookie;
        },
        makeOrder: function () {

        },
        mailBox: function () {
            this.fall = !this.fall;
        }
    }
}
</script>

<style>

.star {
    float: right;
    width: 20%;
    height: 13vh;
    border-radius: 50%;
    cursor: pointer;
}

.sun {
    background-color: rgb(255, 255, 1);
}

.moon {
    background-color: #ede7ce;
    border: 2px solid #e6dfc3;
    box-shadow: 0px 0px 70px 4px rgb(230 223 195);
}

.roof {
    width: 95%;
    clear: both;
    border-left: 234px solid transparent;
    border-right: 221px solid transparent;
    border-bottom: 225px solid rgb(221, 126, 106);
}

.wall {
    width: 95%;
    height: 45vh;
    background-color: rgb(204, 204, 204);
    position: relative;
}

.window{
    position: absolute;
    width: 19%;
    height: 12vh;
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
    width: 20%;
    height: 1vh;
    background-color: rgb(182, 96, 11);
    margin-top: 84%;
    margin-left: 10%;
}

.opener {
    margin: auto;
    margin-top: 10px;
    width: 80%;
    height: 1.5vh;
    background-color: rgb(103, 103, 103);
}

p {
    color: rgb(103, 103, 103);
}

.mail-box {
    position: absolute;
    right: 40px;
    bottom: 80px;
    width: 25%;
    height: 10vh;
    background-color: rgb(153, 153, 153);
    cursor: pointer;
}

.fall {
    animation: falling 1s, rotate 2s;
    animation-delay: 0s, 1s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards, both;
}

.backery-name {
   width: 41%;
    height: 7vh;
    background-color: rgb(149, 199, 130);
    z-index: 5;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    text-align: center;
    border: 4px solid rgb(106, 163, 82);
}

@keyframes falling { 
   0% {bottom: 25%;}
   100%{bottom:0%;}
}
@keyframes rotate { 
   0% {-webkit-transform: rotateX(0deg);}
   100%{-webkit-transform:rotateX(360deg);}
}
</style>