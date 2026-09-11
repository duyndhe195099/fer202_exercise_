import React, { useState, useEffect } from 'react';

// ==========================================
// DỮ LIỆU TĨNH (Đưa ra ngoài component để tránh cảnh báo ESLint)
// ==========================================
const COMPANIES_DATA = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const AGES_DATA = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


// ĐỊNH NGHĨA CLASS (Hướng đối tượng)

class Shape {
  constructor(color) {
    this.color = color;
  }
  getArea() {
    return 0;
  }
  toString() {
    return `Shape with color ${this.color}`;
  }
}

class Rectangle extends Shape {
  constructor(color, length, width) {
    super(color);
    this.length = length;
    this.width = width;
  }
  getArea() {
    return this.length * this.width;
  }
  toString() {
    return `Rectangle [length=${this.length}, width=${this.width}, color=${this.color}]`;
  }
}

class Triangle extends Shape {
  constructor(color, base, height) {
    super(color);
    this.base = base;
    this.height = height;
  }
  getArea() {
    return 0.5 * this.base * this.height;
  }
  toString() {
    return `Triangle [base=${this.base}, height=${this.height}, color=${this.color}]`;
  }
}



const Exercise4 = () => {
  const [promiseResult, setPromiseResult] = useState("Đang chạy Promise...");

  useEffect(() => {
    // --- 1. XỬ LÝ MẢNG PEOPLE ---
    const people = [
      { name: 'Jack', age: 50 },
      { name: 'Michael', age: 9 }, 
      { name: 'John', age: 40 }, 
      { name: 'Ann', age: 19 }, 
      { name: 'Elisabeth', age: 16 }
    ];

    console.log("1. First teenager:", people.find(p => p.age >= 10 && p.age <= 20));
    console.log("2. All teenagers:", people.filter(p => p.age >= 10 && p.age <= 20));
    console.log("3. Is every person a teenager?", people.every(p => p.age >= 10 && p.age <= 20));
    console.log("4. Is any person a teenager?", people.some(p => p.age >= 10 && p.age <= 20));


    // --- 2. XỬ LÝ MẢNG SỐ & REDUCE ---
    const array = [1, 2, 3, 4];
    const sumArray = array.reduce((acc, curr) => acc + curr, 0);
    console.log("5. Sum of array [1,2,3,4]:", sumArray);


    // --- 3. XỬ LÝ COMPANIES VÀ AGES ---
    console.log("6. Print company names using forEach:");
    COMPANIES_DATA.forEach(comp => console.log(comp.name));

    console.log("7. Companies started after 1987:", COMPANIES_DATA.filter(comp => comp.start > 1987));
    console.log("8. Companies sorted by end date:", [...COMPANIES_DATA].sort((a, b) => a.end - b.end));
    console.log("9. Ages sorted descending:", [...AGES_DATA].sort((a, b) => b - a));
    console.log("10. Total sum of ages:", AGES_DATA.reduce((acc, age) => acc + age, 0));


    // --- 4. OBJECT DESTRUCTURING & ENHANCED OBJECT LITERALS ---
    const personObj = { name: "Costas", address: { street: "Lalaland 12" } };
    const { address: { street } } = personObj;
    console.log("11. Destructured street:", street);

    const { name: compName, category: compCat } = COMPANIES_DATA[0];
    const customObj = {
      name: compName,
      category: compCat,
      print() {
        console.log(`[Custom Object] Name: ${this.name}, Category: ${this.category}`);
      }
    };
    customObj.print();


    // --- 5. REST PARAMETERS ---
    const sumNumbers = (...nums) => nums.reduce((acc, n) => acc + n, 0);
    console.log("12. Sum of numbers (10, 20, 30):", sumNumbers(10, 20, 30));


    // --- 6. CLOSURE ---
    const createCounter = () => {
      let count = 0;
      return () => count++;
    };
    const counter = createCounter();
    console.log("14. Counter call 1:", counter());
    console.log("14. Counter call 2:", counter());


    // --- 7. TEST OOP CLASSES ---
    const rect = new Rectangle("Red", 10, 5);
    const tri = new Triangle("Green", 4, 8);
    console.log("16. Rectangle area:", rect.getArea(), "|", rect.toString());
    console.log("17. Triangle area:", tri.getArea(), "|", tri.toString());


    // --- 8. PROMISE ---
    const checkRandomNumber = () => {
      return new Promise((resolve, reject) => {
        const randomNum = Math.floor(Math.random() * 10) + 1;
        setTimeout(() => {
          if (randomNum > 5) {
            resolve(`Thành công! Số ngẫu nhiên là: ${randomNum}`);
          } else {
            reject(`Error: Số ngẫu nhiên quá nhỏ (${randomNum} <= 5)`);
          }
        }, 1000);
      });
    };

    checkRandomNumber()
      .then(res => setPromiseResult(res))
      .catch(err => setPromiseResult(err));

  }, []);

  // Lọc dữ liệu Retail từ biến toàn cục
  const retailCompanies = COMPANIES_DATA.filter(comp => comp.category === "Retail");

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', lineHeight: '1.6' }}>
      
      {/* 1. Hello React */}
      <h1 style={{ fontSize: '36px' }}>
        Hello <span style={{ color: 'blue' }}>React</span>
      </h1>

      {/* 2. Logo React & Text */}
      <div style={{ textAlign: 'left', margin: '20px 0' }}>
        <svg viewBox="-11.5 -10.23174 23 20.46348" width="120px" height="120px" style={{ fill: '#00d8ff' }}>
          <circle cx="0" cy="0" r="2.05" fill="#00d8ff" />
          <g stroke="#00d8ff" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
        <p style={{ fontStyle: 'italic', color: '#333' }}>This is the React logo!</p>
        <p style={{ fontStyle: 'italic', fontSize: '12px', color: '#777' }}>(I don't know why it is here either)</p>
      </div>

      <p style={{ fontWeight: 'bold' }}>The library for web and native user interfaces</p>
      <hr />

      {/* 3. Navbar */}
      <nav style={{ backgroundColor: '#555', padding: '10px 20px', display: 'flex', gap: '15px', alignItems: 'center' }}>
        <span style={{ backgroundColor: '#2ecc71', color: 'white', padding: '8px 15px', borderRadius: '4px' }}>Home</span>
        <span style={{ color: 'white', cursor: 'pointer' }}>Search</span>
        <span style={{ color: 'white', cursor: 'pointer' }}>Contact</span>
        <span style={{ backgroundColor: 'black', color: 'white', padding: '8px 15px', borderRadius: '4px' }}>Login</span>
      </nav>
      <br />

      {/* 4. Display this is JSX */}
      <h2 style={{ color: 'blue' }}>This is JSX</h2>

      {/* 5. Course Names List */}
      <h3>Course names</h3>
      <ul>
        <li>React</li>
        <li>ReactNative</li>
        <li>NodeJs</li>
      </ul>

      {/* 6. Companies Table */}
      <h3>Retail Companies Table (Start + 1)</h3>
      <table style={{ width: '80%', borderCollapse: 'collapse', textAlign: 'center' }}>
        <tbody>
          {retailCompanies.map((comp, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '10px', fontWeight: 'bold' }}>{comp.name}</td>
              <td style={{ padding: '10px' }}>{comp.start + 1}</td>
              <td style={{ padding: '10px' }}>{comp.end}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 7. Promise Result */}
      <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#f8f9fa', border: '1px solid #ccc', borderRadius: '5px', width: 'fit-content' }}>
        <h3>Promise Result:</h3>
        <p style={{ fontWeight: 'bold', color: promiseResult.includes('Error') ? 'red' : 'green' }}>
          {promiseResult}
        </p>
      </div>
      
    </div>
  );
};

export default Exercise4;
