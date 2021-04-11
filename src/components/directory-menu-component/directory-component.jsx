import React, { Component } from "react";
import "./directory-component-style.scss";
import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'
import {selectDirectorySections} from '../../redux/directory/directory.selector'
import MenuItem from "../menu-item/menu-item-component";
 const DirectoryMenu =({sections})=> (
      <div className="directory-menu">
        {sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
 )

const mapStateToProps=createStructuredSelector(

  {
    sections:selectDirectorySections
  }
)


export default connect(mapStateToProps)(DirectoryMenu)