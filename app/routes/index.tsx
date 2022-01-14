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
              href='https://networksynapse.net/development/mui-v5-material-with-emotion'
            >
              <Button variant='contained'>Learn about emotion</Button>
            </a>
          </Grid>
          <Grid item>
            <a
              style={{
                textDecoration: 'none',
              }}
              target='__blank'
              href='https://mui.com/getting-started/templates/'
            >
              <Button variant='contained'>Start with Material UI</Button>
            </a>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
