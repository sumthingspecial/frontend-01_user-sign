import { useState } from "react";

import {
  Grid,
  Container,
  Card,
  Typography,
  FormControl,
  InputAdornment,
  InputLabel,
  Input,
  IconButton,
  Button,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";

function FindPassword() {
  const [password, setPassword] = useState("");
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isPasswordMatch, setIsPasswordMatch] = useState(false);

  const findPasswordHandler = (e) => {
    e.preventDefault();
    // console.log(e);
    // const reqData = {
    //   email: email,
    //   password: password,
    //   mobile: phone,
    //   name: name,
    //   birthday: "19910512",
    // };
    // console.log(reqData);
    // axios.post("http://43.201.22.155:8080/api/v1/auth/signup", reqData);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordShow = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  const passwordConfirmHandler = (e) => {
    setPasswordConfirm(e.target.value);
    if (password === passwordConfirm) {
      setIsPasswordMatch(true);
    } else {
      setIsPasswordMatch(false);
    }
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
          <form onSubmit={findPasswordHandler}>
            <Grid container padding={5} flexDirection="column">
              <Grid item marginBottom={4}>
                <Typography variant="h3">
                  FIND
                  <br />
                  PASSWORD
                </Typography>
              </Grid>
              <Grid
                item
                container
                marginBottom={5}
                flexDirection="column"
                rowSpacing={1.5}
              >
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
                <Grid item container justifyContent="center">
                  <Button variant="contained" type="submit" fullWidth>
                    비밀번호 찾기
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
            </Grid>
          </form>
        </Card>
      </Grid>
    </Container>
  );
}

export default FindPassword;
