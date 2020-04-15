import React from 'react';
import {withRouter} from 'react-router-dom';
import './menu-item.component.style.scss';
const MenuItem = ({title,imgUrl,size,linkUrl,history})=>(
    <div className={`${size} menu-item`} onClick={()=>history.push(`${linkUrl}`)}>
         <div className='background-image' style={{backgroundImage:`url(${imgUrl})`}}/>
                   <div className='content'>
                   
                <h1 className='title'>{title}</h1>
                <span className='subtitle'>Shop Now</span>
                </div>
            </div>
    );

export default withRouter(MenuItem);
