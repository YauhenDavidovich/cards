import React, {useState} from 'react';
import {Button} from "../../../../main/ui/commonStyle";

const AddPackModal = () => {
    const [active, setActive] = useState(true);

    return (
        <div>
            <Button onClick={() => setActive(true)}/>
        </div>
    )
}

export default AddPackModal;