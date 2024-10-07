export function calculateWinner(boxes) {
    // 승리 조합
    const lines = [
        [0, 1, 2],  // 1번째 행
        [3, 4, 5],  // 2번째 행
        [6, 7, 8],  // 3번째 행
        [0, 3, 6],  // 1번째 열
        [1, 4, 7],  // 2번째 열
        [2, 5, 8],  // 3번째 열
        [0, 4, 8],  // 1번째 대각선
        [2, 4, 6],  // 2번째 대각선
    ];

    // 승리 조합을 순회하며 승자 확인
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]; // 승리 조합의 첫 번째, 두 번째, 세 번째 요소 가져오기
        if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
            // 첫 번째 요소가 null이 아니고, 첫 번째 요소가 두 번째와 세 번째 요소와 같은 경우
            return boxes[a]; // 첫 번째 요소 반환
        }
    }
    // 승자가 없는 경우 null 반환
    return null;
}
