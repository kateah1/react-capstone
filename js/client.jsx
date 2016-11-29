const React = require('react')
const ReactDOM = require('react-dom')
const Home = require('./Home.jsx')
const About = require('./About.jsx')
const Contact = require('./Contact.jsx')
const { Router, Route, hashHistory } = require('react-router')

class App extends React.Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
