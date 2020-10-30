<template>
	<v-card>
		<div class="top-wrapper">

		<Nav @testOmit="tester"/>
		<Car />
		<v-alert>	
			<div class="alert-wrapper" v-if="tp.value < 50"><v-icon>mdi-alert-outline</v-icon><p>Check your {{tp.side}} tire ! Its at {{tp.value}}</p>
			</div>
			<div class="alert-wrapper" v-if="tp.value > 50"><v-icon>mdi-checkbox-marked-circle</v-icon>	<p> Your {{tp.side}} tire looks good! </p></div>
			<p v-show="!tp"> Check your Tire Pressure Above </p>		
		</v-alert>	
		</div>
		<ToggleSwift/>
	</v-card>
</template>

<script>

import Car from '@/components/Car';
import ToggleSwift from '@/components/ToggleSwift';
import Nav from '@/components/Nav';

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

.alert-wrapper{
	display: flex;
	i{
		padding-right: 20px;
	}
}

.top-wrapper{
	width:90%;
	margin: auto;
}
// .v-card{
// 	background: $bg-primary;
// 	margin: 30px auto;
// 	padding: 10% 5%;
// 	/* display: flex; */
// 	width: 400px;
// }



</style>
