<template>
	<v-card>
		<Nav :class='{"open": active}' @toggleNav="menu"/>
		<div class="card-wrapper">
			<header>
				<div class="copy">
				<p>Flat 500</p>
				<h1>Control Panel</h1>
				</div>
				<v-btn @click="active = !active">
					<v-icon>mdi-menu</v-icon>
				</v-btn>
			</header>
			<div class="top-wrapper">
			<Dropdown @testOmit="tester"/>
			<Car />
			<v-alert>	
				<div class="alert-wrapper" v-if="tp.value < 50"><v-icon>mdi-alert-outline</v-icon><p>Check your {{tp.side}} tire ! Its at {{tp.value}}</p>
				</div>
				<div class="alert-wrapper" v-if="tp.value > 50"><v-icon>mdi-checkbox-marked-circle</v-icon>	<p> Your {{tp.side}} tire looks good! </p></div>
				<p v-show="!tp"> Check your Tire Pressure Above </p>		
			</v-alert>	
			</div>
			<ToggleSwift/>
		</div>
	</v-card>
</template>

<script>

import Car from '@/components/Car';
import ToggleSwift from '@/components/ToggleSwift';
import Dropdown from '@/components/Dropdown';
import Nav from '@/components/Nav';

export default {
  name: 'Card',
		components: {
			Nav,
			Car,
			ToggleSwift,
			Dropdown
	},
  // props: {
  //   msg: String
  // },
	data () {
			return {
				// drawer: false,
				tp: '',
				active: '',
				items: ['car1','car2']
			}
		},
	methods: {
		menu (data) {
			this.active = data
		},
		tester (data) {
			// using a class value from json to find the tire to animate
			const getTire = document.querySelector(`.${data.class}`);
			// Use the Json to animate and fill the tire
			getTire.setAttribute('style',`transform:translateY(-${data.value}%)`)
			console.log(data.value)
			if( data.value < 50){
				getTire.parentElement.setAttribute('style',`border: 1px solid red`)
			}
			
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

.v-alert__wrapper{
	width: 100%;
}
.alert-wrapper{
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: center;
	animation: fadeIn 400ms linear;
	i{
		padding-right: 2%;
		&.mdi-checkbox-marked-circle{
			color: $active;
		}
		&.mdi-alert-outline{
			color: $orange;
		}
	}
}
@keyframes fadeIn {
	0%{
		opacity:0;
	}
	100% {
		opacity: 1;
	}
	
}

header{
	height: 10%;
	display: flex;
	margin-bottom: 10%;
	h1{
		font-size: 20px;
		color: $active;
	}
	p{
		font-size: 10px;
	}
	.copy{
		margin-right: auto;
	}
	.v-btn{
		@include corners;
		padding: 20px 5px!important;
		height: 40px!important;
		min-height: 100%;
		min-width: 0px!important;
		.v-icon{
			font-size: 40px;
			color: $active;
		}
	}
}
.top-wrapper{
	width:90%;
	margin: auto;
}
.v-card{
	overflow: hidden;
}


</style>
