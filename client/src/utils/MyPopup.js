// Core
import React from 'react';
// Styles
import { Popup } from 'semantic-ui-react';

function MyPopup({ content, children }) {
    return <Popup inverted content={content} trigger={children} />;
}

export default MyPopup;
