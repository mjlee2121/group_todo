import logo from './logo.svg';
import './App.css';
import GenerateCalendarForm from './components/Calendar';
import NumberButtons from './components/NumberButtons';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Comments from './pages/Comments';
import DailyTodo from './pages/DailyTodo';
import MonthlyTodo from './pages/MonthlyTodo';
import LandingPage from './pages/LandingPage';
import WeeklyTodo from './pages/WeeklyTodo';

const About = () => <h1>About Page</h1>
const Contact = () => <h1>ContactPage</h1>

function App() {
  return (
    <Router>
        <div style={{padding:'20px'}}>
          <Routes>
            <Route path='/' element={<LandingPage />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/dailytodo' element={<DailyTodo />}></Route>
            <Route path='/monthlytodo' element={<MonthlyTodo />}></Route>
            <Route path='/weeklytodo' element={<WeeklyTodo />}></Route>
            <Route path='/comments' element={<Comments />}></Route>

          </Routes>
        </div>
      
    </Router>
    // <div className="App">
    //   <section className="App-header">
        
    //   </section>
    //   <section className="Body">
    //     <NumberButtons />
    //     <GenerateCalendarForm />
    //   </section>
    // </div>
  );
}

export default App;
