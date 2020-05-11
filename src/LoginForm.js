import React, { Component } from "react";
import Input from './form-elements/Input';

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            error: ''
        }

        this.handleLogin = this.handleLogin.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleLogin(e) {
        e.preventDefault();
        const { match: { params }, history } = this.props;

        let key;
        let item;
        let decodedItem;
        let i;
        const storageLength = window.localStorage.length;

        for (i = 0; i < storageLength; i++) {
            key = window.localStorage.key(i);
            if (key.substring(0, 5) === "user_") {
                item = window.localStorage.getItem(key);
                decodedItem = JSON.parse(item);
                if (decodedItem.username === this.state.username && decodedItem.password === this.state.password) {
                    window.localStorage.setItem('user', item);
                    history.push('/');
                    break;
                }
            }
        }

        if (i === storageLength) {
            this.setState(() => ({ error: "Wrong username or password." }));
        }

    }

    handleInput(e) {
        const value = e.target.value;
        const key = e.target.getAttribute('name');
        this.setState(
            () => {
                const field = {};
                field[key] = value;
                return field;
            }
        )
    }

    render() {
        return (
            <div id="login-page" className="row">
                <div className="col s4 offset-s4">
                    <div className="card red lighten-5">
                        <div className="card-content red-text text-darken-2">
                            <span className="card-title center">Log in</span>
                            <form className="login-form">
                                <div className="row">
                                </div>
                                <div className="row">
                                    <h3>{this.state.error}</h3>
                                </div>
                                <div className="row">
                                    <Input id={"username"} name={"username"} title={"Username"} type={"text"} className={"validate"} value={this.state.username} handleChange={this.handleInput} placeholder={"Enter username"} />
                                </div>
                                <div className="row">
                                    <Input id={"password"} name={"password"} title={"Password"} type={"password"} className={"validate"} value={this.state.password} handleChange={this.handleInput} placeholder={"Enter password"} />
                                </div>
                                <div className="row">
                                    <div className="input-field col s6 offset-s3 center">
                                        <button className="btn waves-effect waves-light s6 offset-s3 red darken-3 red-text text-lighten-5" type="submit" name="action" onClick={this.handleLogin} >Log in</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginForm;