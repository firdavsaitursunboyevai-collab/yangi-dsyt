
import './App.css';
import ThemeProvider from './context/ThemeContext';


import Hemepage from './pages/Hemepage';

function App() {
  return (
   <div className="App">
    <ThemeProvider>
   <Hemepage></Hemepage>
   </ThemeProvider>
   
   </div>
  );
}

export default App;
