import React, { useState } from 'react';
import Papa from 'papaparse';

function App() {
  const [csvData, setCsvData] = useState([]);
  const [error, setError] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      Papa.parse(file, {
        complete: (result) => {
          // Check if any column title contains a dot
          const hasInvalidColumn = result.meta.fields.some(field => field.includes('.'));
          const fieldWithDot = result.meta.fields.filter(field => field.includes('.'));
          console.log(fieldWithDot)
          if (hasInvalidColumn) {
            alert('Invalid CSV file: Column title cannot contain a dot (.)');
            setCsvData([]);
            setError('Invalid CSV file: Column title cannot contain a dot (.)' + fieldWithDot);
            return;
          }

          setCsvData(result.data);
          setError(null);
        },
        error: (err) => {
          setError(err.message);
        },
        header: true, // This assumes the first row contains the column names
      });
    }
  };

  return (
    <div>
      <h2>CSV File Upload</h2>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <table border="1" cellPadding="5" style={{ marginTop: '20px' }}>
        <thead>
          <tr>
            {csvData.length > 0 &&
              Object.keys(csvData[0]).map((header, index) => (
                <th key={index}>{header}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {csvData.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, idx) => (
                <td key={idx}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
