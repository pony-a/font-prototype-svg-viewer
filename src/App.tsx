import React, { useState } from 'react';
import FontViewer from './components/FontViewer';
import './App.css';
const App: React.FC = () => {
  const [text, setText] = useState('');
  const [division, setDivision] = useState(1);

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const increaseDivision = () => {
    setDivision(prevDivision => prevDivision * 2);
  };

  const decreaseDivision = () => {
    if (division > 1) {
      setDivision(prevDivision => prevDivision / 2);
    }
  };

  return (
    <div className="container">
      <div className="button-container" >
        <button onClick={increaseDivision}>-</button>
        <button onClick={decreaseDivision}>+</button>
      </div>   
      <TextInput value={text} onChange={handleTextChange} />   

      <FontViewer size={400} division={division} text={text} />


    </div>
  );
};

interface TextInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({ value, onChange }) => {
  return <input  type="text" value={value} onChange={onChange} />;
};

export default App;