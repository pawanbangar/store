import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectDirectorySections} from '../../redux/directory/directory.selectors';
import './directory.style.scss';

const Directory=({sections})=>(
            <div className='directory-menu'>
               {
                sections.map(({title,imgUrl,id,size,linkUrl})=>(
                <MenuItem title={title} key={id} imgUrl={imgUrl} size={size} linkUrl={linkUrl}/>
                ))
                }

            </div>
        
        
        );
const mapStateToProps=createStructuredSelector({
    sections:selectDirectorySections
});
export default connect(mapStateToProps)(Directory);

