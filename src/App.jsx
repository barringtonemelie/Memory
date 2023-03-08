import * as React from 'react';
import { render } from 'react-dom';
import styles from './App.module.css';

function Card(props) {
  return (
      <div>
        <img src={props.src} alt="A memory card" className={props.flipped ? styles.cardImg : styles.imgHidden} onClick={props.handleCardChoice}/>
        <div id={props.id} className={props.flipped ? styles.imgHidden : styles.cardFront} onClick={props.handleCardChoice}></div>
      </div>  
    )
}

function App() {

  const images = [
    {'src': '/Bottle.svg'},
    {'src': '/Greyhound.svg'},
    {'src': '/RegalMoth.svg'},
    {'src': '/Rose.svg'}
  ];
  
  const [cards, setCards] = React.useState([]); 
  const [cardOne, setCardOne] = React.useState(null); 
  const [cardTwo, setCardTwo] = React.useState(null); 

  React.useEffect(() => {
    console.log("UseEffect triggades");

    if (cardOne === cardTwo) {
      console.log("You picked two identical cards!");
      
    }

    console.log("Card one ", cardOne); 
    console.log("Card two ", cardTwo); 
  }, [cardOne, cardTwo]); 


  const handleCardChoice = (event) => {
    const id = parseFloat(event.target.id); 
    
    cardOne ? setCardTwo(id) : setCardOne(id); 
  }

  const initiateCardsArray = () => {
    const doubled = [...images, ...images]; 
    const shuffled = doubled.sort(() => Math.random() - 0.5);
    const memoryCards = shuffled.map(card => {
      return {...card, id: Math.random(), matched: false}; 
    });
    setCards(memoryCards);
    // console.log("initiateCardsArray ran, cards: ", cards); 
  }


  return (
    <div className="App">
      <div className={styles.wrapper}>
        <button className={styles.button} onClick={initiateCardsArray}>New Game</button>
        <div className={styles.cardsWrapper}>
          {cards.map(card => {
            return(
              <Card 
                key={card.id}
                handleCardChoice={handleCardChoice}
                id={card.id}
                src={card.src}
                flipped={card.id === cardOne || card.id === cardTwo ? true : false}
              />
            )
          })}
        </div>
      </div>
      {/* {console.log("Card one: ", cardOne)} 
      {console.log("Card two: ", cardTwo)} */}
    </div>
    
  )
}

export default App
