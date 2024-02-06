import './SixSection.css';
import icon from '../image/ic.png'

function SixSection() {
  return (
    <div className="six-container block" id='two'>
      <h1 className='block-header'>Вклад в науку</h1>
      <div className="block-content content">
        <div className="content-block">
          <div className="content-txt left-text1">
              <span className="text-img">01</span>
              <div className="text-block">
                  <span className="text-block-title">Исследования и разработки</span>
                  <p className="text-block-content">Мы активно участвуем в исследовательской работе и разработке новых методов и инновационных технологий в области медицинской инженерии</p>
              </div>
          </div>
          <div className="content-txt left-text2">
              <span className="text-img">02</span>
              <div className="text-block">
                  <span className="text-block-title">Исследования и разработки</span>
                  <p className="text-block-content">Мы активно участвуем в исследовательской работе и разработке новых методов и инновационных технологий в области медицинской инженерии</p>
              </div>
          </div>
        </div>
        <div className="content-icon icon">
          <span className="icon-txt">ic</span>
        </div>
        <div className="content-block">
          <div className="content-txt right-text1">
              <span className="text-img">03</span>
              <div className="text-block">
                  <span className="text-block-title">Исследования и разработки</span>
                  <p className="text-block-content">Мы активно участвуем в исследовательской работе и разработке новых методов и инновационных технологий в области медицинской инженерии</p>
              </div>
          </div>
          <div className="content-txt right-text2">
              <span className="text-img">04</span>
              <div className="text-block">
                  <span className="text-block-title">Исследования и разработки</span>
                  <p className="text-block-content">Мы активно участвуем в исследовательской работе и разработке новых методов и инновационных технологий в области медицинской инженерии</p>
              </div>
          </div>
        </div>
      </div>
      <div className="end_line-block">
        <span className="end_line"/>
      </div>
    </div>
  );
}

export default SixSection;
