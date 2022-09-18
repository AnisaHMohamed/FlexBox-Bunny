import "./style.css";

const Level = (level) => {
   console.log(level)
  return (
    <div className="Game-container">
    <img src={bunny} className="pulse" alt="bunny" />
    <img  src={lemon_tree} alt="lemon tree"></img>    </div>
  );
}

export default Level;
