import React from 'react'
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@mui/material/IconButton';
import Close from '@mui/icons-material/Close';
import './swipebutton.css';
function SwipeButton() {
  return (
      <div className='swipebutton'>
          <IconButton  className='swipebutton__repeat'>
              <ReplayIcon fontSize="large"/>
          </IconButton>
          <IconButton className='swipebutton__close'>
              <CloseIcon fontSize="large"/>
          </IconButton>
          <IconButton className='swipebutton__star'>
              <StarRateIcon fontSize="large"/>
          </IconButton>
          <IconButton className='swipebutton__fav'>
              <FavoriteIcon fontSize="large"/>
          </IconButton>
          <IconButton className='swipebutton__flash'>
              <FlashOnIcon fontSize="large"/>
          </IconButton>
      </div>
  )
}

export default SwipeButton