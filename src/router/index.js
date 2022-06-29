import Vue from 'vue'
import VueRouter from 'vue-router'

import middleware from '../services/middleware';

import Login from "../components/Login";

// User
import ListUser from "../components/User/ListUser"
import NewUser from "../components/User/NewUser"
import User from "../components/User/User"

// Tasks
import NewTask from "../components/Task/NewTask"
import ListTask from "../components/Task/ListTask"
import Task from "../components/Task/Task"

Vue.use(VueRouter)

const routes = [{
        path: "/",
        name: "login",
        component: Login
    },
    {
        path: "/listUser",
        name: "listUser",
        beforeEnter: middleware.auth,
        component: ListUser
    },
    {
        path: "/newUser",
        name: "newUser",
        beforeEnter: middleware.auth,
        component: NewUser
    },
    {
        path: "/user/:id",
        name: "user",
        beforeEnter: middleware.auth,
        component: User
    },
    {
        path: "/newTask",
        name: "newTask",
        beforeEnter: middleware.auth,
        component: NewTask
    },
    {
        path: "/listTask",
        name: "listTask",
        beforeEnter: middleware.auth,
        component: ListTask
    },
    {
        path: "/task/:id",
        name: "task",
        beforeEnter: middleware.auth,
        component: Task
    }

]

const router = new VueRouter({
    routes
})

export default router