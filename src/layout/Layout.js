import React from 'react'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'

export const Layout = ({ children }) => {
    return (
        
        
        < div className = "container mx-auto max-w-screen-lg" >
        < Header / >
        < main > { children } < /main> 
        </div>
    )
}