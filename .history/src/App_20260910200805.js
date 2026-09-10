import React from 'react';
import './App.css';
import ExESP6 from './slot1/ExESP6'; 

function App() {
  return (
    <div className="App">
      {/* Chỉ cần gọi thẻ này ra, không cần destructure biến student1 nào cả */}
      <ExESP6 />
    </div>
  );
}

export default App;