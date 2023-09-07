import { FormControl } from "@mui/base";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  Card,
  Container,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Typography,
} from "@mui/material";
import { useState } from "react";

function SignIn() {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const togglePasswordShow = () => {
    setIsPasswordShown(!isPasswordShown);
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
          <Grid container padding={3} flexDirection="column">
            <Grid
              item
              container
              justifyContent="center"
              marginBottom={2}
              padding={2}
            >
              <Typography variant="h2">PROJECT</Typography>
            </Grid>
            <Grid item marginBottom={3} paddingX={2}>
              <FormControl variant="standard">
                <InputLabel htmlFor="sign-in-email">Email</InputLabel>
                <Input
                  id="sign-in-email"
                  fullWidth
                  label="Email"
                  placeholder="이메일"
                />
              </FormControl>
            </Grid>
            <Grid item marginBottom={5} paddingX={2}>
              <FormControl variant="standard">
                <InputLabel htmlFor="sign-in-password">Password</InputLabel>
                <Input
                  id="sign-in-password"
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
                        {isPasswordShown ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid
              item
              container
              justifyContent="center"
              paddingY={1}
              paddingX={2}
            >
              <Button variant="contained" fullWidth>
                로그인
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Container>
  );
}

export default SignIn;
