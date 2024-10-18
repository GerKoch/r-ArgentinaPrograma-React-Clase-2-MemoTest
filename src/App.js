import { useEffect, useState } from 'react';
import { Board } from './components/board/Board';
import WinnerModal from './components/winnerModal/WinnerModal';
import './App.css';

const emojiList = [...'🤠🤡💀👻👽👾🤖🥶'];

function App() {
  const [shuffledMemoBlocks, setShuffledMemoBlocks] = useState([]);
  const [selectedMemoBlock, setSelectedMemoBlock] = useState(null);
  const [animating, setAnimating] = useState(false);
  // const [winner, setWinner] = useState(null);

  useEffect(() => {
    const shuffledEmojiList = shuffleArray([...emojiList, ...emojiList]);
    setShuffledMemoBlocks(shuffledEmojiList.map((emoji, i) => ({ index: i, emoji, flipped: false })));
  }, []);

  const resetGame = () => {
    setShuffledMemoBlocks([]);
    setSelectedMemoBlock(null);
    setAnimating(false);
  };

  const shuffleArray = (e) => {
    for (let i = e.length - 1; i > 0; i--) {
      const x = Math.floor(Math.random() * (i + 1));
      [e[i], e[x]] = [e[x], e[i]];
    }
    return e
  };

  const handleClick = (memoBlock) => {
    const flippedMemoBlock = { ...memoBlock, flipped: true };
    let shuffledMemoBlocksCopy = [...shuffledMemoBlocks];
    shuffledMemoBlocksCopy.splice(memoBlock.index, 1, flippedMemoBlock);
    setShuffledMemoBlocks(shuffledMemoBlocksCopy);
    if (selectedMemoBlock === null) {
      setSelectedMemoBlock(memoBlock);
    } else if (selectedMemoBlock.emoji === memoBlock.emoji) {
      setSelectedMemoBlock(null);
    } else {
      setAnimating(true);
      setTimeout(() => {
        shuffledMemoBlocksCopy.splice(memoBlock.index, 1, memoBlock);
        shuffledMemoBlocksCopy.splice(selectedMemoBlock.index, 1, selectedMemoBlock);
        setShuffledMemoBlocks(shuffledMemoBlocksCopy);
        setSelectedMemoBlock(null);
        setAnimating(false);
      }, 1000);
    }
  };

  return (
    <main>
      <header className='header'>
        <h1>Memo Test</h1>
      </header>
      <section>
        <Board memoBlocks={shuffledMemoBlocks} animating={animating} handleClick={handleClick} />
      </section>
      {/* <section>
        <WinnerModal resetGame={resetGame} />
      </section> */}
    </main>

  )
};

export default App;
