const React = require('react')
const Nav = require('./Nav.jsx')

class Contact extends React.Component {
  render () {
    return (
      <div className='landing'>
        <div className='search-area'>
          <Nav />
          <h1 className='page-title'>CONTACT</h1>
          <div className='contact'>
            <form>
              first name <br />
              <input type='text' /><br />
              last name <br />
              <input type='text' /><br />
              email <br />
              <input required type='text' /><br />
              message <br />
              <textarea required /><br />
              <input type='submit' value='submit' />
            </form>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Contact
