import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

function Footer() { 
  console.log("Hello Footer")
  return (
    <div className={styles.container}>
      <div>@copyrights footer</div>
      <div className={styles.social}>
        <Image src="/images/fbicon.png" width={15} height={15}  className='icon' alt="sulfanaidid fbicon"/>
        <Image src="/images/twittericon.png" width={15} height={15} className='icon' alt="sulfanaidid twittericon"/>
        <Image src="/images/linkedinicon.png" width={15} height={15} className='icon' alt="sulfanaidid linkedinicon"/>
        <Image src="/images/yticon.png" width={15} height={15} className='icon' alt="sulfanaidid yticon"/>
      </div>
    </div>
  )
}

export default Footer 