import styled from '@emotion/styled';
import { Button, Divider } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import StaffOverloadTable from './StaffOverloadTable'
const ToolBar=styled(Box)(({theme})=>({
    display:'flex',
    justifyContent:'flex-end',
    width:'100%',
    gap:'15px',
    margin:'10px 5px'

}))
const Wrapper=styled(Box)(({theme})=>({
    display:'flex',
    flexDirection:'column',
    width:'100%',
    gap:'15px',
    margin:'10px 5px'

}))
export default function StaffOverload() {
  const navigate=useNavigate()
  const options = {
    filterType: 'multiselect',
    selectableRows:'single',
    rowsPerPage:6,
    rowsPerPageOptions:[6,10,20,40],
    rowHover:false,
    responsive:'scroll',
    customToolbarSelect:(selectedRows, displayData, setSelectedRows) => {
            const status=displayData[selectedRows.data[0].dataIndex].data[5];
            return(status==="Unsigned"?
                    <ToolBar>
                    <Button variant="outlined"
                    color='secondary'
                    onClick={()=>navigate('/staff_overload/agreement')}
                    >Fill the Agreement Form</Button>
                    <Button variant="outlined"
                    color='third'
                    onClick={()=>navigate('/staff_overload/agreement')}
                    >Reject</Button>   
                    </ToolBar>:
                    <ToolBar>
                    <Button variant="outlined"
                    color='secondary'
                    onClick={()=>navigate('/staff_overload/agreement')}
                    >View Agreement Form</Button>
                    <Button variant="outlined"
                    color='third'
                    onClick={()=>navigate('/staff_overload/agreement')}
                    >Print</Button>   
                </ToolBar>
              )}
};
  return (
    <Wrapper>
      <StaffOverloadTable
      data={courseData}
      option={options}
      title="Overload Agreement Forms"
      />
      <Divider/>
    </Wrapper>
  )
}
const courseData = [
 ["dadf","Dec 20,2022","2022", "II","Dec 20,2022-Oct 3,2022","Unsigned"],
 ["dadf","Jan 1,2023","2022", "II","Oct 3,2022-Jan 1,2023","Unsigned"],
 ["dadf","Oct 3,2022","2022","I","Jan 1,2023-May 3,2022","Signed"],
 ["dadf","Jan 4,2023","2022","I","Jan 1,2023-May 3,2022", "Unsigned"],
  ["dadf","Dec 20,2022","2022", "II","Dec 20,2022-Oct 3,2022","Unsigned"],
 ["dadf","Jan 1,2023","2022", "II","Oct 3,2022-Jan 1,2023","Unsigned"],
 ["dadf","Oct 3,2022","2022","I","Jan 1,2023-May 3,2022","Signed"],
 ["dadf","Jan 4,2023","2022","I","Jan 1,2023-May 3,2022", "Unsigned"],
  ["dadf","Dec 20,2022","2022", "II","Dec 20,2022-Oct 3,2022","Unsigned"],
 ["dadf","Jan 1,2023","2022", "II","Oct 3,2022-Jan 1,2023","Unsigned"],
 ["dadf","Oct 3,2022","2022","I","Jan 1,2023-May 3,2022","Signed"],
 ["dadf","Jan 4,2023","2022","I","Jan 1,2023-May 3,2022", "Unsigned"],
 
];
