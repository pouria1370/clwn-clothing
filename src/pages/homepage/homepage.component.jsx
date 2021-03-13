
import React from 'react';
import './homepage.styles.scss'
import DirectoryMneu from '../../components/directory-menu-component/directory-component'



const HomePage = (props) => {
  console.log(props)
  return(<div className="homepage">
    <DirectoryMneu /> 
  </div>)
};
export default HomePage;