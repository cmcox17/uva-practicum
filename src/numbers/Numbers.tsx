// styling
import './numbers.css';
import * as motion from "motion/react-client";

// image imports
import balloonsImage from '../assets/balloons.png';
import headerImage from '../assets/header.jpg';
import mdImage from '../assets/md.png';
import jdImage from '../assets/jd.png';
import phdImage from '../assets/phd.png';
import statOneImage from '../assets/stat_1.png';
import statSixImage from '../assets/stat_6.png';
import stopwatchImage from '../assets/stopwatch.png';
import sustainableImage from '../assets/sustainable.png';
import waterTowersImage from '../assets/water_towers.png';
import { UndergradPieChart } from './UndergradPieChart';
import type { HTMLMotionProps, SVGMotionProps } from 'motion/react';

function Numbers() {
    // constants
    const connectorPath = 'M500 0 V 620';
    const snakePath = 'M680 0 V 110 H 1350 V 220 H 10 V 330 H 1350 V 440 H 10 V550 H 680 V 660';
    const titleTextMotionProps: HTMLMotionProps<'div'> = {
        initial: {
            opacity: 0
        },
        whileInView: {
            opacity: 1
        },
        transition: {
            duration: 2
        }
    }
    const connectingLineMotionProps: SVGMotionProps<SVGPathElement> = {
        initial: { pathLength: 0 },
        whileInView: { pathLength: 1 },
        transition: { duration: 0.5, delay: 0.5 }
    }
    const degreeMotionProps: HTMLMotionProps<'div'> = {
        initial: {
            y: 25,
            opacity: 0
        },
        whileInView: {
            y: 0,
            opacity: 1
        },
        transition: {
            duration: 1,
            ease: 'easeInOut',
            delay: 0.5
        }
    }
    const statImageMotionProps: HTMLMotionProps<'div'> = {
        initial: {
            opacity: 0
        },
        whileInView: {
            opacity: 1,
            rotateX: 360
        },
        transition: {
            type: 'spring',
            bounce: 0.1,
            duration: 2,
            delay: 0.5
        }
    }

    return (
        <>
            <div className='header'>
                <div className='header-image'>
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{once: true}}
                        src={headerImage}
                    />
                </div>
                <div className='title'>
                    <motion.div {...titleTextMotionProps} className='title-text franklin-gothic-demi'>FINAL</motion.div>
                    <motion.div {...titleTextMotionProps} className='title-text franklin-gothic-demi'>EXERCISES</motion.div>
                    <div className='by-the-numbers'>           
                        <motion.div
                            {...titleTextMotionProps}
                            transition={{ ...titleTextMotionProps.transition, delay: 0.5 }}
                            className='year-text'
                        >
                            2024
                        </motion.div>
                        <motion.span
                            {...titleTextMotionProps}
                            transition={{ ...titleTextMotionProps.transition, delay: 1 }}
                            className='numbers-text franklin-gothic-book'
                        >
                            BY THE NUMBERS
                        </motion.span>
                    </div>
                </div>
            <svg className='connecting-line-container' height='620' width='1000'>
                <motion.path {...connectingLineMotionProps} className='connecting-line' d={connectorPath} />
            </svg>
            </div>
            <motion.div {...statImageMotionProps} className='degree-image'>
                <img src={statOneImage}></img>
            </motion.div>
            <div className='degree-section'>
                <motion.div {...degreeMotionProps} className='degree-number franklin-gothic-demi'>7616</motion.div>
                <motion.div {...degreeMotionProps} transition={{...degreeMotionProps.transition, delay: 1}} className='degree-text franklin-gothic-medium'>Total Number of Degrees Awarded</motion.div>
                <motion.hr initial={{ width: 0 }} whileInView={{width: '100%'}} transition={{ duration: 0.4, ease: 'easeOut' }} className='degree-break' />
                <div className='degree-number franklin-gothic-demi'>4394</div>
                <div className='degree-text franklin-gothic-medium'>Total Number of Baccalaureate Degrees</div>
                <svg className='connecting-line-container'height='620' width='1000'>
                    <motion.path {...connectingLineMotionProps} className='connecting-line' d={connectorPath} />
                </svg>
                <div className='degree-chart'>
                    <UndergradPieChart />
                </div>
                <svg className='connecting-line-container' height='620' width='1000'>
                    <motion.path {...connectingLineMotionProps} className='connecting-line' d={connectorPath} />
                </svg>
                <div className='degree-text franklin-gothic-medium'>Graduate and Professional Degrees</div>
                <div className='graduate-degrees-section'>
                    {/* TODO: Align these properly */}
                    <div className='graduate-degrees-subsection'>
                        <div className='graduate-degrees-image'>
                            <img src={phdImage}></img>
                        </div>
                        <motion.div {...degreeMotionProps}  className='graduate-degrees-number franklin-gothic-demi'>436</motion.div>
                        <motion.div {...degreeMotionProps} transition={{...degreeMotionProps.transition, delay: 2}} className='graduate-degrees-text franklin-gothic-medium'>Ph.Ds</motion.div>
                    </div>
                    <div className='graduate-degrees-subsection'>
                        <div className='graduate-degrees-image'>
                            <img src={jdImage}></img>
                        <motion.div {...degreeMotionProps} transition={{...degreeMotionProps.transition, delay: 1}} className='graduate-degrees-number franklin-gothic-demi'>299</motion.div>
                        <motion.div {...degreeMotionProps} transition={{...degreeMotionProps.transition, delay: 2.5}} className='graduate-degrees-text franklin-gothic-medium'>JDs</motion.div>
                        </div>
                    </div>
                    <div className='graduate-degrees-subsection'>
                        <div className='graduate-degrees-image'>
                            <img src={mdImage}></img>
                        <motion.div {...degreeMotionProps} transition={{...degreeMotionProps.transition, delay: 1.5}} className='graduate-degrees-number franklin-gothic-demi'>144</motion.div>
                        <motion.div {...degreeMotionProps} transition={{...degreeMotionProps.transition, delay: 3}} className='graduate-degrees-text franklin-gothic-medium'>MDs</motion.div>
                        </div>
                    </div>
                </div>
                <svg className='connecting-line-container'height='620' width='1000'>
                    <motion.path {...connectingLineMotionProps} className='connecting-line' d={connectorPath} />
                </svg>
                <div className='fast-degrees-section'>
                    <motion.div {...degreeMotionProps} className='stopwatch-image'>
                        <img src={stopwatchImage}></img>
                    </motion.div>
                    <div className='fast-degrees-text-section'>
                        <motion.div {...degreeMotionProps} transition={{...degreeMotionProps.transition, delay: 1}} className='fast-degrees-number franklin-gothic-demi'>10</motion.div>
                        <motion.div {...degreeMotionProps} transition={{...degreeMotionProps.transition, delay: 1.3}} className='fast-degrees-text franklin-gothic-medium'>Degrees Earned in Two Years</motion.div>
                    </div>
                </div>
                <svg className='connecting-line-container'height='620' width='1000'>
                    <motion.path {...connectingLineMotionProps} className='connecting-line' d={connectorPath} />
                </svg>
                <div className='first-gen-section'>
                    <motion.div {...statImageMotionProps} className='first-gen-image'>
                        <img src={statSixImage}></img>
                    </motion.div>
                    <motion.div {...degreeMotionProps} className='first-gen-number franklin-gothic-demi'>1092</motion.div>
                    <motion.div {...degreeMotionProps} transition={{...degreeMotionProps.transition, delay: 0.5}} className='first-gen-text franklin-gothic-medium'>First Generation College Graduates</motion.div>
                </div>
                <svg className='connecting-line-container'height='620' width='1000'>
                    <motion.path {...connectingLineMotionProps} className='connecting-line' d={connectorPath} />
                </svg>
                <div className='age-section'>
                    <motion.div {...degreeMotionProps} className='youngest-age-number'>19</motion.div>
                    <motion.div {...degreeMotionProps} className='youngest-age-text'>Age of Youngest Graduates (There are Six!)</motion.div>
                    <svg height='660' width='1360'>
                        <motion.path {...connectingLineMotionProps} transition={{delay: 1, duration: 2, ease: 'easeInOut'}} className='snake' d={snakePath} />
                    </svg>
                    <motion.div {...degreeMotionProps} className='oldest-age-number'>71</motion.div>
                    <motion.div {...degreeMotionProps} className='oldest-age-text'>Age of Oldest Graduate</motion.div>
                </div>
                <svg className='connecting-line-container'height='620' width='1000'>
                    <motion.path {...connectingLineMotionProps} className='connecting-line' d={connectorPath} />
                </svg>
            </div>
            {/*TODO: build text into doc and style, rather than using screenshots */}
            <div className='sustainable-image'>
                <img src={sustainableImage}></img>
            </div>
            <motion.div {...degreeMotionProps} className='water-bottle-number franklin-gothic-demi'>6000</motion.div>
            <motion.div {...degreeMotionProps} className='water-bottle-text franklin-gothic-medium'>16oz Water Bottles Saved</motion.div>
            <div className='towers-image'>
                <img src={waterTowersImage}></img>
            </div>
            <motion.div {...degreeMotionProps} className='balloons-number franklin-gothic-demi'>500</motion.div>
            <motion.div {...degreeMotionProps} className='balloons-text franklin-gothic-medium'>Balloons Diverted to UVA Health Children's</motion.div>
            <div className='ballons-image'>
                <img src={balloonsImage}></img>
            </div>
                <svg className='connecting-line-container' height='620' width='1000'>
                    <motion.path {...connectingLineMotionProps} className='connecting-line' d={connectorPath} />
                </svg>
            <div className='footer franklin-gothic-standard'>
                <motion.div {...degreeMotionProps} className='franklin-gothic-demi'>
                    CONGRATS 
                </motion.div>
                <motion.div {...degreeMotionProps} className='franklin-gothic-book'>
                    TO ALL OUR
                </motion.div>
                <motion.div {...degreeMotionProps} className='franklin-gothic-demi'>
                    2024 GRADS
                </motion.div>
                <motion.div {...degreeMotionProps} className='wahoowa franklin-gothic-demi'>
                    <i>WAHOOWA!</i>
                </motion.div>
            </div>
        </>
    )
}

export default Numbers;