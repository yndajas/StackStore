import React from "react";

class About extends React.Component {
  componentDidMount() {
    document.title = "About - StackStore";
  }

  render() {
    return (
      <div>
        <h3>What is StackStore?</h3>
        <br />
        <p>With StackStore, you can:</p>
        <ul>
          <li>search for Stack Overflow questions by title</li>
          <li>view questions and answers</li>
          <li>save questions to your own store</li>
          <li>add tags and notes to questions and view questions by tag</li>
        </ul>
        <hr />
        <h3>Demo (UPDATE URL)</h3>
        <div class="embed-responsive embed-responsive-16by9 iframe_container">
          <iframe
            title="YouTube demo"
            class="embed-responsive-item"
            src="https://www.youtube.com/embed/PYwX1QGj6os"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="allowfullscreen"
          ></iframe>
        </div>
        <hr />
        <h3>Creator and GitHub repository</h3>
        <ul>
          <li>
            Ynda Jas (<a href="https://pronoun.is/they/.../themself">they</a>):{" "}
            <a href="https://github.com/yndajas">GitHub</a> |{" "}
            <a href="https://yndajas.co">website</a>
          </li>
          <li>
            <a href="https://github.com/yndajas/StackStore">
              GitHub repository
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default About;
