import React from 'react'
import { Link } from 'react-router'
import list from '../../articles/list'
import './style.css'

const ListView = () => (
  <div className="ListView">
    {list.map(item => (
      <section key={item.id}>
        <header>
          <h1>{item.title}</h1>
          <time dateTime={item.timestamp}>{item.timestamp}</time>
        </header>
        <p>{item.preview}</p>
        <Link to={item.link}>Full article</Link>
      </section>))}
  </div>
)

export default ListView
