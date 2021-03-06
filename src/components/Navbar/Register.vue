<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" width="57%">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="orange" class="mx-2" v-bind="attrs" v-on="on" @click="signUp = false">login</v-btn>
        <v-btn color="#46ACC2" class="mx-2" v-bind="attrs" v-on="on" @click="signUp = true">sign Up</v-btn>
      </template>
      <article>
        <div class="container" :class="{'sign-up-active' : signUp}">
          <Loading v-if="loading" class="loading" />
          <div class="overlay-container">
            <div class="overlay">
              <div class="overlay-left">
                <h2>Welcome Back!</h2>
                <p>Please login with your personal info</p>
                <button class="invert" id="signIn" @click="signUp = !signUp">Sign In</button>
                <p>Or</p>
                <SocialSignUp />
              </div>
              <div class="overlay-right">
                <h2>Hello, Friend!</h2>
                <p>Please enter your personal details</p>
                <button class="invert" id="signUp" @click="signUp = !signUp ">Sign Up</button>
                <p>Or</p>
                <SocialSignUp />
              </div>
            </div>
          </div>
          <form class="sign-up" @submit.prevent="register">
            <h2>Create account</h2>
            <div>Use your email for registration</div>
            <input type="text" required placeholder="Name" v-model="name"/>
            <input type="email" required placeholder="Email" v-model="email"/>
            <input type="password" required placeholder="Password" v-model="password"/>
            <div v-if="registerErrors">
              <div v-for="errorType in registerErrors" :key="errorType">
                <v-alert type="error" v-for="error in errorType" dismissible :key="error">{{error}}</v-alert>
              </div>
            </div>
            <v-alert type="success" v-if="success">Account created ... you may now login</v-alert>
            <button>Sign Up</button>
          </form>
          <form class="sign-in" @submit.prevent="login">
            <h2>Sign In</h2>
            <div>Use your account</div>
            <input
            required
              type="email"
              placeholder="Email"
              v-model="email"
            />
            <input
            required
              type="password"
              placeholder="Password"
              v-model="password"
            />
            <a href="#">Forgot your password?</a>
            <v-alert type="error" v-if="loginError">{{loginError}}</v-alert>
            <button>Sign In</button>
          </form>
        </div>
      </article>
    </v-dialog>
  </v-row>
</template>

<script>
import Loading from "./Loading";
import SocialSignUp from "./SocialSignUp";
export default {
  data() {
    return {
      signUp: false,
      dialog: false,
      name: "",
      email: "",
      password: "",
      loading: false,
      loginError: null,
      registerErrors: [],
      success: false,
    }
  },
  components: {
    SocialSignUp,
    Loading,
  },
  methods: {
    login() {
      this.loading = true;
      this.$store
        .dispatch("login", {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          this.loading = false;
          if (res) this.loginError = res;
        });
    },
    register() {
      this.loading = true;
      this.$store
        .dispatch("register", {
          name: this.name,
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          console.log(res)
          this.loading = false;
          if (res) this.registerErrors = res;
          else {
            this.success = true;
            this.registerErrors = [];
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.loading {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(255, 255, 255, 0.26);
}
.container {
  position: relative;
  width: auto;
  height: 480px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
  background: linear-gradient(to bottom, #efefef, #ccc);

  .overlay-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.5s ease-in-out;
    z-index: 100;
  }

  .overlay {
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    background: linear-gradient(to bottom right, rgb(0, 89, 255), #46acc2);
    color: #fff;
    transform: translateX(0);
    transition: transform 0.5s ease-in-out;
  }

  @mixin overlays($property) {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 70px 40px;
    width: calc(50% - 80px);
    height: calc(100% - 140px);
    text-align: center;
    transform: translateX($property);
    transition: transform 0.5s ease-in-out;
  }

  .overlay-left {
    @include overlays(-20%);
  }

  .overlay-right {
    @include overlays(0);
    right: 0;
    width: 50%;
  }
}

h2 {
  margin: 0;
}

p {
  margin: 20px 0 30px;
}

a {
  color: #222;
  text-decoration: none;
  margin: 15px 0;
  font-size: 1rem;
}

button {
  border-radius: 20px;
  border: 1px solid rgb(207, 136, 4);
  background-color: orange;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  padding: 10px 40px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform 0.1s ease-in;

  &:active {
    transform: scale(0.9);
  }

  &:focus {
    outline: none;
  }
}

button.invert {
  background-color: transparent;
  border-color: #fff;
}

form {
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 20px 20px;
  width: calc(50% - 120px);
  height: calc(100% - 180px);
  text-align: center;
  background: linear-gradient(to bottom, #4d4f50, #272727);
  transition: all 0.5s ease-in-out;

  div {
    font-size: 1rem;
  }

  input {
    background-color: #4d4f50;
    color: white;
    border: none;
    padding: 8px 15px;
    margin: 6px 0;
    width: calc(100% - 30px);
    border-radius: 15px;
    border-bottom: 1px solid #272727;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.4), 0 -1px 1px #272727,
      0 1px 0 #272727;
    overflow: hidden;

    &:focus {
      outline: none;
      background-color: #272727;
    }
  }
}

.sign-in {
  left: 0;
  z-index: 2;
  height: 100%;
  width: 50%;
}

.sign-up {
  left: 0;
  z-index: 1;
  opacity: 0;
  height: 100%;
  width: 50%;
}

.sign-up-active {
  .sign-in {
    transform: translateX(100%);
  }

  .sign-up {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: show 0.5s;
  }

  .overlay-container {
    transform: translateX(-100%);
  }

  .overlay {
    transform: translateX(50%);
  }

  .overlay-left {
    transform: translateX(0);
    width: 50%;
  }

  .overlay-right {
    transform: translateX(20%);
  }
}

@keyframes show {
  0% {
    opacity: 0;
    z-index: 1;
  }
  49% {
    opacity: 0;
    z-index: 1;
  }
  50% {
    opacity: 1;
    z-index: 10;
  }
}
</style>


