<template>
    <div class="footer-component">
      <div class="footer-start">
        <div class="footer-question">
          <span>
            Ready to get started?
          </span>
        </div>
        <div class="footer-contact">
          <span>
            If you have a general inquiry and would like to speak to our expert team, 
            you can contact us via email at: example@example.com
          </span>
        </div>
        <div class="footer-join-btn-f">
          <v-btn class="footer-join-btn">
            Join Now!
          </v-btn>
        </div>
      </div>
      <v-divider class="footer-divider"></v-divider>
      <div class="footer-end">
        <div class="m-padding">
          <v-img src="@/assets/img/white-Logo.svg" style="height: 55px !important;">
          </v-img>
        </div>
        <div class="m-padding">
          <span>© {{ new Date().getFullYear() }} . All Rights Reserved. </span>
        </div>
        <div class="m-padding" style="display: flex;">
          <a href="">
            <v-img src="@/assets/img/facebook-icon.svg" style="width: 45px !important; margin-right: 5px !important;" >
            </v-img>
          </a>
          <a>
            <v-img src="@/assets/img/linkedin-icon.svg" style="width: 45px !important; margin-right: 5px !important;">
            </v-img>
          </a>
          <a>
            <v-img src="@/assets/img/twitter-icon.svg" style="width: 45px !important; margin-right: 5px !important;">
            </v-img>
          </a>
          <!-- <v-btn
              v-for="(icon, i) in icons"
              :key="i"
              :href="icon.link"
              target="_blank"
              icon
            >
              <v-img src={{ icon.url }}} style="width: 50px !important;"></v-img>
          </v-btn>   -->
        </div>

      </div>
    </div>
  </template>
  
<style scoped>

  .footer-end {
    justify-content: space-between;
    align-items: center;
    display: flex;
    color: var(--white, #FFF);
    text-align: center;
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    width: 100% !important;
    margin-top: 30px;
  }
  .footer-divider {
    color: #ffffff;
    height: 1px;
    align-self: stretch;
    opacity: 0.25;
    background: var(--white, #FFF);
    width: 100% !important;
  }
  .footer-join-btn-f {
    align-items: center;
    justify-content: center;
    display: flex;
    padding-bottom: 30px !important;
  }
  .footer-join-btn {
    display: flex;
    padding: 13px 50px;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    background: var(--0000-fe, #8748FF);
    background-color: #8748FF !important;
    color: var(--style, #FFF);
    font-family: Manrope;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;    
    text-transform: none !important;
  }
  .footer-question {
    flex-direction: column;
    align-self: stretch;
    color: var(--white, #FFF);
    text-align: center;
    font-family: Manrope;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding-bottom: 10px !important;
    justify-content: center;
    align-items: center;
  } 
  .footer-contact {
    color: var(--9-a-9-a-9-a, #9A9A9A);
    text-align: center;
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    display: flex;
    flex-direction: column;
    padding-bottom: 30px !important;
  } 
  .footer-start {
    width: 100% !important;
  }
  .footer-component {
    padding: 80px 80px 40px 80px !important;
    display: flex;
    width: 100% !important;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #000025 !important;
  }
  @media (max-width: 570px) {
    .footer-component  {
			padding: 80px 20px 40px 20px !important;
    }
    .footer-end {
      display: inline-grid;
      margin-top: 0 !important;

    }
    .m-padding {
      padding-top: 30px !important;
    }
  }

</style>

<script>
export default {

  data: () => ({
    icons: [
      {
        url: "@/assets/img/facebook-icon.svg",
        link: "",
      },
      {
        url: "@/assets/img/linkedin-icon.svg",
        link: "",
      },
      {
        url: "@/assets/img/twitter-icon.svg",
        link: "",
      },
    ],
  }),
};
</script>
  