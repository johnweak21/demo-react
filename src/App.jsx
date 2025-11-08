import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

const contact = {
  name: "吳先生",
  phone: "+1234567890",
  email: "sirwu@example.com",
};
function App() {
  // 控制模態框顯示與否的狀態
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 顯示模態框
  const openModal = () => setIsModalOpen(true);

  // 關閉模態框
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <h1 className="treesell">各式木材販售</h1>
      <div className="GuideBar">
        {/*<button className="Btn">首頁</button>*/}
        {/*<button className="Btn">購物車</button>*/}
        <button className="Btn" onClick={openModal}>
          聯絡人
        </button>
        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <h2>{contact.name}</h2>
              <p>
                <strong>電話:</strong> {contact.phone}
              </p>
              <p>
                <strong>電子郵件:</strong> {contact.email}
              </p>

              {/* 關閉模態框的按鈕 */}
              <button onClick={closeModal}>關閉</button>
            </div>
          </div>
        )}
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <img className="img" src="/img/南方松.jpg" />
            <h1 className="ProductName">南方松 單價:100/支</h1>
          </div>
          <div className="col">
            <img className="img" src="/img/南洋櫸木木樑.jpg" />
            <h1 className="ProductName">南洋櫸木木樑 單價:200/支</h1>
          </div>
          <div className="col">
            <img className="img" src="/img/塑木.jpg" />
            <h1 className="ProductName">塑木 單價:150/支</h1>
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="col">
            <img className="img" src="/img/放射松木板.jpg" />
            <h1 className="ProductName">放射松木板 單價:50/支</h1>
          </div>
          <div className="col">
            <img className="img" src="/img/日本檜木壁板.jpg" />
            <h1 className="ProductName">日本檜木壁板 單價:80/支</h1>
          </div>
          <div className="col">
            <img className="img" src="/img/板模角材.jpg" />
            <h1 className="ProductName">板模角材 單價:250/支</h1>
          </div>
        </div>
      </div>

      {/* 添加一些樣式 */}
      <style>
        {`
          .modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .modal-content {
            background-color: white;
            color:black;
            padding: 20px;
            border-radius: 5px;
            width: 300px;
            text-align: center;
          }
          .modal button {
            margin-top: 20px;
            padding: 8px 16px;
            background-color: #007bff;
            color: white;
            border: none;
            cursor: pointer;
          }
          .modal button:hover {
            background-color: #0056b3;
          }
        `}
      </style>
    </>
  );
}

export default App;
