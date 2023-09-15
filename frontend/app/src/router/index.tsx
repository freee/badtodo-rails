import { Routes, Route } from 'react-router-dom';
import  Home  from '../views/Home';
import Register from '../views/Register';
import Inquery from '../views/Inquery';
import NewToDo from '../views/NewToDo';
import Profile from '../views/Profile';
import ToDoList from '../views/ToDoList';
import UserListView from '../views/UserListView';
import Login from '../views/Login';

type UserInfo = {
	isAdmin:boolean;
	loggedIn:boolean;
	setLoggedIn:any;
	setIsAdmin:any;
}

const Router:React.FC<UserInfo> = ({isAdmin,loggedIn,setLoggedIn,setIsAdmin}) => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/register" element={<Register isAdmin={isAdmin}/>} />
			<Route path="/contact" element={<Inquery />}/>
			<Route path="/new-todo" element={<NewToDo />}/>
			{!loggedIn && (
				<Route path="/login" element={<Login setLoggedIn={setLoggedIn} setIsAdmin={setIsAdmin}/>}/>
			)}
			{loggedIn && (
				<>
					<Route path="/mypage" element={<Profile />}/>
					{isAdmin && (
						<Route path="/member-management" element={<UserListView />}/>
					)}
					
				</>
				
        	)}
		</Routes>
	);
}
  
export default Router;
  