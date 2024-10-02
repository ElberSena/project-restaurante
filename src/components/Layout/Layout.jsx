import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ModalCarrinho from '../../containers/ModalCarrinho/ModalCarrinho'
import CookiesConsent from '../../containers/Cookies/CookiesConsent'



function Layout({children}) {
  return (
    <>
    <Header />
    <div className='.content-navbar-pages'>{children}</div>
    <CookiesConsent />
    <Footer />
    <ModalCarrinho />
    </>
  )
}

export default Layout