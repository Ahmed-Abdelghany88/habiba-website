import './Cover.css';
// import coverImage2 from '../../assets/images/cover2.jpeg';
import coverImage3 from '../../assets/images/cover3.jpg';
import coverAudio from '../../assets/audio/cover.mp3';
import coverMic from '../../assets/images/cover-mic.png';
const Cover = () => {

  return (
    <div className="cover-container">
      <img className="cover-mic" src={coverMic} alt="Cover Mic" />
      <div className="cover-content">
        <h1 className='cover-title'><strong>Habiba Bahaa</strong></h1>
        <h3 className='cover-slogan'>From heartbeats to soundwaves</h3>

        <p className='cover-sample'><strong>Demo</strong></p>
        
    <audio controls className='cover-audio'>
      <source src={coverAudio} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
      </div>
      <div className="cover-image-container">
        <img className="cover-image" src={coverImage3} alt="Cover" />
      </div>
    </div>
  );
};

export default Cover;
