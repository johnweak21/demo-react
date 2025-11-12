import React, { useState, useEffect } from "react";

const BackToTopButton = () => {
  // 狀態：用來控制按鈕是否顯示
  const [isVisible, setIsVisible] = useState(false);

  // useEffect：監聽滾動事件
  useEffect(() => {
    // 每次滾動頁面都執行這個函式
    const handleScroll = () => {
      // 當滾動高度超過 300px，就顯示按鈕
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // 綁定滾動事件監聽器
    window.addEventListener("scroll", handleScroll);

    // 離開元件時移除監聽，避免記憶體洩漏
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // [] 代表只在第一次渲染時執行

  // 點擊按鈕回到頂部
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,            // 回到頂部位置（0）
      behavior: "smooth" // 使用平滑滾動效果
    });
  };

  return (
    <>
      {/* 當 isVisible 為 true 時才顯示按鈕 */}
      {isVisible && (
        <button
          onClick={scrollToTop} // 點擊執行 scrollToTop 函式
          style={{
            position: "fixed",       // 固定位置（不會隨頁面移動）
            bottom: "40px",          // 距離底部 40px
            right: "40px",           // 距離右邊 40px
            padding: "10px 15px",    // 內距
            fontSize: "16px",        // 字體大小
            borderRadius: "50%",     // 圓形按鈕
            border: "none",          // 移除邊框
            backgroundColor: "#333", // 背景顏色
            color: "#fff",           // 文字顏色
            cursor: "pointer",       // 滑鼠移上顯示手型
            boxShadow: "0 4px 8px rgba(0,0,0,0.3)", // 陰影效果
          }}
        >
          ↑ {/* 按鈕顯示箭頭符號 */}
        </button>
      )}
    </>
  );
};

export default BackToTopButton;