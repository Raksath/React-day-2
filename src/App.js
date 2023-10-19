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
    // Center the icon and text vertically
  },
  icon: {
    // marginRight: theme.spacing(1), // Adjust the spacing as needed
    marginRight: "0.5rem",
  },
  button: {
    background: theme.palette.primary.dark,
    color: "white",
    borderRadius: "0.7rem",
    transition: "background-color 0.3s", // Add a smooth transition effect
    "&:hover": {
      backgroundColor: theme.palette.primary.main, // Change color on hover
    },
    "&:active": {
      backgroundColor: theme.palette.primary.main, // Change color on click/active
    },
  },
}));

function App() {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div className="App">
      <Grid
        container
        spacing={2}
        style={{
          maxWidth: "800px",
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
            <Button sx={{ width: "100%" }} className={classes.button}>
              BUY
            </Button>
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
            <Button sx={{ width: "100%" }} className={classes.button}>
              BUY
            </Button>
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
            <Button sx={{ width: "100%" }} className={classes.button}>
              BUY
            </Button>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
