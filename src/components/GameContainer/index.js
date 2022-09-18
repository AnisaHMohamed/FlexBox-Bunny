import "./style.css";
import bunny from "../../assets/bunny.png"
// import lemon_tree from "../../assets/lemon_tree.png"
// <img  src={lemon_tree} alt="lemon tree" ></img>  
const GameContainer = () => {
  return (
    <div className="Game-container">
    <div className="board">
    <img src={bunny} className="pulse" alt="bunny" />

    </div>
 
      </div>
  );
}

export default GameContainer;
