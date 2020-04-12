import React from 'react';
import CollectionOverview from '../../components/collections-overview/collections.overview.component';
import {Route} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';
import CollectionPage from '../collection/collection.component';
import {fetchCollectionsStartAsync} from '../../redux/shop/shop.actions';
import {selectisCollectionLoading} from '../../redux/shop/shop.selectors';
import {connect} from 'react-redux';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
const CollectionOverviewWithSpinner=WithSpinner(CollectionOverview);
const CollectionPagewithSpinner=WithSpinner(CollectionPage);

class ShopPage extends React.Component{
  componentDidMount(){
      const {fetchCollectionsStartAsync}=this.props;
      fetchCollectionsStartAsync();
  }
    render(){
        
        const {match,isCollectionLoaded}=this.props;
    return(
      <div className='shop-page'>
              <Route exact path={`${match.path}`}  render={props=>
        (<CollectionOverviewWithSpinner isLoading={!isCollectionLoaded} {...props}/>)}
            />
        <Route path={`${match.path}/:collectionId`}  render={props=><CollectionPagewithSpinner isLoading={!isCollectionLoaded} {...props}/>} />
        </div>
        )
    }
}
const mapStateToProps=createStructuredSelector({
    isCollectionLoaded:selectisCollectionLoading
    
})

const mapDispatchToProps=dispatch=>({
    fetchCollectionsStartAsync:()=>dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);