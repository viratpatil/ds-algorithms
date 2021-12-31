import logo from './logo.svg';
import './App.css';
import { MergeSort } from './components/sorting/sorting-algos';
import { findFirstSecondMin } from './problems/second-min-array';
import { romanToNumber } from './problems/roman-number';
import { BinarySearchAlgo } from './components/searching/searching-algos';

function App() {
 // MergeSort([3,2,4,6,5,7,9,8]);
  // console.log(mergeSortArray);
  console.log(findFirstSecondMin([-3,2,4,6,5,7,9,-8]));
  console.log(romanToNumber('MCMXCIV'));
  console.log(BinarySearchAlgo([-3,2,4,6,5,7,9,-8], 6));
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
