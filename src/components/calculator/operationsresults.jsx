import { Button, Col, Row } from "antd";
import React from "react";

function Operationsresults({ handleEqualOperand }) {
  const operand = ["="];

  return (
    <Row style={{backgroundColor: "red"}}>
      {operand.map((operation) => (
        <Col key={operation} style={{width: "100%"}}>
          <Button onClick={() => handleEqualOperand(operation)} block>
            {operation}
          </Button>
        </Col>
      ))}
    </Row>
  );
}

export default Operationsresults;
