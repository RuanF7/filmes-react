import styles from './Container.module.css'

type containerProps = {
  Routes: string
}


const Container = (props: containerProps) => {
  return (
    <div className={styles.container}>{props.children}</div>
  )
}

export default Container;