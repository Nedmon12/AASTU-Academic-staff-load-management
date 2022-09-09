import React from 'react'
import { Button, ButtonGroup, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";

export default function Confirm({log,setLog, message}) {
  return (
     <Dialog
        open={log}
        onClose={()=>setLog(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      
      >
        <DialogTitle id="alert-dialog-title">
          {message}
        </DialogTitle>
        <DialogContent>
        </DialogContent>
        <DialogActions>
            <ButtonGroup
                disableElevation
                variant="contained"
                aria-label="Disabled elevation buttons"
                sx={{
                  bgcolor:'white'
                }}
              >
                <Button disableElevation
                onClick={()=>setLog(false)}
                sx={{
                  bgcolor:'secondary.dark',
                  "&:hover":{
                    bgcolor:'secondary.main'
                  }
                }}>Yes</Button>
                <Button 
                onClick={()=>setLog(false)}
                sx={{
                bgcolor:'gray',
                "&:hover":{
                    bgcolor:'darkGray'
                  }
              }} >Cancel</Button>
          </ButtonGroup>
        </DialogActions>
      </Dialog>
  )
}
