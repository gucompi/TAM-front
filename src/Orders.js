import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';


const cedearAAPL ={
  ccl:100
}

const cedears = [{
  symbol_usa:"AAPL",
  price_usa:13,
  ratio:1,
  symbol_arg:"AAPL",
  price_arg:1300,
  ccl:100
},{
  symbol_usa:"AAPL",
  price_usa:13,
  ratio:1,
  symbol_arg:"AAPL",
  price_arg:1300,
  ccl:100
},{
  symbol_usa:"AAPL",
  price_usa:13,
  ratio:1,
  symbol_arg:"AAPL",
  price_arg:1300,
  ccl:100
},{
  symbol_usa:"AAPL",
  price_usa:13,
  ratio:1,
  symbol_arg:"AAPL",
  price_arg:1300,
  ccl:100
},{
  symbol_usa:"AAPL",
  price_usa:13,
  ratio:1,
  symbol_arg:"AAPL",
  price_arg:1300,
  ccl:100
}
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>CCL Comparador</Title>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Simbolo USA</TableCell>
            <TableCell>Precio USA</TableCell>
            <TableCell>Ratio</TableCell>
            <TableCell>Simbolo ARG</TableCell>
            <TableCell>Precio ARG</TableCell>
            <TableCell>CCL </TableCell>
            <TableCell align="right">Dif % CCL AAPL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cedears.map((cedear,i) => (
            <TableRow key={i}>
              <TableCell>{cedear.symbol_usa}</TableCell>
              <TableCell>{cedear.price_usa}</TableCell>
              <TableCell>{cedear.ratio}</TableCell>
              <TableCell>{cedear.symbol_arg}</TableCell>
              <TableCell>{cedear.price_arg}</TableCell>
              <TableCell>{cedear.ccl}</TableCell>
              <TableCell align="right">{`${((cedear.ccl-cedearAAPL.ccl)*100/cedearAAPL.ccl).toFixed(2)}%`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}
