import React from 'react'
import Swiper from 'swiper/js/swiper'
import 'swiper/css/swiper.min.css'
import styles from '../../css/scienceResearchDetail.module.scss'
import '../../css/animation.css'

class ScienceResearchDetail extends React.Component{

    constructor(props){
        super(props);
        this.state={
            rewardNames:[
                "《基于聊天机器人的知识库管理系统的研究》",
                "《基于App的知识库管理系统软件V1.0》",
                "《舒行智能健康驾驶伙伴软件V1.0》",
                "《校园书森软件V1.0》",
                "《易扣德众包软件V1.0》",
                "《基于微信小程序的校园云书应用》"
            ],
            rewardImgs:[
                require('../../img/论文.png'),
                require('../../img/软著1.png'),
                require('../../img/软著2.png'),
                require('../../img/软著3.png'),
                require('../../img/软著4.png'),
                require('../../img/新苗.png'),
            ],
        };
        this.renderRewardNames=this.renderRewardNames.bind(this);
        this.renderRewardImgs=this.renderRewardImgs.bind(this);
    }
    //
    componentDidMount() {
        new Swiper('#scienct-research-swiper', {
            slidesPerView: 3,
            spaceBetween: 30,
            centeredSlides: true,
            loop: true,
            autoplay: {   //滑动后继续播放（不写官方默认暂停）
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets:true
            },
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
                <div className="swiper-slide">
                    <img src={img}/>
                </div>
            );
        }
        return ans;
    }
    render() {
        return(
            <div className={styles.container}>
                {/*这边写轮播图*/}
                <div className={styles.left}>
                    <div id="scienct-research-swiper" className="swiper-container">
                        <div className="swiper-wrapper">
                            {this.renderRewardImgs()}
                        </div>
                        {/*// <!-- Add Pagination -->*/}
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
                {/*这边写奖项名字*/}
                <div className={styles.right}>
                    <p>
                        本科期间参与了多项科研活动，我关注生活中的点点滴滴，发现大学生二手书籍交易困难的现象以及针对人们的知识管理、出行安全等进行立项研究，
                        并发表了一篇二级期刊论文，结题一项浙江省”新苗人才计划“以及获得4项软件著作权。
                    </p>

                    <div className={styles.bottom}>
                        <ul>
                            {this.renderRewardNames()}
                        </ul>
                        <img src={require('../../img/robot.png')}/>
                    </div>

                </div>
            </div>
        )
    }
}

export default ScienceResearchDetail;
