import './GridButton.css';
import Button from '@mui/material/Button';
import InventoryIcon from '@mui/icons-material/Inventory';
import TaskIcon from '@mui/icons-material/Task';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PlaceIcon from '@mui/icons-material/Place';

<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>


function GridButton() {
    return (
        <div class="grid-container">
            
            <Button href="/Products" 
                class="grid-item"
                type="submit"
                color="secondary"
                variant="contained"
                startIcon={<InventoryIcon/>}
                > Producten
            </Button>

            <Button
                href="/Products" 
                class="grid-item"
                type="submit"
                color="secondary"
                variant="contained"
                startIcon={<TaskIcon/>}
                > Orders
            </Button>

            <Button
                href="/Products" 
                class="grid-item"
                type="submit"
                color="secondary"
                variant="contained"
                startIcon={<LocalShippingIcon/>}
                > Levering
            </Button>

            <Button
                href="/Products" 
                class="grid-item"
                type="submit"
                color="secondary"
                variant="contained"
                startIcon={<PlaceIcon/>}
                > Locaties
            </Button>

            <Button
                href="/" 
                class="grid-item"
                type="submit"
                color="secondary"
                variant="contained"
                > 
            </Button>

            <Button
                href="/" 
                class="grid-item"
                type="submit"
                color="secondary"
                variant="contained"
                > 
            </Button>
        </div>
  );
}

export default GridButton;