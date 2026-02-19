import { useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import { pieArcClasses, PieChart, useDrawingArea } from '@mui/x-charts'

import * as motion from 'motion/react-client';
import { useState } from 'react';

/* Base Implementation of the center-labeled pie chart
 * taken from https://mui.com/x/react-charts/pie-demo/
 */

const StyledNumber = styled('text')(() => {
    const isSmall = useMediaQuery('(max-width: 990px)');
    return {
        fill: '#e57200',
        textAnchor: 'middle',
        dominantBaseline: 'central',
        fontSize: isSmall ? '3rem' : '10rem',
        fontFamily: 'ITC Franklin Gothic Std',
        fontWeight: 500,
    }
});

const StyledText = styled('text')(() => {
    const isSmall = useMediaQuery('(max-width: 990px)');
    return {
        fill: '#232d4b',
        textAnchor: 'middle',
        dominantBaseline: 'central',
        fontSize: isSmall ? '1.5rem' : '2rem',
        fontFamily: 'ITC Franklin Gothic Std',
        fontWeight: 'lighter'
    }
});

const PieCenterLabel = (props: {text: string, value: number}) => {
    const { width, height, left, top } = useDrawingArea();
    const isSmall = useMediaQuery('(max-width: 990px)');
    const extraLabelOffset = isSmall ? 40 : 50;
    const extraValueOffset = isSmall ? 20 : 100;

    return (
        <>
            <StyledNumber x={left + width / 2} y={(top + height / 2) - extraValueOffset}>
                {props.value ? props.value : ''}
            </StyledNumber>
            <StyledText x={left + width / 2} y={(top + height / 2) + extraLabelOffset}>
                {props.text ?? 'Baccalaureates By School'}
            </StyledText>
        </>
    );
}

export const UndergradPieChart = () => {
    // hooks and constants
    const isSmall = useMediaQuery('(max-width: 990px)');
    const isLandscape = useMediaQuery('(orientation: landscape)');
    const mobileLandscape = (isSmall && isLandscape);
    const [highlightedData, setHighlightedData] = useState<{value: number, label: string} | null>(null);
    const undergradData = [
        {label: 'Architecture', value: 117},
        {label: 'Arts & Sciences', value: 2668},
        {label: 'Commerce', value: 391},
        {label: 'Continuing & Professional Studies', value: 64},
        {label: 'Education', value: 181},
        {label: 'Engineering', value: 722},
        {label: 'Leadership & Public Policy', value: 98},
        {label: 'Nursing', value: 153},
    ];

    const settings = {
        hideLegend: true
    };

    const colors = (mobileLandscape) ? ['#e57200','#232d4b'] : ['#e57200', '#232d4b', 'white']

    return (
        <>
            <PieChart
                className='degree-chart'
                colors={colors}
                slotProps={{ tooltip: {trigger: 'none'}}}
                onHighlightChange={(highlightedItem) => {
                    if (highlightedItem && highlightedItem.dataIndex !== undefined) {
                        setHighlightedData(undergradData[highlightedItem.dataIndex])
                    }
                }}
                series={[{
                    innerRadius: (mobileLandscape) ? '0%' : '70%',
                    outerRadius: '90%',
                    data: undergradData,
                    highlightScope: {'fade': 'global', 'highlight': 'item'},
                    faded: { color: 'grey' }
                }]}
                sx={!(mobileLandscape) ? { 
                    [`.${pieArcClasses.root}`]: {
                        cursor: 'pointer',
                        stroke: 'black',
                        strokeWidth: '2px'
                    },
                } : {}}
                {...settings}
            > 
                <PieCenterLabel
                    text={highlightedData?.label ?? 'Baccalaureates by School'}
                    value={highlightedData?.value ?? 0}
                />
            </PieChart>
            {mobileLandscape ? 
            <div className='mobile-content-container'>
                <motion.div className='mobile-value franklin-gothic-standard'>{highlightedData?.value ? highlightedData.value : ''}</motion.div>
                <motion.div className='mobile-label franklin-gothic-demi'>{highlightedData?.label ?? 'Baccalaureates by School'}</motion.div>
            </div> : ''}
        </>
    )
}