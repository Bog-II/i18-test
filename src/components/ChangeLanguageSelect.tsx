import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const ChangeLanguageSelect = () => {
  const { t, i18n } = useTranslation();

  const handleChange = () => {};

  let defaultValue = 0;
  const currentLanguage = i18n.language;
  console.log(currentLanguage);

  return (
    <>
      <FormControl size="small">
        <InputLabel>Language</InputLabel>
        <Select
          id="demo-simple-select-helper"
          value={defaultValue}
          label="Language"
          onChange={handleChange}
        >
          <MenuItem value={0}>English</MenuItem>
          <MenuItem value={1}>Français</MenuItem>
          <MenuItem value={2}>Pусский</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};
