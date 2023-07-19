import React from "react";
import { Card } from "antd";

function DisplayScreen({ displayValue }) {
  return (
    <div>
      
      <Card
        style={{
          backgroundColor: "#f0f0f0",
          textAlign: "right",
          height: "100px",
          fontSize: "34px",
          overflow: "hidden",
        }}
      >
        {displayValue}
      </Card>
    </div>
  );
}

export default DisplayScreen;
