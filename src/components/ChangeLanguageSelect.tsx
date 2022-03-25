import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

const languagesKey: [string, string][] = [
  ['en', 'English'],
  ['fr', 'Français'],
  ['ru', 'Pусский'],
];

export const ChangeLanguageSelect = () => {
  const { t, i18n } = useTranslation();

  const handleChange = (event: SelectChangeEvent) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <>
      <FormControl size="small">
        <InputLabel>Language</InputLabel>
        <Select
          id="demo-simple-select-helper"
          value={i18n.language}
          label="Language"
          onChange={handleChange}
        >
          {/* <MenuItem value={0}>English</MenuItem>
          <MenuItem value={1}>Français</MenuItem>
          <MenuItem value={2}>Pусский</MenuItem> */}

          {languagesKey.map(([key, language]) => (
            <MenuItem key={language} value={key}>
              {language}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};
