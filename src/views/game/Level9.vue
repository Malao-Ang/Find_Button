<template>

	<head>
		<link href="https://cdn.jsdelivr.net/npm/daisyui@2.15.0/dist/full.css" rel="stylesheet" type="text/css" />
		<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2/dist/tailwind.min.css" rel="stylesheet"
			type="text/css" />
		<title>Level 9</title>
	</head>

	<body>
		<div class="description">
			<h1>Level 9</h1>
			<h2 class="animate-bounce">🌟 Find the Orion's Belt 🌟</h2>
		
		</div>
		<button v-if="one && two && three" class="btn btn-outline btn-secondary btn-wide mt-12 mr-1.5"><a href="/game/level-10">Go to Next Level</a> </button>
		<div class="btn-group">
			<img class="nineparn" src="@/assets/img/ninepran.jpg">
			<button @click="clickOne" id="one"></button>
			<button @click="clickTwo" id="two"></button>
			<button @click="clickThree" id="three"></button>
		</div>
		
	</body>
</template>

<script>
export default {
	data() {
		return {
			one: false,
			two: false,
			three: false,
		}
	},
	methods: {
		clickOne() {
			return this.one = !this.one
		},
		clickTwo() {
			return this.two = !this.two
		},
		clickThree() {
			return this.three = !this.three
		}

	}
}
</script>

<style scoped>
body {
	height: 200vh;
	background-image: url("https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=893&q=80");
}

.description h1 {
	font-family: "Mitr", sans-serif;
	font-size: 6vw;
	color: #A2B38B;
	cursor: pointer;
}

.description h2 {
	font-family: "Mitr", sans-serif;
	font-size: 4vw;
	cursor: pointer;
	color: #A2B38B;
}



.nineparn {
	width: 100%;
	background-image: url("https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=893&q=80");
}

.btn-group {
	margin: auto;
	position: relative;
	max-width: 400px;

}

.btn-group button {
	position: absolute;
	border-radius: 100%;
	width: 20px;
	height: 20px;
	background-color: rgba(248, 248, 248, 0.1);
}

#one {
	top: 70%;
	left: 38%;
}

#two {
	top: 68%;
	left: 42%;
}

#three {
	top: 65%;
	left: 47%;
}
</style>