<template>
	<div class="drop-down">

		<v-select
			v-model="tp"
			:items="tpData"
			item-text="side"
			item-value="value"
			label="Tire Pressure"
			solo
			append-icon = "mdi-arrow-down"
			return-object
			@change="emitEventChanged"
			prepend-inner-icon="Select:"
			
		>	</v-select>

	</div>
</template>

<script>
// Put back in to get objc
// return-object
// single-line
import testData from '@/components/testData.json';

console.log(testData,"here is the test data");
const tester = testData.map(item => console.log(item));
console.log(tester,'this');
export default {
    name: 'Dropdown',
		data () {
			return {
				tpData: [],
				tp: '',
				selection: testData,
      }
		},
		methods: {
		emitEventChanged () {
				this.$emit('testOmit', this.tp);
				}
		},
		mounted () {
			const baseURI = 'https://my-json-server.typicode.com/keli5466/demo/db'
			this.$http.get(baseURI)
			.then((result) => {
				this.tpData = result.data.tirepressure
			})
		}
		// computed: {
		// 	select: function(){
		// 		return 'this is a fucking test' 
		// 	}
		// }
		
};
</script>

<style lang="scss" scoped>

// .v-input{
// 	max-width:50%;
// 	// background: $bg-primary;
// 	margin: 0 auto;
// }
</style>