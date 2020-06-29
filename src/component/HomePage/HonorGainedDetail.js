import React from 'react'
import styles from '../../css/honorGainedDetail.module.scss'
import Swiper from 'swiper/js/swiper'
import 'swiper/css/swiper.min.css'
import '../../css/animation.css'

class HonorGainedDetail extends React.Component{
    constructor(props){
        super(props);
        this.state={
            rewardNames:[
                "浙江省政府奖学金两次",
                "浙江理工大学优秀生一等奖学金三次",
                "浙江理工大学“三好学生”荣誉称号两次",
                "浙江理工大学信息学院”优秀团员“两次",
                "国家奖学金一次",
                "浙江理工大学优秀毕业生",
                "浙江省优秀毕业生",
            ],
            rewardImgs:[
                require('../../img/一等奖学金1.png'),
                require('../../img/省政府2.jpg'),
                require('../../img/一等奖学金2.png'),
                require('../../img/三好学生.png'),
                require('../../img/省政府1.jpg'),
            ],
        };
        this.renderRewardNames=this.renderRewardNames.bind(this);
        this.renderRewardImgs=this.renderRewardImgs.bind(this);
    }
    //
    componentDidMount() {
        new Swiper('#honor-swiper', {
            effect:'fade',
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
        for(let i=0;i<this.state.rewardImgs.length;i++){
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
                    <div id="honor-swiper" className="swiper-container">
                        <div className="swiper-wrapper">
                            {this.renderRewardImgs()}
                        </div>
                        {/*// <!-- Add Pagination -->*/}
                        <div className="swiper-pagination"/>
                    </div>
                </div>
                {/*这边写奖项名字*/}
                <div className={styles.right}>
                    <p>
                        本科期间，我在身体素质方面、思想道德方面以及实践创新方面较为突出，综合测评位于专业第一。
                        “一分耕耘，一分收获”，凭借着优异的综合素质，每年都获得了浙江省政府奖学金、校一等奖学金以及三好学生的荣誉称号。
                        在本科毕业后还获得了浙江理工大学优秀毕业生和浙江省优秀毕业生的荣誉称号。
                    </p>
                    {/**/}
                    <div className={styles.bottom}>
                        <ul>
                            {this.renderRewardNames()}
                        </ul>
                        <img src={require('../../img/reward_cup.png')}/>

                    </div>
                </div>
            </div>
        )
    }
}

export default HonorGainedDetail;