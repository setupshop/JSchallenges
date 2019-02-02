let cards = [['Hearts', 'Diamonds', 'flowers', 'spades' ], ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine', 'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two'] ];
for (let i = 0; i < cards[1].length; i++) {
  for (let j = 0; j < cards[0].length; j++) {
    console.log(cards[1][i] + " of " + cards[0][j]);
  }
}