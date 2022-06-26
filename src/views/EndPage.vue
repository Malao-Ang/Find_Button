<template>


	<head>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
		<link href="https://cdn.jsdelivr.net/npm/daisyui@2.15.0/dist/full.css" rel="stylesheet" type="text/css" />
		<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2/dist/tailwind.min.css" rel="stylesheet"
			type="text/css" />
	</head>

	<body>
		<div class="gif">
			<h2 id="title-end">We Did it !!!</h2>
			<img
				src="https://media3.giphy.com/media/zgp0WXOQj6ogJdPRfN/giphy.gif?cid=ecf05e47vie3s95e5uh9q6qhmvu5ktg8j7hrgloj6br5npbg&rid=giphy.gif&ct=g" />
		</div>
		<div class="container">
			<div class="code">
				<div class="mockup-code">
					<pre data-prefix="$"><code>npm my heart 💖</code></pre>
					<pre data-prefix=">" class="text-warning"><code>📦install . . .</code></pre>
					<pre data-prefix=">" class="text-success"><code>Thank you</code></pre>
					<pre data-prefix=">" class="text-success"><code>for playing</code></pre>
					<pre data-prefix=">" class="text-success"><code>our game until the end.</code></pre>
					<pre data-prefix=">" class="text-success"><code>Kaewmanee👩🏻</code></pre>
				</div>
			</div>
			<div>
				<button style="margin-bottom: 20px;" class="btn btn-active btn-accent"><a href="/">Home</a></button><br/>
				<button style="margin-bottom: 20px;" class="btn btn-active btn-accent"><a href="/donate">Donate</a></button>
			</div>
			<hr />
<i style='font-size:30px;margin-top:30px; ;' class='fas animate-bounce'>&#xf0ab;</i>
			<div class="feedback">
				<div class="card w-96 bg-primary text-primary-content">
					<div class="card-body">
						<h2 class="card-title">Feedback</h2>
						<form ref="form" @submit.prevent="sendEmail">
							<!-- name -->
							<label class="label">
								<span class="label-text">Name</span>
							</label>
							<input class="input input-bordered input-secondary w-full max-w-xs" type="text"
								name="user_name">
							<!-- subject -->
							<label class="label">
								<span class="label-text">Subject</span>
							</label>
							<input class="input input-bordered input-secondary w-full max-w-xs" type="text"
								name="subject">
							<!-- email -->
							<label class="label">
								<span class="label-text">gmail</span>
							</label>
							<input class="input input-bordered input-secondary w-full max-w-xs" type="email"
								name="user_email">
							<!-- message -->
							<label class="label">
								<span class="label-text">Message</span>
							</label>
							<input class="input input-bordered input-secondary w-full max-w-xs" type="text"
								name="message">

							<div class="card-actions justify-end">
								<a href="/"><button class="btn btn-secondary" style="margin-top:10px;" type="submit" value="Send" >Send</button></a>
							</div>


							
						</form>
					</div>
				</div>
			</div>
		</div>


	</body>
</template>

<script >
import emailjs from 'emailjs-com'

export default {
	methods: {
		sendEmail() {
			emailjs.sendForm('service_wpqunwl', 'template_57apsxn', this.$refs.form, '56qUFMDRO8IOEMpw6')
				.then((result) => {
					console.log('SUCCESS!', result.text);
					window.location.reload();
				}, (error) => {
					console.log('FAILED...', error.text);
				});
				
		},
	}
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Mitr&display=swap");
body {
	height: 600vh;
	background-color: rgb(18, 16, 19);
}

#title-end {
	font-family: "Mitr", sans-serif;
	font-size: 6vw;
	color: #d8dbd4;
	cursor: pointer;
}

.code {
	display: block;
	align-items: center;
	margin-left: 10px;
	margin-right: 10px;
	background-color: rgb(18, 16, 19);

}

.mockup-code {
	text-align: left;
	width: 40vw;
	margin: auto;
	margin-top: 20px;
	margin-bottom: 20px;

}

.container {
	display: block;
	margin: auto;
	background-color: rgb(18, 16, 19);

}

.gif {
	margin-left: 10px;
	margin-right: 10px;
}

.gif img {
	margin: auto;
}
.feedback .card{
	
	max-width: 300px;
	margin:auto;
	margin-top: 10px;
	color: rgb(33, 29, 34);
}
label span{
	color: #fff;
}
.input{
	color: rgb(255, 255, 255);
	background: #3b3c3a;
}
</style>