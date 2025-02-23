import { motion, useTransform } from "framer-motion";
import styled from "styled-components";

export default function NodeCardTimerBar({ isFlipped, isHovered, progress, onNextCardClicked }) {
    const width = useTransform(progress, [0, 1], ['525px', '0px']);
    const opacity = useTransform(progress, [0, 1], [0.2, 0.1]);
    return (
        <StyledMotionTimerBar id="timer-bar"
            $isVisible={!isFlipped}
            $isHovered={isHovered}
            style={{ width, opacity }}
            onUpdate={(animationDef) => {
                if (animationDef.width == "0px") {
                    console.log("animationDef", animationDef);
                    onNextCardClicked();
                }
            }} 
        />
    )
}

const StyledMotionTimerBar = styled(motion.div)`
    width: 100%;
    opacity: .15;
    position: absolute;
    border-radius: 2px;
    filter: ${props => props.$isVisible ? "none" : (props.$isHovered ? "blur-sm" : "blur-md")};
    pointer-events: none;
    height: 4px;
    margin: 0 auto;
    background-color: white;

    top: 100%; 
    left: 50%; 
    transform: translate(-50%, -4px); 
    transform-origin: center center;
`