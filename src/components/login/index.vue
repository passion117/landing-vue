<template>
  <section id="login" class="login-component">
    <v-parallax class="login-size">
      <v-row align="center" justify="center" class="login-img-position">
        <v-col cols="12" md="6" xl="6">
          <div class="login-description">
            <span>
              Welcome to your personal, professional calendar network profile
            </span>
          </div>
          <div class="login-keyword">
            <span>
              Enterprise Solution . My Personal Calendar
            </span>
          </div>
          <v-sheet style="width: 100%;">
            <v-form fast-fail @submit.prevent>
              <v-text-field
                v-model="firstName"
                label="Bohban"
                ></v-text-field>
                
              <v-text-field
                type="password"
                v-model="password"
                label="Password"
              ></v-text-field>

              <v-btn type="submit" block class="login-btn">Login</v-btn>
            </v-form>
          </v-sheet>
          <div class="forgot-password">
            <span>
              <a class="forgot-password-title" href="">
                Forgot password?
              </a>
            </span>
          </div>
        </v-col>
        <v-col cols="12" md="6" xl="6"> 
          <v-img src="@/assets/img/Hero-Image.png" style="width: 520px !important; float: right;" />
        </v-col>
      </v-row>
    </v-parallax>
  </section>
</template>

<script>
  export default {
    data: () => ({
      firstName: '',
      password: '',
    }),
  }
</script>

<style scoped>

  .login-component {
    padding: 60px 0 60px 0 !important;
  }
  .login-size {
    height: unset !important;
    background-color:white ;
  }
  .login-size div {
    background:white !important;
  }
  .login-img-position {
    width: 100% !important;
    background: #ffffff;
    float: right;
  }
  .forgot-password-title {
    color: #232323 !important;
  }
  .forgot-password {
    margin-top: 25px;
    color: var(--232323, #232323);
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    text-decoration-line: underline;
  }
  .login-btn {
    margin-top: 25px !important;
    height: 50px !important;
    width: 100%;
    display: flex;
    padding: 13px 20px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    border-radius: 15px;
    background: var(--0000-fe, #8748FF);
    background-color: #8748FF !important;
    color: #FFFFFF !important;
    text-transform: none !important;
  }
  .login-description {
    color: var(--232323, #232323);
    font-family: Manrope;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }
  .login-keyword {
    padding-top: 25px !important;
    color: var(--232323, #232323);
    font-family: Manrope;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }

</style>

<style>
  .v-parallax__content {
    background-color: #ffffff !important;
    flex-direction: unset !important;
  }
</style>
  