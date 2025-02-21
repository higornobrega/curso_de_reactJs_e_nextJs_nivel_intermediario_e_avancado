import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    cont: 0,
    posts: [
      {
        id: 1,
        title: "O título 1",
        body: "O corpo 1",
      },
      {
        id: 2,
        title: "O título 2",
        body: "O corpo 2",
      },
      {
        id: 3,
        title: "O título 3",
        body: "O corpo 3",
      },
   ],
  };
  timeoutUpdate = null
  // Acontece após os componentes serem montados/carregados
  componentDidMount() {
   this.handleTimeout()
  }
  // Acontece quando o componente é atualizado
  componentDidUpdate() {
    
    this.handleTimeout()
  }
  componentWillUnmount() {
    clearTimeout(this.timeoutUpdate)
  }
  handleTimeout = () => {
    const { cont, posts } = this.state
    posts[0].title = 'O Título Mudou'
    this.timeoutUpdate = setTimeout(() => {
      this.setState({ posts, cont: cont + 1})
    }, 1000)
  }

  render() {
    const { cont, posts } = this.state;

    return (
      <div className="App">
        <h1>{cont}</h1>
        {posts.map((post) => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}
export default App;
