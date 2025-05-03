
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface KeyStatsDisplayProps {
  currentEpoch: number;
  totalEpochs: number;
  eta: string;
  learningRate: number;
  validationLoss: number;
}

const KeyStatsDisplay: React.FC<KeyStatsDisplayProps> = ({
  currentEpoch,
  totalEpochs,
  eta,
  learningRate,
  validationLoss
}) => {
  return (
    <Card className="bg-dashboard-background border-gray-700 shadow-md text-dashboard-foreground">
      <CardContent className="p-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex flex-col">
            <span className="text-xs text-gray-400">Current Epoch</span>
            <span className="font-medium">{currentEpoch} / {totalEpochs}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-gray-400">ETA</span>
            <span className="font-medium">{eta}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-gray-400">Current LR</span>
            <span className="font-medium">{learningRate.toExponential(4)}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-gray-400">Validation Loss</span>
            <span className="font-medium">{validationLoss.toFixed(3)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default KeyStatsDisplay;
