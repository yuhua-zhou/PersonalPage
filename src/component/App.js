import React from 'react'
import {HashRouter as Router,Route,Redirect,Switch,Link} from 'react-router-dom'
import HomePage from "./HomePage/HomePage";
import About from './About/About'
import Other from './Other/Other'
import TestDemo from './TestDemo'

import style from '../css/App.module.scss'

class App extends React.Component{

    constructor(props) {
        super(props);

        // 知道选中路由，然后动态改变样式
        const urlname = window.location.pathname;
        let index = 0;
        switch (urlname) {
            case "/Other":
                index = 1;
                break;
            case "/About":
                index = 2;
                break;
            case "/Demo":
                index = 3;
                break;
        }

        this.state = {
            index: index,
            items: [
                {name: "主页", url: "/homepage"},
                {name: "其他", url: "/other"},
                {name: "关于", url: "/about"},
                {name: "响应式demo", url:"/demo"}
            ],
        }
    }

    renderItems() {
        let result = [];
        for (let i = 0; i < this.state.items.length; i++) {
            result.push(
                <Link className={this.state.index === i ? style.itemSelected : style.itemUnselet}
                      onClick={this.switchIndex.bind(this, i)}
                      to={this.state.items[i].url}
                >
                    <div className={style.text}>{this.state.items[i].name}</div>
                    <div className={style.line}></div>
                </Link>
            );
        }

        return result;
    }

    switchIndex = (i) => {
        this.setState({
            index: i
        });
    };

    render(){
        return(
            <Router>
                {/*导航栏*/}
                <div className={style.container}>
                    <div className={style.logo}>
                        <img className={style.icon} src={require("../img/logo.png")}/>
                        <img className={style.name} src={require("../img/name.png")}/>
                    </div>
                    {this.renderItems()}
                </div>

                {/*占个位置*/}
                <div style={{height: 55}}></div>

                {/*路由切换*/}
                <Switch>
                    <Route path={"/"} component={HomePage} exact />
                    <Route path="/homepage" component={HomePage}/>
                    <Route path="/about" component={About}/>
                    <Route path="/other" component={Other}/>
                    <Route path="/demo" component={TestDemo}/>
                </Switch>
            </Router>
        )
    }
}
export default App;