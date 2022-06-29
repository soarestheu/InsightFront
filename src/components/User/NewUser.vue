<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="name">Nome completo:</label>
        <input
          type="text"
          class="form-control"
          id="name"
          required
          v-model="user.name"
          name="name"
        />
      </div>

      <div class="form-group">
        <label for="email">E-mail</label>
        <input
          class="form-control"
          id="email"
          required
          v-model="user.email"
          name="email"
        />
      </div>

      <div class="form-group">
        <label for="password">Senha</label>
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
        <br/>
        <router-link class="btn btn-warning " to="/listUser">Voltar</router-link>
        &nbsp;&nbsp;&nbsp;
        <button @click="saveUser" class="btn btn-success">Cadastrar</button>
      </div>
      

    </div>

    <div v-else>
      <h4>Usuário cadastrado com sucesso!</h4>
      
      <router-link class="btn btn-warning" to="/listUser">Voltar</router-link>
      &nbsp;&nbsp;
      <button class="btn btn-success" @click="newUser">Criar Novo</button>
    </div>
  </div>
</template>

<script>
    import { createUser } from "@/services/UserService"

    export default {
        name: "newUser",
        data() {
            return {
                user: {
                    id: null,
                    name: "",
                    description: "",
                    password: ""
                },
                submitted: false
            };
        },
        methods: {
            async saveUser() {
                var data = {
                    name: this.user.name,
                    email: this.user.email,
                    password: this.user.password
                };
                
                this.user = await createUser(data);
                if(this.user){
                  this.submitted = true;
                }
            },

            newUser() {
                this.submitted = false;
                this.user = {};
            }
        }
    };
</script>

<style>
    .submit-form {
        max-width: 300px;
        margin: auto;
    }
</style>