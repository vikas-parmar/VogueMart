import { useTheme } from "@emotion/react";
import { Box, Typography, Stack } from "@mui/material";
import { shades } from "theme";
import styled from "@emotion/styled";
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
} from "@mui/icons-material";

const SocialIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Footer = () => {
  const {
    palette: { neutral },
  } = useTheme();

  return (
    <Box marginTop="70px" padding="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box maxWidth="600px">
          <Typography
            variant="h3"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            Vogue mart 🛍️
          </Typography>
          <Typography variant="subtitle1">
            Welcome to Vogue Mart, your premier online fashion destination.
            Elevate your style with chic dresses, trendy tops, and must-have
            accessories. Discover the latest trends and impeccable quality. Step
            into the world of Vogue Mart - Where Fashion Reigns Supreme.
            Redefine your wardrobe with confidence. Shop now and make a
            statement!
          </Typography>
          <Stack direction="row" gap={2} pt={2}>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
          </Stack>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">Careers</Typography>
          <Typography mb="30px">Our Stores</Typography>
          <Typography mb="30px">Terms & Conditions</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px">Help Center</Typography>
          <Typography mb="30px">Track Your Order</Typography>
          <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
          <Typography mb="30px">Returns & Refunds</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px" display="flex" alignItems="center">
            <Room style={{ marginRight: "10px" }} /> Darbar Chowk Sanchore,
            Jalore. 343041
          </Typography>
          <Typography mb="30px" display="flex" alignItems="center" sx={{ wordWrap: "break-word" }}>
            <MailOutline style={{ marginRight: "10px" }} />{" "}
            contect@voguemart.com
          </Typography>
          <Typography mb="30px" display="flex" alignItems="center">
            <Phone style={{ marginRight: "10px" }} /> +91 9977884411
          </Typography>
          <img
            src="https://i.ibb.co/Qfvn4z6/payment.png"
            alt="payment"
            width="140px"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
