import React from 'react';

class Timeline extends React.Component {
    render() {
        return (
            <div>
                <section id="cd-timeline" class="cd-container">
                    <div class="cd-timeline-block">
                        <div class="cd-timeline-img cd-picture">
                        </div>

                        <div class="cd-timeline-content">
                            <div class="timeline-content-info">
                                <span class="timeline-content-info-title">
                                    {/* <i class="fa fa-certificate" aria-hidden="true"></i> */}
                                    
                                    <i class="birthday cake big icon"></i>
                                    <h2>1998: Born</h2>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="cd-timeline-block">
                        <div class="cd-timeline-img cd-movie">
                        </div>
                        <div class="cd-timeline-content">
                            <i class="certificate big icon"></i>
                            <h2>2016 : Graduated High School</h2>
                        </div>
                    </div>

                    <div class="cd-timeline-bloc k">

                        <div class="cd-timeline-content">
                            <h2>2019 : </h2>
                            <br />
                            <h2><i class="code icon"></i>Full-Stack web developer Intern at Blue</h2>
                        </div>
                    </div>

                    <div class="cd-timeline-block">
                        <div class="cd-timeline-img cd-location">
                        </div>

                        <div class="cd-timeline-content">
                            <h2>2020 : </h2>
                            <h2>Graduate from Birzeit University</h2>
                        </div>
                    </div>

                    <div class="cd-timeline-block">
                        <div class="cd-timeline-img cd-location">
                        </div>

                        <div class="cd-timeline-content">
                            <h2></h2>
                            <p></p>
                            <span class="cd-date"></span>
                        </div>
                    </div>

                    <div class="cd-timeline-block">
                        <div class="cd-timeline-img cd-movie">
                        </div>

                        <div class="cd-timeline-content">
                            <h2></h2>
                            <p></p>
                            <span class="cd-date"></span>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Timeline;    