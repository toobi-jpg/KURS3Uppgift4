import { Grid, Paper } from "@mui/material";
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
  boxShadow: "4px 4px 8px #00000055",
  height: "100%",
}));

export default function NewsPost({ post }) {
  const { title, body, tags, views, reactions } = post;

  return (
    <>
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
    </>
  );
}
