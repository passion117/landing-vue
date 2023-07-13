<template>
  <section id="about" class="about-component">
    <v-row>
      <v-col cols="12" md="6" xl="6"> 
        <v-img src="@/assets/img/Section-5-Image.png" style="width: 535px !important;" />
      </v-col>
      <v-col cols="12" md="6" xl="6">
        <div class="about-title">
            <span>About Us</span>
        </div>
        <div class="about-description">
          <p>
              Lorem ipsum dolor sit amet consectetur. Sagittis vulputate ultrices magna fermentum vivamus faucibus quam. 
              Nullam dignissim nisi non lectus lacus amet id.
              Lorem ipsum dolor sit amet consectetur. Sagittis vulputate ultrices magna fermentum vivamus faucibus quam. 
              Nullam dignissim nisi non lectus lacus amet id.
          </p>
          <p>
              Lorem ipsum dolor sit amet consectetur. Sagittis vulputate ultrices magna fermentum vivamus faucibus quam. 
              Nullam dignissim nisi non lectus lacus amet id.
              Lorem ipsum dolor sit amet consectetur. Sagittis vulputate ultrices magna fermentum vivamus faucibus quam. 
              Nullam dignissim nisi non lectus lacus amet id.
          </p>
          <p>
              Lorem ipsum dolor sit amet consectetur. Sagittis vulputate ultrices magna fermentum vivamus faucibus quam. 
              Nullam dignissim nisi non lectus lacus amet id.
              Lorem ipsum dolor sit amet consectetur. Sagittis vulputate ultrices magna fermentum vivamus faucibus quam. 
              Nullam dignissim nisi non lectus lacus amet id.
          </p>
      </div>
      <v-btn class="about-join-btn">Join Now!</v-btn>
    </v-col>
    </v-row>
  </section>
</template>
  
<script>

</script>

<style scoped>

  .about-title {
    color: var(--232323, #232323);
    font-family: Manrope;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding-bottom: 20px;
  }
  .about-description {
    color: var(--232323, #232323);
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    flex-direction: column;
    align-self: stretch;
    padding-bottom: 20px;
  }
  .about-join-btn {
    color: var(--0000-fe, #8748FF);
    background-color: #8748FF !important;
    color: #FFFFFF !important;
    display: flex;
    padding: 13px 50px;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    background: var(--0000-fe, #8748FF);   
    text-transform: none !important;
    width: 195px;
    height: 50px;
  }
  .about-component {
    padding: 60px 0 120px 0 !important;
  }
  @media (max-width: 570px) {
    .about-component  {
			padding: 60px 20px 120px 20px !important;
    }
  }

</style>
  