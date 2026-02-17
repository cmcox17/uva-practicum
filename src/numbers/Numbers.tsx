import './numbers.css';

function Numbers() {
    return (
        <>
            <div className='header'>
                <div className='header-image'>
                    <img src='src/assets/FE24ByTheNumbers/Header_SF_FEBytheNumbers_DA_JD.jpg'></img>
                </div>
                <div className='title'>
                    <div className='title-text'>FINAL</div>
                    <div className='title-text'>EXERCISES</div>
                    <div className='by-the-numbers'>           
                        <div className='year-text'>2024</div>
                        <span className='numbers-text'>BY THE NUMBERS</span>
                    </div>
                </div>
            </div>
            <div className='connecting-line'></div>
        </>
    )
}

export default Numbers;