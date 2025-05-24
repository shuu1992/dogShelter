import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export default function ResponsiveGrid() {
  const dogs = ['Fido', 'Spot', 'Luna', 'Charlie'];
  return (
    <Grid container spacing={2}>
      {dogs.map((dog) => (
        <Grid item xs={12} sm={6} md={3} key={dog}>
          <Paper className="p-4 text-center">{dog}</Paper>
        </Grid>
      ))}
    </Grid>
  );
}
