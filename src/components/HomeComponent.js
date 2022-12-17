import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Paginate from "./Pagination";

const HomeComponent = () => {
  // state
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search_input, setSearch_input] = useState("");
  const [search_data, setSearch_data] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(15);

  // get the data
  const getFetchData = async () => {
    setLoading(true);
    const response = await fetch(
      "http://universities.hipolabs.com/search?country=India"
    );
    const data = await response.json();
    setData(data);
    setSearch_data(data);
    setLoading(false);
  };

  // filter the data
  const searchFilter = async () => {
    const filterData = search_data.filter((item) => {
      return item.name.toLowerCase().includes(search_input.toLowerCase());
    });
    setData(filterData);
  };

  // get currentpost
  const indexOfLastItem = currentPage * dataPerPage;
  const indexOfFirstItem = indexOfLastItem - dataPerPage;
  const currentItem = data.slice(indexOfFirstItem, indexOfLastItem);

  // hooks
  useEffect(() => {
    getFetchData();
  }, []);
  useEffect(() => {
    searchFilter();
  }, [search_input]);

  // change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="homeComponent">
      <h1>University Details</h1>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="input_search">
            <input
              type="search"
              placeholder="Search University"
              onChange={(e) => setSearch_input(e.target.value)}
              value={search_input}
            />
          </div>
          <table>
            <thead>
              <tr>
                <th>Country</th>
                <th>University</th>
                <th>State</th>
                <th>Website</th>
              </tr>
            </thead>
            <tbody>
              {currentItem.length > 0 ? (
                currentItem.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item?.country}</td>
                      <td>{item?.name}</td>
                      <td>{item?.["state-province"]}</td>
                      <td>
                        <a
                          href={item?.web_pages}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {item?.web_pages}
                        </a>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <>
                  <tr align="center">
                    <td colSpan={4}>No Data Found</td>
                  </tr>
                </>
              )}
            </tbody>
          </table>

          <Paginate
            postsPerPage={dataPerPage}
            totalPosts={data.length}
            paginate={paginate}
          />
        </>
      )}
    </div>
  );
};

export default HomeComponent;
