import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import GuideBar from "./GuideBar";
import CreateForm from "./CreateForm";

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
      <div className="container">
        <h1 className="display-5 text-light text-center fw-bold treesell">
          各式木材販售
        </h1>
        <GuideBar></GuideBar>
        <CreateForm></CreateForm>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 text-center d-flex flex-column justify-content-center align-items-center">
              <img className="custom-border img-fluid" src="/img/南方松.jpg" />
              <h1 className="display-6 text-danger ProductName">南方松</h1>
            </div>
            <div className="col-12 col-sm-6 col-md-4 text-center d-flex flex-column justify-content-center align-items-center">
              <img
                className="custom-border img-fluid"
                src="/img/南洋櫸木木樑.jpg"
              />
              <h1 className="display-6 text-danger ProductName">
                南洋櫸木木樑
              </h1>
            </div>
            <div className="col-12 col-sm-6 col-md-4 text-center d-flex flex-column justify-content-center align-items-center">
              <img className="custom-border img-fluid" src="/img/塑木.jpg" />
              <h1 className="display-6 text-danger ProductName">塑木</h1>
            </div>
          </div>
          <br></br>
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 text-center d-flex flex-column justify-content-center align-items-center">
              <img
                className="custom-border img-fluid"
                src="/img/放射松木板.jpg"
              />
              <h1 className="display-6 text-danger ProductName">放射松木板</h1>
            </div>
            <div className="col-12 col-sm-6 col-md-4 text-center d-flex flex-column justify-content-center align-items-center">
              <img
                className="custom-border img-fluid"
                src="/img/日本檜木壁板.jpg"
              />
              <h1 className="display-6 text-danger ProductName">
                日本檜木壁板
              </h1>
            </div>
            <div className="col-12 col-sm-6 col-md-4 text-center d-flex flex-column justify-content-center align-items-center">
              <img
                className="custom-border img-fluid"
                src="/img/板模角材.jpg"
              />
              <h1 className="display-6 text-danger ProductName">板模角材</h1>
            </div>
            <div className="col-12 col-sm-6 col-md-4 text-center d-flex flex-column justify-content-center align-items-center">
              <img className="custom-border img-fluid" src="/img/夾板.jpg" />
              <h1 className="display-6 text-danger ProductName">夾板</h1>
            </div>
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
