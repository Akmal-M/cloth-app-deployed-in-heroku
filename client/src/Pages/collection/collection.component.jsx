import React from 'react';
import './collection.styles';
import {connect} from "react-redux";
import {selectCollection} from "../../redux/shop/shop.selectors";
import CollectionItem from "../../Components/collection-item/collection-item.component";
import {
    CollectionPageContainer,
    CollectionItemsContainer,
    CollectionTitle

} from "./collection.styles";


const CollectionPage = ({collection}) => {

    const {title, items} = collection;
    return (
        <CollectionPageContainer>
            <CollectionTitle>{title}</CollectionTitle>
            <CollectionItemsContainer>
                {items.map(item => (
                    <CollectionItem key={item.id} item={item}/>
                ))}
            </CollectionItemsContainer>
        </CollectionPageContainer>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});


export default connect(mapStateToProps)(CollectionPage);