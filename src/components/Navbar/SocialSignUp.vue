<template>
<div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <v-row>
    <button @click="authenticate('facebook')" class="fa fa-facebook">  Login with Facebook</button>
    </v-row>
    <v-row>
    <button @click="authenticate('google')" class="fa fa-google">  Login with Google</button>
    </v-row>
    <v-row>
    <button @click="authenticate('linkedin')" class="fa fa-linkedin">  Login with LinkedIn</button>
    </v-row>
    
</div>
</template>
<script>

export default {
    methods: {
    authenticate(provider){
      this.$auth.authenticate(provider).then(()=>{
                
      })
    }
  }
}
</script>
<style scoped>
 .fa {
  padding: 20px;
  
  width: 200px;
  text-align: center;
  text-decoration: none;
}
.fa:hover {
  opacity: 0.7;
}
.fa-facebook {
  background: #3B5998;
  color: white;
}
.fa-google {
  background: #dd4b39;
  color: white;
}
.fa-linkedin {
  background: #007bb5;
  color: white;
}

</style>