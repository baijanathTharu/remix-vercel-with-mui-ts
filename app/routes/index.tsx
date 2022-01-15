import { useLoaderData } from 'remix';
import { Container, Grid, Button, Typography } from '@mui/material';

export async function loader() {
  const name = process.env.NAME;
  return {
    title: 'Remix',
    name,
  };
}

export default function Home() {
  const data = useLoaderData<{ name: string; title: string }>();

  return (
    <Container
      maxWidth='sm'
      sx={{
        marginTop: '1rem',
      }}
    >
      <Typography variant='h4' component='h1' gutterBottom>
        {data.name} made with {data.title}
      </Typography>

      <div>
        <h2>Getting started</h2>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <a
              style={{
                textDecoration: 'none',
              }}
              target='__blank'
              href='https://mui.com/getting-started/usage/'
            >
              <Button variant='contained'>MUI Docs</Button>
            </a>
          </Grid>
          <Grid item xs={12}>
            <a
              style={{
                textDecoration: 'none',
              }}
              target='__blank'
              href='https://mui.com/guides/interoperability/'
            >
              <Button variant='contained' color='secondary'>
                Learn about styling in MUI System
              </Button>
            </a>
          </Grid>
          <Grid item xs={12}>
            <a
              style={{
                textDecoration: 'none',
              }}
              target='__blank'
              href='https://github.com/baijanathTharu/remix-vercel-with-mui-ts'
            >
              <Button variant='outlined' color='secondary'>
                Look at the code
              </Button>
            </a>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
