import { FC, useReducer } from "react";
import { EntriesContext, entriesReducer } from "./";
import { Entry } from "../../interfaces/entry";
import { v4 as uuidv4 } from "uuid";
export interface InitialState {
  entries: Entry[];
}
interface Props {
  children: JSX.Element;
}
const INITIAL_STATE: InitialState = {
  entries: [],
};

export const EntriesProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, INITIAL_STATE);
  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      createdAt: Date.now(),
      status: "pending",
    };
    dispatch({ type: "Entries - Adding Entry", payload: newEntry });
  };
  const updateEntry = (entry: Entry) => {
    dispatch({ type: "Entries - Entry Updated", payload: entry });
  };
  return (
    <EntriesContext.Provider
      value={{
        ...state,
        addNewEntry,
        updateEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
