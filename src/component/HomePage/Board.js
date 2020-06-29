import React from 'react';
import Content from './Content'
import Media from './Media'
import LikeBoard from "./LikeBoard";
import styles from '../../css/board.module.scss'

class Board extends React.Component{
    constructor(props){
        super(props);
        this.state={
            clicked:0,
            itemClass:[styles.itemSelect,styles.item,styles.item,styles.item,styles.item]
        };
    }
    render() {
        return(
            <div className={styles.board}>
                {/*头部背景*/}
                <div className={styles.headBg}></div>
                {/*底部容器*/}
                <div className={styles.container}>
                    {/*左边*/}
                    <div className={styles.left}>
                        <img className={styles.icon} src={require('../../img/icon.jpg')}/>
                        {/*姓名*/}
                        <div className={styles.myName}>周煜华(Zhou Yuhua)</div>
                        {/*个性签名*/}
                        <div className={styles.myTag}>If I am not so fortunate<br/>then work work harder to make it better!</div>
                        {/*粉丝*/}
                        <LikeBoard/>
                        {/*分割线*/}
                        <div className={styles.line}></div>
                        {/*个人简介*/}
                        <div className={styles.myDescribe}>
                            <p>计算机科学与技术专业</p>
                            <p>熟练C++、java、python、JavaScript等编程语言</p>
                            <p>对自然语言处理、数据可视化等方向感兴趣</p>
                        </div>
                        {/*社交软件*/}
                        <Media/>
                    </div>

                    {/*右边*/}
                    <div className={styles.right}>
                        {/*主体*/}
                        <div className={styles.body}>
                            {/*标题*/}
                            <div className={styles.title}>
                                <span className={this.state.itemClass[0]}
                                      onClick={()=>this.setState({clicked:0,itemClass:[styles.itemSelect,styles.item,styles.item,styles.item,styles.item]})}>
                                    教育经历</span>
                                <span className={this.state.itemClass[1]}
                                      onClick={()=>this.setState({clicked:1,itemClass:[styles.item,styles.itemSelect,styles.item,styles.item,styles.item]})}>
                                    所获荣誉</span>
                                <span className={this.state.itemClass[2]}
                                      onClick={()=>this.setState({clicked:2,itemClass:[styles.item,styles.item,styles.itemSelect,styles.item,styles.item]})}>
                                    学科竞赛</span>
                                <span className={this.state.itemClass[3]}
                                      onClick={()=>this.setState({clicked:3,itemClass:[styles.item,styles.item,styles.item,styles.itemSelect,styles.item]})}>
                                    科研成果</span>
                                <span className={this.state.itemClass[4]}
                                      onClick={()=>this.setState({clicked:4,itemClass:[styles.item,styles.item,styles.item,styles.item,styles.itemSelect]})}>
                                    校园生活</span>
                                <span className={styles.nothing}></span>
                                {/*<button title="transfer">转账</button>*/}
                            </div>
                            {/*显示每一个标签的东西，需要不断替换*/}
                            <Content clicked={this.state.clicked}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Board;
