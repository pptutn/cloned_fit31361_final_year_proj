import * as React from 'react';
import { styled } from '@mui/material/styles';
import "./ExpandableComponent.css";
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box, Stack } from '@mui/material';
import FavouriteButton from '../FavouriteButton';
import { ThreeMpTwoTone } from '@mui/icons-material';
import { ThemeProvider } from '@emotion/react';
import theme from '../../colourScheme';


interface Props {
    suburbName: string;
    postCode: string;
    medianRent: number;
    lowerRent: number;
    upperRent: number;
    onClick?: any;
}

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    }
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '1.0rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function ExpandableComponent(props: Props) {
    const [expanded, setExpanded] = React.useState<string | false>();

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    const rentalWebsite: string = "https://www.domain.com.au/rent/" + props.suburbName + "-vic-" + props.postCode;

    return (
        <div>
            <ThemeProvider theme={theme}>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Box>
                            <Stack
                                padding={2}
                                spacing={3}
                                direction="row">
                                <h2>{props.suburbName}</h2>
                            </Stack>
                        </Box>
                    </AccordionSummary>

                    <AccordionDetails>
                        <div className="searchResult__infoBottom">
                            <p>Average Rent: ${props.medianRent}</p>
                            <p>
                                Rent Range: ${props.lowerRent} to ${props.upperRent}
                            </p>
                            <p>Distance: TBC</p>
                            <p>Average Transit Time: TBC</p>

                            <div className="Suburb__Hyperlink">
                                <p><a href={rentalWebsite}>
                                    Click here to look at rental houses in {props.suburbName}
                                </a></p>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </ThemeProvider>
        </div>
    );
}
