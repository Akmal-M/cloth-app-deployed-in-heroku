import React, {useEffect} from 'react';
import {Route} from "react-router-dom";
import {fetchCollectionsStart} from "../../redux/shop/shop.actions";
import './Shop.styles.scss';
import {connect} from 'react-redux';
import CollectionsOverviewContainer from "../../Components/collection-overview/collection-overview.container";
import CollectionPageContainer from "../collection/collection.container";


const ShopPage = ({match, fetchCollectionsStart}) => {

    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart])

    return (
        <div className='shop-page'>
            <div className='image'>
                <Route exact path={`${match.path}`}
                       component={CollectionsOverviewContainer}/>
                <Route path={`${match.path}/:collectionId`}
                       component={CollectionPageContainer}/>
            </div>
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})


export default connect(null, mapDispatchToProps)(ShopPage);