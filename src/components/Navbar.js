import React from 'react';
import '../assets/main.css';


class Navbar extends React.Component 
{
    render()
    {
        return (

            <header>
                <nav>
                    <ul>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="https://github.com/AdnanAsali" target="_blank"><i className="github icon" ></i></a></li>
                        <li><a href="https://twitter.com/aasali40" target="_blank"><i className="twitter icon"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/adnanasali/" target="_blank"><i className="linkedin icon"></i></a></li>
                        <li><a href="https://www.facebook.com/adnan.asali" target="_blank"><i className="facebook icon"></i></a></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Navbar