<template>
	<section id="enterprise" class="enterprise-component">
		<div>
			<div class="enterprise-solution">
				<v-row>
					<v-col cols="12" md="6" xl="6">
						<div class="enterprise-solution-title">
							<span>
								Enterprise Solution
							</span>
						</div>
						<div class="enterprise-solution-content">
							<span>
								Create and schedule meetings with your team!
							</span>
						</div>
						<v-btn class="enterprise-join-btn">Join Now!</v-btn>
					</v-col>
					<v-col cols="12" md="6" xl="6">
						<v-img class="people-img" src="@/assets/img/Section-3-Image.png" style="width: 392px !important; float: right;" />
					</v-col>
				</v-row>
			</div>
			<div class="enterprise-buttons">
				<v-row>
					<v-col cols="12" md="4" xl="4">
						<v-btn class="enterprise-btn">
							Reduce tardiness
						</v-btn>
					</v-col>
					<v-col cols="12" md="4" xl="4">
						<v-btn class="enterprise-btn">
							Automate logins
						</v-btn>
					</v-col>
					<v-col cols="12" md="4" xl="4">
						<v-btn class="enterprise-btn">
							Text to voice
						</v-btn>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="12" md="4" xl="4">
						<v-btn class="enterprise-btn">
							Call Reminders
						</v-btn>
					</v-col>
					<v-col cols="12" md="4" xl="4">
						<v-btn class="enterprise-btn">
							Rate meetings
						</v-btn>
					</v-col>
					<v-col cols="12" md="4" xl="4">
						<v-btn class="enterprise-btn">
							Track metrics
						</v-btn>
					</v-col>
				</v-row>
			</div>
		</div>
	</section>
</template>
  
<style scoped>
	.enterprise-buttons {
		width: 100% !important;
	}
	.enterprise-btn {
		width: 100% !important;
		display: flex;
		padding: 20px 24px;
		align-items: center;
		flex: 1 0 0;
		border-radius: 20px;
		background: #FFF;
		box-shadow: 0px 4px 22px 0px rgba(0, 0, 254, 0.15);
		text-transform: none !important;
		background-image: url("../../assets/img/Tick-Mark.svg");
		background-repeat:no-repeat !important;
		background-size: 36px 36px !important;
		background-position: 24px 0 !important;
	}
	.enterprise-join-btn {
		display: flex;
		padding: 13px 50px;
		justify-content: center;
		align-items: center;
		gap: 10px;
		border-radius: 15px;
		background: var(--ffffff, #FFF);
		height: 50px;
		width: 195px;
		text-transform: none !important;
	}
	.enterprise-solution {
		padding-bottom: 60px;
	}
	.enterprise-solution-title {
		color: var(--ffffff, #FFF);
		font-family: Manrope;
		font-size: 24px;
		font-style: normal;
		font-weight: 700;
		line-height: 130%;
		padding-bottom: 25px;
	}
	.enterprise-solution-content {
		padding-bottom: 25px;
		color: var(--ffffff, #FFF);
		font-family: Manrope;
		font-size: 36px;
		font-style: normal;
		font-weight: 700;
		line-height: 130%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.enterprise-component {
		padding: 120px 160px !important;
		background-color: #8748FF;
		background-attachment: fixed;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
	}
	@media (max-width: 570px) {
    .enterprise-component  {
			padding: 120px 20px !important;
    }
}

</style>