import { Button, Col, Row } from "antd";
import React from "react";

function Operationbuttons({ handleOperationClick }) {
  const operations = ["+", "-", "*", "/"];

  return (
    <div>
      <Row gutter={[8, 8]}>
        {operations.map((operation) => (
          <Col key={operation}>
            <Button onClick={() => handleOperationClick(operation)}>
              {operation}
            </Button>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Operationbuttons;
