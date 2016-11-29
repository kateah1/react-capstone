const React = require('react')
const Nav = require('./Nav.jsx')
const dogData = require('json-loader!../public/data/dogs.json')
const catData = require('json-loader!../public/data/cats.json')
const birdData = require('json-loader!../public/data/birds.json')
const rabbitData = require('json-loader!../public/data/rabbits.json')
const horseData = require('json-loader!../public/data/horses.json')

let animalData = {
  dog: dogData,
  cat: catData,
  bird: birdData,
  rabbit: rabbitData,
  horse: horseData
}

class Home extends React.Component {

  constructor () {
    super()
    this.state = { value: 'dog' }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({ value: event.target.value })
  }

  render () {
    return (
      <div className='landing'>
        <div className='search-area'>
          <Nav />
          <div className='search-form'>
            <h1>Find Adoptable Pets Near You</h1>
            <div className='select-style'>
              <select value={this.state.value} onChange={this.handleChange}>
                <option value='dog'>Dog</option>
                <option value='cat'>Cat</option>
                <option value='bird'>Bird</option>
                <option value='rabbit'>Rabbit</option>
                <option value='horse'>Horse</option>
              </select>
            </div>
          </div>
        </div>
        <div className='animal-results'>
          {animalData[this.state.value].animals.map(function (animal) {
            return (
              <div key={animal.id}>
                <div className='individual-animal'>
                  <img className='animal-image' src={animal.image} />
                  <h1>{animal.name}</h1>
                  <hr />
                  <h2>{animal.age}, {animal.breed}</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

module.exports = Home
