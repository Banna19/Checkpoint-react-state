import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Jean Dupont',
        bio: 'Développeur Frontend',
        imgSrc: 'https://via.placeholder.com/150',
        profession: 'Développeur'
      },
      show: true,
      timeElapsed: 0
    };
    this.timer = null;
  }

  componentDidMount() {
    // Démarrer l'intervalle de mise à jour de temps écoulé
    this.timer = setInterval(() => {
      this.setState(prevState => ({
        timeElapsed: prevState.timeElapsed + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    // Nettoyer l'intervalle lors de la destruction du composant
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  toggleShow = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  }

  render() {
    const { person, show, timeElapsed } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {show ? 'Cacher le profil' : 'Afficher le profil'}
        </button>
        {show && (
          <div>
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>{person.profession}</p>
          </div>
        )}
        <div>
          <p>Temps écoulé depuis le montage du composant : {timeElapsed} secondes</p>
        </div>
      </div>
    );
  }
}

export default App;
