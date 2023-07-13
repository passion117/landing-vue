<template>
  <section id="calendar" class="calendar-component">
    <v-row align="center" justify="center">
      <v-col cols="12" md="6" xl="6"> 
        <v-img src="@/assets/img/Section-2-Image.png" style="width: 530px !important;"/>
      </v-col>
      <v-col cols="12" md="6" xl="6" class="">
        <div class="individual-title">
          <span>
            Individual
          </span>
        </div>
        <div class="individual-description">
          <span>
            Create and Publish your own​personal or professional​online public ​calendar!
          </span> 
        </div>
        <div class="individual-content">
          <span>
            No more email back and forth to coordinate schedule. Easy to set up. Easy to publish. Easy to search 
            . Easy to review Easy to schedule and connect.
            No more email back and forth to coordinate schedule. Easy to set up. Easy to publish. Easy to search 
            . Easy to review Easy to schedule and connect.
            No more email back and forth to coordinate schedule. Easy to set up. Easy to publish. Easy to search 
            . Easy to review Easy to schedule and connect.
            </span>
          </div>
        <v-btn class="individual-join-btn">Join Now!</v-btn>
      </v-col>
    </v-row>
  </section>
</template>

<script>

</script>

<style scoped>

  .calendar-component {
    padding: 60px 0 80px 0 !important;
  }
  .individual-description {
    color: var(--232323, #232323);
    font-family: Manrope;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    margin-bottom: 35px !important;
  }
  .individual-title {
    display: flex;
    margin-bottom: 35px !important;
    flex-direction: column;
    align-self: stretch;
    color: var(--0000-fe, #8748FF);
    font-family: Manrope;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }
  .individual-content {
    color: var(--232323, #232323);
    font-family: Manrope;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    display: flex;
    flex-direction: column;
    align-self: stretch;
    margin-bottom: 35px !important;
  }
  .individual-join-btn {
    color: var(--0000-fe, #8748FF);
    background-color: #8748FF !important;
    color: #FFFFFF !important;
    text-transform: none !important;
    border-radius: 15px;
    width: 195px;
    height: 50px;
  }

</style>
