import { Card, Col, Divider, Row, Typography } from "antd";
import React, { useState } from "react";
import DisplayScreen from "../../calculator/displayScreen";
import NumberButtons from "../../calculator/numberbuttons";
import Operationbuttons from "../../calculator/operationbuttons";
import Operationsresults from "../../calculator/operationsresults";

const { Text } = Typography;

function Calculator() {
  const [displayValue, setDisplayValue] = useState("");

  const handleNumberClick = (number) => {
    setDisplayValue((prevValue) => prevValue + number);
  };

  const handleOperationClick = (operation) => {
    setDisplayValue((prevValue) => prevValue + operation);
  };

  const handleEqualOperand = () => {};

  return (
    <Row justify="center" align="middle" style={{ minHeight: "50vh" }}>
      <Col>
        <Divider orientation="left">Calculator</Divider>

        <Card hoverable style={{ width: "600px", height: "100%" }}>
          <DisplayScreen displayValue={displayValue} />
          <NumberButtons handleNumberClick={handleNumberClick} />
          <Operationbuttons handleOperationClick={handleOperationClick} />
          <Operationsresults handleEqualOperand={handleEqualOperand} />
        </Card>
      </Col>
    </Row>
  );
}

export default Calculator;
