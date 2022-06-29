<template>

  <div v-if="currentUser" class="edit-form">
    <h4>Usuário </h4>
    <form>
      <div class="form-group">
        <label for="title">Nome</label>
        <input type="text" class="form-control" id="title"
          v-model="currentUser.name"
        />
      </div>
      <div class="form-group">
        <label for="description">E-mail</label>
        <input type="text" class="form-control" id="description"
          v-model="currentUser.email"
        />
      </div>

    </form>
    <router-link  to="/list"><font-awesome-icon icon="arrow-left" /></router-link>
      &nbsp; 
    <button class="btn btn-danger mr-2"
      @click="deleteUser"
    >
      Excluir <font-awesome-icon icon="minus-circle" />
    </button>

    <button type="submit" class="btn btn-success"
      @click="updateUser"
    >
      Atualizar  <font-awesome-icon icon="sync-alt" />
    </button>
    
  </div>

  <div v-else>
    <br />
    <router-link  to="/list"><font-awesome-icon icon="arrow-left" /></router-link>
  </div>
</template>

<script>
import { getUser, updateUser, deleteUser } from "@/services/UserService"

export default {
  name: "user",
  data() {
    return {
      currentUser: null,
      returnUpdate: null,
      returnDelete: null,
    };
  },
  methods: {
    async getUser(id) {
        this.currentUser = await getUser(id);
    },

    async updateUser() {
        this.returnUpdate = await updateUser(this.currentUser.id, this.currentUser)
        if(this.returnUpdate.sucess){
          alert(this.returnUpdate.sucess)
          this.$router
            .replace({
                name: 'listUser',
            });
        }
    },

    async deleteUser() {
        this.returnDelete = await deleteUser(this.currentUser.id)
        if(this.returnDelete.sucess){
            alert(this.returnDelete.sucess)
            this.$router
            .replace({
                name: 'listUser',
            });
        }
    }
  },
  mounted() {
    this.getUser(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>