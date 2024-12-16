import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const orders = [
  { id: "ORD001", date: "2023-05-01", plan: "Pro", amount: "$99.00", status: "Active" },
  { id: "ORD002", date: "2023-04-01", plan: "Pro", amount: "$99.00", status: "Active" },
  { id: "ORD003", date: "2023-03-01", plan: "Basic", amount: "$29.00", status: "Expired" },
]

export default function OrdersPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Order History</h1>
      <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Plan</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.plan}</TableCell>
                <TableCell>{order.amount}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
    </div>
  )
}

