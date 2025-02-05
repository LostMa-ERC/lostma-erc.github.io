'use client'
import { createTheme } from '@emotion/react';

export const theme = createTheme({
  /* Add your theme colors and fonts here */
});

export const CarouselContainer = styled.div`
  ${theme.colors.gray[200]} {
    padding: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const CarouselItem = styled.div`
  ${theme.colors.gray[100]} {
    width: 300px;
    height: 150px;
    margin: 8px;
    padding: 16px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const CarouselButton = styled.button`
  ${theme.colors.gray[100]} {
    font-size: 18px;
    padding: 16px;
    border-radius: 10px;
    background-color: ${theme.colors.blue[500]};
    color: ${theme.colors.white};
    cursor: pointer;
  }
`;
