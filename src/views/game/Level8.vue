<template>

	<head>
		<link rel="stylesheet" href="https://unpkg.com/kursor/dist/kursor.css" />
		<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2/dist/tailwind.min.css" rel="stylesheet"
			type="text/css" />
		<title>Level 8</title>
	</head>
	<body>
		<div class=" description ">
			<h1>Level 8</h1><br>
			<h2 class="animate-bounce">🔍 Apple is a button Let's find a button. 🔍</h2>
		</div>
		<div class="cloud">
			<img src="@/assets/img/clound.png">
			<img src="@/assets/img/clound.png">
		</div>
		<div class="tree">
			<button id="tree" @click="count"><img src="@/assets/img/tree.png"></button>
			
			<button v-if="time >= 10" class="btn-apple" >
				<a href="/game/level-9"><img id="apple" src="@/assets/img/apple.png"></a>
			</button>
		</div>
		<div class="ground"></div>
	</body>
</template>

<script>
export default {
	data() {
		return {
			time:0,
		}
	},methods: {
		count(){
			this.time++;
			return this.time
		}
	}

}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Mitr&display=swap");

.description h1 {
	font-family: "Mitr", sans-serif;
	font-size: 6vw;
	color: #FEF9EF;
	cursor: pointer;
}

.description h2 {
	font-family: "Mitr", sans-serif;
	font-size: 4vw;
	cursor: pointer;
	color: #FEF9EF;
}

body{
	height:100vh;
	background:#A2D2FF;
}
.cloud img{
	position:absolute;
	width:20vw;
	object-fit: cover;
	display:block;

}
.cloud img:nth-child(2){
	top:50vh;
	left:80vw;
	
}
.tree {
	position:relative;
	width:100vw;
	object-fit: cover;
	top:80px;
	display:flex;
	align-items: center;
	justify-content:center;
	margin: 0;
	padding: 0;
	background:#A2D2FF;

}
.ground{
	position:absolute;
	background-color:#91C483;
	width:100vw;
	height:15vh;
}
.tree #tree:active{
	transform: translateX(-10px);
}
.cloud button:active{
	transform: translateY(-10px);
}
#apple{
	position:absolute;
	width:5.5vw;
	height:6vw;
	/* object-fit: cover; */
	left:55vw;

}

</style>