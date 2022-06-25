import * as React from 'react';
import Button from '../button';
import "../style";
export default ()=>{
    return (
        <>
            <Button type="primary">
                Primary Button
            </Button>
            &nbsp;
            &nbsp;
            &nbsp;
            <Button>
                Default Button
            </Button>
            &nbsp;
            &nbsp;
            &nbsp;
            <Button type="dashed">
                Dashed Button
            </Button>
            <br></br>
            <br></br>
            <Button type="text">
                Text Button
            </Button>
            &nbsp;
            &nbsp;
            &nbsp;
            <Button type="link">
                Link Button
            </Button>
        </>

    )
}
