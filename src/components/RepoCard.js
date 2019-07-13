import React from 'react';

class RepoCard extends React.Component {

    render() {
        const urls = [];
        urls['Unsplasher'] = 'https://user-images.githubusercontent.com/36306586/60816807-28eef180-a1a3-11e9-9ae5-ded331620cb1.png';
        urls['Football-DBMS'] = 'https://user-images.githubusercontent.com/36306586/58726557-bd1ea980-83ea-11e9-9d44-e8d6ce1d2cf9.png';
        urls['Color-Game'] = 'https://raw.githubusercontent.com/AdnanAsali/Color-Game/master/images/colorGame.jpg';
        urls['OMDB-API'] = 'https://user-images.githubusercontent.com/36306586/58761298-582e9500-854b-11e9-9530-f7398ffc90b8.gif';
        urls['Yelp-Proj'] = 'https://user-images.githubusercontent.com/36306586/58760945-316e5f80-8547-11e9-93d5-2f97e5d76e80.png';
        urls['Dijkstra_Algorithm'] = 'https://user-images.githubusercontent.com/36306586/58710034-19ba9e00-83c4-11e9-8553-06e83a2ff4c8.png';
        urls['youtube_api_manipulator'] = 'https://user-images.githubusercontent.com/36306586/60426488-6aa8f680-9bfd-11e9-8678-4c132eeaf7a3.png';
        urls['ImageGallery'] = 'https://user-images.githubusercontent.com/36306586/58761878-80b98d80-8551-11e9-9ef2-ed8af8bcf190.png';
        urls['To-Do-List'] = 'https://raw.githubusercontent.com/AdnanAsali/To-Do-List/master/images/todolist.jpg';
        urls['Socket-Programming'] = 'https://user-images.githubusercontent.com/36306586/58715483-a159da00-83cf-11e9-9322-1ed91b4a5910.png';


        // console.log(urls.Unsplasher);

        return (
            <div className="repoInfo">
                <div className="cardItself" >
                    <div className="animation">



                        <img src={(() => {
                            return urls[this.props.name] ? urls[this.props.name] : 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';
                            // switch (this.props.name) {
                            //     case "Unsplasher": return urls.Unsplasher;
                            //     case "Football-DBMS": return urls.Football_DBMS;
                            //     case "Color-Game": return urls.Color_Game;
                            //     case "OMDB-API": return urls.OMDB_API;
                            //     case "Yelp-Proj": return urls.Yelp_proj;
                            //     case "youtube_api_manipulator": return urls.youtube_api_manipulator;
                            //     case "Dijkstra_Algorithm": return urls.Dijkstra_Algorithm;
                            //     case "ImageGallery": return urls.ImageGallery;
                            //     case "To-Do-List": return urls.To_Do_List;
                            //     case "Socket-Programming": return urls.Socket_Programming;
                            //     default: return "ola";
                            // }
                        })()} href={this.props.url} alt={this.props.description} />


                        <div className="show" >
                            <div class="ui card" style={{ background: 'url("https://images.pexels.com/photos/1020320/pexels-photo-1020320.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")', width: '100%' }}>
                                <div class="content">
                                    <div class="header">{this.props.name}</div>
                                </div>
                                <div class="content">
                                    <div class="ui small feed">
                                        {/* <div class="event"> */}
                                        <div class="content">
                                            <div class="summary">
                                                {this.props.description}
                                            </div>
                                        </div>
                                        {/* </div> */}
                                        <br />
                                        <div class="event">
                                            <div class="content">
                                                <div class="summary">
                                                    Done using : { this.props.language }
                                                    <br />
                                                    Pushed At : { this.props.pushedAt }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a href={ this.props.url } target="_blank">
                                <div class="ui bottom attached button">
                                     <i class="code icon"></i>
                                    Src Code 
                                </div>
                                </a>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        );
    }
}

export default RepoCard;