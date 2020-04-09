import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from  'reselect';
import {selectCollectioForPreview} from '../../redux/shop/shop.selectors'; 
import {CollectionPreview} from '../preview-comp/collection-preview';
import './collections.overview.styles.scss';

const CollectionOverview=({collections})=>(
            <div className='collection-overview'>
                {collections.map( ({id, ...otherCollection}) =>(
                    <CollectionPreview key={id} {...otherCollection}/>
                ))
                }
                </div>
        )
const mapStateToProp=createStructuredSelector({
    collections:selectCollectioForPreview
});
export default connect(mapStateToProp)(CollectionOverview);