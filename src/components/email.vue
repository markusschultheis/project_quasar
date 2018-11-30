<template>
    <div id="emailAdressField" class="email">
      <q-input
        v-model="form.email"
        @blur="$v.form.email.$touch"
        @keyup.enter="submit"
        :error="$v.form.email.$error"
      />
      <q-btn color='primary' @click='submit'>{{ label }}</q-btn>
      <div class="test" v-ripple>Click Me</div>
    </div>
</template>

<script>
  import { required, email } from 'vuelidate/lib/validators'
    export default {
      name: 'email',
      data () {
          return {
            form: {
              email: ''
            },
            msg: 'Bitte geben Sie eine valide Email Adrresse ein',
            label: 'Senden'
          }
      },
      validations: {
          form: {
            email: { required, email}
          }
      },
      methods:{
          submit () {
            this.$v.email.form.$touch()

            if (this.$v.email.form.$error) {
              this.$v.email.notify(this.$v.email.msg)
              return
            }
          }
      }
    }
</script>

<style scoped>

  .email {
    background-color: black;
  }

  .test {
    background-color: red;
  }

  .input {
    background-color: black;
  }
</style>
