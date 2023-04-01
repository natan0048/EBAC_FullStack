import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter({name, description, music}) {
  return (
    <div className="VideoFooter">
      <div className="VideoFooter__text">
        <h3>@{name}</h3>
        <p>{description}</p>
        <div className="VideoFooter__music">
          <MusicNoteIcon className="VideoFooter__icon"/>
          <div className="VideoFooterMusic__text">
            <p>{music}</p>
          </div>
        </div>
      </div>
      <img className="VideoFooter__record"
      alt="imagem de um vinil girando"/*descrever o item para quem tem problemas de visao e mostra caso a imagem nao carregar*/
      src="https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/vinil.png?alt=media&token=d174bbec-b930-41e4-ab50-af1ea81bb7da"
      />
    </div>
  );
}

export default VideoFooter;
