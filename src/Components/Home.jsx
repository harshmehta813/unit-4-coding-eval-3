import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import Pagination from "./Pagination";
import { addRepo, getRepo } from "./redux";
import Input from "./Input";
import Repos from "./Repos";
import { useState } from "react";
import { Redirect } from "react-router-dom";

function Repo() {
  const [page, setPage] = useState(1);
  const [perPageInput, setPerPageInput] = useState(1);
  const [perPage, setPerPage] = useState(5);

  const dispatch = useDispatch();
  const handleAdd = (text) => {
    dispatch(addRepo(text)).then((res) => {
      dispatch(getRepo(text));
    });
  };

  const handlePage = (page) => {
    dispatch(addRepo(page)).then((res) => {
      dispatch(getRepo(page));
    });
  };

  const changePageTo = (num) => {
    if (num <= 1) {
      setPage(1);
      return;
    }
    setPage(num);
  };

  const handlePerPage = () => {
    setPerPage(perPageInput);
  };

  const isAuth = useSelector((state) => state.auth.isAuth);
  if (!isAuth) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <Input onAdd={handleAdd} onSearch={handlePage} />
      <Repos allFunc={[changePageTo, perPage, page, setPage]} />
      <Pagination
        currentPage={page}
        onClickCallback={(page) => changePageTo(page)}
        total={Math.ceil(30 / perPage)}
      />
    </div>
  );
}

export default Repo;
