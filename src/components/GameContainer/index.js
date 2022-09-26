import "./style.css";
import bunny from "../../assets/bunny.png";
import lemon_tree from "../../assets/lemon_tree.png";
const GameContainer = ({ styleCSS }) => {
  return (
    <div className="Game-container">
      <div className="board">
        <div className="game-area">
          <div className="bunny-div" style={styleCSS}>
            <img src={bunny} className="pulse" alt="bunny" />
          </div>
          <div className="background">
            <img src={lemon_tree} className="tree" alt="lemon tree"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameContainer;
