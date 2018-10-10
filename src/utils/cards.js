import arrayShuffle from 'array-shuffle'

const createSuitSet = () => {
  const cards = []
  for (let i = 1; i <= 13; i++) {
    let name, value, count
  
    switch (i) {
      case 1:
        name = 'Ace'
        value = 11
        count = -1
        break
  
      case 2:
        name = 'Two'
        value = 2
        count = 1
        break
  
      case 3:
        name = 'Three'
        value = 3
        count = 1
        break
  
      case 4:
        name = 'Four'
        value = 4
        count = 1
        break
  
      case 5:
        name = 'Five'
        value = 5
        count = 1
        break
  
      case 6:
        name = 'Six'
        value = 6
        count = 1
        break
  
      case 7:
        name = 'Seven'
        value = 7
        count = 0
        break
  
      case 8:
        name = 'Eight'
        value = 8
        count = 0
        break
  
      case 9:
        name = 'Nine'
        value = 9
        count = 0
        break
  
      case 10:
        name = 'Ten'
        value = 10
        count = -1
        break
    
      case 11:
        name = 'Jack'
        value = 10
        count = -1
        break
  
      case 12:
        name = 'Queen'
        value = 10
        count = -1
        break
  
      case 13:
        name = 'King'
        value = 10
        count = -1
        break
  
      default:
        break
    }

    const card = {
      name,
      value,
      count,
      number: i,
    }
    
    cards.push(card)
  }

  return cards
}

const addSuitsToSets = (cardSet) => {
  const suits = ['Spades', 'Hearts', 'Clubs', 'Diamonds']

  return suits.reduce((arr, suit) => {
    const suitedSet = cardSet.map(card => {
      return {
        ...card,
        suit,
      }
    })

    const newArr = [
      ...arr,
      ...suitedSet
    ]
    
    return newArr
  }, [])
}

export const createDeck = () => addSuitsToSets(createSuitSet())

export const shuffleDeck = (deck) => arrayShuffle(arrayShuffle(deck))