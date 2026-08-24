import img from "./assets/vite.svg";

function App() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-500">Hello, Tailwind CSS!</h1>
      <img src={img} alt="Vite Logo" className="ml-4 h-12 w-12 animate-spin" />
    </div>
  );
}

export default App;
