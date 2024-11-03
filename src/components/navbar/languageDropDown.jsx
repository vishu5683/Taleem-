// src/App.js
import React from "react";
import { AppBar, Toolbar, Typography, Menu, MenuItem, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Menu as MenuIcon, ExpandMore } from '@mui/icons-material';
import { useTranslation } from "react-i18next";

function LanguageDropDown(handleCloseLanguage,anchorElLanguage,handleOpenLanguage) {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <Box>
      <Typography
        variant="body1"
        onClick={handleOpenLanguage}
        sx={{
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "20px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
        }}
      >
        Language
        <ExpandMore />
      </Typography>
      <Menu
        anchorEl={anchorElLanguage}
        open={Boolean(anchorElLanguage)}
        onClose={handleCloseLanguage}
      >
        <MenuItem
          onClick={(e) => {
            changeLanguage("en");
            handleCloseLanguage(e);
          }}
        >
          English
        </MenuItem>
        <MenuItem
          onClick={(e) => {
            changeLanguage("fr");
            handleCloseLanguage(e);
          }}
        >
          Arabic
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default LanguageDropDown;
