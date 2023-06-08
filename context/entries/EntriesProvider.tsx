import { FC, useEffect, useReducer } from "react";
import { EntriesContext, entriesReducer } from "./";
import { Entry } from "../../interfaces/entry";
import entriesApi from "../../apis/entriesApi";

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
  const addNewEntry = async (description: string) => {
    try {
      const { data } = await entriesApi.post<Entry>("/entries", {
        description,
      });
      dispatch({ type: "Entries - Adding Entry", payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  const updateEntry = (entry: Entry) => {
    dispatch({ type: "Entries - Entry Updated", payload: entry });
  };

  const refreshEntries = async () => {
    const { data } = await entriesApi.get<Entry[]>("/entries");
    dispatch({ type: "Entries - Charging Initial Data", payload: data });
  };

  useEffect(() => {
    refreshEntries();
  }, []);

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
