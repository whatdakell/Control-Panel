<template>
	<div class="top-card">

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
		</div>
	</div>
</template>

<script>
export default {
	name: 'Card'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

$line-width: 10px;
$middle-width: $line-width * 3;

// Controls height
$middle-height: 200px;

.car-container{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 400px;
	padding: $v-space;
	// Car Placement CSS
	.car{
		height: $middle-height/2;
		position: relative;
		> div{
			position: absolute;
		}
		&-top {
			z-index: 1;
			margin-top:$line-width;
			.middle::after{
					top: $line-width;
				}
			
			.middle{
				margin-top:$line-width;
			}
			.middle,
			.middle::before,
			.tire{
				top: 0;
			}
		}
		&-bottom{
			.middle::after{
					bottom: $line-width;
			}
			.middle{
				margin-bottom:$line-width;
			}
			.middle::before,
			.middle,
			.tire{
				bottom: 0;
			}
			.tire{
				top: 50%;
			}
		}

	}

	.middle{
		@include h-center;
		@include inShadow;
		background: white;
		height: 100%;
		width: $line-width;
		min-width: 2px;
		max-width: 10px;
		// Middle Circle
		&:before{
			content: '';
			position: absolute;
			background: $bg-primary;
			@include h-center;
			border-radius: 100%;
			border: $line-width * 0.7 white solid;
			width: $middle-width;
			height: $middle-width;
			@include inShadow;
		}
		// Line
		&:after{
			content: '';
			@include h-center;
			width: $middle-width * 2;
			height: $line-width;
			background-color: white;
			z-index: -1;
			@include inShadow;
		}
	}
	$tireheight: $line-width * 5;
	$tirewidth: $line-width * 3;
	.tire{
		
		&-outline{
			position: absolute;
			background: white;
			@include inShadow;
			border: 1px solid rgba(0, 0, 0, 0.12);
			height: $tireheight;
			width: $tirewidth;
			border-radius: 10px;
			overflow: hidden;
		}
		&-fill{
				position: absolute;
				width: 100%;
				height: 100%;
				top:100%;
				background: linear-gradient(#ffc903e6, $orange);
				transform: translateY(0%);
				transition: transform 1.5s cubic-bezier(0, 0, 0.2, 1);
		}
		&-label{
			p{
				position: absolute;
				bottom: 100%;
				@include fontbase;
			}
			.shape {
				height: $tireheight/2;
				top:0;
				width: 60px;
				border-width: 2px;
				border-top: 1px solid $inactive;
				&:after{
					content: '';
					border-bottom: 1px solid $inactive;
					width: 10px;
					position: absolute;
					bottom: 0;

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
				border-left: 1px solid $inactive;
				&:after{
					right: 100%;
				}
			}
			.tire-label{
				p { 
					right:0;
				}
				padding-left: $tirewidth + 25px;
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
				padding-right: $tirewidth + 25px;
			}
			.shape{
				transform: skew(-145deg);
				border-right: 1px solid $inactive;
				&:after{
					left: 100%;
				}
			}
		}
	}

}
</style>
