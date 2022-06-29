import http from "../http/http-req.js"

export function login(data) {
    return http.post("auth/login", data)
        .then(response => {
            // console.log(response.data);
            return response.data;
        });
}

export function validateToken() {
    return http.get("me")
        .then(response => {
            return response.data;
        });
}

export function logout() {
    return http.post('auth/logout')
        .then(response => {
            return response.data;
        });
}