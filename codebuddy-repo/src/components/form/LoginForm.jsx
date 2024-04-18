import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Troque useHistory por useNavigate
import styles from './LoginForm.module.css';

const LoginForm = () => {
  const [loginData, setLoginData] = useState({ login: '', senha: '', option: '' });
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/alunos');
      if (!response.ok) {
        throw new Error('Erro ao buscar dados do servidor.');
      }
      const students = await response.json();
      const foundStudent = students.find((student) => student.nome === loginData.login && student.password === loginData.senha);
      if (foundStudent && loginData.option === 'Aluno') {
        navigate('/Profile'); // Redirecionar aluno para a página de perfil
      } else {
        const responseProfessors = await fetch('http://localhost:3000/professores');
        if (!responseProfessors.ok) {
          throw new Error('Erro ao buscar dados do servidor.');
        }
        const professors = await responseProfessors.json();
        const foundProfessor = professors.find((professor) => professor.nome === loginData.login && professor.password === loginData.senha);
        if (foundProfessor && loginData.option === 'Professor') {
          navigate('/Profile'); // Redirecionar professor para a página de perfil
        } else {
          alert('Usuário, senha ou tipo de usuário incorretos.');
        }
      }
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  return (
    <form className={styles.body} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <input type="text" id="login" name="login" placeholder="Login" onChange={handleInputChange} />
      </div>

      <div className={styles.formGroup}>
        <input type="password" id="senha" name="senha" placeholder="Senha" onChange={handleInputChange} />
      </div>

      <div className={styles.formGroup}>
        <label>
          <input
            className={`${styles.radioLabel} ${styles.checkboxLabel}`}
            type="radio"
            name="option"
            value="Professor"
            checked={loginData.option === 'Professor'}
            onChange={handleInputChange}
          />{' '}
          Professor
        </label>
        <label>
          <input
            className={`${styles.radioLabel} ${styles.checkboxLabel}`}
            type="radio"
            name="option"
            value="Aluno"
            checked={loginData.option === 'Aluno'}
            onChange={handleInputChange}
          />
          Aluno
        </label>
      </div>
      <button className={styles.button} type="submit">
        Entrar
      </button>
    </form>
  );
};

export default LoginForm;
 