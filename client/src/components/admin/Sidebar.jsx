import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Sidebar = () => {
  return (
    <div className='flex flex-col border-r border-gray-200 min-h-full pt-6'>
       <NavLink 
            end={true}
            to="/admin"
            className={({ isActive }) =>
            `flex items-center gap-3 py-3.5 px-3 sm:px-9 md:min-w-64 cursor-pointer 
                ${isActive && "bg-primary/10 border-r-4 border-primary text-primary" }` }>
            <img src={assets.home_icon} alt="" className="min-w-4 w-5" />
            <p className="hidden md:inline-block">Dashboard</p>    
        </NavLink>
        <NavLink 
            end={true}
            to="/admin/addBlog"
            className={({ isActive }) =>
            `flex items-center gap-3 py-3.5 px-3 sm:px-9 md:min-w-64 cursor-pointer 
                ${isActive && "bg-primary/10 border-r-4 border-primary text-primary" }` }>
            <img src={assets.add_icon} alt="" className="min-w-4 w-5" />
            <p className="hidden md:inline-block">Add Blog</p>    
        </NavLink>
        <NavLink 
            end={true}
            to="/admin/ListBlog"
            className={({ isActive }) =>
            `flex items-center gap-3 py-3.5 px-3 sm:px-9 md:min-w-64 cursor-pointer 
                ${isActive && "bg-primary/10 border-r-4 border-primary text-primary" }` }>
            <img src={assets.list_icon} alt="" className="min-w-4 w-5" />
            <p className="hidden md:inline-block">Blogs List</p>    
        </NavLink>
        <NavLink 
            end={true}
            to="/admin/comments"
            className={({ isActive }) =>
            `flex items-center gap-3 py-3.5 px-3 sm:px-9 md:min-w-64 cursor-pointer 
                ${isActive && "bg-primary/10 border-r-4 border-primary text-primary" }` }>
            <img src={assets.comment_icon} alt="" className="min-w-4 w-5" />
            <p className="hidden md:inline-block">Comments</p>    
        </NavLink>
    </div>
  )
}

export default Sidebar