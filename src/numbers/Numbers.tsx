// styling
import './numbers.css';

// image imports
import headerImage from '../assets/header.jpg';
import statOneImage from '../assets/stat_1.png';
import phdImage from '../assets/phd.png';
import jdImage from '../assets/jd.png';
import mdImage from '../assets/md.png';
// import statSixImage from '../assets/stat_6.png';
 import stopwatchImage from '../assets/stopwatch.png';
// import footerImage from '../assets/footer.png';

function Numbers() {
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
            </div>
            <div className='connecting-line'></div>
            <div className='degree-image'>
                <img src={statOneImage}></img>
            </div><div className='degree-section'>
                <div className='degree-number franklin-gothic-demi'>7616</div>
                <div className='degree-text franklin-gothic-medium'>Total Number of Degrees Awarded</div>
                <hr className='degree-break'></hr>
                <div className='degree-number franklin-gothic-demi'>4394</div>
                <div className='degree-text franklin-gothic-medium'>Total Number of Baccalaureate Degrees</div>
                <div className='connecting-line'></div>
                <div className='degree-chart'>
                    {/* TODO: Implement MUI X Pie Chart with Degree Data */}
                    Placeholder!
                </div>
                <div className='connecting-line'></div>
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
                            <img style={{width: '335px', height: '382px'}} src={mdImage}></img>
                        <div className='graduate-degrees-number franklin-gothic-demi'>436</div>
                        <div className='graduate-degrees-text franklin-gothic-medium'>MDs</div>
                        </div>
                    </div>
                </div>
                <div className='connecting-line'></div>
                <div className='fast-degrees-section'>
                    <div className='stopwatch-image'>
                        <img src={stopwatchImage}></img>
                    </div>
                    <div className='fast-degrees-text-section'>
                        <div className='fast-degrees-number franklin-gothic-demi'>10</div>
                        <div className='fast-degrees-text franklin-gothic-medium'>Degrees Earned in Two Years</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Numbers;