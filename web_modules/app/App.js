import React, { Component } from 'react';

import Item from 'Item';
import Input from 'Input';
import List from 'List';

// const artists = [
//     {name:"Bob Marley"},
//     {name:"Bob Dylan"},
//     {name:"Johnny Hallyday"},
//     {name:"Adam Beyer"}
// ]

var artists = [];

const styles = {
    rap : {name:"Rap"},
    rock : {name:"Rock"},
    electro : {name:"Electro"}
}

const stylesArray = Object.keys(styles).map((k) => { return styles[k] });

export default class App extends Component {
    state = {
        artists: []
    };
    //fetchArtists(){}
    componentDidMount=()=>{

            fetch("https://api.spotify.com/v1/search?query=coco&limit=10&type=artist").then((response)=>{
                response.json().then((data)=>{
                    if(!data.error){
                        this.setState({
                            artists : data.artists.items
                        });
                    }
                })
            });

    }
    render() {
        return(
            <div>
                <h1>Hello React Playlist !</h1>
                <List title="Artistes" items={this.state.artists} />
                <List title="Styles" items={stylesArray} />
            </div>
        )
    }
}
