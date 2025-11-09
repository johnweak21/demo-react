import { useState } from "react";
const contact = {
  name: "吳先生",
  phone: "+1234567890",
  email: "sirwu@example.com",
};
function GuideBar() {
  // 控制模態框顯示與否的狀態
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 顯示模態框
  const openModal = () => setIsModalOpen(true);
  // 關閉模態框
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <button className="btn btn-secondary w-100" onClick={openModal}>
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
    </>
  );
}
export default GuideBar;
