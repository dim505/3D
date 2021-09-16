import "./styles.scss";
import Grid from "@material-ui/core/Grid";
import ParticlesBg from "particles-bg";
import ProductInfo from "./ProductInfo";
import ProductShowing from "./ProductShowing";

//parent container that contains the whole product page
export default function App() {
  return (
    <>
      <Grid
        justify="center"
        alignItems="center"
        classes={{ root: "GridParent" }}
        container
      >
        <Grid item xs={2}>
          <h1 className="Banner">Shinny</h1>
        </Grid>
        <Grid xs={4}>
          <ProductInfo />
        </Grid>
        <Grid xs={5}>
          <ProductShowing />
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
      <ParticlesBg color="#808080" num={10} type="cobweb" bg={true} />
    </>
  );
}
