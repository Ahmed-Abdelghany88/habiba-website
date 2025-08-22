import './Demos.css'
import Englishreel from '../../assets/audio/English commercial demo reel.mp3';
import ModernArabic from '../../assets/audio/Modern_Standard_Arabic-Narration.mp3';
import GenericArabic from '../../assets/audio/Arabic Generic demo reel.mp3';
const Demos = () => {
  return (
    <div className='demos-container'>
      <h1 className='demos-header'>Habiba Bahaa's Voice Over Demos</h1>
      <div className='demos-list'>
        <div className='demo-item'>
          <h2 className='demo-title'>English commercial demo reel</h2>
          <audio controls>
            <source src={Englishreel} type='audio/mpeg' />
            Your browser does not support the audio element.
          </audio>
          <p className='demo-description'>Description for Demo 1</p>
        </div>
        <div className='demo-item'>
          <h2 className='demo-title'>Arabic Generic demo reel</h2>
          <audio controls>
            <source src={GenericArabic} type='audio/mpeg' />
            Your browser does not support the audio element.
          </audio>
          <p className='demo-description'>Description for Demo 2</p>
        </div>
        <div className='demo-item'>
          <h2 className='demo-title'>Modern Standard Arabic-Narration.</h2>
          <audio controls>
            <source src={ModernArabic} type='audio/mpeg' />
            Your browser does not support the audio element.
          </audio>
          <p className='demo-description'>Description for Demo 3</p>
        </div>
        {/* <div className='demo-item'>
          <h2 className='demo-title'>Demo 4</h2>
          <audio controls>
            <source src='demo4.mp3' type='audio/mpeg' />
            Your browser does not support the audio element.
          </audio>
          <p className='demo-description'>Description for Demo 4</p>
        </div> */}

      </div>

    </div>
  )
}

export default Demos
