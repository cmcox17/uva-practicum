// styling
import './numbers.css';

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

function Numbers() {
    // constants
    const connectorPath = 'M500 0 V 620';
    const snakePath = 'M680 0 V 110 H 1350 V 220 H 10 V 330 H 1350 V 440 H 10 V550 H 680 V 660';
    return (
        <>
            <div className='header'>
                <div className='header-image'>
                    <img src={headerImage}></img>
                </div>
                <div className='title'>
                    <div className='title-text franklin-gothic-demi'>FINAL</div>
                    <div className='title-text franklin-gothic-demi'>EXERCISES</div>
                    <div className='by-the-numbers'>           
                        <div className='year-text'>2024</div>
                        <span className='numbers-text franklin-gothic-book'>BY THE NUMBERS</span>
                    </div>
                </div>
            <svg className='connecting-line-container'height='620' width='1000'>
                <path className='connecting-line' d={connectorPath}></path>
            </svg>
            </div>
            <div className='degree-image'>
                <img src={statOneImage}></img>
            </div>
            <div className='degree-section'>
                <div className='degree-number franklin-gothic-demi'>7616</div>
                <div className='degree-text franklin-gothic-medium'>Total Number of Degrees Awarded</div>
                <hr className='degree-break'></hr>
                <div className='degree-number franklin-gothic-demi'>4394</div>
                <div className='degree-text franklin-gothic-medium'>Total Number of Baccalaureate Degrees</div>
                <svg className='connecting-line-container'height='620' width='1000'>
                    <path className='connecting-line' d={connectorPath}></path>
                </svg>
                <div className='degree-chart'>
                    <UndergradPieChart />
                </div>
                <svg className='connecting-line-container' height='620' width='1000'>
                    <path className='connecting-line' d={connectorPath}></path>
                </svg>
                <div className='degree-text franklin-gothic-medium'>Graduate and Professional Degrees</div>
                <div className='graduate-degrees-section'>
                    {/* TODO: Align these properly */}
                    <div className='graduate-degrees-subsection'>
                        <div className='graduate-degrees-image'>
                            <img src={phdImage}></img>
                        </div>
                        <div className='graduate-degrees-number franklin-gothic-demi'>436</div>
                        <div className='graduate-degrees-text franklin-gothic-medium'>Ph.Ds</div>
                    </div>
                    <div className='graduate-degrees-subsection'>
                        <div className='graduate-degrees-image'>
                            <img src={jdImage}></img>
                        <div className='graduate-degrees-number franklin-gothic-demi'>436</div>
                        <div className='graduate-degrees-text franklin-gothic-medium'>JDs</div>
                        </div>
                    </div>
                    <div className='graduate-degrees-subsection'>
                        <div className='graduate-degrees-image'>
                            <img src={mdImage}></img>
                        <div className='graduate-degrees-number franklin-gothic-demi'>436</div>
                        <div className='graduate-degrees-text franklin-gothic-medium'>MDs</div>
                        </div>
                    </div>
                </div>
                <svg className='connecting-line-container'height='620' width='1000'>
                    <path className='connecting-line' d={connectorPath}></path>
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
                    <path className='connecting-line' d={connectorPath}></path>
                </svg>
                <div className='first-gen-section'>
                    <div className='first-gen-image'>
                        <img src={statSixImage}></img>
                    </div>
                    <div className='first-gen-number franklin-gothic-demi'>1092</div>
                    <div className='first-gen-text franklin-gothic-medium'>First Generation College Graduates</div>
                </div>
                <svg className='connecting-line-container'height='620' width='1000'>
                    <path className='connecting-line' d={connectorPath}></path>
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
                    <path className='connecting-line' d={connectorPath}></path>
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
                    <path className='connecting-line' d={connectorPath}></path>
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