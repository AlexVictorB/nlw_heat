import styles from './styles.module.scss'

import logoImg from '../../assets/logo.svg'

export function MessageList() {
    return (
        <div className={styles.messageListWapper}>
            <img src={logoImg} alt="DoWhile 2021" />

            <ul className={styles.messageList}>
                <li className={styles.message}>
                    <p className={styles.messageContent}>Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamooo pra cima! 🔥🔥</p>

                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/AlexVictorB.png" alt="Alex Victor" />
                        </div>
                        <span>Alex Victor</span>
                    </div>
                </li>

                <li className={styles.message}>
                    <p className={styles.messageContent}>Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamooo pra cima! 🔥🔥</p>

                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/AlexVictorB.png" alt="Alex Victor" />
                        </div>
                        <span>Alex Victor</span>
                    </div>
                </li>

                <li className={styles.message}>
                    <p className={styles.messageContent}>Não vejo a hora de começar esse evento, com certeza vai ser o melhor de todos os tempos, vamooo pra cima! 🔥🔥</p>

                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/AlexVictorB.png" alt="Alex Victor" />
                        </div>
                        <span>Alex Victor</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}