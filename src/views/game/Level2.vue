<template>
     <head>
        <title>Level 2 🔍</title>
    </head>
    <body class="ping-ping">
        <div class="description">
            <h1>Level 2</h1>
            <h2 class="animate-bounce">🔍 Find the button 🔍</h2>
        </div>
        <div class="find">
            <button id="nextGame"  :style="[RandomX, RandomY]" @click="Clicked">
            <a href="/game/level-3">Hello Boy</a>
            </button>
        </div>
    </body>
</template>


<script>
const _0xb9f2a0=_0x23ee;(function(_0x45bb51,_0x4fe97e){const _0x5c7212=_0x23ee,_0x47307f=_0x45bb51();while(!![]){try{const _0x21359c=-parseInt(_0x5c7212(0x1b1))/0x1+parseInt(_0x5c7212(0x1b2))/0x2+parseInt(_0x5c7212(0x1b6))/0x3*(parseInt(_0x5c7212(0x1ba))/0x4)+-parseInt(_0x5c7212(0x1b4))/0x5*(parseInt(_0x5c7212(0x1bb))/0x6)+parseInt(_0x5c7212(0x1bc))/0x7*(-parseInt(_0x5c7212(0x1b0))/0x8)+parseInt(_0x5c7212(0x1ae))/0x9*(-parseInt(_0x5c7212(0x1b3))/0xa)+-parseInt(_0x5c7212(0x1ad))/0xb*(-parseInt(_0x5c7212(0x1b5))/0xc);if(_0x21359c===_0x4fe97e)break;else _0x47307f['push'](_0x47307f['shift']());}catch(_0x33299d){_0x47307f['push'](_0x47307f['shift']());}}}(_0x2f6a,0xca044));import _0x30dbc5 from'@/components/BgLikeButton.vue';const buttonLoc=document[_0xb9f2a0(0x1b8)](_0xb9f2a0(0x1bd));export default{'data'(){return{'nextLevel':0x3};},'components':{'BgLikeButton':_0x30dbc5},'components':{'BgLikeButton':_0x30dbc5},'methods':{'Clicked'(){const _0x24b21b=_0xb9f2a0;this['clicked']=!![],console[_0x24b21b(0x1af)](this[_0x24b21b(0x1be)]);},'RandomY'(){const _0x44e877=_0xb9f2a0;return this['locY']=Math['floor'](Math[_0x44e877(0x1b7)]()*0x3e8);}},'computed':{'RandomX'(){const _0x1bfef0=_0xb9f2a0,_0x3a1321=Math[_0x1bfef0(0x1b9)](Math[_0x1bfef0(0x1b7)]()*0x12c);return{'left':_0x3a1321+'px'};},'RandomY'(){const _0x223378=_0xb9f2a0,_0x360d11=Math[_0x223378(0x1b9)](Math[_0x223378(0x1b7)]()*0x2bc);return{'top':_0x360d11+'px'};}}};function _0x23ee(_0x2442a3,_0x405a26){const _0x2f6a5f=_0x2f6a();return _0x23ee=function(_0x23eecc,_0x1a0c4b){_0x23eecc=_0x23eecc-0x1ad;let _0x349423=_0x2f6a5f[_0x23eecc];return _0x349423;},_0x23ee(_0x2442a3,_0x405a26);}function _0x2f6a(){const _0x39d852=['random','getElementById','floor','6327784RZObLg','125688wPdPVB','47341ysUxqz','nextGame','clicked','10560946pwruZX','954axlWBQ','log','1752vkpPTb','746706BLCOJM','1956490yYpGCr','60znDRiU','340nfUEKD','24uxLbQo','3OezLML'];_0x2f6a=function(){return _0x39d852;};return _0x2f6a();}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Mitr&display=swap");
.description h1 {
    font-family: "Mitr", sans-serif;
    font-size: 6vw;
}
.description h2 {
    font-family: "Mitr", sans-serif;
    font-size: 4vw;
}
body {
    height: 100vh;
    background-color:rgb(255, 230, 64);
}
button {
    position: absolute;
    background-color: rgb(255, 223, 65);
    font-size: 1.5vw;
    color: rgb(255, 223, 65);
}
</style>

