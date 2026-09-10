// 1. Create a Person class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Xin chào, tôi tên là ${this.name} và tôi ${this.age} tuổi.`);
  }
}

// 2. Create a Student class that extends Person
class Student extends Person {
  constructor(name, age, scores = []) {
    super(name, age); // Gọi constructor của class cha (Person)
    this.scores = scores;
  }

  // 6. Use Array Methods: reduce() to calculate average score
  calculateAverage() {
    if (this.scores.length === 0) return 0;
    const total = this.scores.reduce((sum, score) => sum + score, 0);
    return total / this.scores.length;
  }

  // Display full student information
  displayInfo() {
    this.introduce();
    console.log(`Bảng điểm: ${this.scores.join(", ")}`);
    console.log(`Điểm trung bình: ${this.calculateAverage().toFixed(2)}`);
  }
}

// ==========================================
// THỰC THI VÀ ÁP DỤNG CÁC TÍNH NĂNG ES6 KHÁC
// ==========================================

// 3. Use Rest Parameter: function accepts multiple scores and returns an array
const createScores = (...scores) => {
  return scores;
};

// Khởi tạo data nghiệm
const initialScores = createScores(7, 8, 7.5);
const student1 = new Student("Nguyen Van A", 20, initialScores);

console.log("--- THÔNG TIN SINH VIÊN BАН ĐẦU ---");
student1.displayInfo();

// 4. Use Destructuring: Extract name and age from object
const { name, age } = student1;
console.log(`\n[Destructuring] Trích xuất - Tên: ${name}, Tuổi: ${age}`);

// 5. Use Spread Operator: Merge new scores into existing list
const newScores = [9, 10];
student1.scores = [...student1.scores, ...newScores];
console.log(`\n[Spread Operator] Bảng điểm sau khi thêm điểm mới:`, student1.scores);

// 6. Use Array Methods: filter() and map()
// - filter(): Lọc các điểm qua môn (ví dụ: >= 8)
const passingScores = student1.scores.filter(score => score >= 8);
console.log(`[Array filter] Các điểm >= 8:`, passingScores);

// - map(): Xử lý data (ví dụ: nhân đôi hệ số điểm để xem điểm quy đổi)
const processedScores = student1.scores.map(score => score * 10);
console.log(`[Array map] Điểm quy đổi thang 100:`, processedScores);

// 7. Use Promise: Simulate asynchronous academic evaluation
const evaluatePerformance = (averageScore) => {
  return new Promise((resolve, reject) => {
    console.log("\nĐang xử lý đánh giá học lực (Bất đồng bộ)...");
    
    // Giả lập độ trễ của server mất 1.5 giây
    setTimeout(() => {
      if (averageScore >= 8) {
        resolve("Excellent Student");
      } else {
        resolve("Need Improvement");
      }
    }, 1500); 
  });
};

// Chạy Promise đánh giá học lực
const finalAverage = student1.calculateAverage();
evaluatePerformance(finalAverage)
  .then((result) => {
    console.log(`[Promise Result] Kết quả đánh giá: ${result}`);
  })
  .catch((error) => {
    console.error(`[Promise Error] Đã xảy ra lỗi: ${error}`);
  });