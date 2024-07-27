import React, { useState } from 'react';

const Data=()=> {
  const [basicSalary, setBasicSalary] = useState(0);
  const [ta, setTa] = useState(0);
  const [da, setDa] = useState(0);
  const [hra, setHra] = useState(0);
  const [totalSalary, setTotalSalary] = useState(0);
  const [tax, setTax] = useState(0);

  const calculateTotalSalary = () => {
    const total = parseFloat(basicSalary) + parseFloat(ta) + parseFloat(da) 
    + parseFloat(hra);
    setTotalSalary(total);

    let calculatedTax = 0;
    if (total >= 80000) {
      calculatedTax = 0.20 * total;
    } else if (total > 50000) {
      calculatedTax = 0.15 * total;
    } else if (total >= 30000) {
      calculatedTax = 0.10 * total;
    } else {
      calculatedTax = 0;
    }
    setTax(calculatedTax);
  };

  return (
    <div>
      <h2>Salary and Tax Calculator</h2>
      <div>
        <label>
          Basic Salary:
          <input type="number" value={basicSalary} onChange={(e) => setBasicSalary(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          TA:
          <input type="number" value={ta} onChange={(e) => setTa(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          DA:
          <input type="number" value={da} onChange={(e) => setDa(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          HRA:
          <input type="number" value={hra} onChange={(e) => setHra(e.target.value)} />
        </label>
      </div>
      <div>
        <button onClick={calculateTotalSalary}>Calculate</button>
      </div>
      <div>
        <label>
          Total Salary:
          <input type="number" value={totalSalary} readOnly />
        </label>
      </div>
      <div>
        <label>
          Tax:
          <input type="number" value={tax} readOnly />
        </label>
      </div>
    </div>
  );
}

export default Data;