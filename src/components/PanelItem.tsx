import React from "react";
import styles from "./PanelItem.module.scss";

function PanelItem() {
  return (
    <div
      //Add if more content
      //   style={{ overflowY: "scroll", scrollbarWidth: "thin" }}
      className={styles.PanelItemContainer}
    >
      <div className={styles.PanelText}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          totam eos nemo atque consequatur deleniti numquam sit repellat est
          voluptates nisi fugiat explicabo autem saepe tempore veniam doloribus
          aliquid quo! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Dolore rerum atque saepe est officia. Qui quos eaque, accusamus magnam
          perspiciatis, unde facere quam aliquam molestiae necessitatibus aut
          esse. Reprehenderit, quod. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Voluptates, quos. In consequuntur exercitationem,
          quam facilis ipsam asperiores sunt corporis voluptas rerum rem,
          deleniti obcaecati commodi explicabo. Doloremque eveniet impedit aut.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam et
          inventore earum officia? Dolores, dolor atque laborum expedita vel
          eius veniam accusamus asperiores, autem ut et harum impedit totam
          laboriosam. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Illo iure voluptatum corru
        </p>
      </div>
    </div>
  );
}

export default PanelItem;
