import React, { useState, useEffect } from 'react';

// ==========================================
// PHẦN 1: ĐỊNH NGHĨA CLASS (Yêu cầu hướng đối tượng)
// ==========================================
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


// ==========================================
// PHẦN 2: COMPONENT CHÍNH HIỂN THỊ GIAO DIỆN & LOGIC
// ==========================================
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

    const firstTeen = people.find(p => p.age >= 10 && p.age <= 20);
    console.log("1. First teenager:", firstTeen);

    const allTeens = people.filter(p => p.age >= 10 && p.age <= 20);
    console.log("2. All teenagers:", allTeens);

    const isEveryTeen = people.every(p => p.age >= 10 && p.age <= 20);
    console.log("3. Is every person a teenager?", isEveryTeen);

    const isAnyTeen = people.some(p => p.age >= 10 && p.age <= 20);
    console.log("4. Is any person a teenager?", isAnyTeen);


    // --- 2. XỬ LÝ MẢNG SỐ & REDUCE ---
    const array = [1, 2, 3, 4];
    const sumArray = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log("5. Sum of array [1,2,3,4]:", sumArray);


    // --- 3. XỬ LÝ COMPANIES VÀ AGES ---
    const companies = [
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
    const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

    console.log("6. Print company names using forEach:");
    companies.forEach(comp => console.log(comp.name));

    const startedAfter1987 = companies.filter(comp => comp.start > 1987);
    console.log("7. Companies started after 1987:", startedAfter1987);

    // Sắp xếp companies theo end date tăng dần
    const sortedCompanies = [...companies].sort((a, b) => a.end - b.end);
    console.log("8. Companies sorted by end date:", sortedCompanies);

    // Sắp xếp ages giảm dần
    const sortedAgesDesc = [...ages].sort((a, b) => b - a);
    console.log("9. Ages sorted descending:", sortedAgesDesc);

    // Tổng tất cả ages dùng reduce
    const totalAges = ages.reduce((acc, age) => acc + age, 0);
    console.log("10. Total sum of ages:", totalAges);


    // --- 4. OBJECT DESTRUCTURING & ENHANCED OBJECT LITERALS ---
    const personObj = {
      name: "Costas",
      address: { street: "Lalaland 12" }
    };
    // Destructuring property street
    const { address: { street } } = personObj;
    console.log("11. Destructured street:", street);

    // Tạo object mới lấy từ companies[0] kèm method print dùng destructuring
    const { name: compName, category: compCat } = companies[0];
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

    const collectArgs = (...args) => {
      let result = [];
      args.forEach(arg => {
        if (Array.isArray(arg)) {
          result.push(...arg);
        } else {
          result.push(arg);
        }
      });
      return result;
    };
    console.log("13. Collect args result:", collectArgs(1, [2, 3], 4, [5, 6]));


    // --- 6. CLOSURE (Auto-increment counter) ---
    const createCounter = () => {
      let count = 0;
      return () => count++;
    };
    const counter = createCounter();
    console.log("14. Counter call 1:", counter()); // 0
    console.log("14. Counter call 2:", counter()); // 1


    // --- 7. URL QUERY PARSER ---
    const parseQueryString = (url) => {
      const queryParams = {};
      const queryString = url.split('?')[1];
      if (!queryString) return queryParams;
      queryString.split('&').forEach(param => {
        const [key, value] = param.split('=');
        queryParams[key] = decodeURIComponent(value);
      });
      return queryParams;
    };
    console.log("15. URL Query parse:", parseQueryString("https://example.com/?name=Duy&role=student"));


    // --- 8. TEST OOP CLASSES ---
    const rect = new Rectangle("Red", 10, 5);
    console.log("16. Rectangle area:", rect.getArea(), "|", rect.toString());


    // --- 9. PROMISE EXERCISE ---
    const checkRandomNumber = () => {
      return new Promise((resolve, reject) => {
        const randomNum = Math.floor(Math.random() * 10) + 1; // Số từ 1 đến 10
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

  // Lọc dữ liệu Retail cho phần hiển thị bảng
  const retailCompanies = companies.filter(comp => comp.category === "Retail");

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

      {/* 6. Companies Table (Retail category, increment start by 1) */}
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

      {/* 7. Kết quả Promise */}
      <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#f8f9fa', border: '1px solid #ccc', borderRadius: '5px', width: 'fit-content' }}>
        <h3>Promise Result:</h3>
        <p style={{ fontWeight: 'bold', color: promiseResult.includes('Error') ? 'red' : 'green' }}>
          {promiseResult}
        </p>
      </div>
      
      <p style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
        💡 <em>Mẹo: Hãy bấm phím <strong>F12</strong> chọn tab <strong>Console</strong> để xem kết quả chi tiết của tất cả các hàm Array methods, Destructuring, Class, và Rest parameters.</em>
      </p>
    </div>
  );
};

export default Exercise4;