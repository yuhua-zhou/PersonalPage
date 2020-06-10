import React from 'react'
import MyCharts from "./MyCharts";
import LittleTitle from "./LittleTitle";
import CompetetionRewardDetail from "./CompetetionRewardDetail";
import ScienceResearchDetail from "./ScienceResearchDetail";
import styles from '../../css/body.module.scss'
import ConpusLifeDetail from "./ConpusLifeDetail";
import HonorGainedDetail from "./HonorGainedDetail";

class Body extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className={styles.container}>
                <LittleTitle id="title-chart" title="统计图表"/>
                <MyCharts/>
                <LittleTitle id="title-honor" title="荣誉奖项"/>
                <HonorGainedDetail/>
                <LittleTitle id="title-competetion" title="学科竞赛"/>
                <CompetetionRewardDetail/>
                <LittleTitle id="title-science" title="科研成果"/>
                <ScienceResearchDetail/>
                <LittleTitle id="title-conpus" title="校园生活"/>
                <ConpusLifeDetail/>
            </div>
        )
    }
}
export default Body;
