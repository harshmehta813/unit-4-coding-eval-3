import { useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { getRepo } from "./redux";
import Avatar from "@mui/material/Avatar";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Button from "@mui/material/Button";

function PrintRepo({ allFunc }) {
  const [changePageTo, perPage, page, setPage] = allFunc;

  let { repo, isLoading, isError } = useSelector(
    (state) => state.app,
    shallowEqual
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRepo());
  }, []);

  repo = repo.filter((_, i) => i >= (page - 1) * perPage && i < page * perPage);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          margin: "20px"
        }}
      >
        {isLoading && <h3>Loading...</h3>}
        {isError && <h3> Something went wrong!</h3>}
        {repo?.map((i) => (
          <div
            className="repo_card"
            style={{
              border: "1px solid black",
              padding: "20px"
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "0.5rem"
              }}
            >
              <Avatar src={i.owner.avatar_url} sx={{ width: 56, height: 56 }} />
              ID : {i.id}
            </div>
            <p>Repository Name : {i.full_name}</p>
            <p>Description : {i.description}</p>
            <div className="topics">
              {i.topics?.map((j) => (
                <Button variant="outlined" size="small">
                  {j}
                </Button>
              ))}
            </div>
            <div className="repo_details">
              <div>
                <Button variant="contained" startIcon={<StarBorderIcon />}>
                  {" "}
                  {i.stargazers_count}
                </Button>
              </div>
              <div>{i.language}</div>
              <div>Updated on {i.updated_at.split("T").join(" ")}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default PrintRepo;
