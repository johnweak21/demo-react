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

function App() {
  // 定義 state 用於存儲用戶的搜索關鍵字和所選擇的商品
  const [search, setSearch] = useState(""); 
  const [selectedProducts, setSelectedProducts] = useState([]); // 用來儲存所有符合條件的商品

  // 處理搜索框的輸入
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  // 處理搜索按鈕的點擊
  const handleSearchClick = () => {
    const foundProducts = productData.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) // 不區分大小寫的過濾
    );

    if (foundProducts.length > 0) {
      setSelectedProducts(foundProducts); // 找到商品後顯示商品彈窗
    } else {
      alert("沒有找到符合條件的商品"); // 如果未找到商品，顯示提示
      setSelectedProducts([]); // 清空之前的搜尋結果
    }
  };

  // 關閉模態框
  const closeModal = () => {
    setSelectedProducts([]); // 清空選擇的商品，隱藏模態框
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

      {/* 當選擇的商品不為空，顯示模態框 */}
      {selectedProducts.length > 0 && (
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
                  搜尋結果
                </h5>
              </div>
              <div className="modal-body">
                {/* 顯示所有符合條件的商品 */}
                {selectedProducts.map((product, index) => (
                  <div key={index} className="mb-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="img-fluid mb-3"
                    />
                    <h5>{product.name}</h5>
                    <p>單價: {product.price}</p>
                    <hr />
                  </div>
                ))}
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

export default App;
