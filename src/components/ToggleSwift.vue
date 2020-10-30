<template>
	<div class="bottom-container">
		<div class="toggle-switch-ctn">
			<v-switch
				v-for="a in switchs" :key="a"
				inset
				v-model= a.attr
				:label="`${a.label}: ${a.attr ? 'On' : 'Off'}`"
				value= false
				
			></v-switch>
		</div>


		<div class="btns">

				<v-btn v-for="item in items" :key="item.icon" @click="btnClick">
					<v-icon>{{item.icon}}</v-icon>
				</v-btn>
		</div>


		
  </div>
	
</template>

<script>

export default {
  name: 'Card',
  props: {
    msg: String
  },
	data () {
			return {
				pressed: false,
				items: [
					{ icon: 'mdi-format-align-justify' },
					{ icon: 'mdi-access-point' },
					{ icon: 'mdi-format-align-center' },
					{ icon: 'mdi-format-align-right' }
				],
				switchs: [
					{ label: 'Locked' , attr: 'switch1' },
					{ label: 'Alarm' , attr: 'switch2' },
					{ label: 'Lights' , attr: 'switch3' },
					{ label: 'Heating' , attr: 'switch4' },
				]
			}
		},
	methods: {
		btnClick (event) {
			event.target.classList.toggle('is-open');
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
// Place holder until we figure out wtf is going wrong

.bottom-container{
	display:block;
}

// Toggle
.v-input--selection-controls__ripple{
	width:0px;
	// background-color: yellow;
}
.toggle-switch-ctn{
	display:flex;
	flex-wrap:wrap;
	justify-content: space-between;
}
// BG of slider
.v-input--switch__track{
	// background: pink;
}

// Label
// .v-input__slot{
// 	font-size: 10px;
// 	color:black;
// 	label{
// 		color:green;
// 	}
// }
// >>>input#input-16{
// 	background: green;
// 	width:130px;
// }
// >>>.v-input--switch{
// 	background-color:blue;
// 	label{
// 		background:white;
// 		font-size:20px;
// 	}
// 	.v-input__control{
// 		width:3000px;
// 	}
// 	input{
// 		background:yellow;
// 	}
// }

</style>
