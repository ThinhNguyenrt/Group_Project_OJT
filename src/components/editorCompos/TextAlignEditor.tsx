import EditButtons from "./EditButton"
import textalignleft from "../../../assets/icons/text-align/align-left.png"
import textaligncenter from "../../../assets/icons/text-align/align-center.png"
import textalignright from "../../../assets/icons/text-align/align-right.png"
import textalignjustify from "../../../assets/icons/text-align/align-justified.png"

interface TextAlignEditorProps {
  onTextAlignChange: (align: string) => void
}

const TextAlignEditor: React.FC<TextAlignEditorProps> = ({
  onTextAlignChange,
}) => {
  const TextAlignButtons = [
    { icon: textalignleft, onPress: () => handleTextAlignChange("left") },
    { icon: textaligncenter, onPress: () => handleTextAlignChange("center") },
    { icon: textalignright, onPress: () => handleTextAlignChange("right") },
    { icon: textalignjustify, onPress: () => handleTextAlignChange("justify") },
  ]

  const handleTextAlignChange = (newTextAlign: string = "left") => {
    onTextAlignChange(newTextAlign)
  }

  return <EditButtons buttons={TextAlignButtons} />
}

export default TextAlignEditor
