import { LoginForm } from "./login-form";

export default function Page() {
  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <LoginForm />
    </div>
  );
}
