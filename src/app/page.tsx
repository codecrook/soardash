import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="space-y-4 md:space-y-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-medium">Overview</h2>
          <p className="text-sm text-muted-foreground">My Cards</p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* Left Column */}
        <div className="space-y-4 md:space-y-6">
          {/* Cards Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card className="p-6 bg-gray-900 text-white">
              <div className="h-[180px]">Card 1</div>
            </Card>
            <Card className="p-6">
              <div className="h-[180px]">Card 2</div>
            </Card>
          </div>

          {/* Weekly Activity */}
          <Card className="p-6">
            <div className="space-y-2">
              <h3 className="font-medium">Weekly Activity</h3>
              <div className="h-[300px]">Chart goes here</div>
            </div>
          </Card>

          {/* Quick Transfer */}
          <Card className="p-6">
            <div className="space-y-2">
              <h3 className="font-medium">Quick Transfer</h3>
              <div className="h-[200px]">Transfer UI goes here</div>
            </div>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-4 md:space-y-6">
          {/* Recent Transactions */}
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Recent Transaction</h3>
                <button className="text-sm text-blue-600">See All</button>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                      <span className="text-orange-600">🏦</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">
                        Deposit from my Card
                      </p>
                      <p className="text-xs text-gray-500">28 January 2021</p>
                    </div>
                  </div>
                  <span className="text-sm text-red-500">-$850</span>
                </div>
                {/* Add more transactions here */}
              </div>
            </div>
          </Card>

          {/* Expense Statistics */}
          <Card className="p-6">
            <div className="space-y-2">
              <h3 className="font-medium">Expense Statistics</h3>
              <div className="h-[300px]">Pie chart goes here</div>
            </div>
          </Card>

          {/* Balance History */}
          <Card className="p-6">
            <div className="space-y-2">
              <h3 className="font-medium">Balance History</h3>
              <div className="h-[200px]">Line chart goes here</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
