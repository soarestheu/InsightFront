<template>
    <div id="navBar">
        <nav class="navbar navbar-expand navbar-dark bg-dark">
        <router-link to="/listUser" class="navbar-brand">Inicio</router-link>
        <div v-if="Logado"  class="navbar-nav mr-auto">
            <div class="dropdown">
                <span class="nav-link navbar-text">Usuário</span>
                <div class="dropdown-content">
                     <li class="nav-item">
                        <router-link to="/listUser" class="nav-link text-dark">Listar Usuários </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/newUser" class="nav-link text-dark">Cadastrar Usuário</router-link>
                    </li>

                </div>
            </div>

            <div class="dropdown">
                <span class="nav-link navbar-text">Tarefa</span>
                <div class="dropdown-content">
                    <li class="nav-item">
                        <router-link to="/listTask" class="nav-link text-dark">Listar Tarefa</router-link>
                    </li>

                    <li class="nav-item">
                        <router-link to="/newTask" class="nav-link text-dark">Cadastrar Tarefa</router-link>
                    </li>
                </div>
            </div>
           
          
        </div>
        
        <div v-if="Logado" class="nav-item navbar-text logout" >
            <a href="#" @click="logoutSession" class="nav-link">Logout </a>
        </div>
        </nav>
    </div>
</template>

<script>
import { logout, validateToken } from "../services/AuthService";
import Cookie from "js-cookie";

    export default {
        name: "navBar",
        data() {
            return {
                Logado:false,
                logout: null,
                validateToken:null,
            }
        },
        methods: {
            async logoutSession() {
                this.logout = await logout();
                if(this.logout.message) {
                    Cookie.remove("Crud_token");
                    location.reload();
                }
            },
            async exibeMenu(){
                this.validateToken = await validateToken();
                if (this.validateToken.status) {
                    this.Logado = false;
                } else {
                    this.Logado = true;
                }
            },
        },
        mounted() {
            this.exibeMenu();
        },

    }
</script>


<style>
.logout {
  float: rigth;
   margin-left: auto;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 180px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
  color: black !important;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>