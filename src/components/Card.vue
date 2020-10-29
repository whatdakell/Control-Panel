<template>
	<v-card
  elevation="5">
	<Nav @testOmit="tester"/>
	<Car />
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
			const getTire = document.querySelector(`.${data.class}`);
			getTire.setAttribute('style',`transform:translateY(-${data.value}%)`)
			
			this.tp = data
			console.log(getTire, this.tp);
		},
		funTest (){
			console.log('changed');
			this.people = true;
		}
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
