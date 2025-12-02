import './StatusBar.css';

interface StatusBarProps {
  status: string;
  timestamp: string;
}

export const StatusBar: React.FC<StatusBarProps> = ({ status, timestamp }) => {
  return (
    <div className="status-bar">
      <span className="status-label">Estado:</span>
      <span className="status-value">{status}</span>
      <span className="timestamp">{timestamp}</span>
    </div>
  );
};
