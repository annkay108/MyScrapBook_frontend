import React, {Component} from "react";
const { Consumer, Provider } = React.createContext();

class AuthProvider extends React.Component{
    constructor(){
        super();
        this.state = {
            isLoggedIn: false,
            user: null,
            isLoading: true
        };
    };

    
}