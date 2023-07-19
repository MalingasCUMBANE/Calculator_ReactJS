import React from "react";
import "./footer.css";
import { Layout } from "antd";

const { Footer } = Layout;

function PageFooter() {
  const date = new Date();
  const year = date.getFullYear();
  const author = "Developed by Malingas Cumbane - all rights reserved ";

  return (
    <Layout>
      <Footer
        style={{
          textAlign: "center",
          position: "fixed",
          left: 0,
          bottom: 0,
          width: "100%",
        }}
      >
        {author} &copy; - {year}
      </Footer>
    </Layout>
  );
}

export default PageFooter;
