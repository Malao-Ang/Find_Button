<template>
    <div>
		<div v-if="alert === true"><Alert></Alert></div>
        <img class="cat-img" src="@/assets/img/justroom.png" />
        <button
            @click="PLusPoint"
            class="btn btn-wide btn-outline btn-error no"
        >
            NO
        </button>
        <button
            v-if="alert === true"
            @click="reloadPage"
            class="btn btn-wide btn-success yes"
        >
            New game
        </button>
        <button v-else @click="ClickWrong"  class="btn btn-wide btn-success yes">
            Yes
        </button>
    </div>
</template>

<script>
import Alert from '@/components/Alert.vue';
export default {
	methods: {
		ClickWrong(){
			return this.alert = true;
		},
		ClickCorrect(){
			return this.alert = false;
		},
		reloadPage(){
			window.location.reload();
		},
		PLusPoint(){
			this.point +=1;
		}
	},
	components(){
		Alert
	}
};
</script>

<style>
</style>