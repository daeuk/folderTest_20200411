import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

// Open Preview: Command + P
// Learn more: https://framer.com/api

export function Buttom(props) {
    const { text, num, tint, ...rest } = props

    return (
        <Frame
            {...rest}
            background={tint}
            borderRadius={num}
            whileHover={{
                scale: 1.1,
            }}
            style={{
                color: "#fff",
                fontSize: 16,
                fontWeight: 600,
            }}
        >
            {text}
        </Frame>
    )
}

Buttom.defaultProps = {
    height: 80,
    width: 240,
    text: "Get started!",
    nun: 8,
    tint: "#0099ff",
}

// Learn more: https://framer.com/api/property-controls/
addPropertyControls(Buttom, {
    text: {
        title: "Text",
        type: ControlType.String,
        defaultValue: "Hello Framer!",
    },
    num: {
        title: "Radius",
        type: ControlType.Number,
        defaultValue: 8,
    },
    tint: {
        title: "Tint",
        type: ControlType.Color,
        defaultValue: "#0099ff",
    },
})
