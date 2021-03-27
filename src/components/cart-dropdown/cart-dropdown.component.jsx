import React from 'react'
import CostumButton  from '../custom-Button/button-component'
import './cart-dropdown.styles.scss'
import CartItem from '../cart-item/cart-item.component'
import {connect} from 'react-redux'
const CartDropDown=({cartItems})=>(
    <div className={` cart-dropdown`}>
    <div className='cart-items'>
    {

     cartItems.map(cartItem=><CartItem
        key={cartItem.id} item={cartItem}
        />)   
    }
    
    </div>
    <CostumButton>buy</CostumButton>
    </div>
)

const mapStateToProps= ({cart:{cartItems}})=>({

  cartItems
})
export default connect(mapStateToProps)(CartDropDown)