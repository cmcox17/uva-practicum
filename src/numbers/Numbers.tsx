// styling
import './numbers.css';
import * as motion from "motion/react-client";

// image imports
import headerImage from '../assets/header.jpg';
import mdImage from '../assets/md.png';
import jdImage from '../assets/jd.png';
import phdImage from '../assets/phd.png';
import statOneImage from '../assets/stat_1.png';
import statSixImage from '../assets/stat_6.png';
import stopwatchImage from '../assets/stopwatch.png';
import { UndergradPieChart } from './UndergradPieChart';
import { stagger, type HTMLMotionProps, type SVGMotionProps, type Variants } from 'motion/react';

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
        },
        viewport: {
            once: true
        }
    }
    const connectingLineMotionProps: SVGMotionProps<SVGPathElement> = {
        initial: {
            pathLength: 0
        },
        whileInView: {
            pathLength: 1
        },
        transition: {
            duration: 0.8,
            delay: 0.5
        },
        viewport: {
            once: true
        }
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
        },
        viewport: {
            once: true
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
        },
        viewport: {
            once: true
        }
    }

    const parentTypewriter: Variants = {
        initial: {
            width: '100%'
        },
        whileInView: {
            width: '100%',
            transition: {
                delay: 1,
                delayChildren: stagger(1.5),
                duration: 1.5
            }
        }
    }

    const childTypewriterTitle: Variants = {
        initial: {opacity: 0},
        whileInView: {opacity: 1, transition: {duration: 1.5, ease: 'easeInOut'}}
    }
    const childTypewriterBody: Variants = {
        initial: {width: 0},
        whileInView: {width: '100%', transition: {duration: 1.5}}
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
                <motion.div {...degreeMotionProps} className='degree-text franklin-gothic-medium'>Total Number of Degrees Awarded</motion.div>
                <svg className='degree-break' height='200' width='2000'>
                    <motion.path initial={{ pathLength: 0 }} whileInView={{pathLength: 1}} transition={{duration: 1, delay: 0.5, ease: 'easeInOut'}} viewport={{once: true}} d={'M 0 0 H 2000'}/>
                </svg>
                <motion.div {...degreeMotionProps} className='degree-number franklin-gothic-demi'>4394</motion.div>
                <motion.div {...degreeMotionProps} className='degree-text franklin-gothic-medium'>Total Number of Baccalaureate Degrees</motion.div>
                <svg className='connecting-line-container' height='620' width='1000'>
                    <motion.path {...connectingLineMotionProps} className='connecting-line' d={connectorPath} />
                </svg>
                <motion.div {...degreeMotionProps} className='degree-chart-container'>
                    <UndergradPieChart />
                </motion.div>
                <svg className='connecting-line-container' height='620' width='1000'>
                    <motion.path {...connectingLineMotionProps} className='connecting-line' d={connectorPath} />
                </svg>
                <motion.div {...degreeMotionProps} className='degree-text franklin-gothic-medium'>Graduate and Professional Degrees</motion.div>
                <div className='graduate-degrees-section'>
                    <div className='graduate-degrees-subsection'>
                        <motion.div {...degreeMotionProps} className='graduate-degrees-image'>
                            <img src={phdImage}></img>
                        </motion.div>
                        <motion.div {...degreeMotionProps} transition={{...degreeMotionProps.transition, delay: 1.8}} className='graduate-degrees-number franklin-gothic-demi'>436</motion.div>
                        <motion.div {...degreeMotionProps} transition={{...degreeMotionProps.transition, delay: 3}} className='graduate-degrees-text franklin-gothic-medium'>Ph.Ds</motion.div>
                    </div>
                    <div className='graduate-degrees-subsection'>
                        <motion.div {...degreeMotionProps} transition={{...degreeMotionProps.transition, delay: 1}} className='graduate-degrees-image'>
                            <img src={jdImage}></img>
                        </motion.div>
                        <motion.div {...degreeMotionProps} transition={{...degreeMotionProps.transition, delay: 2.2}} className='graduate-degrees-number franklin-gothic-demi'>299</motion.div>
                        <motion.div {...degreeMotionProps} transition={{...degreeMotionProps.transition, delay: 3.4}} className='graduate-degrees-text franklin-gothic-medium'>JDs</motion.div>
                    </div>
                    <div className='graduate-degrees-subsection'>
                        <motion.div {...degreeMotionProps} transition={{...degreeMotionProps.transition, delay: 1.4}} className='graduate-degrees-image'>
                            <img src={mdImage}></img>
                        </motion.div>
                        <motion.div {...degreeMotionProps} transition={{...degreeMotionProps.transition, delay: 2.6}} className='graduate-degrees-number franklin-gothic-demi'>144</motion.div>
                        <motion.div {...degreeMotionProps} transition={{...degreeMotionProps.transition, delay: 3.8}} className='graduate-degrees-text franklin-gothic-medium'>MDs</motion.div>
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
                    <motion.div {...degreeMotionProps} transition={{...degreeMotionProps.transition, delay: 1}} className='oldest-age-number'>71</motion.div>
                    <motion.div {...degreeMotionProps} className='oldest-age-text'>Age of Oldest Graduate</motion.div>
                </div>
                <svg className='connecting-line-container'height='620' width='1000'>
                    <motion.path {...connectingLineMotionProps} className='connecting-line' d={connectorPath} />
                </svg>
            </div>
            <motion.div className='quote-paragraph' initial='initial' whileInView='whileInView' variants={parentTypewriter} viewport={{ once: true }}>
                <motion.h3 variants={childTypewriterTitle} viewport={{ once: true }} className='quote-header franklin-gothic-demi'>Sustainable Finals, Water Bottles, and Balloons</motion.h3>
                <motion.p className='quote-paragraph' variants={childTypewriterBody} viewport={{ once: true }}>The Office of Major Events partners with UVA Sustainability to reduce waste during Finals Weekend.</motion.p>
                <motion.div className='quote-paragraph' variants={childTypewriterBody} viewport={{ once: true }}>"Reusable water bottles will be allowed through guest security gates as long as the bottles are completely empty,"</motion.div>
                <motion.div className='quote-paragraph' variants={childTypewriterBody} viewport={{ once: true }}>said Lela Garner, the student outreach and engagement manager for UVA Sustainability.'</motion.div>
            </motion.div>
            <motion.div {...degreeMotionProps} style={{ margin: '1rem'}} className='water-bottle-number franklin-gothic-demi'>6000</motion.div>
            <motion.h3 {...degreeMotionProps} style={{ margin: '1.2rem'}} className='water-bottle-text franklin-gothic-medium'>16oz Water Bottles Saved</motion.h3>
            <motion.div className='quote-paragraph' initial='initial' whileInView='whileInView' variants={parentTypewriter} viewport={{ once: true }}>
                <motion.div className='quote-paragraph' variants={childTypewriterBody} viewport={{ once: true }}>Guests will notice several blue water towers once they enter the Lawn. "They have the capacity to fill 6,000</motion.div>
                <motion.div className='quote-paragraph' variants={childTypewriterBody} viewport={{ once: true }}>16-ounce water bottles and play a helpful role in reducing single-use plastic waste," Garner said.<br/><br/></motion.div>
                <motion.div className='quote-paragraph' variants={childTypewriterBody} viewport={{ once: true }}>UVA also encourages graduates to refrain from bringing balloons to Final Exercises. "Although balloons contribute</motion.div>
                <motion.div className='quote-paragraph' variants={childTypewriterBody} viewport={{ once: true }}>to the festive atmosphere during celebrations, they can create logistical challenges by obstructing access to</motion.div>
                <motion.div className='quote-paragraph' variants={childTypewriterBody} viewport={{ once: true }}>assembly areas, disrupting processions and blocking views for many," Garner said.</motion.div>
            </motion.div>
            <motion.div {...degreeMotionProps} style={{ margin: '1rem'}} className='balloons-number franklin-gothic-demi'>500</motion.div>
            <motion.div {...degreeMotionProps} style={{ margin: '1.2rem'}} className='balloons-text franklin-gothic-medium'>Balloons Diverted to UVA Health Children's</motion.div>
            <motion.div className='quote-paragraph' initial='initial' whileInView='whileInView' variants={parentTypewriter} viewport={{ once: true }}>
                <motion.div className='quote-paragraph' variants={childTypewriterBody} viewport={{ once: true }}>"Our Balloon Brigade volunteers will collect items and deliver them to UVA Health Children's and other community</motion.div>
                <motion.div className='quote-paragraph' variants={childTypewriterBody} viewport={{ once: true }}>organizations," she said. "The Balloon Brigade team can divert approximately 500 balloons, equivalent to filling</motion.div>
                <motion.div className='quote-paragraph' variants={childTypewriterBody} viewport={{ once: true }}>an entire classroom in New Cabell Hall."<br/><br/></motion.div>
                <motion.div className='quote-paragraph' variants={childTypewriterBody} viewport={{ once: true }}>Balloons are prohibited in John Paul Jones Arena.</motion.div>
            </motion.div>
                <svg className='connecting-line-container' height='620' width='1000'>
                    <motion.path {...connectingLineMotionProps} className='connecting-line' d={connectorPath} />
                </svg>
            <div className='footer franklin-gothic-standard'>
                <motion.h2 {...degreeMotionProps} style={{'marginBottom': '1rem'}} className='franklin-gothic-demi'>
                    CONGRATS 
                </motion.h2>
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