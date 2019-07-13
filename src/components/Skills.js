import React from 'react';
import $ from 'jquery';

class Skills extends React.Component {

    componentDidMount = () => {
        // $('.skillbar').each(function()
        // {
        //     $(this).find('.skillbar-bar').animate(
        //     {
        //             width:$(this).attr('data-percent')
        //     },10000);
        // });


        $(window).scroll(function () 
        {
            var y_scroll_pos = window.pageYOffset;
            var scroll_pos_test = 1300;
            // set to whatever you want it to be

            if (y_scroll_pos > scroll_pos_test) 
            {
                $('.skillbar').each(function () 
                {
                    $(this).find('.skillbar-bar').animate(
                        {
                            width: $(this).attr('data-percent')
                        }, 5000);
                });
            }
        });
    }

    render() {
        return (

            <div id="skills" className="ui container mySkills" style={{ marginTop: '5%' }}>

                <div className="skillbar clearfix " data-percent="80%">
                    <div className="skillbar-title" style={{ background: '#d35400' }}><span><i class="html5 big icon" style={{ marginLeft: '20%' }}></i></span></div>
                    <div className="skillbar-bar" style={{ background: '#e67e22' }}></div>
                    <div className="skill-bar-percent">80%</div>
                </div>

                <div className="skillbar clearfix " data-percent="77%">
                    <div className="skillbar-title" style={{ background: '#2980b9' }}><span><i class="css3 alternate big icon" style={{ marginLeft: '20%' }}></i></span></div>
                    <div className="skillbar-bar" style={{ background: '#3498db' }}></div>
                    <div className="skill-bar-percent">77%</div>
                </div>

                <div className="skillbar clearfix " data-percent="75%">
                    <div className="skillbar-title" style={{ background: '#2c3e50' }}><span><i class="js big icon" style={{ marginLeft: '20%' }}></i></span></div>
                    <div className="skillbar-bar" style={{ background: '#2c3e50' }}></div>
                    <div className="skill-bar-percent">75%</div>
                </div>

                <div className="skillbar clearfix " data-percent="40%">
                    <div className="skillbar-title" style={{ background: '#333333' }}><span><i class="php big icon" style={{ marginLeft: '20%' }}></i></span></div>
                    <div className="skillbar-bar" style={{ background: '#525252' }}></div>
                    <div className="skill-bar-percent">40%</div>
                </div>

                <div className="skillbar clearfix " data-percent="36%">
                    <div className="skillbar-title" style={{ background: 'white' }}><span><img src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg" style={{ width: '5em', height: '3em' }} /></span></div>
                    <div className="skillbar-bar" style={{ background: 'grey' }}></div>
                    <div className="skill-bar-percent">36%</div>
                </div>


                <div className="skillbar clearfix " data-percent="50%">
                    <div className="skillbar-title" style={{ background: '#46465e' }}><span><i class="node big icon" style={{ marginLeft: '20%' }}></i></span></div>
                    <div className="skillbar-bar" style={{ background: '#5a68a5' }}></div>
                    <div className="skill-bar-percent">50%</div>
                </div>


                <div className="skillbar clearfix " data-percent="65%">
                    <div className="skillbar-title" style={{ background: '#33ddf6' }}><span><i class="react big icon" style={{ marginLeft: '20%' }}></i></span></div>
                    <div className="skillbar-bar" style={{ background: '#00bbff' }}></div>
                    <div className="skill-bar-percent">65%</div>
                </div>

                <div className="skillbar clearfix " data-percent="25%">
                    <div className="skillbar-title" style={{ background: '#f1d80d' }}><span><i class="python big icon" style={{ marginLeft: '20%' }}></i></span></div>
                    <div className="skillbar-bar" style={{ background: 'yellow' }}></div>
                    <div className="skill-bar-percent">25%</div>
                </div>

                <div className="skillbar clearfix " data-percent="46%">
                    <div className="skillbar-title" style={{ background: '#f44336' }}><span><i class="npm big icon" style={{ marginLeft: '20%' }}></i></span></div>
                    <div className="skillbar-bar" style={{ background: '#ff4c00' }}></div>
                    <div className="skill-bar-percent">46%</div>
                </div>


                <div className="skillbar clearfix " data-percent="40%">
                    <div className="skillbar-title" style={{ background: 'black' }}><span><i class="linux big icon" style={{ marginLeft: '20%' }}></i></span></div>
                    <div className="skillbar-bar" style={{ background: 'grey' }}></div>
                    <div className="skill-bar-percent">40%</div>
                </div>

                <div className="skillbar clearfix " data-percent="23%">
                    <div className="skillbar-title" style={{ background: '#124e8c' }}><span><i className="git big icon" style={{ marginLeft: '20%' }}></i></span></div>
                    <div className="skillbar-bar" style={{ background: '#4288d0' }}></div>
                    <div className="skill-bar-percent">23%</div>
                </div>


                <div className="skillbar clearfix " data-percent="50%">
                    <div className="skillbar-title" style={{ background: '#ffffff' }}><span><img src="https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png" style={{ width: '2em', height: '2em', marginLeft: '20%', marginTop: '5%' }} /></span></div>
                    <div className="skillbar-bar" style={{ background: 'purple' }}></div>
                    <div className="skill-bar-percent">50%</div>
                </div>



                <div className="skillbar clearfix " data-percent="60%">
                    <div className="skillbar-title" style={{ background: '#ffffff' }}><span><img src="https://seeklogo.com/images/M/MySQL-logo-F6FF285A58-seeklogo.com.png" style={{ width: '4em', height: '2.5em', marginLeft: '7%' }} /></span></div>
                    <div className="skillbar-bar" style={{ background: 'orange' }}></div>
                    <div className="skill-bar-percent">60%</div>
                </div>


                <div className="skillbar clearfix " data-percent="80%">
                    <div className="skillbar-title" style={{ background: '#ffffff' }}><span><img src="https://seeklogo.com/images/J/java-logo-7833D1D21A-seeklogo.com.png" style={{ width: '1.8em', height: '2.5em', marginLeft: '27%' }} /></span></div>
                    <div className="skillbar-bar" style={{ background: '#795548' }}></div>
                    <div className="skill-bar-percent">80%</div>
                </div>


            </div>
        );
    }
}

export default Skills;