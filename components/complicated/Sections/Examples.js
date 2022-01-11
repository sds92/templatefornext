import styles from './Examples.module.sass';
import { examples } from '../../data/examples';

export default function Examples() {
  return (
    <section className={styles.examples}>
      <h1 className={styles.examples_title}>
        Примеры использования <span>ЦСП</span>
      </h1>
      <p className={styles.examples_subtitle}>
        Цементно-стружечные плиты применяются в самых разных областях строительства, для самых разных целей.
      </p>
      <div className={styles.examples_item_list}>
        {examples.map((item, i) => (
          <div key={i} className={styles.examples_item}>
            <img className={styles.examples_item_img} src={`${item.img}`} />
            {/* <p className={styles.examples_product_size}>{item.title}</p> */}
            <div className={styles.overlay}>
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
