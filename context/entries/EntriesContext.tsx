import { createContext } from "react";
import { Entry } from "../../interfaces/entry";

interface ContextProps {
  entries: Entry[];
  addNewEntry: (description: string) => void;
  updateEntry: (id: Entry, showSnackbar?: boolean) => void;
  deleteEntry: (id: string) => void;
}

export const EntriesContext = createContext({} as ContextProps);
