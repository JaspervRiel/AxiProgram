import "./GridButton.css";
import Button from "@mui/material/Button";
import InventoryIcon from "@mui/icons-material/Inventory";
import TaskIcon from "@mui/icons-material/Task";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PlaceIcon from "@mui/icons-material/Place";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>;

function GridButton() {
  return (
    <>
      <h1 class="center">- Admin -</h1>
      <div class="grid-container">
        <Button
          href="/AddProduct"
          class="grid-item"
          type="submit"
          color="secondary"
          variant="contained"
          startIcon={<InventoryIcon />}
        >
          Producten toevoegen
        </Button>

        <Button
          href="/Order"
          class="grid-item"
          type="submit"
          color="secondary"
          variant="contained"
          startIcon={<TaskIcon />}
        >
          Orders toevoegen
        </Button>

        <Button
          href="/Levering"
          class="grid-item"
          type="submit"
          color="secondary"
          variant="contained"
          startIcon={<LocalShippingIcon />}
        >
          Levering toevoegen
        </Button>

        <Button
          href="/"
          class="grid-item"
          type="submit"
          color="secondary"
          variant="contained"
          startIcon={<DoDisturbIcon />}
        ></Button>

        <Button
          href="/Register"
          class="grid-item"
          type="submit"
          color="secondary"
          variant="contained"
          startIcon={<AssignmentIndIcon />}
        >
          Gebruiker toevoegen
        </Button>

        <Button
          href="/"
          class="grid-item"
          type="submit"
          color="secondary"
          variant="contained"
          startIcon={<DoDisturbIcon />}
        ></Button>
      </div>

      <h1 class="center">- Gebruiker -</h1>
      <div class="grid-container">
        <Button
          href="/Products"
          class="grid-item"
          type="submit"
          color="secondary"
          variant="contained"
          startIcon={<InventoryIcon />}
        >
          Producten
        </Button>

        <Button
          href="/Order"
          class="grid-item"
          type="submit"
          color="secondary"
          variant="contained"
          startIcon={<TaskIcon />}
        >
          Orders
        </Button>

        <Button
          href="/Levering"
          class="grid-item"
          type="submit"
          color="secondary"
          variant="contained"
          startIcon={<LocalShippingIcon />}
        >
          Levering
        </Button>

        <Button
          href="/"
          class="grid-item"
          type="submit"
          color="secondary"
          variant="contained"
          startIcon={<DoDisturbIcon />}
        ></Button>

        <Button
          href="/Locaties"
          class="grid-item"
          type="submit"
          color="secondary"
          variant="contained"
          startIcon={<PlaceIcon />}
        >
          Locaties
        </Button>

        <Button
          href="/"
          class="grid-item"
          type="submit"
          color="secondary"
          variant="contained"
          startIcon={<DoDisturbIcon />}
        ></Button>
      </div>
    </>
  );
}

export default GridButton;
