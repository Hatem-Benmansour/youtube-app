import './App.css';
import Comments from './components/comments/Comments';
import HeaderNav from './components/headerNav/HeaderNav';
import ProfileDescription from './components/profileDescription/ProfileDescription';
import VidéoList from './components/videoList/VidéoList';
import VideoPlayer from './components/videoPlayer/VideoPlayer';

function App() {
  return (
    <div className="App">
      <HeaderNav/>
      <div style={{display:"flex"}}>
        <div >
        <VideoPlayer/>
        <ProfileDescription/>
        <Comments/>
        </div>
        <div>
          <VidéoList/>
        </div>
      </div>  
    </div>
  );
}

export default App;
