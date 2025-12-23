import React from 'react';
import { CardHeader, CardContent, CardActions, Button, Grid, Card } from '@mui/material';
import { Box, TextField } from '@mui/material';

const SignIn = () => {
  return (
    <Card sx={{ width: { xs: 300, sm: 400 } }}>
      <CardHeader title='Login' subheader='로그인' />
      <CardContent>
        <Box component='form'>
          <Grid container spacing={2} direction='column'>
            <Grid>
              <TextField type='email' label='이메일' required fullWidth />
            </Grid>
            <Grid>
              <TextField type='password' label='비밀번호' required fullWidth />
            </Grid>
          </Grid>
        </Box>
      </CardContent>
      <CardActions disableSpacing sx={{ pt: 0 }}>
        <Grid container>
          <Grid>
            <Button variant='text'>회원가입</Button>
          </Grid>
          <Grid sx={{ flex: 1, textAlign: 'right' }}>
            <Button variant='text'>아이디 찾기</Button>
            <Button variant='text'>비밀번호 찾기</Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default SignIn;
