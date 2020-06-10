import React from 'react'
import Board from "./Board";
import Body from "./Body";
import styles from '../../css/main.module.scss'
import '../../css/animation.css'

class HomePage extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){

        let randomDistance = (max, min) =>{
            let distance = Math.floor(Math.random() * (max - min + 1) + min);
            return distance
        };

        let stars = document.getElementById('stars');
        let width=stars.offsetWidth-120;
        let height=stars.offsetHeight-300;

        // js随机生成流星
        for (let j=0;j<300;j++) {
            var newStar = document.createElement("div");
            newStar.className = "star";
            newStar.style.top = randomDistance(height, -100) + 'px';
            newStar.style.left = randomDistance(1000, -100) + 'px';
            stars.appendChild(newStar);
        }

        //然后用 js 添加动画延时，让流星不会同时出现
        let star = document.getElementsByClassName('star');

        // 给流星添加动画延时
        for (let i = 0, len = star.length; i < len; i++)
        {
            star[i].style.animationDelay = i % 6 == 0 ? '0s' : i * 0.8 + 's';
        }
    }

    render() {

        return(
            <div id="stars" className={styles.bg}>
                {/*<Stars/>*/}
                <Board/>
                <Body/>
            </div>
        )
    }
}

export default HomePage;
