import React, { useState, useEffect } from "react";
import "./App"; // 匯入 CSS 檔（裡面包含 back-to-top 按鈕的樣式）

const BackToTopButton = () => {
  // 用 useState 建立狀態 isVisible，判斷按鈕是否顯示，預設隱藏(false)
  const [isVisible, setIsVisible] = useState(false);

  // useEffect 用來設定元件掛載時的副作用，這裡是監聽滾動事件
  useEffect(() => {
    // 定義滾動時的處理函式
    const handleScroll = () => {
      // 當視窗垂直滾動位置大於300像素時，顯示按鈕
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        // 否則隱藏按鈕
        setIsVisible(false);
      }
    };

    // 加入 scroll 事件監聽器，視窗滾動時觸發 handleScroll
    window.addEventListener("scroll", handleScroll);

    // useEffect 回傳函式，在元件卸載時移除事件監聽器，避免記憶體洩漏
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // 空陣列代表此 effect 只在元件掛載和卸載時執行一次

  // 按鈕被點擊時，執行此函式讓頁面平滑滾動回頂部
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,             // 滾動位置設定為頁面頂部
      behavior: "smooth"  // 平滑滾動動畫效果
    });
  };

  return (
    <>
      {/* 只有當 isVisible 為 true 時，才顯示回到頂部按鈕 */}
      {isVisible && (
        <button className="back-to-top" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </>
  );
};

export default BackToTopButton;
