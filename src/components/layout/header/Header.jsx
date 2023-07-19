import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";

const { Header } = Layout;

const HeaderPage = () => {
  return (
    <Header
      style={{
        background: "#fff",
        padding: "0 16px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      LOGO
    </Header>
  );
};

export default HeaderPage;
