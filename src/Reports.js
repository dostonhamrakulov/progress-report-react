import React, {useState, useEffect} from 'react';
import './main.css';
import Report from "./report/Report";

function Reports() {

    useEffect(() => {
        fetchReports();
    }, []);

    const [reports, setReports] = useState([]);


    const fetchReports = async () => {
        const data = await fetch('http://localhost:8081/public/reports');

        const reports = await data.json();

        console.log(reports);
        setReports(reports);
        console.log(reports)
    }


    return (
        <div className="container">
            <div className="timeline-container">
                <div className="page">
                    <div className="timeline">
                        <div className="timeline__group">
                            <span className="timeline__year">2020</span>
                            {reports && reports.map(report => (
                                    <Report key={report.week} report={report}/>
                                )
                            )}
                        </div>
                        <div className="timeline__group">
                            <span className="timeline__year">2019</span>
                            <div className="timeline__box">
                                <div className="timeline__date">
                                    <span className="timeline__day">14</span>
                                    <span className="timeline__month">DEC</span>
                                </div>
                                <div className="timeline__post">
                                    <div className="timeline__content">
                                        <p>More content will follow</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reports;
