import Card from './Card';
import '../index.css';

function App() {
  return (
    <div className="flex flex-row justify-center min-h-screen bg-red-400 ">
      <div className="w-1/3 grid grid-cols-2 ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="w-2/3 bg-yellow-300">pokemon detail</div>
    </div>
  );
}

export default App;
