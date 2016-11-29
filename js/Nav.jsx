const React = require('react')
const { Link } = require('react-router')

class Nav extends React.Component {
  render () {
    return (
      <div className='nav'>
        <ul>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/about'>
            <li>About</li>
          </Link>
          <Link to='/contact'>
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    )
  }
}

module.exports = Nav
