import useNewsData from "../data/news";
import { Grid, Paper, Pagination, Box, TextField } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import NewsPost from "../components/NewsPost";

export default function News() {
  const [currentPage, setCurrentPage] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const [searchWord, setSearchWord] = useState("");
  const postsPerPage = 5;
  const { data, loading, error } = useNewsData(
    currentPage,
    postsPerPage,
    searchWord
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const totalPages = Math.ceil((data?.total || 0) / postsPerPage);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearchsubmit = () => {
    setSearchWord(inputValue);
    setCurrentPage(1);
  };

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      console.log("Enter pressed");
      handleSearchsubmit();
    }
  };

  return (
    <>
      <div
        className="d-flex flex-row justify-content-between"
        style={{ maxWidth: "800px", width: "100%" }}
      >
        <h1 className="mb-0 custom-text-gradient">News</h1>

        <Box sx={{ display: "flex", alignItems: "flex-end" }} className="mb-2">
          <SearchIcon sx={{ mr: 1, my: 0.5, fontSize: "2rem" }} />
          <TextField
            id="input-with-sx"
            label="Search"
            variant="standard"
            value={inputValue}
            onChange={handleSearchChange}
            onKeyDown={handleEnter}
            fullWidth
            sx={{
              width: "200px",
              "& .MuiInput-input": {
                fontSize: "1.5rem",
              },
              "& label": {
                fontSize: "1.4rem",
              },
              "& .MuiInputLabel-shrink": {},
            }}
          />
        </Box>
      </div>
      <div style={{ maxHeight: "70vh", maxWidth: "800px" }}>
        <Grid container spacing={4}>
          {data?.posts?.map((post) => (
            <NewsPost key={post.id} post={post} />
          ))}
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4, mb: 2 }}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            shape="rounded"
            size="large"
            hidePrevButton
            hideNextButton
            sx={{
              "& .MuiPaginationItem-root": {
                fontSize: "1.3rem",
              },
            }}
          />
        </Box>
        <div style={{ height: "50px" }}></div>
      </div>
    </>
  );
}
