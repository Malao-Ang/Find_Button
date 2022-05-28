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
export default {
    mounted() {
        var cursor = document.getElementById("cursor");
        var cursor2 = document.getElementById("cursor2");
        document.addEventListener("mousemove", (e) => {
            cursor.style.cssText = cursor2.style.cssText =
                "left :" + e.clientX + "px; top: " + e.clientY + "px;";
        });
    },
    methods: {
        Clicked() {
            this.clicked = true;
            console.log(this.clicked);
        },
    },
    computed: {
        RandomX() {
            const locX = Math.floor(Math.random() * 300);

            return { left: locX + "px" };
        },
        RandomY() {
            const locY = Math.floor(Math.random() * 300);
            return { top: locY + "px" };
        },
    },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Mitr&display=swap");
h1 {
    font-family: "Mitr", sans-serif;
    font-size: 6vw;
}
h2 {
    font-family: "Mitr", sans-serif;
    font-size: 4vw;
}
body {
    height: 100vh;
    background-color: rgb(18, 16, 19);
    /* background-color:#fff; */
}
button a {
    color: rgb(25, 23, 25);
    border: 2px solid rgb(25, 23, 25);
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