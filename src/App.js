
import './App.css';
import Video from "./Pages/Video"


function App() {
  return (
    <div className="App">
      <div className='App__Video'>
        <Video
        likes = {100}
        messages = {200}
        shares = {300}
        name = "Natanael"
        description = "Bracker o goleiro"
        music = "musica epica"
        video = "https://firebasestorage.googleapis.com/v0/b/jornada2-eb156.appspot.com/o/brecker2.mp4?alt=media&token=b7e3ebf7-89a0-47a0-8a34-66f1176a71e3"
        />
        <Video
        likes = {111}
        messages = {222}
        shares = {333}
        name = "Luiz"
        description = "Falando com a gata"
        music = "musica gringa"
        video = "https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4"
        />
        
      </div>
    </div>
  );
}

export default App;
