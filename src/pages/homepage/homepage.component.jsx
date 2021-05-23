
import React from 'react';
//import './homepage.styles.scss'
import DirectoryMneu from '../../components/directory-menu-component/directory-component'
import {HomepageContainer} from './homepage.style'


const HomePage = (props) => {
  console.log(props)
  return(
    <HomepageContainer >
    <DirectoryMneu /> 
  </HomepageContainer>)
};
export default HomePage;