import { mount } from 'messages/MessagesApp';
import React, { useRef, useEffect } from 'react';

export default ( { loggedUser }) => {
    const ref = useRef(null)

    useEffect(() => {
        mount(ref.current, { loggedUser })
    }, []);

    return <div ref={ref} />
}