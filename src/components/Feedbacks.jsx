import React from 'react'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { highlights } from '../constants'

const AchievementCard = ({index, highlight}) => (
  <motion.div
    variants={fadeIn("", "spring", index*0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full '
  >
    <p className='text-white font-black text-[48px]'>"</p>
    <p className='text-white tracking-wider text-[18ox] '>{highlight}</p>
  </motion.div>
)

const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px] '>
      <div className= {`${styles.padding} bg-tertiary rounded-2xl min-h-[300px] `}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Highlights</p>
          <h2 className={styles.sectionHeadText}>Achievements.</h2>
        </motion.div>

      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
      {highlights.map((highlight, index) => (

        <AchievementCard key={index} index={index} highlight={highlight.highlight} />

      ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, "");