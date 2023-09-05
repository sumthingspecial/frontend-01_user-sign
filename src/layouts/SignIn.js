import {
  Button,
  Card,
  Container,
  Grid,
  Input,
  TextField,
  Typography,
} from "@mui/material";

function SignIn() {
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
              <Input fullWidth placeholder="이메일" />
            </Grid>
            <Grid item marginBottom={5} paddingX={2}>
              <Input fullWidth placeholder="비밀번호" />
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
