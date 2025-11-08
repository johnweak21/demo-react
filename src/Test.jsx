import React, { useState } from 'react';

// 假設這是你的聯絡人資訊
const contact = {
  name: "John Doe",
  phone: "+1234567890",
  email: "johndoe@example.com"
};

function Test() {
  // 控制模態框顯示與否的狀態
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 顯示模態框
  const openModal = () => setIsModalOpen(true);

  // 關閉模態框
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <h1>聯絡人資訊</h1>
      
      {/* 聯絡人按鈕，點擊後顯示模態框 */}
      <button onClick={openModal}>查看聯絡人資訊</button>
      
      {/* 如果模態框是開啟的，就顯示模態框 */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>{contact.name}</h2>
            <p><strong>電話:</strong> {contact.phone}</p>
            <p><strong>電子郵件:</strong> {contact.email}</p>
            
            {/* 關閉模態框的按鈕 */}
            <button onClick={closeModal}>關閉</button>
          </div>
        </div>
      )}
      
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
    </div>
  );
}

export default Test;