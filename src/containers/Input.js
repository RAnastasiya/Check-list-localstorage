import React from 'react'
import { connect } from 'react-redux'
import {changeText} from '../actions'

let Input = ({ dispatch }) => {
    let input;

    return (
        <form onSubmit={e => {
            e.preventDefault();
            if (!input.value.trim()) {
                return
            }
            dispatch(changeText(input.value));
        }}>
            <input type="text"  ref={node => {
                input = node
            }} />
            <button type="submit" className="btn-group btn-save"/>
        </form>
    )
};
Input = connect()(Input);

export default Input
