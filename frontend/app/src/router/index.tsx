import { Routes, Route } from 'react-router-dom';
import  Home  from '../views/Home';
import Register from '../views/Register';
import Inquery from '../views/Inquery';
import NewToDo from '../views/NewToDo';
import Profile from '../views/Profile';
import ToDoList from '../views/ToDoList';
import UserListView from '../views/UserListView';
import Login from '../views/Login';
import WhatToDo from '../views/WhatToDo'
import UpdateToDo from '../views/UpdateToDo';
import '../assets/Common.css';

type UserInfo = {
	isAdmin:boolean;
	loggedIn:boolean;
	setLoggedIn:any;
	setIsAdmin:any;
}

const Router:React.FC<UserInfo> = ({isAdmin,loggedIn,setLoggedIn,setIsAdmin}) => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<ToDoList />} />
				<Route path="/register" element={<Register isAdmin={isAdmin}/>} />
				<Route path="/contact" element={<Inquery />}/>
				<Route path="/new-todo" element={<NewToDo />}/>
				<Route path={"/what-todo/:id?"} element={<WhatToDo />}/>
				<Route path={"/update-todo/:id?"} element={<UpdateToDo />}/>
				{!loggedIn && (
					<Route path="/login" element={<Login setLoggedIn={setLoggedIn} setIsAdmin={setIsAdmin}/>}/>
				)}
				{loggedIn && (
					<>
						<Route path="/mypage/:id?" element={<Profile />}/>
						{isAdmin && (
							<Route path="/member-management" element={<UserListView />}/>
						)}
						
					</>
					
				)}
			</Routes>
		</div>
	);
}
  
export default Router;
  