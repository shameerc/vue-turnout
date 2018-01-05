<template>
    <div>
        <h3>Sign up</h3>
        <div class="form-inline">
            <input 
                type="email" 
                placeholder="Email"
                class="form-control"
                v-model="email"
            >
            <input 
                type="password"
                placeholder="Password"
                class="form-control"
                v-model="password" 
            >
            <button class="btn btn-primary" @click="signUp">Sign Up</button>
        </div>
        <br />
        <p>{{error.message}}</p>
        <router-link to="/signin">Sign In</router-link>
    </div>
</template>
<script>
import { firebaseApp } from '../firebaseApp'
export default {
    data() {
        return {
            email: '',
            password: '',
            error: {
                message: ''
            }
        }
    },
    methods: {
        signUp() {
            firebaseApp.auth().createUserWithEmailAndPassword(this.email, this.password)
                .catch(error =>  this.error = error)
        }
    }
}

</script>