import http from "../http/http-req.js"

export function getListTask() {
    return http.get("task")
        .then(response => {
            return response.data;
        });
}

export function createTask(data) {
    return http.post("/task", data)
        .then(response => {
            return response.data;
        });
}

export function getTask(id) {
    return http.get(`/task/${id}`)
        .then(response => {
            console.log(response.data)
            return response.data;
        });
}

export function updateTask(id, data) {
    return http.put(`/task/${id}`, data)
        .then(response => {
            return response.data;
        });
}

export function deleteTask(id) {
    return http.delete(`/task/${id}`)
        .then(response => {
            return response.data;
        });
}

export function changeStatus(idTask) {
    return http.post('/task/change/status', { id: idTask })
        .then(response => {
            console.log(response);
            return response.data;
        });
}