import { Grid, Link } from '@mui/material';
import { Box, Container } from '@mui/system';

export default function Footer() {
  return (
    <footer>
      <Box bgcolor="coral" marginTop={'30px'}>
        <Container maxWidth="lg">
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={16} sm={4}>
              <Box>Account</Box>
              <Box>
                <Link href="/" color="inherit">
                  Login
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Register
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Privacy
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Contacts
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box>Messages</Box>
              <Box>
                <Link href="/" color="inherit">
                  Backup
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  History
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Roll
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Contacts
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box>Help</Box>
              <Box>
                <Link href="/" color="inherit">
                  Contacts
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Support
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Privacy
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Contacts
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}
