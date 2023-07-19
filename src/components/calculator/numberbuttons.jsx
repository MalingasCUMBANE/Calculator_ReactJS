import { Button, Col, Row } from "antd";
import React from "react";

function NumberButtons({ handleNumberClick }) {
  const numbers = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]];

  return (
    <div>
      {numbers.map((index, rowIndex) => (
        <Row key={rowIndex} style={{ backgroundColor: "red", display: "flex" }}>
          {index.map((number) => (
            <Col key={number} style={{ textAlign: "center" }}>
              <Button onClick={() => handleNumberClick(number)}>
                {number}
              </Button>
            </Col>
          ))}
        </Row>
      ))}
    </div>
  );
}

export default NumberButtons;
