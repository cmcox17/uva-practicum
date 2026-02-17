import { styled } from '@mui/material/styles';
import { pieArcClasses, PieChart, useDrawingArea } from '@mui/x-charts'
import { useState } from 'react';

/* Base Implementation of the center-labeled pie chart
 * taken from https://mui.com/x/react-charts/pie-demo/
 */

const StyledNumber = styled('text')(() => ({
  fill: '#e57200',
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 200,
  fontFamily: 'ITC Franklin Gothic Std',
  fontWeight: 500
}));

const StyledText = styled('text')(() => ({
    fill: '#232d4b',
    textAnchor: 'middle',
    dominantBaseline: 'central',
    fontSize: 45,
    fontFamily: 'ITC Franklin Gothic Std',
    fontWeight: 'lighter'
}));

const PieCenterLabel = (props: {text: string, value: number}) => {
  const { width, height, left, top } = useDrawingArea();
  return (
    <>
        <StyledNumber x={left + width / 2} y={(top + height / 2) - 100}>
            {props.value}
        </StyledNumber>
        <StyledText x={left + width / 2} y={(top + height / 2) + 50}>
            {props.text}
        </StyledText>
    </>
  );
}

export const UndergradPieChart = () => {
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

    return (
        
        <PieChart
            colors={['#e57200', '#232d4b']}
            slotProps={{ tooltip: {trigger: 'none'}}}
            onHighlightChange={(highlightedItem) => {
                if (highlightedItem && highlightedItem.dataIndex !== undefined) {
                    console.log(highlightedItem);
                    setHighlightedData(undergradData[highlightedItem.dataIndex])
                }
            }}
            series={[{
                innerRadius: 375,
                outerRadius: 500,
                data: undergradData,
                highlightScope: {'fade': 'global', 'highlight': 'item'},
                faded: { color: 'grey' }
            }]}
            sx={{
                [`.${pieArcClasses.root}`]: {
                    cursor: 'pointer'
                }
            }}
            {...settings}
        >
            {highlightedData ? 
                <PieCenterLabel
                    text={highlightedData.label}
                    value={highlightedData.value}
            /> : ''}
        </PieChart>
    )
}