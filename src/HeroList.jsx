import ButtonsList from './ButtonsList'
import './HeroList.css'

function HeroList({heroObject, addHero, sortHeroAZ, sortHeroZA, sortHeroByRole, clearList, resetList, selectMarksman, selectFighter, selectAssassin, selectTank, selectMage, deleteHeroByIndex}) {
    return (
        <div className='hero__list'>
            <ul>
                {
                    heroObject.map((elem, index) => {
                        return (
                            <li key={elem.id} className={elem.role.toLowerCase()}>
                                <img src={elem.img}></img>
                                <h2>{elem.heroName}</h2>
                                <h3>{elem.role}</h3>
                                <span onClick={() => {deleteHeroByIndex(index)}}>&#10006;</span>
                            </li>
                        )
                    })
                }
            </ul>
            <ButtonsList
            addHero={addHero}
            sortHeroAZ={sortHeroAZ}
            sortHeroZA={sortHeroZA}
            sortHeroByRole={sortHeroByRole}
            clearList={clearList}
            resetList={resetList}
            selectMarksman={selectMarksman}
            selectFighter={selectFighter}
            selectAssassin={selectAssassin}
            selectTank={selectTank}
            selectMage={selectMage}
            deleteHeroByIndex={deleteHeroByIndex}
            />
        </div>
    )
}

export default HeroList