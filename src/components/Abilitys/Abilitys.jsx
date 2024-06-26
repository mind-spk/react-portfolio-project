import React from 'react'
import styles from  './Abilitys.module.css'
import {FaSquareJs , FaReact , FaSass , FaGitAlt ,FaNode } from 'react-icons/fa6'


function Abilitys() {
  return (
    <div className={styles.skill_con}>
        <h3 className={styles.skill_title}>My Skill Set</h3>
        <ul className={styles.skill_list}>
            <li>
                <FaSquareJs/>
            </li>
            <li>
                <FaReact/>
            </li>
            <li>
                <FaSass/>
            </li>
            <li>
                <FaGitAlt/>
            </li>
            <li>
                <FaNode/>
            </li>
        </ul>
    </div>
  )
}

export default Abilitys
