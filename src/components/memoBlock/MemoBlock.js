import './MemoBlock.css';

export const MemoBlock = ({ memoBlock, animating, handleClick }) => {
    return (
        <div className='memo-block' onClick={() => {(!memoBlock.flipped && !animating) && handleClick(memoBlock)}}>
            <div className={`memo-block-inner ${memoBlock.flipped && 'memo-block-flipped'}`}>
                <div className='memo-block-front'>
                </div>
                <div className='memo-block-back'>
                    {memoBlock.emoji}
                </div>
            </div>
        </div>
    )
};