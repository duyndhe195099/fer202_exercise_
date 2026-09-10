// 1. Create a Person class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// 2. Create a Student class that extends Person
class Student extends Person {
    constructor(name, age, scores) {
        super(name, age); // Kế thừa thuộc tính từ Person
        this.scores = scores;
    }

    calculateAverage() {
        if (this.scores.length === 0) return 0;
        
        // 6. Use Array Methods: reduce() để tính tổng
        const total = this.scores.reduce((acc, curr) => acc + curr, 0);
        return total / this.scores.length;
    }

    displayInfo() {
        this.introduce();
        console.log(`Scores: ${this.scores.join(", ")}`);
        console.log(`Average Score: ${this.calculateAverage().toFixed(2)}`);
    }
}

// 3. Use Rest Parameter
const createScores = (...scores) => {
    return scores;
};

// Khởi tạo dữ liệu mẫu
const initialScores = createScores(7.5, 8.0, 9.0);
const student = new Student("Nguyễn Đình Duy", 21, initialScores);

// 4. Use Destructuring
const { name, age } = student;
console.log(`\n--- Destructuring ---`);
console.log(`Extracted Student: ${name}, Age: ${age}`);

// 5. Use Spread Operator
const newScores = [10.0, 8.5];
student.scores = [...student.scores, ...newScores];
console.log(`\n--- Spread Operator ---`);
console.log(`Updated Scores:`, student.scores);

// 6. Use Array Methods (filter, map)
console.log(`\n--- Array Methods ---`);
const passingScores = student.scores.filter(score => score >= 8.0);
console.log(`Passing Scores (>= 8):`, passingScores);

const processedScores = student.scores.map(score => `${score}đ`);
console.log(`Mapped Scores:`, processedScores);

console.log(`\n--- Full Info ---`);
student.displayInfo();

// 7. Use Promise
const evaluatePerformance = (avg) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (avg >= 8) {
                resolve("Excellent Student");
            } else {
                resolve("Need Improvement");
            }
        }, 1000); // Giả lập độ trễ 1 giây
    });
};

console.log(`\n--- Promise ---`);
evaluatePerformance(student.calculateAverage())
    .then(result => console.log(`Evaluation: ${result}`))
    .catch(err => console.error(err));