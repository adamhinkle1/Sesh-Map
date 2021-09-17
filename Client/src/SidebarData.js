import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from 'react-icons/md';
import * as RiIcons from 'react-icons/ri'
export const LoggedInOptions = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Discover',
    path: '/discover',
    icon: < RiIcons.RiCompassDiscoverLine />,
    cName: 'nav-text'
  },
  {
    title: 'The Board',
    path: '/board',
    icon: <MdIcons.MdForum/>,
    cName: 'nav-text'
  },
  {
    title: 'Contact Us',
    path: '/contact-us',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'About Us',
    path: '/about-us',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Sign Out',
    path: '/logout',
    icon: <MdIcons.MdAccountCircle />,
    cName: 'nav-text'
  },
];
export const LoggedOutOptions = [
  {
    title: 'Sign In',
    path: '/login',
    icon: <MdIcons.MdAccountCircle />,
    cName: 'nav-text'
  },
  {
    title: 'About Us',
    path: '/about-us',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Contact Us',
    path: '/contact-us',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
];
