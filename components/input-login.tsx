import type { NextPage } from "next";
import { memo } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";

export type InputLoginType = {
  className?: string;
};

const InputLogin: NextPage<InputLoginType> = memo(({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-center justify-start gap-[10px] text-left text-xl text-darkgray font-inter ${className}`}
    >
      <div className="w-[51px] relative inline-block h-[35px] shrink-0">
        -OR-
      </div>
      <TextField
        className="[border:none] bg-[transparent] self-stretch font-inter text-base text-darkgray"
        color="primary"
        label="Full Name"
        variant="standard"
        sx={{ "& .MuiInputBase-root": { height: "43px" } }}
      />
      <TextField
        className="[border:none] bg-[transparent] self-stretch font-inter text-base text-darkgray"
        color="primary"
        label="Email Address"
        variant="standard"
        sx={{ "& .MuiInputBase-root": { height: "43px" } }}
      />
      <TextField
        className="[border:none] bg-[transparent] self-stretch font-inter text-base text-darkgray"
        color="primary"
        label="Password"
        variant="standard"
        sx={{ "& .MuiInputBase-root": { height: "43px" } }}
      />
    </div>
  );
});

export default InputLogin;
