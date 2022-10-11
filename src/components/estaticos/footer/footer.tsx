import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material'
import './Footer.css'

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className="Box1">
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" className="textos" gutterBottom >Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.facebook.com/marianadsmelo" target="_blank" rel="noopener noreferrer">
                                <FacebookIcon className="redes" />
                            </a>
                            <a href="https://www.instagram.com/mari_inchains" target="_blank" rel="noopener noreferrer">
                                <InstagramIcon className="redes" />
                            </a>
                            <a href="https://www.linkedin.com/in/marianadsm" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon className="redes" />
                            </a>
                        </Box>
                    </Box>
                    <Box className="Box2" >
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className="textos" >© 2022 Copyright:</Typography>
                        </Box>
                        <Box >
                            <a className="text-decorator-none" target="_blank" href="https://github.com/marianadsm" rel="noopener noreferrer">
                                <Typography  variant="subtitle2" gutterBottom align="center">Mariana Melo</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;