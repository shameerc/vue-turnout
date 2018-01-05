<template>
    <div>
        <h3>Sign in</h3>
        <div class="form-inline">
            <div class="form-group">
                <input 
                    type="email"
                    placeholder="Email"
                    v-model="email"
                    class="form-control" 
                > 
                <input 
                    type="password"
                    placeholder="Password"
                    v-model="password"
                    class="form-control"
                > 
                <button class="btn btn-primary" @click="signIn">Sign in</button>
            </div>
        </div>
        <br />
        <p>{{error.message}}</p>
        <router-link to="/signup">Sign up</router-link>
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
        signIn() {
            firebaseApp.auth().signInWithEmailAndPassword(this.email, this.password)
                .catch(error => {
                    this.error = error
                })
        }
    }
}
</script>