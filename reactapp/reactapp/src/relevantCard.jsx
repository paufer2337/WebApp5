import "./relevantCard.css";

function RelevantCard() {
  return (
    <div className="relevant-card">
      <div className="relevant-card-body">
        <h2 id="relevant-today-title">Relevant idag</h2>
        <h2 id="relevant-card-title">404</h2>
        <p id="relevant-card-text">404</p>
        <a href="404" id="relevant-card-link" target="_self">
          404
        </a>
        <p id="relevant-card-tags">Nyckelord: </p>
        <img id="relevant-card-image" src="" />
        <button id="add-image-button" className="btn btn-primary">
          Lägg till bild
        </button>
      </div>
    </div>
  );
}

export default RelevantCard;
