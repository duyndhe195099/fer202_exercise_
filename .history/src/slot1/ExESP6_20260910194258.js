// 1. Person class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

// 2. Student extends Person
class Student extends Person {
  constructor(name, age, scores = []) {
    super(name, age);
    this.scores = scores;
  }

  // reduce()
  averageScore() {
    if (this.scores.length === 0) {
      return 0;
    }

    const total = this.scores.reduce(
      (sum, score) => sum + score,
      0
    );

    return total / this.scores.length;
  }

  // Destructuring
  displayInfo() {
    const { name, age, scores } = this;

    return `
      Name: ${name}
      Age: ${age}
      Scores: ${scores.join(", ")}
      Average: ${this.averageScore().toFixed(2)}
    `;
  }
}

// 3. Rest parameter
const createScores = (...scores) => {
  return scores;
};

// 4. Destructuring
const getStudentBasicInfo = (student) => {
  const { name, age } = student;

  return { name, age };
};

// 5. Spread operator
const addScores = (student, ...newScores) => {
  student.scores = [
    ...student.scores,
    ...newScores
  ];

  return student.scores;
};

// 6. filter()
const getPassingScores = (scores) => {
  return scores.filter((score) => score >= 5);
};

// 6. map()
const getProcessedScores = (scores) => {
  return scores.map((score) => Number(score.toFixed(1)));
};

// 6. reduce()
const calculateTotalScore = (scores) => {
  return scores.reduce(
    (total, score) => total + score,
    0
  );
};

// 7. Promise
const evaluatePerformance = (average) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (average >= 8) {
        resolve("Excellent Student");
      } else {
        resolve("Need Improvement");
      }
    }, 1000);
  });
};

export {
  Person,
  Student,
  createScores,
  getStudentBasicInfo,
  addScores,
  getPassingScores,
  getProcessedScores,
  calculateTotalScore,
  evaluatePerformance,
};