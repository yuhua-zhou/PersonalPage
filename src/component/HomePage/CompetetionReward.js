import React from 'react'
import ToDetailButton from "./ToDetailButton";
import styles from '../../css/competetionReward.module.scss'

class CompetetionReward extends React.Component{

    constructor(props){
        super(props);
        this.state={
            imgs:[require("../../img/国二.jpg"),
                require("../../img/国三.jpg"),
                require("../../img/省二.jpeg"),
                require("../../img/人工智能创意赛_省二.jpg"),
                require("../../img/人工智能创意赛_国二.jpeg"),
                require("../../img/多媒体.jpg")
            ]
        };
        this.renderImg=this.renderImg.bind(this);
    }

    //生成图片
    renderImg(){
        let ans=[];
        for(let i=0;i<this.state.imgs.length;i++){
            let img=this.state.imgs[i];
            ans.push(
                <a target="_blank" href={img}>
                    <img src={img}/>
                </a>
            );
        }
        return ans;
    }
    render() {
        return(
            <div className={styles.container}>
                <p className={styles.top}>
                    在本科期间参与多项一类学科竞赛，获得国家级奖项两项、省部级奖项三项，涉及人工智能、大数据分析、物联网等领域。
                    <ToDetailButton to="title-competetion"/>
                </p>
                {/*获得荣誉*/}
                <div className={styles.bottom}>
                    {this.renderImg()}
                </div>
            </div>
        );
    }
}

export default CompetetionReward;
