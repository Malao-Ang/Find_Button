<template>
	<div>
		<link href="https://cdn.jsdelivr.net/npm/daisyui@2.15.0/dist/full.css" rel="stylesheet" type="text/css" />
		<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2/dist/tailwind.min.css" rel="stylesheet"
			type="text/css" />
		<div v-if="clicked2 && clicked4 && 
		clicked6 &&
			clicked10 && clicked11 &&
			clicked12 &&
			clicked13 && clicked14 &&
			clicked18 && clicked19 &&
			clicked20 &&
			clicked21 && clicked22 &&
			clicked27 && clicked28 &&
			clicked29 &&
			clicked36 &&
			clicked42 && clicked44 &&
			clicked46 && clicked50 &&
			clicked51 &&
			clicked52 && clicked53 &&
			clicked54 &&
			clicked59 && clicked60 &&
			clicked61">
			
			<button href="/thank-you" class="btn btn-outline btn-info btn-wide" style="margin-top:20px;"><a href="/thank-you">👏🏻 Awesome 👏🏻</a></button>
		</div>
		<div class="table">
			<div class="row">
				<div class="column"><button v-bind:class="{ 'white': !clicked1, 'black': clicked1 }"
						@click="Clicked1"></button></div>
				<div class="column"><button v-bind:class="{ 'white': !clicked2, 'black': clicked2 }"
						@click="Clicked2"></button></div>
				<div class="column"><button v-bind:class="{ 'white': !clicked3, 'black': clicked3 }"
						@click="Clicked3"></button></div>
				<div class="column"><button v-bind:class="{ 'white': !clicked4, 'black': clicked4 }"
						@click="Clicked4"></button></div>
				<div class="column"><button v-bind:class="{ 'white': !clicked5, 'black': clicked5 }"
						@click="Clicked5"></button></div>
				<div class="column"><button v-bind:class="{ 'white': !clicked6, 'black': clicked6 }"
						@click="Clicked6"></button></div>
				<div class="column"><button v-bind:class="{ 'white': !clicked7, 'black': clicked7 }"
						@click="Clicked7"></button></div>
				<div class="column"><button v-bind:class="{ 'white': !clicked8, 'black': clicked8 }"
						@click="Clicked8"></button></div>
			</div>
			<div class="row">
				<div class="column"><button v-bind:class="{ 'white': !clicked9, 'black': clicked9 }"
						@click="Clicked9"></button></div>
				<div class="column"><button v-bind:class="{ 'white': !clicked10, 'black': clicked10 }"
						@click="Clicked10"></button></div>
				<div class="column"><button v-bind:class="{ 'white': !clicked11, 'black': clicked11 }"
						@click="Clicked11"></button></div>
				<div class="column"><button v-bind:class="{ 'white': !clicked12, 'black': clicked12 }"
						@click="Clicked12"></button></div>
				<div class="column"><button v-bind:class="{ 'white': !clicked13, 'black': clicked13 }"
						@click="Clicked13"></button></div>
				<div class="column"><button v-bind:class="{ 'white': !clicked14, 'black': clicked14 }"
						@click="Clicked14"></button></div>
				<div class="column"><button v-bind:class="{ 'white': !clicked15, 'black': clicked15 }"
						@click="Clicked15"></button></div>
				<div class="column"><button v-bind:class="{ 'white': !clicked16, 'black': clicked16 }"
						@click="Clicked16"></button></div>
			</div>
			<div class="row">
				<div class="column"><button v-bind:class="{ 'white': !clicked17, 'black': clicked17 }"
						@click="Clicked17"></button></div>
				<div class="column"><button v-bind:class="{ 'white': !clicked18, 'black': clicked18 }"
						@click="Clicked18"></button></div>
				<div class="column"><button v-bind:class="{ 'white': !clicked19, 'black': clicked19 }"
						@click="Clicked19"></button></div>
				<div class="column"><button v-bind:class="{ 'white': !clicked20, 'black': clicked20 }"
						@click="Clicked20"></button></div>
				<div class="column"><button v-bind:class="{ 'white': !clicked21, 'black': clicked21 }"
						@click="Clicked21"></button></div>
				<div class="column"><button v-bind:class="{ 'white': !clicked22, 'black': clicked22 }"
						@click="Clicked22"></button></div>
				<div class="column"><button v-bind:class="{ 'white': !clicked23, 'black': clicked23 }"
						@click="Clicked23"></button></div>
				<div class="column"><button v-bind:class="{ 'white': !clicked24, 'black': clicked24 }"
						@click="Clicked24"></button></div>
			</div>
			<div class="row">
				<div class="column"><button v-bind:class="{ 'white': !clicked25, 'black': clicked25 }"
						@click="Clicked25"></button></div>
				<div class="column"><button v-bind:class="{ 'white': !clicked26, 'black': clicked26 }"
						@click="Clicked26"></button></div>
				<div class="column"><button v-bind:class="{ 'white': !clicked27, 'black': clicked27 }"
						@click="Clicked27"></button></div>
				<div class="column"><button v-bind:class="{ 'white': !clicked28, 'black': clicked28 }"
						@click="Clicked28"></button></div>
				<div class="column"><button v-bind:class="{ 'white': !clicked29, 'black': clicked29 }"
						@click="Clicked29"></button></div>
				<div class="column"><button v-bind:class="{ 'white': !clicked30, 'black': clicked30 }"
						@click="Clicked30"></button></div>
				<div class="column"><button v-bind:class="{ 'white': !clicked31, 'black': clicked31 }"
						@click="Clicked31"></button></div>
				<div class="column"><button v-bind:class="{ 'white': !clicked32, 'black': clicked32 }"
						@click="Clicked32"></button></div>
			</div>
			<div class="row">
				<div class="column"><button v-bind:class="{ 'white': !clicked33, 'black': clicked33 }"
						@click="Clicked33"></button></div>
				<div class="column"><button v-bind:class="{ 'white': !clicked34, 'black': clicked34 }"
						@click="Clicked34"></button></div>
				<div class="column"><button v-bind:class="{ 'white': !clicked35, 'black': clicked35 }"
						@click="Clicked35"></button></div>
				<div class="column"><button v-bind:class="{ 'white': !clicked36, 'black': clicked36 }"
						@click="Clicked36"></button></div>
				<div class="column"><button v-bind:class="{ 'white': !clicked37, 'black': clicked37 }"
						@click="Clicked37"></button></div>
				<div class="column"><button v-bind:class="{ 'white': !clicked38, 'black': clicked38 }"
						@click="Clicked38"></button></div>
				<div class="column"><button v-bind:class="{ 'white': !clicked39, 'black': clicked39 }"
						@click="Clicked39"></button></div>
				<div class="column"><button v-bind:class="{ 'white': !clicked40, 'black': clicked40 }"
						@click="Clicked40"></button></div>
			</div>
			<div class="row">
				<div class="column"><button v-bind:class="{ 'white': !clicked41, 'black': clicked41 }"
						@click="Clicked41"></button></div>
				<div class="column"><button v-bind:class="{ 'white': !clicked42, 'black': clicked42 }"
						@click="Clicked42"></button></div>
				<div class="column"><button v-bind:class="{ 'white': !clicked43, 'black': clicked43 }"
						@click="Clicked43"></button></div>
				<div class="column"><button v-bind:class="{ 'white': !clicked44, 'black': clicked44 }"
						@click="Clicked44"></button></div>
				<div class="column"><button v-bind:class="{ 'white': !clicked45, 'black': clicked45 }"
						@click="Clicked45"></button></div>
				<div class="column"><button v-bind:class="{ 'white': !clicked46, 'black': clicked46 }"
						@click="Clicked46"></button></div>
				<div class="column"><button v-bind:class="{ 'white': !clicked47, 'black': clicked47 }"
						@click="Clicked47"></button></div>
				<div class="column"><button v-bind:class="{ 'white': !clicked48, 'black': clicked48 }"
						@click="Clicked48"></button></div>
			</div>
			<div class="row">
				<div class="column"><button v-bind:class="{ 'white': !clicked49, 'black': clicked49 }"
						@click="Clicked49"></button></div>
				<div class="column"><button v-bind:class="{ 'white': !clicked50, 'black': clicked50 }"
						@click="Clicked50"></button></div>
				<div class="column"><button v-bind:class="{ 'white': !clicked51, 'black': clicked51 }"
						@click="Clicked51"></button></div>
				<div class="column"><button v-bind:class="{ 'white': !clicked52, 'black': clicked52 }"
						@click="Clicked52"></button></div>
				<div class="column"><button v-bind:class="{ 'white': !clicked53, 'black': clicked53 }"
						@click="Clicked53"></button></div>
				<div class="column"><button v-bind:class="{ 'white': !clicked54, 'black': clicked54 }"
						@click="Clicked54"></button></div>
				<div class="column"><button v-bind:class="{ 'white': !clicked55, 'black': clicked55 }"
						@click="Clicked55"></button></div>
				<div class="column"><button v-bind:class="{ 'white': !clicked56, 'black': clicked56 }"
						@click="Clicked56"></button></div>
			</div>
			<div class="row">
				<div class="column"><button v-bind:class="{ 'white': !clicked57, 'black': clicked57 }"
						@click="Clicked57"></button></div>
				<div class="column"><button v-bind:class="{ 'white': !clicked58, 'black': clicked58 }"
						@click="Clicked58"></button></div>
				<div class="column"><button v-bind:class="{ 'white': !clicked59, 'black': clicked59 }"
						@click="Clicked59"></button></div>
				<div class="column"><button v-bind:class="{ 'white': !clicked60, 'black': clicked60 }"
						@click="Clicked60"></button></div>
				<div class="column"><button v-bind:class="{ 'white': !clicked61, 'black': clicked61 }"
						@click="Clicked61"></button></div>
				<div class="column"><button v-bind:class="{ 'white': !clicked62, 'black': clicked62 }"
						@click="Clicked62"></button></div>
				<div class="column"><button v-bind:class="{ 'white': !clicked63, 'black': clicked63 }"
						@click="Clicked63"></button></div>
				<div class="column"><button v-bind:class="{ 'white': !clicked64, 'black': clicked64 }"
						@click="Clicked64"></button></div>
			</div>



		</div>
	</div>
