import http from "@/http/http-req.js";

class Token {
    checkToken(to, from, next) {
        return http.get("me")
            .then(response => {
                if (response.data.status == "Token is Invalid" || response.data.status == "Token is Expired") {
                    next('/');
                } else {
                    next();
                }
            });
    }
}

export default new Token();