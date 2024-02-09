import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";

function App() {
    return (
        <div className="bg-[#3a3a3a] h-screen w-screen text-white overflow-y-auto">
            <div className=" max-w-3xl mx-auto flex flex-col items-center gap-6 py-6 h-full">
                <h1 className="text-3xl font-bold">My Todos</h1>
                <ToDoForm />
                <ToDoList />
            </div>
        </div>
    );
}

export default App;
