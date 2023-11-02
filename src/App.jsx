import { Post } from "./Post"
import { Header } from "./components/Header"

import "./global.css"

export function App() {
  return (
    <div>
      <Header />
      <Post
        author="Ewerton Oliveira"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, animi. Quo deserunt sequi corporis et esse quae ipsa tenetur, a officia impedit, omnis tempora ducimus magni quasi laborum quisquam dolor."
      />
      <Post
        author="Gabriel Buzzi"
        content="Um novo post muito legal"
      />

    </div>
  )
}

