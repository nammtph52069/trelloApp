import Box from '@mui/material/Box'
import Column from './Column/Column'
import Button from '@mui/material/Button'
import AddchartIcon from '@mui/icons-material/Addchart'

function ListColumns({ columns }) {

  return (
    <Box sx={{
      bgcolor: 'inherit',
      width: '100%',
      height: '100%',
      display: 'flex',
      overflowX: 'auto',
      overflowY: 'hidden',
      '&::-webkit-scrollbar-track': { m: 2 }
    }}>

      {columns?.map(column => <Column key={column._id} column={column} />)}


      <Box sx={{
        minWidth: '200px',
        maxWidth: '200px',
        height: 'fit-content',
        mx: 2,
        borderRadius: '6px',
        bgcolor: '#ffffff3d'
      }}>
        <Button
          startIcon={ <AddchartIcon /> }
          sx={{
            color: 'white',
            width: '100%',
            justifyContent: 'flex-start',
            pl: 2.5,
            py: 1
          }}
        >
          Add new column
        </Button>
      </Box>
    </Box>
  )
}

export default ListColumns
