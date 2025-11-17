import UnifiedModelPicker from "./UnifiedModelPicker";
import CloudTranscriptionModelInput from "./ui/CloudTranscriptionModelInput";

interface WhisperModelPickerProps {
  selectedModel: string;
  onModelSelect: (model: string) => void;
  cloudTranscriptionModel: string;
  onCloudTranscriptionModelChange: (model: string) => void;
  className?: string;
  variant?: "onboarding" | "settings";
}

export default function WhisperModelPicker({
  selectedModel,
  onModelSelect,
  cloudTranscriptionModel,
  onCloudTranscriptionModelChange,
  className = "",
  variant = "settings",
}: WhisperModelPickerProps) {
  const isCloudModel = !selectedModel.startsWith("ggml");

  return (
    <div className={`space-y-4 ${className}`}>
      <UnifiedModelPicker
        selectedModel={selectedModel}
        onModelSelect={onModelSelect}
        modelType="whisper"
        className={className}
        variant={variant}
      />
      {isCloudModel && (
        <CloudTranscriptionModelInput
          value={cloudTranscriptionModel}
          onChange={onCloudTranscriptionModelChange}
        />
      )}
    </div>
  );
}