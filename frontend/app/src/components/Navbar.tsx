import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar.css';

type NavbarProps = {
    loggedIn: boolean
    isAdmin: boolean
  }


  export const Navbar: React.FC<NavbarProps> = ({loggedIn,isAdmin}) => {
  
  return (
    <nav>
      <ul  className='topnav'>
        <li>
          <Link to="/">一覧</Link>
        </li>
		<li>
			<Link to="/new-todo">新規追加</Link>
		</li>
		<li>
			<Link to="/contact">お問い合わせ</Link>
		</li>
        {!loggedIn && (
			<li>
				<Link to="/login">ログイン</Link>
			</li>
        )}
        {loggedIn && (
			<>
				<li>
					<Link to="/mypage">マイページ</Link>
				</li>
				{isAdmin && (
					<li>
						<Link to="/member-management">会員管理</Link>
					</li>
				)}
				<li>
					<Link to="/logout">ログアウト</Link>
				</li>
			</>
        )}
      </ul>
    </nav>
  );
}
