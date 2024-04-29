import { Grid, Card } from "../ZUI";

export const GridContent = () => {
  const grid1 = [];

  for (let index = 1; index < 13; index++) {
    grid1.push(index);
  }

  return (
    <section>
      <h2 id="gridWidget">Grid</h2>
      <section>
        <Grid.Container gap=".5rem">
          {grid1.map(elem => 
            <Grid.Item xs={1} key={elem} style={{textAlign: "center"}}>
              <Card>{elem}</Card>  
            </Grid.Item>
          )}
        </Grid.Container>
        <Grid.Container>
          <Grid.Item xs={6} style={{textAlign: "center"}}>
            <Card style={{backgroundColor: "blue"}}>1</Card>  
          </Grid.Item>
          <Grid.Item xs={5} style={{textAlign: "center"}}>
            <Card style={{backgroundColor: "blue"}}>1</Card>  
          </Grid.Item>
          <Grid.Item xs={2} style={{textAlign: "center"}}>
            <Card style={{backgroundColor: "blue"}}>1</Card>  
          </Grid.Item>
        </Grid.Container>
        <Grid.Container wrap="no-wrap">
          <Grid.Item xs={6} style={{textAlign: "center"}}>
            <Card style={{backgroundColor: "blue"}}>1</Card>  
          </Grid.Item>
          <Grid.Item xs={5} style={{textAlign: "center"}}>
            <Card style={{backgroundColor: "blue"}}>1</Card>  
          </Grid.Item>
          <Grid.Item xs={2} style={{textAlign: "center"}}>
            <Card style={{backgroundColor: "blue"}}>1</Card>  
          </Grid.Item>
        </Grid.Container>
        <Grid.Container>
          <Grid.Item xs={0} sm={2} md={4} lg={6} xl={8} style={{textAlign: "center"}}>
            <Card style={{backgroundColor: "blue"}}>1</Card>  
          </Grid.Item>
          <Grid.Item xs={2} style={{textAlign: "center"}}>
            <Card style={{backgroundColor: "blue"}}>1</Card>  
          </Grid.Item>
          <Grid.Item xs={2} style={{textAlign: "center"}}>
            <Card style={{backgroundColor: "blue"}}>1</Card>  
          </Grid.Item>
        </Grid.Container>
      </section>
    </section>
  )
}