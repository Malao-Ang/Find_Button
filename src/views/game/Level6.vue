<template>
    <head>
		<link
                rel="stylesheet"
                href="https://unpkg.com/kursor/dist/kursor.css"
            />
        <title>Level 6</title>
    </head>
    <body>
        <div>
            <h1>Level 6</h1>
            <h2 class="animate-bounce">🔍 Find the button 🔍</h2>
			<h2>{{text}}</h2>
        </div>
		<div class="img-button">
			<button @click="Correct()" class="animate-pulse kirito" >
				<a href="/game/level-7"><img id="real" src="@/assets/img/kirito.png"></a>
			</button>
			<button @click="Wrong" class="animate-pulse kirito">
				<img  id="fake1" src="@/assets/img/kirito_face.png">
			</button>
			<button  @click="Wrong" class="animate-pulse kirito" >
				<img id="fake2" src="@/assets/img/kirito1.png">
			</button>
		</div>
    </body>
</template>

<script>
export default {
	data() {
		return {
			text:'⚔ How is Kirito from Sword Art Online ⚔',
		}
	},
	computed:{
		Wrong(){
			 this.text = "💢I'm Kirito Isakai💢";
			return text

		},
		Correct(){
			 this.text = "💖I'm Kirito !!!💖";
			return this.text
		},
	}
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
body{
	background-color: rgb(18, 16, 19);
}
.img-button{
	margin-top: 100px;
	background-color: rgb(18, 16, 19);
}
.kirito{
	filter: brightness(50%);
    background-color: rgba(18, 16, 10,0.5);

}
.kirito:hover{
	filter: brightness(1);
	transform: scale(1.2);
	transition: all 0.5s ease-in 1;
    background-color: rgb(18, 16, 19);

}
body {
    height: 100vh;
    background-color: rgb(18, 16, 19);
    /* background-color:#fff; */
}
.kirito{
	display:inline-block;
    background-color: rgb(18, 16, 19);

}
#real{
	width:180px;
	height:500px;
    /* background-color: rgb(18, 16, 19); */

}
#fake1{
	width:340px;
	height:500px;
    /* background-color: rgb(18, 16, 19); */

}
#fake2{
	width:240px;
	height:500px;
	object-fit: cover;
    /* background-color: rgb(18, 16, 19); */

}

</style>