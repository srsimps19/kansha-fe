import React from 'react';
import clsx from 'clsx';
import openMenu from '../../assets/open-menu.png';
import closeMenu from '../../assets/close-menu.png';
import home from '../../assets/home.png';
import profile from '../../assets/profile.png';
import workspace from '../../assets/workspace.png';
import sendReward from '../../assets/send.png';
import rewardHistory from '../../assets/history.png';
import settings from '../../assets/settings.png';
import signOut from '../../assets/signout.png';
import 'typeface-montserrat';
import { connect } from 'react-redux';
import { SidebarLink } from './SideBarLink';
import { signout } from '../Auth';

const drawerWidth = 240;

function Sidebar({ user }) {
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<div open={open}>
				{/* This is the open menu button */}
				{!open ? (
					<div>
						<button
							color="inherit"
							aria-label="open drawer"
							onClick={handleDrawerOpen}
							edge="start">
							<img src={openMenu} alt="open menu icon" />
						</button>
					</div>
				) : (
					/* this is the close menu button */
					<div>
						<div>
							<button
								aria-label="close drawer"
								onClick={handleDrawerClose}></button>
						</div>
						{/* this is the profile picture and name at the top of the open menu, everything in this className is a "if statement" */}
						<div>
							<img
								src={user.profile.profile_picture}
								alt="User"
							/>
							<p>{`${user.profile.first_name} ${user.profile.last_name}`}</p>
						</div>
					</div>
				)}
				<br />
				{/* this populates the icons in the closed menu and populates text also when menu is open */}
				<div>
					<SidebarLink
						path="/home"
						name="Home"
						icon={home}
						open={open}
					/>
					<SidebarLink
						path="/profile"
						name="Profile"
						icon={profile}
						open={open}
					/>
					<SidebarLink
						path="/workspace"
						name="Workspace"
						icon={workspace}
						open={open}
					/>
					<SidebarLink
						path="/workspace#send_reward"
						name="Send Reward"
						icon={sendReward}
						open={open}
					/>
					<SidebarLink
						path="/profile#history"
						name="Rewards History"
						icon={rewardHistory}
						open={open}
					/>
					<SidebarLink
						path="/settings"
						name="Settings"
						icon={settings}
						open={open}
					/>
				</div>

				{/* This "if statment" changes how far down the sign out button is on both closed and open menus */}
				<ul>
					{/* this populates the sign out icon on the closed menu and text on the open menu */}
					<li button onClick={() => signout()} key="Sign Out">
						<div>
							<img
								src={signOut}
								alt="sign out icon"
								style={{ width: '50%' }}
							/>
						</div>
						<p>Sign Out</p>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default connect(state => ({ ...state }), {})(Sidebar);
