import React from 'react';

// value: X, O, null | onBoxClick: 클릭 이벤트를 처리하는 함수
const Box = ({ value, onBoxClick }) => {
    return (
        <button className="box" onClick={onBoxClick}>
            {value}
        </button>
    );
};

export default Box;