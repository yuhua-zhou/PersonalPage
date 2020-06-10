import React from 'react'
import '../../css/board.module.scss'
import styles from '../../css/likeBoard.module.scss'
import {useState} from 'react';

//利用hooks机制改装成函数组件
function LikeBoard(){

    const [like,setLike] = useState(3304);
    const [attention,setAttention] = useState(2762);
    const [follow, setFollow]=useState(1893);

    return (
        <div className={styles.row} style={{position:'relative'}}>
            <p onClick={()=>setLike(like+1)}>{like}<br/>Like</p>
            <p onClick={()=>setAttention(attention+1)}>{attention}<br/>Attention</p>
            <p onClick={()=>setFollow(follow+1)}>{follow}<br/>Follows</p>
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
