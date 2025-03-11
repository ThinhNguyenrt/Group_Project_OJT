import EditButtons from "./EditButton"
import flip_vertical from "../../../assets/icons/flip/flip-vertical.png"
import flip_horizontal from "../../../assets/icons/flip/flip-horizontal.png"
import React from "react"

interface FlipEditorProps {
  onFlipChange: (flip: string) => void
}

const FlipEditor: React.FC<FlipEditorProps> = ({ onFlipChange }) => {
  const handleFlip = (flip: string) => {
    onFlipChange(flip)
  }
  const flipButtons = [
    {
      icon: flip_vertical,
      onPress: () => handleFlip("vertical"),
    },
    {
      icon: flip_horizontal,
      onPress: () => handleFlip("horizontal"),
    },
  ]

  return <EditButtons buttons={flipButtons} />
}

export default FlipEditor
