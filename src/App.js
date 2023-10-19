import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  ListItem,
  ListItemIcon,
  Typography,
  Accordion,
  Button,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import "./App.css";
import { makeStyles } from "@mui/styles";
import {
  createTheme,
  ThemeProvide,
  ThemeProvider,
  useTheme,
} from "@mui/material/styles";

const useStyles = makeStyles((theme) => ({
  listItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
  },
  icon: {
    // marginRight: theme.spacing(1), // Adjust the spacing as needed
    marginRight: "0.5rem",
  },
  button: {
    background: theme.palette.primary.dark,
    color: "white",
    borderRadius: "0.7rem",
    width: "90%",
    border: "none",
    outline: "none",
    padding: "0.7rem",
    // marginBottom: "1rem",
  },
}));

function App() {
  const theme = createTheme();
  const classes = useStyles(theme);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Grid
          container
          spacing={2}
          style={{
            maxWidth: "750px",
          }}
        >
          <Grid item xs={12} sm={6} md={4}>
            <Card padding={1} sx={{ padding: "1rem", borderRadius: "0.8rem" }}>
              <Typography
                variant="body2"
                color="textSecondary"
                style={{
                  padding: "0",
                }}
              >
                FREE
              </Typography>
              {/* <CardHeader
              title="$0/ month"
              style={{
                marginTop: "0",
                paddingTop: "0",
              }}
            ></CardHeader> */}
              <Typography variant="h5">$0/ month</Typography>
              <Divider></Divider>
              <CardContent>
                <Typography variant="body2" align="left">
                  <DoneIcon fontSize="0.8rem" className={classes.icon} />
                  Single User
                </Typography>
                <Typography variant="body2" align="left">
                  <DoneIcon fontSize="0.8rem" className={classes.icon} />
                  50GB Storage
                </Typography>
                <Typography variant="body2" align="left">
                  <DoneIcon fontSize="0.8rem" className={classes.icon} />{" "}
                  Unlimited Public Projects
                </Typography>
                <Typography variant="body2" align="left">
                  <DoneIcon fontSize="0.8rem" className={classes.icon} />
                  Community Access
                </Typography>
                <Typography
                  variant="body2"
                  align="left"
                  color="#CDCDCD"
                  sx={{ alignItems: "center", display: "flex" }}
                >
                  <CloseIcon fontSize="0.8rem" className={classes.icon} />
                  Unlimited Private Projects
                </Typography>

                <Typography
                  variant="subtitle2"
                  align="left"
                  color="#CDCDCD"
                  sx={{ alignItems: "center", display: "flex" }}
                >
                  <CloseIcon fontSize="0.8rem" className={classes.icon} />
                  Dedicated Phone Support
                </Typography>
                <Typography
                  variant="body2"
                  align="left"
                  color="#CDCDCD"
                  sx={{ alignItems: "center", display: "flex" }}
                >
                  <CloseIcon fontSize="0.8rem" className={classes.icon} />
                  Free subdomin
                </Typography>
                <Typography
                  variant="body2"
                  align="left"
                  color="#CDCDCD"
                  sx={{ alignItems: "center", display: "flex" }}
                >
                  <CloseIcon fontSize="0.8rem" className={classes.icon} />
                  Monthly Status Reports
                </Typography>
              </CardContent>
              <button className={classes.button}>BUY</button>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card padding={1} sx={{ padding: "1rem", borderRadius: "0.8rem" }}>
              <Typography
                variant="body2"
                color="textSecondary"
                style={{
                  padding: "0",
                }}
              >
                PLUS
              </Typography>
              {/* <CardHeader
              title="$0/ month"
              style={{
                marginTop: "0",
                paddingTop: "0",
              }}
            ></CardHeader> */}
              <Typography variant="h5">$9/ month</Typography>
              <Divider></Divider>
              <CardContent>
                <Typography variant="body2" align="left">
                  <DoneIcon fontSize="0.8rem" className={classes.icon} />5 User
                </Typography>
                <Typography variant="body2" align="left">
                  <DoneIcon fontSize="0.8rem" className={classes.icon} />
                  50GB Storage
                </Typography>
                <Typography variant="body2" align="left">
                  <DoneIcon fontSize="0.8rem" className={classes.icon} />{" "}
                  Unlimited Public Projects
                </Typography>
                <Typography variant="body2" align="left">
                  <DoneIcon fontSize="0.8rem" className={classes.icon} />
                  Community Access
                </Typography>
                <Typography
                  variant="body2"
                  align="left"
                  color="textSecondary"
                  sx={{ alignItems: "center", display: "flex" }}
                >
                  <DoneIcon fontSize="0.8rem" className={classes.icon} />
                  Unlimited Private Projects
                </Typography>
                <Typography
                  variant="body2"
                  align="left"
                  color="textSecondary"
                  sx={{ alignItems: "center", display: "flex" }}
                >
                  <DoneIcon fontSize="0.8rem" className={classes.icon} />
                  Dedicated Phone Support
                </Typography>
                <Typography
                  variant="body2"
                  align="left"
                  color="textSecondary"
                  sx={{ alignItems: "center", display: "flex" }}
                >
                  <DoneIcon fontSize="0.8rem" className={classes.icon} />
                  Free Subdomain
                </Typography>
                <Typography
                  variant="body2"
                  align="left"
                  color="#CDCDCD"
                  sx={{ alignItems: "center", display: "flex" }}
                >
                  <CloseIcon fontSize="0.8rem" className={classes.icon} />
                  Monthly Status Reports
                </Typography>
              </CardContent>
              <button className={classes.button}>BUY</button>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card padding={1} sx={{ padding: "1rem", borderRadius: "0.8rem" }}>
              <Typography
                variant="body2"
                color="textSecondary"
                style={{
                  padding: "0",
                }}
              >
                PRO
              </Typography>
              {/* <CardHeader
              title="$0/ month"
              style={{
                marginTop: "0",
                paddingTop: "0",
              }}
            ></CardHeader> */}
              <Typography variant="h5">$180/ month</Typography>
              <Divider></Divider>
              <CardContent>
                <Typography variant="body2" align="left">
                  <DoneIcon fontSize="0.8rem" className={classes.icon} />
                  Single User
                </Typography>
                <Typography variant="body2" align="left">
                  <DoneIcon fontSize="0.8rem" className={classes.icon} />
                  50GB Storage
                </Typography>
                <Typography variant="body2" align="left">
                  <DoneIcon fontSize="0.8rem" className={classes.icon} />{" "}
                  Unlimited Public Projects
                </Typography>
                <Typography variant="body2" align="left">
                  <DoneIcon fontSize="0.8rem" className={classes.icon} />
                  Community Access
                </Typography>
                <Typography
                  variant="body2"
                  align="left"
                  sx={{ alignItems: "center", display: "flex" }}
                >
                  <DoneIcon fontSize="0.8rem" className={classes.icon} />
                  Unlimited Private Projects
                </Typography>
                <Typography
                  variant="body2"
                  align="left"
                  sx={{ alignItems: "center", display: "flex" }}
                >
                  <DoneIcon fontSize="0.8rem" className={classes.icon} />
                  Dedicated Phone Support
                </Typography>
                <Typography
                  variant="body2"
                  align="left"
                  sx={{ alignItems: "center", display: "flex" }}
                >
                  <DoneIcon fontSize="0.8rem" className={classes.icon} />
                  Free Subdomain
                </Typography>
                <Typography
                  variant="body2"
                  align="left"
                  sx={{ alignItems: "center", display: "flex" }}
                >
                  <DoneIcon fontSize="0.8rem" className={classes.icon} />
                  Monthly Status Reports
                </Typography>
              </CardContent>
              <button className={classes.button}>BUY</button>
            </Card>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
