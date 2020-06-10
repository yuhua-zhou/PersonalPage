import React from 'react';
import EducationExprence from "./EducationExprence";
import HonorGained from "./HonorGained";
import CompetetionReward from "./CompetetionReward";
import ScienceResearch from "./ScienceResearch";
import ConpusLife from "./ConpusLife";

class Content extends React.Component{

    constructor(props){
        super(props);
        this.state={
            fragments:[<EducationExprence/>,
                <HonorGained/>,
                <CompetetionReward/>,
                <ScienceResearch/>,
                <ConpusLife/>]
        };
    }

    render() {
        return(
            this.state.fragments[this.props.clicked]
        );
    }
}

export default Content;