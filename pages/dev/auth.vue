<template lang="pug">
.login.container.py-12
  p {{ USER }}
  .flex.gap-y-4.flex-col.w-32
    SoButton(@click="signup") SIGNUP
    SoButton(@click="login") LOGIN
    SoButton(@click="google") GOOGLE
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const login = defineComponent({
  setup() {
    const USER = ref({});
    const email = 'tutor34676@gmail.com';
    const password = 'tutor1234';

    // SIGNIN
    const login = () => {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          // Signed in 
          const user = userCredential.user;
          const token = await user.getIdToken();
          console.log(token)
          localStorage.setItem('token', token);
          USER.value = user
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode , errorMessage);
        });
    };

    // SIGNUP
    const signup = () => {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          USER.value = user
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode , errorMessage);
        });
    };

    // GOOGLE
    const google = () => {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential?.accessToken;
          // The signed-in user info.
          const user = result.user;
          console.log(user);
          // ...
        }).catch((error) => {
          // Handle Errors here.
          console.log(error)
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    }
    return {
      USER,
      login, signup, google,
    }
  },
});

export default login;
</script>

<style lang="scss" scoped>
// .login {}
</style>
