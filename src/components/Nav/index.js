import React from 'react'
import { Link } from 'react-router'
import './style.css'

const Nav = () => (
  <nav className="Nav">
    <ul className="Nav-list">
      <li className="Nav-list-item"><Link to="/blog" activeClassName="active" onlyActiveOnIndex>Blog</Link></li>
      <li className="Nav-list-item"><Link to="/blog/about" activeClassName="active">About</Link></li>
    </ul>
  </nav>
)

export default Nav
