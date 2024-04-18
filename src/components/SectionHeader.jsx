import { Typography, styled } from "@mui/material";
import React from "react";

const SectionHeading = styled("div")({
  display: "flex",
  alignItems: "center",
  marginBottom: "32px",
  position: "relative",
  borderBottom: "2px solid #000",
  maxWidth: "fit-content",
});

const SectionHeader = ({ FirstWords, SecondWords }) => {
  return (
    <>
      <SectionHeading>
        {/* SecondWrodsがない場合の分岐 */}
        {SecondWords !== undefined ? (
          <>
            <Typography
              variant="h2"
              fontSize={36}
              fontWeight={600}
              sx={{ mr: "18px" }}
            >
              <Typography variant="span" sx={{ color: "#FEAF00" }}>
                {FirstWords[0]}
              </Typography>
              {FirstWords.slice(1)}
            </Typography>
            <Typography>{SecondWords}</Typography>
          </>
        ) : (
          <>
            <Typography
              variant="h2"
              fontSize={36}
              fontWeight={600}
            >
              <Typography variant="span" sx={{ color: "#FEAF00" }}>
                {FirstWords[0]}
              </Typography>
              {FirstWords.slice(1)}
            </Typography>
            <Typography>{SecondWords}</Typography>
          </>
        )}
      </SectionHeading>
    </>
  );
};

export default SectionHeader;
