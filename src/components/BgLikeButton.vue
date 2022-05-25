<template>
    <div>
        <div class="find">
            <button id="nextGame"  :style="[RandomX, RandomY]" @click="Clicked">
            <a href="/game/level-${data.nextLevel}"></a>Hello Boy
            </button>
        </div>
    </div>
</template>

<script>
const buttonLoc = document.getElementById("nextGame");
export default {
    data() {
        return {
            clicked: false,
			nextLevel:0
        };
    },
    methods: {
        Clicked() {
            this.clicked = true;
            console.log(this.clicked);
        },

        RandomY() {
            return (this.locY = Math.floor(Math.random() * 1000));
        },
    },
    computed: {
        RandomX() {
            const locX = Math.floor(Math.random() * 300);

            return { left: locX + "px" };
        },
        RandomY() {
            const locY = Math.floor(Math.random() * 700);
            return { top: locY + "px" };
        },
    },
};
</script>
<style>

</style>
