import { Routes, Route } from 'react-router-dom';
import  Home  from '../views/Home';
import Register from '../views/Register';
import Inquery from '../views/Inquery';
import NewToDo from '../views/NewToDo';
import Profile from '../views/Profile';
import ToDoList from '../views/ToDoList';

function Router() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/register" element={<Register isAdmin={true}/>} />
			<Route path="/contact" element={<Inquery />}/>
			<Route path="/new-todo" element={<NewToDo />}/>
			{/* <Route path="/mypage" element={<Profile/>}/> error出る*/}
			
		</Routes>
	);
}
  
export default Router;
  