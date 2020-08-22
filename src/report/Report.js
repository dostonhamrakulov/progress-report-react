import React from 'react';
import './../main.css';
import './report-timeline-page.css';
import 'font-awesome/css/font-awesome.min.css';
import ReportListSection from './ReportListSection';

export class Report extends React.Component {
    render() {

        console.log("Report is prenting");
        console.log(this.props.report);

        return (
            <div className="timeline__box">
                <div className="timeline__date">
                    <span className="timeline__day">2</span>
                    <span className="timeline__month">AUG</span>
                </div>
                <div className="timeline__post">
                    <div className="timeline__header">Week <span>20</span></div>
                    <div className="timeline__content">
                        <h3> I have done in this week:</h3>
                        <ReportListSection sectionList={this.props.report.implemented}/>
                        <h3> I have planned to do in the following week:</h3>
                        <ReportListSection sectionList={this.props.report.plannedToDo}/>
                        <h3>Links and References:</h3>
                        <ReportListSection sectionList={this.props.report.links}/>
                    </div>
                    <div className="timeline__footer">
                            <span className="timeline__footer_icon">
                                <i className="fa fa-clock-o" aria-hidden="true"></i>
                            </span>
                        <span>Created at {this.props.report.createdDate}</span>
                    </div>
                    <div className="timeline__footer">
                            <span className="timeline__footer_icon">
                                <i className="fa fa-clock-o" aria-hidden="true"></i>
                            </span>
                        <span>Updated at: {this.props.report.updateDate}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Report;
