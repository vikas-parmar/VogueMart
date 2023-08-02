import { Box } from "@mui/material";
import { MainCarousel, NewsLetter, ShoppingList } from "components";

const Home = () => {
  return (
    <Box>
      <MainCarousel />
      <ShoppingList />
      <NewsLetter />
    </Box>
  );
};

export default Home;
