import React from "react";
import RiveComponent from "../../global/animations/riveComponent";
import styles from "../css/indexSeccion3.module.css";

const IndexSeccion3 = () => {
  return (
    <section id="home" className={styles.sectionss}>
      <div className={`${styles.rivecomp} ${styles.web}`}>
        <RiveComponent
          src="/rive/cbluna-demo-respaldo.riv"
          artboard="soluciones"
          stateMachines="State Machine 1"
          autoplay={true}
          fit="fill"
        />
      </div>

    </section>
  );
};

export default IndexSeccion3;
