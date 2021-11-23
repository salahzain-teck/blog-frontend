import React, { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import Menu from '../assets/mobile_menu.svg'
const Nav = ({ categories }) => {

  const [state,setState] = useState(false)
  const hideNavBar = () => {
    if (window.scrollY >= 10) {
      setState(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", hideNavBar);
  });

  return (
    <div>
      <nav className="uk-navbar-container" data-uk-navbar>
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li>
              <Link href="/">
                <a style={{fontSize:'20px'}}>Artículo</a>

              </Link>
            </li>
          </ul>
        </div>
        <div className="uk-navbar-right">

          <ul className="uk-navbar-nav">
            <div className='menu__img' onClick={()=> setState(!state)}>
              <Image src={Menu}/>
            </div>
            {categories.map((category) => {
              return (
                <li key={category.id}>
                  <Link href={`/category/${category.slug}`}>
                    <a className="uk-link-reset">{category.name}</a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
      {state ?  <div className='nav__collapse'>
      {categories.map((category) => {
              return (
                <li key={category.id}>
                  <Link href={`/category/${category.slug}`}>
                    <a className="uk-link-reset">{category.name}</a>
                  </Link>
                </li>
              )
            })}
      </div> : ''}
     
    </div>
  )
}

export default Nav
