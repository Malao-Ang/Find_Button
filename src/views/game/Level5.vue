<template>
    <html>
        <head>
            <link
                rel="stylesheet"
                href="https://unpkg.com/kursor/dist/kursor.css"
            />
            <title>Level 5</title>
        </head>
        <body>
            <h1>Level 5</h1>
            <h2 class="animate-bounce">🔍 Find the button 🔍</h2>
            <h2>Take a flashlight in your hand.</h2>
            <div>
                <button
                    id="nextGame"
                    :style="[RandomX, RandomY]"
                    @click="Clicked"
                >
                    <a href="/game/level-6">I'am Here</a>
                </button>
                <div id="cursor"></div>
                <div id="cursor2"></div>
            </div>
        </body>
    </html>
</template>
<script>
function _0x1c4e(){var _0xc5a9c0=['clientY','106Czxiai','cssText','12022xAHncM','2708658gUoPxa','clicked','mousemove','11PzKdYC','16996AoXePs','getElementById','cursor2','log','77dNkPSf','floor','random','469590zVyuqa','867093ReVLOR','px;','px;\x20top:\x20','clientX','954256GWDlgv','725zLCqWs','8938520gxwmOE','style'];_0x1c4e=function(){return _0xc5a9c0;};return _0x1c4e();}(function(_0x368677,_0x10f509){var _0x38f9b1=_0x15b8,_0x4a0b2e=_0x368677();while(!![]){try{var _0x3b70a9=parseInt(_0x38f9b1(0x18f))/0x1*(parseInt(_0x38f9b1(0x191))/0x2)+parseInt(_0x38f9b1(0x19e))/0x3+-parseInt(_0x38f9b1(0x196))/0x4*(parseInt(_0x38f9b1(0x18b))/0x5)+parseInt(_0x38f9b1(0x19d))/0x6*(parseInt(_0x38f9b1(0x19a))/0x7)+-parseInt(_0x38f9b1(0x18a))/0x8+parseInt(_0x38f9b1(0x192))/0x9+parseInt(_0x38f9b1(0x18c))/0xa*(-parseInt(_0x38f9b1(0x195))/0xb);if(_0x3b70a9===_0x10f509)break;else _0x4a0b2e['push'](_0x4a0b2e['shift']());}catch(_0x5d635b){_0x4a0b2e['push'](_0x4a0b2e['shift']());}}}(_0x1c4e,0x70053));function _0x15b8(_0x4a2b28,_0x32fe06){var _0x1c4e57=_0x1c4e();return _0x15b8=function(_0x15b893,_0x350ccd){_0x15b893=_0x15b893-0x187;var _0x5b12e8=_0x1c4e57[_0x15b893];return _0x5b12e8;},_0x15b8(_0x4a2b28,_0x32fe06);}export default{'mounted'(){var _0x848e06=_0x15b8,_0x1a3fa1=document[_0x848e06(0x197)]('cursor'),_0x41ae79=document[_0x848e06(0x197)](_0x848e06(0x198));document['addEventListener'](_0x848e06(0x194),_0x17f77e=>{var _0x1ed9f0=_0x848e06;_0x1a3fa1[_0x1ed9f0(0x18d)]['cssText']=_0x41ae79[_0x1ed9f0(0x18d)][_0x1ed9f0(0x190)]='left\x20:'+_0x17f77e[_0x1ed9f0(0x189)]+_0x1ed9f0(0x188)+_0x17f77e[_0x1ed9f0(0x18e)]+_0x1ed9f0(0x187);});},'methods':{'Clicked'(){var _0x1aec99=_0x15b8;this[_0x1aec99(0x193)]=!![],console[_0x1aec99(0x199)](this[_0x1aec99(0x193)]);}},'computed':{'RandomX'(){var _0xd5b8d=_0x15b8;const _0x566ff1=Math[_0xd5b8d(0x19b)](Math[_0xd5b8d(0x19c)]()*0x12c);return{'left':_0x566ff1+'px'};},'RandomY'(){var _0x7cd318=_0x15b8;const _0x21b61a=Math[_0x7cd318(0x19b)](Math[_0x7cd318(0x19c)]()*0x12c);return{'top':_0x21b61a+'px'};}}};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Mitr&display=swap");
h1 {
    font-family: "Mitr", sans-serif;
    font-size: 6vw;
    color: #fff;
}
h2 {
    font-family: "Mitr", sans-serif;
    font-size: 4vw;
    color: #fff;

}
body {
    height: 100vh;
    background-color: rgb(18, 16, 19);
    /* background-color:#fff; */
}
button a {
    color: rgb(17, 15, 17);
    border: 2px solid rgb(17, 15, 17);
    border-radius: 10%;
    padding: 10px;
}
button {
    margin-top: 10px;
    position: relative;
}
#cursor {
    position: fixed;
    width: 50px;
    height: 50px;
    border: 1px solid #fff;
    left: 0;
    top: 0;
    background-color:#fff;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
}
#cursor2 {
    position: fixed;
    width: 8px;
    height: 8px;
    border: 1px solid #fff;
    left: 0;
    top: 0;
    border-radius: 50%;
    background-color: #fff;
    transform: translate(-50%, -50%);
    pointer-events: none;
}
button:hover ~ #cursor{
    transform: translate(-50%, -50%) scale(2);
    background-color: rgba(255,255,255,0.3);
    color:#fff;
    border: none;
}
button:hover ~ #cursor2{
    opacity: 0;
}
button a:hover{
    color: #fff;
    border: 2px solid #fff;


}
</style>