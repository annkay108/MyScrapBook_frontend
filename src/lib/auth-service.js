import axios from "axios";

class Auth{
    constructor(){
        this.auth = axios.create({
            baseURL: process.env.REACT_APP_API_URL,
            withCredentials: true
        });
    }

    signup({email, password, username}){
        return this.auth
        .post("/auth/signup", { email, password, username})
    }
}