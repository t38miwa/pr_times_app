"use client";
import React, { useState } from 'react';

const getSingleItem = async () => {
  const response = await fetch("https://hackathon.stg-prtimes.net/api/companies", {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Authorization": `Bearer 37aaaf2e5398eec3521ca0408f9e0817999d81e014c000a3e65b55e6a807060c`
    },
    cache: "no-store"
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const jsonData = await response.json();
  const singleItem = jsonData;

  return singleItem;
};

const Result = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleClick = async () => {
    try {
      const result = await getSingleItem();
      setData(result); // データをstateに保存
    } catch (err) {
      setError(err.message); // エラーメッセージをstateに保存
    }
  };

  return (
    <div className="result-container">
      <h1>結果</h1>
      <h1>ここでprtimesmagazineで似た経験をしている企業の記事を表示+予測データを表示</h1>
      <button onClick={handleClick}>結果を表示する</button>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {data && (
        <div>
          <pre>{JSON.stringify(data, null, 2)}</pre> {/* 取得したデータをフォーマットして表示 */}
        </div>
      )}
    </div>
  );
}

export default Result;
