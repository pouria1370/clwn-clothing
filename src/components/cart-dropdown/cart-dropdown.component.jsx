import React from 'react'
import CostumButton  from '../custom-Button/button-component'
import './cart-dropdown.styles.scss'

const CartDropDown=()=>(
    <div className={` cart-dropdown`}>
    <div className='cart-items'></div>
    <CostumButton>buy</CostumButton>
    </div>
)


export default CartDropDown