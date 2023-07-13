<template>
  <section id="features" class="features-component">
    <div class="features-box">
      <div class="features-title">
          <span>Features</span>
      </div>
      <div class="features-content">
          <span>Lorem ipsum dolor sit amet consectetur. Sagittis vulputate ultrices magna,</span>
      </div>
    </div>
    <div class="features-real-contents">
      <v-row>
        <v-col cols="12" md="4" xl="4"> 
          <v-img src="@/assets/img/Section-4-Icon-1.svg" style="width: 64px !important;"></v-img>
          <div class="features-padding"><span>Smart Scheduling</span></div>
          <div class="features-padding">
              <span>Lorem ipsum dolor sit amet consectetur. Sagittis vulputate ultrices magna fermentum vivamus faucibus quam.
              Nullam dignissim nisi non lectus lacus amet id.
              </span>
          </div>
        </v-col>
        <v-col cols="12" md="4" xl="4"> 
          <v-img src="@/assets/img/Section-4-Icon-2.svg" style="width: 64px !important;"></v-img>
          <div class="features-padding"><span>Profile Customization</span></div>
          <div class="features-padding">
              <span>Lorem ipsum dolor sit amet consectetur. Sagittis vulputate ultrices magna fermentum vivamus faucibus quam.
              Nullam dignissim nisi non lectus lacus amet id.
              </span>
          </div>
        </v-col>
        <v-col cols="12" md="4" xl="4"> 
          <v-img src="@/assets/img/Section-4-Icon-3.svg" style="width: 64px !important;"></v-img>
          <div class="features-padding"><span>Collaboration</span></div>
          <div class="features-padding">
              <span>Lorem ipsum dolor sit amet consectetur. Sagittis vulputate ultrices magna fermentum vivamus faucibus quam.
              Nullam dignissim nisi non lectus lacus amet id.
              </span>
          </div>
        </v-col>
      </v-row>
    </div>
  </section>
</template>
  
<script>

    export default {

      data: () => ({
          items: [
          [ "@/assets/img/Section-4-Icon-1.svg", "Smart Scheduling", "Lorem ipsum dolor sit amet consectetur. Sagittis vulputate ultrices magna fermentum vivamus faucibus quam.Nullam dignissim nisi non lectus lacus amet id." ],
          [ "@/assets/img/Section-4-Icon-2.svg", "Profile Customization", "Lorem ipsum dolor sit amet consectetur. Sagittis vulputate ultrices magna fermentum vivamus faucibus quam.Nullam dignissim nisi non lectus lacus amet id." ],
          [ "@/assets/img/Section-4-Icon-3.svg", "Collaboration", "Lorem ipsum dolor sit amet consectetur. Sagittis vulputate ultrices magna fermentum vivamus faucibus quam.Nullam dignissim nisi non lectus lacus amet id." ],
          ],
      }),
  };

</script>

<style scoped>

  .features-padding {
      padding-top: 17px;
  }
  .features-real-contents {
      padding-top: 40px !important;
  }
  .features-box {
      justify-content: center;
  }
  .features-title {
      display: flex;
      flex-direction: column;
      color: var(--232323, #232323);
      text-align: center;
      font-family: Manrope;
      font-size: 36px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
  }
  .features-content {
      display: flex;
      flex-direction: column;
      color: var(--232323, #232323);
      text-align: center;
      font-family: Manrope;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
  }
  .features-component {
      padding: 120px 0 40px 0;
      justify-content: center;
  }
  @media (max-width: 570px) {
    .features-component  {
			padding: 120px 20px 40px 20px !important;
    }
}

</style>
  