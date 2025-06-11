import { Grid } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function NewsPost({ post }) {
  const { title, body, tags, views, reactions } = post;

  return (
    <>
      <Grid key={post.id} xs={12} md={6} lg={4}>
        <div className="d-flex flex-column customCardGradient custom-border py-4 px-4 text-center gap-4 rounded-4 custom-shadow1">
          <h3>{title}</h3>
          <p
            className="fs-4 text-center mx-auto px-0 px-sm-5"
            style={{ opacity: "70%" }}
          >
            {body}
          </p>
          <div className="d-flex flex-row justify-content-between align-items-center">
            <div className="d-flex flex-row gap-2 justify-content-start text-secondary">
              {tags?.map((tag, index) => (
                <p key={index} className="mb-0">
                  {tag}
                </p>
              ))}
            </div>
            <div className="d-flex flex-row gap-3">
              <div className="d-flex flex-row align-items-center gap-1 opacity-75">
                <VisibilityIcon />
                <p className="fs-5 mb-0">{views}</p>
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
                    {reactions?.likes - reactions?.dislikes}
                  </p>
                </div>
                <div className="d-flex flex-row align-items-center">
                  <ThumbDownIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Grid>
    </>
  );
}
