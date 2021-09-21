import React from "react";

class About extends React.Component {
  componentDidMount() {
    document.title = "About - StackStore";
  }

  render() {
    return (
      <div>
        <h2>What is StackStore?</h2>
        <br />
        <p>With StackStore, you can:</p>
        <ul>
          <li>search for Stack Overflow questions by title</li>
          <li>view questions and answers</li>
          <li>save questions to your own store</li>
          <li>add tags and notes to questions and view questions by tag</li>
        </ul>
        <hr />
        <h3>Demo</h3>
        <div class="embed-responsive embed-responsive-16by9 iframe_container">
          <iframe
            title="YouTube demo"
            class="embed-responsive-item"
            src="https://www.youtube.com/embed/47qTNiLzgQU"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="allowfullscreen"
          ></iframe>
        </div>
        <hr />
        <h3>Creator and GitHub repository</h3>
        <ul>
          <li>
            Ynda Jas (
            <a
              href="https://pronoun.is/they/.../themself"
              title="Creator pronouns"
            >
              they
            </a>
            ):{" "}
            <a href="https://github.com/yndajas" title="Creator GitHub profile">
              GitHub
            </a>{" "}
            |{" "}
            <a href="https://yndajas.co" title="Creator website">
              website
            </a>
          </li>
          <li>
            <a
              href="https://github.com/yndajas/StackStore"
              title="GitHub repository"
            >
              GitHub repository
            </a>
          </li>
        </ul>
        <h3>Image credits</h3>
        <ul>
          <li>
            Logo icon/favicon based on shape (colour edited for use on
            StackStore) by{" "}
            <a
              href="https://www.flaticon.com/authors/freepik"
              title="Freepik on Flaticon"
            >
              Freepik
            </a>
            , available{" "}
            <a
              href="https://www.flaticon.com/free-icon/stacked-files_17640"
              title="Logo icon/favicon"
            >
              here
            </a>
          </li>
          <li>
            Background image by{" "}
            <a href="https://www.sanderottens.com" title="Sander Ottens">
              Sander Ottens
            </a>
            , available at{" "}
            <a
              href="https://www.transparenttextures.com"
              title="Background image source one"
            >
              Transparent Textures
            </a>{" "}
            and{" "}
            <a
              href="https://www.toptal.com/designers/subtlepatterns/cubes"
              title="Background image source two"
            >
              Subtle Patterns
            </a>{" "}
            (by Toptal)
          </li>
        </ul>
      </div>
    );
  }
}

export default About;
