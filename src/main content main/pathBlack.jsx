import './pathBlack.css'
import './39bnzm (1).mp4'
import myvideo from './39bnzm (1).mp4'
import lastPhoto from '../logos/bear (2).png'
import seccondPhoto from '../logos/plushie bear.png'
import feetPic from '../logos/feetjwelery.jpg'


const NoAfterMainContent = () => {
    return ( 
        <div id="mainContentSlash">
            <div className="videocontentcontainer">
               <video id='video' src={myvideo}  type="video/mp4" muted loop autoPlay playsInline ></video>
               <div className="cover">
                <h1 className='zoomIn'>Welcome</h1>
               </div>
            </div>
            {/* main video div end */}
            <div id="container1">
                <div className="parsing">
                    <img src={seccondPhoto} className='lastphoto' alt="" srcset="" />
                    <div className="colorbottom">
                        <a href="" className='zoomIn'><h2>Want Plushies?</h2></a>
                    </div>
                </div>
                <div className="parsing">
                    <img src={feetPic} className='lastphoto' alt="" srcset="" />
                    <div className="colorbottom">
                        <a href="" className='zoomIn'><h2>Want Jewlery?</h2></a>
                    </div>
                </div>
                <div className="parsing">
                    <img className='lastphoto' src={lastPhoto} alt=""/>
                    <div className="colorbottom">
                       <a href="" className='zoomIn'><h2>Just Scrolling?</h2></a>
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default NoAfterMainContent;