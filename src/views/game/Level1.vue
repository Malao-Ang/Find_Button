<template>

    <head>
        <link
        href="https://cdn.jsdelivr.net/npm/daisyui@2.15.0/dist/full.css"
        rel="stylesheet"
        type="text/css"
    />
    <link
        href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2/dist/tailwind.min.css"
        rel="stylesheet"
        type="text/css"
    />
        <title>Level 1</title>
    </head>
    <body >
        <div class=" description ">
                <h1>Level 1</h1><br>
                <h2 class="animate-bounce">🔍 Find the button 🔍</h2>
                
        </div>
        <div class="find">
            <button id="nextGame"  :style="[RandomX, RandomY]" @click="Clicked">
            <a href="/game/level-2">Hello Boy</a>
            </button>
        </div>
    </body>
</template>


<script>

const _0x2b1bb3=_0x1cb9;function _0x1cb9(_0x55fded,_0x33714e){const _0x452827=_0x4528();return _0x1cb9=function(_0x1cb948,_0x192422){_0x1cb948=_0x1cb948-0x1e5;let _0x523a2f=_0x452827[_0x1cb948];return _0x523a2f;},_0x1cb9(_0x55fded,_0x33714e);}(function(_0x55e977,_0x2d8733){const _0x516508=_0x1cb9,_0x2055ab=_0x55e977();while(!![]){try{const _0x5a7659=-parseInt(_0x516508(0x1f3))/0x1+parseInt(_0x516508(0x1ed))/0x2+parseInt(_0x516508(0x1f5))/0x3+parseInt(_0x516508(0x1e8))/0x4*(-parseInt(_0x516508(0x1f1))/0x5)+parseInt(_0x516508(0x1f4))/0x6*(parseInt(_0x516508(0x1ef))/0x7)+-parseInt(_0x516508(0x1ec))/0x8*(-parseInt(_0x516508(0x1e6))/0x9)+-parseInt(_0x516508(0x1e7))/0xa*(parseInt(_0x516508(0x1e5))/0xb);if(_0x5a7659===_0x2d8733)break;else _0x2055ab['push'](_0x2055ab['shift']());}catch(_0x33f265){_0x2055ab['push'](_0x2055ab['shift']());}}}(_0x4528,0x37271));import _0x58b335 from'@/components/BgLikeButton.vue';const buttonLoc=document[_0x2b1bb3(0x1e9)](_0x2b1bb3(0x1eb));function _0x4528(){const _0x45a050=['223013FydWMl','random','5ZyGuif','clicked','2541Vzwadt','30EVMYgw','1289607AnznSJ','374AQwVZP','126uzgESz','270190EHkwlG','49332rKEPFg','getElementById','floor','nextGame','137864Mdtrmn','657998jCDIyI','locY'];_0x4528=function(){return _0x45a050;};return _0x4528();}export default{'data'(){return{'nextLevel':0x2};},'components':{'BgLikeButton':_0x58b335},'methods':{'Clicked'(){const _0x21c64a=_0x2b1bb3;this[_0x21c64a(0x1f2)]=!![],console['log'](this[_0x21c64a(0x1f2)]);},'RandomY'(){const _0x215cec=_0x2b1bb3;return this[_0x215cec(0x1ee)]=Math[_0x215cec(0x1ea)](Math['random']()*0x3e8);}},'computed':{'RandomX'(){const _0x202c5b=_0x2b1bb3,_0x9bdced=Math[_0x202c5b(0x1ea)](Math[_0x202c5b(0x1f0)]()*0x12c);return{'left':_0x9bdced+'px'};},'RandomY'(){const _0x48b1bc=_0x2b1bb3,_0x595d2a=Math[_0x48b1bc(0x1ea)](Math[_0x48b1bc(0x1f0)]()*0x2bc);return{'top':_0x595d2a+'px'};}}};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Mitr&display=swap");
body {
    height: 100vh;
	background-color:rgb(235, 89, 110);
}

.description h1 {
    font-family: "Mitr", sans-serif;
    font-size: 6vw;
	cursor: pointer;
}
.description h2 {
    font-family: "Mitr", sans-serif;
    font-size: 4vw;
	cursor: pointer;

}
button {
    position: absolute;
    background-color: rgb(235, 89, 90);
    font-size: 1.5vw;
    color: rgb(235, 89, 90);
}

</style>

