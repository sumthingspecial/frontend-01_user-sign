import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, Card, Container, FormControl, Grid, IconButton, Input, InputAdornment, InputLabel, Typography } from "@mui/material"
import { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const togglePasswordShow = () => {
    setIsPasswordShown(!isPasswordShown);
  };


  const signUpHandler = (e) => {
    console.log(e)
  }


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
            <Grid container padding={3} flexDirection="column">
              <Grid
                item
                container
                justifyContent="center"
                marginBottom={2}
                padding={2}
              >
                <Typography variant="h2">MEMBER</Typography>
              </Grid>
              <Grid item container marginBottom={1.5} paddingX={2} columnSpacing={2} alignItems="flex-end">
                <Grid item>                  
                  <FormControl variant="standard" required>
                    <InputLabel htmlFor="sign-in-email">Email</InputLabel>
                    <Input
                      id="sign-in-email"
                      fullWidth
                      label="Email"
                      placeholder="이메일"
                    />
                  </FormControl>
                </Grid>
                <Grid item>
                  <Button type="button" variant="contained">메일 확인</Button>
                </Grid>
              </Grid>
              <Grid item marginBottom={5} paddingX={2}>
                <Grid sx={{ mb: 1.5 }}>                  
                  <FormControl variant="standard" required fullWidth>
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
                <Grid sx={{mb: 1.5}}>
                  <FormControl variant="standard" required fullWidth>                  
                    <InputLabel htmlFor="sign-in-password-confirm">Password Confirm</InputLabel>
                    <Input
                      id="sign-in-password-confirm"
                      fullWidth
                      label="Password Confirm"
                      placeholder="비밀번호 확인"
                      type="password"
                    />
                  </FormControl>
                </Grid>
                <Grid sx={{mb: 1.5}}>
                  <FormControl variant="standard" required fullWidth>                  
                    <InputLabel htmlFor="sign-up-name">Name</InputLabel>
                    <Input
                      id="sign-up-name"
                      fullWidth
                      label="Name"
                      placeholder="이름"
                    />
                  </FormControl>
                </Grid>
                <Grid>
                  <FormControl variant="standard" required fullWidth>                  
                    <InputLabel htmlFor="sign-up-name">Phone</InputLabel>
                    <Input
                      id="sign-up-name"
                      fullWidth
                      label="Phone"
                      placeholder="전화번호"
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Grid
                item
                container
                justifyContent="center"
                paddingX={2}
              >
                <Button variant="contained" type="submit" fullWidth>
                  회원가입
                </Button>
              </Grid>
              <Grid item container justifyContent="center" paddingX={2} paddingTop={0.5}>
                <Link to="/sign-in">
                  <Button type="button">로그인</Button>
                </Link>
              </Grid>
            </Grid>
          </form>
        </Card>
      </Grid>
    </Container>
  )
}

export default SignUp