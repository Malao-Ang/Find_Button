<template>
    <head>
        <title>Level 4</title>
    </head>
    <body id="level4">
        <h1 >Level 4</h1>
        <h1 class="animate-bounce" id="text">{{ text }}</h1>
		<div>
			<div class="pizza">
            <p @click.prevent="notHere" class="papergreen"></p>
            <p @click.prevent="notHere" class="papergreen"></p>
            <p @click.prevent="notHere" class="papergreen"></p>
            <p @click.prevent="notHere" class="papergreen"></p>
            <p @click.prevent="notHere" class="papergreen"></p>
            <p @click.prevent="notHere" class="papergreen"></p>

            <p @click.prevent="notHere" class="peperrony one"></p>
            <p @click.prevent="notHere" class="peperrony two"></p>
            <p @click.prevent="notHere" class="peperrony three"></p>
            <p @click.prevent="notHere" class="peperrony four"></p>
            <p @click.prevent="notHere" class="peperrony five"></p>
            <button>
                <a href="/game/level-5"><p class="peperrony six"></p></a>
            </button>
            <p @click.prevent="notHere" class="peperrony seven"></p>
            <p @click.prevent="notHere" class="peperrony eight"></p>
            <p @click.prevent="notHere" class="peperrony nine"></p>
            <p @click.prevent="notHere" class="peperrony ten"></p>
            <p @click.prevent="notHere" class="peperrony eleven"></p>
        </div>
		</div>
        
    </body>
</template>

<script>
// const bg = document.getElementsById('level4');
export default {
    data() {
        return {
            text: "🔎 The button is on the pizza face, Find it. 🔎",
        };
    },
    methods: {
        notHere() {
			this.text = '🧨 Try Again 🧨';
            return this.text;
        },
        IamHere() {
            this.text = "✨ Yess ✨";
            return this.text;
        },
    },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Mitr&display=swap");
body{
	height: 100%;
	background-color: rgb(18, 16, 19);
	margin: 0px;
}
div{
	height: 100vh;
	background-color: rgb(18, 16, 19);
}
h1 {
    font-family: "Mitr", sans-serif;
    font-size: 4vw;
}
h2 {
    font-family: "Mitr", sans-serif;
    font-size: 2vw;
}
.pizza {
    position: relative;
    display: flex;
    margin: 10vh auto;
    width: 300px;
    height: 300px;
    border-radius: 100%;
    border: 20px solid #e6ba95;
    background-color: rgb(255, 230, 188);
}
p {
    cursor: pointer;
    position: absolute;
}
.papergreen {
    width: 25px;
    height: 10px;
    background-color: rgb(162, 179, 139);
}
.papergreen:nth-child(1) {
    top: 20px;
    left: 100px;
}
.papergreen:nth-child(2) {
    top: 50px;
    left: 180px;
}
.papergreen:nth-child(3) {
    top: 200px;
    left: 80px;
}
.papergreen:nth-child(4) {
    top: 100px;
    left: 50px;
}
.papergreen:nth-child(5) {
    top: 200px;
    left: 200px;
}
.papergreen:nth-child(6) {
    top: 140px;
    left: 150px;
}
/* paperrony */
.peperrony {
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    border: 2px solid rgb(169, 52, 16);
    background-color: rgb(241, 74, 22);
}
.one {
    top: 20px;
    left: 70px;
}
.two {
    top: 70px;
    left: 110px;
}
.three {
    top: 130px;
    left: 10px;
}
.four {
    top: 130px;
    left: 70px;
}
.five {
    top: 130px;
    left: 160px;
}
.six {
    top: 110px;
    left: 210px;
}
.seven {
    top: 190px;
    left: 110px;
}
.eight {
    top: 190px;
    left: 50px;
}
.nine {
    top: 190px;
    left: 170px;
}
.ten {
    top: 65px;
    left: 30px;
}
.eleven {
    top: 50px;
    left: 170px;
}

.papergreen:nth-child(1) {
    top: 10px;
    left: 110px;
}
.papergreen:nth-child(2) {
    top: 60px;
    left: 110px;
}
</style>