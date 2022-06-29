<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="name">Tarefa:</label>
        <input
          type="text"
          class="form-control"
          id="name"
          required
          v-model="task.name"
          name="name"
        />
      </div>

      <div class="form-group">
        <label for="email">Data conclusão</label>
        <date-pick 
          class="form-control" 
          v-model="task.date"

          ></date-pick>
      </div>

      <div class="form-group">
        <br/>
        <router-link class="btn btn-warning " to="/listTask">Voltar</router-link>
        &nbsp;&nbsp;&nbsp;
        <button @click="saveTask" class="btn btn-success">Cadastrar</button>
      </div>
      

    </div>

    <div v-else>
      <h4>Tarefa cadastrada com sucesso!</h4>
      
      <router-link class="btn btn-warning" to="/listTask">Voltar</router-link>
      &nbsp;&nbsp;
      <button class="btn btn-success" @click="newTask">Criar Novo</button>
    </div>
  </div>
</template>

<script>
    import { createTask } from "@/services/TaskService"
    import DatePick from 'vue-date-pick';
    import 'vue-date-pick/dist/vueDatePick.css';

    export default {
        name: "newTask",
        components: {
          DatePick
        },
        data() {
            return {
                task: {
                    id: null,
                    name: "",
                    date: '2019-01-01',
                },
                submitted: false
            };
        },
        methods: {
            async saveTask() {
                var data = {
                  nome: this.task.name,
                  data_conclusao: this.task.date,
                };

                this.task = await createTask(data);
                if(this.task){
                  this.submitted = true;
                }
            },

            newTask() {
              this.submitted = false;
              this.task = {};
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