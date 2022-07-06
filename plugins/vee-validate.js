import Vue from 'vue';
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { required, email, max } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: 'จำเป็นต้องกรอก'
});

extend("email", {
  ...email,
  message: 'ต้องเป็นอีเมล'
});

extend("max", {
  ...max,
  message: 'ต้องมีความยาวไม่เกิน {length} ตัวอักษร'
});

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);