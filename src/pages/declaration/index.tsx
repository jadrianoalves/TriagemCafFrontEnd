import { Box, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { width } from '@mui/system'
import React from 'react'
import { PageLayout } from '../../shareds/layouts/PageLayout'


const Declaration: React.FC = () =>{

    return (
        <PageLayout>
            <Box>
                <h1>Autodeclaração de Renda Familiar UFPA</h1>
            </Box>
            
                
                <FormControl fullWidth>
                <Grid container direction="row"
                    justifyContent="flex-start"
                    spacing={2}
                    flex-wrap="wrap"
                    sx={{} }>
                        <Grid item sm={12}>
                            <TextField id="name" label="Nome do declarante" variant="standard" aria-label='Nome do declarante' fullWidth/>
                        </Grid>
                        <Grid item sm={12} >
                            <FormControl fullWidth variant="standard">
                            <InputLabel id="gender">Sexo</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={''}
                                onChange={()=>{}}
                                label="Age"
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                                <MenuItem value={10}>Masculino</MenuItem>
                                <MenuItem value={20}>Feminino</MenuItem>
                        </Select>
                            </FormControl>
                        </Grid>
                    <Grid item sm={12} xs={4} md={2}>    
                        <TextField id="CPF" label="CPF" variant="standard" aria-label='CPF do declarante' type="number" fullWidth/>
                    </Grid>
                    <Grid item sm={12} xs={4} md={4}> 
                        <TextField id="RG" label="RG" variant="standard" aria-label='CPF do declarante' type="number" fullWidth/>
                    </Grid>
                    <Grid item sm={12} xs={1} md={1}>
                            <FormControl fullWidth variant="standard">
                            <InputLabel id="gender">UF</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={''}
                                onChange={()=>{}}
                                label="Age"
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                                <MenuItem value={10}>Masculino</MenuItem>
                                <MenuItem value={20}>Feminino</MenuItem>
                        </Select>
                            </FormControl>
                        </Grid>
                        <Grid item sm={12} xs={2} md={2}>
                            <FormControl fullWidth variant="standard">
                            <InputLabel id="gender">Orgão Expedidor</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={''}
                                onChange={()=>{}}
                                label="Age"
                            >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                                <MenuItem value={10}>Masculino</MenuItem>
                                <MenuItem value={20}>Feminino</MenuItem>
                        </Select>
                            </FormControl>
                        </Grid>
                    <Grid item sm={12} xs={4} md={4}> 
                        <TextField id="UF" label="Emissão" variant="standard" aria-label='CPF do declarante' type="date" placeholder="Expedição" fullWidth/>
                    </Grid>
                </Grid>
                </FormControl>
               
           
        </PageLayout>
    )

}

export default Declaration