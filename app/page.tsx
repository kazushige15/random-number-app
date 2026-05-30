'use client'; // ボタンのクリックなどを動かすために必要です

import { useState } from 'react';

export default function Home() {
  // useState<string | number> と書くことで、「文字列」も「数値」も両方入れてOKにします
  const [number, setNumber] = useState<string | number>('？');

  // ボタンを押したときの処理
  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 101);
    setNumber(randomNumber); // これで数字を入れてもエラーになりません
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 font-sans">
      
      {/* 大きな数字 */}
      <div className="text-[120px] font-bold text-gray-800 mb-10 h-[150px] flex items-center justify-center">
        {number}
      </div>

      {/* ボタン */}
      <button
        onClick={generateRandomNumber}
        className="text-2xl px-10 py-4 bg-blue-600 text-white rounded-full font-semibold shadow-md hover:bg-blue-700 active:scale-95 transition-all duration-150"
      >
        数字を出す
      </button>

    </div>
  );
}