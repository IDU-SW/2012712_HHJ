import React from 'react';

const MusicInfo = (props) => {
    const music = props.music;
    return (
        <div className="wrap_music">
            <img src={music.thumbnail} className="img_music" alt={music.title} />
            <div className="info_music">
            { music.genre.map((g, index) => (
                    <span key={index} className="txt_genre">{g}</span>
                )) }
                <strong className="tit_music">{music.title}</strong>           
                <span className="art_">{music.artist}</span>     
            </div>
        </div>
    )
}

export default MusicInfo;