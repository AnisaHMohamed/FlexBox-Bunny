import "./style.css";
import Header from "../Header";

const Level = ({ level, style, updateStyle }) => {
  // level one hardcoded text
  // TODO: create object to intake levels and update text 
  // TODO: Validate the bunny has reached destination.

  return (
    <div className="level">
      <Header />
      <p>level: {level}</p>

      <p id="instructions">
        Welcome to Flexbox Bunny, a game where you help Bunny and friends by
        writing CSS code! Guide this frog to the tree on the right by using the
        <span className="code help" >justify-content</span>
        property, which aligns items horizontally and accepts the following
        values:
      </p>
      <ul>
        <li>
          <span className="code">flex-start</span>: Items align to the left side of the
          container.
        </li>
        <li>
          <span className="code">flex-end</span>: Items align to the right side of the container.
        </li>
        <li>
          <span className="code">center</span>: Items align at the center of the container.
        </li>
        <li>
          <span className="code">space-between</span>: Items display with equal spacing between
          them.
        </li>
        <li>
          <span className="code">space-around</span>: Items display with equal spacing around
          them.
        </li>
      </ul>
      <p>
        For example, <span className="code">justify-content: flex-end;</span> will move the frog
        to the right.
      </p>
      <div id="css">
        <div className="line-numbers">
          <p>
            .board &#123;
            <br />
            &#x9; display:flex;
            <br />
            <textarea
              style={{ height: "44px" }}
              autoFocus=""
              autoCapitalize="none"
              value={style.styleInput}
              onChange={(e) => updateStyle(e)}
            ></textarea>
            <br />
            &#125;
          </p>
        </div>
      </div>
    </div>
  );
};

export default Level;
