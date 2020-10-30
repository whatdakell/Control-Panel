<template>

	<div class="menu">
		<v-icon @click="closeNav" >mdi-arrow-left</v-icon>
		<p>Place Holder Menu</p>
	</div>
</template>

<script>


export default {
    name: 'Nav',
		data () {
			return {
				active: '',
				close: ''
      }
		},
		methods: {
		closeNav () {
				this.$emit('toggleNav', this.active);
				}
		},
		
};
</script>

<style lang="scss" scoped>
.menu{
	padding: 5%;
	position: absolute;
	width: 100%;
	height: 100%;
	background: $bg-primary;
	top: 0;
	left:0;
	transform: translateX(-100%);
	z-index:10;
	opacity: 0;
	transition: all 1s ease 0s;
	&.open{
		opacity: 1;
		transition-delay: 0.7s!important;
		transform: translateX(0);
	}
	p{
		font-size: 30px;
		margin: 5% auto;
	}
}
// .v-input{
// 	max-width:50%;
// 	// background: $bg-primary;
// 	margin: 0 auto;
// }
</style>