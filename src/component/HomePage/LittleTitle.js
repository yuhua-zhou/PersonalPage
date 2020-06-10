import React from 'react'

//小标题
class LittleTitle extends React.Component{

    render() {
        return(
            <div id={this.props.id} style={{width:'95%',margin:'10px',fontSize:'1.1em',fontWeight:'bold'}}>
                {this.props.title}
            </div>
        )
    }
}

export default LittleTitle;
