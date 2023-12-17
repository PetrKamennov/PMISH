import React from 'react'
import './ThirdBlock.css'
const ThirdBlock = () => {
    return (
        <>
            <div className='ThirdBlock'>
                <div className='ThirdBlock__main'>
                    <h3>Преимущества ПИШ СамГМУ</h3>
                    <div className="ThirdBlock__main-cardBlock">
                        <div className="FirstCard">
                            <div className="card">
                                <span>01</span>
                                <b>Интеграция международных стандартов</b>
                                <p>Мы предлагаем обучение, соответствующее мировым стандартам, что позволяет нашим студентам быть востребованными не только в России, но и за рубежом.</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="99" viewBox="0 0 6 99" fill="none">
                                <path d="M3.18292 95.5988L3.18293 2.80479" stroke="url(#paint0_linear_119_48)" stroke-opacity="0.68" stroke-width="5" stroke-linecap="round" />
                                <defs>
                                    <linearGradient id="paint0_linear_119_48" x1="4.93112" y1="85.2631" x2="8.47479" y2="84.8827" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#4345BE" />
                                        <stop offset="1" stop-color="#0B6FAD" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className="SecondCard">
                            <div className="card">
                                <span>02</span>
                                <b>Уникальное сочетание специальностей</b>
                                <p>Медицинская инженерия - бурно развивающаяся отрасль. Объединение этих двух сфер позволяет нашим выпускникам обладать уникальным объемом знаний и навыков.</p>
                            </div>
                        </div>
                        <div className="ThirdCard">
                            <div className="card">
                                <span>03</span>
                                <b>Преподаватели <br /> и научные руководители</b>
                                <p>Наша команда состоит из опытных и признанных экспертов в области инженерии и медицины, которые готовы поделиться своими знаниями и опытом с новым поколением специалистов.</p>
                            </div>
                            <div className="ThirdCard__shadow"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThirdBlock
