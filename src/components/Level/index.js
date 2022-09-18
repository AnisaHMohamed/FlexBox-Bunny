import "./style.css";

const Level = ({level}) => {
   console.log(level)
  return (
    <>
   
  <p>level: {1}</p>
 <h1>Welcome to Flexbox Froggy, a game where you help Froggy and friends by writing CSS code! Guide this frog to the lilypad on the right by using the justify-content property, which aligns items horizontally and accepts the following values:
 </h1> 
 <h2>
flex-start: Items align to the left side of the container.
flex-end: Items align to the right side of the container.
center: Items align at the center of the container.
space-between: Items display with equal spacing between them.
space-around: Items display with equal spacing around them.
For example, justify-content: flex-end; will move the frog to the right. 
</h2>
</>
  );
}

export default Level;
