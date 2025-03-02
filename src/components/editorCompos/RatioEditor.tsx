import React, { useState } from "react"
import square from "../../../assets/icons/aspect-ratio/square.png"
import rectangle from "../../../assets/icons/aspect-ratio/rectangle.png"
import rectangleVertical from "../../../assets/icons/aspect-ratio/rectangle-vertical.png"
import rectangle9_16 from "../../../assets/icons/aspect-ratio/rectangle-9_16.png"
import rectangle16_9 from "../../../assets/icons/aspect-ratio/rectangle-16_9.png"
import EditButtons from "./EditButton"

interface RatioEditorProps {
  onAspectRatioChange: (aspectRatio: number) => void
}

const RatioEditor: React.FC<RatioEditorProps> = ({ onAspectRatioChange }) => {
  const handleAspectRatio = (newAspectRatio: number = 1) => {
    onAspectRatioChange(newAspectRatio)
  }

  const AspectRatioButtons = [
    {
      icon: square,
      onPress: () => handleAspectRatio(1),
    },
    {
      icon: rectangle,
      onPress: () => handleAspectRatio(4 / 3),
    },
    {
      icon: rectangleVertical,
      onPress: () => handleAspectRatio(3 / 4),
    },
    {
      icon: rectangle9_16,
      onPress: () => handleAspectRatio(9 / 16),
    },
    {
      icon: rectangle16_9,
      onPress: () => handleAspectRatio(16 / 9),
    },
  ]

  return <EditButtons buttons={AspectRatioButtons} />
}

export default RatioEditor
