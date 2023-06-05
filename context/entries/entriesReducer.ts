import { InitialState } from "./EntriesProvider";

type EntriesActionType = { type: "Entries - " };

export const entriesReducer = (
  state: InitialState,
  action: EntriesActionType
): InitialState => {
  switch (action.type) {
    case "Entries - ":
      return {
        ...state,
      };

    default:
      return state;
  }
};
