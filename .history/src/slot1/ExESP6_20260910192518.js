import React from 'react';

// 1. Create a Person class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

// 2. Create a Student class
class Student extends Person {
    constructor(name, age, scores) {
        super(name, age);
        this.scores = scores;
    }

    calculateAverage() {
        if (this.scores.length === 0) return 0;
        // 6. Use reduce()
        const total = this.scores.reduce((acc, curr) => acc + curr, 0);
        return total / this.scores.length;
    }
}

// Khởi tạo dữ liệu bên ngoài Component
// 3. Rest Parameter
const createScores = (...scores) => scores;
const initialScores = createScores(7.5, 8.0, 9.0);

const student = new Student("Nguyễn Đình Duy", 21, initialScores);

// 4. Destructuring
const { name, age } = student;

// 5. Spread Operator
const newScores = [10.0, 8.5];
student.scores = [...student.scores, ...newScores];

// 6. filter() và map()
const passingScores = student.scores.filter(score => score >= 8.0);
const processedScores = student.scores.map(score => `${score}đ`);

// TẠO REACT COMPONENT ĐỂ HIỂN THỊ RA GIAO DIỆN (JSX)
class ExESP6 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            performance: "Đang đánh giá học lực..." // Trạng thái chờ của Promise
        };
    }

    componentDidMount() {
        // 7. Promise (Chạy sau khi giao diện đã render xong)
        const evaluatePerformance = (avg) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(avg >= 8 ? "Excellent Student (Xuất sắc)" : "Need Improvement (Cần cố gắng)");
                }, 1500);
            });
        };

        evaluatePerformance(student.calculateAverage())
            .then(result => {
                this.setState({ performance: result }); // Cập nhật lại giao diện
            });
    }

    render() {
        return (
            <div style={{ padding: '30px', fontFamily: 'Arial', textAlign: 'left', color: 'white' }}>
                <h2>Bài Tập ES6 - Quản Lý Học Sinh</h2>
                
                <p><strong>Họ và tên:</strong> {name} (Lấy bằng Destructuring)</p>
                <p><strong>Tuổi:</strong> {age}</p>

                <h3>1. Bảng điểm (Sau khi gộp bằng Spread Operator):</h3>
                <ul>
                    {/* Render mảng bằng map() theo chuẩn JSX */}
                    {student.scores.map((score, index) => (
                        <li key={index}>{score}</li>
                    ))}
                </ul>

                <h3>2. Điểm Trung Bình (Tính bằng reduce):</h3>
                <p>{student.calculateAverage().toFixed(2)}</p>

               <h3>3. Các điểm đạt {">="} 8.0 (Lọc bằng filter):</h3>
                <p>{passingScores.join(', ')}</p>

                <h3>4. Bảng điểm đã định dạng (Format bằng map):</h3>
                <p>{processedScores.join(', ')}</p>

                <h3>5. Kết quả đánh giá (Xử lý bằng Promise):</h3>
                <p style={{ color: '#61dafb', fontWeight: 'bold', fontSize: '20px' }}>
                    {this.state.performance}
                </p>
            </div>
        );
    }
}

export default ExESP6;