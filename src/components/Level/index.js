import "./style.css";
import Header from '../Header';

const Level = ({level}) => {
   console.log(level)
  return (
    <div className="level">
   <Header/>
  <p>level: {1}</p>
 <h1>Welcome to Flexbox Bunny, a game where you help Bunny and friends by writing CSS code! Guide this bunny to the tree on the right by using the justify-content property, which aligns items horizontally and accepts the following values:
 </h1> 
 <h2>
flex-start: Items align to the left side of the container.
flex-end: Items align to the right side of the container.
center: Items align at the center of the container.
space-between: Items display with equal spacing between them.
space-around: Items display with equal spacing around them.
For example, justify-content: flex-end; will move the bunny to the right. 
</h2>
</div>
  );
}

export default Level;
