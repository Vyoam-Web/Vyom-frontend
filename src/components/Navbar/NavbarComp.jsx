import React from 'react'
import { Collapse } from 'flowbite';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

function NavbarComp() {
    return (
        <nav className="px-8 bg-[#272F56] fixed w-full z-20 top-0 left-0  border-gray-200 dark:border-gray-600">
            <div className="container flex flex-wrap items-center justify-between mx-auto ">
                <a href="/" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-10" alt="Flowbite Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white text-white">VYOAM</span>
                </a>
                <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 ml-3 text-[1.5vw] text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:md:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>

                <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                    <div class="px-4 py-3">
                        <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                        <span class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                    </div>
                    <ul class="py-2" aria-labelledby="user-menu-button">
                        <li>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                        </li>
                        <li>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                        </li>
                        <li>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                        </li>
                        <li>
                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                        </li>
                    </ul>
                </div>
                <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-[#272F56] md:flex-row md:space-x-8 md:mt-0 md:text-[1.5vw] md:font-medium md:border-0 md: dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownServices" className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium md:text-white rounded bg-[#272F56] hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:md:text-white  dark:hover:text-white text-[1.2vw] dark:focus:text-white focus:outline-none dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Services <svg className="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                            {/* <!-- Dropdown menu --> */}
                            <div id="dropdownServices" className="z-10 hidden font-normal  divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                <ul className="py-2 rounded-[0.5vw] text-[1.5vw] md:text-white dark:md:text-white text-start bg-white w-[14vw]" aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <a href="/" className="block px-4 py-2 text-[#272F56] dark:hover:bg-gray-600  dark:hover:text-white text-[1.2vw]">Product developement</a>
                                    </li>
                                    <li>
                                        <a href="/" className="block px-4 py-2 text-[#272F56] dark:hover:bg-gray-600  dark:hover:text-white text-[1.2vw]">Consultancy</a>
                                    </li>

                                </ul>

                            </div>
                        </li>
                        <li>
                            <button id="dropdownNavbarLink" data-dropdown-toggle="dropAllcourses" className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium md:text-white rounded bg-[#272F56] hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:md:text-white  dark:hover:text-white text-[1.2vw] dark:focus:text-white focus:outline-none dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">All courses <svg className="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                            {/* <!-- Dropdown menu --> */}
                            <div id="dropAllcourses" className="z-10 hidden font-normal  divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                <ul className="py-2 rounded-[0.5vw] text-[1.5vw] md:text-white dark:md:text-white text-start bg-white w-[14vw]" aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <a href="/" className="block px-4 py-2 text-[#272F56] dark:hover:bg-gray-600  dark:hover:text-white text-[1.2vw]">Python Programing</a>
                                    </li>
                                    <li>
                                        <a href="/" className="block px-4 py-2 text-[#272F56] dark:hover:bg-gray-600  dark:hover:text-white text-[1.2vw]">Data Science</a>
                                    </li>
                                    <li>
                                        <a href="/" className="block px-4 py-2 text-[#272F56] dark:hover:bg-gray-600  dark:hover:text-white text-[1.2vw]">Machine Learning</a>
                                    </li>
                                    <li>
                                        <a href="/" className="block px-4 py-2 text-[#272F56] dark:hover:bg-gray-600  dark:hover:text-white text-[1.2vw]">Deep Learning</a>
                                    </li>
                                    <li>
                                        <a href="/" className="block px-4 py-2 text-[#272F56] dark:hover:bg-gray-600  dark:hover:text-white text-[1.2vw]">Applied Artificial Intelligence</a>
                                    </li>
                                    <li>
                                        <a href="/" className="block px-4 py-2 text-[#272F56] dark:hover:bg-gray-600  dark:hover:text-white text-[1.2vw]">End to End Data Science</a>
                                    </li>
                                    <li>
                                        <a href="/" className="block px-4 py-2 text-[#272F56] dark:hover:bg-gray-600  dark:hover:text-white text-[1.2vw]">Natural Language Processing</a>
                                    </li>
                                    <li>
                                        <a href="/" className="block px-4 py-2 text-[#272F56] dark:hover:bg-gray-600  dark:hover:text-white text-[1.2vw]">Computer Vision</a>
                                    </li>
                                    <li>
                                        <a href="/" className="block px-4 py-2 text-[#272F56] dark:hover:bg-gray-600  dark:hover:text-white text-[1.2vw]">Computer Vision</a>
                                    </li>
                                </ul>

                            </div>
                        </li>
                        <li>
                            <button id="dropdownNavbarLink" data-dropdown-toggle="dropOrg" className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium md:text-white rounded bg-[#272F56] hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:md:text-white  dark:hover:text-white text-[1.2vw] dark:focus:text-white focus:outline-none dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">For organisations <svg className="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                            {/* <!-- Dropdown menu --> */}
                            <div id="dropOrg" className="z-10 hidden font-normal  divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                <ul className="py-2 rounded-[0.5vw] text-[1.5vw] md:text-white dark:md:text-white text-start bg-white w-[14vw]" aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <a href="/" className="block px-4 py-2 text-[#272F56] dark:hover:bg-gray-600  dark:hover:text-white text-[1.2vw]">Corporate Training</a>
                                    </li>
                                    <li>
                                        <a href="/" className="block px-4 py-2 text-[#272F56] dark:hover:bg-gray-600  dark:hover:text-white text-[1.2vw]">Academic Training</a>
                                    </li>
                                    <li>
                                        <a href="/" className="block px-4 py-2 text-[#272F56] dark:hover:bg-gray-600  dark:hover:text-white text-[1.2vw]">Recruit Talents</a>
                                    </li>

                                </ul>

                            </div>
                        </li>
                        <li>
                            <a href="/" className="block py-2 pl-3 pr-4 md:text-white rounded bg-[#272F56] hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:md:text-white md: dark:hover:text-white text-[1.2vw] dark:hover:bg-gray-700   md:dark:hover:bg-transparent">Career support </a>
                        </li>
                        <li>
                            <a href="/" className="block py-2 pl-3 pr-4 md:text-white rounded bg-[#272F56] hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:md:text-white md:  dark:hover:bg-gray-700  dark:hover:text-white text-[1.2vw] md:dark:hover:bg-transparent">Blogs</a>
                        </li>
                        <li>
                            <a href="/" className="block py-2 pl-3 pr-4 md:text-white rounded bg-[#272F56] hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:md:text-white md: dark:hover:text-white text-[1.2vw] dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Events</a>
                        </li>
                    </ul>
                </div>
                <button type="button" className="flex p-0 text-sm rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                    <span className="sr-only">Open user menu</span>
                    <FaUserCircle className='text-[2vw]' />
                </button>
            </div>
        </nav>
    )
}

export default NavbarComp