import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import Loading from "./Loading";
import Paginate from "./Pagination";

const Table = () => {
  // state
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const itemsPerPage = 10;

  // get the data
  useEffect(() => {
    const getFetchData = async () => {
      await axios
        .get("http://universities.hipolabs.com/search?country=India")
        .then((response) => {
          setData(response.data);
          // console.log(response);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getFetchData();
  }, []);

  const tableData = useMemo(() => {
    let computedData = data;

    if (searchTerm) {
      computedData = computedData.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    // console.log(searchTerm);
    setTotalItems(computedData.length);

    //Current Page slice
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    return computedData.slice(indexOfFirstItem, indexOfLastItem);
  }, [data, currentPage, searchTerm]);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="homeComponent">
      <h1 className="home_title">University Details</h1>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="input_search">
            <input
              type="search"
              placeholder="Search University"
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              value={searchTerm}
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
              {tableData.length === 0 ? (
                <tr align="center">
                  <td colSpan={4}>No Data Found</td>
                </tr>
              ) : (
                tableData.map((item, index) => {
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
              )}
            </tbody>
          </table>

          <Paginate
            itemPerPage={itemsPerPage}
            totalItems={totalItems}
            paginate={paginate}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
    </div>
  );
};

export default Table;
