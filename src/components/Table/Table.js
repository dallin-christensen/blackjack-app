import React, { Component } from 'react'
import styled from 'react-emotion'
import { createDeck, shuffleDeck } from '../../utils/cards'

const Container = styled('div')`
  height: 100%;
  background-color: grey;
`

const DealerSide = styled('div')`
  height: 50%;
  background-color: #45C48B;
`

const PlayerSide = styled('div')`
  height: 50%;
  background-color: white;
`

const DealButton = styled('button')`
  background-color: red;
  color: white;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  border-color: white;
  position: absolute;
  top: 5%;
  right: 5%;
`

const CardPlace = styled('div')`
  width: 100%;
  height: 100%
`

const Count = styled('div')`
  color: white;
  font-size: 30px;
  position: absolute;
  top: 5%;
  left: 5%;
`

class Table extends Component {
  state = {
    shoe: [],
    discard: [],
    dealerHand: [],
    playerHand: [],
    decksInShoe: 7,
    totalCount: 0,
  }
  componentDidMount() {
    const { decksInShoe } = this.state
    let decks = []

    for (let i = 0; i < decksInShoe; i++) {
      decks.push(shuffleDeck(createDeck()))
    }

    const shoe = shuffleDeck(decks.reduce((arr, deck) => [...arr, ...deck ], []))
    this.setState({ shoe })
  }
  newHand = () => {
    this.clearTable()
    this.deal()
  }
  deal = () => {
    const { shoe } = this.state

    const playerHand = [shoe[0], shoe[2]]
    const dealerHand = [shoe[1], shoe[3]]

    this.setState({
      playerHand,
      dealerHand,
      shoe: shoe.splice(4)
    }, () => this.takeCount())
  }
  clearTable = () => {
    const { playerHand, dealerHand, discard, totalCount } = this.state
    this.setState({
      dealerHand: [],
      playerHand: [],
      discard: [
        ...discard,
        ...dealerHand,
        ...playerHand,
      ]
    })
  }
  takeCount = () => {
    const { playerHand, dealerHand, totalCount } = this.state
    const hands = [
      ...playerHand,
      ...dealerHand,
    ]

    const newCount = hands.reduce((val, card) => val + card.count, totalCount)
    this.setState({ totalCount: newCount })
  }
  render() {
    const { discard, playerHand, dealerHand, totalCount } = this.state
    return (
      <Container>
        <DealerSide>
          <DealButton
            onClick={this.newHand}
          >
            deal
          </DealButton>
          <Count>
            {totalCount}
          </Count>
          <CardPlace>
            {JSON.stringify(dealerHand)}
          </CardPlace>
        </DealerSide>
        <PlayerSide>
          <CardPlace>
            {JSON.stringify(playerHand)}
          </CardPlace>
        </PlayerSide>
        {JSON.stringify(discard)}
      </Container>
    )
  }
}

export default Table
