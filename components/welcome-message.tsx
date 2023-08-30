import { currentUser } from "@clerk/nextjs";
import { delay } from "@/lib/delay";

export async function WelcomeMessage() {
  const user = await currentUser();

  if (!user) return <div>error</div>;

  return (
    <div className={"mb-4"}>
      <h1 className={"text-2xl"}>
        Welcome,{" "}
        <span
          className={
            "fuchsia-cyan-gradient bg-clip-text font-bold text-transparent"
          }
        >
          {user?.firstName}
        </span>
      </h1>
    </div>
  );
}
