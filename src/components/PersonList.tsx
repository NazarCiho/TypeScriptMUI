import React from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';

export default class PersonList extends React.Component {
  state = {
    pokemons: []
  }

  componentDidMount() {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20`)
      .then(res => {
        const pokemons = res.data.results; 
        this.setState({ pokemons });
      })
  }
  handleDelete = (name) => {
  this.setState(prevState => ({
    pokemons: prevState.pokemons.filter(pokemon => pokemon.name!== name)  // Filter out the pokemon that has been deleted
  }))
  }
  render() {
    return (
      
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>URL</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              this.state.pokemons.map(pokemon => (
                <TableRow key={pokemon.name}>
                  <TableCell>{pokemon.name}</TableCell>
                  <TableCell>{pokemon.url}</TableCell>
                  <TableCell>
                  <DeleteIcon
                    onClick={() => this.handleDelete(pokemon.name)}
                    style={{cursor: 'pointer'}}
                  />
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    )
  }
}
