import { MemoBlock } from '../memoBlock/MemoBlock';
import './Board.css';

export const Board = ({ memoBlocks, animating, handleClick }) => {
    return (
        <main className='board'>
            {memoBlocks.map((memoBlock, i) => {
                return (
                    <MemoBlock 
                        key={`${i}_${memoBlock.emoji}`} memoBlock={memoBlock} animating={animating} handleClick={handleClick}
                    />
                )
            })}
        </main>
    )
};
