<template>
	<v-card
  elevation="5">
	<Nav @testOmit="tester"/>
	<Car />
	<v-alert
	>	
		<p v-if="tp.value < 50">Check your {{tp.side}} tire ! Its at {{tp.value}}</p>
		<p v-if="tp.value > 50"> Your {{tp.side}} tire looks good! </p>
		<p v-show="!tp"> Check your Tire Pressure Above </p>		
	</v-alert>	
	<ToggleSwift/>
</v-card>
</template>

<script>

import Car from '@/components/Car';
import ToggleSwift from '@/components/ToggleSwift';
import Nav from '@/components/Nav';
// import '../scss/main.scss'
export default {
  name: 'Card',
		components: {
			Nav,
			Car,
			ToggleSwift
	},
  // props: {
  //   msg: String
  // },
	data () {
			return {
				switch1: false,
				switch2: false,
				switch3: false,
				switch4: false,
				open: false,
				tp: ''
			}
		},
	methods: {
		tester (data) {
			// using a class value from json to find the tire to animate
			const getTire = document.querySelector(`.${data.class}`);
			// Use the Json to animate and fill the tire
			getTire.setAttribute('style',`transform:translateY(-${data.value}%)`)
			
			this.tp = data
			console.log(getTire, this.tp);
		}
	},
	mounted () {
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// Place holder until we figure out wtf is going wrong
$bg-primary: #e8edf4;


.v-card{
	background: $bg-primary;
	margin: 30px auto;
	padding: 10% 5%;
	/* display: flex; */
	width: 400px;
}



</style>
