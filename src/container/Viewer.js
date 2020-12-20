import React, { Component } from 'react';
import axios from "axios/index";
import {Link} from "react-router-dom";



class Viewer extends Component{
    constructor(props){
        super(props)

        this.state = {
            albumId : parseInt(props.match.params.albumId, 10),
            album : {}
        };
    }

    componentDidMount(){
        this._getAlbumList();
    }

    _getAlbumList(){
        const apiUrl = '/dummy/album_list.json';

        axios.get(apiUrl)
            .then(data => {
                this.setState({
                    album : data.data.musicAlbums.find(album => (
                        album.id === this.state.albumId
                    ))
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render(){
        const album = this.state.album;
        return (
            <div className="wrap_viewer">
            { album.id ? (
                <div>
                    <div className="top_viewer">
                        {album.title}
                        <Link to={`/music/${album.musicId}`} className="btn_close">X</Link>
                    </div>
                    <div className="wrap_images">
                        { album.images.map((img, index) => (
                            <img key={index} src={img} />
                            )) }
                            </div>
                        </div>
                    ) : (
                        <span>LOADING...</span>
                    ) }
                    </div>
                )
            }
        }

export default Viewer;

