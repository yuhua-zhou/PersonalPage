import React from 'react'
import ToDetailButton from "./ToDetailButton";
import styles from '../../css/honorGained.module.scss'

class HonorGained extends React.Component{

    constructor(props){
        super(props);
        this.state={
            imgs:[require("../../img/省政府1.jpg"),
                require("../../img/省政府2.jpg"),
                require("../../img/一等奖学金1.png"),
                require("../../img/一等奖学金2.png"),
                require("../../img/三好学生.png")
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
                    在本科期间获得了一次国家奖学金、两次浙江省政府奖学金、两次浙江理工大学优秀生一等奖学金和两次浙江理工大学“三好学生”等荣誉称号。
                    <ToDetailButton to="title-honor"/>
                </p>
                {/*获得荣誉*/}
                <div className={styles.bottom}>
                    {this.renderImg()}
                </div>
            </div>
        );
    }
}

export default HonorGained;
