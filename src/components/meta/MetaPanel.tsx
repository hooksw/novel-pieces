import {Meta} from "../../lib/interface/project";
import {FlexCol} from "../../common components/layouts";
import styled from "styled-components";
import * as React from 'react'
import {STIcon} from "../../common components/icons";
import book from '../../assests/icon/book.svg'
import name from '../../assests/icon/name.svg'
import {TextButton} from "../../common components/button/TextButton";

const Container=styled(FlexCol)`
      &>*{
        width:100%;
        user-select: none;
      }
      span{
        text-overflow: ellipsis;
        overflow: hidden;
      }
      width:inherit;
      height: 10rem;
      .head{
        display: flex;
        justify-content: space-between;
      }
      .cr{

      }
      .date{
        font-size: 75%;
      }
`

export function MetaPanel(props:{
    meta:Meta
}) {
    return(
        <Container>
            <div className='head'>
                <span>meta</span>
                <TextButton>edit</TextButton>
            </div>
            <div className='cr'>
                <STIcon src={book} alt='book'/>
                <span className='info'>{props.meta.name}</span>
            </div>
            <div className='cr'>
                <STIcon src={name} alt='author'/>
                <span className='info'>{props.meta.author}</span>
            </div>
            <span className='date'>{props.meta.startTime}</span>
        </Container>
    )
}