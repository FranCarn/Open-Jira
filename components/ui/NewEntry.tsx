import React, { useState, ChangeEvent, useContext } from "react";
import { Box, Button, TextField } from "@mui/material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { EntriesContext } from "../../context/entries";
import { UIContext } from "../../context/ui";

export const NewEntry = () => {
  const { addNewEntry } = useContext(EntriesContext);
  const { setIsAddingEntry, isAddingEntry } = useContext(UIContext);

  const [inputValue, setInputValue] = useState("");
  const [touched, setTouched] = useState(false);

  const onTextFieldChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValue(e.target.value);
  };

  const onSave = () => {
    if (!inputValue) return;
    addNewEntry(inputValue);
    setIsAddingEntry(false);
    setInputValue("");
    setTouched(false);
  };
  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>
      {isAddingEntry ? (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 1 }}
            placeholder="Nueva Entrada"
            autoFocus
            multiline
            label="Nueva Entrada"
            helperText={
              inputValue.length <= 0 && touched && "Ingrese una nueva tarea"
            }
            error={inputValue.length <= 0 && touched}
            value={inputValue}
            onChange={(e) => onTextFieldChange(e)}
            onBlur={() => setTouched(true)}
          />
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Button
              variant="text"
              color="secondary"
              onClick={() => {
                setIsAddingEntry(false);
                setTouched(false);
              }}
            >
              Cancelar
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              endIcon={<SaveOutlinedIcon />}
              onClick={onSave}
            >
              Guardar
            </Button>
          </Box>
        </>
      ) : (
        <Button
          startIcon={<AddCircleOutlinedIcon />}
          fullWidth
          variant="outlined"
          onClick={() => setIsAddingEntry(true)}
        >
          Agregar Tarea
        </Button>
      )}
    </Box>
  );
};
