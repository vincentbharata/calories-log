import React from 'react'
import SignUp from './pages/signup'
import Login from './pages/login'
import Home from './pages/home'
import Recipes from './pages/recipes'
import AboutUs from './pages/aboutUs'
import PremiumPlan from './pages/premiumPlan'
import Article from './pages/article'
import DetailArticle from './pages/detailArticle'

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Profile from './pages/profile'
import Review from './pages/review'


function Main() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/SignUp' element={<SignUp/>}/>
                <Route path='/Home' element={<Home/>} />
                <Route path='/Article' element={<Article/>}/>
                <Route path='/AboutUs' element={<AboutUs/>}/>
                <Route path='/Recipes' element={<Recipes/>} />
                <Route path='/PremiumPlan' element={<PremiumPlan/>} />
                <Route path='/Profile' element={<Profile/>} />
                <Route path='/DetailArticle' element={<DetailArticle/>} />
                <Route path='Review' element={<Review/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Main