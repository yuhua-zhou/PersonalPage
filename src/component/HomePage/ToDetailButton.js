import React from 'react'

class ToDetailButton extends React.Component{

    scrollToAnchor(){
        if(this.props.to){
            let anchorElement = document.getElementById(this.props.to);
            if(anchorElement) {
                anchorElement.scrollIntoView(
                    {behavior: 'smooth'}
                );
            }
        }
    };

    render() {
        return (
            <span style={{cursor:'pointer',color:'blue',fontSize:'1em'}}
                onClick={()=>this.scrollToAnchor()}>
                Detail>>
            </span>
        );
    }
}

export default ToDetailButton;
