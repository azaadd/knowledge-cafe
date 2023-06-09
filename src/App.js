import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Blogs from './Components/Blogs/Blogs';
import Question from './Components/Question/Question';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Blogs></Blogs>
      <Question></Question>
    </div>
  );
}

export default App;
