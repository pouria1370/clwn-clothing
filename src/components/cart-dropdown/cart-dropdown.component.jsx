import React from 'react'
import CostumButton  from '../custom-Button/button-component'
import './cart-dropdown.styles.scss'
import {connect} from 'react-redux'

const CartDropDown=({dropdown})=>(
    <div className={`${dropdown} cart-dropdown`}>
    <div className='cart-items'></div>
    <CostumButton>buy</CostumButton>
    </div>
)

const subcribedDropdown=(state)=>({
dropdown:state.dropdown.dropdown
})
export default connect()(CartDropDown)