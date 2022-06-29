<template>
  <div class="list row justify-content-md-center">
    
    <div class="submit-form col-md-4">
        <form @submit.stop.prevent="login">
            <div class="form-group">
            <label for="email"> E-mail </label>
            <input 
                type="text"
                class="form-control"
                id="email"
                required
                v-model="user.email"
                name="email"
            />
            </div>
        
            <div class="form-group">
            <label for="password"> Senha </label>
            <input 
                type="password"
                class="form-control"
                id="password"
                required
                v-model="user.password"
                name="password"
            />
            </div>

            <div class="form-group">
                <button class="btn btn-primary btn-block"> Login </button>
            </div>
            </form>
    </div>
    </div>
</template>

<script>
import Cookie from "js-cookie";
import { login } from "../services/AuthService";

export default {
    name: "login",
    data() {
        return {
            user: {
                id: null,
                name: "",
                description: "",
                password: ""
            },
            submitted: false,
            data: [],
            token: null,
        };
    },
    methods: {
        async login() {
            this.data = {
                email: this.user.email,
                password: this.user.password,
            };
            this.token = await login(this.data);

            if(this.token.access_token){
                Cookie.set("Crud_token", this.token.access_token);
                this.submitted = true;
                this.$router
                    .go('listUser');
            }
        }

    },
};
</script>