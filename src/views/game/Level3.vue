<template>
    <head>
        <title>Level 3</title>
    </head>
    <body>
        <div class="row">
            <h1>Level 3</h1>
            <h2 class="animate-bounce">Find the button</h2>
            <div class="column">
                <div class="wrapper">
                    <img src="@/assets/img/KIm.jpg" alt="Kim" />
                    <div id="left-door" class="door">
                        <div class="shape"></div>
                        <div class="shape"></div>
                        <div id="left-knob" class="knob"></div>
                    </div>
                </div>
            </div>

            <div class="column">
                <div class="wrapper">
                    <img src="@/assets/img/KIm.jpg" alt="Kim" />
                    <div id="left-door" class="door">
                        <div class="shape"></div>
                        <div class="shape"></div>
                        <div id="left-knob" class="knob"></div>
                    </div>
                </div>
            </div>

            <div class="column">
                <div class="wrapper">
                    <img src="@/assets/img/KIm.jpg" alt="Kim" />
					<button id="img-button"><a href="/game/level-4">Heyy</a></button>
                    <div id="left-door" class="door">
                        <div class="shape"></div>
                        <div class="shape"></div>
                        <div id="left-knob" class="knob"></div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</template>

<script>
export default {};
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
}

.wrapper {
    height: 325px;
    width: 250px;
    border: 5px solid #61412d;
    position: relative;
	background-color: rgb(18, 16, 19);

    /* 3D */
    perspective: 1000px;
}
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.door {
    background-color: #61412d;
    height: 100%;
    width: 100%;
    position: absolute;
    /* inner layout */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

#left-door {
    top: 0;
    left: 0;
    border-right: 1px solid black;
    /* transition */
    transform-origin: left;
    transition: transform 0.5s;
}

#right-door {
    top: 0;
    right: 0;
    border-left: 1px solid black;
    /* transition */
    transform-origin: right;
    transition: transform 0.5s;
}

.knob {
    width: 10px;
    height: 50px;
    background-color: #d7dade;
    position: absolute;
}

#left-knob {
    top: 50%;
    right: 10px;
}

#right-knob {
    top: 50%;
    left: 10px;
}
.column {
    display: inline-block;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 20px;
	background-color: rgb(18, 16, 19);
}
.row {
	position:relative;
    margin-top: 10vh;
	height:100vh;
    background-color: rgb(18, 16, 19);
}
#img-button{
	position: absolute;
	top: 50%;
	left: 50%;
  	transform: translate(-50%, -50%);
  	-ms-transform: translate(-50%, -50%);
	border: 2px solid #fff;
	font-size: 2vw;
	padding:10px;
	border-radius: 40px;
}
/* Door swing effect */
.wrapper:hover #left-door,.wrapper:active #left-door {
    transform: rotateY(-140deg);
}

.wrapper:hover #right-door {
    transform: rotateY(140deg);
}
</style>