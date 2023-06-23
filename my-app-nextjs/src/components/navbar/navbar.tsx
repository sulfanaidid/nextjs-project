"use client"

import React from 'react'
import Link from 'next/link'
import { link } from 'fs'
import styles from './navbar.module.css'

// array of object to store url page in nav
const links = [
  {
    id:1,
    title:"Home",
    url:"/",
  },
  {
    id:2,
    title:"Portfolio",
    url:"/portfolio",
  },
  {
    id:3,
    title:"Blog",
    url:"/blog",
  },
  {
    id:4,
    title:"About",
    url:"/about",
  },
  {
    id:5,
    title:"Contact",
    url:"/contact",
  },
]




function Navbar() {
  return (
    // Logic to parcing url with object map
    <div className={styles.container}>
        <Link className={styles.logo} href={"/"}>Sulfan Aidid</Link>
        
        <div className={styles.links}>
          {links.map(link=>(
            <Link key={link.id} href={link.url}>{link.title}</Link>
          ))}

          <button className={styles.logout} onClick={() => {
            console.log("Logged Out")
          }}>
            Logout
          </button>
        </div>
    </div>
  )
}
 
export default Navbar