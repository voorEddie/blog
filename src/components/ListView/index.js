import React from 'react'
import { Link } from 'react-router'
import list from '../../articles/list'
import './style.css'

const ListView = () => (
  <div className="ListView">
    {list.map(item => (
      <section className="ListView-post" key={item.id}>
        <header>
          <h1>{item.title}</h1>
          <time dateTime={item.timestamp}>Posted on: {item.timestamp}</time>
        </header>
        <p>{item.preview}</p>
        <Link className="btn-readMore" to={item.link}>Read more</Link>
      </section>))}
  </div>
)

export default ListView
