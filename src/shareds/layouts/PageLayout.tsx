
import { Box }  from '@mui/material';
import { Container } from '@mui/system';
import TopAppBar from '../components/TopAppBar';


type PageLayoutProps = {
    children: JSX.Element[] | JSX.Element
}

export const PageLayout: React.FC<PageLayoutProps> = ( { children } ) =>{

    return (
       <Box>
            <Box>
              <TopAppBar/>  
            </Box>
            <Box>
              <Container>
                  {children}
              </Container>
            </Box>
       </Box>
       
    );
}

