import logo from './logo.svg';
import './App.css';
import DataTable from './dataTable/DataTable';
import InstrumentChip from './chipSelectors/InstrumentChip';
import DateChip from './chipSelectors/DateChip';
import SpeciesChip from './chipSelectors/SpeciesChip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import UploadIcon from '@mui/icons-material/Upload';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

function App() {
  // Need to modify state here for the chip selectors


  return (
    <div className="App">
      <Button variant="contained" size="small" endIcon={<UploadIcon />} sx={{padding:"10px", margin: "10px", left:"10px"}}>Import Data</Button>
      <Stack spacing={2} direction="row" sx={{position: "relative", padding: "10px"}}>
        <DateChip />
        <SpeciesChip />
        <InstrumentChip />
        <Button variant="contained" color="success" size="small" endIcon={<CheckBoxIcon /> }>Apply filter</Button>
        <Button variant="contained" size="small" endIcon={<FileDownloadIcon />}>Save as CSV</Button>
      </Stack>
      <div style={{ display: 'flex', height: '100%', position: "relative"}} >
        <DataTable />
      </div>
    </div>
  );
}

export default App;
