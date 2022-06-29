<template>
  <div class="list">
    <div class="row">
      <div class="col-md-12">
        <h4>
          Listagem de tarefas
        </h4>
        <table class="table table-striped-columns table-hover">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Data de conclusão</th>
              <th>Status</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            <tr  v-for="(task, index) in tasks" :key="index">
              <td>{{ task.nome }}</td>
              <td>{{ task.data_conclusao }}</td>
              <td>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" @click="changeStatusTask(task.id); " v-model="task.status">
                     <label class="form-check-label" for="flexSwitchCheckDefault">{{ task.status | fim }}</label>
                    
                </div>
              </td>
              <td>
                <router-link router-link :to="'/task/' + task.id" class="btn btn-warning" >Editar</router-link>
                  &nbsp;
                <button class="btn btn-danger" @click="deleteTask(task.id)">
                  Excluir
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row">
          &nbsp;
    </div>
    <div class="row col-md-6">
          <router-link to="/newTask" class="btn btn-primary">
            Cadasatrar Usuário 
            <font-awesome-icon icon="task-plus" />
          </router-link>
    </div>
  </div>
</template>

<script>
import { getListTask, changeStatus, deleteTask } from "@/services/TaskService"

export default {
  name: "listTask",
  data() {
    return {
      tasks: [],
      currentTask: null,
      currentIndex: -1,
      returnDelete: null,
    };
  },
  filters: {
    fim(status){
      if(status){
        return "Tarefa Concluida";
      }else{
        return "Tarefa Pendente";
      }
    }
  },
  methods: {
    async getTasks() {
        this.tasks = await getListTask();
    },

    async changeStatusTask(id){
      await changeStatus(id);
      this.getTasks();
    },

    async deleteTask(id) {
      if(confirm("Você quer mesmo deletar essa tarefa? ")){
        this.returnDelete = await deleteTask(id)
        if(this.returnDelete.sucess){
            alert(this.returnDelete.sucess);
            this.getTasks();
        }
      }
    }

  },
  mounted() {
    this.getTasks();
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
