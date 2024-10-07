import React from 'react';
import Board from './Board';
import { useState } from 'react';

const Game = () => {
    // 게임의 이동 기록을 저장하는 배열, 각 요소는 9개 요소로 이루어진 배열
    const [history, setHistory] = useState([Array(9).fill(null)]);
    // 현재 이동을 결정하는 값. 처음에는 0부터 시작
    const [currentStep, setCurrentStep] = useState(0);
    // 플레이어 순서를 결정하는 값. 처음에는 1부터 시작
    const [playerOrder, setPlayerOrder] = useState(0);
    // 다음 플레이어를 결정하는 boolean 값. 처음에는 X부터 시작 | 현재 이동이 짝수인 경우 X, 홀수인 경우 O
    const xIsNext = currentStep % 2 === 0;
    // 현재 이동의 박스: history 배열의 currentStep번째 요소
    const currentBoxes = history[currentStep];

    // 이동 기록 복사. ...history.slice(0, currentStep + 1)은 history 배열의 처음부터 currentStep까지 복사, nextBoxes는 새로운 이동 추가
    function handlePlay(nextBoxes) {
        const nextHistory = [...history.slice(0, currentStep + 1), nextBoxes];
        // 이동 기록 업데이트
        setHistory(nextHistory);
        // 현재 이동 업데이트. 이동 기록의 길이 - 1의 의미는 마지막 이동을 의미
        setCurrentStep(nextHistory.length - 1);
        // 플레이어 순서 업데이트
        setPlayerOrder(playerOrder + 1);
    }

    // 이동 기록을 변경하는 함수
    function jumpTo(move) {
        // 현재 이동 업데이트
        setCurrentStep(move);
        // 플레이어 순서 업데이트
        setPlayerOrder(move);
    }

    // 이동 기록을 순회
    const moves = history.map((step, move) => {
        // 이동 기록이 있는 경우, 이동 번호 표시. 없는 경우, 게임 시작으로 표시
        const desc = move ? `Go to move #${move}` : "Go to game start";
        return (
            <li key={move}>
                {/* 이동 버튼 */}
                <button onClick={() => jumpTo(move)}>{desc}</button>
            </li>
        );
    });

    return (
        <div>
            <div className="game">
                <div className="game-board">
                    {/* Board 컴포넌트 */}
                    <Board
                        xIsNext={xIsNext}
                        boxes={currentBoxes}
                        onPlay={handlePlay}
                        playerOrder={playerOrder}
                    />
                </div>
                <div className="game-info">
                    <ol>{moves}</ol>
                    {/* 이동 기록 표시 */}
                </div>
            </div>
        </div>
    );
};

export default Game;