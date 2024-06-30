"use client"
import type { NextPage } from "next";
import { memo, useCallback, useEffect, useState } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { toast } from "react-toastify";
import { useAppContext } from "@/utils/AppContext";
import uuid from "time-uuid";
export type InputLoginType = {
  className?: string;
};

const InputLogin: NextPage<InputLoginType> = memo(({ className = "" }) => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [disableCreate, setDisableCreate] = useState<boolean>(true)
  const [invalidName, setInvalidName] = useState<boolean>(true)
  const [invalidEmail, setInvalidEmail] = useState<boolean>(true)
  const [invalidPass, setInvalidPass] = useState<boolean>(true)
  const { user, setUser } = useAppContext();


  useEffect(() => {
    const isNameValid = name.trim() !== '';
    const isEmailValid = email.includes('@') && email.includes('.');
    const isPasswordValid = password.length >= 6;
    setInvalidName(!isNameValid)
    setInvalidEmail(!isEmailValid)
    setInvalidPass(!isPasswordValid)
    if (isNameValid && isEmailValid && isPasswordValid) {
      setDisableCreate(true)
    } else {
      setDisableCreate(false)
    }
  }, [name, email, password]);

  function handleCreateAccount() {
    if (user) {
      console.log('already user: ', user)
      toast.warning("Please verification email!", { autoClose: 600 });
      return
    }
    if (invalidName) {
      toast.warning("Bạn chưa nhập tên", { autoClose: 600 });
      return;
    } else if (invalidEmail) {
      toast.warning("Email không hợp lệ", { autoClose: 600 });
      return;
    } else if (invalidPass) {
      toast.warning("Password phải trên 6 ký tự", { autoClose: 600 });
      return;
    } else {
      toast.success("Đăng ký thành công", { autoClose: 600 });
      const user = {
        id: uuid(),
        name: name,
        email: email,
        password: password
      }
      console.log('user: ',user)
      setUser(user)
    }
  }

  return (
    <>
      <div
        className={`self-stretch flex flex-col items-center justify-start gap-[10px] text-left text-xl text-darkgray font-inter ${className}`}
      >
        <div className="w-[51px] relative inline-block h-[35px] shrink-0">
          -OR-
        </div>
        <TextField
          className="[border:none] bg-[transparent] self-stretch font-inter text-xs text-darkgray"
          color="primary"
          label="Full Name"
          variant="standard"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ "& .MuiInputBase-root": { height: "43px" } }}
        />
        <TextField
          className="[border:none] bg-[transparent] self-stretch font-inter text-xs text-darkgray"
          color="primary"
          label="Email Address"
          variant="standard"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ "& .MuiInputBase-root": { height: "43px" } }}
        />
        <TextField
          className="[border:none] bg-[transparent] self-stretch font-inter text-xs text-darkgray"
          color="primary"
          label="Password"
          type={'password'}
          variant="standard"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ "& .MuiInputBase-root": { height: "43px" } }}
        />
      </div>
      <div
        className={`self-stretch flex flex-col items-start justify-start py-0 px-5 gap-[30px] text-center text-base text-white font-inter ${className}`}
      >
        <div onClick={handleCreateAccount} className="self-stretch flex flex-col items-start justify-start">
          {
            !disableCreate ?
              <div className="self-stretch rounded-3xs bg-powderblue h-[45px] flex flex-row items-center justify-center">
                <p className="select-none cursor-default relative leading-[35px] font-semibold">
                  Create Account
                </p>
              </div>
              :
              <div className="self-stretch rounded-3xs bg-lightseagreen h-[45px] flex flex-row items-center justify-center">
                <p className="select-none cursor-default relative leading-[35px] font-semibold">
                  Create Account
                </p>
              </div>
          }
        </div>
        <div className="flex flex-row items-center justify-start gap-[7px] text-left text-darkgray">
          <div className="relative leading-[35px]">{`Already have an account? `}</div>
          <div className="relative leading-[35px] text-forestgreen">Log in</div>
        </div>
      </div>
    </>
  )
    ;
});

export default InputLogin;
