import React from 'react';
import './../main.css';
import './report-timeline-page.css';

export class ReportListSection extends React.Component {
    render() {
        var receivedArray = this.props.sectionList;
        return (
            <ul>
                {receivedArray && receivedArray.map(function (item, index){
                        return <li key={index} className={"list-item"}>{item}</li>
                    })
                }
            </ul>
        );
    }
}

export default ReportListSection;
