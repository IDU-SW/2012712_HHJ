import React, { Component } from 'react';
import axios from 'axios';

import Header from "../component/Header";
import Gnb from "../component/Gnb";
import Footer from "../component/Footer";
import MusicList from "../component/MusicList";

class Main extends Component{
    constructor(props){
        super(props);

        const query = new URLSearchParams(props.location.search);
        const menu = query.get('menu');

        this.state = {
            menu : menu || 'top', //디폴트로 top == top100
            musicList : [] //초기 리스트는 비어있습니다.
        };
    }

    componentDidMount(){
        this._getList();
    }

    componentDidUpdate(prevProps){
        //요일이 바뀌면 다시 setState 처리
        let prevQuery = new URLSearchParams(prevProps.location.search);
        let prevMenu = prevQuery.get('menu');

        let query = new URLSearchParams(this.props.location.search);
        let menu = query.get('menu');

        if(prevMenu !== menu){
            this.setState({
                menu
            })
        };
    }

    _getList(){
        //music_list를 가지고 옵니다.
        const apiUrl = '/dummy/music_list.json';

        axios.get(apiUrl)
            .then(data => {
                //가지고 온 리스트를 state에 저장합니다.
                this.setState({
                    musicList : data.data.musicList
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
                <Gnb menu={this.state.menu} />

                { this.state.musicList.length > 0 ? (
                    <MusicList list={
                        this.state.musicList.filter(music => (
                            music.menu === this.state.menu
                        ))
                    } />
                ) : (
                    <span>loading...</span>
                )}

                <Footer />
            </div>
        )
    }
}

export default Main;