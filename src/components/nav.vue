<template>
    <link
        href="https://cdn.jsdelivr.net/npm/daisyui@2.15.0/dist/full.css"
        rel="stylesheet"
        type="text/css" />
    <link
        href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2/dist/tailwind.min.css"
        rel="stylesheet"
        type="text/css"/>
    <div class="nav">
        <div class="navbar bg-base-100">
            <div class="flex-auto">
                <a class="btn btn-ghost normal-case text-xl" href="/">Find Button</a>
            </div>
            <div class="flex-none">
                <ul class="menu menu-horizontal p-0 hover:scale-y-125">
                    <li><a href="/game/level-1" style="color:aquamarine;">Play Game</a></li>
                    <li><a href="/dev">Developer</a></li>
                    <li><a>Donate</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
	
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Mitr&display=swap");
*{
		background-color: rgb(18, 16, 19);
	}
.navbar{
	padding:0;
	margin:0;
	padding-top:10px;
	background-color: rgb(18, 16, 19);

}
.btn-ghost{
	font-family: "Pacifico", cursive;
    color: rgb(235, 89, 110);
	font-size: 2.3vw;

}
ul li{
    font-family: "Mitr", sans-serif;

	font-size: 1.7vw;
}
li a{
    font-family: "Mitr", sans-serif;
	margin-right:1vw;
}
</style>