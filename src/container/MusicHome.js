import React, { Component } from 'react';
import Header from "../component/Header";
import Gnb from "../component/Gnb";
import Footer from "../component/Footer";
import axios from "axios/index";
import MusicInfo from "../component/MusicInfo";
import AlbumList from "../component/AlbumList";

class MusicHome extends Component{
    constructor(props){
        super(props);

        this.state = {
            musicId : parseInt(props.match.params.musicId, 10), // musicId를 얻어서 숫자로 변환
            music : {}, //음악 상세 객체
            albumList : [] //앨범 리스트
        };
    }

    componentDidMount(){
        this._getMusic();
        this._getAlbumList();
    }

    _getMusic(){
        const apiUrl = '/dummy/music_detail.json';

        axios.get(apiUrl)
            .then(data => {
                this.setState({
                    music : data.data.musics.find(w => (
                        w.id === this.state.musicId
                    ))
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    _getAlbumList(){
        const apiUrl = '/dummy/album_list.json';

        axios.get(apiUrl)
            .then(data => {
                this.setState({
                    albumList : data.data.musicAlbums.filter(album => (
                        album.musicId === this.state.musicId
                    ))
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render(){
        return (
            <div>
                <Header />
                <Gnb />

                { this.state.music.id ? (
                    <MusicInfo music={this.state.music} />
                ) : (
                    <span>안된다</span>
                ) }
                { this.state.albumList.length > 0 ? (
                    <AlbumList albums={this.state.albumList} />
                ) : (
                    <span>왜이랭</span>
                ) }
                <Footer />
            </div>
        )
    }
}

export default MusicHome;