import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginForm.module.css'; 

const LoginForm = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <form className={styles.body}>
      <div className={styles.formGroup}>
        <input type="text" id="login" name="login" placeholder="Login" />
      </div>

      <div className={styles.formGroup}>
        <input type="password" id="senha" name="senha" placeholder="Senha" />
      </div>
      <div className={styles.formGroup}>
      <label>
        <input className={`${styles.radioLabel} ${styles.checkboxLabel}`}
          type="radio"
          name="option"
          value="Professor"
          checked={selectedOption === 'Professor'}
          onChange={handleOptionChange}
        /> Professor
      </label>
        <label>
          <input className={`${styles.radioLabel} ${styles.checkboxLabel}`}
            type="radio"
            name="option"
            value="Aluno"
            checked={selectedOption === 'Aluno'}
            onChange={handleOptionChange}
          />Aluno
        </label>
      </div>
      <Link to="/Profile">
        <button className={styles.button} type="submit">
          Entrar
        </button>
      </Link>
    </form>
  );
};

export default LoginForm;
