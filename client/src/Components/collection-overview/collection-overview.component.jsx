import React from 'react';
import CollectionPreview from "../collection-preview/Collection-preview.component";
import {createStructuredSelector} from "reselect";
import {selectCollectionForPreview} from "../../redux/shop/shop.selectors";
import {connect} from "react-redux";

const CollectionsOverview = ({collections}) => (
        <div className='collection-overview'>
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                ))
            }
        </div>
    );

const mapStateToProps = createStructuredSelector ({
    collections: selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);