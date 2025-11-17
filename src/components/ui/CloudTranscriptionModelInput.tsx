import { Input } from "./input";
import { Label } from "./label";
interface CloudTranscriptionModelInputProps {
  value: string;
  onChange: (value: string) => void;
}

const CloudTranscriptionModelInput = ({
  value,
  onChange,
}: CloudTranscriptionModelInputProps) => {
  return (
    <div className="grid gap-2">
      <Label htmlFor="cloud-transcription-model">Cloud Transcription Model</Label>
      <Input
        id="cloud-transcription-model"
        value={value}
        onChange={(e: any) => onChange(e.target.value)}
        placeholder="e.g., whisper-1"
      />
    </div>
  );
};

export default CloudTranscriptionModelInput;