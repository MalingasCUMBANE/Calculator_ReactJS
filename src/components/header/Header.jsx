import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

const { Header } = Layout;

const MyHeader = () => {
  return (
    <Header
      style={{
        background: "#fff",
        padding: "0 16px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* You can add your logo or any other header content here */}

      <Menu
        mode="horizontal"
        defaultSelectedKeys={["home"]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="home" icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="products" icon={<AppstoreOutlined />}>
          Products
        </Menu.Item>
        <Menu.Item key="cart" icon={<ShoppingCartOutlined />}>
          Cart
        </Menu.Item>
        {/* You can add more menu items as needed */}
      </Menu>
    </Header>
  );
};

export default MyHeader;
