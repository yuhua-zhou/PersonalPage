import React from 'react'
import '../../css/board.module.scss'
import styles from '../../css/likeBoard.module.scss'
import {useState} from 'react';

//利用hooks机制改装成函数组件
function LikeBoard(){

    const [like,setLike] = useState(3304);
    const [attention,setAttention] = useState(2762);
    const [follow, setFollow]=useState(1893);

    // 变成有逗号的计数法
    const toStatistic=(number)=>{

        let temp = "";
        let result = "";
        let count = 1;
        while(number){
            let a= number % 10;
            temp+=a.toString();
            if(count % 3 ===0){
                temp+=",";
            }
            count++;
            number = Math.floor(number / 10);
        }

        //反转字符串
        for(let i =temp.length-1;i>=0;i--){
            result+=temp[i];
        }

        return result;
    };

    return (
        <div className={styles.row} style={{position:'relative'}}>
            <p onClick={()=>setLike(like+1)}>{toStatistic(like)}<br/>Like</p>
            <p onClick={()=>setAttention(attention+1)}>{toStatistic(attention)}<br/>Attention</p>
            <p onClick={()=>setFollow(follow+1)}>{toStatistic(follow)}<br/>Follows</p>
        </div>
    );

    // constructor(props){
    //     super(props);
    //     this.state={
    //         like:3304,
    //         attention:2762,
    //         follow:1893
    //     }
    // }
    // render() {
    //     return (
    //         <div className={styles.row} style={{position:'relative'}}>
    //             <p onClick={()=>this.setState({like:this.state.like+1})}>{this.state.like}<br/>Like</p>
    //             <p onClick={()=>this.setState({attention:this.state.attention+1})}>{this.state.attention}<br/>Attention</p>
    //             <p onClick={()=>this.setState({follow:this.state.follow+1})}>{this.state.follow}<br/>Follows</p>
    //         </div>
    //     );
    // }
}

export default LikeBoard;
