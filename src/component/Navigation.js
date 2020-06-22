import React from 'react'
import style from '../css/Navigation.module.scss'
import {BrowserRouter,NavLink} from 'react-router-dom'

class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            items: [
                {name:"主页", url:"/HomePage"},
                {name:"其他", url:"/Other"},
                {name:"关于", url:"/About"}
            ],
        }
    }

    renderItems() {
        let result = [];
        for (let i = 0; i < this.state.items.length; i++) {
            result.push(
                <div className={this.state.index===i?style.itemSelected:style.itemUnselet}
                     onClick={this.switchIndex.bind(this,i)}
                >
                    <div className={style.text}>{this.state.items[i].name}</div>
                    <div className={style.line}></div>
                </div>
            );
        }

        {/*<NavLink className={this.state.index===i?style.itemSelected:style.itemUnselet}*/}
                 {/*onClick={this.switchIndex.bind(this,i)}*/}
                 {/*to={this.state.items[i].url}*/}
        {/*>*/}
            {/*<div className={style.text}>{this.state.items[i].name}</div>*/}
            {/*<div className={style.line}></div>*/}
        {/*</NavLink>*/}

        return result;
    }

    switchIndex = (i) => {
        this.setState({
            index:i
        });
    };

    render() {
        return (
            <div className={style.container}>
                <div className={style.logo}>
                    <img className={style.icon} src={require("../img/logo.png")} />
                    <img className={style.name} src={require("../img/name.png")} />
                </div>
                <BrowserRouter>
                    {this.renderItems()}
                </BrowserRouter>
            </div>
        );
    }
}

export default Navigation;