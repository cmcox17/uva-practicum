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
        transition: { duration: 0.5, delay: 0.25 }
    }
    const gradDegreeMotionProps: HTMLMotionProps<'div'> = {
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
            ease: 'easeInOut'
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
            <div className='degree-image'>
                <img src={statOneImage}></img>
            </div>
            <div className='degree-section'>
                <div className='degree-number franklin-gothic-demi'>7616</div>
                <div className='degree-text franklin-gothic-medium'>Total Number of Degrees Awarded</div>
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
                        <motion.div {...gradDegreeMotionProps} transition={{...gradDegreeMotionProps.transition, delay: 0}}  className='graduate-degrees-number franklin-gothic-demi'>436</motion.div>
                        <motion.div {...gradDegreeMotionProps} transition={{...gradDegreeMotionProps.transition, delay: 1.5}} className='graduate-degrees-text franklin-gothic-medium'>Ph.Ds</motion.div>
                    </div>
                    <div className='graduate-degrees-subsection'>
                        <div className='graduate-degrees-image'>
                            <img src={jdImage}></img>
                        <motion.div {...gradDegreeMotionProps} transition={{...gradDegreeMotionProps.transition, delay: 0.5}} className='graduate-degrees-number franklin-gothic-demi'>436</motion.div>
                        <motion.div {...gradDegreeMotionProps} transition={{...gradDegreeMotionProps.transition, delay: 2}} className='graduate-degrees-text franklin-gothic-medium'>JDs</motion.div>
                        </div>
                    </div>
                    <div className='graduate-degrees-subsection'>
                        <div className='graduate-degrees-image'>
                            <img src={mdImage}></img>
                        <motion.div {...gradDegreeMotionProps} transition={{...gradDegreeMotionProps.transition, delay: 1}} className='graduate-degrees-number franklin-gothic-demi'>436</motion.div>
                        <motion.div {...gradDegreeMotionProps} transition={{...gradDegreeMotionProps.transition, delay: 2.5}} className='graduate-degrees-text franklin-gothic-medium'>MDs</motion.div>
                        </div>
                    </div>
                </div>
                <svg className='connecting-line-container'height='620' width='1000'>
                    <motion.path {...connectingLineMotionProps} className='connecting-line' d={connectorPath} />
                </svg>
                <div className='fast-degrees-section'>
                    <div className='stopwatch-image'>
                        <img src={stopwatchImage}></img>
                    </div>
                    <div className='fast-degrees-text-section'>
                        <div className='fast-degrees-number franklin-gothic-demi'>10</div>
                        <div className='fast-degrees-text franklin-gothic-medium'>Degrees Earned in Two Years</div>
                    </div>
                </div>
                <svg className='connecting-line-container'height='620' width='1000'>
                    <motion.path {...connectingLineMotionProps} className='connecting-line' d={connectorPath} />
                </svg>
                <div className='first-gen-section'>
                    <div className='first-gen-image'>
                        <img src={statSixImage}></img>
                    </div>
                    <div className='first-gen-number franklin-gothic-demi'>1092</div>
                    <div className='first-gen-text franklin-gothic-medium'>First Generation College Graduates</div>
                </div>
                <svg className='connecting-line-container'height='620' width='1000'>
                    <motion.path {...connectingLineMotionProps} className='connecting-line' d={connectorPath} />
                </svg>
                <div className='age-section'>
                    <div className='youngest-age-number'>19</div>
                    <div className='youngest-age-text'>Age of Youngest Graduates (There are Six!)</div>
                    <svg height='660' width='1360'>
                        <path className='snake' d={snakePath} ></path>
                    </svg>
                    <div className='oldest-age-number'>71</div>
                    <div className='oldest-age-text'>Age of Oldest Graduate</div>
                </div>
                <svg className='connecting-line-container'height='620' width='1000'>
                    <motion.path {...connectingLineMotionProps} className='connecting-line' d={connectorPath} />
                </svg>
            </div>
            {/*TODO: build text into doc and style, rather than using screenshots */}
            <div className='sustainable-image'>
                <img src={sustainableImage}></img>
            </div>
            <div className='water-bottle-number franklin-gothic-demi'>6000</div>
            <div className='water-bottle-text franklin-gothic-medium'>16oz Water Bottles Saved</div>
            <div className='towers-image'>
                <img src={waterTowersImage}></img>
            </div>
            <div className='balloons-number franklin-gothic-demi'>500</div>
            <div className='balloons-text franklin-gothic-medium'>Balloons Diverted to UVA Health Children's</div>
            <div className='ballons-image'>
                <img src={balloonsImage}></img>
            </div>
                <svg className='connecting-line-container'height='620' width='1000'>
                    <motion.path {...connectingLineMotionProps} className='connecting-line' d={connectorPath} />
                </svg>
            <div className='footer franklin-gothic-standard'>
                <span className='franklin-gothic-demi'>
                    CONGRATS<br/> 
                </span>
                <span className='franklin-gothic-book'>
                    TO ALL OUR <br/>
                </span>
                <span className='franklin-gothic-demi'>
                    2024 GRADS
                </span>
                <span className='wahoowa franklin-gothic-demi'>
                    <i>WAHOOWA!</i>
                </span>
            </div>
        </>
    )
}

export default Numbers;