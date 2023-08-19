import Calk from "./components/Calk.js";
import { ConfigProvider } from "antd";
import "./AllContent.scss";
function App() {
  return (
    <div className="all-content">
      <ConfigProvider
        theme={{
          token: {
            colorBgContainer: "pink",
          },
          components: {
            Button: {},
          },
        }}
      >
        <Calk />
      </ConfigProvider>
    </div>
  );
}

export default App;
