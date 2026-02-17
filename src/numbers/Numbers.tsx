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
            </div>
            <div className='degree-number franklin-gothic-demi'>7616</div>
            <div className='degree-text franklin-gothic-medium'>Total Number of Degrees Awarded</div>
            <hr className='degree-break'></hr>
            <div className='degree-number franklin-gothic-demi'>4394</div>
            <div className='degree-text franklin-gothic-medium'>Total Number of Baccalaureate Degrees</div>
        </>
    )
}

export default Numbers;