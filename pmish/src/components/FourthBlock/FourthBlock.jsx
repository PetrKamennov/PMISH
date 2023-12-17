import React from 'react'
import './FourthBlock.css'
import logo from './img/ic.png'
const FourthBlock = () => {
    return (
        <>
            <div className='FourthBlock'>
                <div className='FourthBlock__main'>
                    <h4>Особенности обучения</h4>
                    <div className="FourthBlock__main-grid__top">
                        <div className="FourthBlock__main-grid__cell">
                            <img src={logo} alt="logo" />
                            <p>Индивидуальный подход к каждому студенту</p>
                        </div>
                        <div className="FourthBlock__main-grid__cell">
                            <img src={logo} alt="logo" />
                            <p>Практическая направленность обучения</p>
                        </div>
                        <div className="FourthBlock__main-grid__cell">
                            <img src={logo} alt="logo" />
                            <p>Занятия с использованием современных технологий</p>
                        </div>
                        </div>
                    <div className="FourthBlock__main-grid__bottom">
                        <div className="FourthBlock__main-grid__cell">
                            <img src={logo} alt="logo" />
                            <p>Практическая направленность обучения</p>
                        </div>
                        <div className="FourthBlock__main-grid__cell">
                            <img src={logo} alt="logo" />
                            <p>Постоянное взаимодействие с научной группой и индустрией</p>
                    </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default FourthBlock
