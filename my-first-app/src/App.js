// import logo from './logo.svg';
import './App.css';
import Introduction from './Introduction';
import Skills from './Skills';
import Education from './Education';
import Projects from './Projects';

function App() {
  const introObject = {
    name: 'Gyanas Luitel',
    designation: 'Associate Software Engineer',
    phone1: '+977-9860137688',
    phone2: '+977-9818331192',
    email: 'gyanasluitel@lftechnology.com',
  };

  return (
    <div className='App'>
      <Introduction introObject={introObject} />
      <Skills />
      <Education />
      <Projects />
    </div>
  );
}

export default App;
