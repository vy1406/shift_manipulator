import React, { Fragment, useState } from "react"
import { Button, GenericModal } from 'npm-shared-shift-publisher'

function Modals() {

    const [isGenericModalOpen, setIsGenericModalOpen] = useState(false)

    const handleOnClick = () => {
        setIsGenericModalOpen(!isGenericModalOpen)
    }

    return (
        <Fragment>
            <Button handleClick={handleOnClick} label={'click me'} />

            <GenericModal
                isOpen={isGenericModalOpen}
                headerText={'Please confirm.'} 
                bodyText={'Are you sure you are not adopted ? '} 
                primaryButtonText={'Yes lol'}
                secondaryButtonText={'No!'}
                primaryButtonClick={() => console.log('do something...')}
                secondaryButtonClick={() => setIsGenericModalOpen(false)}
            />
        </Fragment>
    )
}

export default Modals