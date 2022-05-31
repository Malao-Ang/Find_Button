<template>

	<head>
		<link rel="stylesheet" href="https://unpkg.com/kursor/dist/kursor.css" />
		<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2/dist/tailwind.min.css" rel="stylesheet"
			type="text/css" />
		<title>Level 7</title>
	</head>

	<body>
		<div class=" description ">
			<h1>Level 7</h1><br>
			<h2 class="animate-bounce">🔍Is there a cat in the picture? 🔍</h2>
			<h2 id="point">{{ point }}/8</h2>
			<button v-if="point===8" class="btn btn-block btn-outline btn-warning">
				<a class="pass" href="/game/level-8">
					✨ Awesome Let's go to the next Level ✨
					</a>
				</button>
			<div v-if="alert === true">
				<Alert></Alert>
			</div>
		</div>
		<div class="question">
			<div v-if="point >= 0" class="cat1">
				<img class="cat-img" src="@/assets/img/cat3.jpg" />
				<button v-if="alert === true" @click="reloadPage" class="btn btn-wide btn-success yes m-auto my-2.5">
					New game
				</button>
				<div v-if="alert === false && point <= 0">
					<button @click="ClickWrong" class="btn btn-wide btn-outline btn-error no m-auto my-2.5">
						NO
					</button>
					<button @click="PLusPoint" class="btn btn-wide btn-success yes m-auto my-2.5">
						Yes
					</button>
				</div>
				<button v-if="alert === false && point >= 1" class="btn btn-success m-auto my-2.5">Clear</button>
			</div>

			<div v-if="point >= 1" class="cat2">
				<img class="cat-img" src="@/assets/img/justroom.png" />
				<button v-if="alert === true" @click="reloadPage" class="btn btn-wide btn-success yes m-auto my-2.5">
					New game
				</button>
				<div v-if="alert === false && point <= 1">
					<button @click="PLusPoint" class="btn btn-wide btn-outline btn-error no m-auto my-2.5">
						NO
					</button>
					<button @click="ClickWrong" class="btn btn-wide btn-success yes m-auto my-2.5">
						Yes
					</button>
				</div>
				<button v-if="alert === false && point >= 2" class="btn btn-success m-auto my-2.5">Clear</button>
			</div>

			<div v-if="point >= 2" class="cat3">
				<img class="cat-img" src="@/assets/img/cat2.jpg" />
				<button v-if="alert === true" @click="reloadPage" class="btn btn-wide btn-success yes m-auto my-2.5">
					New game
				</button>
				<div v-if="alert === false && point <= 2">
					<button @click="ClickWrong" class="btn btn-wide btn-outline btn-error no m-auto my-2.5">
						NO
					</button>
					<button @click="PLusPoint" class="btn btn-wide btn-success yes m-auto my-2.5">
						Yes
					</button>
				</div>
				<button v-if="alert === false && point >= 3" class="btn btn-success m-auto my-2.5">Clear</button>
			</div>

			<div v-if="point >= 3" class="cat4">
				<img class="cat-img" src="@/assets/img/cat6.jpg" />
				<button v-if="alert === true" @click="reloadPage" class="btn btn-wide btn-success yes m-auto my-2.5">
					New game
				</button>
				<div v-if="alert === false && point <= 3">
					<button @click="ClickWrong" class="btn btn-wide btn-outline btn-error no m-auto my-2.5">
						NO
					</button>
					<button @click="PLusPoint" class="btn btn-wide btn-success yes m-auto my-2.5">
						Yes
					</button>
				</div>
				<button v-if="alert === false && point >= 4" class="btn btn-success m-auto my-2.5">Clear</button>
			</div>

			<div v-if="point >= 4" class="cat5">
				<img class="cat-img" src="@/assets/img/cat8.jpg" />
				<button v-if="alert === true" @click="reloadPage" class="btn btn-wide btn-success yes m-auto my-2.5">
					New game
				</button>
				<div v-if="alert === false && point <= 4">
					<button @click="PLusPoint" class="btn btn-wide btn-outline btn-error no m-auto my-2.5">
						NO
					</button>
					<button @click="ClickWrong" class="btn btn-wide btn-success yes m-auto my-2.5">
						Yes
					</button>
				</div>
				<button v-if="alert === false && point >= 5" class="btn btn-success m-auto my-2.5">Clear</button>
			</div>

			<div v-if="point >= 5" class="cat6">
				<img class="cat-img" src="@/assets/img/cat10.jpg" />
				<button v-if="alert === true" @click="reloadPage" class="btn btn-wide btn-success yes m-auto my-2.5">
					New game
				</button>
				<div v-if="alert === false && point <= 5">
					<button @click="ClickWrong" class="btn btn-wide btn-outline btn-error no m-auto my-2.5">
						NO
					</button>
					<button @click="PLusPoint" class="btn btn-wide btn-success yes m-auto my-2.5">
						Yes
					</button>
				</div>
				<button v-if="alert === false && point >= 6" class="btn btn-success m-auto my-2.5">Clear</button>
			</div>

<div v-if="point >= 6" class="cat7">
				<img class="cat-img" src="@/assets/img/cat7.jpg" />
				<button v-if="alert === true" @click="reloadPage" class="btn btn-wide btn-success yes m-auto my-2.5">
					New game
				</button>
				<div v-if="alert === false && point <= 6">
					<button @click="ClickWrong" class="btn btn-wide btn-outline btn-error no m-auto">
						NO
					</button>
					<button @click="PLusPoint" class="btn btn-wide btn-success yes m-auto my-2.5">
						Yes
					</button>
				</div>
				<button v-if="alert === false && point >= 7" class="btn btn-success m-auto my-2.5">Clear</button>
			</div>

			<div v-if="point >= 7" class="cat8">
				<img class="cat-img" src="@/assets/img/TOH_39.jpg">
				<button v-if="alert === true" @click="reloadPage" class="btn btn-wide btn-success yes m-auto my-2.5">
					New game
				</button>
				<div v-if="alert === false && point <= 7">
					<button @click="PLusPoint" class="btn btn-wide btn-outline btn-error no m-auto my-2.5">
						NO
					</button>
					<button @click="ClickWrong" class="btn btn-wide btn-success yes m-auto my-2.5">
						Yes
					</button>
				</div>
				<button v-if="alert === false && point >= 8" class="btn btn-success m-auto my-2.5"><a href="#point">Clear</a></button>
			</div>

		</div>


	</body>
</template>

<script>
import Alert from '@/components/Alert.vue';
import cat1 from '@/components/cat1.vue';
import cat2 from '@/components/cat2.vue';
export default {
	data() {
		return {
			point: 0,
			alert: false,
		}
	},
	components: {
		Alert,
		cat1,
		cat2,
	},
	methods: {
		ClickWrong() {
			return this.alert = true;
		},
		ClickCorrect() {
			return this.alert = false;
		},
		reloadPage() {
			window.location.reload();
		},
		PLusPoint() {
			this.point += 1;
		}
	},
	components: {
		Alert
	}
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Mitr&display=swap");

body {
	height: 100vh;
	background-color: #FAFDD6;
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

.question {
	background-color: #FAFDD6;
	margin-bottom: 100px;
}

.cat-img {
	display: block;
	margin: auto;
	margin-top: 20px;
	width: 300px;
	object-fit: cover;
	margin-bottom: 20px;
}

.no {
	margin-right: 20px;
}
.pass{
	font-size: 3vw;
}
</style>