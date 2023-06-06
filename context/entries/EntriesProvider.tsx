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
  entries: [
    {
      _id: uuidv4(),
      description: "Lek1 chorro devolve a william",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description: "A neo le encanta el pito",
      status: "in-progress",
      createdAt: Date.now() - 100000,
    },
    {
      _id: uuidv4(),
      description: "Timo no te la vas a cojer vive en otro pais",
      status: "finished",
      createdAt: Date.now() - 100000000,
    },
  ],
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
