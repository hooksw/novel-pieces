import * as React from 'react'
import styled from 'styled-components';
import {ipcRenderer} from 'electron';
import {Channels} from '../../lib/types/ipc-channels';
import {FullScreen} from '../common/styled-componets';
import {useEffect, useState} from 'react';
import {observer} from '../../lib/browser/Observer';
import {Events} from '../../lib/browser/observer-events';

const Container = styled(FullScreen)`
    background:rgba(255,255,255,0.5);
    z-index:300;
`

export function Welcome() {
    return (
        <Container></Container>
    )
}