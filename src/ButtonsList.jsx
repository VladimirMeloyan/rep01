import './ButtonList.css'

function ButtonsList({heroObject, addHero, sortHeroAZ, sortHeroZA, sortHeroByRole, clearList, resetList, selectMarksman, selectFighter, selectAssassin, selectTank, selectMage}) {
    return (
        <div className='btns__list'>
            <button onClick={addHero}>Add Hero</button>
            <button onClick={sortHeroAZ}>Sort Hero A-Z</button>
            <button onClick={sortHeroZA}>Sort Hero Z-A</button>
            <button onClick={sortHeroByRole}>Sort Hero by Role</button>
            <button onClick={clearList}>Clear list</button>
            <button onClick={resetList}>Reset list</button>
            <br />
            <h2 className='sl'>Select Role</h2>
            <br />
            <div className='select__role'>
            <button onClick={() => selectMarksman('Marksman')}>Select Marksman</button>
            <button onClick={() => selectFighter('Fighter')}>Select Fighter</button>
            <button onClick={() => selectAssassin('Assassin')}>Select Assassin</button>
            <button onClick={() => selectTank('Tank')}>Select Tank</button>
            <button onClick={() => selectMage('Mage')}>Select Mage</button>
            </div>
            
        </div>
    )
}

export default ButtonsList