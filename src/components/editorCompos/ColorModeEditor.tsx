import EditButtons from "./EditButton"
import griddots from "../../../assets/icons/color-board/grid-dots.png"
import palette from "../../../assets/icons/color-board/palette.png"
import { useState } from "react"

const ColorModeEditor = ({
  onChangeMode,
}: {
  onChangeMode: (mode: string) => void
}) => {
  const [mode, setMode] = useState("swatches")

  const handleChangeMode = (mode: string) => {
    setMode(mode)
    onChangeMode(mode)
  }

  const ColorMixerButtons = [
    {
      title: "Swatches",
      icon: griddots,
      onPress: () => handleChangeMode("swatches"),
    },
    {
      title: "Color Mixer",
      icon: palette,
      onPress: () => handleChangeMode("mixer"),
    },
  ]

  return <EditButtons buttons={ColorMixerButtons} />
}

export default ColorModeEditor
