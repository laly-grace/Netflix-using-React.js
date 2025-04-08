import Box from "@mui/material/Box";
import { red } from "@mui/material/colors";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Link from "@mui/material/Link";
import { Grid } from "@mui/material";

export default function Footer() {
  const netflixLinks = [
    "Questions? Contact us.",
    "FAQ",
    "Help Center",
    "Account",
    "Media Center",
    "Investor Relations",
    "Jobs",
    "Ways to Watch",
    "Terms of Use",
    "Privacy",
    "Cookie Preferences",
    "Corporate Information",
    "Contact Us",
    "Speed Test",
    "Legal Notices",
    "Only on Netflix",
  ];

  const listItems = netflixLinks.map((link) => (
    <Link href="#" color="inherit" key={link}>
      {link}
    </Link>
  ));

  return (
    <>
      <div className="bg-black pt-9">
        {" "}
        {/* Ensure full width */}
        <div className="dark:bg-w-800 flex justify-center">
          <div className="px-6">
            {" "}
            {/* Ensure no max-w-xl to allow full width */}
            <label
              htmlFor="input-9"
              className="block text-sm font-medium text-gray-700 dark:text-gray-100"
              style={{ fontSize: "1rem" }}
            >
              Ready to watch? Enter your email to create or restart your
              membership.
            </label>
            <div
              className="flex items-center mt-1 bg-gray-100"
              style={{ borderRadius: "20px" }}
            >
              <input
                type="email"
                id="input-9"
                className=" h-10 px-3 text-sm text-gray-700 border border-r-0 rounded-r-none border-blue-500 focus:outline-none rounded shadow-sm"
                placeholder="Your Email"
                style={{ fontSize: "1rem" }}
              />

              <input
                type="submit"
                id="input-9"
                value={"Get Started >"}
                className=" h-10 px-3 text-sm text-gray-700 border border-r-0 rounded-r-none border-blue-500 focus:outline-none rounded shadow-sm"
                style={{
                  backgroundColor: "red",
                  color: "white",
                  fontWeight: "bolder",
                  fontSize: "1.7rem",
                  borderRadius: "20px",
                }}
              />
            </div>
          </div>
        </div>
        <div
          className=" px-4 xl:px-0"
          style={{ paddingLeft: "20%", paddingRight: "20%" }}
        >
          {" "}
          {/* Removed max-w-xl */}
          <div className="flex flex-col justify-between sm:px-[18px] md:flex-row md:px-10 w-full">
            {" "}
            {/* Ensure full width */}
            <div
              style={{
                color: "rgb(252, 133, 133)",
                paddingLeft: "5%",
                paddingRight: "5%",
              }}
            >
              <Grid
                container
                spacing={2}
                sx={{
                  justifyContent: "space-between",
                  alignContent: "space-between",
                }}
              >
                {listItems.map((item, index) => (
                  <Grid item xs={6} lg={3} key={index}>
                    {item}
                  </Grid>
                ))}
              </Grid>
            </div>
          </div>
          <hr className="mt-[30px] text-white" />
          <div className="flex items-center justify-center pb-8 pt-[9px] md:py-8">
            <p className="text-[10px] font-normal text-white md:text-[12px]">
              © Copyright 2024 All Rights Reserved by YOUR WEBSITES. PVT. LTD
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
