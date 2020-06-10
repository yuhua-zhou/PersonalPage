import React from 'react'
import Swiper from 'swiper/js/swiper'
import 'swiper/css/swiper.min.css'
import styles from '../../css/competetionRewarDetail.module.scss'

class CompetetionRewardDetail extends React.Component{

    constructor(props){
        super(props);
        this.state={
            rewardNames:[
                "2019.11 全国大学生软件测试大赛-浙江赛区三等奖",
                "2019.08 中国高校计算机大赛-人工智能创意赛（华东赛区）二等奖",
                "2019.08 中国高校计算机大赛-人工智能创意赛（总决赛）二等奖",
                "2019.06 \"海康杯\"第八届浙江省服务外包创新应用竞赛二等奖",
                "2019.05 第十届全国大学生服务外包创新创业大赛三等奖",
                "2018.12 浙江省大学生多媒体作品设计竞赛（移动组）二等奖",
                "2018.06 第九届中国大学生服务外包创新创业大赛二等奖",
            ],
            rewardImgs:[
                require('../../img/软测省三.jpg'),
                require('../../img/人工智能创意赛_省二.jpg'),
                require('../../img/人工智能创意赛_国二.jpeg'),
                require('../../img/省二.jpeg'),
                require('../../img/国三.jpg'),
                require('../../img/多媒体.jpg'),
                require('../../img/国二.jpg')
            ],
        };
        this.renderRewardNames=this.renderRewardNames.bind(this);
        this.renderRewardImgs=this.renderRewardImgs.bind(this);
    }
    //
    componentDidMount() {
        //初始化
        new Swiper ('#competetion-swiper', {
            loop: true,  //循环
            autoplay: {   //滑动后继续播放（不写官方默认暂停）
                disableOnInteraction: false,
            },
            pagination: {  //分页器
                el: '.swiper-pagination',
                dynamicBullets:true,
                clickable:true
            },
            observer:true,
            // effect:'flip'
            // effect:'cube',
        });

    }

    //加载奖项名
    renderRewardNames(){

        let ans=[];
        for(let i=0;i<this.state.rewardNames.length;i++){
            ans.push(
                <li>{this.state.rewardNames[i]}</li>
            );
        }
        return ans;
    }

    //加载奖项图片
    renderRewardImgs(){
        let ans=[];
        for(let i=0;i<this.state.rewardNames.length;i++){
            let img=this.state.rewardImgs[i];
            ans.push(
                <img className="swiper-slide" src={img}/>
            );
        }
        return ans;
    }
    render() {
        return(
            <div className={styles.container}>
                {/*这边写奖项名字*/}
                <div className={styles.left}>
                    <p>
                        在本科期间我以队长的角色参与多项一类学科竞赛，其中获得服务外包大赛全国二等奖和三等奖以及省部级奖项三项。
                        比赛涉及人工智能、大数据分析、物联网等领域，采用了SSM、前后端分离、LSTM神经网络等热门技术。
                    </p>
                    <ul>
                        {this.renderRewardNames()}
                    </ul>
                </div>
                {/*这边写轮播图*/}
                <div className={styles.right}>
                    <div id="competetion-swiper" className="swiper-container"
                         style={{width:'100%',height:'250px',borderRadius:'10px',border:'1px solid #D6D6D6'}}>
                        <div className="swiper-wrapper">
                            {this.renderRewardImgs()}
                        </div>
                        {/*// <!-- Add Pagination -->*/}
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CompetetionRewardDetail;
