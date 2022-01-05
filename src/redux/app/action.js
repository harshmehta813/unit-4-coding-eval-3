import { appConstants } from "./actionTypes";

export const getRepoRequest = () => {
  return {
    type: appConstants.GET_REPO_REQUEST,
    payload: {
      isLoading: true
    }
  };
};

export const getRepoSuccess = (repo) => {
  return {
    type: appConstants.GET_REPO_SUCCESS,
    payload: {
      repo: repo
    }
  };
};

export const getRepoFailure = () => {
  return {
    type: appConstants.GET_REPO_FAILURE,
    payload: {
      isError: true
    }
  };
};

export const getRepo = () => (dispatch) => {
  const requestAction = getRepoRequest();
  dispatch(requestAction);
  return fetch(
    "https://api.github.com/search/repositories?q=masai&page=2&per_page=4"
  )
    .then((res) => res.json())
    .then((res) => {
      const successAction = getRepoSuccess(res);
      dispatch(successAction);
    })
    .catch((res) => {
      const failureAction = getRepoFailure();
      dispatch(failureAction);
    });
};

export const addRepoRequest = () => {
  return {
    type: appConstants.ADD_REPO_REQUEST,
    payload: {
      isLoading: true
    }
  };
};

export const addRepoSuccess = (repo) => {
  return {
    type: appConstants.ADD_REPO_SUCCESS,
    payload: {
      repo: repo
    }
  };
};

export const addRepoFailure = () => {
  return {
    type: appConstants.ADD_REPO_FAILURE,
    payload: {
      isError: true
    }
  };
};

export const addRepo = ({ title, status, id }) => {
  return {
    type: appConstants.ADD_REPO,
    payload: {
      title,
      status,
      id
    }
  };
};

export const addRepos = (text) => (dispatch) => {
  console.log(text);
  const requestAction = addRepoRequest();
  dispatch(requestAction);
  return fetch(
    `https://api.github.com/search/repositories?q=${text}&page=2&per_page=4`,
    {
      method: "GET",
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
      console.log(successAction, "search data");
      dispatch(successAction);
    })
    .catch((res) => {
      const failureAction = addRepoFailure();
      dispatch(failureAction);
    });
};
