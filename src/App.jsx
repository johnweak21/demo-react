import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import GuideBar from "./GuideBar";
import CreateForm from "./CreateForm";
import BackToTopButton from "./BackToTopButton";

const contact = {
  name: "吳先生",
  phone: "+1234567890",
  email: "sirwu@example.com",
};

function App() {
  // 控制模態框顯示與否的狀態
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 放大圖片 URL 狀態
  const [selectedImage, setSelectedImage] = useState(null);

  // 點擊圖片放大
  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  // 關閉放大視窗
  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="container">
        <h1 className="display-5 text-light text-center fw-bold treesell">
          東毅欣木材行
        </h1>
        <GuideBar />
        <CreateForm />
        <BackToTopButton />

        <div className="container">
          <div className="row">
            {/* 第一排圖片 */}
            <div
              className="col-12 col-sm-6 col-md-4 text-center d-flex flex-column justify-content-center align-items-center"
              onClick={() => handleImageClick("/img/南方松.jpg")}
              style={{ cursor: "pointer" }}
            >
              <img className="custom-border img-fluid" src="/img/南方松.jpg" alt="南方松" />
              <h1 className="display-6 text-danger ProductName">南方松</h1>
            </div>

            <div
              className="col-12 col-sm-6 col-md-4 text-center d-flex flex-column justify-content-center align-items-center"
              onClick={() => handleImageClick("/img/南洋櫸木木樑.jpg")}
              style={{ cursor: "pointer" }}
            >
              <img
                className="custom-border img-fluid"
                src="/img/南洋櫸木木樑.jpg"
                alt="南洋櫸木木樑"
              />
              <h1 className="display-6 text-danger ProductName">南洋櫸木木樑</h1>
            </div>

            <div
              className="col-12 col-sm-6 col-md-4 text-center d-flex flex-column justify-content-center align-items-center"
              onClick={() => handleImageClick("/img/塑木.jpg")}
              style={{ cursor: "pointer" }}
            >
              <img className="custom-border img-fluid" src="/img/塑木.jpg" alt="塑木" />
              <h1 className="display-6 text-danger ProductName">塑木</h1>
            </div>
          </div>

          <br />

          <div className="row">
            {/* 第二排圖片 */}
            <div
              className="col-12 col-sm-6 col-md-4 text-center d-flex flex-column justify-content-center align-items-center"
              onClick={() => handleImageClick("/img/放射松木板.jpg")}
              style={{ cursor: "pointer" }}
            >
              <img
                className="custom-border img-fluid"
                src="/img/放射松木板.jpg"
                alt="放射松木板"
              />
              <h1 className="display-6 text-danger ProductName">放射松木板</h1>
            </div>

            <div
              className="col-12 col-sm-6 col-md-4 text-center d-flex flex-column justify-content-center align-items-center"
              onClick={() => handleImageClick("/img/日本檜木壁板.jpg")}
              style={{ cursor: "pointer" }}
            >
              <img
                className="custom-border img-fluid"
                src="/img/日本檜木壁板.jpg"
                alt="日本檜木壁板"
              />
              <h1 className="display-6 text-danger ProductName">日本檜木壁板</h1>
            </div>

            <div
              className="col-12 col-sm-6 col-md-4 text-center d-flex flex-column justify-content-center align-items-center"
              onClick={() => handleImageClick("/img/板模角材.jpg")}
              style={{ cursor: "pointer" }}
            >
              <img
                className="custom-border img-fluid"
                src="/img/板模角材.jpg"
                alt="板模角材"
              />
              <h1 className="display-6 text-danger ProductName">板模角材</h1>
            </div>

            <div
              className="col-12 col-sm-6 col-md-4 text-center d-flex flex-column justify-content-center align-items-center"
              onClick={() => handleImageClick("/img/夾板.jpg")}
              style={{ cursor: "pointer" }}
            >
              <img className="custom-border img-fluid" src="/img/夾板.jpg" alt="夾板" />
              <h1 className="display-6 text-danger ProductName">夾板</h1>
            </div>

            <div
              className="col-12 col-sm-6 col-md-4 text-center d-flex flex-column justify-content-center align-items-center"
              onClick={() => handleImageClick("/img/鐵杉角材.jpg")}
              style={{ cursor: "pointer" }}
            >
              <img className="custom-border img-fluid" src="/img/鐵杉角材.jpg" alt="鐵杉角材" />
              <h1 className="display-6 text-danger ProductName">鐵杉角材</h1>
            </div>

            <div
              className="col-12 col-sm-6 col-md-4 text-center d-flex flex-column justify-content-center align-items-center"
              onClick={() => handleImageClick("/img/美國舊枕木.jpg")}
              style={{ cursor: "pointer" }}
            >
              <img className="custom-border img-fluid" src="/img/美國舊枕木.jpg" alt="美國舊枕木" />
              <h1 className="display-6 text-danger ProductName">美國舊枕木</h1>
            </div>

            <div
              className="col-12 col-sm-6 col-md-4 text-center d-flex flex-column justify-content-center align-items-center"
              onClick={() => handleImageClick("/img/歐洲紅松.jpg")}
              style={{ cursor: "pointer" }}
            >
              <img className="custom-border img-fluid" src="/img/歐洲紅松.jpg" alt="歐洲紅松" />
              <h1 className="display-6 text-danger ProductName">歐洲紅松</h1>
            </div>
          </div>
        </div>
      </div>

      {/* 放大圖片的 Lightbox */}
      {selectedImage && (
        <div
          className="modal"
          onClick={closeLightbox}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1050,
            cursor: "pointer",
          }}
        >
          <img
            src={selectedImage}
            alt="放大圖"
            style={{
              maxHeight: "90%",
              maxWidth: "90%",
              boxShadow: "0 0 15px rgba(255,255,255,0.5)",
              cursor: "auto",
            }}
            onClick={(e) => e.stopPropagation()} // 防止點擊圖片本身時關閉視窗
          />
          <button
            onClick={closeLightbox}
            style={{
              position: "fixed",
              top: 30,
              right: 30,
              fontSize: "2rem",
              background: "transparent",
              border: "none",
              color: "white",
              cursor: "pointer",
              userSelect: "none",
            }}
            aria-label="關閉放大視窗"
          >
            ×
          </button>
        </div>
      )}

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
