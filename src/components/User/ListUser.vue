<template>
  <div class="list">
    <div class="row">
      <div class="col-md-6">
        <h4>
          Listagem de usuários
        </h4>
        <ul class="list-group">
          <li class="list-group-item"
            :class="{ active: index == currentIndex }"
            v-for="(user, index) in users"
            :key="index"
            @click="setActiveUser(user, index)"
          >
            {{ user.name }} 
          </li>
        </ul>
      </div>
      <div class="col-md-6">
        <div v-if="currentUser">
          <h4>Usuário</h4>
          <div>
            <label><strong>Nome:</strong></label> {{ currentUser.name }}
          </div>
          <div>
            <label><strong>E-mail:</strong></label> {{ currentUser.email }}
          </div>

          <router-link :to="'/user/' + currentUser.id" class="btn btn-warning" >Editar <font-awesome-icon icon="user-edit" /></router-link>
        </div>
      </div>
    </div>
    <div class="row">
          &nbsp;
    </div>
    <div class="row col-md-6">
          <router-link to="/newUser" class="btn btn-primary">
            Cadasatrar Usuário 
            <font-awesome-icon icon="user-plus" />
          </router-link>
    </div>
  </div>
</template>

<script>
import { getListUser } from "@/services/UserService"

export default {
  name: "listUser",
  data() {
    return {
      users: [],
      currentUser: null,
      currentIndex: -1,
      name: "",
    };
  },
  methods: {
    async getUsers() {
        this.users = await getListUser();
    },

    refreshList() {
      this.getUsers();
      this.currentUser = null;
      this.currentIndex = -1;
    },

    setActiveUser(user, index) {
      this.currentUser = user;
      this.currentIndex = user ? index : -1;
    },

  },
  mounted() {
    this.getUsers();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
