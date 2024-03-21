import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Card as MuiCard} from '@mui/material'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import GroupIcon from '@mui/icons-material/Group'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'

function Card({ temporaryHideMedia }) {
  if (temporaryHideMedia) {
    return (
      <MuiCard sx={{
        cursor: 'pointer',
        boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
        overflow: 'unset'
      }}>
        <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
          <Typography >Beautifull girl</Typography>
        </CardContent>
      </MuiCard>
    )
  }
  return (
    <MuiCard sx={{
      cursor: 'pointer',
      boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
      overflow: 'unset'
    }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/433117254_3700507453499199_1214432985275393244_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9IoI6jmm7RAAX_5SjT5&_nc_ht=scontent.fhan18-1.fna&oh=00_AfDcK1FGmEfTdRUlnyzxFer25uXU9hjd4vygL2t1j2cUUg&oe=65FF4C51"
        title="green iguana"
      />
      <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
        <Typography >Beautifull girl</Typography>
      </CardContent>
      <CardActions sx={{ p: '0 4px 8px 4px' }}>
        <Button size="small" startIcon={ <GroupIcon /> }>20</Button>
        <Button size="small" startIcon={ <CommentIcon /> }>15</Button>
        <Button size="small" startIcon={ <AttachmentIcon /> }>10</Button>
      </CardActions>
    </MuiCard>
  )
}

export default Card
