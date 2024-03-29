import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  Card,
  Container,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [isEmailChecked, setIsEmailChecked] = useState(false);
  const [password, setPassword] = useState("");
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isPasswordMatch, setIsPasswordMatch] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const checkEmailHandler = () => {
    if (email) {
      const emailReg = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
      if (emailReg.test(email)) {
        setIsEmailChecked(true);
      } else {
        alert("올바른 형식의 이메일을 입력해주세요.");
      }
    } else {
      alert("이메일을 입력해주세요.");
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordShow = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  const passwordConfirmHandler = (e) => {
    setPasswordConfirm(e.target.value);
  };

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const phoneHandler = (e) => {
    setPhone(e.target.value);
  };

  const signUpHandler = (e) => {
    e.preventDefault();

    if (password.length < 8) {
      alert("비밀번호는 8자 이상 입력해주세요");
      return;
    }

    if (password !== passwordConfirm) {
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      return;
    }

    const phoneNoDash = phone.replace("-", "");
    if (phoneNoDash[0] !== "0") {
      alert("올바른 형식의 휴대폰 번호를 입력해주세요.");
    }

    const reqData = {
      email: email,
      password: password,
      mobile: phone,
      name: name,
      birthday: "19910512",
    };
    console.log(reqData);
    axios.post("http://49.50.160.190:8080/v1/auth/signup", reqData);
  };

  return (
    <Container>
      <Grid
        container
        minHeight="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <Card>
          <form onSubmit={signUpHandler}>
            <Grid container padding={5} flexDirection="column">
              <Grid item marginBottom={4}>
                <Typography variant="h3">
                  BE
                  <br />
                  OUR
                  <br />
                  MEMBER
                </Typography>
              </Grid>
              <Grid
                item
                container
                marginBottom={5}
                flexDirection="column"
                rowSpacing={1.5}
              >
                <Grid item container columnSpacing={2} alignItems="flex-end">
                  <Grid item>
                    <FormControl variant="standard" required>
                      <InputLabel htmlFor="sign-up-email">Email</InputLabel>
                      <Input
                        id="sign-up-email"
                        fullWidth
                        label="Email"
                        placeholder="이메일"
                        disabled={isEmailChecked}
                        onChange={emailHandler}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item>
                    <Button
                      type="button"
                      variant="contained"
                      onClick={checkEmailHandler}
                    >
                      메일 확인
                    </Button>
                  </Grid>
                </Grid>
                <Grid item>
                  <FormControl variant="standard" required fullWidth>
                    <InputLabel htmlFor="sign-up-password">Password</InputLabel>
                    <Input
                      id="sign-up-password"
                      fullWidth
                      label="Password"
                      placeholder="비밀번호"
                      type={isPasswordShown ? "text" : "password"}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={togglePasswordShow}
                          >
                            {isPasswordShown ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      onChange={passwordHandler}
                    />
                  </FormControl>
                </Grid>
                <Grid item>
                  <FormControl variant="standard" required fullWidth>
                    <InputLabel htmlFor="sign-up-password-confirm">
                      Password Confirm
                    </InputLabel>
                    <Input
                      id="sign-up-password-confirm"
                      fullWidth
                      label="Password Confirm"
                      placeholder="비밀번호 확인"
                      type="password"
                      onChange={passwordConfirmHandler}
                    />
                  </FormControl>
                </Grid>
                <Grid item>
                  <FormControl variant="standard" required fullWidth>
                    <InputLabel htmlFor="sign-up-name">Name</InputLabel>
                    <Input
                      id="sign-up-name"
                      fullWidth
                      label="Name"
                      placeholder="이름"
                      onChange={nameHandler}
                    />
                  </FormControl>
                </Grid>
                <Grid item>
                  <FormControl variant="standard" required fullWidth>
                    <InputLabel htmlFor="sign-up-phone">Phone</InputLabel>
                    <Input
                      id="sign-up-phone"
                      fullWidth
                      label="Phone"
                      placeholder="전화번호"
                      onChange={phoneHandler}
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Grid item container justifyContent="center" paddingX={2}>
                <Button variant="contained" type="submit" fullWidth>
                  회원가입
                </Button>
              </Grid>
              <Grid
                item
                container
                justifyContent="center"
                paddingX={2}
                paddingTop={0.5}
              >
                <Link to="/sign-in">
                  <Button type="button">로그인</Button>
                </Link>
              </Grid>
            </Grid>
          </form>
        </Card>
      </Grid>
    </Container>
  );
}

export default SignUp;
