import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const styles = {
  paperContainer: {
    backgroundImage: 'url(/banner-home.jpg)',
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  typographyContainer: {
    backgroundColor: "#00000075",
    borderRadius: "0.5rem",
    boxShadow: "3px 3px 5px 0px #0000004d",
  },
};

const BannerHome = () => {
  return (
    <>
      <Paper
        style={styles.paperContainer}
        sx={{
          display: "grid",
          placeItems: "center",
          m: 1,
          mx: "auto",
          height: "10vh",
          width: "90vw",
        }}
      >
        <Typography variant="h4" color="white" style={styles.typographyContainer}>
          Bienvenido a nuestro Shop
        </Typography>
        <Typography variant="h6" color="white"  style={styles.typographyContainer}>
          Mira todo nuestro catalogo y la ofertas que tenemos para vos
        </Typography>
      </Paper>
    </>
  );
};

export default BannerHome;
