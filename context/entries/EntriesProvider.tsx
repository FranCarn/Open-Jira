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
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eligendi officiis nam illum hic beatae ratione est, deleniti consequatur eveniet veniam alias magni suscipit dolorum possimus sequi fugit ipsam incidunt!",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sequi fugit ipsam incidunt!",
      status: "in-progress",
      createdAt: Date.now() - 100000,
    },
    {
      _id: uuidv4(),
      description:
        " Quas eligendi officiis nam illum hic beatae ratione est, deleniti consequatur eveniet veniam alias magni suscipit dolorum possimus sequi fugit ipsam incidunt!",
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
