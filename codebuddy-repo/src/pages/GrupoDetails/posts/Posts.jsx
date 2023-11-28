import React  from "react";
import styles from "./Posts.module.css";
import Blueball from "./Blueball";

const Posts = () => {

return (
    <div>
    <div className={styles.post}>
    <Blueball className={styles.blueball}/>
    <div className={styles.text}>Boa noite caros, com combinado, postei o desafio que irá compor nossa nota N2 com prazo ate xx/xx. </div>
    </div>
    </div>
);

};

export default Posts;