</template>

<script>
export default {
	
	data() {
		return {
			tulip: false,
			clicked1: false,
			clicked2: false,
			clicked3: false,
			clicked4: false,
			clicked5: false,
			clicked6: false,
			clicked7: false,
			clicked8: false,
			clicked9: false,
			clicked10: false,
			clicked11: false,
			clicked12: false,
			clicked13: false,
			clicked14: false,
			clicked15: false,
			clicked16: false,
			clicked17: false,
			clicked18: false,
			clicked19: false,
			clicked20: false,
			clicked21: false,
			clicked22: false,
			clicked23: false,
			clicked24: false,
			clicked25: false,
			clicked26: false,
			clicked27: false,
			clicked28: false,
			clicked29: false,
			clicked30: false,
			clicked31: false,
			clicked32: false,
			clicked33: false,
			clicked34: false,
			clicked35: false,
			clicked36: false,
			clicked37: false,
			clicked38: false,
			clicked39: false,
			clicked40: false,
			clicked41: false,
			clicked42: false,
			clicked43: false,
			clicked44: false,
			clicked45: false,
			clicked46: false,
			clicked47: false,
			clicked48: false,
			clicked49: false,
			clicked50: false,
			clicked51: false,
			clicked52: false,
			clicked53: false,
			clicked54: false,
			clicked55: false,
			clicked56: false,
			clicked57: false,
			clicked58: false,
			clicked59: false,
			clicked60: false,
			clicked61: false,
			clicked62: false,
			clicked63: false,
			clicked64: false,


		}
	},
	methods: {
		Clicked1() {
			return this.clicked1 = !this.clicked1
		},
		Clicked2() {
			return this.clicked2 = !this.clicked2
		},
		Clicked3() {
			return this.clicked3 = !this.clicked3
		},
		Clicked4() {
			return this.clicked4 = !this.clicked4
		},
		Clicked5() {
			return this.clicked5 = !this.clicked5
		},
		Clicked6() {
			return this.clicked6 = !this.clicked6
		},
		Clicked8() {
			return this.clicked8 = !this.clicked8
		},
		Clicked7() {
			return this.clicked7 = !this.clicked7
		},
		Clicked9() {
			return this.clicked9 = !this.clicked9
		},
		Clicked10() {
			return this.clicked10 = !this.clicked10
		},
		Clicked11() {
			return this.clicked11 = !this.clicked11
		},
		Clicked12() {
			return this.clicked12 = !this.clicked12
		},
		Clicked13() {
			return this.clicked13 = !this.clicked13
		},
		Clicked14() {
			return this.clicked14 = !this.clicked14
		},
		Clicked15() {
			return this.clicked15 = !this.clicked15
		},
		Clicked16() {
			return this.clicked16 = !this.clicked16
		},
		Clicked17() {
			return this.clicked17 = !this.clicked17
		},
		Clicked18() {
			return this.clicked18 = !this.clicked18
		},
		Clicked19() {
			return this.clicked19 = !this.clicked19
		},
		Clicked20() {
			return this.clicked20 = !this.clicked20
		},
		Clicked21() {
			return this.clicked21 = !this.clicked21
		},
		Clicked22() {
			return this.clicked22 = !this.clicked22
		},
		Clicked23() {
			return this.clicked23 = !this.clicked23
		},
		Clicked24() {
			return this.clicked24 = !this.clicked24
		},
		Clicked25() {
			return this.clicked25 = !this.clicked25
		},
		Clicked26() {
			return this.clicked26 = !this.clicked26
		},
		Clicked28() {
			return this.clicked28 = !this.clicked28
		},
		Clicked27() {
			return this.clicked27 = !this.clicked27
		},
		Clicked29() {
			return this.clicked29 = !this.clicked29
		}, Clicked30() {
			return this.clicked30 = !this.clicked30
		}, Clicked31() {
			return this.clicked31 = !this.clicked31
		}, Clicked32() {
			return this.clicked32 = !this.clicked32
		}, Clicked33() {
			return this.clicked33 = !this.clicked33
		}, Clicked34() {
			return this.clicked34 = !this.clicked34
		}, Clicked35() {
			return this.clicked35 = !this.clicked35
		}, Clicked36() {
			return this.clicked36 = !this.clicked36
		}, Clicked37() {
			return this.clicked37 = !this.clicked37
		}, Clicked38() {
			return this.clicked38 = !this.clicked38
		}, Clicked39() {
			return this.clicked39 = !this.clicked39
		}, Clicked40() {
			return this.clicked40 = !this.clicked40
		}, Clicked41() {
			return this.clicked41 = !this.clicked41
		}, Clicked42() {
			return this.clicked42 = !this.clicked42
		}, Clicked43() {
			return this.clicked43 = !this.clicked43
		}, Clicked44() {
			return this.clicked44 = !this.clicked44
		}, Clicked45() {
			return this.clicked45 = !this.clicked45
		}, Clicked46() {
			return this.clicked46 = !this.clicked46
		}, Clicked47() {
			return this.clicked47 = !this.clicked47
		}, Clicked48() {
			return this.clicked48 = !this.clicked48
		}, Clicked49() {
			return this.clicked49 = !this.clicked49
		}, Clicked50() {
			return this.clicked50 = !this.clicked50
		}, Clicked51() {
			return this.clicked51 = !this.clicked51
		}, Clicked52() {
			return this.clicked52 = !this.clicked52
		}, Clicked53() {
			return this.clicked53 = !this.clicked53
		}, Clicked54() {
			return this.clicked54 = !this.clicked54
		}, Clicked55() {
			return this.clicked55 = !this.clicked55
		}, Clicked56() {
			return this.clicked56 = !this.clicked56
		}, Clicked57() {
			return this.clicked57 = !this.clicked57
		}, Clicked58() {
			return this.clicked58 = !this.clicked58
		}, Clicked59() {
			return this.clicked59 = !this.clicked59
		}, Clicked60() {
			return this.clicked60 = !this.clicked60
		}, Clicked61() {
			return this.clicked61 = !this.clicked61
		}, Clicked62() {
			return this.clicked62 = !this.clicked62
		}, Clicked63() {
			return this.clicked63 = !this.clicked63
		}, Clicked64() {
			return this.clicked64 = !this.clicked64
		},
	},

}
</script>

<style>
.white {
	display: block;
	width: 20px;
	height: 20px;
	background-color: rgb(244, 244, 244);
}

.black {
	display: block;
	width: 20px;
	height: 20px;
	background-color: rgb(244, 244, 244);
	background-color: rgb(0, 0, 0);
}

.row {
	margin: 0.5px 0;
	padding: 0;
}


.column {
	display: inline-block;
	margin: 0 0 0 4px;
	padding: 0;
}

.table {
	display: flex;
	align-items: center;
	justify-content: center;
	margin: auto;
	margin-top: 20px;
}
</style>