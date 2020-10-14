import React from "react";

import {connect } from "react-redux";
import {createStructuredSelector} from "reselect";
import CollectionPreview from "./../collection-preview/collection-preview.component";
import "./collection-overview.styles.scss";
import {selectCollections} from "../../redux/shop/shop.selectors";

const CollectionOverview = ({collections})=>(
    <div className="collection-overview">
   {
            collections.map(({ id, ...otherCollectionProps})=>(
                <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
        ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})



export default connect(mapStateToProps)(CollectionOverview);