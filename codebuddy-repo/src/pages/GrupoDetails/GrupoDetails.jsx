import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import NavbarGrupo from "./componentsGrupo/NavbarGrupo";
import ContainerG from "../../components/container/ContainerG";
import styles from "./GrupoDetails.module.css";
import Posts from "./posts/Posts";
import nextleft from "../../img/nextleft.png";
import nextright from "../../img/nextright.png";
import PopupComponent from "./componentsGrupo/PopupComponent";
import { usePosts } from "./posts/PostsProvider";

const GrupoDetails = () => {
  const { nome } = useParams(); // Usar nome ao invés de id, se o parâmetro na rota for nome
  const { posts, setPosts } = usePosts();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`http://localhost:3000/posts?grupo=${encodeURIComponent(nome)}`);
        const postData = await response.json();
        setPosts(postData);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [nome, setPosts]); // Adicionar nome como dependência do useEffect

  const handleCreatePost = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <Navbar />
      <ContainerG style={{ backgroundColor: "#4565B7" }}>
        <NavbarGrupo />
        <div className={styles.postsContainer}>
          <div className={styles.postsWrapper}>
            {posts.map((post) => (
              <Posts key={post.id} groupName={nome} text={post.texto} />
            ))}
          </div>
        </div>
        <div className={styles.botaoCriarPostIntegrated} onClick={handleCreatePost}>
          <div className={styles.text}>+</div>
        </div>
        {isPopupOpen && (
          <PopupComponent onClose={handleClosePopup} />
        )}
        <div className={styles.bottomImagesContainer}>
          <img src={nextright} alt="nextright" className={`${styles.bottomImage} ${styles.inverted}`} />
          <img src={nextleft} alt="nextleft" className={styles.bottomImage} />
        </div>
      </ContainerG>
    </div>
  );
};

export default GrupoDetails;
