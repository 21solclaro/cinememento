import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LoginForm } from "./forms/login-form";
import { SignupForm } from "./forms/signup-form";

export default function Page() {
  return (
    <div className="py-10 px-6 md:px-0 mx-auto max-w-[400px]">
      <Tabs defaultValue="login" className="max-w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">ログイン</TabsTrigger>
          <TabsTrigger value="signup">新規登録</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <LoginForm />
        </TabsContent>
        <TabsContent value="signup">
          <SignupForm />
        </TabsContent>
      </Tabs>
    </div>
  );
}
