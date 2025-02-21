import Grid from "./Grid";

function GridWrapper() {
  const params = window.location.pathname.split("/")[2];
  const gridSize = parseInt(params, 10) || 5;

  return <Grid gridSize={gridSize} />;
}

export default GridWrapper;
