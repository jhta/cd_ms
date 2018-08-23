import React from 'react'

// @TODO: move header to Header component
const Layout = props => (
  <section>
    <header>
      <nav>
        <a href='/create' className='black'>Create</a>
        <a href='/login'>Logout</a>
      </nav>
    </header>
    <div>
      { props.children }
    </div>
    <style jsx>{`
      div {
        margin: 0 auto;
        max-width: 1080px;
        min-width: 420px;
        padding: 2rem 1rem;
      }

      header {
        position: relative;
        width: 100wh;
      }

      nav {
      width: 100%;
      display: flex;
      border-bottom: 2px solid black;
      margin-bottom: 1rem;
      box-sizing: border-box;
      min-height: 3rem;
      text-transform: uppercase;
      justify-content: flex-end;
      }

      a {
        font-size: 1.2rem;
        padding: 1rem;
        border-left: 1px solid black;
      }

      .black {
        color: white;
        background: black;
      }
      `}</style>
  </section>
)

export default Layout
