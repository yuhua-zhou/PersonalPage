import React from 'react'
import styles from '../../css/conpusLifeDetail.module.scss'
import Swiper from 'swiper/js/swiper'
import 'swiper/css/swiper.min.css'

class ConpusLifeDetail extends React.Component{

    constructor(props){
        super(props);
        this.state={
            imgs:[
                require("../../img/云栖大会.png"),
                require("../../img/晚点名.png"),
                require("../../img/科研宣讲.png"),
                require("../../img/校庆志愿者.png"),
                require("../../img/接待老校友.png"),
                require("../../img/CCPC.png"),
            ],
            names:[
                "参与云栖大会",
                "负责学院晚点名",
                "进行科研竞赛宣讲",
                "参与校庆志愿者",
                "接待老校友",
                "CCPC志愿者活动",
            ]
        }
    }
    componentDidMount() {
        //初始化
        new Swiper ('#science-swiper', {
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
            effect:'coverflow',
            centeredSlides:true,
            slidesPerView:'auto',
            coverflowEffect:{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false
            }
        });
    }

    //加载信息
    renderScience(){
        let ans=[];
        for(let i=0;i<this.state.imgs.length;i++){

            let img=this.state.imgs[i];
            let name=this.state.names[i];

            ans.push(
                <div className="swiper-slide"
                    style={{backgroundPosition:'center',backgroundSize:'cover',width:300,
                    display:'flex',flexDirection:'column',alignItems:'center'}}>

                    <img src={img}/>
                    {/**/}
                    <p className={styles.name}>{name}</p>
                </div>
            );
        }
        return ans;
    }

    render() {
        return(
            <div className={styles.container}>

                <div className={styles.top}>
                    {/*学生工作*/}
                    <p >
                        在课余生活中，我承担了一些学生工作，为组织贡献出一份力。我担任了我院科研中心科研部的部长，
                        积极宣传科各类科研竞赛，鼓励院内同学参与科研活动，也带领小干事们参与相关的科研志愿活动。
                        我还担任了班里的学习委员，成为了老师和同学们之间的交通枢纽，为同学们和老师们提供服务。
                        在假期时，我还担任了学院的留校负责人，积极配合老师们的工作，每天晚上在3-4栋寝室楼之间跑动，负责院内150多名同学的“晚点名”的任务，服务同学，成就自己。
                    </p>
                    {/*分割线*/}
                    <span></span>
                    {/*活动*/}
                    <p>
                        我热爱参加活动，在大大小小的活动中均有我的身影，为了更好地接触社会，了解前沿技术，我参与了阿里巴巴举办的云栖大会，作为此次活动的行程负责人，我肩负着巨大的使命。
                        我还参与了我校120周年的校庆志愿者活动，负责接待院内老校友的任务。
                    </p>

                </div>

                <div id="science-swiper" className="swiper-container"
                     style={{width: '100%', height: '300px'}}>
                    <div className="swiper-wrapper">
                        {this.renderScience()}
                    </div>
                </div>
            </div>
        )
    }
}

export default ConpusLifeDetail;