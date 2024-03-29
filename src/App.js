import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import {
  Feed,
  Navbar,
  ChannelDetail,
  SearchFeed,
  VideoDetail,
} from "./components";

export default function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }} height={{ sx: "auto", md: "100%" }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}
