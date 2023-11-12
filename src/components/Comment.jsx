import { Trash } from "@phosphor-icons/react"
import styles from "./Comment.module.css"
import { ThumbsUp } from "@phosphor-icons/react/dist/ssr"
import { Avatar } from "./Avatar"

export function Comment({ content }) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/DevEwertonOliveira.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Ewerton Oliveira</strong>
              <time title="11 de maio ás 08:13" dateTime="2023-04-11 08:42:00">Cerca de 1h atrás</time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>

          </header>
          <p>{content}</p>
        </div>



        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}