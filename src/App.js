import "./App.css";
import { useState, useEffect } from "react";
import { getUser, getAll } from "./api/service";

function Card() {
  const [dataUser, setDataUser] = useState({});
  const [dataAllUser, setDataAllUser] = useState([]);
  const [isClick, setIsClick] = useState({});

  useEffect(() => {
    getUser()
      .then(({ data: { results } }) => {
        const convertToObj = results.reduce((a, b) =>
          Object.assign({ a, b }, {})
        );
        setDataUser(convertToObj);
      })
      .catch(() => {});

    getAll()
      .then(({ data: { results } }) => {
        setDataAllUser(results);
      })
      .catch(() => {});
  }, []);

  console.log("data :", Object.keys(isClick).length);

  return (
    <>
      <div className="App">
        <div
          className="card w-full shadow-sm m-3"
          style={{
            height: "30rem",
            width: "40rem",
            overflowY: "auto",
          }}
        >
          <div
            className="card-header mb-2 sticky-top d-flex flex-column"
            style={{ backgroundColor: "white" }}
          >
            <div className="d-flex  flex-column">
              {" "}
              {dataUser && (
                <>
                  <div className="d-flex">
                    <img
                      src={
                        Object.keys(isClick).length > 0
                          ? isClick.picture.large
                          : dataUser.picture?.large
                      }
                      alt={dataUser.title}
                      className="img-thumbnail"
                      style={{ width: "10vw" }}
                    />
                    <div></div>
                    <div className="mx-3 d-flex flex-column">
                      <div>
                        Name :
                        <span>{`${
                          Object.keys(isClick).length > 0
                            ? isClick.name?.first
                            : dataUser.name?.first
                        } ${
                          Object.keys(isClick).length > 0
                            ? isClick.name?.last
                            : dataUser.name?.last
                        }`}</span>
                      </div>
                      <div>
                        Email :{" "}
                        <span>
                          {Object.keys(isClick).length > 0
                            ? isClick.email
                            : dataUser?.email}
                        </span>
                      </div>
                      <div>
                        Birthday :{" "}
                        <span>
                          {Object.keys(isClick).length > 0
                            ? isClick.dob.date
                            : dataUser.dob?.date}
                        </span>
                      </div>
                      <div>
                        Address :{" "}
                        <span>{`${
                          Object.keys(isClick).length > 0
                            ? isClick.location?.street?.number
                            : dataUser.location?.street?.number
                        } ${
                          Object.keys(isClick).length > 0
                            ? isClick.location?.street?.name
                            : dataUser.location?.street?.name
                        }`}</span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="card-body mt-2 d-flex text-align-center flex-wrap">
            {Array.isArray(dataAllUser) &&
              dataAllUser.map((item, index) => {
                return (
                  <>
                    <div className="m-2">
                      <img
                        style={{ cursor: "pointer" }}
                        src={item.picture.medium}
                        alt={item.title}
                        className="img-thumbnail"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsClick({ ...item });
                        }}
                      />
                    </div>
                  </>
                );
              })}
          </div>
          <div className="card-footer">Footer...</div>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <div className="d-flex justify-content-center m-3">
        <span style={{ color: "red" }}>Manipulate Random User</span>
      </div>
      <Card />
    </>
  );
}

export default App;
