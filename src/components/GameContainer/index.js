import "./style.css";
import bunny from "../../assets/bunny.png"
import lemon_tree from "../../assets/lemon_tree.png"
const GameContainer = () => {
  return (
    <div className="Game-container">
    <img src={bunny} className="pulse" alt="bunny" />
    <img  src={lemon_tree} alt="lemon tree"></img>    </div>
  );
}

export default GameContainer;
