import { Routes, Route } from 'react-router-dom';
import  Home  from '../views/Home';
import Register from '../views/Register';
import Inquery from '../views/Inquery';
import NewToDo from '../views/NewToDo';
import Profile from '../views/Profile';
import ToDoList from '../views/ToDoList';
import UserListView from '../views/admin/UserListView';
import Login from '../views/Login';
import WhatToDo from '../views/WhatToDo'
import UpdateToDo from '../views/UpdateToDo';
import Logout from '../views/Logout';
import '../assets/Common.css';

type UserInfo = {
	isAdmin:boolean;
	loggedIn:boolean;
	userId:number;
	setLoggedIn:any;
	setIsAdmin:any;
	setUserId:any;
}

const Router:React.FC<UserInfo> = ({isAdmin,loggedIn,userId,setLoggedIn,setIsAdmin,setUserId}) => {
	return (
		<div>
			<Routes>
				<Route path="/register" element={<Register isAdmin={isAdmin}/>} />
				<Route path="/contact" element={<Inquery />}/>
				{!loggedIn && (
					<Route path="/" element={<Login setLoggedIn={setLoggedIn} setIsAdmin={setIsAdmin} setUserId={setUserId}/>}/>
				)}
				{loggedIn && (
					<>
						<Route path="/" element={<ToDoList />} />
						<Route path="/new-todo" element={<NewToDo userId={userId}/>}/>
						<Route path={"/what-todo/:id?"} element={<WhatToDo />}/>
						<Route path={"/update-todo/:id?"} element={<UpdateToDo />}/>
						<Route path="/mypage/:id?" element={<Profile userId={userId}/>}/>
						<Route path="/logout" element={<Logout setLoggedIn={setLoggedIn} setIsAdmin={setIsAdmin} setUserId={setUserId}/>} />
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
  