import { Entry } from "../../interfaces/entry";
import { InitialState } from "./EntriesProvider";

type EntriesActionType =
  | { type: "Entries - Adding Entry"; payload: Entry }
  | { type: "Entries - " }
  | { type: "Entries - " };

export const entriesReducer = (
  state: InitialState,
  action: EntriesActionType
): InitialState => {
  switch (action.type) {
    case "Entries - Adding Entry":
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };

    default:
      return state;
  }
};
