<template>
    <div class="row">
    <div class="col-xs-6 col-md-4"></div>
    <div class="col-xs-6 col-md-4">
        <div class="sun"></div>
        <div class="roof"></div>
        <div class="wall">
            <div class="window left"></div>
            <div class="window right"></div>
            <div class="door">
                <div class="locker"></div>
            </div>
            <div class="mailBox"></div>
        </div>
    </div>
    <div class="col-xs-6 col-md-4"></div>

    </div>
</template>


<script>
export default {
    name: 'building',
}
</script>

<style>
.sun {
    float: right;
    width: 21%;
    height: 13vh;
    background-color: yellow;
    border-radius: 50%;
}
.roof {
    clear: both;
    border-left: 241px solid transparent;
    border-right: 241px solid transparent;
    border-bottom: 192px solid red;
}

.wall {
    width: 100%;
    height: 45vh;
    background-color: grey;
    position: relative;
}

.window{
    position: absolute;
    width: 19%;
    height: 13vh;
    background-color: lightblue;
    border: 2px solid blue;
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
    background-color: lightcoral;
    bottom: 0;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
}

.locker {

}

.mailBox {
    position: absolute;
    right: 40px;
    bottom: 80px;
    width: 25%;
    height: 10vh;
    background-color: lightslategrey;
}

</style>