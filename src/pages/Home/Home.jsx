import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import Header from '../../component/header/Header'
import Featured from '../../component/featured/Featured'
import "./home.css"
import PropertieList from '../../component/propertiesList/PropertieList'
import FeaturedProperties from '../../component/featuredProperties/FeaturedProperties'
import Mail from '../../component/mailList/Mail'
import Footer from '../../component/footer/Footer'

function Home() {
  return (
    <div className='home'>
        <Navbar/>
        <Header/>
        <div className='homeContainer'>
          <Featured/>
          <div className="homeTitle">Brows by propertie type</div>
          <PropertieList/>
          <div className="homeTitle">Homes guests love</div>
          <FeaturedProperties/>
          <Mail/>
          <Footer/>
        </div>
        
    </div>
  )
}

export default Home