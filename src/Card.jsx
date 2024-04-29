let savedPokemonIds = [];

export default function Card({
  itemsArray,
  count,
  bestScore,
  handlePokemonsArray,
  handleCount,
  handleBestScore,
}) {
  // shuffle cards when a card is clicked and update score
  // if the card was already clicked, reset score and return
  function handleCardsShuffle(id) {
    if (savedPokemonIds.includes(id)) {
      handleCount(0);
      savedPokemonIds = [];
      return;
    }
    let temporaryArray = [...itemsArray];
    for (let i = temporaryArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [temporaryArray[i], temporaryArray[j]] = [
        temporaryArray[j],
        temporaryArray[i],
      ];
    }
    handlePokemonsArray(temporaryArray);
    handleCount((count) => count + 1);
    savedPokemonIds.push(id);
    if (count >= bestScore) {
      handleBestScore(count + 1);
    }
  }

  return (
    <>
      <div className="cards-container">
        {itemsArray.map((item) => (
          <div
            key={item.id}
            className="card"
            onClick={() => {
              handleCardsShuffle(item.id);
            }}
          >
            <img src={item.sprites.front_default} className="icon" />
            <p className="name">{item.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}
