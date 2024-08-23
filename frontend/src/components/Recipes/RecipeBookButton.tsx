import React, { useState } from 'react';
import { IconButton, Badge } from '@mui/material';
import { useGlobal } from "../../utils/useContext";
import BookIcon from '@mui/icons-material/Book';
import RecipeModal from './RecipeModal';

const RecipeBookButton: React.FC = () => {
  const { savedRecipes } = useGlobal();
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <>
      <IconButton
        color="inherit"
        size="large"
        onClick={handleOpenModal}
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          backgroundColor: 'primary.main',
          '&:hover': {
            backgroundColor: '#1769aa',
          },
        }}
      >
        <Badge badgeContent={savedRecipes.length} color="warning">
          <BookIcon sx={{ color: 'white' }} />
        </Badge>
      </IconButton>

      <RecipeModal open={modalOpen} handleClose={handleCloseModal} />
    </>
  );
};

export default RecipeBookButton;
