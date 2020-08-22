import React from 'react';
import './../main.css';
import './report-timeline-page.css';
import ReportListSection from './ReportListSection';

export class Report extends React.Component {
    render() {

        console.log("Report is prenting");
        console.log(this.props.report);

        return (

            <div className="timeline__footer">
                <span className="timeline__footer_icon">
                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                </span>
                <span>Created at 11:45 02-08-2020</span>
            </div>
        );
    }
}

export default Report;
