import http from "../http/http-req.js"

export function getListUser() {
    return http.get("user")
        .then(response => {
            return response.data;
        });
}

export function createUser(data) {
    return http.post("/user", data)
        .then(response => {
            return response.data;
        });
}

export function getUser(id) {
    return http.get(`/user/${id}`)
        .then(response => {
            return response.data;
        });
}

export function updateUser(id, data) {
    return http.put(`/user/${id}`, data)
        .then(response => {
            return response.data;
        });
}

export function deleteUser(id) {
    return http.delete(`/user/${id}`)
        .then(response => {
            return response.data;
        });
}