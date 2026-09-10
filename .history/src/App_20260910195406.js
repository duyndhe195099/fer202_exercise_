import React, { useState, useEffect } from 'react';
// IMPORT file ExESP6.js từ thư mục slot1
import { student1, evaluatePerformance } from './slot1/ExESP6'; 
import './App.css';

function App() {
  const [evaluation, setEvaluation] = useState("Đang đánh giá học lực...");

  // 4. Use Destructuring: Trích xuất tên và tuổi từ object student1 đã import
  const { name, age, scores } = student1;

  // Tính điểm trung bình
  const avgScore = student1.calculateAverage();

  // 6. Use Array Methods: Xử lý mảng điểm
  const passingScores = scores.filter(score => score >= 8); // Lọc điểm đậu
  const processedScores = scores.map(score => score * 10);  // Quy đổi hệ 100

  // Chạy Promise khi component load xong
  useEffect(() => {
    evaluatePerformance(avgScore).then((result) => {
      setEvaluation(result);
    });
  }, [avgScore]);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center' }}>Kết Quả Import Từ ExESP6.js</h2>
      
      <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', backgroundColor: '#f4f6f8' }}>
        <h3>Thông tin sinh viên (Destructuring)</h3>
        <p><strong>Họ và tên:</strong> {name}</p>
        <p><strong>Tuổi:</strong> {age}</p>
        
        <h3>Bảng điểm (Spread Operator)</h3>
        <p><strong>Tất cả điểm:</strong> {scores.join(", ")}</p>
        
        <h3>Xử lý mảng (Array Methods)</h3>
        <ul>
          <li><strong>Điểm{">="} 8 (filter):</strong> {passingScores.join(", ")}</li>
          <li><strong>Điểm hệ 100 (map):</strong> {processedScores.join(", ")}</li>
          <li><strong>Điểm trung bình (reduce):</strong> {avgScore.toFixed(2)}</li>
        </ul>

        <h3>Kết quả đánh giá (Promise)</h3>
        <p style={{ 
            padding: '10px', 
            backgroundColor: evaluation.includes("Đang đánh giá") ? '#fff3cd' : '#d1e7dd',
            color: evaluation.includes("Đang đánh giá") ? '#856404' : '#0f5132',
            borderRadius: '5px',
            fontWeight: 'bold'
        }}>
          {evaluation}
        </p>
      </div>
    </div>
  );
}

export default App;