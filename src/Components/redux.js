import {
  addRepoFailure,
  addRepoRequest,
  addRepoSuccess,
  getRepoFailure,
  getRepoRequest,
  getRepoSuccess
} from "../redux/app/action";

export const getRepo = (text, page) => (dispatch) => {
  const requestAction = getRepoRequest();
  dispatch(requestAction);
  return fetch(
    `https://api.github.com/search/repositories?q=${text}&page=2&per_page=${page}`
  )
    .then((res) => res.json())
    .then((res) => {
      const successAction = getRepoSuccess(res);
      console.log(successAction);
      dispatch(successAction);
    })
    .catch((res) => {
      const failureAction = getRepoFailure();
      dispatch(failureAction);
    });
};

export const addRepo = (text) => (dispatch) => {
  const requestAction = addRepoRequest();
  dispatch(requestAction);
  return fetch(
    "https://api.github.com/search/repositories?q=masai&page=2&per_page=4",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: text,
        status: false
      })
    }
  )
    .then((res) => res.json())
    .then((res) => {
      const successAction = addRepoSuccess(res);
      dispatch(successAction);
    })
    .catch((res) => {
      const failureAction = addRepoFailure();
      dispatch(failureAction);
    });
};
