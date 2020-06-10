import React from 'react'
import ToDetailButton from "./ToDetailButton";
import styles from '../../css/conpusLife.module.scss'

class ConpusLife extends React.Component{

    constructor(props){
        super(props);
    }
    render() {
        return(
            <div className={styles.container}>
                <p className={styles.top}>
                    课余生活担任了一些学生干部：科研中心部长、班级学习委员、假期留校负责人。
                    热爱参加活动，在大大小小的活动中均有我的身影，参与阿里巴巴-云栖大会、浙江理工大学120周校庆志愿者、CCPC程序设计竞赛志愿者等。
                    <ToDetailButton to="title-conpus"/>
                </p>
                {/*获得荣誉*/}
                <div className={styles.bottom}>
                    <span>
                        <img src={require("../../img/云栖大会.png")}/>
                        <img src={require("../../img/CCPC.png")}/>
                        <img src={require("../../img/晚点名.png")}/>
                    </span>
                    <span>
                        <img src={require("../../img/校庆志愿者.png")}/>
                        <img src={require("../../img/接待老校友.png")}/>
                        <img src={require("../../img/科研宣讲.png")}/>
                    </span>
                </div>
            </div>
        );
    }
}

export default ConpusLife;
