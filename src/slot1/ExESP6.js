import React, { useEffect, useState } from 'react';

// 1. Create a Person class
// Class cung cấp cú pháp gọn gàng để tạo đối tượng và triển khai OOP trong JavaScript[cite: 1].
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  introduce() {
    return `Hi, I am ${this.name}, ${this.age} years old.`;
  }
}

// 2. Create a Student class that extends Person
// Class hỗ trợ tính kế thừa (Inheritance), cho phép tạo lớp mới dựa trên lớp đã có[cite: 1].
class Student extends Person {
  constructor(name, age, scores = []) {
    super(name, age);
    this.scores = scores;
  }

  calculateAverage() {
    if (this.scores.length === 0) return 0;
    // 6. Use Array Methods: reduce() để tính tổng điểm
    const total = this.scores.reduce((sum, score) => sum + score, 0);
    return total / this.scores.length;
  }

  displayInfo() {
    return `${this.introduce()} My average score is ${this.calculateAverage().toFixed(2)}.`;
  }
}

// 3. Use Rest Parameter
// Rest parameter cho phép hàm nhận một số lượng đối số không xác định dưới dạng một mảng[cite: 1].
const createScores = (...scores) => {
  return scores;
};

const ExESP6 = () => {
  const [evaluation, setEvaluation] = useState("Đang đánh giá...");

  useEffect(() => {
    // Khởi tạo điểm sử dụng Rest Parameter
    const initialScores = createScores(8, 9, 10);
    
    // Tạo đối tượng Student
    const student = new Student("Duy", 21, initialScores);

    // 5. Use Spread Operator
    // Gộp mảng điểm mới vào danh sách điểm hiện tại
    const newScores = [7, 8.5];
    student.scores = [...student.scores, ...newScores];

    // 4. Use Destructuring
    // Destructuring cho phép trích xuất giá trị từ mảng hoặc đối tượng và gán cho biến một cách ngắn gọn[cite: 1].
    const { name, age } = student;
    console.log(`[Destructuring] Name: ${name}, Age: ${age}`);

    // 6. Use Array Methods: filter() và map()
    const passingScores = student.scores.filter(score => score >= 5);
    console.log("[Array Method - Filter] Passing scores:", passingScores);

    const processedScores = student.scores.map(score => `Điểm của sinh viên: ${score}`);
    console.log("[Array Method - Map] Processed scores:", processedScores);

    // In thông tin đầy đủ của sinh viên
    console.log(student.displayInfo());

    // 7. Use Promise
    // Promise xử lý các thao tác bất đồng bộ (asynchronous operations) trong JavaScript[cite: 1].
    const evaluateStudent = (average) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          if (average >= 8) {
            resolve("Excellent Student");
          } else {
            resolve("Need Improvement");
          }
        }, 1500); // Giả lập thời gian đánh giá mất 1.5 giây
      });
    };

    // Thực thi Promise
    evaluateStudent(student.calculateAverage()).then((result) => {
      setEvaluation(result);
    });

  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Student Management Program (ES6)</h2>
      <p><strong>Lưu ý:</strong> Hãy mở <em>Console (F12)</em> trên trình duyệt để xem các kết quả được in ra từ Destructuring và Array Methods.</p>
      <div style={{ padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '5px' }}>
        <h3>Kết quả đánh giá Promise:</h3>
        <p style={{ color: evaluation === 'Excellent Student' ? 'green' : 'red', fontWeight: 'bold' }}>
          {evaluation}
        </p>
      </div>
    </div>
  );
};

export default ExESP6;