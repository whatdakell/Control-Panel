<template>
  <div class="car-container">
		<div class="car car-top">
			<div class="tire left">
				<div class="tire-outline"><span class="tire-fill left-fr"></span></div>
				<div class="tire-label">
					<p>1.9 BAR</p>
					<div class="shape"> </div>
				</div>
			</div>
			<div class="middle">
			</div>
			<div class="tire right">
				<div class="tire-outline"><span class="tire-fill right-fr"></span></div>
				<div class="tire-label">
					<p>1.9 BAR</p>
					<div class="shape"> </div>
				</div>
			</div>
		</div>
		<div class="car car-bottom">
			<div class="tire left">
				<div class="tire-outline"><spin class="tire-fill left-bk"></spin></div>
				<div class="tire-label">
					<p>1.9 BAR</p>
					<div class="shape"> </div>
				</div>
			</div>
			<div class="middle">
			</div>
			<div class="tire right">
				<div class="tire-outline"><span class="tire-fill right-bk"></span></div>
				<div class="tire-label">
					<p>1.9 BAR</p>
					<div class="shape"> </div>
				</div>
			</div>
		</div>
<!-- 
			<v-btn
				@click='open = !open'
				elevation="2"
				fab
				icon
				outlined
				raised
				rounded
				text
				:disabled="false"
				tile ="hello"
				
			></v-btn> -->
			<v-alert v-show='open'
				elevation="9"
				icon=""
				outlined
				type="warning"
			>
			</v-alert>	
  </div>
	
</template>

<script>
export default {
  name: 'Card',
  // props: {
  //   msg: String
  // },
	data () {
			return {
				open: false,
			}
		},
	methods: {
		funTest : function(){
			console.log('changed');
			this.people = true;
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

$line-width: 10px;
$middle-width: $line-width * 3;
$border-grey:
$bg-primary;
$middle-height: 200px;

.car-container{
	display: flex;
	flex-direction: column;
	padding: 10%;
	justify-content: center;
	align-items: center;
	max-width: 400px;
	
	.car{
		height: $middle-height/2;
		position: relative;
		> div{
			position: absolute;
		}
		&-top {
			.middle::after{
					top: $line-width;
				}
			.middle::before,
			.middle,
			.tire{
				top: 0;
			}
		}
		&-bottom{
			.middle::after{
					bottom: $line-width;
			}
			.middle::before,
			.middle,
			.tire{
				bottom: 0;
			}
		}

	}
	.middle{
		left:50%;
		background: white;
		height: 100%;
		width: $line-width;
		min-width: 2px;
		max-width: 10px;
		transform: translateX(-50%);
		&:before{
			content: '';
			position: absolute;
			background: $bg-primary;
			// top: -1px;
			@include h-center;
			border-radius: 100%;
			border: $line-width white solid;
			width: $middle-width;
			height: $middle-width;
		}
		&:after{
			content: '';
			@include h-center;
			width: $middle-width * 2;
			height: $line-width;
			background-color: white;
			z-index: -1;
		}
	}

	.tire{
		// position: relative;
		&-outline{
			position: absolute;
			background: white;
			/*   animation: fill-up 10s ease linear; */
			height: $line-width * 5;
			width: $line-width * 3;
			border-radius: 6px;
			overflow: hidden;
		}
		&-fill{
				position: absolute;
				width: 100%;
				height: 100%;
				top:100%;
				background: $orange;
				transform: translateY(0%);
				transition: transform 1.5s cubic-bezier(0, 0, 0.2, 1);
		}
		&-label{
			// border-bottom: $border-grey;
			// position: absolute;
			p{
				position: absolute;
				// left: 0;
				bottom: 100%;
			}
			.shape {
				height: $middle-width;
				top:0;
				width: 80px;
				border-width: 2px;
				border-top: 2px solid red;
				&:after{
					content: '';
					border-bottom: 2px solid red;
					width: 10px;
					position: absolute;
					bottom: 0 ;

				}
			}
		}
		&.right{
			left:50%;
			// for gutter
			transform: translateX($middle-width + 10px);
			.tire-outline{
				left:0;
			}
			.shape{
				transform: skew(145deg);
				border-left: 2px solid red;
				&:after{
					right: 100%;
				}
			}
			.tire-label{
				p { 
					right:0;
				}
				padding-left: 60px;
			}
		}
		&.left{
			right:50%;
			transform: translateX(-$middle-width - 10px);
			.tire-outline{
				right:0;
			}
			.tire-label{
				p {
					left:0;
				}
				padding-right: 60px;
			}
			.shape{
				transform: skew(-145deg);
				border-right: 2px solid red;
				&:after{
					left: 100%;
				}
			}
		}
	}

}
</style>
