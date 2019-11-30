import React, { useState, useEffect } from 'react';
import copy from 'copy-to-clipboard';
import * as tc from 'tinycolor2';
import { ChromePicker } from 'react-color';
import './styles.scss';
import { Container, Enum, EnumItem, Row, Col, Separator } from '../../lib';
import { Heading1, Heading3, Heading2, Text, Heading6 } from '../../lib';
import { TextInput } from '../../lib';
import { ButtonPrimary } from '../../lib';
import { ColorCircle } from '../../lib';
import { ToastContainer } from '../../lib';

export function Palette() {
    const toastRef = React.createRef();

    const [colors, setColors] = useState({
        complement: '#ffffff',
        splitcomplement: [],
        triad: [],
        tetrad: [],
        monochromatic: [],
        analogous: []
    });

    const [color, setColor] = useState('#273b75');
    const [selectedColor, setSelectedColor] = useState('#273b75');

    const computeColors = (i) => {
        let col = i.hex;
        setColor(col);
        setSelectedColor(color);
        if (col.length < 7) return;
        col = tc(col);

        let obj = {};
        obj.complement = col.complement().toHexString();
        obj.splitcomplement = col.splitcomplement().map(i => i.toHexString());
        obj.triad = col.triad().map(i => i.toHexString());
        obj.tetrad = col.tetrad().map(i => i.toHexString());
        obj.monochromatic = col.monochromatic().map(i => i.toHexString());
        obj.analogous = col.analogous().map(i => i.toHexString());
        setColors(obj);
    };

    const copyColor = (color) => {
        copy(color);
        setSelectedColor(color);
        toastRef.current.info(`Copied ${color} to clipboard.`);
    };

    const getrgba = () => {
        return tc(color).complement().setAlpha(0.2).toRgbString();
    }

    useEffect((e) => {
        computeColors({ hex: '#7093f3' });
    }, []);

    return (
        <>
        <ToastContainer ref={toastRef} duration={2000}></ToastContainer>
        <Row factor="dark">
            <Col factor="col-inline col-12 pull-v-center">
                <Container>
                    <Text color="white" size="14px">A short but very good tutorial on color harmonies is available <a href="https://www.tigercolor.com/color-lab/color-theory/color-harmonies.htm" target="_blank" style={{color: '#ffffff', textDecoration: 'underline'}}>here</a>.</Text>
                </Container>
            </Col>
        </Row>

        <Row className="palette-bg">
            <Col factor="col-2 col-md-12">
                <ChromePicker color={color} onChange={computeColors} disableAlpha={true} />
            </Col>
            <Col factor="col-8 col-md-12" className="palette-column">
                <Container className="container palette-container">
                    <Row>
                        <Col factor="col-5 col-md-12">
                            <Heading2>Complement</Heading2>
                            <ColorCircle color={colors.complement} onClick={() => copyColor(colors.complement)}/>
                        </Col>
                        <Col factor="col-7 col-md-12" pull-right="true">
                            <Heading2>Split Complement</Heading2>
                            <div>{colors.splitcomplement.map((color, idx) => <ColorCircle key={idx} color={color} onClick={() => copyColor(color)}/>)}</div>
                        </Col>
                    </Row>
                        
                    <Row>
                        <Col factor="col-5 col-md-12">
                            <Heading2>Triad</Heading2>
                            <div>{colors.triad.map((color, idx) => <ColorCircle key={idx} color={color} onClick={() => copyColor(color)}/>)}</div>
                        </Col>
                        <Col factor="col-7 col-md-12" pull-right="true">
                            <Heading2>Tetrad</Heading2>
                            <div>{colors.tetrad.map((color, idx) => <ColorCircle key={idx} color={color} onClick={() => copyColor(color)}/>)}</div>
                        </Col>
                    </Row>
                    
                    <Heading2>Monochromatic</Heading2>
                    <div className="space-between">{colors.monochromatic.map((color, idx) => <ColorCircle key={idx} color={color} onClick={() => copyColor(color)}/>)}</div>
                    <Heading2>Analogous</Heading2>
                    <div className="space-between">{colors.analogous.map((color, idx) => <ColorCircle key={idx} color={color} onClick={() => copyColor(color)}/>)}</div>
                </Container>
            </Col>

            <Col factor="col-2 col-md-12 dark">
                <Container>
                    <Row>
                        <Col factor="col-12 pull-v-center pull-h-center">
                            <Heading2 factor="condensed">{selectedColor}</Heading2>
                            <ColorCircle color={selectedColor} style={{border: "solid 2px #eeeeee"}}></ColorCircle>
                        </Col>
                    </Row>
                    <Enum factor="column">
                    <Separator size="10px"></Separator>
                    <Heading6 factor="condensed" style={{marginBottom: '3px'}}>HEX String</Heading6>
                    <TextInput factor="block" readOnly={true} value={tc(selectedColor).toHexString()}></TextInput>
                    <Separator size="10px"></Separator>
                    <Heading6 factor="condensed" style={{marginBottom: '3px'}}>HSV String</Heading6>
                    <TextInput factor="block" readOnly={true} value={tc(selectedColor).toHsvString()}></TextInput>
                    <Separator size="10px"></Separator>
                    <Heading6 factor="condensed" style={{marginBottom: '3px'}}>%RGB String</Heading6>
                    <TextInput factor="block" readOnly={true} value={tc(selectedColor).toPercentageRgbString()}></TextInput>
                    <Separator size="10px"></Separator>
                    <Heading6 factor="condensed" style={{marginBottom: '3px'}}>HSL String</Heading6>
                    <TextInput factor="block" readOnly={true} value={tc(selectedColor).toHslString()}></TextInput>
                    </Enum>
                </Container>
            </Col>

        </Row>
        </>
    )
}