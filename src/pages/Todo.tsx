
import ToDoContainer from "../components/todo/ToDoContainer";
import Container from "../components/ui/Container";


const Todo = () => {
    return (
        <div>
            <Container>
            <h1 className="text-center text-3xl font-semibold my-10">My ToDos</h1>
            <ToDoContainer></ToDoContainer>
            </Container>
        </div>
    );
};

export default Todo;