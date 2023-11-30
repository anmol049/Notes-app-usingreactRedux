import './App.css';
import Child1 from './components/Child1';
import Child2 from './components/Child2';
import ListNotes from './notes/ListNotes';
import SetNotes from './notes/SetNotes';
// import ListNotes from './notes/ListNotes';
function App() {
  return (
    <div>
     {/* <Child1/> */}
     {/* <Child2/> */}
     <SetNotes/>
     <ListNotes/>
    </div>
  );
}

export default App;
