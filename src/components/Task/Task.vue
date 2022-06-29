<template>

  <div v-if="true" class="edit-form">
    <h4>Tarefa </h4>
    <form>
      <div class="form-group">
        <label for="name">Tarefa:</label>
        <input
          type="text"
          class="form-control"
          id="name"
          required
          v-model="currentTask.nome"
          name="name"
        />
      </div>

       <div class="form-group">
        <label for="email">Data conclusão</label>
        <date-pick 
          class="form-control" 
          v-model="currentTask.data_conclusao"

          ></date-pick>
      </div>

    </form>
    <router-link  to="/list"><font-awesome-icon icon="arrow-left" /></router-link>
      &nbsp; 
    <button class="btn btn-danger mr-2"
      @click="deleteTask"
    >
      Excluir <font-awesome-icon icon="minus-circle" />
    </button>

    <button type="submit" class="btn btn-success"
      @click="updateTask"
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
import { getTask, updateTask } from "@/services/TaskService"
import DatePick from 'vue-date-pick';
import 'vue-date-pick/dist/vueDatePick.css';
export default {
  name: "task",
  components: {
    DatePick
  },
  data() {
    return {
      currentTask: null,
      returnUpdate: null,
    };
  },
  methods: {
    async getTask(id) {
        this.currentTask = await getTask(id);
    },

    async updateTask() {
        this.returnUpdate = await updateTask(this.currentTask.id, this.currentTask)
        if(this.returnUpdate.sucess){
          alert(this.returnUpdate.sucess)
          this.$router
            .replace({
                name: 'listTask',
            });
        }
    },

  },
  mounted() {
    this.getTask(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>