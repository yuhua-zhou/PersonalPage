import React from 'react'
import ToDetailButton from "./ToDetailButton";
import styles from '../../css/educationExprence.module.scss'

class EducationExprence extends React.Component{

    constructor(props){
        super(props);
        this.state={
            schools:[
                ["https://baike.baidu.com/item/%E4%B8%8A%E6%9D%AD%E4%B8%80%E4%B8%AD/2625938?fr=aladdin",require("../../img/shyz.png"),"2013-2016","上杭一中"],
                ["https://baike.baidu.com/item/%E6%B5%99%E6%B1%9F%E7%90%86%E5%B7%A5%E5%A4%A7%E5%AD%A6/328416?fr=aladdin",require("../../img/zstu.png"),"2016-2020","浙江理工大学"],
                ["https://baike.baidu.com/item/%E6%B5%99%E6%B1%9F%E5%A4%A7%E5%AD%A6",require("../../img/zju.png"),"2020-2023","浙江大学"]
            ],
        }
    }
    renderSchool(){
        let ans=[];
        for(let i=0;i<this.state.schools.length;i++){
            let school=this.state.schools[i];
            ans.push(
                <a href={school[0]}
                   target="_blank">

                    <img src={school[1]}/>
                    <p>{school[2]}<br/>{school[3]}</p>
                </a>
            );
        }
        return ans;
    }
    render() {
        return(
            <div className={styles.container}>
                <p className={styles.up}>
                    高中就读于福建省龙岩市上杭县第一中学，高一在13班，担任班长职务，高二高三分科到理科7班，担任了团支书、生物课代表的职务。
                    高考最终以533分的成绩录取至浙江理工大学信息学院计算机科学与技术专业。
                    在本科期间，认真学习，多门专业成绩取得较高分，最终成绩排名位于专业第三位。
                    在思想道德方面、身体素质方面以及实践创新方面较为突出，每年综合测评位于专业前茅，最终平均综合测评分位于专业第一位。
                    最后完成了本科的梦想，获得推免硕士资格，并推免至浙江大学软件学院。
                    研究生待续......
                </p>

                {/*这是下面*/}
                <div className={styles.bottom}>
                    {this.renderSchool()}
                </div>

            </div>
        );
    }
}

export default EducationExprence;
