import React, { useEffect, useState } from 'react';


class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  introduce() {
    return `Hi, I am ${this.name}, ${this.age} years old.`;
  }
}


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

  displayInfo() {
    return `${this.introduce()} My average score is ${this.calculateAverage().toFixed(2)}.`;
  }
}


const createScores = (...scores) => {
  return scores;
};

const ExESP6 = () => {
  const [evaluation, setEvaluation] = useState("Đang đánh giá...");

  useEffect(() => {
 
    const initialScores = createScores(8, 9, 10);
    

    const student = new Student("Duy", 21, initialScores);


    const newScores = [7, 8.5];
    student.scores = [...student.scores, ...newScores];

   
    const { name, age } = student;
    console.log(`[Destructuring] Name: ${name}, Age: ${age}`);

    const passingScores = student.scores.filter(score => score >= 5);
    console.log("[Array Method - Filter] Passing scores:", passingScores);

    const processedScores = student.scores.map(score => `Điểm của sinh viên: ${score}`);
    console.log("[Array Method - Map] Processed scores:", processedScores);

   
    console.log(student.displayInfo());

   
    const evaluateStudent = (average) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          if (average >= 8) {
            resolve("Excellent Student");
          } else {
            resolve("Need Improvement");
          }
        }, 1500);
      });
    };


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
