import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // 引入 Bootstrap 樣式

// 定義所有商品資料
const productData = [
  {
    name: "南方松",
    image: "/img/南方松.jpg",
  },
  {
    name: "南洋櫸木木樑",
    image: "/img/南洋櫸木木樑.jpg",
  },
  {
    name: "塑木",
    image: "/img/塑木.jpg",
  },
  {
    name: "放射松木板",
    image: "/img/放射松木板.jpg",
  },
  {
    name: "日本檜木壁板",
    image: "/img/日本檜木壁板.jpg",
  },
  {
    name: "板模角材",
    image: "/img/板模角材.jpg",
  },
   {
    name: "夾板",
    image: "/img/夾板.jpg",
  },
     {
    name: "鐵杉角材",
    image: "/img/鐵杉角材.jpg",
  },
     {
    name: "美國舊枕木",
    image: "/img/美國舊枕木.jpg",
  },
     {
    name: "歐洲紅松",
    image: "/img/歐洲紅松.jpg",
  },
];

function CreateForm() {
  // 定義 state 用於存儲用戶的搜索關鍵字、所選擇的商品和顯示的商品數量
  const [search, setSearch] = useState("");
  const [selectedProducts, setSelectedProducts] = useState([]); // 用來儲存所有符合條件的商品
  const [itemCount, setItemCount] = useState(7); // 控制顯示的商品數量，默認顯示三個

  // 處理搜索框的輸入
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  // 處理搜索按鈕的點擊
  const handleSearchClick = () => {
    // 確保搜索字串已經去除多餘的空格並轉為小寫
    const searchTerm = search.trim().toLowerCase();

    if (searchTerm === "") {
      alert("請輸入商品名稱"); // 空字串直接提示
      setSelectedProducts([]); // 清空之前搜尋結果
      return;
    }

    // 使用正則表達式來對每個商品名稱進行匹配
    const foundProducts = productData.filter(
      (product) => product.name.toLowerCase().includes(searchTerm) // 不區分大小寫的過濾
    );

    if (foundProducts.length > 0) {
      setSelectedProducts(foundProducts); // 找到商品後顯示商品彈窗
    } else {
      alert("沒有找到符合條件的商品"); // 如果未找到商品，顯示提示
      setSelectedProducts([]); // 清空之前的搜尋結果
    }
  };

  // 處理滑動條改變顯示數量
  const handleSliderChange = (event) => {
    setItemCount(Number(event.target.value)); // 設定顯示商品的數量
  };

  // 關閉模態框
  const closeModal = () => {
    setSelectedProducts([]); // 清空選擇的商品，隱藏模態框
  };

  return (
    <div className="container" style={{ width: "250px", textAlign: "center" }}>
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

      {/* 顯示滑動條來控制顯示商品數量 */}
      {selectedProducts.length > 0 && (
        <div className="mb-4">
          <label>顯示商品數量: {itemCount}</label>
          <input
            type="range"
            className="form-range"
            min="1"
            max={selectedProducts.length}
            value={itemCount}
            onChange={handleSliderChange} // 當滑動條改變時更新顯示商品數量
          />
        </div>
      )}

      {/* 當選擇的商品不為空，顯示模態框 */}
      {selectedProducts.length > 0 && (
        <div
          className="modal fade show"
          style={{
            display: "block",
            backgroundColor: "rgba(0,0,0,0.5)",
          }} // 顯示模態框並加上半透明背景
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
              <div
                className="modal-body"
                style={{
                  maxHeight: "400px", // 設置最大高度
                  overflowY: "auto", // 讓內容可垂直滾動
                }}
              >
                {/* 顯示選擇數量的商品 */}
                {selectedProducts.slice(0, itemCount).map((product, index) => (
                  <div key={index} className="mb-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="img-fluid mb-3"
                    />
                    <h5>{product.name}</h5>
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

export default CreateForm;
