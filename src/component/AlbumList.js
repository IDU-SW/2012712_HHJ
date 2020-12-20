import React from 'react';
import {Link} from "react-router-dom";

const AlbumList = (props) => {
    return (
        <ul className="list_music list_album">
            { props.albums.map((album, index) => (
                <li key={index}>
                    <Link to={`/viewer/${album.id}`} className="link_music">
                        <img src={album.thumbnailImage.url} className="img_music" alt={album.title} />
                        <div className="info_music">
                            <strong className="tit_music">
                                {album.title}
                            </strong>
                            <span className="txt_deinfo">
                                <p>{album.albumname}</p>
                                <p>{album.deinfo}</p>
                                <p>{album.albumgenre}</p>
                            </span>
                        </div>
                    </Link>
                </li>
            )) }
        </ul>
    )
}

export default AlbumList;