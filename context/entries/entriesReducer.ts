import { Entry } from "../../interfaces/entry";
import { InitialState } from "./EntriesProvider";

type EntriesActionType =
  | { type: "Entries - Adding Entry"; payload: Entry }
  | { type: "Entries - Entry Updated"; payload: Entry };

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
    case "Entries - Entry Updated":
      return {
        ...state,
        entries: state.entries.map((entry) => {
          if (entry._id === action.payload._id) {
            entry.status = action.payload.status;
            entry.description = action.payload.description;
          }
          return entry;
        }),
      };
    default:
      return state;
  }
};
