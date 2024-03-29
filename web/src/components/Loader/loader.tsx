// @ts-expect-error css module
import styles from './loader.module.css'

/**
 * https://dev.to/afif/i-made-100-css-loaders-for-your-next-project-4eje
 */
const Loader = () => (
  <div className="flex h-full w-full p-10">
    <div className={styles.loader}></div>
  </div>
)

export default Loader
