import React from 'react';
import {Link} from "react-router-dom";

const Gnb = (props) => (
    <ul className="gnb">
        <li>
            <Link to="/?menu=top" className={ props.menu === 'top' ? 'tab_menu on' : 'tab_menu' }>차트</Link>
        </li>
        <li>
            <Link to="/?menu=new" className={ props.menu === 'new' ? 'tab_menu on' : 'tab_menu' }>최신음악</Link>
        </li>
        <li>
            <Link to="/?menu=rec" className={ props.menu === 'rec' ? 'tab_menu on' : 'tab_menu' }>추천음악</Link>
        </li>
    </ul>
)

export default Gnb;