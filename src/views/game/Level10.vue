<template>

	<head>
		<link href="https://cdn.jsdelivr.net/npm/daisyui@2.15.0/dist/full.css" rel="stylesheet" type="text/css" />
		<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2/dist/tailwind.min.css" rel="stylesheet"
			type="text/css" />
		<title>Level 10</title>
	</head>

	<body>
		<div class="description">
			<h1>Level 10</h1>
			<h2 class="animate-bounce">🌷 Make it look like a tulip. 🌷</h2>
		</div>
		<div class="exam-tilip">
			<img style="width:100px;height:100px;margin:auto;" src="@/assets/img/tilip.png">
		</div>
		<div>
			<l10/>
		</div>

	</body>
</template>

<script>
import l10 from '@/components/l10.vue'
export default {
	data() {
		return {
			clicked: false,
		}
	},
	components: {
		l10

	}

}
</script>

<style>
body {
	height: 150vh;
	background-color: #FF865E;
}

.description h1 {
	font-family: "Midiv", sans-serif;
	font-size: 6vw;
	color: #f8faf6;
	cursor: pointer;
}

.description h2 {
	font-family: "Midiv", sans-serif;
	font-size: 4vw;
	cursor: pointer;
	color: #f8faf6;
}

</style>