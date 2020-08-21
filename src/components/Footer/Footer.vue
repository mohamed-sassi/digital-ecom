<template>
  <v-footer dark padless>
    <v-card flat tile class="lighten-1 white--text text-center" width="100%">
      <v-row class="pt-8">
        <v-col v-for="i in [1,2,3,4]" :key="i" cols="6" md="2">
          <v-list dark>
            <v-list-item v-for="j in [1,2,3,4,5]" :key="j">
              <v-list-item-content>
                <v-list-item-title>
                  <router-link to="/qsd" class="link">Link</router-link>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="12" md="3" class="pa-8">
          <h2>Contact us</h2>
          <v-text-field label="Email"></v-text-field>
          <v-textarea label="Message" rows="4" hint="Your feedback helps us"></v-textarea>
          <v-btn color="#46ACC2">Send</v-btn>
        </v-col>
        <v-col cols="12" sm="6" md="1" :class="` d-flex flex-${onMobile ? 'row' : 'column'} justify-center`">
          <v-btn v-for="icon in icons" :key="icon" class="my-6 white--text" icon>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-divider></v-divider>

      <v-card-text class="white--text">
        &copy;
        {{ new Date().getFullYear() }} —
        <strong>MarketPlace</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
  computed:{
    onMobile(){
      return this.$store.getters.onMobile
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.link {
  color: white;
}
</style>
