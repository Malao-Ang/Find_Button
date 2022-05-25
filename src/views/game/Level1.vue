<template>
    <head>
        <title>Level 1</title>
    </head>
    <body>
        <div class="description">
            <h1>Level 1</h1>
            <h2>🔍 Find the button 🔍</h2>
        </div>
        <div class="find">
            <button id="nextGame"  :style="[RandomX, RandomY]" @click="Clicked">
            <a href="/game/level-2">Hello Boy</a>
            </button>
        </div>
    </body>
</template>


<script>
import BgLikeButton from '@/components/BgLikeButton.vue';
const buttonLoc = document.getElementById("nextGame");
export default {
	data() {
		return {
			nextLevel:2,
		}
	},
	components: {
		BgLikeButton
	},methods: {
        Clicked() {
            this.clicked = true;
            console.log(this.clicked);
        },

        RandomY() {
            return (this.locY = Math.floor(Math.random() * 1000));
        },
    },
    computed: {
        RandomX() {
            const locX = Math.floor(Math.random() * 300);

            return { left: locX + "px" };
        },
        RandomY() {
            const locY = Math.floor(Math.random() * 700);
            return { top: locY + "px" };
        },
    },
	
};
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

