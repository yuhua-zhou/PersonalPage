import React from 'react'
import ToDetailButton from "./ToDetailButton";
import styles from '../../css/scienceResearch.module.scss'

class ScienceResearch extends React.Component{

    constructor(props){
        super(props);
        this.state={
            imgs:[require("../../img/论文.png"),
                require("../../img/新苗.png"),
                require("../../img/软著1.png"),
                require("../../img/软著2.png"),
                require("../../img/软著3.png"),
                require("../../img/软著4.png"),
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
                   本科期间参与了多项科研活动，针对大学生二手书籍交易、人们的知识管理、出行安全等进行立项研究，
                   并发表了一篇二级期刊论文，结题一项浙江省”新苗人才计划“以及获得4项软件著作权。
                   <ToDetailButton to="title-science"/>
               </p>
                {/*科研成果图片*/}
                <div className={styles.bottom}>
                    {this.renderImg()}
                </div>
            </div>
        );
    }
}

export default ScienceResearch;
