import React, { Component } from 'react';
import './style.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numero: 0,
            botao: 'GO'
        };

        this.timer = null;
        this.go = this.go.bind(this);
        this.clean = this.clean.bind(this);
    }

    go() {
        let state = this.state;
        if (this.timer !== null) {
            clearInterval(this.timer);
            this.timer = null;
            state.botao = 'GO';
        } else {

            this.timer = setInterval(() => {
                let state = this.state;
                state.numero += 0.1;
                this.setState(state);
            }, 100);
            state.botao = 'STOP';
        }
        this.setState(state);
    }

    clean() {
        this.go();
        let state = this.state;
        state.numero = 0;
        this.setState(state);
    }

    render() {
        return (
            <div className="container">
                <img src={require('./assets/cronometro.png')} className="img" />
                <a className="timer">{this.state.numero.toFixed(2)}</a>
                <div className="areaBtn">
                    <a className="botao" onClick={this.go}>{this.state.botao} </a>
                    <a className="botao" onClick={this.clean} >CLEAN</a>
                </div>
            </div>
        );
    }
}

export default App;