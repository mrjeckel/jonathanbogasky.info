import React, { useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { navLink, activeNavLink, navigation, navBox, linkIcon, logo, menuIcon } from './navigation.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare, faBars } from '@fortawesome/free-solid-svg-icons';

function NavLink({ to, children }) {
	return (
		<Link to={to} className={navLink} activeClassName={activeNavLink}>{children}</Link>
	)
}

function ExternalNavLink({ to, children }) {
	return (
        <a href={to} className={navLink} target='_blank' rel='noreferrer noopener'>
			{children}
			<FontAwesomeIcon className={linkIcon} icon={faUpRightFromSquare} />
		</a>
    )
}

export default function Navbar() {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
					menuLinks {
						name
						link
						external
					}
				}
			}
		}
	`);
	const [showMenu, setShowMenu] = useState(false);
	const isBrowser = () => typeof window !== "undefined"

	return ( 
		<nav className={navigation}>
			<div className={logo}>
				{data.site.siteMetadata.title}
				<FontAwesomeIcon icon={faBars} className={menuIcon} onClick={() => setShowMenu(!showMenu)}/>
			</div>
			{(showMenu || isBrowser && window.innerWidth > 700) ? <div className={navBox}>
				{
					data.site.siteMetadata.menuLinks.map(link => {
						if (link.external === true) {
							return <ExternalNavLink key={link.name} to={link.link}>{link.name}</ExternalNavLink>
						} 
						else {
							return <NavLink key={link.name} to={link.link}>{link.name}</NavLink>
						}
					})
				}
			</div> : null}
		</nav>
	)
}
