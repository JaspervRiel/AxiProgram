import './GridButton.css';
import Button from '@mui/material/Button';
import BatteryStdIcon from '@mui/icons-material/BatteryStd';

function GridButton() {
    return (
        
        <div class="grid-container">
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
            
            <Button
                href="/Products" 
                class="grid-item"
                type="submit"
                color="secondary"
                variant="contained"
                startIcon={<BatteryStdIcon/>}
                > 
            Producten </Button>

            <a href="/Orders" class="grid-item">Orders</a>
            <a href="/Shipment" class="grid-item">Shipment</a>
            <a href="/About" class="grid-item">4</a>
            <a href="/About" class="grid-item">5</a>
            <a href="/About" class="grid-item">6</a>
            <a href="/About" class="grid-item">7</a>
            <a href="/About" class="grid-item">8</a>
            <a href="/About" class="grid-item">9</a>
            <a href="/About" class="grid-item">10</a>
            <a href="/About" class="grid-item">11</a>
            <a href="/About" class="grid-item">12</a>
            
        </div>
  );
}

export default GridButton;