import './App.css'

function Header({name , year}) {
  return (
    <header>
      <h1>New react project {name}</h1>
      <h2>Copyright {year}</h2>
    </header>
  );
}
function App() {
  return (
    <div>
    <Header name="LearningEssentials" year={new Date().getFullYear()} />
    <main>
      <p>This is my first react project</p>
    </main>
    </div>
  );
}

export default App
