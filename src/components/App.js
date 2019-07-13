import React from 'react';

import Navbar from './Navbar'
import Carousel from './Carousel';
import axios from 'axios';
import RepoList from './RepoList';
import Skills from './Skills';
import Timeline from './Timline';



class App extends React.Component 
{
    constructor() 
    {
        super();
        this.state = 
        {
          repos: [],
          loading: true
        };
    } 
    
      componentDidMount() 
      {
        this.performSearch();
      }

    performSearch = (query = 'AdnanAsali') => {
        axios.get(`https://api.github.com/users/${ query }/repos`)
          .then(response => {
            this.setState({
              query: query,
              repos: response.data,
              loading: false
            });
            // console.log(response.data[0]);
          })
          .catch(error => 
            {
            console.log('Error fetching and parsing data', error);
          });    
      }
    
    render()
    {
        return( 
            <div className="secondBg">
                <Navbar />
                <Carousel />
                <div >
                    <Timeline />
                    <Skills />
                    <RepoList repos={ this.state.repos } />
                </div>
            </div>
                
        );
    }
}

export default App;