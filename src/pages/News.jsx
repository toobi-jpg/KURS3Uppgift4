import useNewsData from "../data/news";
import { Grid, Paper, Pagination, Box, TextField } from "@mui/material";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SearchIcon from "@mui/icons-material/Search";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
}));

export default function News() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;
  const { data, loading, error } = useNewsData(currentPage, postsPerPage);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const totalPages = Math.ceil((data?.total || 0) / postsPerPage);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div
        className="d-flex flex-row justify-content-between"
        style={{ width: "800px" }}
      >
        <h1 className="mb-0">News</h1>
        <Box sx={{ display: "flex", alignItems: "flex-end" }} className="mb-2">
          <SearchIcon sx={{ mr: 1, my: 0.5 }} />
          <TextField id="input-with-sx" label="Search" variant="standard" />
        </Box>
      </div>
      <div style={{ maxHeight: "70vh", maxWidth: "800px" }}>
        <Grid container spacing={4}>
          {data?.posts?.map((post) => (
            <Grid key={post.id} xs={12} md={6} lg={4}>
              <Item>
                <h3>{post.title}</h3>
                <p
                  className="fs-4 text-center mx-auto px-0 px-sm-5"
                  style={{ opacity: "70%" }}
                >
                  {post.body}
                </p>
                <div className="d-flex flex-row justify-content-between align-items-center px-1">
                  <div className="d-flex flex-row gap-2 justify-content-start text-secondary">
                    {post.tags?.map((tag, index) => (
                      <p key={index} className="mb-0">
                        {tag}
                      </p>
                    ))}
                  </div>
                  <div className="d-flex flex-row gap-3">
                    <div className="d-flex flex-row align-items-center gap-1 opacity-75">
                      <VisibilityIcon />
                      <p className="fs-5 mb-0">{post.views}</p>
                    </div>
                    <div
                      className="d-flex gap-2 rounded px-2 py-1"
                      style={{
                        background: "#3a424d",
                        boxShadow: "1px 2px 2px #00000055",
                      }}
                    >
                      <div className="d-flex flex-row align-items-center gap-1">
                        <ThumbUpIcon />
                        <p className="fs-5 mb-0">
                          {post.reactions?.likes - post.reactions?.dislikes}
                        </p>
                      </div>
                      <div className="d-flex flex-row align-items-center">
                        <ThumbDownIcon />
                      </div>
                    </div>
                  </div>
                </div>
              </Item>
            </Grid>
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
                fontSize: "1.3rem", // Increase font size
              },
            }}
          />
        </Box>
        <div style={{ height: "50px" }}></div>
      </div>
    </>
  );
}
