import React from 'react'
import {createStructuredSelector} from 'reselect';
import CollectionPreview from '../preview-collection/preview-collection.component'
import './collection-overview.style.scss'
import { connect } from "react-redux";
import shopSelector from "../../redux/Shop/shop.selector";




const CollectionOverview=({collection})=>(
    <div className='collection-overview'>
    {collection.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))} 
    </div>
)

const mapStateToProps = createStructuredSelector({
    collection: shopSelector,
  });


export default connect(mapStateToProps)(CollectionOverview)