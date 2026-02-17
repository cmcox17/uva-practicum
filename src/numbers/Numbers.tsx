import './numbers.css';

function Numbers() {
    return (
        <>
            <div className='header'>
                <div className='header-image'>
                    <img src='src/assets/FE24ByTheNumbers/Header_SF_FEBytheNumbers_DA_JD.jpg'></img>
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
                <img src='src/assets/FE24ByTheNumbers/FE24ByTheNumbers_Stat_1_Circle.png'></img>
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
                            <img src='src/assets/FE24ByTheNumbers/FE24ByTheNumbers_PhD_Icon.png'></img>
                        </div>
                        <div className='graduate-degrees-number franklin-gothic-demi'>436</div>
                        <div className='graduate-degrees-text franklin-gothic-medium'>Ph.Ds</div>
                    </div>
                    <div className='graduate-degrees-subsection'>
                        <div className='graduate-degrees-image'>
                            <img src='src/assets/FE24ByTheNumbers/FE24ByTheNumbers_JD_Icon.png'></img>
                        <div className='graduate-degrees-number franklin-gothic-demi'>436</div>
                        <div className='graduate-degrees-text franklin-gothic-medium'>JDs</div>
                        </div>
                    </div>
                    <div className='graduate-degrees-subsection'>
                        <div className='graduate-degrees-image'>
                            <img style={{width: '335px', height: '382px'}} src='src/assets/FE24ByTheNumbers/FE24ByTheNumbers_MD_Icon.png'></img>
                        <div className='graduate-degrees-number franklin-gothic-demi'>436</div>
                        <div className='graduate-degrees-text franklin-gothic-medium'>MDs</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Numbers;