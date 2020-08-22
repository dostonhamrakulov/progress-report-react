import React from 'react';
import './../main.css';
import './report-timeline-page.css';
import 'font-awesome/css/font-awesome.min.css';
import ReportListSection from './ReportListSection';
import { Link } from 'react-router-dom';

export class Report extends React.Component {
    render() {
        return (
            <div className="timeline__box">
                <div className="timeline__date">
                    <span className="timeline__day">{this.props.report.day}</span>
                    <span className="timeline__month">{this.props.report.month}</span>
                </div>
                <div className="timeline__post">
                    <div className="timeline__header">
                        <Link to={`/${this.props.report.week}`} className={'link'}>
                            Week <span>{this.props.report.week}</span>
                        </Link>
                    </div>
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
                                <i className="fa fa-clock-o" aria-hidden="true"/>
                            </span>
                        <span>Created at {this.props.report.createdDate}</span>
                    </div>
                    <div className="timeline__footer">
                            <span className="timeline__footer_icon">
                                <i className="fa fa-clock-o" aria-hidden="true"/>
                            </span>
                        <span>Updated at: {this.props.report.updateDate}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Report;
