import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = {
        album: []
    }

    async componentDidMount(){
        const resp = await fetch(`https://rallycoding.herokuapp.com/api/music_albums`);
        const data = await resp.json();

        this.setState({
            album: data
        })
    }

    renderAlbum(){
        return this.state.album.map( (album,index) =>
            <AlbumDetail key={index} albumItem={album}/>
        )
    }

    render() {
        return (
            <ScrollView>
                {this.renderAlbum()}
            </ScrollView>
        );
    }
}

export default AlbumList;