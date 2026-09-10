import React, { useState, useEffect } from 'react';
import './App.css'; // Giữ lại import CSS mặc định để giao diện gọn gàng hơn

// 1. Create a Person class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// 2. Create a Student class that extends Person
class Student extends Person {
  constructor(name, age, scores = []) {
    super(name, age);
    this.scores = scores;
  }

  calculateAverage() {
    if (this.scores.length === 0) return 0;
    const total = this.scores.reduce((sum, score) => sum + score, 0);
    return total / this.scores.length;
  }
}

// 3. Use Rest Parameter
const createScores = (...scores) => {
  return scores;
};

function App() {
  // Khởi tạo State để lưu trữ dữ liệu hiển thị lên UI
  const [studentInfo, setStudentInfo] = useState(null);
  const [evaluation, setEvaluation] = useState("Đang đánh giá học lực...");

  useEffect(() => {
    // Khởi tạo data ban đầu
    const initialScores = createScores(7, 8, 7.5);
    const student1 = new Student("Nguyễn Văn A", 20, initialScores);

    // 5. Use Spread Operator: Thêm điểm mới
    const newScores = [9, 10];
    student1.scores = [...student1.scores, ...newScores];

    // 6. Use Array Methods
    const passingScores = student1.scores.filter(score => score >= 8);
    const processedScores = student1.scores.map(score => score * 10);
    const avgScore = student1.calculateAverage();

    // Lưu toàn bộ dữ liệu vào State để render
    setStudentInfo({
      studentObj: student1,
      passingScores,
      processedScores,
      avgScore: avgScore.toFixed(2)
    });

    // 7. Use Promise: Xử lý bất đồng bộ
    const evaluatePerformance = (averageScore) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          if (averageScore >= 8) {
            resolve("Excellent Student (Sinh viên xuất sắc)");
          } else {
            resolve("Need Improvement (Cần cố gắng thêm)");
          }
        }, 1500); // Giả lập chờ 1.5 giây
      });
    };

    evaluatePerformance(avgScore).then((result) => {
      setEvaluation(result); // Cập nhật state khi Promise hoàn thành
    });

  }, []); // Cặp ngoặc vuông rỗng đảm bảo code này chỉ chạy 1 lần khi load trang

  // Hiển thị màn hình chờ nếu dữ liệu chưa sẵn sàng
  if (!studentInfo) return <div style={{ padding: '20px' }}>Đang tải dữ liệu...</div>;

  // 4. Use Destructuring: Trích xuất dữ liệu từ object trong state để hiển thị
  const { name, age, scores } = studentInfo.studentObj;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center' }}>Hệ Thống Quản Lý Sinh Viên (ES6 Demo)</h2>
      
      <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
        <h3>Thông tin cá nhân (Destructuring)</h3>
        <p><strong>Họ và tên:</strong> {name}</p>
        <p><strong>Tuổi:</strong> {age}</p>
        
        <h3>Bảng điểm (Spread Operator)</h3>
        <p><strong>Tất cả điểm:</strong> {scores.join(", ")}</p>
        
        <h3>Phân tích dữ liệu (Array Methods)</h3>
        <ul>
          <li><strong>Điểm{ >= }8 (filter):</strong> {studentInfo.passingScores.join(", ")}</li>
          <li><strong>Điểm hệ 100 (map):</strong> {studentInfo.processedScores.join(", ")}</li>
          <li><strong>Điểm trung bình (reduce):</strong> {studentInfo.avgScore}</li>
        </ul>

        <h3>Đánh giá học lực (Promise)</h3>
        <p style={{ 
            padding: '10px', 
            backgroundColor: evaluation.includes("Đang đánh giá") ? '#fff3cd' : '#d1e7dd',
            color: evaluation.includes("Đang đánh giá") ? '#856404' : '#0f5132',
            borderRadius: '5px',
            fontWeight: 'bold'
        }}>
          Trạng thái: {evaluation}
        </p>
      </div>
    </div>
  );
}

export default App;