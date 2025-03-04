import { useLayoutEffect, useRef } from 'react';
import { StartGame } from './scenes/Game';

const App = () => {
  const game = useRef<Phaser.Game | null>(null!);

  useLayoutEffect(() => {
    // create the game
    game.current = StartGame('game-container');
    // clean up
    return () => {
      game.current?.destroy(true);
      if (game.current !== null) game.current = null;
    };
  }, []); // no dependencies, run once

  return (
    <>
      <div id="game-container"></div>
    </>
  );
};

export default App;
