import * as React from 'react';
import styles from './App.module.css';

function Cards() {

}

function App() {

  const images = [
    {'src': '/Bottle.svg'},
    {'src': '/Greyhound.svg'},
    {'src': '/RegalMoth.svg'},
    {'src': '/Rose.svg'}
  ];

  const [cards, setCards] = React.useState([]); 

  //Denna kommer nog bli en callback handler, ska skickas med props och sen anropas från Cards... 
  const initiateCardsArray = () => {
    const doubled = [...images, ...images]; 
    const shuffled = doubled.sort(() => Math.random() - 0.5);
    const memoryCards = shuffled.map(card => {
      return {...card, id: Math.random()}; 
    });
    setCards(memoryCards);

    console.log(cards); 
  }

  

  return (
    <div className="App">
      <div className={styles.wrapper}>
        <button className={styles.button} onClick={initiateCardsArray}>New Game</button>
        {/* <p>{cards[0]}</p> */}
      </div>
    </div>
  )
}

export default App
