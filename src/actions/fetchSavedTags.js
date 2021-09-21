import { getBackendUrl } from "../helpers/getBackendUrl";
import { rekeySavedTagData } from "../helpers/rekeySavedTagData";
import { sortTags } from "../helpers/sortTags";

export const fetchSavedTags = (user) => {
  return (dispatch) => {
    fetch(`${getBackendUrl()}/users/${user.id}/tags`, {
      method: "GET",
      headers: {
        token: user.token,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.error) {
          window.alert(json.error);
        } else {
          const rekeyedTags = json.data.map((tag) => rekeySavedTagData(tag));

          const processedTags = sortTags(rekeyedTags);

          dispatch({ type: "FETCH_SAVED_TAGS", payload: processedTags });
        }
      });
  };
};
