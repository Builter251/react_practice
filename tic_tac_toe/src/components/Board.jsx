import React from 'react';
import Box from './Box';
import { calculateWinner } from '../checkWinner';
// xIsNext: 다음 플레이어를 결정하는 boolean 값. 처음에는 X부터 시작
// boxes: 9개 요소로 이루어진 배열, 각 요소는 X, O, 또는 null
// onPlay: 박스 클릭 이벤트를 처리하는 함수
// playerOrder: 플레이어 순서를 결정하는 값. 처음에는 0부터 시작
const Board = ({ xIsNext, boxes, onPlay, playerOrder }) => {

    function handleClick(index) {
        if (calculateWinner(boxes) || boxes[index]) { return; } // 승자가 있거나 이미 클릭된 박스인 경우, 함수 종료
        const nextBoxes = boxes.slice(); // 박스 배열 복사
        nextBoxes[index] = xIsNext ? "X" : "O"; // 첫 번째 요소를 'X'로 설정
        onPlay(nextBoxes); // 박스 배열 업데이트
    }

    const winner = calculateWinner(boxes); // 승자 확인
    let status;
    if (winner) {
        status = `Winner: ${winner} (Total turns: ${playerOrder})`; // 승자가 나오면 플레이어 순서 표시
    } else if (boxes.every((box) => box)) { // 모든 박스가 채워진 경우. 즉, 무승부인 경우
        status = `Draw (Total turns: 9)`;
    } else {
        status = `Next player: ${xIsNext ? 'X' : 'O'} (Turn: ${playerOrder})`; // 승자가 없을 때, 현재 턴과 플레이어 순서 표시
    }

    return (
        <div>
            <div class="status">
                {status}
            </div>

            <div className="board"> {/* 게임 보드 */}
                {[0, 1, 2].map((row) => ( // 3x3 행렬 생성에서 각 행에 대해 반복
                    <div className='board-row' key={row}>
                        {[0, 1, 2].map((col) => { // 3x3 행렬 생성에서 각 열에 대해 반복
                            const index = row * 3 + col;  // 인덱스 계산
                            return <Box value={boxes[index]} onBoxClick={() => handleClick(index)} key={index} />;
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Board;