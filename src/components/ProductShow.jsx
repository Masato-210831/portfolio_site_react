import React from "react";
import { styled, Box, Typography, Link, List, ListItem } from "@mui/material";
import SectionHeader from "./SectionHeader";

const WorksWrapper = styled("section")({
  maxWidth: "1080px",
  padding: "48px 40px",
  margin: "0 auto",
});

const ProductShow = ({data, details}) => {
  return (
    <WorksWrapper>
      <SectionHeader FirstWords={data.name} />
      <Box display={"flex"}>

        <Box sx={{ mr: 10, maxWidth: "496px"}}>
          <img
            src={data.imgPath}
            alt="product"
            style={{ maxWidth: "100%", border:'1px solid #000', boxShadow:'3px 3px 3px rgba(0, 0, 0, 0.2)'  }}
          />
        </Box>


        <Box>
          {details.map((item, index) => (
            <Box key={item + index} sx={{ mb: 2 }}>
              <Typography
                variant="subtitle1"
                component="dt"
                sx={{ fontWeight: "bold" }}
              >
                {item.title}
              </Typography>
              <Typography variant="body2" component="dd">
                {item.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </WorksWrapper>
  );
};

export default ProductShow;
