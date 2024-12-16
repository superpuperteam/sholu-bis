import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProfilePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>
      <Tabs defaultValue="account">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="integrations">Integrations</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
                <CardDescription>Update your account details here</CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" placeholder="Enter your company name" />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="integrations">
            <Card>
              <CardHeader>
                <CardTitle>Connected Platforms</CardTitle>
                <CardDescription>Manage your connected social media and app store accounts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">Facebook</h3>
                      <p className="text-sm text-muted-foreground">Connected</p>
                    </div>
                    <Button variant="outline">Disconnect</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">Twitter</h3>
                      <p className="text-sm text-muted-foreground">Not connected</p>
                    </div>
                    <Button>Connect</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">Google Play Store</h3>
                      <p className="text-sm text-muted-foreground">Connected</p>
                    </div>
                    <Button variant="outline">Disconnect</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="billing">
            <Card>
              <CardHeader>
                <CardTitle>Billing Information</CardTitle>
                <CardDescription>Manage your subscription and payment details</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div>
                    <h3 className="font-semibold">Current Plan</h3>
                    <p className="text-sm text-muted-foreground">Pro Plan - $99/month</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Payment Method</h3>
                    <p className="text-sm text-muted-foreground">Visa ending in 4242</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Update Payment Method</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
    </div>
  )
}

