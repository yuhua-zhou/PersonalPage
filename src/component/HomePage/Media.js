import React from 'react'
import { CSSTransition } from 'react-transition-group'
import styles from '../../css/media.module.scss'
import '../../css/animation.css'

class Media extends React.Component{
    constructor(props){
        super(props);
        this.state={
            medias:[
                require("../../img/phone.png"),
                require("../../img/QQ.png"),
                require("../../img/taobao.png"),
                require("../../img/alipay.png"),
                require("../../img/weibo.png"),
            ],
            qrcode:[
                require("../../img/phone_QRCode.jpg"),
                require("../../img/QQ_QRcode.JPG"),
                require("../../img/taobao_QRcode.PNG"),
                require("../../img/alipay_QRcode.PNG"),
                require("../../img/weibo_QRcode.PNG"),
            ],
            isShow:false,
            selected:0
        };
    }

    //显示图片
    renderImg(){
        let ans=[];
        for(let i=0;i<this.state.medias.length;i++){
            let media=this.state.medias[i];
            ans.push(
                <img className={styles.media} src={media}
                onMouseOver={()=>{
                    this.setState({isShow:true,selected:i});
                }}
                onMouseLeave={()=> {
                    this.setState({isShow:false});
                }}/>
            );
        }
        return ans;
    }
    render() {
        return (
            <div className={styles.row}>
                {this.renderImg()}

                <CSSTransition
                    in={this.state.isShow}
                    timeout={1000}
                    classNames="example">
                    {/*弹框*/}
                    <div className={styles.card} style={{left:(-20+this.state.selected*40),display:(this.state.isShow?"block":"none")}}>
                        {/*二维码*/}
                        <img src={this.state.qrcode[this.state.selected]}/>
                    </div>
                </CSSTransition>
            </div>
        );
    }
}
export default Media;
