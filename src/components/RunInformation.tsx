
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface RunInformationProps {
  experimentId: string;
  status: 'Running' | 'Completed' | 'Failed';
}

const StatusBadgeColor: Record<string, string> = {
  Running: "bg-blue-600 hover:bg-blue-700",
  Completed: "bg-green-600 hover:bg-green-700",
  Failed: "bg-red-600 hover:bg-red-700"
};

const RunInformation: React.FC<RunInformationProps> = ({
  experimentId,
  status
}) => {
  return (
    <Card className="bg-dashboard-background border-gray-700 shadow-md text-dashboard-foreground">
      <CardContent className="p-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-sm text-gray-400 mr-2">Run:</span>
          <span className="font-medium">{experimentId}</span>
        </div>
        <div className="flex items-center">
          <span className="text-sm text-gray-400 mr-2">Status:</span>
          <Badge className={StatusBadgeColor[status]}>
            {status}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default RunInformation;
