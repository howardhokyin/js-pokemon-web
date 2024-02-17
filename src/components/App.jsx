import Card from './Card';
import '../index.css';

function App() {
  return (
    <div className="flex flex-col h-screen  bg-red-400">
      <div className="flex-1 h-4/5 bg-yellow-300">pokemon detail</div>
      <div className="flex-2 h-1/5 flex flex-row">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
