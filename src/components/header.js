import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="header">
    <section
      style={{
        margin: `0 auto`,
        padding: `1rem 1.0875rem`,
      }}
      className="header-flex"
    >
      <section style={{ margin: 0 }} className="header-link">
        <Link to="/">
          {siteTitle}
        </Link>
        　❘　 
        <a href="https://kana.disism.com" target="_blink">
          AUTO KANA
        </a>
      </section>
      <section className="header-link">
        <a href="https://github.com/disism/ism.ninja" target="_blink">
            GITHUB
        </a>
      </section>
    </section>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
