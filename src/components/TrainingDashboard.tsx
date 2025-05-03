
import React from 'react';
import TrainingMetricChart from './TrainingMetricChart';
import KeyStatsDisplay from './KeyStatsDisplay';
import RunInformation from './RunInformation';

// Mock data for our charts
const generateLossData = () => {
  const data = [];
  for (let i = 0; i < 20; i++) {
    const trainLoss = 2 * Math.exp(-0.18 * i) + 0.5 + (Math.random() * 0.2);
    const valLoss = 2 * Math.exp(-0.15 * i) + 0.8 + (Math.random() * 0.3);
    data.push({
      name: i,
      train: parseFloat(trainLoss.toFixed(3)),
      val: parseFloat(valLoss.toFixed(3))
    });
  }
  return data;
};

const generateAccuracyData = () => {
  const data = [];
  for (let i = 0; i < 20; i++) {
    const trainAcc = 90 - (80 * Math.exp(-0.2 * i)) + (Math.random() * 3 - 1.5);
    const valAcc = 85 - (75 * Math.exp(-0.18 * i)) + (Math.random() * 4 - 2);
    data.push({
      name: i,
      train: parseFloat(trainAcc.toFixed(1)),
      val: parseFloat(valAcc.toFixed(1))
    });
  }
  return data;
};

const generateGpuData = () => {
  const data = [];
  for (let i = 0; i < 40; i++) {
    const utilization = 85 + Math.sin(i * 0.5) * 15 + (Math.random() * 10 - 5);
    data.push({
      name: i * 30, // time in seconds
      utilization: parseFloat(Math.min(100, Math.max(30, utilization)).toFixed(1))
    });
  }
  return data;
};

const generateLRData = () => {
  const data = [];
  const initialLr = 0.1;
  for (let i = 0; i < 20; i++) {
    let lr;
    if (i < 5) {
      lr = initialLr;
    } else if (i < 10) {
      lr = initialLr * 0.1;
    } else if (i < 15) {
      lr = initialLr * 0.01;
    } else {
      lr = initialLr * 0.001;
    }
    data.push({
      name: i,
      lr: lr
    });
  }
  return data;
};

const TrainingDashboard: React.FC = () => {
  // Mock data
  const lossData = generateLossData();
  const accuracyData = generateAccuracyData();
  const gpuData = generateGpuData();
  const lrData = generateLRData();

  return (
    <div className="min-h-screen w-full bg-dashboard-background text-dashboard-foreground p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold mb-6">Training Dashboard</h1>
        
        {/* Run Information */}
        <RunInformation 
          experimentId="exp-resnet18-run-03" 
          status="Running" 
        />
        
        {/* Metric Charts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TrainingMetricChart 
            title="Loss (Train / Validation)" 
            xAxisLabel="Epoch"
            yAxisLabel="Loss"
            data={lossData}
            lines={[
              { key: "train", color: "#636EFA", name: "Training Loss" },
              { key: "val", color: "#FFA15A", name: "Validation Loss" }
            ]}
          />
          <TrainingMetricChart 
            title="Accuracy (Train / Validation)" 
            xAxisLabel="Epoch"
            yAxisLabel="Accuracy (%)"
            data={accuracyData}
            lines={[
              { key: "train", color: "#636EFA", name: "Training Accuracy" },
              { key: "val", color: "#FFA15A", name: "Validation Accuracy" }
            ]}
          />
          <TrainingMetricChart 
            title="GPU Utilization (%)" 
            xAxisLabel="Time (s)"
            yAxisLabel="Utilization (%)"
            data={gpuData}
            lines={[
              { key: "utilization", color: "#00CC96", name: "GPU Utilization" }
            ]}
          />
          <TrainingMetricChart 
            title="Learning Rate" 
            xAxisLabel="Epoch"
            yAxisLabel="Learning Rate"
            data={lrData}
            lines={[
              { key: "lr", color: "#AB63FA", name: "Learning Rate" }
            ]}
          />
        </div>
        
        {/* Key Stats Display */}
        <KeyStatsDisplay
          currentEpoch={15}
          totalEpochs={50}
          eta="~ 1h 25m"
          learningRate={0.0001}
          validationLoss={0.853}
        />
      </div>
    </div>
  );
};

export default TrainingDashboard;
