import { Link } from 'react-router-dom';
import './btn.css';
import React from 'react';

function Btn({ backgroundColor, hoverBack, color, title, icone, padding, to, width }) {
    return (
        <>
            <Link to={to}  className='botton' style={{ backgroundColor: backgroundColor, color: color, padding: padding ? padding : "16px 38px", width: width }}>
                {icone && <span className='me-2 fs-4'>{icone}</span>}
                {title}
                <div style={{ backgroundColor: hoverBack }}></div>
            </Link>
        </>
    );
}

export default Btn;
