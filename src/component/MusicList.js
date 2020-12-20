import React from 'react';
import {Link} from "react-router-dom";

const MusicList = (props) => {
    return (
        <ul className="list_music">
            { props.list.map((music, index) => (
                <li key={index}>
                    <Link to={`/music/${music.id}`} className="link_music">
                        <img src={music.thumbnail} className="img_music" alt={music.title} />
                        <div className="info_music">
                            <strong className="tit_music">
                                {music.title}
                            </strong>
                            {music.artist}
                        </div>
                    </Link>
                </li>
            )) }
        </ul>
    )
}

export default MusicList;