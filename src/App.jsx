import './App.css'
import { Calendar } from './components/Calendar/Calendar';

function App() {
  // const now = new Date(2017, 2, 8);
  // const now = new Date("2024-02-12");
  // const now = new Date("2024-05-12");
  // const now = new Date("2024-02-12");
  const now = new Date();

  return (
    <>
      <Calendar date={now} />
    </>
  )
}

export default App
