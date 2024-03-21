import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const MENU_STYLE = {
  color:'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar() {
  return (
    <Box sx={{
      widows: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflowX: 'auto',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
      borderBottom: '1px solid white'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={ MENU_STYLE }
          icon={<DashboardIcon />}
          label="Thenam Board"
          clickable
        />

        <Chip
          sx={ MENU_STYLE }
          icon={<VpnLockIcon />}
          label="Public/Private Workspace"
          clickable
        />

        <Chip
          sx={ MENU_STYLE }
          icon={<AddToDriveIcon />}
          label="Add to gogole driver"
          clickable
        />

        <Chip
          sx={ MENU_STYLE }
          icon={<BoltIcon />}
          label="Automation"
          clickable
        />

        <Chip
          sx={ MENU_STYLE }
          icon={<FilterListIcon />}
          label="Filters"
          clickable
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': { borderColor: 'white' }
          }}
          variant="outlined"
          startIcon={<PersonAddIcon />}
        >
          Invite
        </Button>
        <AvatarGroup
          max={5}
          sx={{
            gap: '10px',
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16,
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              '&:first-of-type': { bgcolor: '#a4b0be' }
            }
          }}
        >
          <Tooltip title="thenam">
            <Avatar
              alt="thenam"
              src="https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/433117254_3700507453499199_1214432985275393244_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9IoI6jmm7RAAX_5SjT5&_nc_ht=scontent.fhan18-1.fna&oh=00_AfDcK1FGmEfTdRUlnyzxFer25uXU9hjd4vygL2t1j2cUUg&oe=65FF4C51"
            />
          </Tooltip>
          <Tooltip title="thenam">
            <Avatar
              alt="thenam"
              src="https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/432748568_3698931053656839_5327334813040916548_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6zIOG8mnKKYAX8tF-oc&_nc_ht=scontent.fhan18-1.fna&oh=00_AfDRHkWVu5Euhb5ruvxdgoqyAX714EBcX8l00EDdJUYdFQ&oe=6600C933"
            />
          </Tooltip>
          <Tooltip title="thenam">
            <Avatar
              alt="thenam"
              src="https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/432734634_3698931083656836_1477948903498261742_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=qU3uLHuM_bkAX-L50Cv&_nc_ht=scontent.fhan18-1.fna&oh=00_AfCREL0zGEdV8Sb0ze5bhk825mIB1YYFcXKoydLXCJhtSQ&oe=65FF23A7"
            />
          </Tooltip>
          <Tooltip title="thenam">
            <Avatar
              alt="thenam"
              src="https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/432745012_3698931176990160_778094610449760869_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=FfZMzDngRh8AX9UpVv1&_nc_ht=scontent.fhan18-1.fna&oh=00_AfAYY3cQrRzIIhgPzhzcpO8f2a_FLRu9CCWtzyBGOoVONw&oe=65FFFA59"
            />
          </Tooltip>
          <Tooltip title="thenam">
            <Avatar
              alt="thenam"
              src="https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/433191959_3700507556832522_7525671562870667942_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=hoqwhzL7dMAAX8j9E1v&_nc_ht=scontent.fhan18-1.fna&oh=00_AfABPh-gWMZYPu8pp1gltZYuLHt91tfQA0QcKtbsb9oaaA&oe=65FF4D12"
            />
          </Tooltip>
          <Tooltip title="thenam">
            <Avatar
              alt="thenam"
              src="https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/433117254_3700507453499199_1214432985275393244_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9IoI6jmm7RAAX_5SjT5&_nc_ht=scontent.fhan18-1.fna&oh=00_AfDcK1FGmEfTdRUlnyzxFer25uXU9hjd4vygL2t1j2cUUg&oe=65FF4C51"
            />
          </Tooltip>
          <Tooltip title="thenam">
            <Avatar
              alt="thenam"
              src="https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/432748568_3698931053656839_5327334813040916548_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=6zIOG8mnKKYAX8tF-oc&_nc_ht=scontent.fhan18-1.fna&oh=00_AfDRHkWVu5Euhb5ruvxdgoqyAX714EBcX8l00EDdJUYdFQ&oe=6600C933"
            />
          </Tooltip>
          <Tooltip title="thenam">
            <Avatar
              alt="thenam"
              src="https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/432734634_3698931083656836_1477948903498261742_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=qU3uLHuM_bkAX-L50Cv&_nc_ht=scontent.fhan18-1.fna&oh=00_AfCREL0zGEdV8Sb0ze5bhk825mIB1YYFcXKoydLXCJhtSQ&oe=65FF23A7"
            />
          </Tooltip>
          <Tooltip title="thenam">
            <Avatar
              alt="thenam"
              src="https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/432745012_3698931176990160_778094610449760869_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=FfZMzDngRh8AX9UpVv1&_nc_ht=scontent.fhan18-1.fna&oh=00_AfAYY3cQrRzIIhgPzhzcpO8f2a_FLRu9CCWtzyBGOoVONw&oe=65FFFA59"
            />
          </Tooltip>
          <Tooltip title="thenam">
            <Avatar
              alt="thenam"
              src="https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/433191959_3700507556832522_7525671562870667942_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=hoqwhzL7dMAAX8j9E1v&_nc_ht=scontent.fhan18-1.fna&oh=00_AfABPh-gWMZYPu8pp1gltZYuLHt91tfQA0QcKtbsb9oaaA&oe=65FF4D12"
            />
          </Tooltip>

        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
