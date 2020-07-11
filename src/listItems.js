import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BarChartIcon from '@material-ui/icons/BarChart';
import AlarmIcon from '@material-ui/icons/Alarm';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ForumIcon from '@material-ui/icons/Forum';
import TableChartIcon from '@material-ui/icons/TableChart';
import TimelineIcon from '@material-ui/icons/Timeline';
import { Link } from '@material-ui/core';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
export const mainListItems = (
  <div>
    <Link href="/">
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
    </Link>
    <Link href="/graph">
      <ListItem button>
        <ListItemIcon>
          <TimelineIcon />
        </ListItemIcon>
        <ListItemText primary="Gráficos" />
      </ListItem>
    </Link>
    <Link href="/alarms">
      <ListItem button>
        <ListItemIcon>
          <AlarmIcon />
        </ListItemIcon>
        <ListItemText primary="Alarmas" />
      </ListItem>
    </Link>
    <Link href="/watchlist">
      <ListItem button>
        <ListItemIcon>
          <VisibilityIcon />
        </ListItemIcon>
        <ListItemText primary="En Vista" />
      </ListItem>
    </Link>
    <Link href="/stats">
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Estadisticas" />
      </ListItem>
    </Link>
    <Link href="/learn">
      <ListItem button>
        <ListItemIcon>
          <VideoLibraryIcon />
        </ListItemIcon>
        <ListItemText primary="Capacitaciones" />
      </ListItem>
    </Link>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Recursos</ListSubheader>

    <Link href="/forum">
      <ListItem button>
        <ListItemIcon>
          <ForumIcon />
        </ListItemIcon>
        <ListItemText primary="Foro" />
      </ListItem>
    </Link>
    <Link href="/ccl">
      <ListItem button>
        <ListItemIcon>
          <TableChartIcon />
        </ListItemIcon>
        <ListItemText primary="CCL Comparador" />
      </ListItem>
    </Link>
    <ListItem button>
      <ListItemIcon>
        <AccountBalanceIcon />
      </ListItemIcon>
      <ListItemText primary="Brokers Comparador" />
    </ListItem>
  </div>
);
