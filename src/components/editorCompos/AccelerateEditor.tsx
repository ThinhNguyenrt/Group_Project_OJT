import { View } from "react-native"
import EditButtons from "./EditButton"

const AccelerateEditor = ({
  onAccelerateChange,
}: {
  onAccelerateChange: (mode: boolean) => void
}) => {
  const buttons = [
    { title: "On", onPress: () => onAccelerateChange(true) },
    { title: "Off", onPress: () => onAccelerateChange(false) },
  ]

  return (
    <View>
      <EditButtons buttons={buttons} />
    </View>
  )
}

export default AccelerateEditor
