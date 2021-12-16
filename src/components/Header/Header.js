import React from 'react'
import './Header.css'

const Header = () => {
    const bodyAddClasss = () =>{
        document.querySelector('body').classList.toggle('modal-active');
    }
    return (
        <div id='header' className='sticky-top'>
            <nav className='navbar navbar-expand-lg navbar-light ya-nav'>
                <div className="container-fluid">
                    <a href="/" aria-current="page" title="Yaponamama" className="navbar-brand nuxt-link-exact-active nuxt-link-active">
                    <img height="45" alt="Yaponamama" loading="lazy" src="./images/logo.svg" className="d-inline-block align-top lazyLoad isLoaded" />
                    </a>
                    <div className="collapse navbar-collapse">
                        <div className="navbar-nav ya-navbar align-items-center mr-auto"><a href="/" aria-current="page" className="nav-item nav-link ya-city-link nuxt-link-exact-active nuxt-link-active" role="button">Ташкент
                        </a>
                        </div>
                        <div className="navbar-nav ya-navbar align-items-center ml-auto"><a href="/menu" className="nav-item nav-link">Меню
                        </a> <a href="/restaurants" className="nav-item nav-link ">Рестораны
                        </a> <a href="/gallery" className="nav-item nav-link ya-vacancy-link">Галерея
                        </a> <a href="/delivery" className="nav-item nav-link ya-delivery-link d-none">Доставка
                        </a>
                        </div>
                        <div className="navbar-nav ya-opt-navbar align-items-center mr-0">
                        <a href="/" aria-current="page" className="nav-item nav-link ya-lang nuxt-link-exact-active nuxt-link-active ya-ru" role="button">
                        Русский
                        </a> <a href="/actions" className="nav-item nav-link ya-nav-action">Акции
                        </a> <a href="tel:1089" className="nav-item nav-link ya-number-link">1089</a> <a href="#" className="nav-item nav-link ya-cart-icon border-left-0 pt-0 pb-0"><img loading="lazy" height="26" src="images/search.svg" className="d-inline-block align-middle lazyLoad isLoaded" /></a> <a href="/" aria-current="page" className="nav-item nav-link border-left-0 pt-0 pb-0 nuxt-link-exact-active nuxt-link-active" role="button"><img loading="lazy" height="25" src="images/ic_profile.d6b094d.svg" className="d-inline-block align-middle lazyLoad isLoaded" /></a> 
                        <a href="#" className="nav-item nav-link ya-cart-icon border-left-0 pt-0 pb-0">
                            <img loading="lazy" height="25" src="images/ic_cart.01c3be9.svg" className="d-inline-block align-middle lazyLoad isLoaded" /> 
                        </a>
                        <a  onClick={bodyAddClasss} aria-current="page" className="nav-item nav-link border-left-0 pt-0 pb-0 pl-4 nuxt-link-exact-active nuxt-link-active" role="button"><img loading="lazy" height="20" src="images/menu_bar.svg" className="d-inline-block align-middle lazyLoad isLoaded" /></a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
