import React, { Component } from 'react'
import SHOP_DATA from './Shop-Data.js'
import CollectionPreview from '../../components/preview-collection.component/preview-collection.component'
export default class SHOPPAGE extends Component {
    constructor(){
        super();
        this.state={
            collection:SHOP_DATA
        }
    }
    render() {
        const {collection}=this.state;
        return (
            <div className="shop-page">
            {collection.filter(index=>index.id<2).map(({id,...otherProps})=>(
                <CollectionPreview  key={id} {...otherProps} />
            ))
        }
            </div>
        )
    }
}
