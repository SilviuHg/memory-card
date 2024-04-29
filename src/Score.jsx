export default function TrackScore({ count, bestScore }) {
  return (
    <>
      <div className="header">
        <div className="left-header">
          <h2>POKEMON MEMORY CARD GAME</h2>
          <h3>Don&apos;t click the same card twice!</h3>
        </div>
        <div className="right-header">
          <p>Score: {count}</p>
          <p>Best score: {bestScore}</p>
        </div>
      </div>
    </>
  );
}
