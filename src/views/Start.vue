<template>

<div id="app">
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
    <title>Find the button</title>
    <h1>Find the button</h1>
    <div class="logo">
        <button class="btn btn-accent btn-wide big-btn"><a href="/">FIND ME</a></button>
        <p class="rule-to-play">
            Welcome to the <span>FIND BUTTON</span> game. The rules are simple
            to play. You will need to find a button to go to the next level. The
            first 3 people who pass all the stages will receive a prize.
        </p>
    </div>
    <div class="group-button">
        <button class="btn btn-success btn-wide btn-menu"><a href="/game/level-1">Start Game</a></button><br />
        <button class="btn btn-outline btn-success  mini" @click="GoToDev()">
Developer
        </button>
        <button class="btn btn-outline btn-accent  mini" >
        Donate
        </button>
    </div>
</div>
    
</template>


<script>
export default {
	methods:{
		GoToDev(event){
			this.$router.push( "/dev");
            console.log("GoToDev");
		}
	}
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Mitr&display=swap");
body,.group-button{
    height: 120vh;
    background-color: rgb(18, 16, 19);
}
h1 {
    font-family: "Pacifico", cursive;
    font-size: 8vw;
    color: rgb(235, 235, 235);
    text-shadow: 0 0 5px rgb(254, 255, 219);
    cursor: pointer;
}
.big-btn {
    width:70vw;
    height:20vh;
    margin: 5vh 0;
    font-size: 5vw;
}
.rule-to-play {
    font-family: "Mitr", sans-serif;
    font-size: 2.5vh;
    margin: 7vh 5vw;
    cursor: pointer;
    text-shadow: 0 0 1px rgb(253, 255, 234);
}
.btn-menu {
    margin-bottom: 2vh;
    font-size: 4vw;
    width:30vw;
    height: 8vh;
}
.mini {
    font-size: 2vw;
    margin:0 5px;
}
span {
    color: rgb(235, 89, 110);
}
</style>
