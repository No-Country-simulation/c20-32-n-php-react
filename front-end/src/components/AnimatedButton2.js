import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledButton = styled(motion.button)`
  background-color: #aaa; /* Ajusta el color de fondo según tu diseño */
  border: none;
  color: #333;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background-color: #bbb; /* Cambia el color al pasar el mouse */
  }
`;

const AnimatedButton2 = () => {
  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  return (
    <StyledButton whileHover="hover">Principal</StyledButton>
  );
};

export default AnimatedButton2;