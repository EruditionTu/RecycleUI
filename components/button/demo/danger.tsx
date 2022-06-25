import * as React from 'react';
import Button from '../button';
import "../style";
export default ()=>{
    return (
        <>
            <Button type={"primary"} danger>
                Danger Button
            </Button>
            &nbsp;
            &nbsp;
            &nbsp;
            <Button danger>
                Danger Button
            </Button>
            &nbsp;
            &nbsp;
            &nbsp;
            <Button type={"dashed"} danger>
                Danger Button
            </Button>
            <br/>
            <br/>
            <Button type={"primary"} shape={"circle"} danger>
                A
            </Button>
            &nbsp;
            &nbsp;
            &nbsp;
            <Button type={"primary"} shape={"round"} danger>
                Danger Button
            </Button>
            &nbsp;
            &nbsp;
            &nbsp;
            <Button type={"dashed"} danger shape={"circle"}>
                B
            </Button>
            <br/>
            <br/>
            <Button type={"text"} danger>
                Danger Text
            </Button>
            &nbsp;
            &nbsp;
            &nbsp;
            <Button type={"link"} danger>
                Danger Link
            </Button>
        </>
    )
}
