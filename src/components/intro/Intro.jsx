import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import { Button } from '../../lib';
import { Content, Separator, Enum, EnumItem } from '../../lib';

export function Intro() {
    return (
        <Content>
            <div className="jumbo">
                <img src="http://about.colorcode.me/assets/logo-ccd-blue.png" alt="colorcode logo" className="ccd-logo" />
                <div className="jumbo-content">
                    <div>
                        <div className="ccd-name">Colorcode•Design</div>
                        <div className="ccdd-name">an open-source design system</div>
                    </div>
                    <Separator size="10px"></Separator>
                    <div className="ccdd-about">A collection of components and design tools, suitable for web and mobile applications. We have the strong belief that beautiful web development should not be difficult to achieve.</div>
                    <Separator size="10px"></Separator>
                    <Enum>
                        <EnumItem><Link to="/singulier"><Button factor="primary">view components</Button></Link></EnumItem>
                        <EnumItem><Link to="/about"><Button factor="secondary">find out more</Button></Link></EnumItem>
                    </Enum>
                </div>
            </div>
        </Content>
    )
}