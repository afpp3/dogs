import React from 'react';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_DELETE } from '../../Services/api';

import styles from './PhotoDelete.module.css';

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  const handlePhotoDelete = async () => {
    const confirm = window.confirm('Tem certeza que deseja deletar a foto?');

    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  };

  return (
    <>
      {loading ? (
        <button disabled className={styles.delete}>
          Deletando...
        </button>
      ) : (
        <button onClick={handlePhotoDelete} className={styles.delete}>
          Deletar
        </button>
      )}
      ;
    </>
  );
};

export default PhotoDelete;
