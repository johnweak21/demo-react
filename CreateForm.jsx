import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // 引入 Bootstrap 樣式

// 定義所有商品資料
const productData = [
  {
    name: "南方松",
    image: "/img/南方松.jpg",
    price: "100/支",
  },
  {
    name: "南洋櫸木木樑",
    image: "/img/南洋櫸木木樑.jpg",
    price: "200/支",
  },
  {
    name: "塑木",
    image: "/img/塑木.jpg",
    price: "150/支",
  },
  {
    name: "放射松木板",
    image: "/img/放射松木板.jpg",
    price: "50/支",
  },
  {
    name: "日本檜木壁板",
    image: "/img/日本檜木壁板.jpg",
    price: "80/支",
  },
  {
    name: "板模角材",
    image: "/img/板模角材.jpg",
    price: "250/支",
  },
];

function CreateForm() {
  // 定義 state 用於存儲用戶的搜索關鍵字和所選擇的商品
  const [search, setSearch] = useState(""); 
  const [selectedProduct, setSelectedProduct] = useState(null);

  // 處理搜索框的輸入
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  // 處理搜索按鈕的點擊
  const handleSearchClick = () => {
    const foundProduct = productData.find((product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) // 不區分大小寫的過濾
    );

    if (foundProduct) {
      setSelectedProduct(foundProduct); // 找到商品後顯示商品彈窗
    } else {
      alert("沒有找到商品"); // 如果未找到商品，顯示提示
    }
  };

  // 關閉模態框
  const closeModal = () => {
    setSelectedProduct(null); // 清空 selectedProduct，隱藏模態框
  };

  return (
    <div className="container" style={{ width: "250px", textAlign:"center" }}>
      {/* 搜索框：讓用戶輸入商品名稱 */}
      <div className="input-group mb-4">
        <input
          type="text"
          className="form-control border border-primary"
          placeholder="輸入商品名稱"
          value={search}
          onChange={handleSearchChange} // 綁定輸入框的變更事件
        />
        <button
          className="btn btn-primary"
          onClick={handleSearchClick} // 點擊搜尋按鈕時執行
        >
          搜尋
        </button>
      </div>

      {/* 當選擇的商品不為 null 時顯示模態框 */}
      {selectedProduct && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }} // 顯示模態框並加上半透明背景
          tabIndex="-1"
          role="dialog"
          aria-labelledby="productModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="productModalLabel">
                  {selectedProduct.name}
                </h5>
              </div>
              <div className="modal-body">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="img-fluid mb-3" // 使圖片自適應，並增加下邊距
                />
                <p>單價: {selectedProduct.price}</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeModal} // 點擊關閉按鈕關閉模態框
                >
                  關閉
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateForm;
