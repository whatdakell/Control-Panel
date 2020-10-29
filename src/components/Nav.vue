<template>
	<div class="drop-down">

		<v-select
			v-model="tp"
			:items="users"
			item-text="side"
			item-value="value"
			label="Select"
			solo
			return-object
			@change="emitEventChanged"
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
    name: 'Nav',
		data () {
			return {
				users: '',
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
				console.log(result.data.tirepressure, "this is the results");
				this.users = result.data.tirepressure
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
// 	margin: 0 auto;
// }
	// max-width: 50%;
</style>